import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

// n8n webhook URL for the "call me now" demo. Configurable via Vercel env var
// (set VITE_DEMO_WEBHOOK_URL on the website's Vercel project, then redeploy).
// Default points at our n8n instance on Zeabur — change there if the host moves.
const DEMO_CALL_ENDPOINT = import.meta.env.VITE_DEMO_WEBHOOK_URL
  || 'https://nuvion-n8n.zeabur.app/webhook/public-demo-call';

const DEMO_NICHES = [
  { value: 'plumbing', label: 'Plumbing', available: true },
  { value: 'hvac', label: 'HVAC', available: false },
  { value: 'electrical', label: 'Electrical', available: false },
  { value: 'garage_door', label: 'Garage Door', available: false },
  { value: 'roofing', label: 'Roofing', available: false },
];

const CSS = BASE_CSS + FOOTER_CSS + `
/* Section index (homepage vocabulary) */
.ar-index{display:flex;align-items:baseline;gap:10px;font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);margin-bottom:20px}
.ar-index::after{content:'';flex:1;height:1px;background:var(--hairline);align-self:center}

/* LAYOUT — phone spec sheet beside the capabilities index */
.ar-layout{display:grid;grid-template-columns:1fr;gap:48px;align-items:start;padding:clamp(40px,6vw,72px) 0 0}
@media(min-width:880px){.ar-layout{grid-template-columns:5fr 7fr;gap:clamp(48px,6vw,80px)}}

/* PHONE — a printed spec sheet of one call */
.ar-phone{max-width:340px;width:100%;margin:0 auto}
@media(min-width:880px){.ar-phone{margin:0;position:sticky;top:96px}}
.ar-frame{background:var(--card);border:1px solid var(--hairline);border-top:2px solid var(--petrol);border-radius:14px;padding:22px 20px 20px;box-shadow:var(--shadow-2)}
.ar-phone-bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:6px 12px;padding-bottom:14px;border-bottom:1px solid var(--hairline);margin-bottom:16px}
.ar-phone-caller{font-family:var(--mono);font-size:.64rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted-2);white-space:nowrap}
.ar-phone-tag{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:.62rem;letter-spacing:.08em;text-transform:uppercase;color:var(--petrol);white-space:nowrap}
.ar-phone-tag::before{content:'';width:6px;height:6px;border-radius:50%;background:var(--petrol);flex-shrink:0;animation:livePulse 1.6s infinite ease-in-out}
@keyframes livePulse{0%,100%{opacity:1}50%{opacity:.35}}
.ar-messages{display:flex;flex-direction:column;gap:10px;min-height:220px}
.ar-msg{max-width:86%;padding:10px 13px;font-size:.8rem;line-height:1.55;color:var(--ink)}
.ar-msg-in{background:var(--bone);border:1px solid var(--hairline);border-radius:10px 10px 10px 2px;align-self:flex-start}
.ar-msg-ai{background:rgba(14,95,99,.08);border:1px solid rgba(14,95,99,.16);border-radius:10px 10px 2px 10px;align-self:flex-end}
.ar-badges{display:flex;gap:8px;flex-wrap:wrap;margin-top:18px;padding-top:16px;border-top:1px solid var(--hairline)}
.ar-badge{font-family:var(--mono);font-size:.6rem;letter-spacing:.1em;text-transform:uppercase;padding:5px 10px;border-radius:4px;border:1px solid var(--hairline);background:var(--paper);color:var(--muted-2)}
.ar-badge.booked{color:var(--petrol);border-color:rgba(14,95,99,.3);background:rgba(14,95,99,.08)}

/* CAPABILITIES — ruled index rows */
.ar-caps-title{font-family:var(--serif);font-size:clamp(1.5rem,2.6vw,2rem);font-weight:700;letter-spacing:-.015em;line-height:1.12;margin-bottom:24px}
.ar-caps{border-top:1px solid var(--hairline)}
.ar-cap{display:grid;grid-template-columns:44px 1fr;gap:4px 16px;padding:18px 6px;border-bottom:1px solid var(--hairline);transition:background .18s,padding-left .18s}
.ar-cap:hover{background:var(--card);padding-left:14px}
.ar-cap-num{font-family:var(--mono);font-size:.72rem;color:var(--petrol);font-variant-numeric:tabular-nums;padding-top:4px}
.ar-cap-title{font-family:var(--serif);font-size:1.08rem;font-weight:700;letter-spacing:-.01em;line-height:1.3}
.ar-cap-desc{grid-column:2;font-size:.88rem;color:var(--muted-2);line-height:1.62;max-width:58ch}

/* PLANS */
.ar-plans{margin-top:clamp(56px,7vw,96px);padding:clamp(56px,7vw,96px) 0 clamp(56px,7vw,88px);border-top:1px solid var(--hairline)}
.ar-plans-title{font-family:var(--serif);font-size:clamp(1.9rem,3.4vw,2.8rem);font-weight:700;letter-spacing:-.018em;line-height:1.08;margin-bottom:16px;max-width:24ch}
.ar-plans-sub{color:var(--muted-2);font-size:.98rem;line-height:1.68;max-width:58ch;margin:0 0 44px}
.ar-plans-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;align-items:stretch}
.ar-plan{position:relative;padding:30px 28px 26px;display:flex;flex-direction:column;transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out)}
.ar-plan:hover{transform:translateY(-4px);box-shadow:var(--shadow-2)}
.ar-plan.featured{border-top:2px solid var(--petrol)}
.ar-plan-head{display:flex;justify-content:space-between;align-items:baseline;gap:12px;margin-bottom:14px}
.ar-plan-name{font-family:var(--mono);font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted-2)}
.ar-plan-badge{font-family:var(--mono);font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:var(--petrol);white-space:nowrap}
.ar-plan-price{display:flex;align-items:baseline;gap:6px;margin-bottom:6px}
.ar-plan-price-num{font-family:var(--serif);font-size:2.5rem;font-weight:700;letter-spacing:-.02em;line-height:1;font-variant-numeric:tabular-nums}
.ar-plan-price-suffix{font-size:.88rem;color:var(--muted-2)}
.ar-plan-yearly{font-family:var(--mono);font-size:.68rem;letter-spacing:.04em;color:var(--muted-2);margin-bottom:18px}
.ar-plan-yearly strong{color:var(--petrol);font-weight:400}
.ar-plan-tagline{font-size:.9rem;color:var(--ink);line-height:1.6;padding-bottom:18px;border-bottom:1px solid var(--hairline);margin-bottom:6px}
.ar-plan-features{list-style:none;display:flex;flex-direction:column;margin-bottom:20px;flex:1}
.ar-plan-feature{display:flex;gap:12px;align-items:baseline;padding:9px 0;font-size:.85rem;color:var(--ink);line-height:1.5;border-bottom:1px solid var(--hairline)}
.ar-plan-feature::before{content:'—';color:var(--petrol);font-family:var(--mono);font-size:.75rem;flex-shrink:0}
.ar-plan-minutes{font-family:var(--mono);font-size:.66rem;letter-spacing:.05em;color:var(--muted-2);padding-top:16px;border-top:1px solid var(--hairline);margin-top:auto}

/* TRIAL CALLOUT */
.ar-trial{margin-top:48px;padding:32px 34px;border-left:2px solid var(--petrol);max-width:760px}
.ar-trial-tag{display:block;font-family:var(--mono);font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);margin-bottom:12px}
.ar-trial h3{font-family:var(--serif);font-size:1.5rem;font-weight:700;letter-spacing:-.015em;margin-bottom:10px}
.ar-trial p{color:var(--muted-2);font-size:.92rem;line-height:1.68;max-width:66ch}

@media(max-width:900px){
  .ar-plans-grid{grid-template-columns:1fr;gap:16px}
}

/* CTA inner alignment */
.sp-cta-in{max-width:1076px;margin:0 auto}

/* ── LIVE DEMO WIDGET ─────────────────────────────────────── */
.ar-demo{margin-top:clamp(48px,6vw,72px);max-width:720px;padding:36px 34px 32px;border-top:2px solid var(--petrol)}
.ar-demo-eyebrow{display:inline-flex;align-items:center;gap:9px;font-family:var(--mono);font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);margin-bottom:18px}
.ar-demo-pulse{width:7px;height:7px;border-radius:50%;background:var(--petrol);box-shadow:0 0 0 0 rgba(14,95,99,.45);animation:demoPulse 2s infinite ease}
@keyframes demoPulse{0%{box-shadow:0 0 0 0 rgba(14,95,99,.45)}70%{box-shadow:0 0 0 9px rgba(14,95,99,0)}100%{box-shadow:0 0 0 0 rgba(14,95,99,0)}}
.ar-demo-title{font-family:var(--serif);font-size:clamp(1.45rem,2.6vw,1.85rem);font-weight:700;letter-spacing:-.015em;line-height:1.15;margin-bottom:10px}
.ar-demo-title em{font-style:italic;font-weight:400;color:var(--petrol)}
.ar-demo-sub{color:var(--muted-2);font-size:.94rem;line-height:1.65;max-width:56ch;margin-bottom:24px}
.ar-demo-form{display:flex;flex-direction:column;gap:14px}
.ar-demo-row{display:grid;grid-template-columns:1fr 1.5fr;gap:10px}
@media(max-width:560px){.ar-demo-row{grid-template-columns:1fr}}
.ar-demo-niche{appearance:none;-webkit-appearance:none;background-color:var(--paper);background-image:linear-gradient(45deg,transparent 50%,var(--muted-2) 50%),linear-gradient(135deg,var(--muted-2) 50%,transparent 50%);background-position:calc(100% - 18px) center,calc(100% - 13px) center;background-size:5px 5px,5px 5px;background-repeat:no-repeat;border:1px solid var(--hairline);border-radius:6px;padding:14px 36px 14px 14px;font-family:var(--sans);font-size:1rem;color:var(--ink);cursor:pointer;outline:none;transition:border-color .2s}
.ar-demo-niche:hover{border-color:var(--muted-2)}
.ar-demo-niche:focus{border-color:var(--petrol)}
.ar-demo-input-wrap{display:flex;align-items:stretch;background:var(--paper);border:1px solid var(--hairline);border-radius:6px;overflow:hidden;transition:border-color .2s}
.ar-demo-input-wrap:focus-within{border-color:var(--petrol)}
.ar-demo-prefix{display:flex;align-items:center;padding:0 14px;background:var(--bone);color:var(--muted-2);font-family:var(--mono);font-size:.85rem;border-right:1px solid var(--hairline)}
.ar-demo-input{flex:1;border:none;outline:none;padding:14px 16px;font-family:var(--sans);font-size:1rem;color:var(--ink);background:transparent;letter-spacing:.02em;min-width:0;font-variant-numeric:tabular-nums}
.ar-demo-input::placeholder{color:var(--muted-2);opacity:.55}
.ar-demo-consent{display:flex;gap:12px;align-items:flex-start;padding:13px 2px;border-top:1px solid var(--hairline);border-bottom:1px solid var(--hairline);cursor:pointer}
.ar-demo-consent input{accent-color:var(--petrol);width:15px;height:15px;margin-top:3px;flex-shrink:0;cursor:pointer}
.ar-demo-consent span{font-size:.78rem;color:var(--muted-2);line-height:1.55;max-width:66ch}
.ar-demo-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;background:var(--ink);color:var(--paper);border:1px solid var(--ink);border-radius:6px;padding:15px 22px;font-family:var(--sans);font-size:.95rem;font-weight:600;letter-spacing:.01em;cursor:pointer;box-shadow:var(--shadow-1);transition:background .18s var(--ease-out),border-color .18s var(--ease-out),transform .18s var(--ease-out),box-shadow .18s var(--ease-out)}
.ar-demo-btn:hover:not(:disabled){background:var(--petrol-deep);border-color:var(--petrol-deep);transform:translateY(-1px);box-shadow:var(--shadow-2)}
.ar-demo-btn:disabled{opacity:.45;cursor:not-allowed;transform:none;box-shadow:none}
.ar-demo-btn-icon{width:18px;height:18px}
.ar-demo-fineprint{color:var(--muted-2);font-size:.76rem;line-height:1.55;margin-top:2px;max-width:66ch}
.ar-demo-error{background:var(--bone);border:1px solid var(--hairline);border-left:2px solid var(--petrol-deep);color:var(--ink);padding:12px 16px;border-radius:4px;font-size:.85rem;line-height:1.6;max-width:66ch}
.ar-demo-success{padding:6px 0 2px}
.ar-demo-success-tag{display:block;font-family:var(--mono);font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);margin-bottom:12px}
.ar-demo-success h3{font-family:var(--serif);font-size:1.5rem;font-weight:700;letter-spacing:-.015em;margin-bottom:10px}
.ar-demo-success p{color:var(--muted-2);font-size:.93rem;line-height:1.65;max-width:52ch}
.ar-demo-success-again{margin-top:22px;background:transparent;border:1px solid var(--ink);color:var(--ink);padding:11px 18px;border-radius:6px;font-family:var(--sans);font-size:.85rem;font-weight:600;cursor:pointer;transition:background .18s var(--ease-out),color .18s var(--ease-out)}
.ar-demo-success-again:hover{background:var(--ink);color:var(--paper)}
`;

