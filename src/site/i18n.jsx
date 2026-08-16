import { createContext, useContext, useState, useEffect, useCallback } from 'react';

/* ─────────────────────────────────────────────────────────────
   Lightweight bilingual (EN/ES) layer.
   Usage in a component:  const { t } = useLang();  t('Book a call', 'Reserva una llamada')
   Missing Spanish falls back to English, so partial translation never breaks a page.
───────────────────────────────────────────────────────────── */

const LangCtx = createContext({ lang: 'en', setLang: () => {}, t: (en) => en });

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem('nv-lang') === 'es' ? 'es' : 'en'; } catch { return 'en'; }
  });
  useEffect(() => {
    try { localStorage.setItem('nv-lang', lang); } catch { /* ignore */ }
    if (typeof document !== 'undefined') document.documentElement.lang = lang;
  }, [lang]);
  const setLang = useCallback((l) => setLangState(l === 'es' ? 'es' : 'en'), []);
  const t = useCallback((en, es) => (lang === 'es' && es != null ? es : en), [lang]);
  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}

export const useLang = () => useContext(LangCtx);

export const LANG_CSS = `
.nv-lang{display:inline-flex;border:1px solid var(--line);border-radius:100px;overflow:hidden;background:#fff;flex-shrink:0}
.nv-lang button{font-family:var(--font);font-weight:800;font-size:.72rem;letter-spacing:.04em;padding:6px 11px;border:none;background:transparent;color:var(--muted);cursor:pointer;transition:background .15s,color .15s;line-height:1}
@media(max-width:939px){.nv-lang button{padding:10px 13px}}
.nv-lang button.on{background:var(--brand);color:#fff}
.nv-lang button:not(.on):hover{color:var(--ink)}
`;

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="nv-lang" role="group" aria-label="Language / Idioma">
      <button type="button" className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>EN</button>
      <button type="button" className={lang === 'es' ? 'on' : ''} onClick={() => setLang('es')} aria-pressed={lang === 'es'}>ES</button>
    </div>
  );
}
