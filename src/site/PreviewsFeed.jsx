import { useState, useEffect } from 'react';
import { useLang } from './i18n.jsx';
import { ExtLink } from './shared.jsx';

/* Live, self-updating portfolio feed from the trades-showcase.
   Pulls https://websites.nuvion-solutions.com/previews.json and shows only
   `publishable` rows — the feed defines that as (fictional || consented) && !variantOf,
   so: no dark-mode/variant dupes, no un-consented real businesses. Fictional rows
   are shown but labeled "Demo" (never presented as a real client), per the feed's note.
   New sites appear automatically the next time the page loads — no code change. */

const FEED_URL = 'https://websites.nuvion-solutions.com/previews.json';

const PF_CSS = `
.pf-grid{display:grid;grid-template-columns:1fr;gap:24px}
@media(min-width:640px){.pf-grid{grid-template-columns:1fr 1fr}}
@media(min-width:1000px){.pf-grid{grid-template-columns:repeat(3,1fr)}}
.pf-card{display:flex;flex-direction:column;border:1px solid var(--line);border-radius:16px;overflow:hidden;background:#fff;box-shadow:var(--shadow);transition:transform .18s,box-shadow .18s}
.pf-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.pf-shot{aspect-ratio:1200/630;background:var(--bg-soft);overflow:hidden}
.pf-shot img{width:100%;height:100%;object-fit:cover;display:block}
.pf-body{padding:18px 20px;display:flex;flex-direction:column;flex:1}
.pf-meta{display:flex;align-items:center;gap:9px;margin-bottom:9px;flex-wrap:wrap}
.pf-chip{font-size:.66rem;font-weight:800;letter-spacing:.05em;text-transform:uppercase;padding:3px 9px;border-radius:100px}
.pf-chip.client{color:var(--chip-client,#0E9E6E);background:#E2F7EF}
.pf-chip.demo{color:var(--brand-strong);background:var(--brand-soft)}
.pf-chip.spec{color:#B57E00;background:#FBF3DD}
.pf-loc{color:var(--muted);font-size:.78rem;font-weight:600}
.pf-body h4{color:var(--ink);font-size:1.06rem;margin:0 0 3px;letter-spacing:-.01em}
.pf-body .pf-trade{color:var(--body);font-size:.88rem;line-height:1.4;margin:0}
.pf-link{margin-top:auto;padding-top:14px;display:inline-flex;align-items:center;gap:7px;color:var(--brand-strong);font-weight:700;font-size:.88rem}
`;

export default function PreviewsFeed({ heading, sub, limit }) {
  const { t } = useLang();
  const [items, setItems] = useState(null); // null = loading; [] = none/failed

  useEffect(() => {
    let alive = true;
    fetch(FEED_URL, { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('bad'))))
      .then((data) => {
        // Show every real build + demo, minus variant/dark-mode dupes. Labeled honestly
        // below (Demo / Client / Spec build) — never a false "client" claim.
        let rows = (data && Array.isArray(data.previews) ? data.previews : [])
          .filter((p) => !p.variantOf && p.image);
        if (limit) rows = rows.slice(0, limit);
        if (alive) setItems(rows);
      })
      .catch(() => { if (alive) setItems([]); });
    return () => { alive = false; };
  }, [limit]);

  // While loading, or if the feed is unreachable/empty, render nothing (never a broken/empty section).
  if (!items || items.length === 0) return null;

  return (
    <section className="nv-sec soft"><div className="nv-wrap">
      <style dangerouslySetInnerHTML={{ __html: PF_CSS }} />
      <div className="nv-center rv">
        <div className="nv-kicker">{t('Fresh from the workshop', 'Recién salido del taller')}</div>
        <h2 className="nv-h2">{heading || t('Websites we’ve built for the trades', 'Sitios que hemos hecho para los oficios')}</h2>
        <p className="nv-lead" style={{ margin: '0 auto' }}>{sub || t('A live look at our trade builds — this updates itself every time we ship a new one.', 'Un vistazo en vivo a nuestros sitios de oficios — se actualiza solo cada vez que lanzamos uno nuevo.')}</p>
      </div>
      <div className="pf-grid" style={{ marginTop: 34 }}>
        {items.map((p) => (
          <a className="pf-card rv" href={p.url} target="_blank" rel="noreferrer" key={p.slug}>
            <div className="pf-shot"><img src={p.image} alt={`${p.name} website`} loading="lazy" width={p.imageWidth || 1200} height={p.imageHeight || 630} /></div>
            <div className="pf-body">
              <div className="pf-meta">
                <span className={`pf-chip ${p.fictional ? 'demo' : p.consented ? 'client' : 'spec'}`}>{p.fictional ? t('Demo', 'Demo') : p.consented ? t('Client', 'Cliente') : t('Spec build', 'Muestra')}</span>
                {p.location && <span className="pf-loc">{p.location}</span>}
              </div>
              <h4>{p.name}</h4>
              {p.trade && <p className="pf-trade">{p.trade}</p>}
              <span className="pf-link">{t('View the site', 'Ver el sitio')} <ExtLink /></span>
            </div>
          </a>
        ))}
      </div>
    </div></section>
  );
}
