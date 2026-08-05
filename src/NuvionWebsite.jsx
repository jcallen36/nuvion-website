import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import jaedenPhoto from './assets/team/jaeden.webp';
import davidPhoto from './assets/team/david.webp';
import workDumolin from './assets/work/dumolin.webp';
import workCalegal from './assets/work/calegal.webp';
import workArpkd from './assets/work/arpkd.webp';
import workBayarea from './assets/work/bayarea.webp';
import heroPhoneShot from './assets/work/calegal-m.webp';
import sonomaHills from './assets/local/sonoma-hills.webp';
import sonomaVineyard from './assets/local/sonoma-vineyard.webp';
import sonomaGreen from './assets/local/sonoma-green.webp';
import { LogoWall, WALL_CSS, MobileCTA, FloatingContact, MCTA_CSS } from './site/shared.jsx';
import { useLang, LangToggle, LANG_CSS } from './site/i18n.jsx';
import { LOCAL_TOWNS } from './site/LocalPage.jsx';

/* ─────────────────────────────────────────────────────────────
   Nuvion Solutions — Homepage (light, web-design-first)
   Design system inline; sections composed below.
───────────────────────────────────────────────────────────── */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

:root{
  --bg:#FFFFFF; --bg-soft:#F5F8FC; --surface:#FFFFFF;
  --ink:#0A1222; --body:#475467; --muted:#667085;
  --brand:#2563EB; --brand-strong:#1D4ED8; --brand-soft:#EAF1FF; --cyan:#22D3EE;
  --line:#E5EAF1;
  --shadow-sm:0 1px 2px rgba(10,18,34,.04);
  --shadow:0 1px 3px rgba(10,18,34,.05),0 14px 30px -12px rgba(10,18,34,.12);
  --shadow-lg:0 30px 70px -24px rgba(13,35,80,.32);
  --radius:18px;
  --font:'Plus Jakarta Sans',system-ui,-apple-system,sans-serif;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;scroll-padding-top:84px}
