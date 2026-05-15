import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* Done-For-You Business — the premium meta-service that bundles every
   capability Nuvion offers (consulting + website + AI front desk +
   automations + integrations + custom apps + ongoing optimization).
   Gold/amber accent against the dark/blue brand base. */
const CSS = BASE_CSS + FOOTER_CSS + `
/* PAGE ACCENT — gold/amber gradient for premium feel */
.df-accent{background:linear-gradient(130deg,#FFC645 0%,#F59E0B 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent}
.sp-eyebrow.df{background:rgba(245,158,11,0.10);border:1px solid rgba(245,158,11,0.30);color:#FFC645}
.sp-cta-btn.df{background:linear-gradient(130deg,#FFC645,#F59E0B);color:#07090F;box-shadow:0 4px 22px rgba(245,158,11,0.35)}
.sp-cta-btn.df:hover{opacity:.92;transform:translateY(-1px)}

/* Hero gold glow backdrop */
.df-hero-glow{position:absolute;top:-40px;left:50%;transform:translateX(-50%);width:760px;height:520px;background:radial-gradient(circle at 50% 50%,rgba(245,158,11,0.13) 0%,rgba(245,158,11,0) 65%);pointer-events:none;z-index:0}

/* The intro paragraph above sections — used a few places */
.df-intro{max-width:640px;margin:0 auto 40px;color:var(--muted);font-size:.96rem;line-height:1.7;text-align:center}

/* INCLUDED — components grid (everything the build covers) */
.df-included{padding:24px 0 88px}
.df-included-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.df-pill{display:flex;align-items:flex-start;gap:13px;padding:20px 18px;background:linear-gradient(135deg,rgba(245,158,11,0.045) 0%,var(--surface) 65%);border:1px solid rgba(245,158,11,0.18);border-radius:14px;transition:border-color .25s,transform .25s,box-shadow .25s}
.df-pill:hover{border-color:rgba(245,158,11,0.42);transform:translateY(-2px);box-shadow:0 8px 24px rgba(245,158,11,0.06)}
.df-pill-icon{width:38px;height:38px;border-radius:10px;background:rgba(245,158,11,0.12);border:1px solid rgba(245,158,11,0.25);display:flex;align-items:center;justify-content:center;font-size:1.05rem;flex-shrink:0}
.df-pill-title{font-size:.93rem;font-weight:700;color:var(--text);letter-spacing:-.01em;margin-bottom:4px}
.df-pill-desc{font-size:.79rem;color:var(--muted);line-height:1.55}
@media(max-width:900px){.df-included-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:560px){.df-included-grid{grid-template-columns:1fr}}

/* COMPARISON — vendor stack vs done-for-you */
.df-compare{padding:0 0 88px}
.df-compare-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.df-col{padding:30px 26px;border-radius:18px;background:var(--surface);border:1px solid var(--border)}
.df-col-bad{background:linear-gradient(160deg,rgba(107,114,128,0.05) 0%,var(--surface) 80%)}
.df-col-good{background:linear-gradient(160deg,rgba(245,158,11,0.08) 0%,var(--surface) 80%);border-color:rgba(245,158,11,0.32);box-shadow:0 0 40px rgba(245,158,11,0.05)}
.df-col-label{font-size:.7rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;margin-bottom:18px;display:flex;align-items:center;gap:8px}
.df-col-bad .df-col-label{color:#6B7280}
.df-col-good .df-col-label{color:#FFC645}
.df-col h3{font-size:1.22rem;font-weight:800;letter-spacing:-.02em;margin-bottom:18px;color:var(--text)}
.df-col-line{display:flex;align-items:flex-start;gap:10px;padding:11px 0;font-size:.86rem;line-height:1.5;border-top:1px solid rgba(255,255,255,0.04);color:var(--muted)}
.df-col-line:first-of-type{border-top:none;padding-top:0}
.df-col-good .df-col-line{color:#E8EAF6}
.df-col-mark{flex-shrink:0;font-weight:800;font-size:.92rem;line-height:1.55;min-width:14px}
.df-col-bad .df-col-mark{color:#6B7280}
.df-col-good .df-col-mark{color:#F59E0B}
@media(max-width:780px){.df-compare-grid{grid-template-columns:1fr}}

/* PROCESS — vertical timeline */
.df-process{padding:0 0 88px}
.df-process-list{display:flex;flex-direction:column;gap:14px}
.df-step{display:grid;grid-template-columns:auto 1fr;gap:24px;align-items:flex-start;padding:24px 28px 24px 32px;background:var(--surface);border:1px solid var(--border);border-radius:16px;position:relative;overflow:hidden;transition:border-color .25s}
.df-step::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:linear-gradient(180deg,#FFC645,#F59E0B)}
.df-step:hover{border-color:rgba(245,158,11,0.32)}
.df-step-num{font-size:2.4rem;font-weight:900;background:linear-gradient(130deg,#FFC645,#F59E0B);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;letter-spacing:-.04em;line-height:.95;min-width:70px}
.df-step-title{font-size:1.08rem;font-weight:700;letter-spacing:-.015em;margin-bottom:6px;color:var(--text)}
.df-step-desc{font-size:.9rem;color:var(--muted);line-height:1.65}
@media(max-width:560px){.df-step{grid-template-columns:1fr;gap:10px;padding:22px 24px 22px 28px}.df-step-num{font-size:2rem;min-width:0}}

/* WHO IT'S FOR — fit/not-fit comparison */
.df-fit{padding:0 0 88px}
.df-fit-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;max-width:820px;margin:0 auto}
.df-fit-card{background:rgba(245,158,11,0.04);border:1px solid rgba(245,158,11,0.22);border-radius:14px;padding:22px 22px}
.df-fit-card-y{font-size:.66rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#FFC645;margin-bottom:12px}
.df-fit-card-line{font-size:.84rem;color:var(--text);padding:7px 0;display:flex;gap:9px;align-items:flex-start;line-height:1.5}
.df-fit-card-line::before{content:'✓';color:#F59E0B;font-weight:700;flex-shrink:0;font-size:.95rem}
.df-fit-not{background:transparent;border-color:rgba(255,255,255,0.06)}
.df-fit-not .df-fit-card-y{color:#6B7280}
.df-fit-not .df-fit-card-line{color:#9CA3AF}
.df-fit-not .df-fit-card-line::before{content:'×';color:#6B7280;font-weight:800}
@media(max-width:600px){.df-fit-grid{grid-template-columns:1fr}}
`;

