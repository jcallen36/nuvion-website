import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* ─────────────────────────────────────────────────────────────
   Website Agreement — typeset terms.
   Quiet, print-like: numbered clauses, hairline rules, serif heads.
───────────────────────────────────────────────────────────── */
const CSS = `
.ag-doc{max-width:820px;padding:clamp(40px,6vw,72px) 0 var(--pad-section)}

.ag-terms{border-top:1px solid var(--hairline)}
.ag-term{display:grid;grid-template-columns:64px 1fr;gap:10px 22px;padding:clamp(26px,3.4vw,38px) 6px;border-bottom:1px solid var(--hairline);transition:background .2s,padding-left .2s}
.ag-term:hover{background:var(--card);padding-left:14px}
.ag-num{font-family:var(--mono);font-size:.75rem;color:var(--petrol);font-variant-numeric:tabular-nums;padding-top:8px}
.ag-term h2{font-family:var(--serif);font-size:clamp(1.25rem,2vw,1.5rem);font-weight:700;letter-spacing:-.012em;line-height:1.2;margin-bottom:10px}
.ag-term p{font-size:.96rem;color:var(--muted-2);line-height:1.72;max-width:62ch}
.ag-term p + p{margin-top:12px}
.ag-term strong{color:var(--ink);font-weight:600}

/* the two pricing structures — equal-weight plates */
.ag-plans{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:20px;max-width:62ch}
.ag-plan{padding:20px 22px;transition:transform .2s var(--ease-out),box-shadow .2s var(--ease-out)}
.ag-plan:hover{transform:translateY(-2px);box-shadow:var(--shadow-2)}
.ag-amt{font-family:var(--serif);font-size:1.22rem;font-weight:700;letter-spacing:-.014em;line-height:1.15;margin-bottom:8px;display:flex;align-items:baseline;gap:9px}
.ag-amt span{font-family:var(--mono);font-size:.64rem;font-weight:400;letter-spacing:.18em;text-transform:uppercase;color:var(--petrol)}
.ag-plan-note{font-size:.88rem;color:var(--muted-2);line-height:1.64}

/* sign-off */
.ag-signoff{margin-top:clamp(36px,5vw,56px);padding:clamp(26px,4vw,40px)}
.ag-signoff p{font-size:.95rem;color:var(--muted-2);line-height:1.72;max-width:62ch}
.ag-agree{color:var(--ink);font-weight:600}
.ag-signoff a{color:var(--petrol);border-bottom:1px solid var(--hairline);padding-bottom:1px;transition:color .18s,border-color .18s}
.ag-signoff a:hover{color:var(--petrol-deep);border-color:var(--petrol)}
.ag-brand{margin-top:14px;font-family:var(--mono);font-size:.72rem;letter-spacing:.08em;color:var(--muted-2)}

@media(max-width:680px){
  .ag-term{grid-template-columns:1fr;gap:6px;padding:24px 2px}
  .ag-num{padding-top:0}
  .ag-plans{grid-template-columns:1fr}
}
`;