const CAPS = [
  { title: 'Answers every call, 24/7', desc: 'Customers never hear a busy signal or voicemail again. Your front desk picks up instantly — even at 2 a.m. on a holiday.' },
  { title: 'Trained on your business', desc: 'Knows your services, pricing, hours, service area, brands you install, and the FAQs your real customers ask. Sounds like it actually works there.' },
  { title: 'Books jobs straight to your calendar', desc: 'Picks the right slot length per appointment type, syncs to ServiceTitan, Housecall Pro, Jobber, Google Calendar — whatever you already use.' },
  { title: 'Triages emergencies', desc: 'Recognizes urgent situations (active leak, gas, no water) and either books an emergency slot or transfers to your on-call line — your call, your rules.' },
  { title: 'Outbound automations', desc: 'Sends appointment reminders, post-job follow-ups, and review requests via SMS or email. More booked jobs, fewer no-shows, higher Google rating on autopilot.' },
  { title: 'Smart job acceptance', desc: 'When your calendar’s busy, the AI prioritizes the jobs you want most and politely refers the rest. Emergencies always go through. Toggle any time.' },
];

const PLANS = [
  {
    name: 'Basic',
    price: '297',
    yearly: '$2,673/yr',
    yearlyDelta: 'Save 3 months',
    tagline: '24/7 call answering, captures every lead, books simple appointments.',
    minutes: '400 voice minutes/mo · $0.30/min after',
    features: [
      'Answers every call professionally',
      'Captures name, number, address, reason for call',
      'Books simple appointments to your calendar',
      'Text summary of every call sent to you',
      '24/7 support — real human within 24h if needed',
    ],
  },
  {
    name: 'Premium',
    price: '397',
    yearly: '$3,573/yr',
    yearlyDelta: 'Save 3 months',
    featured: true,
    tagline: 'Everything in Basic, plus a domain-trained AI that handles the calls Basic can’t.',
    minutes: '600 voice minutes/mo · $0.30/min after',
    features: [
      'Everything in Basic',
      'Domain-trained on your services, pricing, brands',
      'Emergency triage — urgent vs routine',
      'Outbound appointment reminders',
      'Outbound quote follow-ups',
      'Monthly performance dashboard',
    ],
  },
  {
    name: 'Grow & Scale',
    price: '597',
    yearly: '$5,373/yr',
    yearlyDelta: 'Save 3 months',
    tagline: 'Everything in Premium, plus the tools to actually grow revenue per call.',
    minutes: '800 voice minutes/mo · $0.30/min after',
    features: [
      'Everything in Premium',
      'Smart job acceptance — prioritize jobs you want',
      'In-call upsell suggestions based on context',
      'Automated post-job review requests',
      'Rebooking nudges for recurring services',
    ],
  },
];

