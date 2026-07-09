import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* ─────────────────────────────────────────────────────────────
   Reviews Automation — service page.
   Ink on porcelain paper; Zodiak / General Sans / Fragment Mono.
───────────────────────────────────────────────────────────── */

const CSS = `
/* Section scaffold */
.rv-main{padding-bottom:var(--pad-section)}
.rv-section{padding-top:var(--pad-section)}
.rv-head{margin-bottom:clamp(32px,4.5vw,52px);display:grid;grid-template-columns:1fr;gap:14px}
@media(min-width:900px){.rv-head{grid-template-columns:230px 1fr;gap:44px;align-items:start}}
.rv-index{font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);padding-top:10px;display:flex;gap:10px;align-items:baseline}
.rv-index::after{content:'';flex:1;height:1px;background:var(--hairline);align-self:center}
.rv-h2{font-family:var(--serif);font-weight:700;font-size:clamp(1.8rem,3.2vw,2.6rem);line-height:1.08;letter-spacing:-.018em;max-width:22ch}
.rv-h2 em{font-style:italic;font-weight:400;color:var(--petrol)}
.rv-lede{font-size:1rem;color:var(--muted-2);line-height:1.7;max-width:56ch;margin-top:12px}

/* The sequence — ruled ledger rows */
.rv-steps{border-top:1px solid var(--hairline)}
.rv-step{display:grid;grid-template-columns:44px 1fr;gap:14px 16px;padding:clamp(22px,3vw,32px) 6px;border-bottom:1px solid var(--hairline);transition:background .2s,padding-left .2s}
.rv-step:hover{background:var(--card);padding-left:14px}
@media(min-width:860px){.rv-step{grid-template-columns:56px 200px 1fr;gap:24px}}
.rv-num{font-family:var(--mono);font-size:.75rem;color:var(--petrol);font-variant-numeric:tabular-nums;padding-top:6px}
.rv-meta{display:flex;flex-direction:row;flex-wrap:wrap;align-items:baseline;gap:6px 14px}
@media(min-width:860px){.rv-meta{flex-direction:column;padding-top:5px}}
.rv-when{font-family:var(--mono);font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--ink)}
.rv-chip{font-family:var(--mono);font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol)}
.rv-step-content{grid-column:2}
@media(min-width:860px){.rv-step-content{grid-column:3;grid-row:1}}
.rv-step-title{font-family:var(--serif);font-size:clamp(1.15rem,2vw,1.45rem);font-weight:700;letter-spacing:-.012em;line-height:1.2;margin-bottom:8px}
.rv-step-body{font-size:.93rem;color:var(--muted-2);line-height:1.68;max-width:60ch}
.rv-msg{margin-top:16px;background:var(--card);border:1px solid var(--hairline);border-left:2px solid var(--petrol);border-radius:0 8px 8px 0;padding:16px 20px;font-size:.88rem;font-style:italic;color:var(--muted-2);line-height:1.66;max-width:58ch}
.rv-msg-label{display:block;font-family:var(--mono);font-style:normal;font-size:.62rem;letter-spacing:.18em;text-transform:uppercase;color:var(--petrol);margin-bottom:8px}

/* The meal promise */
.rv-charity{padding:clamp(30px,4.5vw,50px);border-top:2px solid var(--petrol)}
.rv-charity .label{display:block;margin-bottom:14px}
.rv-charity h3{font-family:var(--serif);font-size:clamp(1.5rem,2.6vw,2.1rem);font-weight:700;letter-spacing:-.015em;line-height:1.12;margin-bottom:12px;max-width:24ch}
.rv-charity p{font-size:.95rem;color:var(--muted-2);line-height:1.7;max-width:62ch}
.rv-charity p strong{color:var(--ink);font-weight:600}
.rv-equation{margin-top:28px;padding-top:22px;border-top:1px solid var(--hairline);display:flex;align-items:center;gap:16px;font-family:var(--mono);font-size:.75rem;letter-spacing:.18em;text-transform:uppercase;color:var(--petrol)}
.rv-equation .rv-eq-arrow{transition:transform .2s var(--ease-out)}
.rv-charity:hover .rv-eq-arrow{transform:translateX(4px)}

/* Why reviews carry weight */
.rv-quote{font-family:var(--serif);font-size:clamp(1.4rem,2.7vw,2.05rem);font-style:italic;font-weight:400;line-height:1.32;letter-spacing:-.01em;max-width:30ch}
.rv-quote::before{content:'\\201C';color:var(--petrol)}
.rv-quote::after{content:'\\201D';color:var(--petrol)}
.rv-quote-src{margin-top:20px;display:flex;align-items:center;gap:12px;font-family:var(--mono);font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--muted-2)}
.rv-quote-src::before{content:'';width:34px;height:1px;background:var(--petrol)}
.rv-why{margin-top:clamp(36px,5vw,56px);border-top:1px solid var(--hairline)}
.rv-why-row{display:grid;grid-template-columns:44px 1fr;gap:14px 16px;padding:clamp(22px,3vw,32px) 6px;border-bottom:1px solid var(--hairline);align-items:baseline;transition:background .2s,padding-left .2s}
.rv-why-row:hover{background:var(--card);padding-left:14px}
@media(min-width:860px){.rv-why-row{grid-template-columns:56px 1fr 1fr;gap:24px}}
.rv-why-title{font-family:var(--serif);font-size:clamp(1.25rem,2.2vw,1.6rem);font-weight:700;letter-spacing:-.014em;line-height:1.2}
.rv-why-body{font-size:.93rem;color:var(--muted-2);line-height:1.68;max-width:48ch}
@media(max-width:859px){.rv-why-body{grid-column:2}}

/* With and without — the ledger */
.rv-compare{display:grid;grid-template-columns:1fr;gap:20px}
@media(min-width:820px){.rv-compare{grid-template-columns:1fr 1fr}}
.rv-col{padding:26px 30px 20px;transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out)}
.rv-col:hover{transform:translateY(-3px);box-shadow:var(--shadow-2)}
.rv-col-label{font-family:var(--mono);font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;padding-bottom:16px;border-bottom:1px solid var(--hairline);margin-bottom:6px}
.rv-col-label.manual{color:var(--muted-2)}
.rv-col-label.system{color:var(--petrol)}
.rv-li{display:flex;align-items:baseline;gap:12px;padding:11px 0;border-bottom:1px solid var(--hairline);font-size:.9rem;color:var(--ink);line-height:1.5}
.rv-li:last-child{border-bottom:none}
.rv-li::before{content:'\\2014';font-family:var(--mono);font-size:.8rem;flex-shrink:0}
.rv-col-manual .rv-li{color:var(--muted-2)}
.rv-col-manual .rv-li::before{color:var(--muted-2)}
.rv-col-system .rv-li::before{color:var(--petrol)}

/* CTA band alignment */
.rv-cta-inner{max-width:1140px;margin:0 auto}
.sp-cta .label{color:rgba(244,242,236,.5);display:block;margin-bottom:18px}
`;

