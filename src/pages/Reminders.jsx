import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

const CSS = BASE_CSS + FOOTER_CSS + `
.sp-eyebrow.rm{background:rgba(236,72,153,0.08);border:1px solid rgba(236,72,153,0.22);color:#EC4899}
.rm-accent{color:#EC4899}
.sp-cta-btn.rm{background:#EC4899;color:#fff}

/* JOURNEY */
.rm-journey{padding:20px 0 60px}
.rm-steps{display:flex;align-items:flex-start;gap:0;position:relative;overflow-x:auto;padding-bottom:8px}
.rm-step{flex:1;min-width:140px;position:relative;display:flex;flex-direction:column;align-items:center;text-align:center}
.rm-step:not(:last-child)::after{content:'';position:absolute;top:20px;left:calc(50% + 22px);right:calc(-50% + 22px);height:2px;background:linear-gradient(90deg,rgba(236,72,153,0.4),rgba(236,72,153,0.1));z-index:0}
.rm-step-dot{width:42px;height:42px;border-radius:50%;background:var(--surface);border:2px solid rgba(236,72,153,0.35);display:flex;align-items:center;justify-content:center;font-size:1rem;position:relative;z-index:1;margin-bottom:12px;flex-shrink:0}
.rm-step-dot.done{background:rgba(236,72,153,0.12);border-color:rgba(236,72,153,0.5);box-shadow:0 0 16px rgba(236,72,153,0.15)}
.rm-step-dot.final{background:rgba(52,211,153,0.12);border-color:rgba(52,211,153,0.5);box-shadow:0 0 16px rgba(52,211,153,0.15)}
.rm-step-timing{font-size:.68rem;font-weight:700;color:#EC4899;background:rgba(236,72,153,0.08);border:1px solid rgba(236,72,153,0.15);border-radius:100px;padding:3px 9px;margin-bottom:8px;white-space:nowrap}
.rm-step-timing.final{color:#34D399;background:rgba(52,211,153,0.08);border-color:rgba(52,211,153,0.15)}
.rm-step-title{font-size:.8rem;font-weight:700;color:var(--text);margin-bottom:2px;padding:0 4px;line-height:1.3}
.rm-step-channel{font-size:.68rem;color:var(--muted);margin-bottom:6px}
.rm-step-preview{font-size:.7rem;color:var(--muted);font-style:italic;margin-top:0;padding:8px 10px;line-height:1.4;max-width:120px;background:rgba(236,72,153,0.08);border:1px solid rgba(236,72,153,0.2);border-radius:10px 10px 10px 3px}

/* STAT */
.rm-stat{margin:0 auto 72px;max-width:700px;display:grid;grid-template-columns:1fr 1fr;gap:20px}
.rm-stat-card{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:28px;text-align:center}
.rm-stat-number{font-size:3rem;font-weight:900;letter-spacing:-.04em;line-height:1;margin-bottom:8px}
.rm-stat-bad{color:#EF4444}
.rm-stat-good{color:#34D399}
.rm-stat-label{font-size:.85rem;color:var(--muted);line-height:1.5}
.rm-stat-sub{font-size:.72rem;color:var(--dim);margin-top:6px}

/* HOW */
.rm-how{padding:0 0 80px}
.rm-how-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.rm-how-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:24px 20px}
.rm-how-icon{font-size:1.5rem;margin-bottom:12px}
.rm-how-title{font-size:.9rem;font-weight:700;margin-bottom:7px}
.rm-how-desc{font-size:.79rem;color:var(--muted);line-height:1.6}

@media(max-width:700px){
  .rm-stat{grid-template-columns:1fr}
  .rm-how-grid{grid-template-columns:1fr}
}
`;

