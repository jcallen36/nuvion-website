import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

const CSS = BASE_CSS + FOOTER_CSS + `
.sp-eyebrow.sm{background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.22);color:#F59E0B}
.sm-accent{color:#F59E0B}
.sp-cta-btn.sm{background:#F59E0B;color:#07090F}

/* CALENDAR */
.sm-calendar{padding:20px 0 56px}
.sm-cal-header{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-bottom:10px}
.sm-day-label{font-size:.72rem;font-weight:700;color:var(--dim);text-align:center;text-transform:uppercase;letter-spacing:.07em;padding:6px}
.sm-cal-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:10px}
.sm-cell{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:12px 10px;min-height:90px;display:flex;flex-direction:column;gap:6px}
.sm-post{border-radius:6px;padding:6px 8px;font-size:.72rem;font-weight:600;line-height:1.35;cursor:default}
.sm-post-ig{background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.18);color:#F59E0B}
.sm-post-li{background:rgba(79,110,247,0.1);border:1px solid rgba(79,110,247,0.18);color:#818CF8}
.sm-post-fb{background:rgba(59,130,246,0.1);border:1px solid rgba(59,130,246,0.18);color:#60A5FA}
.sm-post-time{font-size:.6rem;color:var(--dim);margin-top:2px}

/* PLATFORM CARDS */
.sm-platforms{padding:0 0 72px}
.sm-plat-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.sm-plat{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:28px 24px;position:relative;overflow:hidden}
.sm-plat-top{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.sm-plat-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;flex-shrink:0}
.sm-plat-name{font-size:.95rem;font-weight:700}
.sm-plat-feature{display:flex;align-items:center;gap:8px;font-size:.8rem;color:var(--muted);margin-bottom:8px;line-height:1.4}
.sm-plat-feature::before{content:'→';color:var(--dim);flex-shrink:0}
.sm-plat-ig .sm-plat-icon{background:rgba(245,158,11,0.12)}
.sm-plat-li .sm-plat-icon{background:rgba(79,110,247,0.12)}
.sm-plat-fb .sm-plat-icon{background:rgba(59,130,246,0.12)}

@media(max-width:700px){
  .sm-cal-header{grid-template-columns:repeat(3,1fr)}
  .sm-cal-grid{grid-template-columns:repeat(3,1fr)}
  .sm-cal-header > *:nth-child(n+4),
  .sm-cal-grid > *:nth-child(n+4){display:none}
  .sm-plat-grid{grid-template-columns:1fr}
}
`;

const CALENDAR = [
  {
    day: 'Mon',
    posts: [
      { type: 'ig', text: 'Before & After showcase', time: '9:00 AM' },
      { type: 'li', text: 'Industry tip carousel', time: '12:00 PM' },
    ],
  },
  {
    day: 'Tue',
    posts: [
      { type: 'fb', text: 'Client spotlight post', time: '10:00 AM' },
    ],
  },
  {
    day: 'Wed',
    posts: [
      { type: 'ig', text: 'Reel: behind the scenes', time: '11:00 AM' },
      { type: 'li', text: 'Thought leadership article', time: '2:00 PM' },
    ],
  },
  {
    day: 'Thu',
    posts: [
      { type: 'fb', text: 'Promo offer + CTA', time: '9:30 AM' },
      { type: 'ig', text: 'Story: poll + Q&A', time: '4:00 PM' },
    ],
  },
  {
    day: 'Fri',
    posts: [
      { type: 'li', text: 'Week recap + results', time: '11:00 AM' },
      { type: 'ig', text: 'Team / culture post', time: '3:00 PM' },
    ],
  },
];

export default function SocialMediaAI() {
  return (
    <>
      <Helmet>
        <title>Social Media AI Management | Nuvion Solutions</title>
        <meta name="description" content="AI-powered social media management for busy business owners. Content creation, scheduling, and engagement on autopilot for Instagram, LinkedIn, and Facebook." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/social-media-ai" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <Link to="/" className="sp-back">← Back to Home</Link>
      </nav>

      <div className="sp-hero">
        <div className="sp-eyebrow sm">📱 Social Media AI Management</div>
        <h1 className="sp-h1">Your brand, always<br /><em className="sm-accent">active and growing</em></h1>
        <p className="sp-sub">AI-powered content creation, scheduling, and engagement — your social media runs on autopilot while you focus on running your business.</p>
      </div>

      <div className="sp-wrap">
        <div className="sm-calendar">
          <div className="sp-section-title">Your Week, Handled</div>
          <div className="sm-cal-header">
            {CALENDAR.map(d => <div key={d.day} className="sm-day-label">{d.day}</div>)}
          </div>
          <div className="sm-cal-grid">
            {CALENDAR.map(d => (
              <div key={d.day} className="sm-cell">
                {d.posts.map(p => (
                  <div key={p.text} className={`sm-post sm-post-${p.type}`}>
                    {p.text}
                    <div className="sm-post-time">{p.time}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="sm-platforms">
          <div className="sp-section-title">What We Manage Per Platform</div>
          <div className="sm-plat-grid">
            <div className="sm-plat sm-plat-ig">
              <div className="sm-plat-top">
                <div className="sm-plat-icon">📸</div>
                <div className="sm-plat-name">Instagram</div>
              </div>
              <div className="sm-plat-feature">AI-generated images and visual content</div>
              <div className="sm-plat-feature">AI-written captions with hashtag strategy</div>
              <div className="sm-plat-feature">Reels scripts and Story content</div>
              <div className="sm-plat-feature">Optimal posting time scheduling</div>
            </div>
            <div className="sm-plat sm-plat-li">
              <div className="sm-plat-top">
                <div className="sm-plat-icon">💼</div>
                <div className="sm-plat-name">LinkedIn</div>
              </div>
              <div className="sm-plat-feature">Thought leadership articles and carousels</div>
              <div className="sm-plat-feature">Company updates and industry insights</div>
              <div className="sm-plat-feature">Connection outreach message sequences</div>
              <div className="sm-plat-feature">Weekly analytics and performance recap</div>
            </div>
            <div className="sm-plat sm-plat-fb">
              <div className="sm-plat-top">
                <div className="sm-plat-icon">👥</div>
                <div className="sm-plat-name">Facebook</div>
              </div>
              <div className="sm-plat-feature">Community posts and client spotlights</div>
              <div className="sm-plat-feature">Ad-ready content creation</div>
              <div className="sm-plat-feature">Event promotion and announcements</div>
              <div className="sm-plat-feature">Review response automation</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sp-cta">
        <h2>Ready to grow without the grind?</h2>
        <p>Book a free call and we'll show you exactly what a month of AI-managed content looks like for your business.</p>
        <Link to="/book" className="sp-cta-btn sm">Book a Free Strategy Call →</Link>
      </div>
          <Footer />
    </>
  );
}
