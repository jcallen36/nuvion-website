import { useEffect } from 'react';
import { BASE_CSS, Nav, Footer } from '../site/shared.jsx';

const LEGAL_CSS = `
.lg-wrap{max-width:760px;margin:0 auto;padding:64px 24px}
.lg-eyebrow{display:inline-flex;align-items:center;gap:8px;background:var(--brand-soft);color:var(--brand-strong);font-weight:700;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;padding:7px 15px;border-radius:100px;margin-bottom:20px}
.lg-head{margin-bottom:10px}
.lg-head h1{font-size:clamp(2rem,4.4vw,2.9rem);color:var(--ink);font-weight:800;letter-spacing:-.03em;line-height:1.1;margin-bottom:12px}
.lg-lede{color:var(--body);font-size:1.05rem;line-height:1.7;margin-top:10px}
.lg-body{margin-top:14px}
.lg-item{padding:30px 0;border-bottom:1px solid var(--line)}
.lg-item:last-child{border-bottom:none}
.lg-item h2{font-size:1.2rem;font-weight:800;letter-spacing:-.02em;margin-bottom:12px;color:var(--ink)}
.lg-item p{color:var(--body);font-size:1rem;line-height:1.75}
.lg-item p + p{margin-top:12px}
.lg-item strong{color:var(--ink);font-weight:700}
.lg-item a{color:var(--brand-strong);font-weight:600}
.lg-item a:hover{text-decoration:underline}

/* price highlight row */
.lg-plans{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px}
.lg-plan{border:1px solid var(--line);background:var(--bg-soft);border-radius:14px;padding:18px 20px}
.lg-plan .lg-amt{font-size:1.3rem;font-weight:800;letter-spacing:-.02em;line-height:1.1;margin-bottom:6px;color:var(--ink)}
.lg-plan .lg-amt span{font-size:.85rem;font-weight:600;color:var(--muted)}
.lg-plan .lg-plan-note{font-size:.9rem;color:var(--body);line-height:1.6}
.lg-plan .lg-amt.grad-amt{background:linear-gradient(100deg,var(--brand) 10%,#4F86FF 60%,var(--cyan) 130%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}

.lg-signoff{margin-top:32px;padding:26px 28px;background:var(--bg-soft);border:1px solid var(--line);border-radius:16px;text-align:center}
.lg-signoff p{color:var(--body);font-size:.96rem;line-height:1.7}
.lg-signoff .lg-agree{color:var(--ink);font-weight:700}
.lg-signoff a{color:var(--brand-strong);font-weight:600}
.lg-signoff .lg-brand{margin-top:10px;font-size:.84rem;color:var(--muted)}

@media(max-width:680px){
  .lg-wrap{padding:44px 18px}
  .lg-plans{grid-template-columns:1fr}
}
`;

