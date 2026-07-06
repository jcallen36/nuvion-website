import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';

const LEGAL_CSS = `
.lg-hero{padding:56px 32px 8px;max-width:760px;margin:0 auto;text-align:center}
.lg-eyebrow{display:inline-flex;align-items:center;gap:8px;border-radius:100px;padding:6px 16px;font-size:.72rem;font-weight:700;margin-bottom:20px;letter-spacing:.12em;text-transform:uppercase;color:var(--cyan);background:rgba(0,220,255,.07);border:1px solid var(--border)}
.lg-hero h1{font-size:clamp(1.9rem,4.5vw,2.6rem);font-weight:800;letter-spacing:-.03em;line-height:1.15;margin-bottom:10px}
.lg-updated{color:var(--dim);font-size:.8rem;letter-spacing:.02em}
.lg-lede{color:var(--muted);font-size:1rem;line-height:1.7;max-width:60ch;margin:14px auto 0}
.lg-wrap{max-width:760px;margin:0 auto;padding:32px 32px 72px}
.lg-card{background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:14px 40px}
.lg-item{padding:26px 0;border-bottom:1px solid var(--border)}
.lg-item:last-child{border-bottom:none}
.lg-item h2{font-size:1.05rem;font-weight:700;letter-spacing:-.01em;margin-bottom:9px;color:var(--text)}
.lg-item p{color:var(--muted);font-size:.95rem;line-height:1.72;max-width:66ch}
.lg-item p + p{margin-top:10px}
.lg-item ul{margin:10px 0 0;padding-left:20px;color:var(--muted);font-size:.95rem;line-height:1.72}
.lg-item li{margin-bottom:7px}
.lg-item strong{color:var(--text);font-weight:600}
.lg-item a{color:var(--cyan);font-weight:600;text-decoration:none}
.lg-item a:hover{text-decoration:underline}
.lg-signoff{margin-top:28px;padding:22px 24px;background:var(--surface);border:1px solid var(--border);border-radius:16px;text-align:center}
.lg-signoff p{color:var(--muted);font-size:.92rem;line-height:1.7}
.lg-signoff .lg-brand{margin-top:10px;font-size:.82rem;color:var(--dim)}
.lg-signoff a{color:var(--cyan);font-weight:600;text-decoration:none}
@media(max-width:680px){
  .lg-hero{padding:40px 20px 4px}
  .lg-wrap{padding:24px 16px 52px}
  .lg-card{padding:8px 22px}
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

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <a href="https://nuvion-solutions.com" className="sp-back">← Back to nuvion-solutions.com</a>
      </nav>

      <div className="lg-hero">
        <span className="lg-eyebrow">Legal</span>
        <h1>Privacy <span className="grad">Policy</span></h1>
        <div className="lg-updated">Last updated: July 5, 2026</div>
        <p className="lg-lede">
          This policy explains what information Nuvion Solutions collects on nuvion-solutions.com, how we use it,
          and the choices you have. We keep it short and honest — we don't sell your data.
        </p>
      </div>

      <div className="lg-wrap">
        <div className="lg-card">

          <div className="lg-item">
            <h2>1. Who we are</h2>
            <p>
              Nuvion Solutions ("we," "us," or "our") operates nuvion-solutions.com and provides AI automation,
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

        <div className="lg-signoff">
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
