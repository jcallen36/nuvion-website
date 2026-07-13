import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* ─────────────────────────────────────────────────────────────
   /websites — the "send me the information" page.
   Texted to prospects who ask for "everything." Reads like a
   straight spec sheet, not a brochure: blunt copy, exact prices,
   an honesty block, and one signature interaction (billing toggle).
───────────────────────────────────────────────────────────── */
const CSS = BASE_CSS + FOOTER_CSS + `
.wi-wrap{max-width:960px;margin:0 auto;padding:0 32px 80px}

.wi-lede{color:var(--muted);font-size:1rem;line-height:1.75;max-width:58ch;margin:0 auto}

/* section rhythm */
.wi-sec{padding:clamp(40px,6vw,64px) 0 0}
.wi-kicker{font-size:.72rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--cyan);margin-bottom:10px}
.wi-h2{font-size:clamp(1.35rem,3vw,1.7rem);font-weight:800;letter-spacing:-.02em;line-height:1.2;margin-bottom:12px}
.wi-p{color:var(--muted);font-size:.96rem;line-height:1.75;max-width:62ch}
.wi-p strong{color:var(--text);font-weight:600}
.wi-p + .wi-p{margin-top:10px}

/* not-a-template steps */
.wi-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:22px}
.wi-step{background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:18px 20px}
.wi-step-n{font-size:.72rem;font-weight:700;letter-spacing:.1em;color:var(--cyan);margin-bottom:8px}
.wi-step h3{font-size:.98rem;font-weight:700;margin-bottom:6px;letter-spacing:-.01em}
.wi-step p{font-size:.86rem;color:var(--muted);line-height:1.6}

/* included grid */
.wi-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px 22px;margin-top:20px}
.wi-item{display:flex;gap:11px;align-items:flex-start;padding:10px 0;border-bottom:1px solid rgba(79,110,247,.08)}
.wi-check{flex-shrink:0;width:18px;height:18px;border-radius:50%;background:rgba(52,211,153,.12);color:var(--green);display:inline-flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:800;margin-top:2px}
.wi-item div b{display:block;font-size:.92rem;font-weight:600;letter-spacing:-.005em;margin-bottom:2px}
.wi-item div span{font-size:.82rem;color:var(--muted);line-height:1.5}

/* portfolio band */
.wi-port{margin-top:22px;background:linear-gradient(130deg,rgba(0,220,255,.06),rgba(79,110,247,.07) 55%,rgba(167,139,250,.06));border:1px solid var(--border);border-radius:16px;padding:26px 28px;display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}
.wi-port h3{font-size:1.1rem;font-weight:800;letter-spacing:-.015em;margin-bottom:5px}
.wi-port p{font-size:.88rem;color:var(--muted);max-width:46ch;line-height:1.6}
.wi-port-btn{display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:.9rem;padding:12px 22px;border-radius:10px;background:linear-gradient(130deg,var(--cyan),var(--primary));color:#04101d;white-space:nowrap;transition:opacity .2s}
.wi-port-btn:hover{opacity:.85}

/* billing toggle */
.wi-toggle-row{display:flex;align-items:center;justify-content:center;gap:12px;margin:26px 0 22px}
.wi-toggle{display:inline-flex;background:var(--surface);border:1px solid var(--border);border-radius:100px;padding:4px}
.wi-toggle button{border:none;cursor:pointer;font-family:inherit;font-size:.85rem;font-weight:700;padding:9px 22px;border-radius:100px;color:var(--muted);background:transparent;transition:all .2s}
.wi-toggle button.on{background:linear-gradient(130deg,var(--cyan),var(--primary));color:#04101d}
.wi-toggle-note{font-size:.78rem;color:var(--dim)}

/* pricing plates */
.wi-plans{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;align-items:stretch;max-width:780px;margin:0 auto}
.wi-plan{position:relative;background:var(--surface);border:1px solid var(--border);border-radius:18px;padding:26px 24px;display:flex;flex-direction:column;transition:transform .2s,border-color .2s}
.wi-plan:hover{transform:translateY(-3px);border-color:rgba(0,220,255,.25)}
.wi-plan.hot{border-color:rgba(0,220,255,.35);background:linear-gradient(180deg,rgba(0,220,255,.05),var(--surface) 45%)}
.wi-tag{position:absolute;top:-11px;left:50%;transform:translateX(-50%);font-size:.66rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;background:linear-gradient(130deg,var(--cyan),var(--primary));color:#04101d;border-radius:100px;padding:5px 13px;white-space:nowrap}
.wi-plan-name{font-size:.78rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:10px}
.wi-price{font-size:2rem;font-weight:800;letter-spacing:-.03em;line-height:1;font-variant-numeric:tabular-nums}
.wi-price span{font-size:.85rem;font-weight:600;color:var(--muted);letter-spacing:0}
.wi-price-alt{font-size:.8rem;color:var(--dim);margin-top:6px;min-height:18px}
.wi-plan ul{list-style:none;margin-top:18px;display:flex;flex-direction:column;gap:9px}
.wi-plan li{font-size:.86rem;color:var(--muted);line-height:1.5;padding-left:22px;position:relative}
.wi-plan li::before{content:'✓';position:absolute;left:0;top:0;color:var(--green);font-weight:800;font-size:.8rem}
.wi-plan li.plus{color:var(--text);font-weight:600}
.wi-plan li.plus::before{content:'+';color:var(--cyan)}
.wi-quote-note{text-align:center;font-size:.8rem;color:var(--dim);margin-top:18px}

/* revisions / guarantees band */
.wi-band{margin-top:22px;display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.wi-band-card{background:var(--surface2);border:1px solid var(--border);border-radius:14px;padding:20px 22px}
.wi-band-card h3{font-size:.95rem;font-weight:700;margin-bottom:7px;letter-spacing:-.01em}
.wi-band-card p{font-size:.85rem;color:var(--muted);line-height:1.65}
.wi-band-card .big{color:var(--text);font-weight:700}

/* honesty block */
.wi-honest{margin-top:22px;border:1px solid rgba(245,158,11,.25);background:rgba(245,158,11,.05);border-radius:16px;padding:24px 26px}
.wi-honest h3{font-size:1rem;font-weight:800;letter-spacing:-.01em;margin-bottom:8px;color:var(--amber)}
.wi-honest p{font-size:.92rem;color:var(--muted);line-height:1.7;max-width:64ch}
.wi-honest strong{color:var(--text)}

/* FAQ */
.wi-faq{margin-top:20px;border-top:1px solid var(--border)}
.wi-qa{padding:20px 4px;border-bottom:1px solid var(--border)}
.wi-qa h3{font-size:.98rem;font-weight:700;letter-spacing:-.01em;margin-bottom:7px}
.wi-qa p{font-size:.9rem;color:var(--muted);line-height:1.7;max-width:64ch}

/* CTA */
.wi-cta{margin-top:clamp(44px,7vw,72px);text-align:center;background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:clamp(32px,5vw,52px) 28px}
.wi-cta h2{font-size:clamp(1.4rem,3.4vw,1.9rem);font-weight:800;letter-spacing:-.02em;margin-bottom:10px}
.wi-cta p{color:var(--muted);font-size:.95rem;line-height:1.7;max-width:52ch;margin:0 auto 24px}
.wi-cta-row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
.wi-cta-main{display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:.95rem;padding:14px 28px;border-radius:10px;background:linear-gradient(130deg,var(--cyan),var(--primary));color:#04101d;transition:opacity .2s}
.wi-cta-main:hover{opacity:.85}
.wi-cta-alt{display:inline-flex;align-items:center;gap:8px;font-weight:700;font-size:.95rem;padding:14px 28px;border-radius:10px;border:1px solid var(--border);color:var(--text);transition:all .2s}
.wi-cta-alt:hover{border-color:rgba(255,255,255,.2);background:rgba(255,255,255,.03)}

@media(max-width:860px){
  .wi-plans{grid-template-columns:1fr}
  .wi-steps{grid-template-columns:1fr}
  .wi-band{grid-template-columns:1fr}
  .wi-grid{grid-template-columns:1fr}
}
@media(max-width:680px){
  .wi-wrap{padding:0 20px 56px}
}
`;

