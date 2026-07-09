import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* ─────────────────────────────────────────────────────────────
   Reminders & Confirmations — service page.
   Ink on porcelain paper; Zodiak / General Sans / Fragment Mono.
───────────────────────────────────────────────────────────── */

const CSS = `
/* Section scaffold (homepage sec-head pattern) */
.rm-section{padding:clamp(56px,7vw,100px) 0 0}
.rm-last{padding-bottom:clamp(64px,8vw,120px)}
.rm-head{margin-bottom:clamp(32px,4.5vw,52px);display:grid;grid-template-columns:1fr;gap:16px}
@media(min-width:900px){.rm-head{grid-template-columns:230px 1fr;gap:44px;align-items:start}}
.rm-index{font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);padding-top:12px;display:flex;gap:10px;align-items:baseline}
.rm-index::after{content:'';flex:1;height:1px;background:var(--hairline);align-self:center}
.rm-h2{font-family:var(--serif);font-weight:700;font-size:clamp(1.8rem,3.2vw,2.6rem);line-height:1.08;letter-spacing:-.018em;max-width:22ch}
.rm-h2 em{font-style:italic;font-weight:400;color:var(--petrol)}
.rm-lede{font-size:1rem;color:var(--muted-2);line-height:1.7;max-width:56ch;margin-top:14px}

/* THE JOURNEY — ruled ledger */
.rm-ledger{border-top:1px solid var(--hairline)}
.rm-row{display:grid;grid-template-columns:44px 1fr;column-gap:16px;row-gap:7px;padding:22px 6px;border-bottom:1px solid var(--hairline);transition:background .2s var(--ease-out),padding-left .2s var(--ease-out)}
.rm-row>*{grid-column:2}
.rm-row .rm-num{grid-column:1;grid-row:1/span 3}
.rm-row:hover{background:var(--card);padding-left:14px}
@media(min-width:860px){
  .rm-row{grid-template-columns:56px 150px minmax(0,1fr) minmax(0,1.15fr);column-gap:24px;align-items:baseline;padding:24px 6px}
  .rm-row>*{grid-column:auto}
  .rm-row .rm-num{grid-row:auto}
}
.rm-num{font-family:var(--mono);font-size:.75rem;color:var(--muted-2);font-variant-numeric:tabular-nums}
.rm-when{font-family:var(--mono);font-size:.7rem;letter-spacing:.14em;text-transform:uppercase;color:var(--petrol)}
.rm-row-title{font-family:var(--serif);font-weight:700;font-size:1.16rem;letter-spacing:-.01em;line-height:1.2}
.rm-chan{display:block;font-family:var(--mono);font-size:.64rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted-2);margin-top:7px}
.rm-msg{font-family:var(--serif);font-style:italic;font-size:.97rem;color:var(--muted-2);line-height:1.55;max-width:44ch}
.rm-msg.rm-outcome{font-family:var(--sans);font-style:normal;font-weight:600;font-size:.9rem;color:var(--ink)}

/* WHAT TO EXPECT — editorial pull (replaces the old stat cards) */
.rm-pull-sec .rm-head{margin-bottom:0}
.rm-pull{font-family:var(--serif);font-style:italic;font-weight:400;font-size:clamp(1.35rem,2.7vw,2rem);line-height:1.35;letter-spacing:-.01em;max-width:36ch}
.rm-pull b{color:var(--petrol);font-weight:700}

/* HOW IT WORKS — plates */
.rm-grid{display:grid;grid-template-columns:1fr;gap:20px}
@media(min-width:860px){.rm-grid{grid-template-columns:repeat(3,1fr)}}
.rm-card{padding:28px 26px 26px;transition:transform .25s var(--ease-out),box-shadow .25s var(--ease-out)}
.rm-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-2)}
.rm-card-num{display:flex;justify-content:space-between;align-items:baseline;font-family:var(--mono);font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;color:var(--petrol);padding-bottom:15px;border-bottom:1px solid var(--hairline);margin-bottom:18px;font-variant-numeric:tabular-nums}
.rm-card h3{font-family:var(--serif);font-size:1.26rem;font-weight:700;letter-spacing:-.01em;margin-bottom:10px}
.rm-card p{font-size:.92rem;color:var(--muted-2);line-height:1.66;max-width:40ch}

/* CTA alignment + label */
.rm-cta-inner{max-width:1076px;margin:0 auto}
.rm-cta-label{display:block;font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:#8A9590;margin-bottom:22px}
`;

