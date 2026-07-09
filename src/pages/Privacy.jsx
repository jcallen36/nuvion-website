import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import SiteNav from '../components/SiteNav.jsx';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

/* Legal page chrome — quiet, print-like typesetting on paper.
 * The legal wording itself is untouched; this CSS is layout only. */
const LEGAL_CSS = `
.lg-hero{max-width:820px;padding-bottom:0}
.lg-updated{margin-bottom:18px;font-family:var(--mono);font-size:.75rem;letter-spacing:.08em;color:var(--muted-2);font-variant-numeric:tabular-nums;display:flex;align-items:center;gap:12px}
.lg-updated::after{content:'';flex:1;max-width:180px;height:1px;background:var(--hairline)}
.lg-lede{margin-top:2px}

.lg-wrap{max-width:820px;margin:0 auto;padding:clamp(44px,6vw,72px) 32px var(--pad-section)}
.lg-doc{border-top:1px solid var(--hairline)}
.lg-item{padding:clamp(28px,4vw,42px) 0;border-bottom:1px solid var(--hairline)}
.lg-item h2{font-family:var(--serif);font-size:clamp(1.14rem,1.9vw,1.32rem);font-weight:700;letter-spacing:-.012em;line-height:1.3;margin-bottom:12px;color:var(--ink)}
.lg-item p{color:var(--muted-2);font-size:.95rem;line-height:1.75;max-width:66ch}
.lg-item p + p{margin-top:12px}
.lg-item strong{color:var(--ink);font-weight:600}
.lg-item a{color:var(--petrol);font-weight:600;border-bottom:1px solid var(--hairline);padding-bottom:1px;transition:color .18s var(--ease-out),border-color .18s var(--ease-out)}
.lg-item a:hover{color:var(--petrol-deep);border-color:var(--petrol)}
.lg-item ul{list-style:none;margin:14px 0 0;padding:0;max-width:66ch}
.lg-item li{display:flex;align-items:baseline;gap:12px;padding:9px 0;border-bottom:1px solid var(--hairline);font-size:.93rem;color:var(--ink);line-height:1.6}
.lg-item li:last-child{border-bottom:none}
.lg-item li::before{content:'—';color:var(--petrol);font-family:var(--mono);font-size:.8rem;flex-shrink:0}

.lg-signoff{margin-top:clamp(36px,5vw,56px);padding:clamp(26px,4vw,38px) clamp(26px,4vw,40px)}
.lg-signoff p{font-family:var(--serif);font-style:italic;font-size:clamp(1.05rem,1.9vw,1.28rem);font-weight:400;line-height:1.5;letter-spacing:-.008em;color:var(--ink);max-width:52ch}
.lg-signoff .lg-brand{margin-top:16px;padding-top:16px;border-top:1px solid var(--hairline);font-family:var(--mono);font-style:normal;font-size:.74rem;letter-spacing:.1em;color:var(--muted-2)}
.lg-signoff .lg-brand a{color:var(--petrol);border-bottom:1px solid var(--hairline);padding-bottom:1px;transition:color .18s var(--ease-out),border-color .18s var(--ease-out)}
.lg-signoff .lg-brand a:hover{color:var(--petrol-deep);border-color:var(--petrol)}

@media(max-width:680px){
  .lg-wrap{padding:36px 20px 72px}
  .lg-signoff{padding:24px 22px}
}
`;