const INCLUDED = [
  { icon: '🧭', title: 'Strategy & Consulting',          desc: 'We start by getting deeply inside your business — customers, bottlenecks, goals — before writing a single line of anything.' },
  { icon: '🖥️', title: 'Website + Branding',              desc: 'A custom site built for conversion, mobile-first, wired into your operations — not a static brochure.' },
  { icon: '📞', title: 'Virtual Front Desk',               desc: '24/7 AI receptionist that answers every call, books appointments, triages emergencies, and runs reminders.' },
  { icon: '📈', title: 'Lead Follow-Up Automation',        desc: 'Every new lead gets a personalized response within seconds — SMS, email, voicemail. Nothing slips.' },
  { icon: '🔗', title: 'Custom Integrations',              desc: 'Your CRM, calendar, billing, comms — all connected so your systems talk to each other automatically.' },
  { icon: '🤖', title: 'Custom AI Features',               desc: 'Bespoke AI built for your business — quote bots, lead scorers, intake assistants, whatever moves the needle.' },
  { icon: '📱', title: 'Custom Internal Apps',             desc: 'Replace clunky spreadsheets and tab-shuffling with tools built around how your team actually works.' },
  { icon: '🔎', title: 'SEO & AI Search Optimization',     desc: 'Get found by Google AND by AI assistants like ChatGPT, Gemini, and Perplexity — where attention is moving.' },
  { icon: '🔔', title: 'Reminders & Review Requests',      desc: 'Auto-nudge customers to reduce no-shows and grow your Google rating — all on autopilot.' },
];

const VENDOR_PROBLEMS = [
  'Manage 3–5 different vendors yourself',
  'Tools that don\'t talk to each other',
  '"Wait, who handles that part?"',
  'Constant coordination overhead',
  'You\'re still the operations bottleneck',
  'Vendors disappear after launch day',
];

const DFY_WINS = [
  'One team. One point of contact.',
  'Every system connected on day one',
  'Clear ownership of every component',
  'Zero coordination required from you',
  'Your time goes back to high-leverage work',
  'Ongoing optimization built into the deal',
];

const PROCESS = [
  { n: '01', title: 'Discovery Deep-Dive',
    desc: 'A 90-minute working session where we map your business — customers, daily workflows, every manual task you wish would just happen on its own. We leave with a clear picture of what we\'re building and why.' },
  { n: '02', title: 'Custom Blueprint',
    desc: 'Within a week, you get a written spec: every system we\'ll build, how they\'ll connect, who owns what. You sign off on the plan before we touch a single line of code.' },
  { n: '03', title: 'Parallel Build',
    desc: 'Our team builds every component in parallel — website, AI receptionist, automations, integrations, custom apps. We coordinate so it all hits production at the same time, not piece by piece.' },
  { n: '04', title: 'Coordinated Launch',
    desc: 'Everything goes live together. One onboarding session for the whole system, plus a written runbook so you know exactly what to do if anything ever needs adjusting from your side.' },
  { n: '05', title: 'Continuous Optimization',
    desc: 'We don\'t disappear after launch. Monthly review calls, real-time monitoring, and tweaks based on what\'s actually working in your specific business. Your operation gets sharper every month.' },
];

