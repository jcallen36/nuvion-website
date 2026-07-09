import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* ─────────────────────────────────────────────────────────────
   Social Media AI — service page.
   Ink on porcelain paper; Zodiak / General Sans / Fragment Mono.
───────────────────────────────────────────────────────────── */

const CSS = `
/* SECTIONS */
.sm-section{padding:clamp(56px,8vw,96px) 0 0}
.sm-section.sm-last{padding-bottom:var(--pad-section)}
.sm-head{margin-bottom:clamp(28px,4vw,44px)}
.sm-head .sp-section-title{margin-bottom:0}
.sm-index{display:flex;align-items:center;gap:10px;font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);margin-bottom:16px}
.sm-index::after{content:'';flex:1;max-width:220px;height:1px;background:var(--hairline)}
.sm-lede{font-size:.98rem;color:var(--muted-2);line-height:1.7;max-width:60ch;margin-top:12px}

/* CONTENT LEDGER — a sample managed week */
.sm-ledger{border-top:1px solid var(--hairline)}
.sm-row{display:grid;grid-template-columns:56px 1fr;gap:4px 16px;padding:16px 6px;border-bottom:1px solid var(--hairline);transition:background .18s,padding-left .18s}
@media(min-width:720px){.sm-row{grid-template-columns:64px 1fr 300px;align-items:baseline;gap:20px}}
.sm-row:hover{background:var(--card);padding-left:14px}
.sm-day{font-family:var(--mono);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted-2);padding-top:4px}
.sm-post{font-family:var(--serif);font-size:1.08rem;font-weight:700;letter-spacing:-.008em;line-height:1.3}
.sm-meta{grid-column:2;display:flex;gap:16px;align-items:baseline}
@media(min-width:720px){.sm-meta{grid-column:auto;justify-content:space-between}}
.sm-net{font-family:var(--mono);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--petrol)}
.sm-time{font-family:var(--mono);font-size:.72rem;color:var(--muted-2);font-variant-numeric:tabular-nums}
.sm-note{margin-top:16px;font-family:var(--mono);font-size:.7rem;letter-spacing:.08em;color:var(--muted-2)}

/* PLATES — platforms & paid ads */
.sm-grid{display:grid;grid-template-columns:1fr;gap:20px}
@media(min-width:880px){.sm-grid{grid-template-columns:repeat(3,1fr)}}
.sm-plate{padding:28px 26px 24px;display:flex;flex-direction:column;transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out)}
.sm-plate:hover{transform:translateY(-4px);box-shadow:var(--shadow-2)}
.sm-kicker{display:flex;justify-content:space-between;align-items:baseline;font-family:var(--mono);font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;color:var(--petrol);padding-bottom:14px;border-bottom:1px solid var(--hairline);margin-bottom:18px}
.sm-kicker .sm-n{color:var(--muted-2);font-variant-numeric:tabular-nums}
.sm-plate h3{font-family:var(--serif);font-size:1.35rem;font-weight:700;letter-spacing:-.012em;line-height:1.15;margin-bottom:12px}
.sm-desc{font-size:.9rem;color:var(--muted-2);line-height:1.66;margin-bottom:16px;max-width:44ch}
.sm-list{list-style:none;display:flex;flex-direction:column;margin-top:auto}
.sm-list li{display:flex;align-items:baseline;gap:12px;padding:9px 0;font-size:.88rem;color:var(--ink);line-height:1.5;border-bottom:1px solid var(--hairline)}
.sm-list li:last-child{border-bottom:none;padding-bottom:0}
.sm-list li::before{content:'—';color:var(--petrol);font-family:var(--mono);font-size:.8rem;flex-shrink:0}

/* CTA */
.sm-cta-inner{max-width:1076px;margin:0 auto}
.sp-cta .label{display:block;color:rgba(244,242,236,.5);margin-bottom:18px}
`;

/* ── Data ─────────────────────────────────────────────────── */
const WEEK = [
  { day: 'Mon', post: 'Before & after showcase', net: 'Instagram', time: '9:00 AM' },
  { day: 'Mon', post: 'Industry tip carousel', net: 'LinkedIn', time: '12:00 PM' },
  { day: 'Tue', post: 'Client spotlight post', net: 'Facebook', time: '10:00 AM' },
  { day: 'Wed', post: 'Reel: behind the scenes', net: 'Instagram', time: '11:00 AM' },
  { day: 'Wed', post: 'Thought leadership article', net: 'LinkedIn', time: '2:00 PM' },
  { day: 'Thu', post: 'Promo offer + CTA', net: 'Facebook', time: '9:30 AM' },
  { day: 'Thu', post: 'Story: poll + Q&A', net: 'Instagram', time: '4:00 PM' },
  { day: 'Fri', post: 'Week recap', net: 'LinkedIn', time: '11:00 AM' },
  { day: 'Fri', post: 'Team / culture post', net: 'Instagram', time: '3:00 PM' },
];

