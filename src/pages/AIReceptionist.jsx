import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

// n8n webhook URL for the "call me now" demo. Configurable via Vercel env var
// (set VITE_DEMO_WEBHOOK_URL on the website's Vercel project, then redeploy).
// Default points at our n8n instance on Zeabur — change there if the host moves.
const DEMO_CALL_ENDPOINT = import.meta.env.VITE_DEMO_WEBHOOK_URL
  || 'https://nuvion-n8n.zeabur.app/webhook/public-demo-call';

const DEMO_NICHES = [
  { value: 'plumbing', label: '🔧 Plumbing', available: true },
  { value: 'hvac', label: '❄️ HVAC', available: false },
  { value: 'electrical', label: '🔌 Electrical', available: false },
  { value: 'garage_door', label: '🚪 Garage Door', available: false },
  { value: 'roofing', label: '🏠 Roofing', available: false },
];

const CSS = BASE_CSS + FOOTER_CSS + `
.sp-eyebrow.ar{background:rgba(79,110,247,0.1);border:1px solid rgba(79,110,247,0.25);color:#4F6EF7}
.ar-accent{color:#4F6EF7}
.sp-cta-btn.ar{background:#4F6EF7;color:#fff}

/* LAYOUT */
.ar-layout{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;padding:20px 0 72px}

/* PHONE */
.ar-phone{max-width:300px;margin:0 auto;position:relative}
.ar-phone::before{content:'';position:absolute;inset:-30px;background:radial-gradient(ellipse at center,rgba(79,110,247,0.18) 0%,rgba(79,110,247,0) 70%);pointer-events:none;z-index:-1;border-radius:60px}
.ar-frame{background:#0A0E1A;border:2px solid rgba(79,110,247,0.35);border-radius:38px;padding:18px 16px 22px;box-shadow:0 0 80px rgba(79,110,247,0.18),0 40px 60px rgba(0,0,0,0.45)}
.ar-phone-bar{display:flex;align-items:center;justify-content:space-between;padding:4px 8px 14px;border-bottom:1px solid rgba(79,110,247,0.1);margin-bottom:14px}
.ar-phone-caller{font-size:.78rem;font-weight:600;color:var(--text)}
.ar-phone-tag{font-size:.64rem;background:rgba(79,110,247,0.2);color:#4F6EF7;padding:3px 9px;border-radius:100px;font-weight:700;display:inline-flex;align-items:center;gap:5px}
.ar-phone-tag::before{content:'';width:6px;height:6px;background:#34D399;border-radius:50%;box-shadow:0 0 8px #34D399;animation:livePulse 1.6s infinite ease-in-out}
@keyframes livePulse{0%,100%{opacity:1}50%{opacity:.45}}
.ar-messages{display:flex;flex-direction:column;gap:9px;min-height:220px}
.ar-msg{max-width:82%;padding:9px 13px;font-size:.79rem;line-height:1.5;border-radius:14px}
.ar-msg-in{background:var(--surface2);border-radius:14px 14px 14px 3px;color:var(--text);align-self:flex-start}
.ar-msg-ai{background:rgba(79,110,247,0.15);border:1px solid rgba(79,110,247,0.22);border-radius:14px 14px 3px 14px;color:var(--text);align-self:flex-end}
.ar-msg-sys{font-size:.68rem;text-align:center;color:var(--dim);padding:3px 0}
.ar-badges{display:flex;gap:6px;flex-wrap:wrap;margin-top:16px;padding-top:14px;border-top:1px solid rgba(79,110,247,0.1)}
.ar-badge{font-size:.67rem;padding:4px 9px;border-radius:6px;font-weight:700}
.ar-b-g{background:rgba(52,211,153,0.1);color:#34D399;border:1px solid rgba(52,211,153,0.2)}
.ar-b-b{background:rgba(79,110,247,0.1);color:#4F6EF7;border:1px solid rgba(79,110,247,0.2)}
.ar-b-c{background:rgba(0,220,255,0.1);color:#00DCFF;border:1px solid rgba(0,220,255,0.2)}

/* CAPABILITIES */
.ar-caps-title{font-size:1.15rem;font-weight:700;margin-bottom:28px;letter-spacing:-.01em}
.ar-cap{display:flex;align-items:flex-start;gap:14px;margin-bottom:24px}
.ar-cap-icon{width:38px;height:38px;background:rgba(79,110,247,0.1);border:1px solid rgba(79,110,247,0.2);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:.95rem;flex-shrink:0}
.ar-cap-title{font-size:.88rem;font-weight:700;color:var(--text);margin-bottom:4px}
.ar-cap-desc{font-size:.79rem;color:var(--muted);line-height:1.55}

/* PLANS */
.ar-plans{padding:80px 0 64px;border-top:1px solid var(--border)}
.ar-plans-eyebrow{text-align:center;font-size:.72rem;color:#4F6EF7;font-weight:700;letter-spacing:.12em;text-transform:uppercase;margin-bottom:16px}
.ar-plans-title{font-size:clamp(1.5rem,3.5vw,2.1rem);font-weight:800;letter-spacing:-.025em;text-align:center;margin-bottom:14px}
.ar-plans-sub{text-align:center;color:var(--muted);max-width:560px;margin:0 auto 44px;font-size:.95rem;line-height:1.65}
.ar-plans-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.ar-plan{position:relative;background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:30px 26px;display:flex;flex-direction:column;transition:transform .25s,border-color .25s}
.ar-plan:hover{transform:translateY(-4px);border-color:rgba(79,110,247,0.3)}
.ar-plan.featured{border-color:rgba(79,110,247,0.45);background:linear-gradient(160deg,rgba(79,110,247,0.07) 0%,var(--surface) 60%);box-shadow:0 0 50px rgba(79,110,247,0.12)}
.ar-plan-badge{position:absolute;top:-11px;left:50%;transform:translateX(-50%);background:linear-gradient(130deg,#4F6EF7,#A78BFA);color:#fff;font-size:.65rem;font-weight:700;padding:4px 12px;border-radius:100px;letter-spacing:.08em;text-transform:uppercase}
.ar-plan-name{font-size:.78rem;color:var(--muted);font-weight:600;letter-spacing:.1em;text-transform:uppercase;margin-bottom:10px}
.ar-plan-price{display:flex;align-items:baseline;gap:6px;margin-bottom:6px}
.ar-plan-price-num{font-size:2.1rem;font-weight:800;letter-spacing:-.025em}
.ar-plan-price-suffix{font-size:.85rem;color:var(--muted);font-weight:500}
.ar-plan-yearly{font-size:.74rem;color:var(--dim);margin-bottom:18px}
.ar-plan-yearly strong{color:#34D399;font-weight:600}
.ar-plan-tagline{font-size:.86rem;color:var(--text);font-weight:500;line-height:1.55;margin-bottom:20px;padding-bottom:18px;border-bottom:1px solid rgba(255,255,255,0.06)}
.ar-plan-features{list-style:none;display:flex;flex-direction:column;gap:11px;margin-bottom:24px;flex:1}
.ar-plan-feature{font-size:.81rem;color:var(--muted);line-height:1.5;display:flex;gap:9px;align-items:flex-start}
.ar-plan-feature::before{content:'✓';color:#4F6EF7;font-weight:700;flex-shrink:0;margin-top:1px}
.ar-plan.featured .ar-plan-feature::before{color:#A78BFA}
.ar-plan-minutes{font-size:.74rem;color:var(--dim);padding-top:14px;border-top:1px dashed rgba(255,255,255,0.07);margin-top:auto}

/* TRIAL CALLOUT */
.ar-trial{margin:60px auto 0;max-width:720px;text-align:center;padding:34px 32px;background:linear-gradient(130deg,rgba(52,211,153,0.08),rgba(79,110,247,0.06));border:1px solid rgba(52,211,153,0.18);border-radius:16px}
.ar-trial-tag{display:inline-block;background:rgba(52,211,153,0.15);color:#34D399;font-size:.7rem;font-weight:700;padding:5px 12px;border-radius:100px;letter-spacing:.08em;text-transform:uppercase;margin-bottom:14px}
.ar-trial h3{font-size:1.4rem;font-weight:800;letter-spacing:-.02em;margin-bottom:10px}
.ar-trial p{color:var(--muted);font-size:.92rem;line-height:1.65}

@media(max-width:900px){
  .ar-plans-grid{grid-template-columns:1fr;gap:16px}
}
@media(max-width:700px){
  .ar-layout{grid-template-columns:1fr;gap:36px}
}

/* ── LIVE DEMO WIDGET ─────────────────────────────────────── */
.ar-demo{margin:24px auto 0;max-width:680px;background:linear-gradient(160deg,rgba(79,110,247,0.08) 0%,var(--surface) 60%);border:1px solid rgba(79,110,247,0.32);border-radius:20px;padding:36px 32px;position:relative;box-shadow:0 0 60px rgba(79,110,247,0.12)}
.ar-demo::before{content:'';position:absolute;top:-1px;left:32px;right:32px;height:3px;background:linear-gradient(90deg,#4F6EF7,#A78BFA,#00DCFF);border-radius:0 0 3px 3px}
.ar-demo-eyebrow{display:inline-flex;align-items:center;gap:8px;background:rgba(79,110,247,0.12);border:1px solid rgba(79,110,247,0.28);color:#4F6EF7;font-size:.7rem;font-weight:700;padding:5px 12px;border-radius:100px;letter-spacing:.1em;text-transform:uppercase;margin-bottom:18px}
.ar-demo-pulse{width:7px;height:7px;border-radius:50%;background:#34D399;box-shadow:0 0 0 0 rgba(52,211,153,0.55);animation:demoPulse 2s infinite ease}
@keyframes demoPulse{0%{box-shadow:0 0 0 0 rgba(52,211,153,0.55)}70%{box-shadow:0 0 0 10px rgba(52,211,153,0)}100%{box-shadow:0 0 0 0 rgba(52,211,153,0)}}
.ar-demo-title{font-size:1.6rem;font-weight:800;letter-spacing:-.022em;line-height:1.18;margin-bottom:10px}
.ar-demo-title em{font-style:italic;color:#4F6EF7;font-weight:700}
.ar-demo-sub{color:var(--muted);font-size:.95rem;line-height:1.6;margin-bottom:24px}
.ar-demo-form{display:flex;flex-direction:column;gap:12px}
.ar-demo-row{display:grid;grid-template-columns:1fr 1.5fr;gap:10px}
@media(max-width:560px){.ar-demo-row{grid-template-columns:1fr}}
.ar-demo-niche{appearance:none;-webkit-appearance:none;background:var(--surface2);background-image:linear-gradient(45deg,transparent 50%,#8B99B5 50%),linear-gradient(135deg,#8B99B5 50%,transparent 50%);background-position:calc(100% - 18px) center,calc(100% - 13px) center;background-size:5px 5px,5px 5px;background-repeat:no-repeat;border:1px solid rgba(79,110,247,0.2);border-radius:10px;padding:14px 36px 14px 14px;font-family:inherit;font-size:.95rem;color:var(--text);cursor:pointer;outline:none;transition:border-color .2s}
.ar-demo-niche:hover{border-color:rgba(79,110,247,0.4)}
.ar-demo-niche:focus{border-color:#4F6EF7}
.ar-demo-input-wrap{display:flex;align-items:stretch;background:var(--surface2);border:1px solid rgba(79,110,247,0.2);border-radius:10px;overflow:hidden;transition:border-color .2s}
.ar-demo-input-wrap:focus-within{border-color:#4F6EF7}
.ar-demo-prefix{display:flex;align-items:center;padding:0 14px;background:rgba(79,110,247,0.08);color:var(--muted);font-weight:600;font-size:.95rem;border-right:1px solid rgba(79,110,247,0.15)}
.ar-demo-input{flex:1;border:none;outline:none;padding:14px 16px;font-family:inherit;font-size:1rem;color:var(--text);background:transparent;letter-spacing:.02em;min-width:0}
.ar-demo-input::placeholder{color:var(--dim)}
.ar-demo-btn{background:linear-gradient(130deg,#4F6EF7,#3B5BDB);color:#fff;border:none;border-radius:10px;padding:15px 22px;font-family:inherit;font-size:1rem;font-weight:700;cursor:pointer;transition:transform .2s,box-shadow .2s;display:inline-flex;align-items:center;justify-content:center;gap:8px;letter-spacing:.01em;box-shadow:0 4px 18px rgba(79,110,247,0.3)}
.ar-demo-btn:hover:not(:disabled){transform:translateY(-1px);box-shadow:0 6px 22px rgba(79,110,247,0.45)}
.ar-demo-btn:disabled{opacity:.55;cursor:not-allowed;transform:none}
.ar-demo-btn-icon{width:18px;height:18px}
.ar-demo-fineprint{color:var(--dim);font-size:.78rem;line-height:1.5;margin-top:4px}
.ar-demo-error{background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.3);color:#FCA5A5;padding:10px 14px;border-radius:8px;font-size:.85rem;margin-top:6px}
.ar-demo-success{display:flex;flex-direction:column;align-items:center;text-align:center;padding:18px 0 6px}
.ar-demo-success-icon{width:54px;height:54px;border-radius:50%;background:rgba(52,211,153,0.15);border:1px solid rgba(52,211,153,0.35);color:#34D399;display:flex;align-items:center;justify-content:center;font-size:1.7rem;margin-bottom:14px;animation:demoCheck .6s cubic-bezier(.4,0,.2,1)}
@keyframes demoCheck{from{transform:scale(0.6);opacity:0}to{transform:scale(1);opacity:1}}
.ar-demo-success h3{font-size:1.45rem;font-weight:800;letter-spacing:-.018em;margin-bottom:8px}
.ar-demo-success p{color:var(--muted);font-size:.95rem;line-height:1.55;max-width:440px}
.ar-demo-success-again{margin-top:18px;background:transparent;border:1px solid rgba(79,110,247,0.4);color:#4F6EF7;padding:10px 18px;border-radius:8px;font-family:inherit;font-size:.85rem;font-weight:600;cursor:pointer;transition:background .2s}
.ar-demo-success-again:hover{background:rgba(79,110,247,0.08)}
`;

