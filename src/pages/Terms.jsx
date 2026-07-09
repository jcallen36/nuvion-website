import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* Terms of Service — typeset like a printed contract, night edition:
 * porcelain type on a deep green-black plate. All colors come from the
 * shared night tokens; nothing is hardcoded here.
 * Legal wording is untouchable; everything here is chrome and styling. */
const CSS = `
.lg-updated{font-family:var(--mono);font-size:.75rem;letter-spacing:.08em;color:var(--muted-2);margin:2px 0 18px;font-variant-numeric:tabular-nums}
.lg-main{display:grid;grid-template-columns:1fr;gap:40px;padding-top:clamp(36px,5vw,60px);padding-bottom:var(--pad-section)}
@media(min-width:960px){.lg-main{grid-template-columns:220px minmax(0,1fr);gap:56px;align-items:start}}

/* Contents rail (desktop only — headings are numbered in the document itself) */
.lg-toc{display:none}
@media(min-width:960px){.lg-toc{display:block;position:sticky;top:92px}}
.lg-toc-title{display:block;padding-bottom:14px;border-bottom:1px solid var(--hairline)}
.lg-toc ol{list-style:none;margin:0;padding:0}
.lg-toc a{display:flex;align-items:baseline;gap:12px;padding:8px 2px;font-size:.84rem;line-height:1.4;color:var(--muted-2);border-bottom:1px solid var(--hairline);transition:color .18s,padding-left .18s var(--ease-out)}
.lg-toc a:hover{color:var(--petrol);padding-left:8px}
.lg-toc-num{font-family:var(--mono);font-size:.66rem;color:var(--petrol);font-variant-numeric:tabular-nums}

/* The document plate */
.lg-doc{padding:clamp(10px,2.6vw,26px) clamp(22px,4.4vw,56px)}
.lg-item{padding:clamp(24px,3.4vw,34px) 0;border-bottom:1px solid var(--hairline);scroll-margin-top:88px}
.lg-item:last-child{border-bottom:none}
.lg-item h2{font-family:var(--serif);font-size:clamp(1.18rem,1.9vw,1.38rem);font-weight:700;letter-spacing:-.012em;line-height:1.25;margin-bottom:10px}
.lg-item p{font-size:.95rem;color:var(--muted-2);line-height:1.75;max-width:66ch}
.lg-item p + p{margin-top:10px}
.lg-item strong{color:var(--ink);font-weight:600}
.lg-item a{color:var(--petrol);border-bottom:1px solid var(--hairline);padding-bottom:1px;transition:color .18s,border-color .18s}
.lg-item a:hover{color:var(--petrol-deep);border-color:var(--petrol-deep)}

/* Sign-off */
.lg-signoff{margin-top:clamp(28px,4vw,44px);padding-top:22px;border-top:1px solid var(--hairline)}
.lg-signoff p{font-size:.92rem;color:var(--muted-2);line-height:1.7;max-width:66ch}
.lg-signoff .lg-brand{margin-top:8px;font-family:var(--mono);font-size:.74rem;letter-spacing:.06em;color:var(--muted-2)}
.lg-signoff a{color:var(--petrol);border-bottom:1px solid var(--hairline);transition:color .18s,border-color .18s}
.lg-signoff a:hover{color:var(--petrol-deep);border-color:var(--petrol-deep)}
`;

const SECTIONS = [
  'Who we are',
  'Acceptance of these terms',
  'Our services',
  'Orders, pricing & payment',
  'Cancellation & refunds',
  'Your responsibilities',
  'Intellectual property',
  'Third-party services',
  'No guarantees',
  'Limitation of liability',
  'Changes to these terms',
  'Governing law',
  'Contact',
];