export default function Agreement() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Website Agreement | Nuvion Solutions</title>
        <meta
          name="description"
          content="The plain-English agreement for the website Nuvion Solutions builds for you — what you get, pricing, ownership, revisions, hosting, and refunds. No legal wall, just the facts."
        />
        <link rel="canonical" href="https://nuvion-solutions.com/agreement" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + FOOTER_CSS + CSS }} />
      <div className="grain" aria-hidden="true" />

      <SiteNav backTo="https://nuvion-solutions.com" backLabel="Back to nuvion-solutions.com" />

      <header className="sp-hero">
        <span className="sp-eyebrow">Website Agreement</span>
        <h1 className="sp-h1">Simple, <span className="grad">honest terms</span></h1>
        <p className="sp-sub">
          Plain and simple — this covers the website Nuvion Solutions builds for you. No fine print, no surprises.
        </p>
      </header>

      <div className="sp-wrap">
        <div className="ag-doc">
          <div className="ag-terms">

            <section className="ag-term">
              <span className="ag-num" aria-hidden="true">01</span>
              <div>
                <h2>What you get</h2>
                <p>
                  A custom, mobile-friendly website for your business — designed, built, and hosted by Nuvion Solutions LLC, with your real business info on it. Every site includes a full SEO setup — local and on-page — with free monthly SEO updates to help you rank on Google.
                </p>
              </div>
            </section>

            <section className="ag-term">
              <span className="ag-num" aria-hidden="true">02</span>
              <div>
                <h2>Price</h2>
                <p>
                  Every project is quoted up front, in writing. <strong>Your price is the one on your
                  quote and Stripe invoice</strong> — that number is the agreement, and it doesn't change
                  after you approve it. There are two ways to structure it:
                </p>
                <div className="ag-plans">
                  <div className="ag-plan plate">
                    <div className="ag-amt">One-time <span>build</span></div>
                    <div className="ag-plan-note">Pay once, per your quote — the site is yours to keep. Hosting, monthly SEO updates, and simple revisions included free; larger changes are quoted.</div>
                  </div>
                  <div className="ag-plan plate">
                    <div className="ag-amt">Monthly <span>plan</span></div>
                    <div className="ag-plan-note">No big upfront cost, per your quote. Hosting, revisions, and monthly SEO updates included while subscribed.</div>
                  </div>
                </div>
              </div>
            </section>

            <section className="ag-term">
              <span className="ag-num" aria-hidden="true">03</span>
              <div>
                <h2>Who owns it</h2>
                <p>
                  <strong>One-time plan:</strong> once you've paid in full, the website — design, files, and content —
                  is yours to keep. We host it for you free, and you're free to move it or host it elsewhere anytime.
                </p>
                <p>
                  <strong>Monthly plan:</strong> you're subscribed to the site and its hosting. It stays live while
                  your subscription is active, you can cancel anytime, and if you cancel the site comes down. You can
                  switch to a one-time buyout anytime to own it outright (quoted when you ask).
                </p>
              </div>
            </section>

            <section className="ag-term">
              <span className="ag-num" aria-hidden="true">04</span>
              <div>
                <h2>Revisions</h2>
                <p>
                  <strong>One-time plan:</strong> simple revisions — text changes, photo swaps, small
                  tweaks — are free. Larger revisions, new features, or integrations are quoted
                  before we build them.
                  &nbsp;<strong>Monthly plan:</strong> revisions included, free — within reason.
                </p>
              </div>
            </section>

            <section className="ag-term">
              <span className="ag-num" aria-hidden="true">05</span>
              <div>
                <h2>Your domain</h2>
                <p>
                  Connect a domain you already own, or Nuvion sets one up for you at no charge — you just cover the
                  domain's yearly registration fee (usually about $15–20/year, paid to the registrar).
                </p>
              </div>
            </section>

            <section className="ag-term">
              <span className="ag-num" aria-hidden="true">06</span>
              <div>
                <h2>Hosting</h2>
                <p>Free on both plans — no separate hosting fee. Your site is hosted, secured with HTTPS, and kept online by Nuvion.</p>
              </div>
            </section>

            <section className="ag-term">
              <span className="ag-num" aria-hidden="true">07</span>
              <div>
                <h2>Your content</h2>
                <p>
                  You confirm you have the right to use any logo, photos, text, or reviews you give us. Nuvion Solutions LLC isn't
                  responsible for content you provide.
                </p>
              </div>
            </section>

            <section className="ag-term">
              <span className="ag-num" aria-hidden="true">08</span>
              <div>
                <h2>Timeline</h2>
                <p>Once you approve and pay, your site goes live within a few business days.</p>
              </div>
            </section>

            <section className="ag-term">
              <span className="ag-num" aria-hidden="true">09</span>
              <div>
                <h2>Results</h2>
                <p>
                  We build fast, modern, search-ready sites, but we can't promise specific Google rankings, traffic,
                  or sales — and you should be cautious of anyone who does.
                </p>
              </div>
            </section>

            <section className="ag-term">
              <span className="ag-num" aria-hidden="true">10</span>
              <div>
                <h2>Refunds</h2>
                <p>
                  You see the finished website before you pay a dollar, so the one-time fee is non-refundable once your
                  site is delivered and live. On the monthly plan, cancel anytime; the current month isn't refunded.
                </p>
              </div>
            </section>

            <section className="ag-term">
              <span className="ag-num" aria-hidden="true">11</span>
              <div>
                <h2>Liability</h2>
                <p>Nuvion Solutions LLC's total responsibility is limited to the amount you've paid.</p>
              </div>
            </section>

          </div>

          <div className="ag-signoff plate">
            <p>
              That's it. Questions? Reply to your invoice email or text us.{' '}
              <span className="ag-agree">By paying your invoice, you agree to these terms.</span>
            </p>
            <p className="ag-brand">
              Nuvion Solutions · <a href="https://nuvion-solutions.com">nuvion-solutions.com</a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
