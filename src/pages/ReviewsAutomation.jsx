import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

const ACCENT = '#FBBF24';

const CSS = BASE_CSS + FOOTER_CSS + `
.sp-eyebrow.rv{background:rgba(251,191,36,0.08);border:1px solid rgba(251,191,36,0.22);color:${ACCENT}}
.rv-accent{color:${ACCENT}}
.sp-cta-btn.rv{background:${ACCENT};color:#07090F}

/* TIMELINE (reused from the follow-up pattern) */
.rv-flow{padding:20px 0 56px;max-width:720px;margin:0 auto}
.rv-track{position:relative;padding-left:28px}
.rv-track::before{content:'';position:absolute;left:20px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,rgba(251,191,36,0.5),rgba(251,191,36,0.05))}
.rv-step{position:relative}
.rv-step:last-child .rv-step-body{border-bottom:none}
.rv-dot{position:absolute;left:-19px;top:24px;width:14px;height:14px;border-radius:50%;background:var(--bg);border:2px solid ${ACCENT};z-index:2}
.rv-dot-pulse{box-shadow:0 0 0 4px rgba(251,191,36,0.15)}
.rv-step-body{padding:18px 0 24px 28px;border-bottom:1px solid var(--border)}
.rv-step-header{display:flex;align-items:center;gap:12px;margin-bottom:10px;flex-wrap:wrap}
.rv-time{font-size:.7rem;font-weight:700;background:rgba(251,191,36,0.1);border:1px solid rgba(251,191,36,0.2);color:${ACCENT};padding:3px 10px;border-radius:100px;letter-spacing:.04em}
.rv-channel{font-size:.7rem;font-weight:700;padding:3px 10px;border-radius:100px;letter-spacing:.04em}
.rv-ch-sms{background:rgba(79,110,247,0.1);border:1px solid rgba(79,110,247,0.2);color:#4F6EF7}
.rv-ch-system{background:rgba(100,116,139,0.12);border:1px solid rgba(100,116,139,0.25);color:#94A3B8}
.rv-ch-charity{background:rgba(52,211,153,0.1);border:1px solid rgba(52,211,153,0.2);color:#34D399}
.rv-step-title{font-size:.92rem;font-weight:700;color:var(--text);margin-bottom:6px}
.rv-step-preview{font-size:.8rem;color:var(--muted);line-height:1.55;font-style:italic;background:var(--surface);border:1px solid var(--border);padding:10px 14px;border-radius:10px;margin-top:8px}
.rv-step-preview strong{color:var(--text);font-style:normal}

/* CHARITY CALLOUT */
.rv-charity{max-width:760px;margin:8px auto 0;background:linear-gradient(135deg,rgba(52,211,153,0.08),rgba(251,191,36,0.06));border:1px solid rgba(52,211,153,0.22);border-radius:20px;padding:32px 28px;text-align:center}
.rv-charity-emoji{font-size:2.4rem;line-height:1;margin-bottom:14px}
.rv-charity h3{font-size:1.35rem;font-weight:800;color:var(--text);margin-bottom:10px}
.rv-charity p{font-size:.92rem;color:var(--muted);line-height:1.65;max-width:540px;margin:0 auto}
.rv-charity .hl{color:#34D399;font-weight:700}

/* WHY-IT-MATTERS STAT GRID */
.rv-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:760px;margin:0 auto}
.rv-stat{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:24px 18px;text-align:center}
.rv-stat-num{font-size:1.9rem;font-weight:800;color:${ACCENT};line-height:1;margin-bottom:8px}
.rv-stat-label{font-size:.78rem;color:var(--muted);line-height:1.45}

/* OUTCOME */
.rv-outcome{display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:760px;margin:40px auto 72px}
.rv-outcome-card{background:var(--surface);border:1px solid var(--border);border-radius:16px;padding:24px}
.rv-outcome-label{font-size:.68rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:14px}
.rv-outcome-label.bad{color:#EF4444}
.rv-outcome-label.good{color:#34D399}
.rv-outcome-item{font-size:.82rem;color:var(--muted);margin-bottom:8px;display:flex;gap:8px;align-items:flex-start;line-height:1.4}

@media(max-width:560px){
  .rv-outcome{grid-template-columns:1fr}
  .rv-stats{grid-template-columns:1fr}
  .rv-track{padding-left:16px}
}
`;