body{font-family:var(--font);background:var(--bg);color:var(--body);-webkit-font-smoothing:antialiased;line-height:1.6}
a{text-decoration:none;color:inherit}
img{max-width:100%;display:block}
.hide-sm{display:none}
@media(min-width:720px){.hide-sm{display:inline}}
.nv-wrap{width:100%;max-width:1180px;margin:0 auto;padding:0 24px}
.nv-eyebrow{display:inline-flex;align-items:center;gap:8px;background:var(--brand-soft);color:var(--brand-strong);font-weight:700;font-size:.76rem;letter-spacing:.05em;text-transform:uppercase;padding:8px 15px;border-radius:100px}
.nv-eyebrow .dot{width:7px;height:7px;border-radius:50%;background:var(--brand);box-shadow:0 0 0 4px rgba(37,110,247,.16)}
.nv-kicker{color:var(--brand);font-weight:700;font-size:.8rem;letter-spacing:.09em;text-transform:uppercase;margin-bottom:14px}
.nv-h2{font-size:clamp(1.9rem,3.4vw,2.75rem);color:var(--ink);font-weight:800;letter-spacing:-.03em;line-height:1.1}
.nv-lead{color:var(--body);font-size:clamp(1rem,1.4vw,1.14rem);margin-top:16px;line-height:1.65}
.nv-grad{background:linear-gradient(100deg,var(--brand) 10%,#4F86FF 60%,var(--cyan) 130%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.nv-center{text-align:center;max-width:680px;margin:0 auto 52px}

/* buttons */
.nv-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;font-family:var(--font);font-weight:700;font-size:.98rem;cursor:pointer;border:none;border-radius:12px;padding:14px 26px;transition:transform .14s ease,box-shadow .14s ease,background .14s ease,color .14s ease;white-space:nowrap}
.nv-btn-primary{background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;box-shadow:0 10px 24px -8px rgba(37,110,247,.6)}
.nv-btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 32px -8px rgba(37,110,247,.7)}
.nv-btn-ghost{background:#fff;color:var(--ink);border:1px solid var(--line);box-shadow:var(--shadow-sm)}
.nv-btn-ghost:hover{border-color:#c7d3e6;transform:translateY(-2px)}
.nv-btn-lg{padding:16px 32px;font-size:1.05rem}
.nv-btn-white{background:#fff;color:var(--brand-strong)}
.nv-btn-white:hover{transform:translateY(-2px);box-shadow:0 16px 30px -10px rgba(0,0,0,.35)}

/* reveal */
.rv{transform:translateY(18px);transition:transform .7s cubic-bezier(.2,.7,.2,1)}
.rv.in{transform:none}
.rv.d1{transition-delay:.07s}.rv.d2{transition-delay:.14s}.rv.d3{transition-delay:.21s}.rv.d4{transition-delay:.28s}

/* NAV */
.nv-nav{position:sticky;top:0;z-index:100;transition:background .3s,box-shadow .3s,border-color .3s;border-bottom:1px solid transparent}
.nv-nav.scrolled{background:rgba(255,255,255,.82);backdrop-filter:saturate(180%) blur(14px);-webkit-backdrop-filter:saturate(180%) blur(14px);border-bottom:1px solid var(--line);box-shadow:0 4px 24px -18px rgba(10,18,34,.5)}
.nv-nav-in{display:flex;align-items:center;justify-content:space-between;height:74px}
.nv-logo{display:flex;align-items:center;gap:10px}
.nv-logo .mark{width:38px;height:38px;border-radius:11px;background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:1.1rem;box-shadow:0 6px 16px -6px rgba(37,110,247,.6);flex-shrink:0}
.nv-logo .wm{display:flex;flex-direction:column;line-height:1.05}
.nv-logo .wm b{color:var(--ink);font-weight:800;font-size:1.14rem;letter-spacing:-.01em}
.nv-logo .wm small{color:var(--muted);font-size:.58rem;font-weight:700;letter-spacing:.22em}
.nv-links{display:none;align-items:center;gap:6px}
.nv-links a{padding:9px 14px;border-radius:9px;font-size:.93rem;font-weight:500;color:var(--body);transition:color .2s,background .2s}
.nv-links a:hover{color:var(--brand-strong);background:var(--brand-soft)}
.nv-navcta{display:none}
.nv-burger{display:inline-flex;flex-direction:column;gap:5px;background:transparent;border:1px solid var(--line);border-radius:9px;padding:10px;cursor:pointer}
.nv-burger span{width:20px;height:2px;background:var(--ink);border-radius:2px;transition:.3s}
.nv-burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.nv-burger.open span:nth-child(2){opacity:0}
.nv-burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
.nv-mobile{display:none;flex-direction:column;gap:4px;padding:12px 24px 22px;border-bottom:1px solid var(--line);background:#fff}
.nv-mobile.show{display:flex}
.nv-mobile a{padding:12px 6px;font-weight:600;color:var(--ink);border-bottom:1px solid var(--line)}
.nv-mobile .nv-btn{margin-top:12px}
@media(min-width:940px){.nv-links,.nv-navcta{display:flex}.nv-burger{display:none}.nv-mobile{display:none!important}}

/* HERO */
.nv-hero{position:relative;overflow:hidden;padding:78px 0 70px;
  background:
   linear-gradient(180deg, rgba(246,249,253,.95) 0%, rgba(246,249,253,.82) 34%, rgba(246,249,253,.45) 72%, rgba(246,249,253,.72) 100%),
   url(${sonomaHills});
  background-size:cover;background-position:center 62%;background-repeat:no-repeat}
.nv-hero::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(37,110,247,.08) 1px,transparent 1px);background-size:26px 26px;-webkit-mask-image:linear-gradient(180deg,#000,transparent 55%);mask-image:linear-gradient(180deg,#000,transparent 55%);opacity:.5;pointer-events:none}
.nv-hero-in{position:relative;text-align:center}
.nv-h1{font-size:clamp(2.4rem,5.4vw,4.05rem);line-height:1.04;letter-spacing:-.04em;color:var(--ink);font-weight:800;margin:22px auto 20px;max-width:16ch}
.nv-hero-sub{font-size:clamp(1.06rem,1.7vw,1.3rem);color:var(--body);max-width:620px;margin:0 auto;line-height:1.6}
.nv-hero-cta{display:flex;gap:14px;justify-content:center;margin:32px 0 16px;flex-wrap:wrap}
.nv-ticks{display:flex;gap:20px;justify-content:center;flex-wrap:wrap;color:var(--muted);font-size:.9rem;font-weight:500}
.nv-ticks span{display:inline-flex;align-items:center;gap:7px}
.nv-ticks svg{color:var(--brand)}
.nv-rate{margin-top:16px;color:var(--muted);font-size:.92rem;font-weight:600;display:inline-flex;gap:8px;align-items:center;justify-content:center;width:100%}
.nv-stars{color:#F5A623;letter-spacing:1px}

/* hero visual */
.nv-stage{position:relative;max-width:940px;margin:52px auto 0}
.nv-browser{border-radius:16px;overflow:hidden;border:1px solid var(--line);background:#fff;box-shadow:var(--shadow-lg)}
.nv-browser-bar{height:42px;display:flex;align-items:center;gap:7px;padding:0 16px;border-bottom:1px solid var(--line);background:#FBFCFE}
.nv-browser-bar i{width:11px;height:11px;border-radius:50%;background:#E1E6EF}
.nv-browser-bar .url{margin-left:14px;height:22px;flex:1;max-width:340px;border-radius:6px;background:#EEF2F8;display:flex;align-items:center;padding:0 12px;font-size:.72rem;color:var(--muted);font-weight:600}
.nv-browser-shot{height:430px;overflow:hidden}
.nv-browser-shot img{width:100%;height:auto;object-fit:cover;object-position:top}
.nv-float{position:absolute;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:var(--shadow-lg);padding:14px 16px;display:flex;gap:11px;align-items:center}
.nv-float-1{top:56px;right:-8px;animation:nv-floatA 6s ease-in-out infinite}
.nv-float-2{bottom:40px;left:-8px;animation:nv-floatB 7s ease-in-out infinite}
.nv-float .av{width:38px;height:38px;border-radius:50%;background:var(--brand-soft);color:var(--brand-strong);display:flex;align-items:center;justify-content:center;font-weight:800;flex-shrink:0}
.nv-float .tx b{color:var(--ink);font-size:.86rem;display:block}
.nv-float .tx span{color:var(--muted);font-size:.78rem}
.nv-pulse{width:9px;height:9px;border-radius:50%;background:#22C55E;box-shadow:0 0 0 0 rgba(34,197,94,.5);animation:nv-pulse 2s infinite}
@keyframes nv-floatA{0%,100%{transform:translateY(0)}50%{transform:translateY(-13px)}}
@keyframes nv-floatB{0%,100%{transform:translateY(0)}50%{transform:translateY(11px)}}
@keyframes nv-pulse{70%{box-shadow:0 0 0 9px rgba(34,197,94,0)}100%{box-shadow:0 0 0 0 rgba(34,197,94,0)}}
@media(max-width:720px){.nv-float{display:none}.nv-browser-shot{height:300px}}

/* TRUST BAR */
.nv-trust{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:var(--bg-soft)}
.nv-trust-in{display:flex;gap:18px;justify-content:space-between;flex-wrap:wrap;padding:20px 0;font-weight:600;color:var(--ink);font-size:.93rem}
.nv-trust-in span{display:inline-flex;align-items:center;gap:9px}
.nv-trust-in .ic{color:var(--brand);display:inline-flex}

/* LOGO STRIP */
.nv-logos{padding:40px 0 6px}
.nv-logos .cap{text-align:center;color:var(--muted);font-size:.78rem;font-weight:700;letter-spacing:.09em;text-transform:uppercase;margin-bottom:22px}
.nv-logo-row{display:flex;gap:16px 34px;justify-content:center;align-items:center;flex-wrap:wrap}
.nv-logo-chip{height:38px;padding:0 20px;border-radius:9px;background:#fff;border:1px solid var(--line);box-shadow:var(--shadow-sm);display:flex;align-items:center;justify-content:center;color:var(--ink);font-weight:700;font-size:.9rem}

/* SECTION shell */
.nv-sec{padding:82px 0}
.nv-sec.soft{background:var(--bg-soft);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}

/* SERVICES */
.nv-svc{display:grid;grid-template-columns:1fr;gap:20px}
@media(min-width:860px){.nv-svc{grid-template-columns:1.3fr 1fr 1fr}}
.nv-card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:30px 28px;box-shadow:var(--shadow);transition:transform .16s,box-shadow .16s,border-color .16s;position:relative}
.nv-card:hover{transform:translateY(-4px);box-shadow:0 2px 4px rgba(10,18,34,.05),0 26px 50px -18px rgba(13,35,80,.28);border-color:#d4deef}
.nv-card .ico{width:54px;height:54px;border-radius:14px;background:var(--brand-soft);color:var(--brand-strong);display:flex;align-items:center;justify-content:center;margin-bottom:18px}
.nv-card h3{color:var(--ink);font-size:1.34rem;font-weight:700;letter-spacing:-.01em;margin-bottom:10px}
.nv-card p{font-size:.98rem;color:var(--body)}
.nv-card .go{margin-top:18px;display:inline-flex;align-items:center;gap:7px;color:var(--brand-strong);font-weight:700;font-size:.92rem}
.nv-card.feat{background:linear-gradient(160deg,#F4F8FF, #fff 60%);border-color:#cddcf7}
.nv-card.feat .badge{position:absolute;top:22px;right:24px;font-size:.68rem;font-weight:800;letter-spacing:.08em;color:var(--brand-strong);background:#fff;border:1px solid #cddcf7;padding:5px 10px;border-radius:100px;text-transform:uppercase}
.nv-card ul{list-style:none;margin-top:16px;display:flex;flex-direction:column;gap:9px}
.nv-card ul li{display:flex;align-items:center;gap:9px;font-size:.94rem;color:var(--body)}
.nv-card ul li svg{color:var(--brand);flex-shrink:0}
.nv-ai{margin-top:20px;background:var(--bg-soft);border:1px dashed #cdd7e6;border-radius:var(--radius);padding:22px 28px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.nv-ai .qt{color:var(--ink);font-weight:700}.nv-ai .qs{color:var(--muted);font-size:.92rem}
.nv-ai .ai-link{color:var(--brand-strong);font-weight:700;font-size:.92rem;white-space:nowrap;display:inline-flex;gap:6px;align-items:center}
.nv-grow-links{display:flex;gap:26px;align-items:center;flex-wrap:wrap}
.nv-grow-links .ai-link svg{width:17px;height:17px}

/* HOW IT WORKS */
.nv-steps{display:grid;grid-template-columns:1fr;gap:20px}
@media(min-width:820px){.nv-steps{grid-template-columns:repeat(3,1fr)}}
.nv-step{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:30px 26px;box-shadow:var(--shadow-sm)}
.nv-step .n{width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;margin-bottom:16px}
.nv-step h4{color:var(--ink);font-size:1.12rem;margin-bottom:8px}
.nv-step p{font-size:.94rem}

/* WHY US */
.nv-why{display:grid;grid-template-columns:1fr;gap:18px}
@media(min-width:720px){.nv-why{grid-template-columns:1fr 1fr}}
@media(min-width:1040px){.nv-why{grid-template-columns:repeat(4,1fr)}}
.nv-why-item{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:26px 24px;box-shadow:var(--shadow-sm);transition:transform .16s,box-shadow .16s}
.nv-why-item:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
.nv-why-item .ic{width:46px;height:46px;border-radius:12px;background:var(--brand-soft);color:var(--brand-strong);display:flex;align-items:center;justify-content:center;margin-bottom:15px}
.nv-why-item h4{color:var(--ink);font-size:1.08rem;margin-bottom:8px}
.nv-why-item p{font-size:.93rem}

/* WORK */
.nv-work{display:grid;grid-template-columns:1fr;gap:22px}
@media(min-width:720px){.nv-work{grid-template-columns:repeat(2,1fr)}}
@media(min-width:1000px){.nv-work{grid-template-columns:repeat(4,1fr)}}
.nv-work-card{border-radius:var(--radius);overflow:hidden;border:1px solid var(--line);background:#fff;box-shadow:var(--shadow);transition:transform .18s,box-shadow .18s}
.nv-work-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
.nv-work-thumb{overflow:hidden;border-bottom:1px solid var(--line);background:var(--bg-soft)}
.nv-work-bar{height:28px;background:#F1F4F9;border-bottom:1px solid var(--line);display:flex;align-items:center;gap:5px;padding:0 11px}
.nv-work-bar i{width:7px;height:7px;border-radius:50%;background:#CBD4E1}
.nv-work-shot{aspect-ratio:16/9;overflow:hidden}
.nv-work-shot img{width:100%;height:100%;object-fit:cover;object-position:center bottom;transition:object-position 3.5s ease}
.nv-work-card:hover .nv-work-shot img{object-position:center bottom}
.nv-work-meta{padding:16px 18px}
.nv-work-meta h4{color:var(--ink);font-size:1.04rem;margin-bottom:9px}
.nv-chip{display:inline-block;background:var(--brand-soft);color:var(--brand-strong);font-weight:700;font-size:.74rem;padding:5px 11px;border-radius:100px}

/* TESTIMONIAL */
.nv-quote{max-width:780px;margin:0 auto;text-align:center}
.nv-quote .mk{font-size:3.6rem;line-height:.5;color:var(--brand);font-weight:800}
.nv-quote p{font-size:clamp(1.25rem,2.3vw,1.7rem);color:var(--ink);font-weight:600;line-height:1.4;letter-spacing:-.015em;margin:18px 0 22px}
.nv-quote .who{display:inline-flex;align-items:center;gap:12px}
.nv-quote .who .av{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800}
.nv-quote .who .nm{text-align:left}
.nv-quote .who .nm b{color:var(--ink)}.nv-quote .who .nm span{display:block;color:var(--muted);font-size:.85rem}

/* TEAM */
.nv-team{display:grid;grid-template-columns:1fr;gap:22px;max-width:840px;margin:0 auto}
@media(min-width:680px){.nv-team{grid-template-columns:1fr 1fr}}
.nv-mem{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:26px;display:flex;gap:18px;align-items:center;box-shadow:var(--shadow)}
.nv-mem img{width:76px;height:76px;border-radius:50%;object-fit:cover;object-position:center top;flex-shrink:0;border:2px solid var(--brand-soft)}
.nv-mem .role{color:var(--brand-strong);font-weight:700;font-size:.83rem;margin-bottom:3px}
.nv-mem h4{color:var(--ink);font-size:1.12rem;margin-bottom:6px}
.nv-mem p{font-size:.9rem}

/* CTA band */
.nv-band{position:relative;overflow:hidden;border-radius:26px;padding:62px 40px;text-align:center;color:#fff;
  background:radial-gradient(120% 140% at 50% -20%, #3B76FF, #0B1222 78%)}
.nv-band::after{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.10) 1px,transparent 1px);background-size:24px 24px;opacity:.5}
.nv-band > *{position:relative}
.nv-band h2{color:#fff;font-size:clamp(1.9rem,3.6vw,2.7rem);letter-spacing:-.03em;margin-bottom:12px}
.nv-band p{color:rgba(255,255,255,.8);font-size:1.1rem;margin-bottom:28px}
.nv-band .sub{margin-top:18px;color:rgba(255,255,255,.72);font-size:.92rem;display:inline-flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap}
.nv-band a.tel{color:#fff;font-weight:700}

/* FOOTER */
.nv-foot{background:#fff;border-top:1px solid var(--line);padding:58px 0 32px}
.nv-foot-grid{display:grid;grid-template-columns:1fr;gap:38px}
@media(min-width:820px){.nv-foot-grid{grid-template-columns:2fr 1fr 1fr}}
.nv-foot .tag{color:var(--muted);font-size:.9rem;max-width:290px;margin:14px 0 16px;line-height:1.65}
.nv-foot .con a{display:block;color:var(--body);font-size:.9rem;margin-bottom:7px;font-weight:600}
.nv-foot h5{color:var(--ink);font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;margin-bottom:15px}
.nv-foot .links a{display:block;color:var(--body);font-size:.9rem;margin-bottom:10px}
.nv-foot .links a:hover{color:var(--brand-strong)}
.nv-foot-bot{border-top:1px solid var(--line);margin-top:38px;padding-top:22px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;color:var(--muted);font-size:.82rem}
.nv-foot-bot .leg{display:flex;gap:20px}

/* hero glow + phone mockup */
.nv-stage .glow{position:absolute;inset:-10% -6%;background:radial-gradient(55% 55% at 50% 35%, rgba(37,110,247,.30), transparent 70%);filter:blur(38px);z-index:0;pointer-events:none}
.nv-browser{position:relative;z-index:2}
.nv-phone{position:absolute;bottom:-26px;right:-6px;width:162px;border:7px solid #0A1222;border-radius:28px;background:#0A1222;box-shadow:var(--shadow-lg);overflow:hidden;z-index:4;animation:nv-floatB 7.5s ease-in-out infinite}
.nv-phone .scr{height:330px;overflow:hidden;border-radius:20px;background:#fff}
.nv-phone .scr img{width:100%;height:auto;object-fit:cover;object-position:top}
@media(max-width:820px){.nv-phone{display:none}}

/* stats band */
.nv-stats{background:#fff;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.nv-stats-in{display:grid;grid-template-columns:repeat(2,1fr);gap:26px 12px;padding:38px 0}
@media(min-width:760px){.nv-stats-in{grid-template-columns:repeat(4,1fr)}}
.nv-stat{text-align:center}
.nv-stat .num{font-size:clamp(1.7rem,3vw,2.35rem);font-weight:800;color:var(--ink);letter-spacing:-.02em;line-height:1}
.nv-stat .num em{font-style:normal;background:linear-gradient(100deg,var(--brand),var(--cyan));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.nv-stat .lbl{margin-top:9px;color:var(--muted);font-size:.85rem;font-weight:600}

/* LOCAL BAND */
.nv-local{padding:0 0 82px}
.nv-local-card{position:relative;border-radius:26px;overflow:hidden;background-size:cover;background-position:center 60%;min-height:400px;display:flex;align-items:center;box-shadow:var(--shadow-lg)}
.nv-local-card::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg, rgba(8,15,30,.9), rgba(8,15,30,.55) 58%, rgba(8,15,30,.2))}
.nv-local-inner{position:relative;padding:clamp(32px,5vw,52px);max-width:580px;color:#fff}
.nv-local-eyebrow{display:inline-flex;align-items:center;gap:7px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);color:#fff;font-weight:700;font-size:.76rem;letter-spacing:.05em;text-transform:uppercase;padding:7px 14px;border-radius:100px;margin-bottom:18px}
.nv-local-card h2{color:#fff;font-size:clamp(1.9rem,3.6vw,2.7rem);letter-spacing:-.03em;line-height:1.1;margin-bottom:14px}
.nv-local-card p{color:rgba(255,255,255,.92);font-size:1.06rem;line-height:1.6;margin-bottom:26px;max-width:470px}
.nv-local-towns{margin-top:22px;display:flex;flex-wrap:wrap;gap:8px 14px;font-size:.88rem;align-items:baseline}
.nv-local-towns b{color:#fff;font-weight:800;margin-right:2px}
.nv-local-towns a{color:rgba(255,255,255,.74);font-weight:600;text-decoration:underline;text-underline-offset:2px}
.nv-local-towns a:hover{color:#fff}

/* RESULTS DASHBOARD (bento) */
.nv-dash{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
@media(min-width:900px){.nv-dash{grid-template-columns:repeat(4,1fr)}}
.nv-dash-card{background:#fff;border:1px solid var(--line);border-radius:18px;padding:22px 24px;box-shadow:var(--shadow);position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:space-between;min-height:158px}
.nv-dash-card.wide{grid-column:span 2}
.nv-dash-card .tag{position:absolute;top:18px;right:18px;font-size:.68rem;font-weight:800;letter-spacing:.03em;color:var(--brand-strong);background:var(--brand-soft);padding:4px 10px;border-radius:100px}
.nv-dash-head{color:var(--ink);font-weight:700;font-size:1.06rem;letter-spacing:-.01em}
.nv-dash-sub{color:var(--muted);font-size:.84rem;margin-top:3px}
.nv-dash-big{font-size:clamp(2rem,3vw,2.6rem);font-weight:800;color:var(--ink);letter-spacing:-.03em;line-height:1}
.nv-dash-big em{font-style:normal;background:linear-gradient(100deg,var(--brand),var(--cyan));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.nv-dash-cap{color:var(--muted);font-size:.85rem;font-weight:600;margin-top:8px}
.nv-dash-chart{width:100%;height:96px;margin-top:auto;display:block}
.nv-gauge-wrap{margin-top:auto;text-align:center}
.nv-gauge{width:118px;height:64px;display:block;margin:0 auto}
.nv-gauge-val{font-size:1.5rem;font-weight:800;color:var(--ink);letter-spacing:-.02em;margin-top:-6px}

/* image-bg reviews section */
.nv-reviews{position:relative;overflow:hidden;padding:96px 0;background:linear-gradient(rgba(9,16,30,.82),rgba(9,16,30,.85)), url(${sonomaVineyard});background-size:cover;background-position:center 52%}
.nv-reviews .nv-quote p{color:#fff}
.nv-reviews .nv-quote .mk{color:#fff;opacity:.5}
.nv-reviews .nv-quote .who .nm b{color:#fff}
.nv-reviews .nv-quote .who .nm span{color:rgba(255,255,255,.72)}
.nv-rev-grid{display:grid;grid-template-columns:1fr;gap:20px;max-width:1040px;margin:0 auto}
@media(min-width:720px){.nv-rev-grid{grid-template-columns:1fr 1fr}}
@media(min-width:1000px){.nv-rev-grid{grid-template-columns:repeat(3,1fr)}}
.nv-rev-card{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.14);border-radius:18px;padding:26px 24px;text-align:left}
.nv-rev-card .nv-stars{color:#ffd24a;font-size:1rem}
.nv-rev-card p{color:#fff;font-size:1rem;line-height:1.55;margin:12px 0 18px}
.nv-rev-card .who{display:inline-flex;align-items:center;gap:11px}
.nv-rev-card .who .av{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.9rem}
.nv-rev-card .who .nm b{color:#fff;font-size:.95rem}.nv-rev-card .who .nm span{display:block;color:rgba(255,255,255,.68);font-size:.82rem}
.nv-review-cta{color:#9cc0ff;font-weight:700;font-size:.95rem}
/* colorful service icons */
.nv-card .ico.c1{background:#EAF1FF;color:#2563EB}
.nv-card .ico.c2{background:#E2FAF2;color:#0EA47A}
.nv-card .ico.c3{background:#FFF1E4;color:#F97316}
/* how-it-works on a soft green-hills image */
.nv-hiw{position:relative;overflow:hidden;background:linear-gradient(rgba(240,247,240,.94),rgba(240,247,240,.9)), url(${sonomaGreen});background-size:cover;background-position:center}

/* 1-week launch guarantee */
.nv-guarpill{display:inline-flex;align-items:center;gap:8px;margin-top:18px;background:#0A1222;color:#fff;font-weight:700;font-size:.92rem;padding:10px 18px;border-radius:100px;box-shadow:var(--shadow)}
.nv-guarpill b{color:#FFD84D}
.nv-guar{padding:0 0 82px}
.nv-guar-card{position:relative;overflow:hidden;border-radius:26px;padding:clamp(38px,5vw,58px) 40px;text-align:center;color:#fff;background:linear-gradient(125deg, #2563EB 0%, #1D4ED8 55%, #0B1222 100%)}
.nv-guar-card::after{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.1) 1px,transparent 1px);background-size:22px 22px;opacity:.5}
.nv-guar-card > *{position:relative}
.nv-guar-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.32);color:#fff;font-weight:800;font-size:.76rem;letter-spacing:.06em;text-transform:uppercase;padding:8px 16px;border-radius:100px;margin-bottom:18px}
.nv-guar-card h2{color:#fff;font-size:clamp(2rem,4.2vw,3rem);letter-spacing:-.03em;line-height:1.08;margin-bottom:14px}
.nv-guar-card h2 em{font-style:normal;color:#FFD84D}
.nv-guar-card p{color:rgba(255,255,255,.86);font-size:1.1rem;max-width:600px;margin:0 auto 26px;line-height:1.6}
.nv-guar-sub{color:rgba(255,255,255,.6);font-size:.84rem;margin-top:16px}
/* guarantee microcopy under CTAs */
.nv-guarnote{margin-top:12px;color:var(--muted);font-size:.85rem;font-weight:600;display:inline-flex;align-items:center;gap:7px}
.nv-guarnote svg{color:var(--brand)}
/* free website audit offer */
.nv-audit{padding:0 0 82px}
.nv-audit-card{position:relative;overflow:hidden;display:grid;grid-template-columns:1fr;gap:26px;align-items:center;background:linear-gradient(135deg,#EAF1FF,#F5F8FC 70%);border:1px solid #D9E5FF;border-radius:26px;padding:clamp(30px,4vw,48px)}
@media(min-width:860px){.nv-audit-card{grid-template-columns:1.25fr .95fr}}
.nv-audit-card .lead h2{color:var(--ink);font-size:clamp(1.6rem,3vw,2.2rem);letter-spacing:-.03em;line-height:1.12;margin:14px 0 12px}
.nv-audit-card .lead p{color:var(--body);font-size:1.04rem;line-height:1.62;margin-bottom:24px;max-width:46ch}
.nv-audit-list{display:flex;flex-direction:column;gap:15px;background:#fff;border:1px solid var(--line);border-radius:18px;padding:24px 26px;box-shadow:var(--shadow-sm)}
.nv-audit-list .it{display:flex;gap:11px;align-items:flex-start}
.nv-audit-list .it svg{color:var(--brand);flex-shrink:0;margin-top:2px}
.nv-audit-list .it b{color:var(--ink);font-size:.96rem;font-weight:700;display:block}
.nv-audit-list .it small{color:var(--muted);font-size:.84rem;line-height:1.4}
/* old-way vs Nuvion comparison */
.nv-vs{display:grid;grid-template-columns:1fr;gap:16px;align-items:center;max-width:1000px;margin:0 auto}
@media(min-width:860px){.nv-vs{grid-template-columns:1fr 56px 1fr}}
.nv-vs-col{border-radius:20px;padding:28px 26px}
.nv-vs-col.bad{background:#FBF7F7;border:1px solid #EFE2E2}
.nv-vs-col.good{background:linear-gradient(180deg,#EFF5FF,#fff 65%);border:1px solid #bcd0f7;box-shadow:var(--shadow)}
.nv-vs-lab{font-weight:800;font-size:.78rem;letter-spacing:.06em;text-transform:uppercase;margin-bottom:16px}
.nv-vs-col.bad .nv-vs-lab{color:#9AA1AE}
.nv-vs-col.good .nv-vs-lab{color:var(--brand-strong)}
.nv-vs-row{display:flex;gap:12px;align-items:flex-start;padding:11px 0;font-size:.95rem;line-height:1.4}
.nv-vs-row + .nv-vs-row{border-top:1px solid rgba(10,18,34,.06)}
.nv-vs-col.bad .nv-vs-row{color:var(--muted)}
.nv-vs-col.good .nv-vs-row{color:var(--ink);font-weight:600}
.nv-vs-ico{flex-shrink:0;font-size:1.05rem;line-height:1.35}
.nv-vs-mid{display:flex;align-items:center;justify-content:center}
.nv-vs-pill{width:56px;height:56px;border-radius:50%;background:#fff;border:1px solid var(--line);box-shadow:var(--shadow);display:flex;align-items:center;justify-content:center;font-weight:800;color:var(--muted);font-size:.82rem}
@media(max-width:859px){.nv-vs-mid{display:none}}
/* The Nuvion Promise */
.nv-promise{padding:0 0 82px}
.nv-promise-card{position:relative;overflow:hidden;border-radius:26px;padding:clamp(34px,5vw,58px);background:linear-gradient(180deg,#F4F8FF,#fff 72%);border:1px solid #dbe6fb;box-shadow:var(--shadow)}
.nv-promise-head{text-align:center;max-width:640px;margin:0 auto 40px}
.nv-promise-grid{display:grid;grid-template-columns:1fr;gap:24px;max-width:900px;margin:0 auto}
@media(min-width:760px){.nv-promise-grid{grid-template-columns:1fr 1fr}}
.nv-promise-item{display:flex;gap:16px;align-items:flex-start}
.nv-promise-n{flex-shrink:0;width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 18px -8px rgba(37,110,247,.6)}
.nv-promise-item h4{color:var(--ink);font-size:1.12rem;margin-bottom:5px}
.nv-promise-item p{color:var(--body);font-size:.95rem;line-height:1.6}
.nv-promise-sign{text-align:center;margin-top:40px;color:var(--ink);font-weight:800;font-size:1.1rem;letter-spacing:-.01em}
.nv-promise-sign span{display:block;color:var(--muted);font-weight:500;font-size:.86rem;margin-top:5px;letter-spacing:0}

/* transparent pricing + founding offer */
.nv-found{max-width:940px;margin:0 auto 32px;background:linear-gradient(100deg,#0A1222,#132444);color:#fff;border-radius:16px;padding:15px 26px;text-align:center;font-weight:500;font-size:.98rem;line-height:1.55;box-shadow:var(--shadow-lg)}
.nv-found b{color:#FFD84D;font-weight:800}
.nv-bill{display:inline-flex;background:#eef2f8;border:1px solid var(--line);border-radius:100px;padding:5px;margin:0 auto 26px;gap:4px}
.nv-bill button{font-family:var(--font);font-weight:700;font-size:.9rem;padding:10px 20px;border-radius:100px;border:none;background:none;color:var(--muted);cursor:pointer;transition:all .16s;white-space:nowrap}
.nv-bill button.on{background:#fff;color:var(--ink);box-shadow:var(--shadow-sm)}
.nv-tiers{display:grid;grid-template-columns:1fr;gap:22px;max-width:1040px;margin:0 auto}
@media(min-width:840px){.nv-tiers{grid-template-columns:repeat(3,1fr);align-items:start}}
.nv-tier{background:#fff;border:1px solid var(--line);border-radius:20px;padding:32px 28px;box-shadow:var(--shadow);display:flex;flex-direction:column;position:relative}
.nv-tier.pop{border:1.5px solid #9dbdf6;background:linear-gradient(180deg,#F4F8FF,#fff 46%);box-shadow:var(--shadow-lg)}
.nv-tier .pop-tag{position:absolute;top:-13px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;font-weight:800;font-size:.7rem;letter-spacing:.06em;text-transform:uppercase;padding:6px 16px;border-radius:100px;white-space:nowrap;box-shadow:0 8px 18px -8px rgba(37,110,247,.7)}
.nv-tier .tname{color:var(--brand-strong);font-weight:800;font-size:.8rem;letter-spacing:.06em;text-transform:uppercase}
.nv-tier .tprice{color:var(--ink);font-size:2.5rem;font-weight:800;letter-spacing:-.03em;margin:8px 0 0;line-height:1}
.nv-tier .tprice small{font-size:.92rem;color:var(--muted);font-weight:600;letter-spacing:0}
.nv-tier .tmo{color:var(--brand-strong);font-weight:600;font-size:.82rem;margin-top:6px}
.nv-tier .tdesc{color:var(--body);font-size:.93rem;line-height:1.5;margin:12px 0 18px}
.nv-tier ul{list-style:none;display:flex;flex-direction:column;gap:11px;margin:0 0 26px;padding:0}
.nv-tier ul li{display:flex;gap:10px;align-items:flex-start;font-size:.93rem;color:var(--body);line-height:1.45}
.nv-tier ul li svg{color:var(--brand);flex-shrink:0;margin-top:1px;width:18px;height:18px}
.nv-tier ul li.lead{font-weight:700;color:var(--ink)}
.nv-tier .nv-btn{margin-top:auto;width:100%;justify-content:center}
.nv-price-note{text-align:center;color:var(--muted);font-size:.92rem;margin:30px auto 0;max-width:660px;line-height:1.65}
.nv-price-note b{color:var(--ink);font-weight:700}
.nv-price-extra{max-width:720px;margin:26px auto 0;display:flex;flex-direction:column;gap:14px}
.nv-price-bonus{background:linear-gradient(180deg,#FBF3DD,#fffdf7 82%);border:1px solid #EAD9A8;border-radius:14px;padding:15px 22px;text-align:center;color:var(--body);font-size:.95rem;line-height:1.55}
.nv-price-bonus b{color:#8a6a00}
.nv-price-proof{text-align:center;color:var(--muted);font-size:.95rem;line-height:1.5}
.nv-price-proof b{color:var(--ink);font-weight:700}
.nv-price-proof .nv-stars{color:#ffb020;letter-spacing:1px;margin-right:4px}
/* care plans */
.nv-carecards{display:grid;grid-template-columns:1fr;gap:18px;max-width:1000px;margin:28px auto 0}
@media(min-width:840px){.nv-carecards{grid-template-columns:repeat(3,1fr);align-items:start}}
.nv-carecard{background:#fff;border:1px solid var(--line);border-radius:18px;padding:26px 24px;box-shadow:var(--shadow-sm);position:relative}
.nv-carecard.pop{border:1.5px solid #9dbdf6;box-shadow:var(--shadow)}
.nv-carecard .cn{color:var(--ink);font-weight:800;font-size:1.14rem;letter-spacing:-.01em}
.nv-carecard .cp{color:var(--brand-strong);font-weight:800;font-size:1.7rem;letter-spacing:-.02em;margin:4px 0 0;line-height:1}
.nv-carecard .cp small{font-size:.82rem;color:var(--muted);font-weight:600;letter-spacing:0}
.nv-carecard ul{list-style:none;display:flex;flex-direction:column;gap:9px;margin:16px 0 0;padding:0}
.nv-carecard ul li{display:flex;gap:9px;align-items:flex-start;font-size:.9rem;color:var(--body);line-height:1.4}
.nv-carecard ul li svg{color:var(--brand);flex-shrink:0;margin-top:1px;width:16px;height:16px}
.nv-carecard ul li.lead{font-weight:700;color:var(--ink)}
.nv-carecard .cpop{position:absolute;top:-11px;left:24px;background:linear-gradient(135deg,var(--brand),var(--brand-strong));color:#fff;font-weight:800;font-size:.64rem;letter-spacing:.05em;text-transform:uppercase;padding:4px 12px;border-radius:100px}

@media(prefers-reduced-motion:reduce){
  .rv{transform:none!important;transition:none}
  .nv-float,.nv-pulse,.nv-phone{animation:none}
}
`;

/* ── scroll reveal ─────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ── count-up number (animates into view, respects reduced-motion) ── */
function Count({ to, decimals = 0 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setVal(to); return; }
    let raf, done = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done) {
          done = true;
          const dur = 1100, t0 = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - t0) / dur);
            setVal(to * (1 - Math.pow(1 - p, 3)));
            if (p < 1) raf = requestAnimationFrame(tick); else setVal(to);
          };
          raf = requestAnimationFrame(tick);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [to]);
  return <span ref={ref}>{val.toFixed(decimals)}</span>;
}

/* ── icons (consistent 24px stroke) ────────────────────────── */
const Ico = ({ children }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);
const IconWeb = () => <Ico><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 4v5"/></Ico>;
const IconSeo = () => <Ico><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></Ico>;
const IconMkt = () => <Ico><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></Ico>;
const IconUser = () => <Ico><circle cx="12" cy="8" r="4"/><path d="M4 20c0-3.5 3.6-6 8-6s8 2.5 8 6"/></Ico>;
const IconBolt = () => <Ico><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></Ico>;
const IconHand = () => <Ico><path d="M4 12v3a5 5 0 0 0 5 5h3.5a5 5 0 0 0 5-5V9a1.5 1.5 0 0 0-3 0v2m0-2V6a1.5 1.5 0 0 0-3 0v4m0-4a1.5 1.5 0 0 0-3 0v5m0-5a1.5 1.5 0 0 0-3 0v6"/></Ico>;
const IconShield = () => <Ico><path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z"/><path d="m9 11 2 2 4-4"/></Ico>;
const IconLayers = () => <Ico><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></Ico>;
const IconLink = () => <Ico><path d="M9 15l6-6"/><path d="M10.5 6.5 12 5a4 4 0 0 1 6 6l-1.5 1.5"/><path d="M13.5 17.5 12 19a4 4 0 0 1-6-6l1.5-1.5"/></Ico>;
const Check = () => <Ico><path d="m20 6-11 11-5-5"/></Ico>;
const Arrow = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>;

/* ── PRICING (transparent tiers + founding offer) ──────────────
   NOTE: prices below are sensible defaults — adjust $600 / $900 / $1,800
   and the "10 businesses / 3 months" founding terms to your real numbers. */
function Pricing() {
  const { t } = useLang();
  const [billing, setBilling] = useState('monthly'); // default to monthly — nudge toward recurring
  const monthly = billing === 'monthly';
  const tiers = [
    {
      name: t('Launch', 'Lanzamiento'), once: '$600', mo: '$49', cta: 'ghost',
      desc: t('New or very small business — get online and taking calls, fast.', 'Negocio nuevo o pequeño — ponte en línea y recibe llamadas, rápido.'),
      feats: [
        t('Clean, fast, mobile-first site', 'Sitio limpio, rápido y mobile-first'),
        t('Up to 4 key pages', 'Hasta 4 páginas clave'),
        t('One-tap calling + contact form', 'Llamada en un toque + formulario'),
        t('Set up to show on Google', 'Configurado para aparecer en Google'),
      ],
    },
    {
      name: t('Business', 'Negocio'), once: '$900', mo: '$89', cta: 'primary', pop: true,
      desc: t('The full custom site — everything, built to win customers.', 'El sitio personalizado completo — todo, hecho para ganar clientes.'),
      feats: [
        { lead: true, text: t('Everything in Launch, plus:', 'Todo lo de Lanzamiento, más:') },
        t('A page for every service & town', 'Una página por cada servicio y pueblo'),
        t('Your reviews + quote request form', 'Tus reseñas + formulario de cotización'),
        t('Local SEO + Google Business Profile', 'SEO local + Perfil de Negocio de Google'),
        t('Own it — outright or after 18 months', 'Es tuyo — de una vez o tras 18 meses'),
      ],
    },
    {
      name: t('Growth', 'Crecimiento'), once: 'from $1,800', mo: '$149', cta: 'ghost',
      desc: t('Ready to rank and scale — your site plus a real SEO head start.', 'Listo para posicionar y crecer — tu sitio más una ventaja real en SEO.'),
      feats: [
        { lead: true, text: t('Everything in Business, plus:', 'Todo lo de Negocio, más:') },
        t('Local SEO head start', 'Ventaja en SEO local'),
        t('More pages & written content', 'Más páginas y contenido escrito'),
        t('Booking & integrations', 'Reservas e integraciones'),
      ],
    },
  ];
  return (
    <section className="nv-sec soft"><div className="nv-wrap">
      <div className="nv-center rv">
        <div className="nv-kicker">{t('Simple, honest pricing', 'Precios simples y honestos')}</div>
        <h2 className="nv-h2">{t('Own it outright, or start for $0 down.', 'Cómpralo de una vez, o empieza con $0 inicial.')}</h2>
        <p className="nv-lead" style={{ margin: '0 auto' }}>{t(<>Local agencies charge <b>$3,000–$10,000</b> for a website like this. Yours starts at <b>$600</b> — custom, live in a week, and <b>you own it</b>.</>, <>Las agencias locales cobran <b>$3,000–$10,000</b> por un sitio como este. El tuyo empieza en <b>$600</b> — personalizado, en vivo en una semana, y <b>es tuyo</b>.</>)}</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="nv-bill rv">
          <button className={!monthly ? 'on' : ''} onClick={() => setBilling('once')}>{t('Pay once · own it', 'Pago único · es tuyo')}</button>
          <button className={monthly ? 'on' : ''} onClick={() => setBilling('monthly')}>{t('Monthly · $0 down', 'Mensual · $0 inicial')}</button>
        </div>
      </div>
      <div className="nv-found rv">
        {t(<>⚡ <b>Founding offer — only 10 spots.</b> The first 10 Sonoma County businesses lock in this founding rate <b>for good — it never goes up</b>. After that, prices rise.</>, <>⚡ <b>Oferta fundadora — solo 10 lugares.</b> Los primeros 10 negocios de Sonoma County aseguran esta tarifa fundadora <b>para siempre — nunca sube</b>. Después de eso, los precios suben.</>)}
      </div>
      <div className="nv-tiers">
        {tiers.map((ti, i) => (
          <div className={`nv-tier rv${ti.pop ? ' pop' : ''}`} key={i} style={{ transitionDelay: `${i * 70}ms` }}>
            {ti.pop && <div className="pop-tag">{t('Most popular', 'Más popular')}</div>}
            <div className="tname">{ti.name}</div>
            <div className="tprice">{monthly ? ti.mo : ti.once}{(monthly || !ti.once.startsWith('from')) && <small> {monthly ? t('/mo', '/mes') : t('one-time', 'pago único')}</small>}</div>
            {monthly && <div className="tmo">{t('$0 down · hosting, care & updates included', '$0 inicial · hosting, cuidado y actualizaciones incluidos')}</div>}
            <p className="tdesc">{ti.desc}</p>
            <ul>
              {ti.feats.map((f, j) => (
                typeof f === 'object'
                  ? <li className="lead" key={j}>{f.text}</li>
                  : <li key={j}><Check />{f}</li>
              ))}
            </ul>
            <Link to="/book" className={`nv-btn nv-btn-${ti.cta === 'primary' ? 'primary' : 'ghost'}`}>{t('Get started', 'Empieza')} <Arrow /></Link>
          </div>
        ))}
      </div>
      <div className="nv-price-note rv">
        {monthly
          ? t(<><b>$0 down</b>, everything included — hosting, care &amp; updates — on an <b>18-month plan</b>, and <b>the site is yours to keep at the end</b>. Live in 1 week, guaranteed.</>, <><b>$0 inicial</b>, todo incluido — hosting, cuidado y actualizaciones — en un <b>plan de 18 meses</b>, y <b>el sitio es tuyo al final</b>. En vivo en 1 semana, garantizado.</>)
          : t(<>Every plan includes a <b>written quote before you owe a cent</b>, your site <b>live in 1 week or you don't pay</b>, and optional care from <b>$29/mo</b> (cancel anytime).</>, <>Cada plan incluye una <b>cotización por escrito antes de deber un centavo</b>, tu sitio <b>en vivo en 1 semana o no pagas</b>, y mantenimiento opcional desde <b>$29/mes</b> (cancela cuando quieras).</>)}
      </div>
      <div className="nv-price-extra rv">
        <div className="nv-price-bonus">✨ <b>{t('Free with every build:', 'Gratis con cada sitio:')}</b> {t('we set up your Google Business Profile, wire in your reviews, and add one-tap calling — so you’re found and bookable from day one.', 'configuramos tu Perfil de Negocio de Google, conectamos tus reseñas y agregamos llamada en un toque — para que te encuentren y reserven contigo desde el día uno.')}</div>
        <div className="nv-price-proof"><span className="nv-stars">★★★★★</span> {t('“Exactly what I had in mind.”', '“Justo lo que tenía en mente.”')} <b>— Angela Ames</b></div>
      </div>
    </div></section>
  );
}

/* ── CARE PLANS (ongoing, optional on one-time builds) ─────────
   NOTE: $29 / $50 / $149 per user. Monthly build plans already
   include Essential care. */
function CarePlans() {
  const { t } = useLang();
  const plans = [
    {
      name: t('Essential', 'Esencial'), price: '$29',
      feats: [
        t('Fast, secure hosting', 'Hosting rápido y seguro'),
        t('Daily backups + off-site copies', 'Respaldos diarios + copias externas'),
        t('Malware & security protection', 'Protección contra malware y seguridad'),
        t('24/7 uptime monitoring', 'Monitoreo de disponibilidad 24/7'),
        t('Site health checks & SSL', 'Revisiones de salud del sitio y SSL'),
      ],
    },
    {
      name: t('Plus', 'Plus'), price: '$50', pop: true,
      feats: [
        { lead: true, text: t('Everything in Essential, plus:', 'Todo lo de Esencial, más:') },
        t('Ongoing small revisions (text, images, pages)', 'Revisiones pequeñas continuas (texto, imágenes, páginas)'),
        t('Priority same-day support', 'Soporte prioritario el mismo día'),
      ],
    },
    {
      name: t('Pro', 'Pro'), price: '$149',
      feats: [
        { lead: true, text: t('Everything in Plus, plus:', 'Todo lo de Plus, más:') },
        t('Ongoing local SEO', 'SEO local continuo'),
        t('Monthly content or blog post', 'Contenido o artículo mensual'),
        t('Google Business Profile management', 'Gestión de tu Perfil de Negocio de Google'),
        t('Reviews: generation & responses', 'Reseñas: generación y respuestas'),
        t('Monthly performance report', 'Reporte de rendimiento mensual'),
      ],
    },
  ];
  return (
    <section className="nv-sec"><div className="nv-wrap">
      <div className="nv-center rv">
        <div className="nv-kicker">{t('Ongoing care', 'Cuidado continuo')}</div>
        <h2 className="nv-h2">{t('We keep it running — and growing', 'Lo mantenemos funcionando — y creciendo')}</h2>
        <p className="nv-lead">{t('Optional on one-time builds — and monthly plans already include Essential care. Cancel anytime.', 'Opcional en compras únicas — y los planes mensuales ya incluyen el cuidado Esencial. Cancela cuando quieras.')}</p>
      </div>
      <div className="nv-carecards">
        {plans.map((pl, i) => (
          <div className={`nv-carecard rv${pl.pop ? ' pop' : ''}`} key={i} style={{ transitionDelay: `${i * 70}ms` }}>
            {pl.pop && <div className="cpop">{t('Most popular', 'Más popular')}</div>}
            <div className="cn">{pl.name}</div>
            <div className="cp">{pl.price}<small> {t('/mo', '/mes')}</small></div>
            <ul>
              {pl.feats.map((f, j) => (
                typeof f === 'object'
                  ? <li className="lead" key={j}>{f.text}</li>
                  : <li key={j}><Check />{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div></section>
  );
}

/* ── NAV ───────────────────────────────────────────────────── */
function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const links = [
    { label: t('Home', 'Inicio'), to: '/' },
    { label: t('Websites', 'Sitios web'), to: '/services/web-design' },
    { label: t('Automation', 'Automatización'), to: '/services/integrations' },
    { label: t('SEO', 'SEO'), to: '/services/seo-aso' },
    { label: t('Our Work', 'Nuestro trabajo'), to: '/work' },
    { label: t('About', 'Nosotros'), to: '/about' },
  ];
  return (
    <header className={`nv-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="nv-wrap nv-nav-in">
        <a href="#top" className="nv-logo" aria-label="Nuvion Solutions"><span className="mark">N</span><span className="wm"><b>NUVION</b><small>SOLUTIONS</small></span></a>
        <nav className="nv-links">
          {links.map((l, i) => l.to.startsWith('#')
            ? <a key={i} href={l.to}>{l.label}</a>
            : <Link key={i} to={l.to}>{l.label}</Link>)}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <LangToggle />
          <Link to="/book" className="nv-btn nv-btn-primary nv-navcta">{t('Book a Call', 'Reserva una llamada')}</Link>
          <button className={`nv-burger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu"><span/><span/><span/></button>
        </div>
      </div>
      <div className={`nv-mobile${open ? ' show' : ''}`}>
        <LangToggle />
        {links.map((l, i) => l.to.startsWith('#')
          ? <a key={i} href={l.to} onClick={() => setOpen(false)}>{l.label}</a>
          : <Link key={i} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>)}
        <Link to="/book" className="nv-btn nv-btn-primary" onClick={() => setOpen(false)}>{t('Book a Call', 'Reserva una llamada')}</Link>
      </div>
    </header>
  );
}

/* ── HERO ──────────────────────────────────────────────────── */
function Hero() {
  const { t } = useLang();
  return (
    <section className="nv-hero" id="top">
      <div className="nv-wrap nv-hero-in">
        <span className="nv-eyebrow"><span className="dot" />{t('Web Design · Custom Builds · Automation · Sonoma County', 'Diseño web · Desarrollos a medida · Automatización · Sonoma County')}</span>
        <h1 className="nv-h1">{t(<>Websites that win you <span className="nv-grad">more customers</span>.</>, <>Sitios web que te ganan <span className="nv-grad">más clientes</span>.</>)}</h1>
        <p className="nv-hero-sub">{t('Custom, lightning-fast websites for local businesses — plus the custom builds, integrations, and automations that make them actually run your business. Built by a real Sonoma County team that answers same-day and sticks with you.', 'Sitios web personalizados y rapidísimos para negocios locales — además de los desarrollos a medida, las integraciones y las automatizaciones que hacen que realmente manejen tu negocio. Creados por un equipo real de Sonoma County que responde el mismo día y se queda contigo.')}</p>
        <div className="nv-hero-cta">
          <Link to="/book" className="nv-btn nv-btn-primary nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
          <a href="#work" className="nv-btn nv-btn-ghost nv-btn-lg">{t('See our work', 'Ve nuestro trabajo')}</a>
        </div>
        <div className="nv-ticks">
          <span><Check /> {t('You own it', 'Es tuyo')}</span>
          <span><Check /> {t('Same-day responses', 'Respuestas el mismo día')}</span>
          <span><Check /> {t('Built for your customers', 'Hecho para tus clientes')}</span>
        </div>
        <div className="nv-rate"><span className="nv-stars">★★★★★</span> {t("loved by the local owners we've built for", 'querido por los dueños locales para los que hemos construido')}</div>
        <div style={{ display: 'flex', justifyContent: 'center' }}><div className="nv-guarpill">{t(<>⚡ Live in&nbsp;<b>1 week</b>&nbsp;— or you don't pay</>, <>⚡ En vivo en&nbsp;<b>1 semana</b>&nbsp;— o no pagas</>)}</div></div>

        <div className="nv-stage rv">
          <div className="glow" />
          <div className="nv-browser">
            <div className="nv-browser-bar"><i/><i/><i/><span className="url">yourbusiness.com</span></div>
            <div className="nv-browser-shot"><img src={workDumolin} alt="A website built by Nuvion Solutions" /></div>
          </div>
          <div className="nv-phone"><div className="scr"><img src={heroPhoneShot} alt="Mobile view of a Nuvion website" /></div></div>
          <div className="nv-float nv-float-1">
            <div className="av">AA</div>
            <div className="tx"><b>{t('★★★★★ Exactly right', '★★★★★ Justo lo que quería')}</b><span>{t('“Just what I had in mind.”', '“Justo lo que tenía en mente.”')}</span></div>
          </div>
          <div className="nv-float nv-float-2">
            <div className="nv-pulse" />
            <div className="tx"><b>{t('New inquiry', 'Nueva consulta')}</b><span>{t('Replied the same day', 'Respondida el mismo día')}</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TRUST BAR ─────────────────────────────────────────────── */
function TrustBar() {
  const { t } = useLang();
  return (
    <div className="nv-trust"><div className="nv-wrap nv-trust-in">
      <span><span className="nv-stars">★★★★★</span> {t('Loved by our clients', 'Querido por nuestros clientes')}</span>
      <span><span className="ic"><IconBolt /></span> {t('Same-day response promise', 'Promesa de respuesta el mismo día')}</span>
      <span><span className="ic"><IconShield /></span> {t('A real human owns your project', 'Una persona real a cargo de tu proyecto')}</span>
      <span><span className="ic"><IconUser /></span> {t('Local · Sonoma County, CA', 'Local · Sonoma County, CA')}</span>
    </div></div>
  );
}

/* ── LOGO STRIP ────────────────────────────────────────────── */
function LogoStrip() {
  const { t } = useLang();
  return (
    <div className="nv-logos"><div className="nv-wrap">
      <div className="cap rv">{t('Trusted by local businesses across Sonoma County', 'La confianza de negocios locales en todo Sonoma County')}</div>
      <div className="rv d1"><LogoWall /></div>
    </div></div>
  );
}

/* ── SERVICES ──────────────────────────────────────────────── */
function Services() {
  const { t } = useLang();
  return (
    <section className="nv-sec" id="services"><div className="nv-wrap">
      <div className="nv-center rv">
        <div className="nv-kicker">{t('What we do', 'Lo que hacemos')}</div>
        <h2 className="nv-h2">{t(<>We build the site — <br className="hide-sm" />and everything behind it</>, <>Construimos el sitio — <br className="hide-sm" />y todo lo que hay detrás</>)}</h2>
        <p className="nv-lead">{t('From a simple page to a fully connected system that runs your business. Most local shops can only build the site — we build what makes it actually work.', 'Desde una página simple hasta un sistema completamente conectado que maneja tu negocio. La mayoría de los estudios locales solo construyen el sitio — nosotros construimos lo que hace que de verdad funcione.')}</p>
      </div>
      <div className="nv-svc">
        <div className="nv-card feat rv">
          <span className="badge">{t('Start here', 'Empieza aquí')}</span>
          <div className="ico c1"><IconWeb /></div>
          <h3>{t('Websites', 'Sitios web')}</h3>
          <p>{t('Custom, high-converting sites — from a one-page showcase to a full business site. Beautiful, fast, mobile-first, and built to turn visitors into paying customers.', 'Sitios personalizados y de alta conversión — desde una página única hasta un sitio de negocio completo. Bonitos, rápidos, mobile-first y hechos para convertir visitantes en clientes que pagan.')}</p>
          <ul>
            <li><Check /> {t('Custom design, not a template', 'Diseño personalizado, no una plantilla')}</li>
            <li><Check /> {t('Mobile-first & lightning fast', 'Mobile-first y rapidísimo')}</li>
            <li><Check /> {t("Live in 1 week — or you don't pay", 'En vivo en 1 semana — o no pagas')}</li>
            <li><Check /> {t('You own it, we care for it', 'Es tuyo, nosotros lo cuidamos')}</li>
          </ul>
          <Link to="/services/web-design" className="go">{t('Explore websites', 'Explora los sitios web')} <Arrow /></Link>
        </div>
        <div className="nv-card rv d1">
          <div className="ico c2"><IconLayers /></div>
          <h3>{t('Custom builds & web apps', 'Desarrollos a medida y web apps')}</h3>
          <p>{t('Online stores, booking systems, client portals, dashboards, corporate sites — when the site needs to do more than look good, we build the functionality to match exactly how you work.', 'Tiendas en línea, sistemas de reservas, portales de clientes, paneles, sitios corporativos — cuando el sitio necesita hacer más que verse bien, construimos la funcionalidad a la medida de cómo trabajas.')}</p>
          <Link to="/services/custom-builds" className="go">{t('Explore custom builds', 'Explora los desarrollos a medida')} <Arrow /></Link>
        </div>
        <div className="nv-card rv d2">
          <div className="ico c3"><IconLink /></div>
          <h3>{t('Integrations & automations', 'Integraciones y automatizaciones')}</h3>
          <p>{t("We connect your site to anything with an API — your CRM, calendar, payments, POS — and automate the busywork. The thing template shops and AI builders simply can't do.", 'Conectamos tu sitio con cualquier cosa que tenga una API — tu CRM, calendario, pagos, punto de venta — y automatizamos el trabajo repetitivo. Lo que las plantillas y los generadores de IA simplemente no pueden hacer.')}</p>
          <Link to="/services/integrations" className="go">{t('Explore integrations', 'Explora las integraciones')} <Arrow /></Link>
        </div>
      </div>
      <div className="nv-ai rv">
        <div><div className="qt">{t('Already have a site? We help you grow.', '¿Ya tienes un sitio? Te ayudamos a crecer.')}</div><div className="qs">{t('Local SEO to get found on Google, plus reviews, follow-up & marketing to keep customers coming.', 'SEO local para que te encuentren en Google, más reseñas, seguimiento y marketing para que sigan llegando los clientes.')}</div></div>
        <div className="nv-grow-links">
          <Link to="/services/seo-aso" className="ai-link"><IconSeo /> {t('SEO', 'SEO')} <Arrow /></Link>
          <Link to="/services/social-media-ai" className="ai-link"><IconMkt /> {t('Marketing', 'Marketing')} <Arrow /></Link>
        </div>
      </div>
    </div></section>
  );
}

/* ── HOW IT WORKS ──────────────────────────────────────────── */
function HowItWorks() {
  const { t } = useLang();
  const steps = [
    { t: t('Day 1 — Your free vision session', 'Día 1 — Tu sesión de visión gratis'), d: t('We sit down with you, learn your business, and map out exactly what we’d build — bring your ideas, even a rough sketch. No jargon, no pressure.', 'Nos sentamos contigo, conocemos tu negocio y trazamos exactamente lo que construiríamos — trae tus ideas, hasta un boceto. Sin tecnicismos, sin presión.') },
    { t: t('Days 2–6 — We design & build', 'Días 2–6 — Diseñamos y construimos'), d: t('You get a custom site and a real person handling everything. We do the heavy lifting while you run your business.', 'Obtienes un sitio personalizado y una persona real encargándose de todo. Nosotros hacemos el trabajo pesado mientras tú diriges tu negocio.') },
    { t: t('Day 7 — Launch & grow', 'Día 7 — Lanzamiento y crecimiento'), d: t('Your site goes live — guaranteed within the week. Then we stay on for fast tweaks, SEO, and support.', 'Tu sitio sale en vivo — garantizado dentro de la semana. Luego nos quedamos para ajustes rápidos, SEO y soporte.') },
  ];
  return (
    <section className="nv-sec nv-hiw" id="how-it-works"><div className="nv-wrap">
      <div className="nv-center rv">
        <div className="nv-kicker">{t('The Nuvion 1-Week Launch', 'El lanzamiento Nuvion en 1 semana')}</div>
        <h2 className="nv-h2">{t('Your site, live in one week', 'Tu sitio, en vivo en una semana')}</h2>
      </div>
      <div className="nv-steps">
        {steps.map((s, i) => (
          <div className={`nv-step rv d${i + 1}`} key={i}>
            <div className="n">{i + 1}</div>
            <h4>{s.t}</h4>
            <p>{s.d}</p>
          </div>
        ))}
      </div>
    </div></section>
  );
}

/* ── WHY US ────────────────────────────────────────────────── */
function WhyUs() {
  const { t } = useLang();
  const items = [
    { icon: <IconBolt />, t: t('Built to convert', 'Hechos para convertir'), d: t('Not just pretty — every layout is built around one job: turning visitors into calls, forms, and booked work.', 'No solo bonitos — cada diseño gira en torno a una sola meta: convertir visitantes en llamadas, formularios y trabajo agendado.') },
    { icon: <IconWeb />, t: t('Fast where it counts', 'Rápidos donde importa'), d: t('Lightning-fast load and flawless on mobile — because slow, clunky sites quietly lose you customers every day.', 'Carga ultrarrápida y perfectos en el móvil — porque los sitios lentos y torpes te cuestan clientes en silencio todos los días.') },
    { icon: <IconSeo />, t: t('Found on Google', 'Que te encuentren en Google'), d: t('Local SEO baked in from day one, so the customers searching for what you do actually land on you.', 'SEO local incluido desde el primer día, para que los clientes que buscan lo que haces lleguen a ti.') },
    { icon: <IconShield />, t: t('Yours, and easy to grow', 'Tuyo, y fácil de hacer crecer'), d: t('You own it outright, and small changes are same-day — your site keeps up as your business grows.', 'Es 100% tuyo, y los cambios pequeños son el mismo día — tu sitio evoluciona conforme crece tu negocio.') },
  ];
  return (
    <section className="nv-sec" id="why-us"><div className="nv-wrap">
      <div className="nv-center rv">
        <div className="nv-kicker">{t('What you get', 'Lo que obtienes')}</div>
        <h2 className="nv-h2">{t('Beautiful is the baseline. Ours are built to actually work.', 'Que sea bonito es lo mínimo. Los nuestros están hechos para de verdad funcionar.')}</h2>
      </div>
      <div className="nv-why">
        {items.map((it, i) => (
          <div className={`nv-why-item rv d${i + 1}`} key={i}>
            <div className="ic">{it.icon}</div>
            <h4>{it.t}</h4>
            <p>{it.d}</p>
          </div>
        ))}
      </div>
    </div></section>
  );
}

/* ── STATS ─────────────────────────────────────────────────── */
function Stats() {
  const { t } = useLang();
  return (
    <section className="nv-sec" style={{ paddingTop: 0 }}><div className="nv-wrap">
      <div className="nv-center rv"><div className="nv-kicker">{t('The results', 'Los resultados')}</div><h2 className="nv-h2">{t('Websites that pull their weight', 'Sitios web que rinden')}</h2><p className="nv-lead">{t('Fast, findable sites built to move the numbers that matter to your business.', 'Sitios rápidos y fáciles de encontrar, hechos para mover los números que le importan a tu negocio.')}</p></div>
      <div className="nv-dash">
        <div className="nv-dash-card wide rv">
          <div><div className="nv-dash-head">{t('Built to grow your traffic', 'Hechos para hacer crecer tu tráfico')}</div><div className="nv-dash-sub">{t('SEO-ready sites that climb after launch.', 'Sitios listos para SEO que suben después del lanzamiento.')}</div></div>
          <span className="tag">{t('WEB DESIGN + SEO', 'DISEÑO WEB + SEO')}</span>
          <svg className="nv-dash-chart" viewBox="0 0 320 96" preserveAspectRatio="none" aria-hidden="true">
            <defs><linearGradient id="dashG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2563EB" stopOpacity="0.22"/><stop offset="1" stopColor="#2563EB" stopOpacity="0"/></linearGradient></defs>
            <path d="M0,80 C40,78 64,64 104,58 C150,51 172,36 214,30 C258,24 288,14 320,7 L320,96 L0,96 Z" fill="url(#dashG)"/>
            <path d="M0,80 C40,78 64,64 104,58 C150,51 172,36 214,30 C258,24 288,14 320,7" fill="none" stroke="#2563EB" strokeWidth="2.6" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="nv-dash-card rv d1"><div className="nv-dash-big">1<em>-on-1</em></div><div className="nv-dash-cap">{t('Every project, personally', 'Cada proyecto, en persona')}</div></div>
        <div className="nv-dash-card rv d2"><div className="nv-dash-big">1<em>wk</em></div><div className="nv-dash-cap">{t('To launch — guaranteed', 'Para lanzar — garantizado')}</div></div>
        {/* 40+ = 6 real clients + 9 concept builds + 30 in the live trades feed (~45 distinct). Conservative floor; adjust to your real count. */}
        <div className="nv-dash-card rv d1"><div className="nv-dash-big"><Count to={40} /><em>+</em></div><div className="nv-dash-cap">{t('Sites designed & built', 'Sitios diseñados y construidos')}</div></div>
        <div className="nv-dash-card rv d2"><div className="nv-dash-big"><Count to={100} /><em>%</em></div><div className="nv-dash-cap">{t('Custom — no templates', 'Personalizado — sin plantillas')}</div></div>
        <div className="nv-dash-card rv d3">
          <div className="nv-dash-head" style={{ marginBottom: 2 }}>PageSpeed</div>
          <div className="nv-gauge-wrap">
            <svg className="nv-gauge" viewBox="0 0 120 66" aria-hidden="true">
              <path d="M8,60 A52,52 0 0 1 112,60" fill="none" stroke="#E5EAF1" strokeWidth="10" strokeLinecap="round"/>
              <path d="M8,60 A52,52 0 0 1 112,60" fill="none" stroke="#2563EB" strokeWidth="10" strokeLinecap="round" strokeDasharray="164" strokeDashoffset="10"/>
            </svg>
            <div className="nv-gauge-val"><Count to={100} /></div>
          </div>
        </div>
        <div className="nv-dash-card rv d4"><div className="nv-dash-big">{t(<>Same<em>-day</em></>, <>El mismo<em> día</em></>)}</div><div className="nv-dash-cap">{t('We answer, every time', 'Respondemos, siempre')}</div></div>
      </div>
    </div></section>
  );
}

/* ── WORK ──────────────────────────────────────────────────── */
function Work() {
  const { t } = useLang();
  const items = [
    { img: workDumolin, name: 'DuMolin Community Living', chip: t('Care facilities · Santa Rosa', 'Centros de cuidado · Santa Rosa') },
    { img: workCalegal, name: 'CA Legal Document Excellence', chip: t('Legal · lead-gen', 'Legal · generación de prospectos') },
    { img: workArpkd, name: 'ARPKD / CHF Alliance', chip: t('Nonprofit · national', 'Sin fines de lucro · nacional') },
    { img: workBayarea, name: 'Bay Area 2nd Mom', chip: t('Nanny agency', 'Agencia de niñeras') },
  ];
  return (
    <section className="nv-sec soft" id="work"><div className="nv-wrap">
      <div className="nv-center rv">
        <div className="nv-kicker">{t('Our work', 'Nuestro trabajo')}</div>
        <h2 className="nv-h2">{t('Real builds, real results', 'Proyectos reales, resultados reales')}</h2>
        <p className="nv-lead">{t('A few businesses we’ve helped get found and get customers.', 'Algunos negocios que hemos ayudado a que los encuentren y consigan clientes.')}</p>
      </div>
      <div className="nv-work">
        {items.map((w, i) => (
          <div className={`nv-work-card rv d${i + 1}`} key={i}>
            <div className="nv-work-thumb"><div className="nv-work-bar"><i/><i/><i/></div><div className="nv-work-shot"><img src={w.img} alt={`${w.name} website by Nuvion Solutions`} loading="lazy" /></div></div>
            <div className="nv-work-meta"><h4>{w.name}</h4><span className="nv-chip">{w.chip}</span></div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <Link to="/work" className="nv-btn nv-btn-primary">{t('View all our work', 'Ve todo nuestro trabajo')} <Arrow /></Link>
      </div>
    </div></section>
  );
}

/* ── REVIEWS WALL ──────────────────────────────────────────────
   Data-driven. Shows one featured quote today; becomes a full wall the
   moment you add more. ➜ TO ADD A REAL GOOGLE REVIEW: copy an object into
   REVIEWS below (en/es quote, name, role, 2-letter initials). Keep them REAL. */
const REVIEWS = [
  {
    en: 'Nuvion exceeded my expectations. Quick turnaround, easy access to the site, and — most importantly — they designed exactly what I had in mind.',
    es: 'Nuvion superó mis expectativas. Entrega rápida, acceso fácil al sitio y — lo más importante — diseñaron exactamente lo que tenía en mente.',
    name: 'Angela Ames', roleEn: 'Web Design Client', roleEs: 'Cliente de diseño web', initials: 'AA',
  },
  // { en: '…', es: '…', name: 'Real Name', roleEn: 'Business · Town', roleEs: 'Negocio · Pueblo', initials: 'RN' },
];

function Testimonials() {
  const { t } = useLang();
  const wall = REVIEWS.length >= 2;
  return (
    <section className="nv-reviews" id="reviews"><div className="nv-wrap">
      <div className="nv-center rv" style={{ marginBottom: wall ? 34 : 0 }}>
        <div className="nv-kicker" style={{ color: '#9cc0ff' }}>{t('In their words', 'En sus palabras')}</div>
        {wall && <h2 className="nv-h2" style={{ color: '#fff' }}>{t('Loved by the local owners we build for', 'Querido por los dueños locales para los que construimos')}</h2>}
      </div>
      {wall ? (
        <div className="nv-rev-grid">
          {REVIEWS.map((r, i) => (
            <div className="nv-rev-card rv" key={i} style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="nv-stars">★★★★★</div>
              <p>“{t(r.en, r.es)}”</p>
              <div className="who"><div className="av">{r.initials}</div><div className="nm"><b>{r.name}</b><span>{t(r.roleEn, r.roleEs)}</span></div></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="nv-quote rv">
          <div className="mk">“</div>
          <p>{t(REVIEWS[0].en, REVIEWS[0].es)}</p>
          <div className="nv-stars" style={{ fontSize: '1.2rem' }}>★★★★★</div>
          <div className="who" style={{ marginTop: '16px' }}>
            <div className="av">{REVIEWS[0].initials}</div>
            <div className="nm"><b>{REVIEWS[0].name}</b><span>{t(REVIEWS[0].roleEn, REVIEWS[0].roleEs)}</span></div>
          </div>
        </div>
      )}
    </div></section>
  );
}

/* ── TEAM ──────────────────────────────────────────────────── */
function Team() {
  const { t } = useLang();
  const members = [
    { photo: davidPhoto, name: 'David Prudhomme', role: t('Co-founder · Design & Delivery', 'Cofundador · Diseño y entrega'), bio: t('Your main point of contact — designs, builds, and stays with you long after launch.', 'Tu punto de contacto principal — diseña, construye y se queda contigo mucho después del lanzamiento.'), to: '/david' },
    { photo: jaedenPhoto, name: 'Jaeden Callender', role: t('Co-founder · Client Success', 'Cofundador · Éxito del cliente'), bio: t('Makes sure every client gets exactly what they need, exactly when they need it.', 'Se asegura de que cada cliente reciba justo lo que necesita, justo cuando lo necesita.'), to: '/jaeden' },
  ];
  return (
    <section className="nv-sec soft" id="team"><div className="nv-wrap">
      <div className="nv-center rv">
        <div className="nv-kicker">{t('Who you’ll work with', 'Con quién trabajarás')}</div>
        <h2 className="nv-h2">{t('Built by people who actually answer', 'Hecho por personas que de verdad responden')}</h2>
      </div>
      <div className="nv-team">
        {members.map((m, i) => (
          <div className={`nv-mem rv d${i + 1}`} key={i}>
            <img src={m.photo} alt={m.name} loading="lazy" width="76" height="76" />
            <div>
              <div className="role">{m.role}</div>
              <h4>{m.name}</h4>
              <p>{m.bio}</p>
              <Link to={m.to} style={{ color: 'var(--brand-strong)', fontWeight: 700, fontSize: '.86rem', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '10px' }}>{t('Meet', 'Conoce a')} {m.name.split(' ')[0]} <Arrow /></Link>
            </div>
          </div>
        ))}
      </div>
    </div></section>
  );
}

/* ── GUARANTEE BAND ────────────────────────────────────────── */
function GuaranteeBand() {
  const { t } = useLang();
  return (
    <section className="nv-guar"><div className="nv-wrap">
      <div className="nv-guar-card rv">
        <div className="nv-guar-badge">{t('⚡ Our guarantee', '⚡ Nuestra garantía')}</div>
        <h2>{t(<>Your website live in <em>1 week</em> — or you don't pay.</>, <>Tu sitio web en vivo en <em>1 semana</em> — o no pagas.</>)}</h2>
        <p>{t("We're that confident. Once we have your content, your custom site goes live within one week. If we miss it, it's on us — you don't pay a cent.", 'Estamos así de seguros. En cuanto tengamos tu contenido, tu sitio personalizado sale en vivo dentro de una semana. Si no lo logramos, corre por nuestra cuenta — no pagas ni un centavo.')}</p>
        <Link to="/book" className="nv-btn nv-btn-white nv-btn-lg">{t('Start my 1-week build', 'Empieza mi sitio en 1 semana')} <Arrow /></Link>
        <div className="nv-guar-sub">{t('You approve before you pay · You own everything · Written quote first', 'Apruebas antes de pagar · Todo es tuyo · Cotización por escrito primero')}</div>
      </div>
    </div></section>
  );
}

/* ── COMPARISON (old way vs Nuvion) ────────────────────────── */
function Compare() {
  const { t } = useLang();
  const bad = [
    ['🤖', t('A chatbot or a ticket queue — you never reach a person', 'Un chatbot o una fila de tickets — nunca hablas con una persona')],
    ['🧩', t('A template the AI generated, with your logo dropped on top', 'Una plantilla que generó la IA, con tu logo encima')],
    ['👋', t('Gone the moment your site launches', 'Desaparecen apenas se lanza tu sitio')],
    ['🔒', t('You rent it forever — stop paying and it vanishes', 'Lo rentas para siempre — dejas de pagar y desaparece')],
    ['🌍', t('Offshore and anonymous — they never actually met you', 'En el extranjero y anónimos — nunca te conocieron')],
  ];
  const good = [
    ['💬', t('One real person who knows your name and answers same-day', 'Una persona real que sabe tu nombre y responde el mismo día')],
    ['🎨', t('Your exact vision — designed with you, one-on-one, and built by hand', 'Tu visión exacta — diseñada contigo, uno a uno, y construida a mano')],
    ['🤝', t('A long-term partner — text us in two years, we’re still here', 'Un aliado a largo plazo — escríbenos en dos años, seguimos aquí')],
    ['🔑', t('You own it — no rent-forever, no lock-in', 'Es tuyo — sin renta eterna, sin ataduras')],
    ['📍', t('Local in Sonoma County — we’ll meet you in person', 'Locales en Sonoma County — nos vemos en persona')],
  ];
  return (
    <section className="nv-sec soft"><div className="nv-wrap">
      <div className="nv-center rv"><div className="nv-kicker">{t('The Nuvion difference', 'La diferencia Nuvion')}</div><h2 className="nv-h2">{t('Most agencies hand you a bot and a template. We hand you a partner.', 'La mayoría de las agencias te entregan un bot y una plantilla. Nosotros te entregamos un aliado.')}</h2></div>
      <div className="nv-vs">
        <div className="nv-vs-col bad rv">
          <div className="nv-vs-lab">{t('Most AI web agencies', 'La mayoría de las agencias de IA')}</div>
          {bad.map(([ic, txt], i) => <div className="nv-vs-row" key={i}><span className="nv-vs-ico">{ic}</span>{txt}</div>)}
        </div>
        <div className="nv-vs-mid rv"><div className="nv-vs-pill">VS</div></div>
        <div className="nv-vs-col good rv">
          <div className="nv-vs-lab">{t('Working with Nuvion', 'Con Nuvion')}</div>
          {good.map(([ic, txt], i) => <div className="nv-vs-row" key={i}><span className="nv-vs-ico">{ic}</span>{txt}</div>)}
        </div>
      </div>
    </div></section>
  );
}

/* ── FREE AUDIT OFFER ──────────────────────────────────────── */
function FreeAudit() {
  const { t } = useLang();
  const items = [
    { t: t('Design & first impression', 'Diseño y primera impresión'), d: t('Does your site build trust in the first 3 seconds?', '¿Tu sitio genera confianza en los primeros 3 segundos?') },
    { t: t('Speed & mobile', 'Velocidad y móvil'), d: t('Where slow load times are quietly losing you customers.', 'Dónde los tiempos de carga lentos te están costando clientes en silencio.') },
    { t: t('Google visibility', 'Visibilidad en Google'), d: t('Whether local customers can actually find you.', 'Si los clientes locales de verdad pueden encontrarte.') },
    { t: t('Lead capture', 'Captura de prospectos'), d: t('How well your site turns visitors into calls and bookings.', 'Qué tan bien tu sitio convierte visitantes en llamadas y reservas.') },
  ];
  return (
    <section className="nv-audit"><div className="nv-wrap">
      <div className="nv-audit-card rv">
        <div className="lead">
          <span className="nv-eyebrow"><span className="dot" />{t('Free · 60 seconds · no obligation', 'Gratis · 60 segundos · sin compromiso')}</span>
          <h2>{t('Not sure what you need? Get an instant plan.', '¿No sabes qué necesitas? Recibe un plan al instante.')}</h2>
          <p>{t("Answer a few quick questions and we'll show you exactly what we'd build for you — website, custom features, integrations & automations — with an honest estimate. Free, yours to keep, whether you hire us or not.", 'Responde unas preguntas rápidas y te mostramos exactamente lo que construiríamos para ti — sitio web, funciones a medida, integraciones y automatizaciones — con un estimado honesto. Gratis, es tuyo, nos contrates o no.')}</p>
          <Link to="/plan" className="nv-btn nv-btn-primary nv-btn-lg">{t('Get my instant plan', 'Recibe mi plan al instante')} <Arrow /></Link>
        </div>
        <div className="nv-audit-list">
          {items.map((it, i) => (
            <div className="it" key={i}><Check /><span><b>{it.t}</b><small>{it.d}</small></span></div>
          ))}
        </div>
      </div>
    </div></section>
  );
}

/* ── THE NUVION PROMISE ────────────────────────────────────── */
function NuvionPromise() {
  const { t } = useLang();
  const items = [
    [t('You’ll always talk to a real person', 'Siempre hablarás con una persona real'), t('Never a bot, never a ticket queue — you get us, same-day, every time.', 'Nunca un bot ni una fila de tickets — nos tienes a nosotros, el mismo día, siempre.')],
    [t('We build your exact vision', 'Construimos tu visión exacta'), t('We sit down with you one-on-one and turn your ideas into something real you can see — then refine until it’s exactly right.', 'Nos sentamos contigo uno a uno y convertimos tus ideas en algo real que puedes ver — y lo ajustamos hasta que quede perfecto.')],
    [t('We don’t disappear', 'No desaparecemos'), t('We’re your web partner for the long haul — text us in two years and we’re still here.', 'Somos tu aliado web a largo plazo — escríbenos en dos años y seguimos aquí.')],
    [t('You own everything, forever', 'Todo es tuyo, para siempre'), t('Your site, your files, your domain — yours to keep. No rentals, no lock-in.', 'Tu sitio, tus archivos, tu dominio — para quedártelos. Sin rentas, sin ataduras.')],
  ];
  return (
    <section className="nv-promise"><div className="nv-wrap">
      <div className="nv-promise-card rv">
        <div className="nv-promise-head">
          <div className="nv-kicker">{t('Our promise to you', 'Nuestra promesa para ti')}</div>
          <h2 className="nv-h2">{t('The Nuvion Promise', 'La Promesa Nuvion')}</h2>
          <p className="nv-lead">{t('Anyone can generate a website. Here’s what a generator never will:', 'Cualquiera puede generar un sitio web. Esto es lo que un generador nunca hará:')}</p>
        </div>
        <div className="nv-promise-grid">
          {items.map(([h, d], i) => (
            <div className="nv-promise-item rv" key={i}><div className="nv-promise-n">{i + 1}</div><div><h4>{h}</h4><p>{d}</p></div></div>
          ))}
        </div>
        <div className="nv-promise-sign">— David &amp; Jaeden<span>Nuvion Solutions · Santa Rosa, CA</span></div>
      </div>
    </div></section>
  );
}

/* ── LOCAL BAND ────────────────────────────────────────────── */
function LocalBand() {
  const { t } = useLang();
  return (
    <section className="nv-local"><div className="nv-wrap">
      <div className="nv-local-card rv" style={{ backgroundImage: `url(${sonomaHills})` }}>
        <div className="nv-local-inner">
          <div className="nv-local-eyebrow">{t('📍 Proudly local', '📍 Orgullosamente locales')}</div>
          <h2>{t("Sonoma County's web design team.", 'El equipo de diseño web de Sonoma County.')}</h2>
          <p>{t("We're right here in Santa Rosa — real people you can actually meet, who know your market and answer the same day. When your business wins, our community wins.", 'Estamos aquí mismo en Santa Rosa — personas reales que puedes conocer en persona, que entienden tu mercado y responden el mismo día. Cuando tu negocio gana, nuestra comunidad gana.')}</p>
          <Link to="/book" className="nv-btn nv-btn-white">{t('Work with a local team', 'Trabaja con un equipo local')} <Arrow /></Link>
          <div className="nv-local-towns">
            <b>{t('Serving:', 'Servimos:')}</b>
            {Object.entries(LOCAL_TOWNS).map(([slug, name]) => (
              <Link key={slug} to={`/web-design/${slug}`}>{name}</Link>
            ))}
          </div>
        </div>
      </div>
    </div></section>
  );
}

/* ── FINAL CTA ─────────────────────────────────────────────── */
function FinalCta() {
  const { t } = useLang();
  return (
    <section className="nv-sec" id="contact"><div className="nv-wrap">
      <div className="nv-band rv">
        <h2>{t('Ready for a website that works as hard as you do?', '¿Listo para un sitio web que trabaje tan duro como tú?')}</h2>
        <p>{t('Book a free call. We’ll show you exactly what we’d build — no pressure, no jargon.', 'Reserva una llamada gratis. Te mostramos exactamente lo que construiríamos — sin presión, sin tecnicismos.')}</p>
        <Link to="/book" className="nv-btn nv-btn-white nv-btn-lg">{t('Book a Free Call', 'Reserva una llamada gratis')} <Arrow /></Link>
        <div className="sub">{t(<>⚡ Live in 1 week or you don't pay &nbsp;·&nbsp; or call / text <a className="tel" href="tel:+17075209179">(707) 520-9179</a></>, <>⚡ En vivo en 1 semana o no pagas &nbsp;·&nbsp; o llama / escribe <a className="tel" href="tel:+17075209179">(707) 520-9179</a></>)}</div>
      </div>
    </div></section>
  );
}

/* ── FOOTER ────────────────────────────────────────────────── */
function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <footer className="nv-foot"><div className="nv-wrap">
      <div className="nv-foot-grid">
        <div>
          <a href="#top" className="nv-logo" aria-label="Nuvion Solutions"><span className="mark">N</span><span className="wm"><b>NUVION</b><small>SOLUTIONS</small></span></a>
          <p className="tag">{t('On a mission to give every local business a website they’re proud of — new or redesigned, built by real people who actually answer and stay in your corner.', 'En una misión: darle a cada negocio local un sitio web del que se sienta orgulloso — nuevo o rediseñado, hecho por personas reales que sí responden y se quedan a tu lado.')}</p>
          <div className="con">
            <a href="mailto:team@nuvion-solutions.com">team@nuvion-solutions.com</a>
            <a href="tel:+17075209179">(707) 520-9179</a>
          </div>
        </div>
        <div className="links">
          <h5>{t('Services', 'Servicios')}</h5>
          <Link to="/services/web-design">{t('Websites', 'Sitios web')}</Link>
          <Link to="/services/custom-builds">{t('Custom Builds', 'Desarrollos a medida')}</Link>
          <Link to="/services/integrations">{t('Integrations & Automation', 'Integraciones y automatización')}</Link>
          <Link to="/services/seo-aso">{t('SEO', 'SEO')}</Link>
          <Link to="/services/social-media-ai">{t('Marketing', 'Marketing')}</Link>
          <Link to="/for-business">{t('For Business', 'Para empresas')}</Link>
          <Link to="/trades">{t('For Trades', 'Para oficios')}</Link>
        </div>
        <div className="links">
          <h5>{t('Company', 'Empresa')}</h5>
          <Link to="/work">{t('Our Work', 'Nuestro trabajo')}</Link>
          <Link to="/about">{t('About', 'Nosotros')}</Link>
          <Link to="/guides">{t('Guides', 'Guías')}</Link>
          <Link to="/book">{t('Book a Call', 'Reserva una llamada')}</Link>
        </div>
      </div>
      <div className="nv-foot-bot">
        <span>© {year} Nuvion Solutions. {t('All rights reserved.', 'Todos los derechos reservados.')}</span>
        <span className="leg"><Link to="/privacy">{t('Privacy Policy', 'Política de privacidad')}</Link><Link to="/terms">{t('Terms of Service', 'Términos de servicio')}</Link></span>
      </div>
    </div></footer>
  );
}

/* ── PAGE ──────────────────────────────────────────────────── */
export default function NuvionWebsite() {
  useReveal();
  return (
    <>
      <title>Web Design & SEO in Sonoma County | Nuvion Solutions</title>
      <meta name="description" content="Custom web design and SEO for Sonoma County businesses — beautiful, fast sites built and cared for by a real team that answers same-day. Book a free call." />
      <link rel="canonical" href="https://www.nuvion-solutions.com/" />
      <style dangerouslySetInnerHTML={{ __html: CSS + WALL_CSS + MCTA_CSS + LANG_CSS }} />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <LogoStrip />
        <Services />
        <HowItWorks />
        <GuaranteeBand />
        <Pricing />
        <CarePlans />
        <WhyUs />
        <Compare />
        <Stats />
        <Work />
        <Testimonials />
        <FreeAudit />
        <Team />
        <LocalBand />
        <FinalCta />
      </main>
      <Footer />
      <MobileCTA />
      <FloatingContact />
    </>
  );
}