const JOURNEY = [
  { when: 'Booked', title: 'Appointment confirmed', channel: 'SMS + Email', msg: '“Your appointment is confirmed for Thursday at 10am.”' },
  { when: '7 days out', title: 'First reminder sent', channel: 'Email', msg: '“Just a heads up — your appointment is one week away.”' },
  { when: '48 hours out', title: 'Urgent reminder', channel: 'SMS', msg: '“Reminder: you’re scheduled for this Thursday at 10am.”' },
  { when: 'Day before', title: 'Confirmation request', channel: 'SMS', msg: '“Can you confirm you’re still coming tomorrow? Reply YES or NO.”' },
  { when: '1 hour out', title: 'Final nudge', channel: 'SMS', msg: '“See you in an hour — you’re all set for 10am at the shop.”' },
  { when: 'Show time', title: 'Client shows up', channel: '', msg: 'The appointment holds — or the slot has already been offered out again.', final: true },
];

const HOW = [
  { title: 'Smart scheduling', desc: 'Reminders are timed to your appointment type — a 30-minute consultation gets a different cadence than a four-hour service job.' },
  { title: 'Auto-rescheduling', desc: 'When a client replies “NO” or cancels, the system immediately offers alternative times and fills the slot — no manual coordination needed.' },
  { title: 'No-show tracking', desc: 'Every confirmation, cancellation, and no-show is logged automatically — so you always know the health of your calendar at a glance.' },
];

export default function Reminders() {
  return (
    <>
      <Helmet>
        <title>Automated Reminders & Confirmations | Nuvion Solutions</title>
        <meta name="description" content="Automated appointment reminders and confirmation sequences from Nuvion Solutions — fewer no-shows, fuller days. Smart rescheduling built in. No manual follow-up needed." />
        <link rel="canonical" href="https://nuvion-solutions.com/services/reminders" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + FOOTER_CSS + CSS }} />
      <div className="grain" aria-hidden="true" />

      <SiteNav />

      <header className="sp-hero">
        <div className="sp-eyebrow">Reminders & Confirmations</div>
        <h1 className="sp-h1">No-shows are a<br /><em>solved problem</em>.</h1>
        <p className="sp-sub">
          The right message, to the right person, at exactly the right time —
          automated. Our reminder sequences confirm every appointment, catch
          cancellations early, and keep your calendar full without any manual
          effort.
        </p>
      </header>

      <div className="sp-wrap">
        <section className="rm-section">
          <div className="rm-head">
            <div className="rm-index">№ 01 — The appointment journey</div>
            <div>
              <h2 className="rm-h2">Five touches between <em>booked and shown up</em>.</h2>
              <p className="rm-lede">
                Every appointment runs the same quiet sequence — confirmation at
                booking, reminders as the day approaches, a final nudge an hour
                out. Each message is timed to the appointment and sent without
                you touching anything.
              </p>
            </div>
          </div>
          <div className="rm-ledger" role="list">
            {JOURNEY.map((s, i) => (
              <div key={s.title} className="rm-row" role="listitem">
                <span className="rm-num tnum">{String(i + 1).padStart(2, '0')}</span>
                <span className="rm-when">{s.when}</span>
                <span>
                  <span className="rm-row-title">{s.title}</span>
                  {s.channel && <span className="rm-chan">{s.channel}</span>}
                </span>
                <span className={`rm-msg${s.final ? ' rm-outcome' : ''}`}>{s.msg}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rm-section rm-pull-sec">
          <div className="rm-head">
            <div className="rm-index">№ 02 — What to expect</div>
            <p className="rm-pull">
              We won’t promise a perfect calendar — nobody honestly can. What a
              well-built sequence delivers is simpler: <b>fewer no-shows, fuller
              days</b>, and confirmations you never have to chase.
            </p>
          </div>
        </section>

        <section className="rm-section rm-last">
          <div className="rm-head">
            <div className="rm-index">№ 03 — How it works</div>
            <div>
              <h2 className="rm-h2">Built to run <em>without you</em>.</h2>
            </div>
          </div>
          <div className="rm-grid">
            {HOW.map((h, i) => (
              <div key={h.title} className="plate rm-card">
                <div className="rm-card-num"><span>{String(i + 1).padStart(2, '0')}</span><span>—</span></div>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="sp-cta">
        <div className="rm-cta-inner">
          <span className="rm-cta-label">№ 04 — Start here</span>
          <h2>Fill your calendar and keep it full.</h2>
          <p>Book a free call and we’ll set up your entire reminder system in under a week.</p>
          <Link to="/book" className="sp-cta-btn">Book a free strategy call <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
