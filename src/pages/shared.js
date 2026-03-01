export const BASE_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
:root{
  --bg:#07090F;--surface:#0D1221;--surface2:#111829;
  --border:rgba(79,110,247,0.12);
  --primary:#4F6EF7;--cyan:#00DCFF;--violet:#A78BFA;--green:#34D399;--amber:#F59E0B;--pink:#EC4899;
  --text:#F1F5F9;--muted:#8B99B5;--dim:#404860;
  --font:'Plus Jakarta Sans',system-ui,sans-serif;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased;overflow-x:hidden}
a{text-decoration:none;color:inherit}

/* NAV */
.sp-nav{position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:16px 32px;background:rgba(7,9,15,0.88);backdrop-filter:blur(14px);border-bottom:1px solid var(--border)}
.sp-logo{font-size:1.1rem;font-weight:800;letter-spacing:-.02em;color:var(--text)}
.sp-logo span{color:var(--primary)}
.sp-back{display:inline-flex;align-items:center;gap:6px;font-size:.83rem;color:var(--muted);border:1px solid var(--border);padding:7px 14px;border-radius:8px;transition:all .2s;cursor:pointer}
.sp-back:hover{color:var(--text);border-color:rgba(255,255,255,.15);background:rgba(255,255,255,.03)}

/* HERO */
.sp-hero{padding:76px 32px 56px;max-width:860px;margin:0 auto;text-align:center}
.sp-eyebrow{display:inline-flex;align-items:center;gap:8px;border-radius:100px;padding:6px 16px;font-size:.75rem;font-weight:700;margin-bottom:22px;letter-spacing:.07em;text-transform:uppercase}
.sp-h1{font-size:clamp(2rem,5vw,3rem);font-weight:800;letter-spacing:-.03em;line-height:1.1;margin-bottom:18px}
.sp-h1 em{font-style:normal}
.sp-sub{font-size:1rem;color:var(--muted);line-height:1.7;max-width:580px;margin:0 auto}

/* CONTAINER */
.sp-wrap{max-width:1100px;margin:0 auto;padding:0 40px}

/* SECTION TITLE */
.sp-section-title{font-size:1.3rem;font-weight:700;text-align:center;margin-bottom:36px;letter-spacing:-.01em}

/* CTA FOOTER */
.sp-cta{background:var(--surface);border-top:1px solid var(--border);padding:64px 32px;text-align:center}
.sp-cta h2{font-size:1.75rem;font-weight:800;margin-bottom:12px;letter-spacing:-.02em}
.sp-cta p{color:var(--muted);margin-bottom:28px;font-size:.95rem}
.sp-cta-btn{display:inline-flex;align-items:center;gap:8px;font-weight:700;padding:14px 28px;border-radius:10px;font-size:.95rem;transition:opacity .2s}
.sp-cta-btn:hover{opacity:.85}

@media(max-width:680px){
  .sp-nav{padding:12px 20px}
  .sp-wrap{padding:0 20px}
  .sp-hero{padding:48px 20px 36px}
}
`;
