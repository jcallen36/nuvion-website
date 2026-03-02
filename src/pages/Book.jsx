import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';

const CSS = BASE_CSS + `
.bk-hero{padding:48px 32px 32px;max-width:700px;margin:0 auto;text-align:center}
.bk-hero h1{font-size:clamp(1.7rem,4vw,2.4rem);font-weight:800;letter-spacing:-.03em;line-height:1.15;margin-bottom:14px}
.bk-hero p{color:var(--muted);font-size:.95rem;line-height:1.7}
.bk-embed{padding:0 32px 64px;max-width:960px;margin:0 auto}
.bk-embed iframe{width:100%;min-height:720px;border:none;overflow:hidden;display:block}
@media(max-width:680px){
  .bk-hero{padding:32px 20px 24px}
  .bk-embed{padding:0 0 48px}
}
`;

export default function Book() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://go.nuvionsolutions.us/js/form_embed.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <>
      <Helmet>
        <title>Book a Free Strategy Call | Nuvion Solutions</title>
        <meta name="description" content="Book your free AI automation strategy call with Nuvion Solutions. We'll map your workflows and show you exactly how to save 10+ hours per week with custom automation." />
        <link rel="canonical" href="https://nuvion-solutions.com/book" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <Link to="/" className="sp-back">← Back to Home</Link>
      </nav>

      <div className="bk-hero">
        <h1>Book a Free <span className="grad">Strategy Call</span></h1>
        <p>Pick a time that works for you. We'll walk through your business, identify automation opportunities, and outline exactly what we'd build for you — no commitment required.</p>
      </div>

      <div className="bk-embed">
        <iframe
          src="https://go.nuvionsolutions.us/widget/booking/XgVZA3P6z5e0Y9GD9yyI"
          scrolling="no"
          id="XgVZA3P6z5e0Y9GD9yyI_1772423525914"
          style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '720px' }}
        />
      </div>
    </>
  );
}