export default function Agreement() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <title>Website Agreement | Nuvion Solutions</title>
      <meta name="description" content="The plain-English agreement for the website Nuvion Solutions builds for you — what you get, pricing, ownership, revisions, hosting, and refunds. No legal wall, just the facts." />
      <link rel="canonical" href="https://www.nuvion-solutions.com/agreement" />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + LEGAL_CSS }} />

      <Nav />

      <main>
        <div className="lg-wrap">
          <div className="lg-head">
            <span className="lg-eyebrow">Website Agreement</span>
            <h1>Simple, <span className="nv-grad">honest terms</span></h1>
            <p className="lg-lede">
              Plain and simple — this covers the website Nuvion Solutions builds for you. No fine print, no surprises.
            </p>
          </div>

          <div className="lg-body">

            <div className="lg-item">
              <h2>What you get</h2>
              <p>
                A custom, mobile-friendly website for your business — designed and built by Nuvion Solutions LLC, with your real business info on it. Every site is built SEO-ready — local and on-page. Optional care plans handle it after launch: Essential ($29/mo) covers hosting, security, backups, and monitoring; Plus ($50/mo) adds ongoing revisions; Pro ($149/mo) adds ongoing local SEO, content, and review management.
              </p>
            </div>

            <div className="lg-item">
              <h2>Price</h2>
              <p>
                Every project is quoted up front, in writing. <strong>Your price is the one on your
                quote and Stripe invoice</strong> — that number is the agreement, and it doesn't change
                after you approve it. It has two parts:
              </p>
              <div className="lg-plans">
                <div className="lg-plan">
                  <div className="lg-amt">The <span>build</span></div>
                  <div className="lg-plan-note">One payment, per your quote — the site is yours to keep: design, files, and domain. Prefer to spread it out? See the $0-down monthly option below. Simple revisions stay free; larger changes are quoted first.</div>
                </div>
                <div className="lg-plan">
                  <div className="lg-amt grad-amt">Care <span>plan · optional</span></div>
                  <div className="lg-plan-note">An optional monthly plan, per your quote. Essential covers hosting, security, backups, monitoring, and your quote-form leads delivered to your inbox; Plus adds ongoing revisions; Pro adds ongoing local SEO, content, and reviews. Cancel anytime — the site stays yours.</div>
                </div>
              </div>
            </div>

            <div className="lg-item">
              <h2>Paying monthly (the $0-down option)</h2>
              <p>
                Instead of paying for the build up front, you can choose a <strong>monthly plan with $0
                down</strong>, at the rate on your quote (currently $49, $89, or $149/month depending on the
                build). That single monthly payment covers your website plus hosting, care, and updates.
              </p>
              <p>
                The monthly plan is an <strong>18-month commitment</strong>. For those 18 months your site
                stays live and fully maintained, and your monthly payment stays the same.
              </p>
              <p>
                <strong>After 18 months of on-time payments, the website is yours to keep</strong> — design,
                files, and content, the same as if you'd paid once up front — and you're free to host it
                anywhere. Prefer to own it sooner? Pay off the remaining balance and take ownership early —
                just ask and we'll put it in writing. If you cancel before the 18-month term is complete, the
                site is taken offline and doesn't transfer to you.
              </p>
            </div>

            <div className="lg-item">
              <h2>Who owns it</h2>
              <p>
                Once the build is paid in full, the website — design, files, content, and domain — is
                <strong> yours to keep</strong>, and you're free to move it or host it elsewhere anytime.
              </p>
              <p>
                <strong>The care plan doesn't change ownership.</strong> It's an optional service subscription — hosting,
                security, lead delivery, and (on higher tiers) revisions and SEO — that you can cancel anytime. If you cancel, the site is
                still yours: we hand over the files and you host it wherever you like.
              </p>
            </div>

            <div className="lg-item">
              <h2>Revisions</h2>
              <p>
                <strong>Unlimited free revisions for the first 7 days after launch</strong> —
                we keep tweaking until it's right. After that, simple revisions (text changes, photo
                swaps, small tweaks) are free — within reason — and larger revisions, new features, or
                integrations are quoted in writing before we build them.
              </p>
            </div>

            <div className="lg-item">
              <h2>Your domain</h2>
              <p>
                Connect a domain you already own, or Nuvion sets one up for you at no charge — you just cover the
                domain's yearly registration fee (usually about $15–20/year, paid to the registrar).
              </p>
            </div>

            <div className="lg-item">
              <h2>Hosting</h2>
              <p>Included with the care plan — your site is hosted, secured with HTTPS, and kept online by Nuvion. If you skip or cancel the care plan, you own the files and handle hosting yourself (we'll hand everything over cleanly).</p>
            </div>

            <div className="lg-item">
              <h2>Your content</h2>
              <p>
                You confirm you have the right to use any logo, photos, text, or reviews you give us. Nuvion Solutions LLC isn't
                responsible for content you provide.
              </p>
            </div>

            <div className="lg-item">
              <h2>Launch timeline &amp; our 1-week guarantee</h2>
              <p>
                Once you've approved your quote and given us your content (text, photos, logo, and anything else
                your site needs), <strong>we launch your website within one week — or you don't pay for the
                build</strong>. If we miss that one-week window for a reason on our end, the one-time build fee is
                waived and the site is yours.
              </p>
              <p>
                The one-week clock starts when we have everything we need from you. If content or approvals are
                still outstanding, the clock pauses until we receive them — we can't launch what we haven't been
                given. On the monthly plan, the same one-week launch applies to your first live site.
              </p>
            </div>

            <div className="lg-item">
              <h2>Results</h2>
              <p>
                We build fast, modern, search-ready sites, but we can't promise specific Google rankings, traffic,
                or sales — and you should be cautious of anyone who does.
              </p>
            </div>

            <div className="lg-item">
              <h2>Refunds</h2>
              <p>
                You see the finished website before you pay a dollar, so the one-time fee is non-refundable once your
                site is delivered and live. On the monthly plan, payments already made aren't refunded, and the plan
                runs for the 18-month term described above.
              </p>
            </div>

            <div className="lg-item">
              <h2>Liability</h2>
              <p>Nuvion Solutions LLC's total responsibility is limited to the amount you've paid.</p>
            </div>

          </div>

          <div className="lg-signoff">
            <p>
              That's it. Questions? Reply to your invoice email or text us.{' '}
              <span className="lg-agree">By paying your invoice, you agree to these terms.</span>
            </p>
            <p className="lg-brand">
              Nuvion Solutions · <a href="https://www.nuvion-solutions.com">nuvion-solutions.com</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
