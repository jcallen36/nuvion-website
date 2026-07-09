/* ─────────────────────────────────────────────────────────────
   Nuvion Solutions — "The Answered Line", night edition
   Deep green-black gallery dark; porcelain type; seafoam-petrol
   accent; PAPER BANDS for CTA/footer (print-on-black signature).
   Zodiak / General Sans / Fragment Mono (loaded in index.html).

   Semantic token names are kept from the light system so page CSS
   flips with the values:
   --paper = page background (now near-black), --ink = primary text
   (now porcelain), --card/--bone = raised/recessed dark planes.
   Paper bands use the explicit --band/--band-ink pair.
───────────────────────────────────────────────────────────── */
export const BASE_CSS = `
:root{
  /* Core night tokens */
  --paper:#0C1110;--bone:#0F1514;--card:#131A18;
  --ink:#F1EEE6;--ink2:#E4E0D4;
  --petrol:#56BCB1;--petrol-deep:#7ACCC2;
  --petrol-fill:#0E5F63;
  --muted-2:#A9B2AC;--hairline:rgba(241,238,230,.13);--hairline-dark:rgba(12,17,16,.18);
  --band:#EFECE2;--band-ink:#141B19;--band-muted:#57605C;--band-hairline:#D8D4C8;
  --serif:'Zodiak',Georgia,serif;
  --sans:'General Sans',system-ui,sans-serif;
  --mono:'Fragment Mono',ui-monospace,monospace;
  --ease-out:cubic-bezier(0.16,1,0.3,1);
  --shadow-1:0 1px 2px rgba(0,0,0,.4),0 10px 34px rgba(0,0,0,.45);
  --shadow-2:0 2px 4px rgba(0,0,0,.5),0 22px 60px rgba(0,0,0,.55);
  --edge:inset 0 1px 0 rgba(241,238,230,.07);
  --pad-section:clamp(64px,9vw,128px);

  /* Legacy names remapped (service pages consume these) */
  --bg:#0C1110;--surface:#131A18;--surface2:#0F1514;
  --border:rgba(241,238,230,.13);
  --primary:#56BCB1;--cyan:#56BCB1;--violet:#A9B2AC;--green:#56BCB1;--amber:#C7A96B;--pink:#C08A80;
  --text:#F1EEE6;--muted:#A9B2AC;--dim:#6E7873;
  --font:'General Sans',system-ui,sans-serif;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--sans);background:var(--paper);color:var(--ink);-webkit-font-smoothing:antialiased;overflow-x:hidden;font-size:16.5px;line-height:1.65}
a{text-decoration:none;color:inherit}
img{display:block;max-width:100%}
::selection{background:var(--petrol);color:#0C1110}
:where(a,button,input,select,textarea,summary):focus-visible{outline:2px solid var(--petrol);outline-offset:2px;border-radius:2px}
h1,h2,h3{text-wrap:balance}
::-webkit-scrollbar{width:12px}
::-webkit-scrollbar-track{background:var(--paper)}
::-webkit-scrollbar-thumb{background:#26312E;border-radius:6px;border:3px solid var(--paper)}
::-webkit-scrollbar-thumb:hover{background:#39453F}

/* Night atmosphere: one warm-teal light source, top-left, very low */
.atmo{position:fixed;inset:0;z-index:0;pointer-events:none;background:
  radial-gradient(1100px 700px at 18% -10%, rgba(86,188,177,.09), transparent 62%),
  radial-gradient(900px 600px at 88% 108%, rgba(86,188,177,.05), transparent 60%)}

/* Paper grain — desktop only, cheap compositing */
.grain{position:fixed;inset:0;z-index:2000;pointer-events:none;opacity:.05;transform:translateZ(0);background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='240' height='240' filter='url(%23n)'/%3E%3C/svg%3E")}
@media(max-width:900px){.grain{display:none}}

/* Type kit */
.label{font-family:var(--mono);font-size:.72rem;letter-spacing:.16em;text-transform:uppercase;color:var(--muted-2)}
.label b,.label strong{color:var(--petrol);font-weight:400}
.rule{border:none;border-top:1px solid var(--hairline)}
.tnum{font-variant-numeric:tabular-nums}

/* Buttons — paper button is the primary (print-on-black signature) */
.btn-ink,.btn-line{display:inline-flex;align-items:center;gap:10px;font-family:var(--sans);font-weight:600;font-size:.95rem;line-height:1;padding:16px 28px;border-radius:6px;cursor:pointer;transition:background .18s var(--ease-out),color .18s var(--ease-out),transform .18s var(--ease-out),box-shadow .18s var(--ease-out),border-color .18s}
.btn-ink{background:var(--ink);color:#0C1110;border:1px solid var(--ink);box-shadow:var(--shadow-1)}
.btn-ink:hover{background:#fff;border-color:#fff;transform:translateY(-1px);box-shadow:var(--shadow-2)}
.btn-ink:active{transform:translateY(0);box-shadow:var(--shadow-1)}
.btn-line{background:transparent;color:var(--ink);border:1px solid rgba(241,238,230,.28)}
.btn-line:hover{border-color:var(--ink);background:rgba(241,238,230,.06);transform:translateY(-1px)}
.btn-on-ink{background:var(--band-ink);color:var(--band);border:1px solid var(--band-ink)}
.btn-on-ink:hover{background:#0A474B;border-color:#0A474B;transform:translateY(-1px);box-shadow:0 10px 34px rgba(0,0,0,.25)}

/* NAV (service pages) */
.sp-nav{position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 32px;height:64px;background:var(--paper);border-bottom:1px solid var(--hairline)}
.sp-logo{display:flex;align-items:center}
.sp-logo-img{width:150px;height:auto;object-fit:contain}
.sp-back{display:inline-flex;align-items:center;gap:8px;font-family:var(--mono);font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted-2);border:1px solid var(--hairline);padding:9px 14px;border-radius:6px;transition:all .18s;cursor:pointer}
.sp-back:hover{color:var(--ink);border-color:rgba(241,238,230,.4)}

/* Wordmark lockup */
.wordmark{display:inline-flex;align-items:baseline;gap:9px}
.wordmark .wm-n{font-family:var(--serif);font-weight:700;font-size:1.28rem;letter-spacing:-.01em;color:var(--ink)}
.wordmark .wm-s{font-family:var(--mono);font-size:.6rem;letter-spacing:.3em;text-transform:uppercase;color:var(--petrol);transform:translateY(-1px)}

/* HERO (service pages) */
.sp-hero{padding:clamp(56px,9vw,110px) 32px 20px;max-width:1140px;margin:0 auto;text-align:left;position:relative;z-index:1}
.sp-eyebrow{display:inline-flex;align-items:center;gap:10px;font-family:var(--mono);font-size:.72rem;font-weight:400;letter-spacing:.16em;text-transform:uppercase;color:var(--petrol);margin-bottom:26px;background:none;border:none;padding:0}
.sp-eyebrow::before{content:'';width:26px;height:1px;background:var(--petrol)}
.sp-h1{font-family:var(--serif);font-size:clamp(2.5rem,5.4vw,4.2rem);font-weight:700;letter-spacing:-.02em;line-height:1.02;margin-bottom:22px;max-width:17ch}
.sp-h1 em{font-style:italic;font-weight:400;color:var(--petrol)}
.sp-sub{font-size:1.06rem;color:var(--muted-2);line-height:1.7;max-width:56ch;margin:0}

/* CONTAINER */
.sp-wrap{max-width:1140px;margin:0 auto;padding:0 32px;position:relative;z-index:1}

/* SECTION TITLE */
.sp-section-title{font-family:var(--serif);font-size:clamp(1.6rem,2.8vw,2.2rem);font-weight:700;letter-spacing:-.015em;text-align:left;margin-bottom:36px}

/* Cards on night */
.plate{background:var(--card);border:1px solid var(--hairline);border-radius:10px;box-shadow:var(--shadow-1),var(--edge)}

/* CTA band — PAPER on night (the signature inversion) */
.sp-cta{background:var(--band);color:var(--band-ink);padding:clamp(64px,8vw,110px) 32px;text-align:left;position:relative;z-index:1}
.sp-cta h2{font-family:var(--serif);font-size:clamp(1.9rem,3.6vw,2.9rem);font-weight:700;margin-bottom:14px;letter-spacing:-.015em;color:var(--band-ink)}
.sp-cta p{color:var(--band-muted);margin-bottom:32px;font-size:1rem;max-width:52ch}
.sp-cta .label{color:#8A9590}
.sp-cta-in{max-width:1076px;margin:0 auto}
.sp-cta-btn{display:inline-flex;align-items:center;gap:10px;font-weight:600;padding:16px 30px;border-radius:6px;font-size:.98rem;background:var(--band-ink);color:var(--band);transition:background .18s var(--ease-out),transform .18s var(--ease-out),box-shadow .18s var(--ease-out)}
.sp-cta-btn:hover{background:#0A474B;transform:translateY(-1px);box-shadow:0 10px 34px rgba(0,0,0,.22)}

/* Petrol emphasis */
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
