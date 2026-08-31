import { env } from 'cloudflare:workers';
import { contactSubmissionsSchema } from '../../../db/schema';

type ContactPayload = { name?: unknown; email?: unknown; message?: unknown; newsletter?: unknown; website?: unknown };

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

    const db = env.DB as D1Database;
    await db.prepare(contactSubmissionsSchema).run();
    await db.prepare('INSERT INTO contact_submissions (name, email, message, newsletter_opt_in) VALUES (?, ?, ?, ?)')
      .bind(name, email, message, newsletter)
      .run();

    return Response.json({ message: 'Thanks — your message has been received.' }, { status: 201 });
  } catch {
    return Response.json({ message: 'The form is temporarily unavailable. You can email Stefan directly instead.' }, { status: 500 });
  }
}
