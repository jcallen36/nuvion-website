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
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <a href="https://nuvion-solutions.com" className="sp-back">← Back to nuvion-solutions.com</a>
      </nav>

      <div className="lg-hero">
        <span className="lg-eyebrow">Legal</span>
        <h1>Terms of <span className="grad">Service</span></h1>
        <div className="lg-updated">Last updated: July 5, 2026</div>
        <p className="lg-lede">
          These terms govern your use of nuvion-solutions.com and the services provided by Nuvion Solutions.
          By using our site or engaging our services, you agree to them.
        </p>
      </div>

      <div className="lg-wrap">
        <div className="lg-card">

          <div className="lg-item">
            <h2>1. Who we are</h2>
            <p>
              Nuvion Solutions LLC ("Nuvion," "we," "us," or "our") provides AI automation, web design and development,
              and related digital services to businesses. This site is operated by Nuvion Solutions LLC. You can reach us
              at <a href="mailto:team@nuvion-solutions.com">team@nuvion-solutions.com</a>.
            </p>
          </div>

          <div className="lg-item">
            <h2>2. Acceptance of these terms</h2>
            <p>
              By accessing this website, requesting a quote, booking a call, or purchasing a service, you agree to be
              bound by these Terms of Service and our <Link to="/privacy">Privacy Policy</Link>. If you do not agree,
              please do not use the site or our services.
            </p>
          </div>

          <div className="lg-item">
            <h2>3. Our services</h2>
            <p>
              We provide the services described on this site and in the specific quote, proposal, or invoice you
              receive from us. The exact scope, deliverables, price, and timeline for your project are defined in
              that quote or invoice, and — for website projects — in our{' '}
              <Link to="/agreement">Website Agreement</Link>, which forms part of these terms for those projects.
            </p>
          </div>

          <div className="lg-item">
            <h2>4. Orders, pricing & payment</h2>
            <p>
              Prices are stated in U.S. dollars. Payment is due as set out in your invoice or agreement. We use{' '}
              <strong>Stripe</strong> to process payments securely; by paying an invoice you also agree to Stripe's
              terms. One-time fees are billed once; subscription (monthly) plans renew automatically until you cancel.
            </p>
          </div>

          <div className="lg-item">
            <h2>5. Cancellation & refunds</h2>
            <p>
              You can cancel a monthly plan at any time; the plan remains active through the current billing period
              and the current period is not refunded. For website builds, you see the finished result before paying,
              so one-time fees are non-refundable once the site is delivered and live. Full refund and cancellation
              details for website projects are in the <Link to="/agreement">Website Agreement</Link>.
            </p>
          </div>

          <div className="lg-item">
            <h2>6. Your responsibilities</h2>
            <p>
              You agree to provide accurate information and to use our site and services lawfully. You confirm that you
              own, or have permission to use, any logo, photos, text, reviews, or other content you provide to us, and
              that our use of it to deliver your project will not infringe anyone's rights.
            </p>
          </div>

          <div className="lg-item">
            <h2>7. Intellectual property</h2>
            <p>
              The content, design, and branding of this website are owned by Nuvion Solutions LLC and may not be copied or
              reused without permission. Ownership of the deliverables we create for you (such as a website) transfers
              as described in your project's agreement — for websites, see the{' '}
              <Link to="/agreement">Website Agreement</Link>.
            </p>
          </div>

          <div className="lg-item">
            <h2>8. Third-party services</h2>
            <p>
              We rely on trusted third-party providers to operate — for example, Stripe (payments), and our hosting,
              email, and scheduling tools. Their services are governed by their own terms and privacy policies, and we
              are not responsible for those third parties.
            </p>
          </div>

          <div className="lg-item">
            <h2>9. No guarantees</h2>
            <p>
              We build fast, modern, professional systems, but we cannot promise specific outcomes such as Google
              rankings, traffic, leads, or revenue. Our services are provided "as is" and "as available," without
              warranties of any kind except those that cannot be excluded under applicable law.
            </p>
          </div>

          <div className="lg-item">
            <h2>10. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, Nuvion Solutions LLC is not liable for any indirect, incidental, or
              consequential damages, and our total liability for any claim is limited to the amount you paid us for the
              service giving rise to the claim.
            </p>
          </div>

          <div className="lg-item">
            <h2>11. Changes to these terms</h2>
            <p>
              We may update these terms from time to time. When we do, we'll change the "Last updated" date above.
              Continuing to use the site or our services after a change means you accept the updated terms.
            </p>
          </div>

          <div className="lg-item">
            <h2>12. Governing law</h2>
            <p>
              These terms are governed by the laws of the State of California, without regard to its conflict-of-laws
              rules. Any dispute will be handled in the state or federal courts located in California.
            </p>
          </div>

          <div className="lg-item">
            <h2>13. Contact</h2>
            <p>
              Questions about these terms? Email{' '}
              <a href="mailto:team@nuvion-solutions.com">team@nuvion-solutions.com</a>.
            </p>
          </div>

        </div>

        <div className="lg-signoff">
          <p>By using nuvion-solutions.com or engaging our services, you agree to these Terms of Service.</p>
          <p className="lg-brand">
            Nuvion Solutions · <a href="https://nuvion-solutions.com">nuvion-solutions.com</a>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
