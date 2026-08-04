import { useEffect } from 'react';
import { BASE_CSS, Nav, Footer } from '../site/shared.jsx';

const LEGAL_CSS = `
.lg-wrap{max-width:760px;margin:0 auto;padding:64px 24px}
.lg-eyebrow{display:inline-flex;align-items:center;gap:8px;background:var(--brand-soft);color:var(--brand-strong);font-weight:700;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;padding:7px 15px;border-radius:100px;margin-bottom:20px}
.lg-head{margin-bottom:10px}
.lg-head h1{font-size:clamp(2rem,4.4vw,2.9rem);color:var(--ink);font-weight:800;letter-spacing:-.03em;line-height:1.1;margin-bottom:12px}
.lg-updated{color:var(--muted);font-size:.84rem;font-weight:600;letter-spacing:.02em}
.lg-lede{color:var(--body);font-size:1.05rem;line-height:1.7;margin-top:18px}
.lg-body{margin-top:14px}
.lg-item{padding:30px 0;border-bottom:1px solid var(--line)}
.lg-item:last-child{border-bottom:none}
.lg-item h2{font-size:1.2rem;font-weight:800;letter-spacing:-.02em;margin-bottom:12px;color:var(--ink)}
.lg-item p{color:var(--body);font-size:1rem;line-height:1.75}
.lg-item p + p{margin-top:12px}
.lg-item ul{margin:12px 0 0;padding-left:22px;color:var(--body);font-size:1rem;line-height:1.75}
.lg-item li{margin-bottom:8px}
.lg-item strong{color:var(--ink);font-weight:700}
.lg-item a{color:var(--brand-strong);font-weight:600}
.lg-item a:hover{text-decoration:underline}
.lg-signoff{margin-top:32px;padding:26px 28px;background:var(--bg-soft);border:1px solid var(--line);border-radius:16px;text-align:center}
.lg-signoff p{color:var(--body);font-size:.96rem;line-height:1.7}
.lg-signoff .lg-brand{margin-top:10px;font-size:.84rem;color:var(--muted)}
.lg-signoff a{color:var(--brand-strong);font-weight:600}
@media(max-width:680px){.lg-wrap{padding:44px 18px}}
`;

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <title>Privacy Policy | Nuvion Solutions</title>
      <meta name="description" content="The Privacy Policy for Nuvion Solutions — what information we collect on nuvion-solutions.com, how we use it, who we share it with, and your choices." />
      <link rel="canonical" href="https://nuvion-solutions.com/privacy" />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + LEGAL_CSS }} />

      <Nav />

      <main>
        <div className="lg-wrap">
          <div className="lg-head">
            <span className="lg-eyebrow">Legal</span>
            <h1>Privacy <span className="nv-grad">Policy</span></h1>
            <div className="lg-updated">Last updated: July 5, 2026</div>
            <p className="lg-lede">
              This policy explains what information Nuvion Solutions collects on nuvion-solutions.com, how we use it,
              and the choices you have. We keep it short and honest — we don't sell your data.
            </p>
          </div>

          <div className="lg-body">

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

          <div className="lg-signoff">
            <p>We keep it simple: we collect only what we need, we protect it, and we never sell it.</p>
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