export default function Terms() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Terms of Service | Nuvion Solutions</title>
        <meta
          name="description"
          content="The Terms of Service for Nuvion Solutions — the rules for using nuvion-solutions.com and our AI automation, web design, and related services."
        />
        <link rel="canonical" href="https://nuvion-solutions.com/terms" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + FOOTER_CSS + CSS }} />
      <div className="grain" aria-hidden="true" />

      <SiteNav />

      <header className="sp-hero">
        <span className="sp-eyebrow">Legal</span>
        <h1 className="sp-h1">Terms of <span className="grad">Service</span></h1>
        <div className="lg-updated">Last updated: July 5, 2026</div>
        <p className="sp-sub">
          These terms govern your use of nuvion-solutions.com and the services provided by Nuvion Solutions.
          By using our site or engaging our services, you agree to them.
        </p>
      </header>

      <main className="sp-wrap lg-main">

        <aside className="lg-toc" aria-label="Contents">
          <span className="label lg-toc-title">Contents</span>
          <ol>
            {SECTIONS.map((title, i) => (
              <li key={title}>
                <a href={`#term-${i + 1}`}>
                  <span className="lg-toc-num">{String(i + 1).padStart(2, '0')}</span>
                  {title}
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <div>
          <article className="lg-doc plate">

            <div className="lg-item" id="term-1">
              <h2>1. Who we are</h2>
              <p>
                Nuvion Solutions LLC ("Nuvion," "we," "us," or "our") provides AI automation, web design and development,
                and related digital services to businesses. This site is operated by Nuvion Solutions LLC. You can reach us
                at <a href="mailto:team@nuvion-solutions.com">team@nuvion-solutions.com</a>.
              </p>
            </div>

            <div className="lg-item" id="term-2">
              <h2>2. Acceptance of these terms</h2>
              <p>
                By accessing this website, requesting a quote, booking a call, or purchasing a service, you agree to be
                bound by these Terms of Service and our <Link to="/privacy">Privacy Policy</Link>. If you do not agree,
                please do not use the site or our services.
              </p>
            </div>

            <div className="lg-item" id="term-3">
              <h2>3. Our services</h2>
              <p>
                We provide the services described on this site and in the specific quote, proposal, or invoice you
                receive from us. The exact scope, deliverables, price, and timeline for your project are defined in
                that quote or invoice, and — for website projects — in our{' '}
                <Link to="/agreement">Website Agreement</Link>, which forms part of these terms for those projects.
              </p>
            </div>

            <div className="lg-item" id="term-4">
              <h2>4. Orders, pricing & payment</h2>
              <p>
                Prices are stated in U.S. dollars. Payment is due as set out in your invoice or agreement. We use{' '}
                <strong>Stripe</strong> to process payments securely; by paying an invoice you also agree to Stripe's
                terms. One-time fees are billed once; subscription (monthly) plans renew automatically until you cancel.
              </p>
            </div>

            <div className="lg-item" id="term-5">
              <h2>5. Cancellation & refunds</h2>
              <p>
                You can cancel a monthly plan at any time; the plan remains active through the current billing period
                and the current period is not refunded. For website builds, you see the finished result before paying,
                so one-time fees are non-refundable once the site is delivered and live. Full refund and cancellation
                details for website projects are in the <Link to="/agreement">Website Agreement</Link>.
              </p>
            </div>

            <div className="lg-item" id="term-6">
              <h2>6. Your responsibilities</h2>
              <p>
                You agree to provide accurate information and to use our site and services lawfully. You confirm that you
                own, or have permission to use, any logo, photos, text, reviews, or other content you provide to us, and
                that our use of it to deliver your project will not infringe anyone's rights.
              </p>
            </div>

            <div className="lg-item" id="term-7">
              <h2>7. Intellectual property</h2>
              <p>
                The content, design, and branding of this website are owned by Nuvion Solutions LLC and may not be copied or
                reused without permission. Ownership of the deliverables we create for you (such as a website) transfers
                as described in your project's agreement — for websites, see the{' '}
                <Link to="/agreement">Website Agreement</Link>.
              </p>
            </div>

            <div className="lg-item" id="term-8">
              <h2>8. Third-party services</h2>
              <p>
                We rely on trusted third-party providers to operate — for example, Stripe (payments), and our hosting,
                email, and scheduling tools. Their services are governed by their own terms and privacy policies, and we
                are not responsible for those third parties.
              </p>
            </div>

            <div className="lg-item" id="term-9">
              <h2>9. No guarantees</h2>
              <p>
                We build fast, modern, professional systems, but we cannot promise specific outcomes such as Google
                rankings, traffic, leads, or revenue. Our services are provided "as is" and "as available," without
                warranties of any kind except those that cannot be excluded under applicable law.
              </p>
            </div>

            <div className="lg-item" id="term-10">
              <h2>10. Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, Nuvion Solutions LLC is not liable for any indirect, incidental, or
                consequential damages, and our total liability for any claim is limited to the amount you paid us for the
                service giving rise to the claim.
              </p>
            </div>

            <div className="lg-item" id="term-11">
              <h2>11. Changes to these terms</h2>
              <p>
                We may update these terms from time to time. When we do, we'll change the "Last updated" date above.
                Continuing to use the site or our services after a change means you accept the updated terms.
              </p>
            </div>

            <div className="lg-item" id="term-12">
              <h2>12. Governing law</h2>
              <p>
                These terms are governed by the laws of the State of California, without regard to its conflict-of-laws
                rules. Any dispute will be handled in the state or federal courts located in California.
              </p>
            </div>

            <div className="lg-item" id="term-13">
              <h2>13. Contact</h2>
              <p>
                Questions about these terms? Email{' '}
                <a href="mailto:team@nuvion-solutions.com">team@nuvion-solutions.com</a>.
              </p>
            </div>

          </article>

          <div className="lg-signoff">
            <p>By using nuvion-solutions.com or engaging our services, you agree to these Terms of Service.</p>
            <p className="lg-brand">
              Nuvion Solutions · <a href="https://nuvion-solutions.com">nuvion-solutions.com</a>
            </p>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
