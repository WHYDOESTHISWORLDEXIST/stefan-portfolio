import { env } from 'cloudflare:workers';
import { contactSubmissionsSchema } from '../../../db/schema';

type ContactPayload = { name?: unknown; email?: unknown; message?: unknown; newsletter?: unknown; website?: unknown };

type ContactEnvironment = {
  DB: D1Database;
  RESEND_API_KEY?: string;
  CONTACT_FROM_EMAIL?: string;
};

const CONTACT_EMAIL = 'stefan.cutler@gmail.com';

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

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${runtimeEnv.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
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
  });

  if (!response.ok) {
    const details = await response.text();
    console.error('[contact] Resend rejected the email', response.status, details);
    throw new Error('Email delivery failed.');
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
    const db = runtimeEnv.DB;
    await db.prepare(contactSubmissionsSchema).run();
    await db.prepare('INSERT INTO contact_submissions (name, email, message, newsletter_opt_in) VALUES (?, ?, ?, ?)')
      .bind(name, email, message, newsletter)
      .run();

    await sendContactEmail(runtimeEnv, {
      name,
      email,
      message,
      newsletter: newsletter === 1,
    });

    return Response.json({ message: 'Thanks — your message has been received.' }, { status: 201 });
  } catch (error) {
    console.error('[contact] Submission failed', error);
    return Response.json({ message: 'The form is temporarily unavailable. You can email Stefan directly instead.' }, { status: 500 });
  }
}
