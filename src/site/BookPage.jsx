import { BASE_CSS, Nav, Footer, useReveal, Check } from './shared.jsx';
import { IntakeForm, FORM_CSS } from './IntakeForm.jsx';
import { useLang } from './i18n.jsx';

const BOOK_CSS = `
.bk-hero{padding:64px 0 24px;text-align:center;background:radial-gradient(60% 60% at 50% -10%, rgba(37,110,247,.11), transparent 70%)}
.bk-h1{font-size:clamp(2.2rem,4.4vw,3.3rem);color:var(--ink);font-weight:800;letter-spacing:-.035em;line-height:1.07;margin:18px auto 14px;max-width:16ch}
.bk-hero p.sub{font-size:clamp(1.04rem,1.5vw,1.22rem);color:var(--body);max-width:580px;margin:0 auto;line-height:1.6}
.bk-grid{display:grid;grid-template-columns:1fr;gap:34px;align-items:start;margin-top:8px}
@media(min-width:880px){.bk-grid{grid-template-columns:.85fr 1.15fr}}
.bk-info h2{color:var(--ink);font-size:1.4rem;font-weight:800;letter-spacing:-.02em;margin-bottom:18px}
.bk-list{list-style:none;display:flex;flex-direction:column;gap:16px;margin-bottom:26px}
.bk-list li{display:flex;gap:12px;align-items:flex-start}
.bk-list .ck{width:28px;height:28px;border-radius:8px;background:var(--brand-soft);color:var(--brand-strong);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.bk-list b{color:var(--ink);display:block;font-size:.98rem}.bk-list span{color:var(--body);font-size:.92rem}
.bk-call{display:inline-flex;align-items:center;gap:12px;background:#fff;border:1px solid var(--line);border-radius:14px;padding:16px 20px;box-shadow:var(--shadow);text-decoration:none}
.bk-call .ph{font-size:1.5rem}
.bk-call b{color:var(--ink);font-size:1.2rem;display:block;letter-spacing:-.01em}
.bk-call span{color:var(--muted);font-size:.82rem;font-weight:600}
.bk-strip{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--bg-soft);margin-top:8px}
.bk-strip-in{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;padding:20px 0;font-weight:600;color:var(--ink);font-size:.92rem}
.bk-strip-in span{display:inline-flex;align-items:center;gap:8px}.bk-strip-in svg{color:var(--brand)}
`;

export default function BookPage() {
  useReveal();
  const { t } = useLang();
  return (
    <>
      <title>Book a Free Call | Nuvion Solutions — Web Design in Sonoma County</title>
      <meta name="description" content="Book a free, no-pressure call with Nuvion Solutions. Tell us about your business and we'll show you exactly what we'd build. Same-day response." />
      <link rel="canonical" href="https://nuvion-solutions.com/book" />
      <style dangerouslySetInnerHTML={{ __html: BASE_CSS + BOOK_CSS + FORM_CSS }} />
      <Nav />
      <main>
        <section className="bk-hero"><div className="nv-wrap">
          <span className="nv-eyebrow"><span className="dot" />{t('Free vision session · No pressure', 'Sesión de visión gratis · Sin presión')}</span>
          <h1 className="bk-h1">{t(<>Let's turn your vision into a <span className="nv-grad">website that wins customers</span>.</>, <>Convirtamos tu visión en un <span className="nv-grad">sitio que gana clientes</span>.</>)}</h1>
          <p className="sub">{t("Tell us about your business and your vision — we'll get back to you the same day with exactly what we'd build and a straight answer on cost. Bring your ideas, even a rough sketch.", 'Cuéntanos sobre tu negocio y tu visión — te responderemos el mismo día con exactamente lo que construiríamos y una respuesta directa sobre el costo. Trae tus ideas, hasta un boceto.')}</p>
        </div></section>

        <section className="nv-sec" style={{ paddingTop: 34 }}><div className="nv-wrap">
          <div className="bk-grid">
            <div className="bk-info rv">
              <h2>{t('What to expect', 'Qué esperar')}</h2>
              <ul className="bk-list">
                <li><span className="ck"><Check /></span><div><b>{t('A real conversation', 'Una conversación real')}</b><span>{t('You talk to a real person — not a sales rep. Bring your ideas, even a rough sketch.', 'Hablas con una persona real — no con un vendedor. Trae tus ideas, hasta un boceto.')}</span></div></li>
                <li><span className="ck"><Check /></span><div><b>{t('Your vision, mapped out', 'Tu visión, trazada')}</b><span>{t("We'll turn your ideas into a clear plan — exactly what we'd build and roughly what it costs.", 'Convertiremos tus ideas en un plan claro — exactamente lo que construiríamos y aproximadamente cuánto cuesta.')}</span></div></li>
                <li><span className="ck"><Check /></span><div><b>{t('Same-day response', 'Respuesta el mismo día')}</b><span>{t("Send the form and we'll get back to you today — usually within the hour.", 'Envía el formulario y te responderemos hoy — normalmente dentro de la hora.')}</span></div></li>
              </ul>
              <a className="bk-call" href="tel:+17075209179"><span className="ph">📞</span><span><b>(707) 520-9179</b><span>{t('Prefer to call or text? Reach us directly.', '¿Prefieres llamar o escribir? Contáctanos directamente.')}</span></span></a>
            </div>
            <div className="rv d1"><IntakeForm source="book" /></div>
          </div>
        </div></section>

        <div className="bk-strip"><div className="nv-wrap bk-strip-in">
          <span><Check /> {t('No long-term contracts', 'Sin contratos a largo plazo')}</span>
          <span><Check /> {t('Same-day answers', 'Respuestas el mismo día')}</span>
          <span><Check /> {t('Sonoma County local', 'Local de Sonoma County')}</span>
          <span><Check /> ★★★★★ {t('Loved by clients', 'Querido por clientes')}</span>
        </div></div>
      </main>
      <Footer />
    </>
  );
}
