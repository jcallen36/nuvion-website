import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* ─────────────────────────────────────────────────────────────
   Lead Follow-Up — service page.
   Ink on porcelain paper; Zodiak / General Sans / Fragment Mono.
───────────────────────────────────────────────────────────── */

const CSS = `
/* Section scaffold */
.lf-section{padding:var(--pad-section) 0}
.lf-head{margin-bottom:clamp(36px,5vw,60px);display:grid;grid-template-columns:1fr;gap:16px}
@media(min-width:900px){.lf-head{grid-template-columns:230px 1fr;gap:44px;align-items:start}}
.lf-index{font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);padding-top:12px;display:flex;gap:10px;align-items:baseline}
.lf-index::after{content:'';flex:1;height:1px;background:var(--hairline);align-self:center}
.lf-h2{font-family:var(--serif);font-weight:700;font-size:clamp(1.9rem,3.4vw,2.8rem);line-height:1.07;letter-spacing:-.018em;max-width:22ch}
.lf-h2 em{font-style:italic;font-weight:400;color:var(--petrol)}
.lf-sub{font-size:.98rem;color:var(--muted-2);line-height:1.7;max-width:60ch;margin-top:14px}

/* The sequence — ruled index rows */
.lf-fig{display:block;margin-bottom:18px}
.lf-seq{border-top:1px solid var(--hairline)}
.lf-step{display:grid;grid-template-columns:44px 1fr;gap:14px;padding:26px 6px 30px;border-bottom:1px solid var(--hairline);transition:background .2s,padding-left .2s}
@media(min-width:820px){.lf-step{grid-template-columns:56px 170px 1fr;gap:26px}}
.lf-step:hover{background:var(--card);padding-left:14px}
.lf-num{font-family:var(--mono);font-size:.75rem;color:var(--petrol);font-variant-numeric:tabular-nums;padding-top:5px}
.lf-when{display:flex;flex-direction:row;align-items:center;gap:10px;flex-wrap:wrap}
@media(min-width:820px){.lf-when{flex-direction:column;align-items:flex-start;padding-top:2px}}
@media(max-width:819px){.lf-body{grid-column:2}}
.lf-time{font-family:var(--mono);font-size:.78rem;letter-spacing:.06em;color:var(--ink);font-variant-numeric:tabular-nums;white-space:nowrap}
.lf-chan{font-family:var(--mono);font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:var(--petrol);border:1px solid var(--hairline);background:var(--card);padding:4px 9px;border-radius:4px}
.lf-step-title{font-family:var(--serif);font-size:1.28rem;font-weight:700;letter-spacing:-.012em;line-height:1.2}
.lf-msg{margin-top:14px;background:var(--card);border:1px solid var(--hairline);border-left:2px solid var(--petrol);border-radius:0 8px 8px 0;padding:15px 20px 16px;max-width:60ch;box-shadow:var(--shadow-1)}
.lf-msg-meta{font-family:var(--mono);font-size:.6rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted-2);margin-bottom:8px}
.lf-msg-meta b{color:var(--petrol);font-weight:400}
.lf-msg-body{font-family:var(--serif);font-size:.98rem;font-style:italic;color:var(--ink);line-height:1.55}

/* Two endings — bone band comparison */
.lf-band{background:var(--bone);border-top:1px solid var(--hairline);border-bottom:1px solid var(--hairline)}
.lf-compare{display:grid;grid-template-columns:1fr;gap:20px}
@media(min-width:820px){.lf-compare{grid-template-columns:1fr 1fr}}
.lf-col{padding:26px 28px 12px;transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out)}
.lf-col:hover{transform:translateY(-4px);box-shadow:var(--shadow-2)}
.lf-col-label{font-family:var(--mono);font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;padding-bottom:14px;border-bottom:1px solid var(--hairline)}
.lf-col--without .lf-col-label{color:var(--muted-2)}
.lf-col--with .lf-col-label{color:var(--petrol)}
.lf-line{display:flex;gap:14px;align-items:baseline;padding:13px 2px;border-bottom:1px solid var(--hairline);font-size:.92rem;line-height:1.5}
.lf-line:last-child{border-bottom:none}
.lf-line-num{font-family:var(--mono);font-size:.7rem;font-variant-numeric:tabular-nums;flex-shrink:0}
.lf-col--without .lf-line{color:var(--muted-2)}
.lf-col--without .lf-line-num{color:var(--muted-2)}
.lf-col--with .lf-line{color:var(--ink)}
.lf-col--with .lf-line-num{color:var(--petrol)}

/* CTA band — label color comes from shared (#8A9590 on the paper band) */
.sp-cta-inner{max-width:1076px;margin:0 auto}
.sp-cta .label{display:block;margin-bottom:20px}
`;

/* Illustrative sequence — “Owner” and “Customer” are neutral roles,
   not real people. No client results are quoted anywhere. */