function LiveDemoWidget() {
  const [phone, setPhone] = useState('');
  const [niche, setNiche] = useState('plumbing');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');
  const [consent, setConsent] = useState(false);

  function formatPhone(v) {
    const d = (v || '').replace(/\D/g, '').slice(0, 10);
    if (d.length < 4) return d;
    if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  }
  function isValid(v) {
    return (v || '').replace(/\D/g, '').length === 10;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isValid(phone)) { setError('Please enter a valid 10-digit US number.'); return; }
    setError('');
    setStatus('submitting');
    try {
      const res = await fetch(DEMO_CALL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: '+1' + phone.replace(/\D/g, ''), niche, tcpa_consent: true }),
      });
      const j = await res.json().catch(() => ({}));
      // Treat as failure if EITHER the HTTP status indicates an error OR the
      // body explicitly says ok:false. n8n's Respond-to-Webhook responseCode
      // expression sometimes evaluates to 200 even when the body carries
      // a rate-limit / validation error — the body's ok flag is the
      // authoritative signal.
      const failed = !res.ok || j.ok === false || j.error;
      if (failed) {
        setStatus('error');
        if (j.error === 'rate_limited') {
          setError("You've used the demo 3 times today. Want to hear exactly what it'd sound like for your business? Book a quick strategy call below — we'll demo it live with your services + pricing.");
        } else if (j.error === 'invalid_phone') {
          setError(j.detail || 'That number looks off — double-check the digits.');
        } else if (j.error === 'unsupported_niche') {
          setError(j.detail || 'That trade isn\'t available yet.');
        } else if (j.error === 'vapi_not_configured' || j.error === 'vapi_call_failed') {
          setError("Sorry — our demo line is having an issue. Book a strategy call below and we'll demo live.");
        } else {
          setError(j.detail || 'Could not place the demo call. Try again or book a strategy call below.');
        }
        return;
      }
      setStatus('success');
    } catch {
      setStatus('error');
      setError('Network error. Try again or book a strategy call.');
    }
  }

  function reset() {
    setStatus('idle');
    setError('');
    setConsent(false);
  }

  if (status === 'success') {
    return (
      <div className="ar-demo plate">
        <div className="ar-demo-success">
          <span className="ar-demo-success-tag">Call placed</span>
          <h3>Calling you in under 10 seconds</h3>
          <p>Pick up — you’ll hear our Virtual Front Desk in action. Talk to it like a real customer would (try booking a job, or describing an emergency).</p>
          <button type="button" className="ar-demo-success-again" onClick={reset}>Send another demo</button>
        </div>
      </div>
    );
  }

  return (
    <div className="ar-demo plate">
      <div className="ar-demo-eyebrow">
        <span className="ar-demo-pulse" />
        Live demo · Free · No setup
      </div>
      <h3 className="ar-demo-title">Hear it <em>actually</em> answer your call.</h3>
      <p className="ar-demo-sub">Pick your trade, drop your number — we’ll call you in under 10 seconds. Talk to it like a real customer would.</p>
      <form className="ar-demo-form" onSubmit={handleSubmit}>
        <div className="ar-demo-row">
          <select className="ar-demo-niche" aria-label="Choose your trade" value={niche} onChange={(e) => setNiche(e.target.value)} disabled={status === 'submitting'}>
            {DEMO_NICHES.map((n) => (
              <option key={n.value} value={n.value} disabled={!n.available}>
                {n.label}{!n.available ? ' (coming soon)' : ''}
              </option>
            ))}
          </select>
          <div className="ar-demo-input-wrap">
            <span className="ar-demo-prefix" aria-hidden="true">+1</span>
            <input
              type="tel"
              className="ar-demo-input"
              aria-label="Your phone number (US, 10 digits)"
              placeholder="(555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              disabled={status === 'submitting'}
              inputMode="tel"
              autoComplete="tel"
            />
          </div>
        </div>
        <label className="ar-demo-consent">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            disabled={status === 'submitting'}
          />
          <span>I agree to receive a single automated demo call from Nuvion Solutions at the number I entered. Consent is not a condition of purchase; message/data rates may apply.</span>
        </label>
        <button type="submit" className="ar-demo-btn" disabled={status === 'submitting' || !isValid(phone) || !consent}>
          <svg className="ar-demo-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          {status === 'submitting' ? 'Calling…' : 'Call me now'}
        </button>
        {error && <div className="ar-demo-error">{error}</div>}
        <p className="ar-demo-fineprint">Used once for this demo — not added to any list. US numbers only. Limit 3 calls per number per day.</p>
      </form>
    </div>
  );
}

