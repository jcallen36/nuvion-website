/* ─────────────────────────────────────────────────────────────
   Nuvion Solutions — "The Answered Line" design system
   Ink on porcelain paper. Zodiak / General Sans / Fragment Mono.
   Fonts are loaded via <link> in index.html (no @import here).

   Legacy variable names (--bg, --surface, --primary, --cyan…) are
   kept and remapped so page-level CSS degrades gracefully into the
   new palette. New work should use the semantic tokens below.
───────────────────────────────────────────────────────────── */
export const BASE_CSS = `
:root{
  /* New tokens */
  --paper:#F4F2EC;--bone:#EBE8DF;--card:#FBFAF7;
  --ink:#141B19;--ink2:#1D2724;
  --petrol:#0E5F63;--petrol-deep:#0A474B;
  --muted-2:#57605C;--hairline:#DAD6CA;--hairline-dark:rgba(244,242,236,.16);
  --serif:'Zodiak',Georgia,serif;
  --sans:'General Sans',system-ui,sans-serif;
  --mono:'Fragment Mono',ui-monospace,monospace;
  --ease-out:cubic-bezier(0.16,1,0.3,1);
  --shadow-1:0 1px 2px rgba(20,27,25,.07),0 8px 30px rgba(20,27,25,.08);
  --shadow-2:0 2px 4px rgba(20,27,25,.09),0 18px 50px rgba(20,27,25,.13);
  --pad-section:clamp(64px,9vw,128px);

  /* Legacy names remapped (do not delete — service pages use them) */
  --bg:#F4F2EC;--surface:#FBFAF7;--surface2:#EBE8DF;
  --border:#DAD6CA;
  --primary:#0E5F63;--cyan:#0E5F63;--violet:#57605C;--green:#0E5F63;--amber:#8A6B32;--pink:#8A4B42;
  --text:#141B19;--muted:#57605C;--dim:#8B928D;
  --font:'General Sans',system-ui,sans-serif;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--sans);background:var(--paper);color:var(--ink);-webkit-font-smoothing:antialiased;overflow-x:hidden;font-size:16.5px;line-height:1.65}
a{text-decoration:none;color:inherit}
img{display:block;max-width:100%}
::selection{background:var(--petrol);color:var(--paper)}
:where(a,button,input,select,textarea,summary):focus-visible{outline:2px solid var(--petrol);outline-offset:2px;border-radius:2px}
h1,h2,h3{text-wrap:balance}

/* Paper grain */
.grain{position:fixed;inset:0;z-index:2000;pointer-events:none;opacity:.05;mix-blend-mode:multiply;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)'/%3E%3C/svg%3E")}

/* Type kit */
.label{font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted-2)}
.label b,.label strong{color:var(--petrol);font-weight:400}
.rule{border:none;border-top:1px solid var(--hairline)}
.tnum{font-variant-numeric:tabular-nums}

/* Buttons */
.btn-ink,.btn-line{display:inline-flex;align-items:center;gap:10px;font-family:var(--sans);font-weight:600;font-size:.95rem;line-height:1;padding:16px 28px;border-radius:6px;cursor:pointer;transition:background .18s var(--ease-out),color .18s var(--ease-out),transform .18s var(--ease-out),box-shadow .18s var(--ease-out),border-color .18s}
.btn-ink{background:var(--ink);color:var(--paper);border:1px solid var(--ink);box-shadow:var(--shadow-1)}
.btn-ink:hover{background:var(--petrol-deep);border-color:var(--petrol-deep);transform:translateY(-1px);box-shadow:var(--shadow-2)}
.btn-ink:active{transform:translateY(0);box-shadow:var(--shadow-1)}
.btn-line{background:transparent;color:var(--ink);border:1px solid var(--ink)}
.btn-line:hover{background:var(--ink);color:var(--paper);transform:translateY(-1px)}
.btn-on-ink{background:var(--paper);color:var(--ink);border:1px solid var(--paper)}
.btn-on-ink:hover{background:#fff;transform:translateY(-1px);box-shadow:0 10px 34px rgba(0,0,0,.3)}

/* NAV (service pages) */
.sp-nav{position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 32px;height:64px;background:var(--paper);border-bottom:1px solid var(--hairline)}
.sp-logo{display:flex;align-items:center}
.sp-logo-img{width:150px;height:auto;object-fit:contain}
.sp-back{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted-2);border:1px solid var(--hairline);padding:9px 14px;border-radius:6px;transition:all .18s;cursor:pointer}
.sp-back:hover{color:var(--ink);border-color:var(--ink)}

/* Wordmark lockup (typographic — the PNG logo lives on dark bands) */
.wordmark{display:inline-flex;align-items:baseline;gap:9px}
.wordmark .wm-n{font-family:var(--serif);font-weight:700;font-size:1.28rem;letter-spacing:-.01em;color:var(--ink)}
.wordmark .wm-s{font-family:var(--mono);font-size:.6rem;letter-spacing:.3em;text-transform:uppercase;color:var(--petrol);transform:translateY(-1px)}

/* HERO (service pages — editorial, left-aligned) */
.sp-hero{padding:clamp(56px,9vw,110px) 32px 20px;max-width:1140px;margin:0 auto;text-align:left}
.sp-eyebrow{display:inline-flex;align-items:center;gap:10px;font-family:var(--mono);font-size:.72rem;font-weight:400;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);margin-bottom:26px;background:none;border:none;padding:0}
.sp-eyebrow::before{content:'';width:26px;height:1px;background:var(--petrol)}
.sp-h1{font-family:var(--serif);font-size:clamp(2.5rem,5.4vw,4.2rem);font-weight:700;letter-spacing:-.02em;line-height:1.02;margin-bottom:22px;max-width:17ch}
.sp-h1 em{font-style:italic;font-weight:400;color:var(--petrol)}
.sp-sub{font-size:1.06rem;color:var(--muted-2);line-height:1.7;max-width:56ch;margin:0}

/* CONTAINER */
.sp-wrap{max-width:1140px;margin:0 auto;padding:0 32px}

/* SECTION TITLE */
.sp-section-title{font-family:var(--serif);font-size:clamp(1.6rem,2.8vw,2.2rem);font-weight:700;letter-spacing:-.015em;text-align:left;margin-bottom:36px}

/* Cards on paper */
.plate{background:var(--card);border:1px solid var(--hairline);border-radius:10px;box-shadow:var(--shadow-1)}

/* CTA band (ink) */
.sp-cta{background:var(--ink);color:var(--paper);padding:clamp(64px,8vw,110px) 32px;text-align:left}
.sp-cta h2{font-family:var(--serif);font-size:clamp(1.9rem,3.6vw,2.9rem);font-weight:700;margin-bottom:14px;letter-spacing:-.015em;color:var(--paper)}
.sp-cta p{color:rgba(244,242,236,.72);margin-bottom:32px;font-size:1rem;max-width:52ch}
.sp-cta-btn{display:inline-flex;align-items:center;gap:10px;font-weight:600;padding:16px 30px;border-radius:6px;font-size:.98rem;background:var(--paper);color:var(--ink);transition:transform .18s var(--ease-out),box-shadow .18s var(--ease-out)}
.sp-cta-btn:hover{transform:translateY(-1px);box-shadow:0 10px 34px rgba(0,0,0,.3)}

/* Petrol emphasis (replaces the old shimmer-gradient text) */
.grad{background:none;-webkit-text-fill-color:currentColor;color:var(--petrol);font-style:italic;animation:none}

@media(max-width:680px){
  .sp-nav{padding:0 20px;height:60px}
  .sp-wrap{padding:0 20px}
  .sp-hero{padding:44px 20px 16px}
}
@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
  html{scroll-behavior:auto}
}
`;
