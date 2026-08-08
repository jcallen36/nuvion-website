// Vercel serverless function — emails intake-form leads via Resend.
//
// TWO separate lead streams, so you always know which is which in your inbox:
//   • "David" leads    — from the /david ad pages (source starts with "david")
//                        → sent to LEAD_EMAIL_AD, subject "🎯 DAVID LEAD …",
//                          confirmation is in David's voice + his cell (707) 535-6054.
//   • "Main site" leads — every other form (home, /book, /trades, /for-business,
//                         /plan, /jaeden, service pages)
//                        → sent to CONTACT_EMAIL_TO, subject "🌐 NUVION SITE LEAD …",
//                          confirmation is in the Nuvion team voice + (707) 520-9179.
//
// Every submission does BOTH: (1) emails YOU the lead, (2) emails the person a confirmation.
//
// Reliability: the lead notification is sent with a short retry on transient
// failures (Resend 5xx / network / timeout) so a brief hiccup never drops a
// lead; on a real failure after retries it logs the full lead (recoverable from
// the server logs) and returns 500 so the form tells the visitor to call — it
// never shows a false "thank you" or fires a phantom conversion.
//
// Env vars — set in Vercel (nuvion-website → Settings → Environment Variables):
//   RESEND_API_KEY      (required)  your Resend API key
//   CONTACT_EMAIL_FROM  (required for real delivery) a sender on a domain you've
//                        VERIFIED in Resend → Domains, e.g.
//                        "Nuvion Solutions <hello@nuvion-solutions.com>".
//                        ⚠ Confirmation emails to customers ONLY send from a verified
//                        domain. With the shared "onboarding@resend.dev" fallback,
//                        Resend can only deliver to your own account email — so verify
//                        nuvion-solutions.com (or a send.nuvion-solutions.com subdomain).
//   CONTACT_EMAIL_TO    main-site leads inbox — e.g. "djprudhomme04+nuvion@gmail.com"
//   LEAD_EMAIL_AD       David's leads inbox   — e.g. "djprudhomme04+david@gmail.com"
//                        Both can be the SAME Gmail; the +tag lets Gmail auto-filter,
//                        and the subject lines label them either way.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Customer auto-confirmation email — OFF for now (David's call, 2026-08-08). A confirmation can
// only be delivered from a domain VERIFIED in Resend, and nuvion-solutions.com isn't verified yet,
// so a confirmation from the shared sandbox sender would never reach real customers. Lead
// NOTIFICATIONS to David are unaffected — they deliver fine. To re-enable: verify
// nuvion-solutions.com in Resend → Domains, set CONTACT_EMAIL_FROM to it, then flip this to true.
const SEND_CONFIRMATION = false;

// Send via Resend's REST API with a short retry on transient (5xx / network /
// timeout) failures so a brief hiccup never drops a lead. 4xx is permanent —
// don't waste retries. Returns { ok: true } or { ok: false, reason }.
const SEND_RETRY_DELAYS_MS = [500, 1500];
const SEND_TIMEOUT_MS = 8000;