const STEPS = [
  {
    num: '01',
    when: 'Job marked complete',
    chip: 'Trigger',
    title: 'The moment a job wraps, the sequence starts',
    body: 'Your tech closes out the job in your software — or taps once in our app. That’s the only thing anyone on your team ever has to do.',
  },
  {
    num: '02',
    when: 'A couple hours later',
    chip: 'SMS',
    title: 'A personal, photo-branded review request — with a reason to say yes',
    body: 'Not a faceless survey link. The text carries your company’s name, a photo of the crew, and the donation promise — a genuine reason for your customer to take thirty seconds.',
    msg: 'Hi Sandra! Thanks for trusting Peak Plumbing today. If Mike took good care of you, would you leave us a quick review? For every review we get, we donate a meal to a family in need — so you’d be doing some good too. [Photo of the crew] [One-tap Google link]',
  },
  {
    num: '03',
    when: 'One tap',
    chip: 'Customer',
    title: 'They leave the review in seconds',
    body: 'The link drops them straight onto your Google review page — no searching, no friction. The ask lands while the good work is still fresh in their mind.',
  },
  {
    num: '04',
    when: 'Every review',
    chip: 'Impact',
    title: 'A meal goes to a family in need',
    body: 'The promise from the text, kept — every review your business earns funds a meal for a family. Customers love being part of it, and it’s a big reason they say yes in the first place.',
  },
];

const WHY = [
  {
    num: '01',
    title: 'Volume and recency move the map.',
    body: 'Review volume and recency are major factors in local ranking. When someone searches for your trade nearby, a steady stream of fresh reviews keeps your business in the conversation.',
  },
  {
    num: '02',
    title: 'A system asks every time. People remember sometimes.',
    body: 'Most missing reviews are lost to forgetting, not unwillingness. When the ask goes out after every completed job, every happy customer gets the chance to say so.',
  },
];

const MANUAL = [
  'You mean to ask, then forget',
  'Only your happiest customers think to post',
  'Competitors with fresher reviews look busier',
  'Reputation grows by luck, not by system',
  'Great work stays invisible online',
];

const AUTOMATED = [
  'Every customer gets asked, every time',
  'A personal, photo-branded ask — not a survey link',
  'One-tap link straight to your Google review page',
  'Review volume and recency working in your favor',
  'A meal donated for every review earned',
];

