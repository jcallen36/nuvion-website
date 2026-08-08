// Vercel serverless — "form activity" heads-up. Emails David the MOMENT someone STARTS filling
// out an intake form, and again if they enter contact info but LEAVE without submitting
// (abandonment). This is parity with the CLDE site. It is deliberately separate from
// api/contact.js: that one is the real, completed lead; this one is an early/partial heads-up so
// David can chase engaged-but-unfinished visitors. Best-effort, single email, no retry, never
// blocks anything, and never sends the visitor a confirmation.
//
// Routes to the same two inboxes as contact.js (David's ad leads vs. main-site), by `source`.
// Env vars: RESEND_API_KEY, CONTACT_EMAIL_FROM, CONTACT_EMAIL_TO, LEAD_EMAIL_AD (see contact.js).

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function sendResend(payload, apiKey) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 6000);
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timer);
    return r.ok;
  } catch { return false; }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  } catch {
    return res.status(400).json({ error: 'Invalid request.' });
  }
  const { stage, name, email, phone, niche, message, source } = body;

  // Nice-to-have signal — if it isn't configured, silently no-op (never error the visitor's page).
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return res.status(204).end();

  const src = String(source || 'website');
  const isDavid = src.startsWith('david');
  const siteTo  = process.env.CONTACT_EMAIL_TO || 'hello@nuvion-solutions.com';
  const davidTo = process.env.LEAD_EMAIL_AD || siteTo;
  const to   = isDavid ? davidTo : siteTo;
  const from = process.env.CONTACT_EMAIL_FROM || 'Nuvion Website <onboarding@resend.dev>';

  const abandoned = stage === 'abandoned';
  const tag = isDavid ? 'DAVID' : 'SITE';
  const subject = abandoned
    ? `⚠️ ${tag} · form STARTED, not submitted — ${src}${name ? ` · ${name}` : ''}`
    : `✍️ ${tag} · someone STARTED your form — ${src}${name ? ` · ${name}` : ''}`;

  await sendResend({
    from,
    to,
    reply_to: (email && EMAIL_RE.test(email)) ? email : undefined,
    subject,
    text: `
${abandoned
  ? '⚠️ Someone filled out part of the form but LEFT without submitting (possible abandon — worth a reach-out if there\'s a phone/email below).'
  : '✍️ Someone just STARTED filling out the form. Heads-up — a real submission may follow.'}
Source page: ${src}

Name:      ${name || '—'}
Phone:     ${phone || '—'}
Email:     ${email || '—'}
Help with: ${niche || '—'}
${message ? `\nNotes so far:\n${message}\n` : ''}
(This is a form-activity heads-up, NOT a completed lead. If they submit, a separate "LEAD" email arrives.)
    `.trim(),
  }, apiKey);

  return res.status(204).end();
}
