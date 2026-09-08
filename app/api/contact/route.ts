import { env } from 'cloudflare:workers';
import { contactSubmissionsSchema } from '../../../db/schema';

type ContactPayload = { name?: unknown; email?: unknown; message?: unknown; newsletter?: unknown; website?: unknown };

type ContactEnvironment = {
  DB: D1Database;
  RESEND_API_KEY?: string;
  RESEND_NEWSLETTER_SEGMENT_ID?: string;
  CONTACT_FROM_EMAIL?: string;
};

const CONTACT_EMAIL = 'stefan.cutler@gmail.com';
const OPERATION_TIMEOUT_MS = 6_000;

class OperationTimeoutError extends Error {
  constructor(operation: string) {
    super(`${operation} timed out.`);
    this.name = 'OperationTimeoutError';
  }
}

async function withTimeout<T>(operation: string, task: Promise<T>, timeoutMs = OPERATION_TIMEOUT_MS) {
  let timeout: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      task,
      new Promise<never>((_, reject) => {
        timeout = setTimeout(() => reject(new OperationTimeoutError(operation)), timeoutMs);
      }),
    ]);
  } finally {
    if (timeout) clearTimeout(timeout);
  }
}

async function resendFetch(url: string, init: RequestInit, operation: string) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(new OperationTimeoutError(operation)), OPERATION_TIMEOUT_MS);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

function resendHeaders(apiKey: string) {
  return {
    authorization: `Bearer ${apiKey}`,
    'content-type': 'application/json',
    'user-agent': 'StefanPortfolio/1.0',
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

async function sendContactEmail(
  runtimeEnv: ContactEnvironment,
  submission: { name: string; email: string; message: string; newsletter: boolean },
) {
  if (!runtimeEnv.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is not configured.');
  }

  const response = await resendFetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: resendHeaders(runtimeEnv.RESEND_API_KEY),
    body: JSON.stringify({
      from: runtimeEnv.CONTACT_FROM_EMAIL || "Stefan's Portfolio <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      reply_to: submission.email,
      subject: `Portfolio message from ${submission.name}`,
      html: `
        <h1>New portfolio contact</h1>
        <p><strong>Name:</strong> ${escapeHtml(submission.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(submission.email)}</p>
        <p><strong>Newsletter opt-in:</strong> ${submission.newsletter ? 'Yes' : 'No'}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(submission.message).replaceAll('\n', '<br>')}</p>
      `,
      text: [
        'New portfolio contact',
        `Name: ${submission.name}`,
        `Email: ${submission.email}`,
        `Newsletter opt-in: ${submission.newsletter ? 'Yes' : 'No'}`,
        '',
        submission.message,
      ].join('\n'),
    }),
  }, 'Contact email');

  if (!response.ok) {
    const details = await response.text();
    console.error('[contact] Resend rejected the email', response.status, details);
    throw new Error('Email delivery failed.');
  }
}

async function subscribeToNewsletter(
  runtimeEnv: ContactEnvironment,
  subscriber: { name: string; email: string },
) {
  const apiKey = runtimeEnv.RESEND_API_KEY;
  const segmentId = runtimeEnv.RESEND_NEWSLETTER_SEGMENT_ID;
  if (!apiKey || !segmentId) {
    throw new Error('The newsletter contact list is not configured.');
  }

  const createResponse = await resendFetch('https://api.resend.com/contacts', {
    method: 'POST',
    headers: resendHeaders(apiKey),
    body: JSON.stringify({
      email: subscriber.email,
      first_name: subscriber.name,
      unsubscribed: false,
      segments: [{ id: segmentId }],
    }),
  }, 'Newsletter signup');

  // A repeat signup can already exist as a global Resend contact.
  if (!createResponse.ok && createResponse.status !== 409) {
    const details = await createResponse.text();
    console.error('[contact] Resend rejected the newsletter contact', createResponse.status, details);
    throw new Error('Newsletter signup failed.');
  }

  if (createResponse.status === 409) {
    const segmentResponse = await resendFetch(
      `https://api.resend.com/contacts/${encodeURIComponent(subscriber.email)}/segments/${segmentId}`,
      { method: 'POST', headers: resendHeaders(apiKey) },
      'Newsletter segment signup',
    );

    if (!segmentResponse.ok && segmentResponse.status !== 409) {
      const details = await segmentResponse.text();
      console.error('[contact] Resend rejected the segment membership', segmentResponse.status, details);
      throw new Error('Newsletter signup failed.');
    }
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as ContactPayload;
    if (body.website) return Response.json({ message: 'Thanks — your message has been received.' });

    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';
    const newsletter = body.newsletter === 'yes' ? 1 : 0;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || name.length > 100 || !emailPattern.test(email) || email.length > 254 || !message || message.length > 2000) {
      return Response.json({ message: 'Please check your name, email, and message.' }, { status: 400 });
    }

    const runtimeEnv = env as unknown as ContactEnvironment;
    const saveSubmission = async () => {
      const db = runtimeEnv.DB;
      await db.prepare(contactSubmissionsSchema).run();
      await db.prepare('INSERT INTO contact_submissions (name, email, message, newsletter_opt_in) VALUES (?, ?, ?, ?)')
        .bind(name, email, message, newsletter)
        .run();
    };

    const operations = await Promise.allSettled([
      withTimeout('Saving contact submission', saveSubmission()),
      sendContactEmail(runtimeEnv, { name, email, message, newsletter: newsletter === 1 }),
      newsletter === 1
        ? subscribeToNewsletter(runtimeEnv, { name, email })
        : Promise.resolve(),
    ]);

    const [storageResult, emailResult, newsletterResult] = operations;
    if (storageResult.status === 'rejected') console.error('[contact] Storage operation failed', storageResult.reason);
    if (emailResult.status === 'rejected') console.error('[contact] Email operation failed', emailResult.reason);
    if (newsletterResult.status === 'rejected') console.error('[contact] Newsletter operation failed', newsletterResult.reason);

    if (storageResult.status === 'rejected' && emailResult.status === 'rejected') {
      return Response.json(
        { message: 'The form is temporarily unavailable. You can email Stefan directly instead.' },
        { status: 503 },
      );
    }

    const newsletterWarning = newsletter === 1 && newsletterResult.status === 'rejected'
      ? ' Your message was received, but newsletter signup could not be completed. Please try signing up again later.'
      : '';
    return Response.json(
      { message: `Thanks — your message has been received.${newsletterWarning}` },
      { status: emailResult.status === 'fulfilled' ? 201 : 202 },
    );
  } catch (error) {
    console.error('[contact] Submission failed', error);
    return Response.json({ message: 'The form is temporarily unavailable. You can email Stefan directly instead.' }, { status: 500 });
  }
}