const RIGHT_FIT = [
  'Service business doing $250K–$5M/year',
  'Owner is the bottleneck on too many roles',
  'Tired of managing multiple vendors',
  'Wants the operation to just run',
];

const NOT_FIT = [
  'Just want a one-off site or single feature',
  'Looking for the cheapest possible option',
  'Need a Fortune 500–scale custom platform',
  'Not ready for a 3–6 month engagement',
];

export default function DoneForYouBusiness() {
  return (
    <>
      <Helmet>
        <title>Done-For-You Business | Nuvion Solutions</title>
        <meta name="description" content="The full Nuvion Solutions build — strategy, website, AI Virtual Front Desk, automations, integrations, custom apps, and ongoing optimization. One team, end-to-end, everything connected. Custom-scoped." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/done-for-you-business" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <Link to="/" className="sp-back">← Back to Home</Link>
      </nav>

      <div className="sp-hero" style={{ position: 'relative' }}>
        <div className="df-hero-glow" aria-hidden="true" />
        <div className="sp-eyebrow df">🏗️ Done-For-You Business</div>
        <h1 className="sp-h1">One team.<br /><em className="df-accent">The whole business.</em></h1>
        <p className="sp-sub">From strategy and consulting to website, AI receptionist, automations, integrations, and custom apps — we build out and run your entire operation so you can focus on the work you actually want to do.</p>
      </div>

      <div className="sp-wrap">
        {/* WHAT'S INCLUDED */}
        <div className="df-included">
          <div className="sp-section-title">What's Included</div>
          <p className="df-intro">Every component of a modern service business — built, connected, and tuned to your specific operation. Take everything, or take only the pieces you need. We tailor scope to fit.</p>
          <div className="df-included-grid">
            {INCLUDED.map(item => (
              <div key={item.title} className="df-pill">
                <div className="df-pill-icon">{item.icon}</div>
                <div>
                  <div className="df-pill-title">{item.title}</div>
                  <div className="df-pill-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHY NOT JUST HIRE 5 FREELANCERS */}
        <div className="df-compare">
          <div className="sp-section-title">Why Not Just Hire 5 Freelancers?</div>
          <p className="df-intro">You can. People do. Here's what that looks like vs. what we do.</p>
          <div className="df-compare-grid">
            <div className="df-col df-col-bad">
              <div className="df-col-label">⚠ The Vendor Stack</div>
              <h3>Juggling 5 contractors</h3>
              {VENDOR_PROBLEMS.map(line => (
                <div key={line} className="df-col-line"><span className="df-col-mark">✕</span>{line}</div>
              ))}
            </div>
            <div className="df-col df-col-good">
              <div className="df-col-label">✓ Done-For-You</div>
              <h3>One team, one operation</h3>
              {DFY_WINS.map(line => (
                <div key={line} className="df-col-line"><span className="df-col-mark">✓</span>{line}</div>
              ))}
            </div>
          </div>
        </div>

        {/* PROCESS */}
        <div className="df-process">
          <div className="sp-section-title">How It Works</div>
          <p className="df-intro">Five phases, all under one roof. No handoffs between agencies, no "that's not our department."</p>
          <div className="df-process-list">
            {PROCESS.map(s => (
              <div key={s.n} className="df-step">
                <div className="df-step-num">{s.n}</div>
                <div>
                  <div className="df-step-title">{s.title}</div>
                  <div className="df-step-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHO IT'S FOR */}
        <div className="df-fit">
          <div className="sp-section-title">Who This Is For</div>
          <p className="df-intro">This is a premium engagement. Worth being upfront about who it does and doesn't fit.</p>
          <div className="df-fit-grid">
            <div className="df-fit-card">
              <div className="df-fit-card-y">Right fit if you...</div>
              {RIGHT_FIT.map(line => <div key={line} className="df-fit-card-line">{line}</div>)}
            </div>
            <div className="df-fit-card df-fit-not">
              <div className="df-fit-card-y">Not the right fit if you...</div>
              {NOT_FIT.map(line => <div key={line} className="df-fit-card-line">{line}</div>)}
            </div>
          </div>
        </div>
      </div>

      <div className="sp-cta">
        <h2>Let's scope what your business actually needs.</h2>
        <p>Every engagement is custom — book a strategy call and we'll walk through what your business looks like 6 months from now if we built it for you.</p>
        <Link to="/book" className="sp-cta-btn df">Book a Strategy Call →</Link>
      </div>
      <Footer />
    </>
  );
}