async function sendResend(payload, apiKey) {
  let lastReason = 'unknown';
  for (let i = 0; i <= SEND_RETRY_DELAYS_MS.length; i++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), SEND_TIMEOUT_MS);
    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (r.ok) return { ok: true };
      // 4xx is a permanent error (bad payload, unverified domain, bad key) — stop.
      if (r.status >= 400 && r.status < 500) return { ok: false, reason: `http_${r.status}` };
      lastReason = `http_${r.status}`;
    } catch (err) {
      clearTimeout(timer);
      lastReason = err && err.name === 'AbortError' ? 'timeout' : 'network';
    }
    const delay = SEND_RETRY_DELAYS_MS[i];
    if (delay !== undefined) await new Promise((res) => setTimeout(res, delay));
  }
  return { ok: false, reason: lastReason };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  } catch {
    return res.status(400).json({ error: 'Invalid request.' });
  }
  const { name, email, phone, niche, message, source, lang } = body;

  if (!name || (!email && !phone)) {
    return res.status(400).json({ error: 'Please include your name and a phone or email.' });
  }
  if (email && !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address.' });
  }

  // Key check AFTER we have the lead in hand — so a missing/expired key still leaves the full
  // lead in the server logs (recoverable) instead of the submission vanishing without a trace.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[contact] RESEND_API_KEY missing — lead NOT emailed. Recover it from this log:', {
      source: source || 'website', name, phone: phone || '—', email: email || '—', niche: niche || '—', message: message || '—',
    });
    return res.status(503).json({ error: 'Email service not configured.' });
  }

  // Two streams: David's own ad-page leads vs. everything on the main company site.
  const src = String(source || 'website');
  const isDavid = src.startsWith('david');

  const siteTo  = process.env.CONTACT_EMAIL_TO || 'hello@nuvion-solutions.com';
  const davidTo = process.env.LEAD_EMAIL_AD || siteTo;
  const to   = isDavid ? davidTo : siteTo;
  const from = process.env.CONTACT_EMAIL_FROM || 'Nuvion Website <onboarding@resend.dev>';

  const subject = isDavid
    ? `🎯 DAVID LEAD · ${src} — ${name}${niche ? ` · ${niche}` : ''}`
    : `🌐 NUVION SITE LEAD · ${src} — ${name}${niche ? ` · ${niche}` : ''}`;

  // 1) Notify YOU of the submission (retried on transient failures).
  const result = await sendResend({
    from,
    to,
    reply_to: email || undefined,
    subject,
    text: `
${isDavid ? '🎯 DAVID LEAD — from a /david ad page' : '🌐 MAIN SITE LEAD — from the main Nuvion site'}
Source page: ${src}

Name:      ${name}
Phone:     ${phone || '—'}
Email:     ${email || '—'}
Help with: ${niche || '—'}

Message:
${message || '—'}
    `.trim(),
  }, apiKey);

  // On a real failure after retries, log the full lead so it's recoverable from
  // the server logs, and tell the visitor to call — never a silent success.
  if (!result.ok) {
    console.error('[contact] Lead email failed after retries — recover the lead from this log:', {
      reason: result.reason,
      source: src,
      name,
      phone: phone || '—',
      email: email || '—',
      niche: niche || '—',
      message: message || '—',
    });
    return res.status(500).json({ error: 'Failed to send. Please try again or call.' });
  }

  // 2) Send the person an instant confirmation (speed-to-lead) — best-effort,
  //    retried, and never blocks the response.
  //    David's leads hear from David; main-site leads hear from the Nuvion team.
  if (SEND_CONFIRMATION && email && EMAIL_RE.test(email)) {
    const firstName = String(name).trim().split(/\s+/)[0] || name;
    const es = lang === 'es';
    const phoneOut = isDavid ? '(707) 535-6054' : '(707) 520-9179';
    await sendResend({
      from,
      to: email,
      reply_to: to,
      subject: isDavid
        ? (es ? 'Recibí tu mensaje — David de Nuvion Solutions' : 'Got your message — David at Nuvion Solutions')
        : (es ? 'Gracias por escribirnos — Nuvion Solutions' : 'Thanks for reaching out — Nuvion Solutions'),
      text: isDavid
        ? (es
          ? `Hola ${firstName},

Gracias por escribir — soy David de Nuvion Solutions. Recibí tu mensaje y te responderé personalmente hoy, normalmente dentro de la hora.

Si es más fácil, llámame o escríbeme directamente al ${phoneOut}.

Hablamos pronto,
David
Nuvion Solutions · Sonoma County`
          : `Hi ${firstName},

Thanks for reaching out — this is David from Nuvion Solutions. I got your message and I'll personally get back to you today, usually within the hour.

If it's easier, call or text me directly at ${phoneOut}.

Talk soon,
David
Nuvion Solutions · Sonoma County`)
        : (es
          ? `Hola ${firstName},

Gracias por escribirnos a Nuvion Solutions. Recibimos tu mensaje y te responderemos hoy mismo, normalmente dentro de la hora.

Si prefieres, llámanos o escríbenos al ${phoneOut}.

Hablamos pronto,
El equipo de Nuvion Solutions
Sonoma County`
          : `Hi ${firstName},

Thanks for reaching out to Nuvion Solutions. We got your message and we'll get back to you today, usually within the hour.

If it's easier, call or text us at ${phoneOut}.

Talk soon,
The Nuvion Solutions team
Sonoma County`),
    }, apiKey);
  }

  return res.status(200).json({ ok: true });
}