const STEPS = [
  {
    time: 'Job marked complete',
    channel: 'system',
    channelLabel: 'Trigger',
    title: 'The moment a job wraps, the sequence kicks off',
    preview: 'Your tech closes out the job in your software (or taps once in our app). That\'s the only thing you ever have to do.',
    pulse: true,
  },
  {
    time: 'A couple hours later',
    channel: 'sms',
    channelLabel: 'SMS',
    title: 'A personal, photo-branded review request — with a reason to say yes',
    preview: '"Hi Sandra! Thanks for trusting Peak Plumbing today. If Mike took good care of you, would you leave us a quick review? For every review we get, we donate a meal to a family in need — so you\'d be doing some good too 🙏 [photo of the crew] → [1-tap Google link]"',
  },
  {
    time: 'One tap',
    channel: 'sms',
    channelLabel: 'Customer',
    title: 'They leave the review in seconds',
    preview: 'The link drops them straight onto your Google review page — no searching, no friction. More reviews, higher ranking, more calls.',
  },
  {
    time: 'Every review',
    channel: 'charity',
    channelLabel: 'Impact',
    title: 'A meal goes to a family in need',
    preview: 'The promise from the text, kept — every review you earn funds a meal for a family. Customers love being part of it, and it\'s a big reason they say yes in the first place.',
  },
];

const STATS = [
  { num: '88%', label: 'of people trust online reviews as much as a personal recommendation' },
  { num: '#1', label: 'review quantity + recency is a top driver of your Google Maps ranking' },
  { num: '5–9×', label: 'more reviews collected vs. asking manually — because it never gets forgotten' },
];

export default function ReviewsAutomation() {
  return (
    <>
      <Helmet>
        <title>Reviews Automation | Nuvion Solutions</title>
        <meta name="description" content="Automatically collect a lot more reviews. After every completed job we send a personal, photo-branded text asking for a review — and we donate a meal to a family in need for every review you earn." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/reviews-automation" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <Link to="/" className="sp-back">← Back to Home</Link>
      </nav>

      <div className="sp-hero">
        <div className="sp-eyebrow rv">⭐ Reviews Automation</div>
        <h1 className="sp-h1">A lot more reviews,<br /><em className="rv-accent">on autopilot</em></h1>
        <p className="sp-sub">After every completed job, we automatically send your customer a personal, photo-branded text asking for a review — so your reputation grows without anyone lifting a finger. And for every review you earn, we donate a meal to a family in need.</p>
      </div>

      <div className="sp-wrap">
        <div className="rv-flow">
          <div className="sp-section-title">How It Works</div>
          <div className="rv-track">
            {STEPS.map(s => (
              <div key={s.title} className="rv-step">
                <div className={`rv-dot${s.pulse ? ' rv-dot-pulse' : ''}`} />
                <div className="rv-step-body">
                  <div className="rv-step-header">
                    <span className="rv-time">{s.time}</span>
                    <span className={`rv-channel rv-ch-${s.channel}`}>{s.channelLabel}</span>
                  </div>
                  <div className="rv-step-title">{s.title}</div>
                  <div className="rv-step-preview">{s.preview}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Charity differentiator */}
        <div className="rv-charity">
          <div className="rv-charity-emoji">🍽️</div>
          <h3>Every review feeds a family</h3>
          <p>This is what makes it different. For <span className="hl">every single review</span> your business earns, we donate a meal to a family in need. Your customers love being part of it, your reviews climb, and your business does real good in the world — all from the work you're already doing.</p>
        </div>

        <div style={{ height: '56px' }} />
        <div className="sp-section-title">Why Reviews Are Worth So Much</div>
        <div className="rv-stats">
          {STATS.map(s => (
            <div key={s.label} className="rv-stat">
              <div className="rv-stat-num">{s.num}</div>
              <div className="rv-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="rv-outcome">
          <div className="rv-outcome-card">
            <div className="rv-outcome-label bad">✗ Asking Manually</div>
            {['You mean to ask, then forget', 'Only your happiest 1-in-20 ever posts', 'Competitors out-rank you on Google', 'Reputation grows by luck, not system', 'Great work, invisible online'].map(t => (
              <div key={t} className="rv-outcome-item"><span style={{color:'#EF4444',flexShrink:0}}>×</span>{t}</div>
            ))}
          </div>
          <div className="rv-outcome-card">
            <div className="rv-outcome-label good">✓ With Reviews Automation</div>
            {['Every customer gets asked, every time', 'Personal + photo-branded = way higher response', '1-tap link straight to Google', 'Climb the local map pack automatically', 'A meal donated for every review'].map(t => (
              <div key={t} className="rv-outcome-item"><span style={{color:'#34D399',flexShrink:0}}>✓</span>{t}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="sp-cta">
        <h2>Turn every finished job into another review.</h2>
        <p>Book a free call and we'll set up your entire review engine — and start feeding families with every review you earn.</p>
        <Link to="/book" className="sp-cta-btn rv">Book a Free Strategy Call →</Link>
      </div>
      <Footer />
    </>
  );
}
