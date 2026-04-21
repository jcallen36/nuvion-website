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

/* PAID ADS SECTION */
.sm-ads{padding:0 0 72px}
.sm-ads-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.sm-ad-card{background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:28px 24px;position:relative;overflow:hidden;transition:border-color .3s,transform .3s}
.sm-ad-card:hover{transform:translateY(-3px);border-color:rgba(245,158,11,0.3)}
.sm-ad-card::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,#F59E0B,transparent);opacity:0;transition:opacity .3s}
.sm-ad-card:hover::after{opacity:1}
.sm-ad-top{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.sm-ad-icon{width:48px;height:48px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.4rem;flex-shrink:0}
.sm-ad-name{font-size:1rem;font-weight:700}
.sm-ad-desc{font-size:.82rem;color:var(--muted);line-height:1.6;margin-bottom:14px}
.sm-ad-features{display:flex;flex-direction:column;gap:8px}
.sm-ad-feat{display:flex;align-items:center;gap:8px;font-size:.78rem;color:var(--muted);line-height:1.4}
.sm-ad-feat::before{content:'✓';color:#F59E0B;font-weight:700;flex-shrink:0}
.sm-ad-fb .sm-ad-icon{background:rgba(59,130,246,0.12)}
.sm-ad-tt .sm-ad-icon{background:rgba(236,72,153,0.12)}
.sm-ad-gg .sm-ad-icon{background:rgba(52,211,153,0.12)}

@media(max-width:700px){
  .sm-cal-header{grid-template-columns:repeat(3,1fr)}
  .sm-cal-grid{grid-template-columns:repeat(3,1fr)}
  .sm-cal-header > *:nth-child(n+4),
  .sm-cal-grid > *:nth-child(n+4){display:none}
  .sm-plat-grid{grid-template-columns:1fr}
  .sm-ads-grid{grid-template-columns:1fr}
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
        <title>Social Media AI Management & Paid Ads | Nuvion Solutions</title>
        <meta name="description" content="AI-powered social media management and paid advertising for busy business owners. Content creation, scheduling, engagement, plus Facebook Ads, TikTok Ads, and Google Ads management." />
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
        <p className="sp-sub">AI-powered content creation, scheduling, engagement, and paid advertising — your social media and ad campaigns run on autopilot while you focus on running your business.</p>
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

        <div className="sm-ads">
          <div className="sp-section-title">Paid Ads Management</div>
          <div className="sm-ads-grid">
            <div className="sm-ad-card sm-ad-fb">
              <div className="sm-ad-top">
                <div className="sm-ad-icon">📘</div>
                <div className="sm-ad-name">Facebook & Instagram Ads</div>
              </div>
              <div className="sm-ad-desc">Targeted ad campaigns across Meta's platforms — reaching the exact audiences most likely to convert into paying customers.</div>
              <div className="sm-ad-features">
                <div className="sm-ad-feat">Custom audience building and lookalikes</div>
                <div className="sm-ad-feat">AI-optimized ad creative and copy</div>
                <div className="sm-ad-feat">Retargeting campaigns that recapture lost leads</div>
                <div className="sm-ad-feat">A/B testing and continuous optimization</div>
              </div>
            </div>
            <div className="sm-ad-card sm-ad-tt">
              <div className="sm-ad-top">
                <div className="sm-ad-icon">🎵</div>
                <div className="sm-ad-name">TikTok Ads</div>
              </div>
              <div className="sm-ad-desc">Tap into TikTok's massive, engaged audience with short-form video ads that feel native and drive real results.</div>
              <div className="sm-ad-features">
                <div className="sm-ad-feat">Scroll-stopping creative production</div>
                <div className="sm-ad-feat">Interest and behavior-based targeting</div>
                <div className="sm-ad-feat">Spark Ads and in-feed video campaigns</div>
                <div className="sm-ad-feat">Performance tracking and scaling strategies</div>
              </div>
            </div>
            <div className="sm-ad-card sm-ad-gg">
              <div className="sm-ad-top">
                <div className="sm-ad-icon">🔍</div>
                <div className="sm-ad-name">Google Ads</div>
              </div>
              <div className="sm-ad-desc">Capture high-intent buyers actively searching for your services with Google Search, Display, and YouTube ad campaigns.</div>
              <div className="sm-ad-features">
                <div className="sm-ad-feat">Keyword research and bid strategy optimization</div>
                <div className="sm-ad-feat">Search, Display, and YouTube campaigns</div>
                <div className="sm-ad-feat">Landing page alignment for higher conversions</div>
                <div className="sm-ad-feat">Monthly reporting with clear ROI tracking</div>
              </div>
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
