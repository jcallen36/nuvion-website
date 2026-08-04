import { Link } from 'react-router-dom';
import { BASE_CSS, Nav, Footer } from './shared.jsx';
import { useLang } from './i18n.jsx';

/* Branded 404 — light page, shared Nav/Footer, noindex (follow) so junk URLs
   never get indexed but link equity still flows to the real pages. */
const NF_CSS = `
.nf-wrap{min-height:58vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:80px 24px}
.nf-inner{max-width:560px}
.nf-code{font-size:clamp(4.5rem,14vw,8rem);font-weight:800;letter-spacing:-.05em;line-height:1;background:linear-gradient(100deg,var(--brand) 10%,#4F86FF 60%,var(--cyan) 130%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.nf-h1{font-size:clamp(1.6rem,3.4vw,2.3rem);color:var(--ink);font-weight:800;letter-spacing:-.02em;margin:6px 0 14px}
.nf-lead{color:var(--body);font-size:1.06rem;line-height:1.6;margin:0 auto 28px;max-width:440px}
.nf-cta{display:flex;gap:13px;justify-content:center;flex-wrap:wrap}
`;

export default function NotFound() {
  const { t } = useLang();
  return (
    <>
      <title>{t('Page not found | Nuvion Solutions', 'Página no encontrada | Nuvion Solutions')}</title>
      <meta name="robots" content="noindex, follow" />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + NF_CSS }} />
      <Nav />
      <main>
        <section className="nf-wrap"><div className="nf-inner">
          <div className="nf-code">404</div>
          <h1 className="nf-h1">{t('Page not found', 'Página no encontrada')}</h1>
          <p className="nf-lead">{t("This page moved or never existed — let's get you back on track.", 'Esta página se movió o nunca existió — vamos a encaminarte de nuevo.')}</p>
          <div className="nf-cta">
            <Link to="/" className="nv-btn nv-btn-primary nv-btn-lg">{t('Back home', 'Volver al inicio')}</Link>
            <Link to="/book" className="nv-btn nv-btn-ghost nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')}</Link>
          </div>
        </div></section>
      </main>
      <Footer />
    </>
  );
}
