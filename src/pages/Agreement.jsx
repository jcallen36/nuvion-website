import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

const CSS = BASE_CSS + FOOTER_CSS + `
.ag-hero{padding:56px 32px 8px;max-width:720px;margin:0 auto;text-align:center}
.ag-eyebrow{display:inline-flex;align-items:center;gap:8px;border-radius:100px;padding:6px 16px;font-size:.72rem;font-weight:700;margin-bottom:20px;letter-spacing:.12em;text-transform:uppercase;color:var(--cyan);background:rgba(0,220,255,.07);border:1px solid var(--border)}
.ag-hero h1{font-size:clamp(1.9rem,4.5vw,2.6rem);font-weight:800;letter-spacing:-.03em;line-height:1.15;margin-bottom:14px}
.ag-lede{color:var(--muted);font-size:1rem;line-height:1.7;max-width:56ch;margin:0 auto}

.ag-wrap{max-width:680px;margin:0 auto;padding:32px 32px 72px}
.ag-card{background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:14px 40px}

.ag-item{padding:26px 0;border-bottom:1px solid var(--border)}
.ag-item:last-child{border-bottom:none}
.ag-item h2{font-size:1.05rem;font-weight:700;letter-spacing:-.01em;margin-bottom:9px;color:var(--text)}
.ag-item p{color:var(--muted);font-size:.95rem;line-height:1.72;max-width:62ch}
.ag-item p + p{margin-top:10px}
.ag-item strong{color:var(--text);font-weight:600}

/* price highlight row */
.ag-plans{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px}
.ag-plan{border:1px solid var(--border);background:var(--surface2);border-radius:13px;padding:16px 18px}
.ag-plan .ag-amt{font-size:1.35rem;font-weight:800;letter-spacing:-.02em;line-height:1.1;margin-bottom:4px}
.ag-plan .ag-amt span{font-size:.85rem;font-weight:600;color:var(--muted)}
.ag-plan .ag-plan-note{font-size:.86rem;color:var(--muted);line-height:1.6}
.ag-plan .ag-amt.grad-amt{background:linear-gradient(130deg,var(--cyan),var(--primary) 60%,var(--violet));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}

.ag-signoff{margin-top:28px;padding:22px 24px;background:var(--surface);border:1px solid var(--border);border-radius:16px;text-align:center}
.ag-signoff p{color:var(--muted);font-size:.92rem;line-height:1.7}
.ag-signoff .ag-agree{color:var(--text);font-weight:600}
.ag-signoff a{color:var(--cyan);font-weight:600}
.ag-signoff .ag-brand{margin-top:10px;font-size:.82rem;color:var(--dim)}

@media(max-width:680px){
  .ag-hero{padding:40px 20px 4px}
  .ag-wrap{padding:24px 16px 52px}
  .ag-card{padding:8px 22px}
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
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <a href="https://nuvion-solutions.com" className="sp-back">← Back to nuvion-solutions.com</a>
      </nav>

      <div className="ag-hero">
        <span className="ag-eyebrow">Website Agreement</span>
        <h1>Simple, <span className="grad">honest terms</span></h1>
        <p className="ag-lede">
          Plain and simple — this covers the website Nuvion Solutions builds for you. No fine print, no surprises.
        </p>
      </div>

      <div className="ag-wrap">
        <div className="ag-card">

          <div className="ag-item">
            <h2>What you get</h2>
            <p>
              A custom, mobile-friendly website for your business — designed and built by Nuvion Solutions LLC, with your real business info on it. Every site includes a full SEO setup — local and on-page. The optional care plan adds hosting, security, your quote-form leads delivered to your inbox, and monthly SEO updates.
            </p>
          </div>

          <div className="ag-item">
            <h2>Price</h2>
            <p>
              Every project is quoted up front, in writing. <strong>Your price is the one on your
              quote and Stripe invoice</strong> — that number is the agreement, and it doesn't change
              after you approve it. It has two parts:
            </p>
            <div className="ag-plans">
              <div className="ag-plan">
                <div className="ag-amt">The <span>build</span></div>
                <div className="ag-plan-note">One payment, per your quote — the site is yours to keep: design, files, and domain. Simple revisions stay free; larger changes are quoted first.</div>
              </div>
              <div className="ag-plan">
                <div className="ag-amt grad-amt">Care <span>plan · optional</span></div>
                <div className="ag-plan-note">A small monthly fee, per your quote. Covers hosting and security, your quote-form leads delivered to your inbox, and monthly SEO updates. Cancel anytime — the site stays yours.</div>
              </div>
            </div>
          </div>

          <div className="ag-item">
            <h2>Who owns it</h2>
            <p>
              Once the build is paid in full, the website — design, files, content, and domain — is
              <strong> yours to keep</strong>, and you're free to move it or host it elsewhere anytime.
            </p>
            <p>
              <strong>The care plan doesn't change ownership.</strong> It's a service subscription — hosting,
              security, lead delivery, and monthly SEO — that you can cancel anytime. If you cancel, the site is
              still yours: we hand over the files and you host it wherever you like.
            </p>
          </div>

          <div className="ag-item">
            <h2>Revisions</h2>
            <p>
              <strong>Unlimited free revisions for the first 7 days after launch</strong> —
              we keep tweaking until it's right. After that, simple revisions (text changes, photo
              swaps, small tweaks) are free — within reason — and larger revisions, new features, or
              integrations are quoted in writing before we build them.
            </p>
          </div>

          <div className="ag-item">
            <h2>Your domain</h2>
            <p>
              Connect a domain you already own, or Nuvion sets one up for you at no charge — you just cover the
              domain's yearly registration fee (usually about $15–20/year, paid to the registrar).
            </p>
          </div>

          <div className="ag-item">
            <h2>Hosting</h2>
            <p>Included with the care plan — your site is hosted, secured with HTTPS, and kept online by Nuvion. If you skip or cancel the care plan, you own the files and handle hosting yourself (we'll hand everything over cleanly).</p>
          </div>

          <div className="ag-item">
            <h2>Your content</h2>
            <p>
              You confirm you have the right to use any logo, photos, text, or reviews you give us. Nuvion Solutions LLC isn't
              responsible for content you provide.
            </p>
          </div>

          <div className="ag-item">
            <h2>Timeline</h2>
            <p>Once you approve and pay, your site goes live within a few business days.</p>
          </div>

          <div className="ag-item">
            <h2>Results</h2>
            <p>
              We build fast, modern, search-ready sites, but we can't promise specific Google rankings, traffic,
              or sales — and you should be cautious of anyone who does.
            </p>
          </div>

          <div className="ag-item">
            <h2>Refunds</h2>
            <p>
              You see the finished website before you pay a dollar, so the one-time fee is non-refundable once your
              site is delivered and live. On the monthly plan, cancel anytime; the current month isn't refunded.
            </p>
          </div>

          <div className="ag-item">
            <h2>Liability</h2>
            <p>Nuvion Solutions LLC's total responsibility is limited to the amount you've paid.</p>
          </div>

        </div>

        <div className="ag-signoff">
          <p>
            That's it. Questions? Reply to your invoice email or text us.{' '}
            <span className="ag-agree">By paying your invoice, you agree to these terms.</span>
          </p>
          <p className="ag-brand">
            Nuvion Solutions · <a href="https://nuvion-solutions.com">nuvion-solutions.com</a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