const INCLUDED = [
  ['Built from your real business', 'Your reviews, your jobs, your towns, your photos — pulled in before we write a line of code.'],
  ['Mobile-first', 'Most of your customers find you on a phone. The site is designed there first, desktop second.'],
  ['One-tap calling', 'Your number is tappable from the second the page opens. No hunting.'],
  ['Your Google reviews, on the page', 'The stars you earned stop hiding on Google and start closing jobs on your site. New business with no reviews yet? We set you up to start collecting them.'],
  ['Hosting + security included', 'Fast hosting and the padlock (SSL) — no "Not Secure" warning scaring people off.'],
  ['Local SEO', 'Set up so Google understands what you do and where you do it.'],
  ['Lead capture', 'Quote requests land in your email the moment they\'re sent.'],
  ['Your domain, handled', 'Use one you already own or we set one up — you just cover the ~$15–20/yr registration. Go one-time and the domain is yours outright.'],
];

const FAQS = [
  ['We already have a website.', 'Then compare it side by side with what we build — that\'s the whole test. Pull both up on your phone: which one loads faster, shows your reviews, and makes it easier to call? If yours wins, keep it, no hard feelings.'],
  ['I\'m not a tech person.', 'You never touch anything. We build it, host it, secure it, and update it. Your only job is a 5-minute form and sending us photos of your work.'],
  ['Who owns the site?', 'One-time plans: you do — design, files, domain, all of it, and you can host it anywhere. Monthly plans: it\'s a subscription — cancel anytime, and you can buy it out to own it outright whenever you want.'],
  ['How long does it take?', 'Days, not months. Plan on live inside a week of your onboarding form coming back.'],
  ['What do you need from me?', 'A 5-minute onboarding form, photos of your work if you have them, and your logo if you have one. That\'s it — we pull the rest from what\'s already public.'],
  ['What if I want changes later?', 'Every plan gets unlimited free revisions for the first 7 days after launch. After that: monthly plans include updates, and one-time plans keep small text and photo swaps free — bigger work is quoted in writing before we touch it.'],
];

