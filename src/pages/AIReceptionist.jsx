import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

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
.ar-messages{display:flex;flex-direction:column;gap:9px;min-height:280px}
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
                <div className="ar-msg ar-msg-in">Hey, I've got water coming up through the kitchen sink — like backing up bad. Can someone come out today?</div>
                <div className="ar-msg ar-msg-ai">That sounds like a drain line backup, and yes — I'd treat that as urgent. We've got a tech that can be there between 2 and 4. Are you at the address on file?</div>
                <div className="ar-msg ar-msg-in">Yeah, same one. How much is it gonna run me?</div>
                <div className="ar-msg ar-msg-ai">Drain cleaning starts around $185 with a $89 dispatch fee that gets applied to the job. Want me to lock in the 2 to 4 window?</div>
                <div className="ar-msg ar-msg-in">Yes please.</div>
                <div className="ar-msg ar-msg-ai">Booked. You'll get a text confirmation and the tech's name in about 30 seconds. We'll see you this afternoon.</div>
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
            <h3>No card upfront required.</h3>
            <p>If you'd rather not save a card during signup, we'll follow up at day 10–12. No setup fees. No contracts. Cancel any time from your account or by replying to any of our emails.</p>
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