const STEPS = [
  {
    n: '01',
    time: 'T + 0 min',
    channel: 'SMS',
    title: 'Instant confirmation',
    msg: '“Thanks for reaching out — we’ve received your message, and someone will be in touch shortly.”',
  },
  {
    n: '02',
    time: 'T + 5 min',
    channel: 'SMS',
    title: 'A personal follow-up',
    msg: '“Hi, it’s the owner — I just saw your message and I’d love to help. Do you have five minutes for a quick call today?”',
  },
  {
    n: '03',
    time: 'T + 1 hr',
    channel: 'Email',
    title: 'A value-first email',
    msg: '“While you’re deciding, here’s a quick look at how we work — what to expect, how scheduling goes, and answers to the questions we hear most.”',
  },
  {
    n: '04',
    time: 'T + 3 days',
    channel: 'Email',
    title: 'Social proof, on schedule',
    msg: '“Still thinking it over? No rush — here’s a bit more of our recent work, and where to find our reviews, in case it helps the decision.”',
  },
  {
    n: '05',
    time: 'T + 7 days',
    channel: 'SMS',
    title: 'The final check-in',
    msg: '“Checking in one last time — whenever you’re ready, just reply here and we’ll get you on the schedule.”',
  },
];

const WITHOUT = [
  'A lead submits your form',
  'Nobody responds for hours',
  'The lead goes cold',
  'A competitor gets the deal',
  'The revenue is lost for good',
];

const WITH = [
  'A lead submits your form',
  'An instant response, within seconds',
  'A consistent seven-day nurture',
  'Every touchpoint personalized',
  'You close more, work less',
];

export default function LeadFollowup() {
  return (
    <>
      <Helmet>
        <title>Lead Follow-Up Automation | Nuvion Solutions</title>
        <meta name="description" content="Instantly follow up with every new lead via SMS and email. Automated lead nurturing that dramatically improves close rates — no manual effort required." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/lead-followup" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + FOOTER_CSS + CSS }} />
      <div className="grain" aria-hidden="true" />

      <SiteNav />

      <header className="sp-hero">
        <div className="sp-eyebrow">Lead Follow-Up Automation</div>
        <h1 className="sp-h1">Turn every inquiry into <em>a closed deal</em>.</h1>
        <p className="sp-sub">
          Most lost jobs were simply never followed up. Our automation replies
          to every new lead within seconds, then stays on top of the
          conversation until they book — automatically, on your behalf.
        </p>
      </header>

      <section className="lf-section">
        <div className="sp-wrap">
          <div className="lf-head">
            <div className="lf-index">№ 01 — The sequence</div>
            <div>
              <h2 className="lf-h2">A week of follow-up, <em>written for you</em>.</h2>
              <p className="lf-sub">
                An illustrative example of the sequence we build — the shape,
                not a transcript. “Owner” and “Customer” stand in for your
                business and your lead; every message is written in your voice,
                and the timing is tuned to your trade.
              </p>
            </div>
          </div>
          <span className="label lf-fig">Fig. 01 — Sample sequence · illustrative</span>
          <div className="lf-seq" role="list">
            {STEPS.map(s => (
              <div key={s.n} className="lf-step" role="listitem">
                <span className="lf-num">{s.n}</span>
                <div className="lf-when">
                  <span className="lf-time">{s.time}</span>
                  <span className="lf-chan">{s.channel}</span>
                </div>
                <div className="lf-body">
                  <h3 className="lf-step-title">{s.title}</h3>
                  <div className="lf-msg">
                    <div className="lf-msg-meta"><b>Owner</b> → Customer</div>
                    <p className="lf-msg-body">{s.msg}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lf-section lf-band">
        <div className="sp-wrap">
          <div className="lf-head">
            <div className="lf-index">№ 02 — The difference</div>
            <div>
              <h2 className="lf-h2">One lead. <em>Two endings.</em></h2>
              <p className="lf-sub">
                Follow-up speed is rarely the part anyone plans for — and it’s
                usually the part that decides where the job goes.
              </p>
            </div>
          </div>
          <div className="lf-compare">
            <div className="lf-col lf-col--without plate">
              <div className="lf-col-label">Without automation</div>
              {WITHOUT.map((t, i) => (
                <div key={t} className="lf-line">
                  <span className="lf-line-num">{String(i + 1).padStart(2, '0')}</span>
                  {t}
                </div>
              ))}
            </div>
            <div className="lf-col lf-col--with plate">
              <div className="lf-col-label">With automation</div>
              {WITH.map((t, i) => (
                <div key={t} className="lf-line">
                  <span className="lf-line-num">{String(i + 1).padStart(2, '0')}</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sp-cta">
        <div className="sp-cta-inner">
          <span className="label">№ 03 — Start here</span>
          <h2>Stop letting leads slip through the cracks.</h2>
          <p>Book a free call and we’ll build your entire follow-up sequence in under a week.</p>
          <Link to="/book" className="sp-cta-btn">Book a free strategy call <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