export default function AIReceptionist() {
  return (
    <>
      <Helmet>
        <title>Virtual Front Desk | Nuvion Solutions</title>
        <meta name="description" content="Nuvion’s Virtual Front Desk is a 24/7 AI phone agent trained on your business. It answers every call, books jobs to your calendar, triages emergencies, and sends appointment reminders and review requests. 14-day free trial." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/ai-receptionist" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="grain" aria-hidden="true" />

      <SiteNav />

      <div className="sp-hero">
        <div className="sp-eyebrow">Virtual Front Desk</div>
        <h1 className="sp-h1">Your front desk, <em>always on</em>.</h1>
        <p className="sp-sub">A 24/7 AI-powered phone agent trained on your business — answers every call, books jobs straight to your calendar, triages emergencies, and runs the outbound reminders + follow-ups your shop never has time for.</p>
      </div>

      <div className="sp-wrap">
        <div className="ar-layout">
          <div className="ar-phone">
            <div className="ar-frame">
              <div className="ar-phone-bar">
                <span className="ar-phone-caller">Incoming Call</span>
                <span className="ar-phone-tag">Live · Virtual Front Desk</span>
              </div>
              <div className="ar-messages">
                <div className="ar-msg ar-msg-ai">Thanks for calling — how can I help?</div>
                <div className="ar-msg ar-msg-in">Water’s backing up through my kitchen sink. Can someone come out today?</div>
                <div className="ar-msg ar-msg-ai">Sounds urgent — I’ve got a tech who can be there between 2 and 4. Is your address still the same one on file?</div>
                <div className="ar-msg ar-msg-in">Yeah, that works. Please book it.</div>
                <div className="ar-msg ar-msg-ai">Perfect — you’ll get a confirmation text in just a moment.</div>
              </div>
              <div className="ar-badges">
                <span className="ar-badge booked">Booked</span>
                <span className="ar-badge">Owner Notified</span>
                <span className="ar-badge">Calendar Synced</span>
              </div>
            </div>
          </div>

          <div>
            <div className="ar-index">№ 01 — Capabilities</div>
            <h2 className="ar-caps-title">What it handles for you.</h2>
            <div className="ar-caps" role="list">
              {CAPS.map((c, i) => (
                <div key={c.title} className="ar-cap" role="listitem">
                  <span className="ar-cap-num tnum">{String(i + 1).padStart(2, '0')}</span>
                  <div className="ar-cap-title">{c.title}</div>
                  <div className="ar-cap-desc">{c.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <LiveDemoWidget />

        <div className="ar-plans">
          <div className="ar-index">№ 02 — Plans</div>
          <h2 className="ar-plans-title">Three tiers. <span className="grad">14-day free trial</span> on any of them.</h2>
          <p className="ar-plans-sub">Start free. Card stays untouched until day 15 — and you can cancel any time before then. Yearly bills 9 months for 12 months of service.</p>

          <div className="ar-plans-grid">
            {PLANS.map(p => (
              <div key={p.name} className={`plate ar-plan${p.featured ? ' featured' : ''}`}>
                <div className="ar-plan-head">
                  <span className="ar-plan-name">{p.name}</span>
                  {p.featured && <span className="ar-plan-badge">Most Popular</span>}
                </div>
                <div className="ar-plan-price">
                  <span className="ar-plan-price-num">${p.price}</span>
                  <span className="ar-plan-price-suffix">/mo</span>
                </div>
                <div className="ar-plan-yearly">or {p.yearly} yearly · <strong>{p.yearlyDelta}</strong></div>
                <div className="ar-plan-tagline">{p.tagline}</div>
                <ul className="ar-plan-features">
                  {p.features.map(f => <li key={f} className="ar-plan-feature">{f}</li>)}
                </ul>
                <div className="ar-plan-minutes">{p.minutes}</div>
              </div>
            ))}
          </div>

          <div className="ar-trial plate">
            <span className="ar-trial-tag">14-day free trial</span>
            <h3>$0 today. $0 for 14 days.</h3>
            <p>You’ll save a card at signup to reserve your build slot — but you won’t be charged until day 15, and only if you haven’t canceled by then. No setup fees, no contracts. Cancel any time during the trial from your account or by replying to any of our emails.</p>
          </div>
        </div>
      </div>

      <div className="sp-cta">
        <div className="sp-cta-in">
          <h2>Hear it talk to a real plumber call.</h2>
          <p>Book a 15-minute strategy call and we’ll demo your Virtual Front Desk live with your services + pricing.</p>
          <Link to="/book" className="sp-cta-btn">Book a free strategy call <span aria-hidden="true">→</span></Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