const STEPS = [
  { icon: '📅', dot: 'done', timing: 'Booked',      title: 'Appointment Confirmed',   channel: 'SMS + Email', preview: '"Your appointment is confirmed for Thursday at 10am."' },
  { icon: '📨', dot: 'done', timing: '7 Days Out',   title: 'First Reminder Sent',     channel: 'Email',       preview: '"Just a heads up — your appointment is one week away."' },
  { icon: '💬', dot: 'done', timing: '48 Hours Out', title: 'Urgent Reminder',         channel: 'SMS',         preview: '"Reminder: You\'re scheduled for this Thursday at 10am."' },
  { icon: '🔔', dot: 'done', timing: 'Day Before',   title: 'Confirmation Request',    channel: 'SMS',         preview: '"Can you confirm you\'re still coming tomorrow? Reply YES or NO."' },
  { icon: '⏰', dot: 'done', timing: '1 Hour Out',   title: 'Final Nudge',             channel: 'SMS',         preview: '"See you in an hour! Here\'s the address: {address}"' },
  { icon: '✅', dot: 'final', timing: 'Show Time',    title: 'Client Shows Up',         channel: '',            preview: 'No-show eliminated.' },
];

export default function Reminders() {
  return (
    <>
      <Helmet>
        <title>Automated Reminders & Confirmations | Nuvion Solutions</title>
        <meta name="description" content="Reduce no-shows by up to 80% with automated appointment reminders and confirmation sequences. Smart rescheduling built in. No manual follow-up needed." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/reminders" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <Link to="/" className="sp-back">← Back to Home</Link>
      </nav>

      <div className="sp-hero">
        <div className="sp-eyebrow rm">🔔 Automated Reminders & Confirmations</div>
        <h1 className="sp-h1">No-shows are a<br /><em className="rm-accent">solved problem</em></h1>
        <p className="sp-sub">The right message, to the right person, at exactly the right time — automated. Our reminder sequences eliminate no-shows and keep your calendar full without any manual effort.</p>
      </div>

      <div className="sp-wrap">
        <div className="rm-journey">
          <div className="sp-section-title">The Appointment Journey</div>
          <div className="rm-steps">
            {STEPS.map(s => (
              <div key={s.title} className="rm-step">
                <div className={`rm-step-dot ${s.dot}`}>{s.icon}</div>
                <div className={`rm-step-timing${s.dot === 'final' ? ' final' : ''}`}>{s.timing}</div>
                <div className="rm-step-title">{s.title}</div>
                {s.channel && <div className="rm-step-channel">{s.channel}</div>}
                <div className="rm-step-preview">{s.preview}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rm-stat">
          <div className="rm-stat-card">
            <div className="rm-stat-number rm-stat-bad">~30%</div>
            <div className="rm-stat-label">Average no-show rate without reminders</div>
            <div className="rm-stat-sub">Industry average for service businesses</div>
          </div>
          <div className="rm-stat-card">
            <div className="rm-stat-number rm-stat-good">−80%</div>
            <div className="rm-stat-label">Reduction in no-shows with automated reminders</div>
            <div className="rm-stat-sub">Industry standard with multi-step sequences</div>
          </div>
        </div>

        <div className="rm-how">
          <div className="sp-section-title">How It Works</div>
          <div className="rm-how-grid">
            <div className="rm-how-card">
              <div className="rm-how-icon">🧠</div>
              <div className="rm-how-title">Smart Scheduling</div>
              <div className="rm-how-desc">Reminders are timed based on your appointment type — a 30-min consultation gets a different cadence than a 4-hour service job.</div>
            </div>
            <div className="rm-how-card">
              <div className="rm-how-icon">🔁</div>
              <div className="rm-how-title">Auto-Rescheduling</div>
              <div className="rm-how-desc">When a client replies "NO" or cancels, the system immediately offers alternative times and fills the slot — no manual coordination needed.</div>
            </div>
            <div className="rm-how-card">
              <div className="rm-how-icon">📊</div>
              <div className="rm-how-title">No-Show Tracking</div>
              <div className="rm-how-desc">Every confirmation, cancellation, and no-show is logged automatically — so you always know the health of your calendar at a glance.</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sp-cta">
        <h2>Fill your calendar and keep it full.</h2>
        <p>Book a free call and we'll set up your entire reminder system in under a week.</p>
        <Link to="/book" className="sp-cta-btn rm">Book a Free Strategy Call →</Link>
      </div>
          <Footer />
    </>
  );
}