const CSS = BASE_CSS + FOOTER_CSS + LEGAL_CSS;

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Nuvion Solutions</title>
        <meta
          name="description"
          content="The Privacy Policy for Nuvion Solutions — what information we collect on nuvion-solutions.com, how we use it, who we share it with, and your choices."
        />
        <link rel="canonical" href="https://nuvion-solutions.com/privacy" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="grain" aria-hidden="true" />

      <SiteNav />

      <header className="sp-hero lg-hero">
        <span className="sp-eyebrow">Legal</span>
        <h1 className="sp-h1">Privacy <span className="grad">Policy</span></h1>
        <div className="lg-updated">Last updated: July 5, 2026</div>
        <p className="sp-sub lg-lede">
          This policy explains what information Nuvion Solutions collects on nuvion-solutions.com, how we use it,
          and the choices you have. We keep it short and honest — we don't sell your data.
        </p>
      </header>

      <div className="lg-wrap">
        <div className="lg-doc">

          <div className="lg-item">
            <h2>1. Who we are</h2>
            <p>
              Nuvion Solutions LLC ("we," "us," or "our") operates nuvion-solutions.com and provides AI automation,
              web design, and related services to businesses. For any privacy question, email{' '}
              <a href="mailto:team@nuvion-solutions.com">team@nuvion-solutions.com</a>.
            </p>
          </div>

          <div className="lg-item">
            <h2>2. Information we collect</h2>
            <p><strong>Information you give us.</strong> When you fill out a form, book a call, request a quote, or
              contact us, we collect what you provide — typically your name, business name, email, phone number, and
              any details you include about your project.</p>
            <p><strong>Payment information.</strong> When you pay an invoice, payment is processed by{' '}
              <strong>Stripe</strong>. Stripe handles your card details securely; we do not collect or store your full
              card number.</p>
            <p><strong>Information collected automatically.</strong> Like most websites, we may collect basic technical
              and usage data (such as browser type, device, pages viewed, and referring links) through cookies and
              similar technologies to help the site work and to understand how it's used.</p>
          </div>

          <div className="lg-item">
            <h2>3. How we use your information</h2>
            <ul>
              <li>Respond to your questions and requests</li>
              <li>Schedule and confirm calls and appointments</li>
              <li>Provide, deliver, and support the services you hire us for</li>
              <li>Process payments and send invoices and receipts</li>
              <li>Send you project updates and important service messages</li>
              <li>Operate, secure, and improve our website</li>
              <li>Comply with our legal obligations</li>
            </ul>
          </div>

          <div className="lg-item">
            <h2>4. How we share information</h2>
            <p>
              <strong>We do not sell your personal information.</strong> We share it only with service providers who
              help us operate — for example, Stripe (payment processing), and our hosting, email, calendar, and
              scheduling tools — and only as needed to provide our services. We may also disclose information if
              required by law or to protect our rights.
            </p>
          </div>

          <div className="lg-item">
            <h2>5. Cookies & analytics</h2>
            <p>
              We may use cookies and basic analytics to understand how visitors use the site so we can improve it. You
              can control or disable cookies in your browser settings; some parts of the site may not work as well
              without them.
            </p>
          </div>

          <div className="lg-item">
            <h2>6. Data retention</h2>
            <p>
              We keep your information for as long as needed to provide our services, maintain business and financial
              records, and meet legal requirements — then we delete or anonymize it. You can ask us to delete your
              information sooner (see below).
            </p>
          </div>

          <div className="lg-item">
            <h2>7. Security</h2>
            <p>
              We use reasonable measures to protect your information, including HTTPS encryption and trusted payment and
              hosting providers. No method of transmission or storage is 100% secure, but we work to keep your data
              safe.
            </p>
          </div>

          <div className="lg-item">
            <h2>8. Your choices & rights</h2>
            <p>
              You can ask us to access, correct, or delete the personal information we hold about you, and you can
              unsubscribe from marketing emails at any time using the link in the email or by contacting us. California
              residents have additional rights under the CCPA/CPRA, including the right to know, delete, and opt out of
              the "sale" of personal information — and again, we do not sell your information. To exercise any of these
              rights, email <a href="mailto:team@nuvion-solutions.com">team@nuvion-solutions.com</a>.
            </p>
          </div>

          <div className="lg-item">
            <h2>9. Children's privacy</h2>
            <p>
              Our site and services are meant for businesses and are not directed to children under 16. We do not
              knowingly collect personal information from children.
            </p>
          </div>

          <div className="lg-item">
            <h2>10. Third-party links</h2>
            <p>
              Our site may link to other websites we don't control. We're not responsible for their content or privacy
              practices, so please review their policies when you visit them.
            </p>
          </div>

          <div className="lg-item">
            <h2>11. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. When we do, we'll change the "Last updated" date above.
              Significant changes will be reflected here on this page.
            </p>
          </div>

          <div className="lg-item">
            <h2>12. Contact</h2>
            <p>
              Questions about your privacy or this policy? Email{' '}
              <a href="mailto:team@nuvion-solutions.com">team@nuvion-solutions.com</a>.
            </p>
          </div>

        </div>

        <div className="lg-signoff plate">
          <p>We keep it simple: we collect only what we need, we protect it, and we never sell it.</p>
          <p className="lg-brand">
            Nuvion Solutions · <a href="https://nuvion-solutions.com">nuvion-solutions.com</a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