const CAPS = [
  { icon: '📞', title: 'Answers every call, 24/7', desc: "Customers never hear a busy signal or voicemail again. Your front desk picks up instantly — even at 2 a.m. on a holiday." },
  { icon: '🧠', title: 'Trained on your business', desc: 'Knows your services, pricing, hours, service area, brands you install, and the FAQs your real customers ask. Sounds like it actually works there.' },
  { icon: '📅', title: 'Books jobs straight to your calendar', desc: "Picks the right slot length per appointment type, syncs to ServiceTitan, Housecall Pro, Jobber, Google Calendar — whatever you already use." },
  { icon: '🚨', title: 'Triages emergencies', desc: 'Recognizes urgent situations (active leak, gas, no water) and either books an emergency slot or transfers to your on-call line — your call, your rules.' },
  { icon: '📨', title: 'Outbound automations', desc: 'Sends appointment reminders, post-job follow-ups, and review requests via SMS or email. More booked jobs, fewer no-shows, higher Google rating on autopilot.' },
  { icon: '🎯', title: 'Smart job acceptance', desc: "When your calendar's busy, the AI prioritizes the jobs you want most and politely refers the rest. Emergencies always go through. Toggle any time." },
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
    tagline: 'Everything in Basic, plus a domain-trained AI that handles the calls Basic can\'t.',
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
        body: JSON.stringify({ phone: '+1' + phone.replace(/\D/g, ''), niche }),
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
    } catch (err) {
      setStatus('error');
      setError('Network error. Try again or book a strategy call.');
    }
  }

  function reset() {
    setStatus('idle');
    setError('');
  }

  if (status === 'success') {
    return (
      <div className="ar-demo">
        <div className="ar-demo-success">
          <div className="ar-demo-success-icon">✓</div>
          <h3>Calling you in under 10 seconds</h3>
          <p>Pick up — you'll hear our Virtual Front Desk in action. Talk to it like a real customer would (try booking a job, or describing an emergency).</p>
          <button type="button" className="ar-demo-success-again" onClick={reset}>Send another demo</button>
        </div>
      </div>
    );
  }

  return (
    <div className="ar-demo">
      <div className="ar-demo-eyebrow">
        <span className="ar-demo-pulse" />
        Live demo · Free · No setup
      </div>
      <h3 className="ar-demo-title">Hear it <em>actually</em> answer your call.</h3>
      <p className="ar-demo-sub">Pick your trade, drop your number — we'll call you in under 10 seconds. Talk to it like a real customer would.</p>
      <form className="ar-demo-form" onSubmit={handleSubmit}>
        <div className="ar-demo-row">
          <select className="ar-demo-niche" value={niche} onChange={(e) => setNiche(e.target.value)} disabled={status === 'submitting'}>
            {DEMO_NICHES.map((n) => (
              <option key={n.value} value={n.value} disabled={!n.available}>
                {n.label}{!n.available ? ' (coming soon)' : ''}
              </option>
            ))}
          </select>
          <div className="ar-demo-input-wrap">
            <span className="ar-demo-prefix">+1</span>
            <input
              type="tel"
              className="ar-demo-input"
              placeholder="(555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              disabled={status === 'submitting'}
              inputMode="tel"
              autoComplete="tel"
            />
          </div>
        </div>
        <button type="submit" className="ar-demo-btn" disabled={status === 'submitting' || !isValid(phone)}>
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
        <meta name="description" content="Nuvion's Virtual Front Desk is a 24/7 AI-powered phone agent trained on your business. Answers every call, qualifies leads, books jobs, triages emergencies, and runs outbound reminders + review requests. 14-day free trial." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/ai-receptionist" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <Link to="/" className="sp-back">← Back to Home</Link>
      </nav>

      <div className="sp-hero">
        <div className="sp-eyebrow ar">📞 Virtual Front Desk</div>
        <h1 className="sp-h1">Your front desk, <em className="ar-accent">always on.</em></h1>
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
                <div className="ar-msg ar-msg-in">Water's backing up through my kitchen sink. Can someone come out today?</div>
                <div className="ar-msg ar-msg-ai">Sounds urgent — I've got a tech who can be there between 2 and 4. Is your address still the same one on file?</div>
                <div className="ar-msg ar-msg-in">Yeah, that works. Please book it.</div>
                <div className="ar-msg ar-msg-ai">Perfect — you'll get a confirmation text in just a moment.</div>
              </div>
              <div className="ar-badges">
                <span className="ar-badge ar-b-g">✓ Booked</span>
                <span className="ar-badge ar-b-b">Owner Notified</span>
                <span className="ar-badge ar-b-c">Calendar Synced</span>
              </div>
            </div>
          </div>

          <div>
            <div className="ar-caps-title">What it handles for you</div>
            {CAPS.map(c => (
              <div key={c.title} className="ar-cap">
                <div className="ar-cap-icon">{c.icon}</div>
                <div>
                  <div className="ar-cap-title">{c.title}</div>
                  <div className="ar-cap-desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <LiveDemoWidget />

        <div className="ar-plans">
          <div className="ar-plans-eyebrow">Plans</div>
          <h2 className="ar-plans-title">Three tiers. <span className="grad">14-day free trial</span> on any of them.</h2>
          <p className="ar-plans-sub">Start free. Card stays untouched until day 15 — and you can cancel any time before then. Yearly bills 9 months for 12 months of service.</p>

          <div className="ar-plans-grid">
            {PLANS.map(p => (
              <div key={p.name} className={`ar-plan${p.featured ? ' featured' : ''}`}>
                {p.featured && <span className="ar-plan-badge">Most Popular</span>}
                <div className="ar-plan-name">{p.name}</div>
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

          <div className="ar-trial">
            <span className="ar-trial-tag">14-day free trial</span>
            <h3>$0 today. $0 for 14 days.</h3>
            <p>You'll save a card at signup to reserve your build slot — but you won't be charged until day 15, and only if you haven't canceled by then. No setup fees, no contracts. Cancel any time during the trial from your account or by replying to any of our emails.</p>
          </div>
        </div>
      </div>

      <div className="sp-cta">
        <h2>Hear it talk to a real plumber call.</h2>
        <p>Book a 15-minute strategy call and we'll demo your Virtual Front Desk live with your services + pricing.</p>
        <Link to="/book" className="sp-cta-btn ar">Book a Free Strategy Call →</Link>
      </div>
      <Footer />
    </>
  );
}