export default function WebsiteInfo() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [billing, setBilling] = useState('onetime');
  const onetime = billing === 'onetime';

  return (
    <>
      <Helmet>
        <title>Websites — Everything Included, Every Price | Nuvion Solutions</title>
        <meta
          name="description"
          content="The full rundown on Nuvion Solutions websites: what every custom build includes, both packages with exact prices, how revisions work, and live examples."
        />
        <link rel="canonical" href="https://nuvion-solutions.com/websites" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <a href="https://websites.nuvion-solutions.com" className="sp-back" target="_blank" rel="noopener noreferrer">See live examples →</a>
      </nav>

      <header className="sp-hero">
        <span className="sp-eyebrow" style={{ color: 'var(--cyan)', background: 'rgba(0,220,255,.07)', border: '1px solid var(--border)' }}>The Full Rundown</span>
        <h1 className="sp-h1">You asked for the info.<br /><span className="grad">Here's all of it.</span></h1>
        <p className="wi-lede">
          No sales fluff, no "book a discovery call to learn more." What every site includes,
          both packages with exact prices, how changes work, and where to see the real thing.
          Three minutes, start to finish.
        </p>
      </header>

      <div className="wi-wrap">

        {/* NOT A TEMPLATE */}
        <section className="wi-sec">
          <div className="wi-kicker">How it's built</div>
          <h2 className="wi-h2">Custom-built from your business. Not a template.</h2>
          <p className="wi-p">
            Most template shops pour every client into the same mold and swap the logo. We do the opposite:
            the site is <strong>designed from what makes your company yours</strong> — your reviews, your
            towns, your services, photos of your actual machines and finished jobs. No two of our sites
            come out the same — they can't, because they're built from two different businesses.
          </p>
          <div className="wi-steps">
            <div className="wi-step">
              <div className="wi-step-n">STEP 1</div>
              <h3>We study your business</h3>
              <p>Your Google reviews, your services, your service area, your photos — everything a customer would want to see, gathered before design starts.</p>
            </div>
            <div className="wi-step">
              <div className="wi-step-n">STEP 2</div>
              <h3>We design for one job</h3>
              <p>Standing out against your competitors and making it dead easy for the customer to call you. Every layout decision serves that.</p>
            </div>
            <div className="wi-step">
              <div className="wi-step-n">STEP 3</div>
              <h3>Live in days</h3>
              <p>Plan on live inside a week of your 5-minute onboarding form. Then you get 7 days of unlimited free tweaks until it's exactly right.</p>
            </div>
          </div>
        </section>

        {/* INCLUDED WITH EVERY SITE */}
        <section className="wi-sec">
          <div className="wi-kicker">Standard equipment</div>
          <h2 className="wi-h2">Included with every site — every plan.</h2>
          <div className="wi-grid">
            {INCLUDED.map(([title, desc]) => (
              <div className="wi-item" key={title}>
                <span className="wi-check">✓</span>
                <div><b>{title}</b><span>{desc}</span></div>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="wi-sec">
          <div className="wi-port">
            <div>
              <h3>Don't take our word for it — tap through the real thing.</h3>
              <p>Live builds, on the same engine yours would use. Open them on your phone, exactly like your customers would.</p>
            </div>
            <a className="wi-port-btn" href="https://websites.nuvion-solutions.com" target="_blank" rel="noopener noreferrer">View the portfolio →</a>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="wi-sec">
          <div className="wi-kicker">Packages</div>
          <h2 className="wi-h2">Two ways to do this. Exact prices, no asterisks.</h2>
          <p className="wi-p">Pay once and own it outright, or go monthly with everything handled. Same custom build either way.</p>

          <div className="wi-toggle-row">
            <div className="wi-toggle" role="tablist" aria-label="Billing">
              <button className={onetime ? 'on' : ''} onClick={() => setBilling('onetime')} role="tab" aria-selected={onetime}>Pay once</button>
              <button className={!onetime ? 'on' : ''} onClick={() => setBilling('monthly')} role="tab" aria-selected={!onetime}>Monthly</button>
            </div>
            <span className="wi-toggle-note">{onetime ? 'You own it — files, domain, everything.' : 'Cancel anytime. Buy it out whenever.'}</span>
          </div>

          <div className="wi-plans">
            <div className="wi-plan">
              <div className="wi-plan-name">Standard</div>
              <div className="wi-price">{onetime ? '$900' : <>$89<span>/mo</span></>}</div>
              <div className="wi-price-alt">{onetime ? 'or $89/mo' : 'or $900 once — you own it'}</div>
              <ul>
                <li>Full multi-section custom build — services, photo gallery, service area</li>
                <li>Mobile-first with one-tap calling</li>
                <li>Your Google reviews on the page</li>
                <li>Quote request form — leads straight to your email</li>
                <li>Hosting, security + domain handled</li>
                <li>Local + on-page SEO, set up and updated monthly — free</li>
                <li>7 days of unlimited free revisions</li>
              </ul>
            </div>

            <div className="wi-plan hot">
              <div className="wi-tag">Every service, every town</div>
              <div className="wi-plan-name">Flagship</div>
              <div className="wi-price">{onetime ? '$1,800' : <>$129<span>/mo</span></>}</div>
              <div className="wi-price-alt">{onetime ? 'or $129/mo' : 'or $1,800 once — you own it'}</div>
              <ul>
                <li className="plus">Everything in Standard, plus:</li>
                <li>Multi-page build — a dedicated page for each service you offer</li>
                <li>A page for every town you work — it's what helps you show up when someone in that town searches</li>
                <li>Google Business Profile optimization</li>
                <li>One-tap review link + printable QR card to grow your stars</li>
                <li>Priority turnaround — your requests handled first</li>
              </ul>
            </div>
          </div>
          <div className="wi-quote-note">Every project is confirmed with a written quote before you pay a cent — the number on your quote is the number, period.</div>
        </section>

        {/* REVISIONS + GUARANTEES */}
        <section className="wi-sec">
          <div className="wi-kicker">After launch</div>
          <h2 className="wi-h2">Changes, ownership, and the exit door.</h2>
          <div className="wi-band">
            <div className="wi-band-card">
              <h3>First 7 days: change anything</h3>
              <p><span className="big">Unlimited free revisions for 7 days after launch, on every plan.</span> Colors, photos, wording, layout — we keep tweaking until you'd show it off.</p>
            </div>
            <div className="wi-band-card">
              <h3>After that</h3>
              <p>Monthly plans: updates included, free. One-time plans: small text and photo swaps stay free — anything bigger gets a written quote first, so you always know before anything costs money.</p>
            </div>
            <div className="wi-band-card">
              <h3>No trap doors</h3>
              <p>One-time: you own the site and the domain full stop, and we keep hosting it free. Monthly: cancel anytime, no lock-in — and you can buy the site out whenever; ask and the buyout price goes in writing before you decide anything.</p>
            </div>
          </div>

          <div className="wi-honest">
            <h3>What we won't promise you</h3>
            <p>
              A guaranteed #1 spot on Google. <strong>Nobody can honestly promise that</strong> — anyone who does is
              selling you something. What we do promise: a site built and SEO'd properly — updated monthly, free, on every plan — that makes
              you the easiest company in town to size up and call. The full plain-English terms are at{' '}
              <a href="/agreement" style={{ color: 'var(--cyan)' }}>nuvion-solutions.com/agreement</a> — two minutes, no legal wall.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="wi-sec">
          <div className="wi-kicker">Straight answers</div>
          <h2 className="wi-h2">The questions everyone asks.</h2>
          <div className="wi-faq">
            {FAQS.map(([q, a]) => (
              <div className="wi-qa" key={q}>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="wi-cta">
          <h2>Seen enough?</h2>
          <p>
            Here's the whole chain: text <strong style={{ color: 'var(--text)' }}>"go"</strong> to the number that sent you this page → a 5-minute form → we build it and text you the live link → if you like it, you approve a written quote. <strong style={{ color: 'var(--text)' }}>Nothing's owed before that.</strong> Or grab ten minutes on the calendar and we'll walk through it together.
          </p>
          <div className="wi-cta-row">
            <Link to="/book" className="wi-cta-main">Book a 10-minute call</Link>
            <a className="wi-cta-alt" href="https://websites.nuvion-solutions.com" target="_blank" rel="noopener noreferrer">See the work first</a>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}