export default function ReviewsAutomation() {
  return (
    <>
      <Helmet>
        <title>Reviews Automation | Nuvion Solutions</title>
        <meta name="description" content="Automatically collect a lot more reviews. After every completed job we send a personal, photo-branded text asking for a review — and we donate a meal to a family in need for every review you earn." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/reviews-automation" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + FOOTER_CSS + CSS }} />
      <div className="grain" aria-hidden="true" />

      <SiteNav />

      <header className="sp-hero">
        <div className="sp-eyebrow">Reviews Automation</div>
        <h1 className="sp-h1">A lot more reviews, <em>on autopilot</em>.</h1>
        <p className="sp-sub">
          After every completed job, we automatically send your customer a personal,
          photo-branded text asking for a review — so your reputation grows without
          anyone lifting a finger. And for every review you earn, we donate a meal
          to a family in need.
        </p>
      </header>

      <div className="sp-wrap rv-main">
        {/* № 01 — How it works */}
        <section className="rv-section">
          <div className="rv-head">
            <div className="rv-index">№ 01 — How it works</div>
            <div>
              <h2 className="rv-h2">One job closed. <em>One ask sent.</em></h2>
              <p className="rv-lede">
                The whole sequence runs off the workflow you already have.
                Nobody on your crew writes a text, copies a link, or remembers anything.
              </p>
            </div>
          </div>
          <div className="rv-steps" role="list">
            {STEPS.map(s => (
              <div key={s.num} className="rv-step" role="listitem">
                <span className="rv-num tnum">{s.num}</span>
                <div className="rv-meta">
                  <span className="rv-when">{s.when}</span>
                  <span className="rv-chip">{s.chip}</span>
                </div>
                <div className="rv-step-content">
                  <h3 className="rv-step-title">{s.title}</h3>
                  <p className="rv-step-body">{s.body}</p>
                  {s.msg && (
                    <div className="rv-msg">
                      <span className="rv-msg-label">Sample text</span>
                      {s.msg}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* № 02 — One review, one meal */}
        <section className="rv-section">
          <div className="rv-head">
            <div className="rv-index">№ 02 — The part that does good</div>
            <div>
              <h2 className="rv-h2">Every review <em>feeds a family</em>.</h2>
            </div>
          </div>
          <div className="plate rv-charity">
            <span className="label">The promise inside every text</span>
            <h3>This is what makes it different.</h3>
            <p>
              For <strong>every single review</strong> your business earns, we donate
              a meal to a family in need. Your customers love being part of it, your
              reviews climb, and your business does real good in the world — all from
              the work you’re already doing.
            </p>
            <div className="rv-equation">
              <span>1 review</span>
              <span className="rv-eq-arrow" aria-hidden="true">→</span>
              <span>1 meal donated</span>
            </div>
          </div>
        </section>

        {/* № 03 — Why reviews carry weight */}
        <section className="rv-section">
          <div className="rv-head">
            <div className="rv-index">№ 03 — Why it matters</div>
            <div>
              <h2 className="rv-h2">Why reviews are <em>worth so much</em>.</h2>
            </div>
          </div>
          <figure style={{ margin: 0 }}>
            <blockquote className="rv-quote" style={{ margin: 0 }}>
              Most people trust online reviews as much as personal recommendations.
            </blockquote>
            <figcaption className="rv-quote-src">
              BrightLocal consumer research — industry finding, not a client claim
            </figcaption>
          </figure>
          <div className="rv-why">
            {WHY.map(w => (
              <div key={w.num} className="rv-why-row">
                <span className="rv-num tnum">{w.num}</span>
                <h3 className="rv-why-title">{w.title}</h3>
                <p className="rv-why-body">{w.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* № 04 — With and without */}
        <section className="rv-section">
          <div className="rv-head">
            <div className="rv-index">№ 04 — With and without</div>
            <div>
              <h2 className="rv-h2">The same good work, <em>finally counted</em>.</h2>
            </div>
          </div>
          <div className="rv-compare">
            <div className="plate rv-col rv-col-manual">
              <div className="rv-col-label manual">Asking manually</div>
              {MANUAL.map(t => (
                <div key={t} className="rv-li">{t}</div>
              ))}
            </div>
            <div className="plate rv-col rv-col-system">
              <div className="rv-col-label system">With Reviews Automation</div>
              {AUTOMATED.map(t => (
                <div key={t} className="rv-li">{t}</div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="sp-cta">
        <div className="rv-cta-inner">
          <span className="label">№ 05 — Start here</span>
          <h2>Turn every finished job into another review.</h2>
          <p>
            Book a free call and we’ll set up your entire review engine — and start
            feeding families with every review you earn.
          </p>
          <Link to="/book" className="sp-cta-btn">Book a free strategy call →</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
