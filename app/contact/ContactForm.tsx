'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setStatus('');
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || 'Please try again.');
      form.reset();
      setStatus('Thanks — your message has been received.');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="contactForm" onSubmit={submit}>
      <div className="field"><label htmlFor="name">Name</label><input id="name" name="name" autoComplete="name" maxLength={100} required /></div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" maxLength={254} required /></div>
      <div className="field"><label htmlFor="message">What would you like to talk about?</label><textarea id="message" name="message" maxLength={2000} required /></div>
      <div className="fieldTrap" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <label className="consent">
        <input name="newsletter" type="checkbox" value="yes" />
        <span><strong>Send me occasional updates</strong><small>Optional. Check this if you want recurring emails about new projects, writing, and updates. You can unsubscribe anytime.</small></span>
      </label>
      <button className="submitButton" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'}</button>
      <p className="privacyNote">Your details are used only to respond to your message and, if selected, send occasional updates. <a href="/privacy">Read the Privacy Policy.</a></p>
      {status ? <p className="formStatus" role="status" aria-live="polite">{status}</p> : null}
    </form>
  );
}
