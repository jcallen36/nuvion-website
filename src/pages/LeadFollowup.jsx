import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

const CSS = BASE_CSS + FOOTER_CSS + `
.sp-eyebrow.lf{background:rgba(52,211,153,0.08);border:1px solid rgba(52,211,153,0.22);color:#34D399}
.lf-accent{color:#34D399}
.sp-cta-btn.lf{background:#34D399;color:#07090F}

/* TIMELINE */
.lf-timeline{padding:20px 0 72px;max-width:720px;margin:0 auto}
.lf-track{position:relative;padding-left:28px}
.lf-track::before{content:'';position:absolute;left:20px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,rgba(52,211,153,0.5),rgba(52,211,153,0.05))}
.lf-step{position:relative;margin-bottom:0}
.lf-step:last-child .lf-step-body{border-bottom:none}
.lf-dot{position:absolute;left:-19px;top:24px;width:14px;height:14px;border-radius:50%;background:var(--bg);border:2px solid #34D399;z-index:2;flex-shrink:0}
.lf-dot-pulse{box-shadow:0 0 0 4px rgba(52,211,153,0.15)}
.lf-step-body{padding:18px 0 24px 28px;border-bottom:1px solid var(--border)}
.lf-step-header{display:flex;align-items:center;gap:12px;margin-bottom:10px;flex-wrap:wrap}
.lf-time{font-size:.7rem;font-weight:700;background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.2);color:#34D399;padding:3px 10px;border-radius:100px;letter-spacing:.04em}
.lf-channel{font-size:.7rem;font-weight:700;padding:3px 10px;border-radius:100px;letter-spacing:.04em}
.lf-ch-sms{background:rgba(79,110,247,0.1);border:1px solid rgba(79,110,247,0.2);color:#4F6EF7}
.lf-ch-email{background:rgba(167,139,250,0.1);border:1px solid rgba(167,139,250,0.2);color:#A78BFA}
.lf-ch-vm{background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.2);color:#F59E0B}
.lf-step-title{font-size:.92rem;font-weight:700;color:var(--text);margin-bottom:6px}
.lf-step-preview{font-size:.8rem;color:var(--muted);line-height:1.55;font-style:italic;background:var(--surface);border:1px solid var(--border);padding:10px 14px;border-radius:10px;margin-top:8px}
.lf-step-preview strong{color:var(--text);font-style:normal}

/* OUTCOME */
.lf-outcome{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:40px}
.lf-outcome-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:24px}
.lf-outcome-label{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:14px}
.lf-outcome-label.bad{color:#EF4444}
.lf-outcome-label.good{color:#34D399}
.lf-outcome-item{font-size:.82rem;color:var(--muted);margin-bottom:8px;display:flex;gap:8px;align-items:flex-start;line-height:1.4}

@media(max-width:560px){
  .lf-outcome{grid-template-columns:1fr}
  .lf-track{padding-left:16px}
}
`;

const STEPS = [
  {
    time: 'T + 0 min',
    channel: 'sms',
    channelLabel: 'SMS',
    title: 'Instant Auto-Confirmation',
    preview: '"Hi Sandra! Thanks for reaching out to Peak Service Co. We\'ve got your message and someone will be in touch very shortly."',
    pulse: true,
  },
  {
    time: 'T + 5 min',
    channel: 'sms',
    channelLabel: 'SMS',
    title: 'Personal Follow-Up from Jack',
    preview: '"Hey Sandra, it\'s Jack! I just got your message — would love to jump on a quick call today. Got 5 minutes?"',
  },
  {
    time: 'T + 1 hr',
    channel: 'email',
    channelLabel: 'Email',
    title: 'Value-first email',
    preview: '"Hi Sandra, wanted to share how we helped a client just like you save 15 hours a week last month. I think we can do the same for you..."',
  },
  {
    time: 'T + 24 hrs',
    channel: 'vm',
    channelLabel: 'Voicemail',
    title: 'Ringless voicemail drop',
    preview: '"Hey Sandra, it\'s Jack again. Just wanted to personally follow up — I\'d love to walk you through what we can build for your business."',
  },
  {
    time: 'T + 3 days',
    channel: 'email',
    channelLabel: 'Email',
    title: 'Case study + social proof',
    preview: '"Still thinking it over, Sandra? Here\'s what one of our clients said after their first month working with us..."',
  },
  {
    time: 'T + 7 days',
    channel: 'sms',
    channelLabel: 'SMS',
    title: 'Final check-in',
    preview: '"Hey Sandra, I know timing matters. Whenever you\'re ready, just reply \'ready\' and I\'ll get everything set up. — Jack"',
  },
];

export default function LeadFollowup() {
  return (
    <>
      <Helmet>
        <title>Lead Follow-Up Automation | Nuvion Solutions</title>
        <meta name="description" content="Instantly follow up with every new lead via SMS, email, and voicemail. Automated lead nurturing that dramatically improves close rates — no manual effort required." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/lead-followup" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <Link to="/" className="sp-back">← Back to Home</Link>
      </nav>

      <div className="sp-hero">
        <div className="sp-eyebrow lf">📈 Lead Follow-Up Automation</div>
        <h1 className="sp-h1">Turn every inquiry into<br /><em className="lf-accent">a closed deal</em></h1>
        <p className="sp-sub">Most businesses lose 80% of leads simply by not following up fast enough. Our automation responds within seconds and stays on top of every prospect — automatically, on your behalf.</p>
      </div>

      <div className="sp-wrap">
        <div className="lf-timeline">
          <div className="sp-section-title">The Automated Follow-Up Sequence</div>
          <div className="lf-track">
            {STEPS.map(s => (
              <div key={s.title} className="lf-step">
                <div className={`lf-dot${s.pulse ? ' lf-dot-pulse' : ''}`} />
                <div className="lf-step-body">
                  <div className="lf-step-header">
                    <span className="lf-time">{s.time}</span>
                    <span className={`lf-channel lf-ch-${s.channel}`}>{s.channelLabel}</span>
                  </div>
                  <div className="lf-step-title">{s.title}</div>
                  <div className="lf-step-preview">{s.preview}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="lf-outcome">
            <div className="lf-outcome-card">
              <div className="lf-outcome-label bad">✗ Without Automation</div>
              {['Lead submits form', 'Nobody responds for hours', 'Lead goes cold', 'Competitor gets the deal', 'Revenue lost forever'].map(t => (
                <div key={t} className="lf-outcome-item"><span style={{color:'#EF4444',flexShrink:0}}>×</span>{t}</div>
              ))}
            </div>
            <div className="lf-outcome-card">
              <div className="lf-outcome-label good">✓ With Automation</div>
              {['Lead submits form', 'Instant response in seconds', 'Consistent 7-day nurture', 'Every touchpoint personalized', 'You close more, work less'].map(t => (
                <div key={t} className="lf-outcome-item"><span style={{color:'#34D399',flexShrink:0}}>✓</span>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sp-cta">
        <h2>Stop letting leads slip through the cracks.</h2>
        <p>Book a free call and we'll build your entire follow-up sequence in under a week.</p>
        <Link to="/book" className="sp-cta-btn lf">Book a Free Strategy Call →</Link>
      </div>
    </>
  );
}