const PLATFORMS = [
  {
    name: 'Instagram',
    items: [
      'AI-generated images and visual content',
      'AI-written captions with hashtag strategy',
      'Reels scripts and Story content',
      'Optimal posting time scheduling',
    ],
  },
  {
    name: 'LinkedIn',
    items: [
      'Thought leadership articles and carousels',
      'Company updates and industry insights',
      'Connection outreach message sequences',
      'Weekly analytics and performance recap',
    ],
  },
  {
    name: 'Facebook',
    items: [
      'Community posts and client spotlights',
      'Ad-ready content creation',
      'Event promotion and announcements',
      'Review response automation',
    ],
  },
];

const ADS = [
  {
    name: 'Facebook & Instagram Ads',
    desc: 'Targeted ad campaigns across Meta’s platforms — reaching the audiences most likely to convert into paying customers.',
    items: [
      'Custom audience building and lookalikes',
      'AI-optimized ad creative and copy',
      'Retargeting campaigns that recapture lost leads',
      'A/B testing and continuous optimization',
    ],
  },
  {
    name: 'TikTok Ads',
    desc: 'Short-form video ads that feel native to the feed, built to reach TikTok’s engaged audience.',
    items: [
      'Scroll-stopping creative production',
      'Interest and behavior-based targeting',
      'Spark Ads and in-feed video campaigns',
      'Performance tracking and scaling strategies',
    ],
  },
  {
    name: 'Google Ads',
    desc: 'Capture high-intent buyers actively searching for your services with Google Search, Display, and YouTube ad campaigns.',
    items: [
      'Keyword research and bid strategy optimization',
      'Search, Display, and YouTube campaigns',
      'Landing page alignment for higher conversions',
      'Monthly reporting with clear ROI tracking',
    ],
  },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function SocialMediaAI() {
  return (
    <>
      <Helmet>
        <title>Social Media AI Management & Paid Ads | Nuvion Solutions</title>
        <meta name="description" content="AI-powered social media management and paid advertising for busy business owners. Content creation, scheduling, engagement, plus Facebook Ads, TikTok Ads, and Google Ads management." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/social-media-ai" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + FOOTER_CSS + CSS }} />
      <div className="grain" aria-hidden="true" />

      <SiteNav />

      <header className="sp-hero">
        <div className="sp-eyebrow">Social Media AI Management</div>
        <h1 className="sp-h1">Your brand, always <em>active and growing</em>.</h1>
        <p className="sp-sub">
          AI-powered content creation, scheduling, engagement, and paid
          advertising — your social media and ad campaigns run on autopilot
          while you focus on running your business.
        </p>
      </header>

      <main className="sp-wrap">
        <section className="sm-section">
          <div className="sm-head">
            <div className="sm-index">№ 01 — The calendar</div>
            <h2 className="sp-section-title">Your week, handled.</h2>
            <p className="sm-lede">
              Planned, written, and scheduled ahead of time — a full content
              calendar across the platforms your customers actually use.
            </p>
          </div>
          <div className="sm-ledger" role="list">
            {WEEK.map((r, i) => (
              <div key={`${r.day}-${r.time}`} className="sm-row" role="listitem">
                <span className="sm-day">{i === 0 || WEEK[i - 1].day !== r.day ? r.day : ''}</span>
                <span className="sm-post">{r.post}</span>
                <span className="sm-meta">
                  <span className="sm-net">{r.net}</span>
                  <span className="sm-time">{r.time}</span>
                </span>
              </div>
            ))}
          </div>
          <p className="sm-note">A representative week — every calendar is planned around your business.</p>
        </section>

        <section className="sm-section">
          <div className="sm-head">
            <div className="sm-index">№ 02 — Per platform</div>
            <h2 className="sp-section-title">What we manage, platform by platform.</h2>
          </div>
          <div className="sm-grid">
            {PLATFORMS.map((p, i) => (
              <div key={p.name} className="plate sm-plate">
                <div className="sm-kicker">
                  <span>Channel</span>
                  <span className="sm-n">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{p.name}</h3>
                <ul className="sm-list">
                  {p.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="sm-section sm-last">
          <div className="sm-head">
            <div className="sm-index">№ 03 — Paid ads</div>
            <h2 className="sp-section-title">Paid ads management.</h2>
            <p className="sm-lede">
              Organic content keeps your brand present; paid campaigns put it
              in front of new customers. We build, run, and report on both.
            </p>
          </div>
          <div className="sm-grid">
            {ADS.map((a, i) => (
              <div key={a.name} className="plate sm-plate">
                <div className="sm-kicker">
                  <span>Campaign</span>
                  <span className="sm-n">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{a.name}</h3>
                <p className="sm-desc">{a.desc}</p>
                <ul className="sm-list">
                  {a.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>

      <section className="sp-cta">
        <div className="sm-cta-inner">
          <div className="label">№ 04 — Start here</div>
          <h2>Ready to grow without the grind?</h2>
          <p>
            Book a free call and we’ll show you exactly what a month of
            AI-managed content looks like for your business.
          </p>
          <Link to="/book" className="sp-cta-btn">Book a free strategy call <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
