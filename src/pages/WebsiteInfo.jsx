import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BASE_CSS } from './shared.js';
import nuvionLogo from '../assets/nuvion-logo.png';
import Footer, { FOOTER_CSS } from '../components/Footer.jsx';
import ironTall from '../assets/work/iron-river-tall.jpg';
import timberTall from '../assets/work/timberline-tall.jpg';
import cabanaTall from '../assets/work/blue-cabana-tall.jpg';
import sonomaTall from '../assets/work/sonoma-tall.jpg';

/* ─────────────────────────────────────────────────────────────
   /websites — the "send me the information" page.
   Texted to prospects who ask for "everything." The page sells
   websites, so the websites ARE the page: real builds glowing on
   phone screens, features annotated on a real fold, the process
   as a day-by-day rail. Spec-sheet honesty voice, showroom body.
   Signature interaction: page scroll scrubs the sites scrolling
   inside their phone frames.
───────────────────────────────────────────────────────────── */
const CSS = BASE_CSS + FOOTER_CSS + `
.w2{
  --bg0:#06080D;--bg1:#0A0E16;--bg2:#0F141F;
  --line:rgba(148,170,215,.11);--topline:rgba(255,255,255,.07);
  --ink:#EEF2F8;--mut:#98A4BC;--dim:#7C889F;
  --acc:#00DCFF;--amb:#F5B04B;--grn:#46E0A3;
  --disp:'Clash Display',var(--font);--bodyf:'Satoshi',var(--font);--mono:'JetBrains Mono',ui-monospace,monospace;
  font-family:var(--bodyf);background:var(--bg0);color:var(--ink);
}
.w2 ::selection{background:rgba(0,220,255,.28);color:#fff}
.w2 :focus-visible{outline:2px solid var(--acc);outline-offset:3px;border-radius:4px}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
.w2-skip{position:absolute;left:-9999px;top:0;z-index:200;background:var(--acc);color:#04121A;font-weight:700;padding:10px 18px;border-radius:0 0 10px 0}
.w2-skip:focus{left:0}

/* ── shared bones ── */
.w2-wrap{max-width:1160px;margin:0 auto;padding:0 clamp(20px,4vw,44px)}
.w2-sec{padding:clamp(72px,9vw,120px) 0}
.w2-band{background:var(--bg1);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.w2-kick{font-family:var(--mono);font-size:.72rem;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--acc);display:flex;align-items:center;gap:10px;margin-bottom:16px}
.w2-kick::before{content:'';width:22px;height:1px;background:var(--acc);opacity:.7}
.w2-h2{font-family:var(--disp);font-size:clamp(1.75rem,3.6vw,2.6rem);font-weight:600;letter-spacing:-.02em;line-height:1.06;text-wrap:balance;margin-bottom:14px}
.w2-sub{color:var(--mut);font-size:1rem;line-height:1.7;max-width:56ch}
.w2-sub strong{color:var(--ink);font-weight:700}

/* buttons */
.w2-btn{display:inline-flex;align-items:center;gap:9px;font-weight:700;font-size:.95rem;padding:15px 28px;border-radius:12px;background:var(--acc);color:#04121A;box-shadow:0 1px 0 rgba(255,255,255,.25) inset,0 8px 26px -8px rgba(0,220,255,.45);transition:transform .18s,box-shadow .18s,background .18s}
.w2-btn:hover{transform:translateY(-2px);background:#5FE8FF;box-shadow:0 1px 0 rgba(255,255,255,.3) inset,0 14px 34px -8px rgba(0,220,255,.55)}
.w2-btn:active{transform:translateY(0)}
.w2-btn-ghost{display:inline-flex;align-items:center;gap:9px;font-weight:700;font-size:.95rem;padding:15px 28px;border-radius:12px;border:1px solid var(--line);color:var(--ink);background:rgba(255,255,255,.02);transition:transform .18s,border-color .18s,background .18s}
.w2-btn-ghost:hover{transform:translateY(-2px);border-color:rgba(255,255,255,.22);background:rgba(255,255,255,.05)}

/* ── phone frame ── */
.w2-phone{position:relative;width:var(--phw,250px);aspect-ratio:390/812;border-radius:clamp(28px,calc(var(--phw,250px)*.15),44px);background:linear-gradient(180deg,#12171F,#0B0F16);border:1px solid rgba(255,255,255,.09);padding:calc(var(--phw,250px)*.032);box-shadow:0 1px 0 rgba(255,255,255,.08) inset,0 2px 8px rgba(2,6,14,.5),0 30px 70px -16px rgba(2,6,14,.75),0 0 90px -30px rgba(0,220,255,.14)}
/* notch: metrics keyed off phone WIDTH only (width% + aspect-ratio), so it stays correct whether --phw is a length or 100% */
.w2-phone::after{content:'';position:absolute;top:1.9%;left:50%;transform:translateX(-50%);width:30%;aspect-ratio:9/1;border-radius:100px;background:rgba(3,5,9,.92);box-shadow:0 0 0 1px rgba(255,255,255,.05)}
.w2-screen{position:relative;height:100%;border-radius:clamp(20px,calc(var(--phw,250px)*.12),34px);overflow:hidden;background:#10151F}
.w2-screen img{position:absolute;top:0;left:0;display:block;width:100%;height:auto;will-change:transform}

/* ── HERO ── */
.w2-hero{position:relative;overflow:hidden;padding:clamp(64px,8.5vw,116px) 0 0}
.w2-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(720px 420px at 72% 12%,rgba(0,220,255,.09),transparent 68%),radial-gradient(520px 380px at 8% 82%,rgba(79,110,247,.07),transparent 70%);pointer-events:none}
.w2-hero-grid{position:relative;display:grid;grid-template-columns:minmax(0,7fr) minmax(0,5fr);gap:clamp(28px,4vw,56px);align-items:center}
.w2-h1{font-family:var(--disp);font-size:clamp(2.7rem,6.4vw,4.7rem);font-weight:600;letter-spacing:-.028em;line-height:.98;text-wrap:balance;margin:0 0 20px}
.w2-h1 em{font-style:normal;color:var(--acc)}
.w2-lede{color:var(--mut);font-size:clamp(1rem,1.4vw,1.13rem);line-height:1.65;max-width:44ch;margin-bottom:30px}
.w2-lede strong{color:var(--ink);font-weight:700}
.w2-hero-cta{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:34px}
.w2-hero-spec{display:flex;gap:clamp(18px,2.4vw,32px);border-top:1px solid var(--line);padding-top:64px;max-width:560px}
.w2-hero-spec div{flex:1;min-width:0;padding-left:14px;border-left:1px solid rgba(0,220,255,.35)}
.w2-hero-spec b{display:block;font-family:var(--disp);font-size:1.3rem;font-weight:600;letter-spacing:-.01em;font-variant-numeric:tabular-nums;line-height:1}
.w2-hero-spec span{display:block;font-family:var(--mono);font-size:.62rem;letter-spacing:.13em;text-transform:uppercase;color:var(--dim);margin-top:6px}
/* fanned deck of real builds */
.w2-deck{position:relative;height:clamp(400px,36vw,560px);--phw:clamp(180px,17vw,246px);margin-bottom:-72px;z-index:2}
.w2-deck .w2-phone{position:absolute;top:0;left:50%}
.w2-deck-a{transform:translateX(-108%) rotate(-7deg) scale(.9);z-index:1}
.w2-deck-b{transform:translateX(-50%) rotate(2.5deg);z-index:3}
.w2-deck-c{transform:translateX(9%) rotate(8deg) scale(.86);z-index:2}
.w2-deck-note{position:absolute;bottom:6px;left:50%;transform:translateX(-50%);z-index:5;font-family:var(--mono);font-size:.62rem;letter-spacing:.14em;text-transform:uppercase;color:var(--dim);white-space:nowrap}
@media(prefers-reduced-motion:no-preference){
  /* float via the compositor-only translate property (independent of the base transform) — animating margin/top forces a layout reflow every frame and looks jerky */
  .w2-deck-b{animation:w2float 7s ease-in-out infinite alternate;will-change:translate}
  .w2-deck-a{animation:w2float 8s .6s ease-in-out infinite alternate;will-change:translate}
  .w2-deck-c{animation:w2float 9s 1.1s ease-in-out infinite alternate;will-change:translate}
  @keyframes w2float{from{translate:0 0}to{translate:0 -12px}}
}

/* ── PROOF RAIL ── */
.w2-work{position:relative;padding-top:clamp(110px,12vw,150px)}
.w2-work-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:clamp(32px,4vw,48px)}
.w2-work-link{font-family:var(--mono);font-size:.78rem;letter-spacing:.1em;color:var(--acc);white-space:nowrap;padding-bottom:6px;border-bottom:1px solid rgba(0,220,255,.35);transition:border-color .18s,color .18s}
.w2-work-link:hover{color:#5FE8FF;border-color:#5FE8FF}
.w2-work-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(18px,2.4vw,30px)}
.w2-card{--phw:100%;display:block;border-radius:26px;padding:clamp(14px,1.6vw,20px);background:var(--bg2);border:1px solid var(--line);box-shadow:0 1px 0 var(--topline) inset;transition:transform .22s cubic-bezier(.16,1,.3,1),border-color .22s,box-shadow .22s}
.w2-card:hover{transform:translateY(-6px);border-color:rgba(0,220,255,.3);box-shadow:0 1px 0 var(--topline) inset,0 24px 50px -18px rgba(2,6,14,.8),0 0 60px -24px rgba(0,220,255,.25)}
.w2-card .w2-phone{width:100%;margin:0 auto}
.w2-card-meta{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:16px 6px 4px}
.w2-card-meta b{font-size:.92rem;font-weight:700;letter-spacing:-.01em}
.w2-card-meta span{display:block;font-family:var(--mono);font-size:.64rem;letter-spacing:.14em;text-transform:uppercase;color:#7C89A1;margin-top:4px}
.w2-card-arrow{flex-shrink:0;width:34px;height:34px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;color:var(--mut);font-size:.85rem;transition:all .2s}
.w2-card:hover .w2-card-arrow{background:var(--acc);border-color:var(--acc);color:#04121A;transform:rotate(-45deg)}
.w2-work-note{margin-top:22px;font-family:var(--mono);font-size:.72rem;letter-spacing:.06em;color:var(--dim);line-height:1.8}

/* ── INCLUDED / annotated device ── */
.w2-inc-grid{display:grid;grid-template-columns:minmax(0,6fr) minmax(0,5fr);gap:clamp(36px,5vw,72px);align-items:center}
.w2-spec{margin-top:34px;border-top:1px solid var(--line)}
.w2-spec-row{display:grid;grid-template-columns:44px 1fr;gap:14px;padding:17px 4px;border-bottom:1px solid var(--line);align-items:baseline}
.w2-spec-row i{font-style:normal;font-family:var(--mono);font-size:.72rem;color:var(--dim);letter-spacing:.08em}
.w2-spec-row b{display:block;font-size:.96rem;font-weight:700;letter-spacing:-.01em;margin-bottom:3px}
.w2-spec-row span{font-size:.86rem;color:var(--mut);line-height:1.55;display:block;max-width:52ch}
.w2-inc-stage{position:relative;display:flex;justify-content:center;--phw:clamp(210px,19vw,264px);padding:30px 0}
.w2-inc-caption{margin-top:8px;font-family:var(--mono);font-size:.64rem;letter-spacing:.13em;text-transform:uppercase;color:var(--dim);text-align:center}
.w2-chip{position:absolute;z-index:4;background:rgba(10,14,22,.92);backdrop-filter:blur(6px);border:1px solid rgba(0,220,255,.28);border-radius:12px;padding:10px 14px;box-shadow:0 12px 30px -10px rgba(2,6,14,.8)}
.w2-chip b{display:block;font-size:.8rem;font-weight:700;letter-spacing:-.005em;white-space:nowrap}
.w2-chip span{display:block;font-family:var(--mono);font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:var(--acc);margin-bottom:3px}
.w2-chip-1{top:13%;right:calc(50% + var(--phw)/2 - 34px)}
.w2-chip-2{top:43%;left:calc(50% + var(--phw)/2 - 34px)}
.w2-chip-3{top:72%;right:calc(50% + var(--phw)/2 - 34px)}

/* ── PROCESS RAIL ── */
.w2-proc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:clamp(20px,2.6vw,34px);position:relative;margin-top:clamp(36px,5vw,56px)}
.w2-proc-line{position:absolute;top:5px;left:0;right:0;height:1px;background:var(--line)}
.w2-proc-line i{position:absolute;inset:0;background:linear-gradient(90deg,var(--acc),rgba(0,220,255,.25));transform-origin:left;transform:scaleX(0)}
.w2-step{position:relative;padding-top:26px}
.w2-step::before{content:'';position:absolute;top:0;left:0;width:11px;height:11px;border-radius:50%;background:var(--bg0);border:2px solid var(--acc);box-shadow:0 0 14px rgba(0,220,255,.4)}
.w2-step i{font-style:normal;display:block;font-family:var(--mono);font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--acc);margin-bottom:10px}
.w2-step h3{font-family:var(--disp);font-size:1.22rem;font-weight:600;letter-spacing:-.015em;line-height:1.15;margin-bottom:8px}
.w2-step p{font-size:.88rem;color:var(--mut);line-height:1.6}
.w2-step p strong{color:var(--ink);font-weight:700}

/* ── PRICING ── */
.w2-price-head{text-align:center;max-width:640px;margin:0 auto}
.w2-price-head .w2-kick{justify-content:center}
.w2-price-head .w2-kick::after{content:'';width:22px;height:1px;background:var(--acc);opacity:.7}
.w2-toggle-row{display:flex;flex-direction:column;align-items:center;gap:10px;margin:34px 0 38px}
.w2-toggle{position:relative;display:inline-flex;background:var(--bg2);border:1px solid var(--line);border-radius:100px;padding:4px}
.w2-toggle::before{content:'';position:absolute;top:4px;bottom:4px;left:4px;width:calc(50% - 4px);border-radius:100px;background:var(--acc);transition:transform .28s cubic-bezier(.6,.1,.2,1.2)}
.w2-toggle.mo::before{transform:translateX(100%)}
.w2-toggle button{position:relative;z-index:1;border:none;cursor:pointer;font-family:var(--bodyf);font-size:.88rem;font-weight:700;padding:11px 26px;border-radius:100px;color:var(--mut);background:transparent;width:130px;transition:color .2s}
.w2-toggle button[aria-pressed="true"]{color:#04121A}
.w2-toggle-note{font-family:var(--mono);font-size:.7rem;letter-spacing:.08em;color:var(--dim)}
.w2-plans{max-width:660px;margin:0 auto}
.w2-plan{position:relative;background:var(--bg2);border:1px solid var(--line);border-radius:24px;padding:clamp(26px,3vw,36px);box-shadow:0 1px 0 var(--topline) inset;display:flex;flex-direction:column}
/* single merged package */
.w2-plan-top{text-align:center;padding-bottom:22px;margin-bottom:8px;border-bottom:1px solid var(--line)}
.w2-plan-solo .w2-price{margin-bottom:6px}
.w2-plan-solo .w2-price-alt{margin-top:0}
.w2-plan.w2-plan-solo ul{display:grid;grid-template-columns:1fr 1fr;gap:12px 28px;align-content:start}
.w2-plan.hot{border-color:rgba(0,220,255,.32);background:linear-gradient(180deg,rgba(0,220,255,.06),var(--bg2) 42%);box-shadow:0 1px 0 rgba(255,255,255,.1) inset,0 0 70px -26px rgba(0,220,255,.3)}
.w2-tag{position:absolute;top:-12px;left:clamp(26px,3vw,36px);font-family:var(--mono);font-size:.62rem;font-weight:500;letter-spacing:.16em;text-transform:uppercase;background:var(--acc);color:#04121A;border-radius:100px;padding:6px 13px;white-space:nowrap}
.w2-plan-name{font-family:var(--mono);font-size:.74rem;letter-spacing:.18em;text-transform:uppercase;color:var(--mut);margin-bottom:14px}
.w2-price{font-family:var(--disp);font-size:clamp(2.7rem,4.6vw,3.7rem);font-weight:600;letter-spacing:-.03em;line-height:1;font-variant-numeric:tabular-nums;animation:w2pricein .32s cubic-bezier(.16,1,.3,1)}
.w2-price span{font-family:var(--bodyf);font-size:1rem;font-weight:600;color:var(--mut);letter-spacing:0}
@keyframes w2pricein{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@media(prefers-reduced-motion:reduce){.w2-price{animation:none}}
.w2-price-alt{font-family:var(--mono);font-size:.72rem;letter-spacing:.05em;color:var(--dim);margin-top:9px;min-height:18px}
.w2-plan ul{list-style:none;margin:22px 0 0;display:flex;flex-direction:column;gap:11px}
.w2-plan li{font-size:.9rem;color:var(--mut);line-height:1.5;padding-left:24px;position:relative}
.w2-plan li::before{content:'✓' / '';position:absolute;left:0;top:0;color:var(--grn);font-weight:800;font-size:.8rem}
.w2-plan li strong{color:var(--ink);font-weight:700}
.w2-plan li.plus{color:var(--ink);font-weight:700}
.w2-plan li.plus::before{content:'+' / '';color:var(--acc);font-size:1rem;top:-2px}
.w2-quote-note{text-align:center;font-family:var(--mono);font-size:.72rem;letter-spacing:.06em;color:var(--dim);margin-top:26px;line-height:1.8}
.w2-quote-note strong{color:var(--mut);font-weight:500}

/* ── AFTER LAUNCH ── */
.w2-after{display:grid;grid-template-columns:repeat(3,1fr);gap:clamp(16px,2vw,24px);margin-top:clamp(30px,4vw,44px)}
.w2-after-card{background:var(--bg1);border:1px solid var(--line);border-radius:20px;padding:24px 26px;box-shadow:0 1px 0 var(--topline) inset}
.w2-after-card i{font-style:normal;display:block;font-family:var(--mono);font-size:.66rem;letter-spacing:.16em;text-transform:uppercase;color:var(--acc);margin-bottom:12px}
.w2-after-card h3{font-family:var(--disp);font-size:1.18rem;font-weight:600;letter-spacing:-.01em;margin-bottom:9px}
.w2-after-card p{font-size:.87rem;color:var(--mut);line-height:1.65}
.w2-after-card p strong{color:var(--ink);font-weight:700}
.w2-honest{margin-top:clamp(28px,4vw,40px);border:1px dashed rgba(245,176,75,.45);background:rgba(245,176,75,.045);border-radius:18px;padding:clamp(24px,3vw,32px);transform:rotate(-.35deg)}
.w2-honest i{font-style:normal;display:block;font-family:var(--mono);font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:var(--amb);margin-bottom:10px}
.w2-honest p{font-size:.95rem;color:var(--mut);line-height:1.7;max-width:66ch}
.w2-honest strong{color:var(--ink)}
.w2-honest a{color:var(--amb);border-bottom:1px solid rgba(245,176,75,.4)}
.w2-honest a:hover{border-color:var(--amb)}

/* ── FAQ ── */
.w2-faq{max-width:760px;margin:clamp(28px,4vw,40px) auto 0;border-top:1px solid var(--line)}
.w2-faq details{border-bottom:1px solid var(--line)}
.w2-faq summary{cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;gap:18px;padding:21px 4px;font-size:1.02rem;font-weight:700;letter-spacing:-.01em;transition:color .18s}
.w2-faq summary::-webkit-details-marker{display:none}
.w2-faq summary:hover{color:var(--acc)}
.w2-faq summary::after{content:'+' / '';flex-shrink:0;width:30px;height:30px;border:1px solid var(--line);border-radius:50%;display:grid;place-items:center;font-weight:400;font-size:1.1rem;color:var(--mut);transition:transform .25s,background .2s,color .2s}
.w2-faq details[open] summary::after{transform:rotate(45deg);background:var(--acc);border-color:var(--acc);color:#04121A}
.w2-faq details p{padding:0 40px 22px 4px;font-size:.93rem;color:var(--mut);line-height:1.7;max-width:64ch}

/* ── CTA ── */
.w2-cta{text-align:center;position:relative;overflow:hidden}
.w2-cta::before{content:'';position:absolute;inset:0;background:radial-gradient(560px 300px at 50% 0%,rgba(0,220,255,.09),transparent 70%);pointer-events:none}
.w2-cta h2{font-family:var(--disp);font-size:clamp(2.2rem,5vw,3.4rem);font-weight:600;letter-spacing:-.025em;margin-bottom:16px}
.w2-cta .w2-sub{margin:0 auto 30px;max-width:46ch}
/* two ways to start: a real "book a call" button, then an "or reply to the text" instruction */
.w2-cta-two{display:flex;flex-direction:column;align-items:center;gap:20px;max-width:460px;margin:0 auto}
.w2-btn-lg{font-size:1.02rem;padding:17px 34px}
.w2-cta-or{display:flex;align-items:center;gap:12px;font-family:var(--mono);font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--dim)}
.w2-cta-or::before,.w2-cta-or::after{content:'';width:40px;height:1px;background:var(--line)}
/* reply bubble — a real-world instruction styled as a text message (not a clickable button, because the sending number isn't knowable client-side) */
.w2-reply{position:relative;width:100%;text-align:left;background:linear-gradient(180deg,#12303A,#0E2730);border:1px solid rgba(0,220,255,.28);border-radius:20px 20px 20px 6px;padding:20px 24px;box-shadow:0 1px 0 rgba(255,255,255,.08) inset,0 18px 44px -18px rgba(0,220,255,.35)}
.w2-reply-tag{font-family:var(--mono);font-size:.62rem;letter-spacing:.16em;text-transform:uppercase;color:var(--acc);margin-bottom:8px}
.w2-reply-line{font-family:var(--disp);font-size:clamp(1.35rem,3.2vw,1.75rem);font-weight:600;letter-spacing:-.02em;line-height:1.15;color:var(--ink)}
.w2-reply-line b{color:var(--acc);font-weight:600}
.w2-reply-sub{margin-top:8px;font-size:.86rem;color:var(--mut);line-height:1.5}

/* grain — desktop only, cheap opacity compositing */
.w2-grain{position:fixed;inset:0;z-index:60;pointer-events:none;opacity:.045;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")}

/* ── responsive ── */
@media(max-width:1020px){
  .w2-work-grid{grid-template-columns:repeat(2,1fr)}
  .w2-proc-grid{grid-template-columns:repeat(2,1fr);row-gap:40px}
  .w2-proc-line{display:none}
}
@media(max-width:860px){
  .w2-grain{display:none}
  .w2-hero-grid{grid-template-columns:1fr;gap:10px}
  .w2-h1{font-size:clamp(2.4rem,10.5vw,3.2rem)}
  .w2-deck{--phw:clamp(150px,40vw,190px);height:clamp(370px,102vw,440px);margin-bottom:-56px;margin-top:22px}
  .w2-deck-a{transform:translateX(-103%) rotate(-8deg) scale(.88)}
  .w2-deck-c{transform:translateX(4%) rotate(9deg) scale(.84)}
  .w2-inc-grid{grid-template-columns:1fr;gap:20px}
  .w2-inc-stage{--phw:clamp(190px,52vw,230px);padding:16px 0 8px;flex-direction:column;align-items:center;gap:10px}
  .w2-inc-stage .w2-phone{margin-bottom:10px}
  .w2-chip{position:static}
  .w2-after{grid-template-columns:1fr}
  .w2-work-head{flex-direction:column;align-items:flex-start;gap:8px}
}
@media(max-width:640px){
  .w2-work-grid{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;gap:14px;margin:0 -20px;padding:4px 20px 18px;scrollbar-width:none}
  .w2-work-grid::-webkit-scrollbar{display:none}
  .w2-card{flex:0 0 68vw;scroll-snap-align:center}
  .w2-proc-grid{grid-template-columns:1fr;row-gap:34px}
  .w2-plan.w2-plan-solo ul{grid-template-columns:1fr}
  .w2-faq details p{padding-right:8px}
}
`;

const WORK = [
  { img: sonomaTall, name: 'Floors for Sonoma', href: 'https://floors-for-sonoma.vercel.app/', alt: 'Warm editorial flooring-studio homepage design, mobile view' },
  { img: ironTall, name: 'Iron River Plumbing', href: 'https://websites.nuvion-solutions.com/iron-river-plumbing', alt: 'Retro-Americana plumbing homepage design, mobile view' },
  { img: timberTall, name: 'Timberline Tree Service', href: 'https://websites.nuvion-solutions.com/timberline-tree-service', alt: 'Dark dramatic forest tree-service homepage design, mobile view' },
  { img: cabanaTall, name: 'Blue Cabana Pool Care', href: 'https://websites.nuvion-solutions.com/blue-cabana-pools', alt: 'Retro Palm-Springs resort pool-care homepage design, mobile view' },
];

const SPECS = [
  ['Built from your real business', 'Your reviews, your jobs, your towns, your photos — gathered before we write a line of code. No two come out the same.'],
  ['Local SEO — set up + updated monthly, free', 'Google understands what you do and where you do it. Free monthly updates, always.'],
  ['Hosting + security included', 'Fast hosting and the padlock (SSL) — no “Not Secure” warning scaring people off.'],
  ['Lead capture', 'Quote requests land in your email the moment they’re sent.'],
  ['Your domain, handled', 'Use one you own or we set one up — you just cover the ~$15–20/yr registration.'],
];

const STEPS = [
  ['Today', 'Text “go” — or just say you’re ready', 'To the number that sent you this page. That’s the whole first step — no form yet, no commitment.'],
  ['This week', 'Your details + a time', 'A quick 5-minute form so we build from your real business — then we pick a time together for me to show you the result.'],
  ['The walkthrough', 'I show you your site, live', 'We hop on a quick call and I walk you through the site I built for you, section by section — your questions answered on the spot.'],
  ['If you like it', 'We put it online', <>You approve a written quote and your site goes live. Then unlimited free tweaks for the first 7 days. <strong>Nothing’s owed until you say go.</strong></>],
];

const FAQS = [
  ['We already have a website.', 'Then compare it side by side with what we build — that’s the whole test. Pull both up on your phone: which one loads faster, shows your reviews, and makes it easier to call? If yours wins, keep it, no hard feelings.'],
  ['I’m not a tech person.', 'You never touch anything. We build it, host it, secure it, and update it. Your only job is a 5-minute form and sending us photos of your work.'],
  ['Who owns the site?', 'Pay once and you do — design, files, domain, all of it, and you can host it anywhere. Go monthly and it’s a subscription — cancel anytime, and you can buy it out to own it outright whenever you want.'],
  ['How long does it take?', 'Days, not months. Plan on live inside a week of your onboarding form coming back.'],
  ['What do you need from me?', 'A 5-minute onboarding form, photos of your work if you have them, and your logo if you have one. That’s it — we pull the rest from what’s already public.'],
  ['What if I don’t like what you build?', 'Then you say no and owe nothing. We build it and walk you through it live — you only pay once you’ve seen it and want it online. There’s no deposit and no obligation to keep it. Worst case, you got a free look at what your site could be.'],
  ['What if I want changes later?', 'You get unlimited free revisions for the first 7 days after it goes live. After that: pay monthly and day-to-day updates are included (within reason); pay once and small text and photo swaps stay free — bigger work is quoted in writing before we touch it.'],
];

function Phone({ img, alt, scrub }) {
  return (
    <div className="w2-phone">
      <div className="w2-screen">
        <img src={img} alt={alt} loading="lazy" decoding="async" className={scrub ? 'w2-scrub' : undefined} />
      </div>
    </div>
  );
}

export default function WebsiteInfo() {
  const rootRef = useRef(null);
  const [billing, setBilling] = useState('onetime');
  const onetime = billing === 'onetime';

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let ctx, killed = false;
    (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (killed || !rootRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        // hero choreography
        gsap.timeline({ defaults: { ease: 'expo.out' } })
          .from('.w2-kick-hero', { y: 18, autoAlpha: 0, duration: .6 })
          .from('.w2-h1', { y: 34, autoAlpha: 0, duration: .9 }, .08)
          .from('.w2-lede, .w2-hero-cta, .w2-hero-spec', { y: 22, autoAlpha: 0, duration: .7, stagger: .07 }, .28)
          .from('.w2-deck .w2-phone', { y: 90, autoAlpha: 0, duration: 1.1, stagger: .1 }, .3);
        // section reveals
        gsap.utils.toArray('[data-rv]').forEach((el) => {
          gsap.from(el, {
            y: 26, autoAlpha: 0, duration: .75, ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          });
        });
        // signature: page scroll scrubs the sites inside their frames
        gsap.utils.toArray('.w2-scrub').forEach((img) => {
          const frame = img.closest('.w2-screen');
          const travel = () => Math.max(0, img.scrollHeight - frame.clientHeight);
          gsap.to(img, {
            y: () => -travel(), ease: 'none',
            scrollTrigger: { trigger: frame, start: 'top 95%', end: 'top 5%', scrub: .7, invalidateOnRefresh: true },
          });
        });
        // process rail line
        const line = document.querySelector('.w2-proc-line i');
        if (line) {
          gsap.to(line, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.w2-proc-grid', start: 'top 82%', end: 'bottom 55%', scrub: .5 } });
        }
      }, rootRef);
      // refresh scrub distances once lazy images arrive
      rootRef.current.querySelectorAll('.w2-scrub').forEach((img) => {
        if (!img.complete) img.addEventListener('load', () => { if (!killed) ScrollTrigger.refresh(); }, { once: true });
      });
    })().catch(() => { /* GSAP chunk failed to load — page stays fully functional without motion */ });
    return () => { killed = true; ctx?.revert(); };
  }, []);

  return (
    <div className="w2" ref={rootRef}>
      <Helmet>
        <title>Websites — See the Work, the Process, the Prices | Nuvion Solutions</title>
        <meta
          name="description"
          content="The full rundown on Nuvion Solutions websites: live examples you can tap through, what every build includes, both packages with exact prices, and how revisions work."
        />
        <link rel="canonical" href="https://nuvion-solutions.com/websites" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <a className="w2-skip" href="#w2-main">Skip to content</a>
      <div className="w2-grain" aria-hidden="true" />

      <nav className="sp-nav">
        <Link to="/" className="sp-logo"><img src={nuvionLogo} className="sp-logo-img" alt="Nuvion Solutions" /></Link>
        <a href="https://websites.nuvion-solutions.com" className="sp-back" target="_blank" rel="noopener noreferrer">See live examples →</a>
      </nav>

      <main id="w2-main">
        {/* HERO */}
        <header className="w2-hero">
          <div className="w2-wrap">
            <div className="w2-hero-grid">
              <div>
                <div className="w2-kick w2-kick-hero">The full rundown · no sales fluff</div>
                <h1 className="w2-h1">You asked for the info. <em>Here’s all of it.</em></h1>
                <p className="w2-lede">
                  What every site includes, both packages with <strong>exact prices</strong>, how changes work —
                  and real, tappable builds further down the page. <strong>Three minutes to read, start to finish.</strong>
                </p>
                <div className="w2-hero-cta">
                  <a className="w2-btn" href="#w2-pricing">See the prices <span aria-hidden="true">↓</span></a>
                  <Link to="/book" className="w2-btn-ghost">Book a 10-minute call</Link>
                </div>
                <div className="w2-hero-spec">
                  <div><b>2 ways</b><span>Pay once or monthly</span></div>
                  <div><b>$0</b><span>Owed before approval</span></div>
                  <div><b>7 days</b><span>Free revisions</span></div>
                </div>
              </div>
              <div className="w2-deck" aria-hidden="true">
                <div className="w2-phone w2-deck-a"><div className="w2-screen"><img src={ironTall} alt="" decoding="async" /></div></div>
                <div className="w2-phone w2-deck-b"><div className="w2-screen"><img src={timberTall} alt="" decoding="async" /></div></div>
                <div className="w2-phone w2-deck-c"><div className="w2-screen"><img src={cabanaTall} alt="" decoding="async" /></div></div>
                <span className="w2-deck-note">Demo sites — tap any below</span>
              </div>
            </div>
          </div>
        </header>

        {/* PROOF RAIL */}
        <section className="w2-band w2-work">
          <div className="w2-wrap">
            <div className="w2-work-head" data-rv>
              <div>
                <div className="w2-kick">The work</div>
                <h2 className="w2-h2">Don’t take our word for it.<br />Tap through the real thing.</h2>
                <p className="w2-sub">Keep scrolling — the sites scroll right inside the phones. Tap any one to open the full demo site.</p>
              </div>
              <a className="w2-work-link" href="https://websites.nuvion-solutions.com" target="_blank" rel="noopener noreferrer">Full portfolio ↗</a>
            </div>
            <div className="w2-work-grid">
              {WORK.map((w) => (
                <a className="w2-card" key={w.name} href={w.href} target="_blank" rel="noopener noreferrer" data-rv>
                  <Phone img={w.img} alt={w.alt} scrub />
                  <div className="w2-card-meta">
                    <div>
                      <b>{w.name}</b>
                      <span>Demo site</span>
                    </div>
                    <div className="w2-card-arrow" aria-hidden="true">→</div>
                  </div>
                </a>
              ))}
            </div>
            <p className="w2-work-note" data-rv>These are examples of our work — we don’t put live client sites on our portfolio, for obvious reasons.</p>
          </div>
        </section>

        {/* INCLUDED — annotated device */}
        <section className="w2-sec">
          <div className="w2-wrap">
            <div className="w2-inc-grid">
              <div data-rv>
                <div className="w2-kick">Standard equipment</div>
                <h2 className="w2-h2">Included with every build.</h2>
                <p className="w2-sub">Not add-ons. Not an upsell later. This is the floor.</p>
                <div className="w2-spec">
                  {SPECS.map(([t, d], i) => (
                    <div className="w2-spec-row" key={t}>
                      <i>0{i + 1}</i>
                      <div><b>{t}</b><span>{d}</span></div>
                    </div>
                  ))}
                </div>
              </div>
              <div data-rv>
                <div className="w2-inc-stage">
                  <Phone img={ironTall} alt="Mobile homepage design with one-tap calling and a reviews section" />
                  <div className="w2-chip w2-chip-1"><span>06</span><b>Mobile-first — designed here first</b></div>
                  <div className="w2-chip w2-chip-2"><span>07</span><b>One-tap calling, everywhere</b></div>
                  <div className="w2-chip w2-chip-3"><span>08</span><b>Your Google reviews, on the page</b></div>
                </div>
                <p className="w2-inc-caption">Shown on our Iron River demo site</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="w2-band w2-sec">
          <div className="w2-wrap">
            <div data-rv>
              <div className="w2-kick">The process</div>
              <h2 className="w2-h2">From a text to a live site. Days, not months.</h2>
              <p className="w2-sub">The whole chain, start to finish — and where the money does <strong>not</strong> change hands.</p>
            </div>
            <div className="w2-proc-grid">
              <div className="w2-proc-line" aria-hidden="true"><i /></div>
              {STEPS.map(([when, title, body], i) => (
                <div className="w2-step" key={title} data-rv>
                  <i>{`0${i + 1} · ${when}`}</i>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="w2-sec" id="w2-pricing">
          <div className="w2-wrap">
            <div className="w2-price-head" data-rv>
              <div className="w2-kick">The package</div>
              <h2 className="w2-h2">One complete build. Two ways to pay.</h2>
              <p className="w2-sub" style={{ margin: '0 auto' }}>Everything below, every time — no stripped-down tier. Pay once and own it outright, or keep it simple monthly.</p>
            </div>
            <div className="w2-toggle-row" data-rv>
              <div className={onetime ? 'w2-toggle' : 'w2-toggle mo'} role="group" aria-label="Payment option">
                <button aria-pressed={onetime} onClick={() => setBilling('onetime')}>Pay once</button>
                <button aria-pressed={!onetime} onClick={() => setBilling('monthly')}>Monthly</button>
              </div>
              <span className="w2-toggle-note">{onetime ? 'YOU OWN IT — FILES, DOMAIN, EVERYTHING' : 'EVERYTHING HANDLED · CANCEL ANYTIME'}</span>
            </div>
            <div className="w2-plans" aria-live="polite">
              <div className="w2-plan hot w2-plan-solo" data-rv>
                <div className="w2-plan-top">
                  <div className="w2-plan-name">Everything included</div>
                  <div className="w2-price" key={billing}>{onetime ? '$1,800' : <>$129<span>/mo</span></>}</div>
                  <div className="w2-price-alt">{onetime ? 'ONE-TIME — OR $129/MO' : 'PER MONTH — OR $1,800 ONCE, YOU OWN IT'}</div>
                </div>
                <ul>
                  <li>Full multi-section custom site — services, photo gallery, service area</li>
                  <li>A dedicated page for each service you offer</li>
                  <li>A page for every town you work — built to help you show up when that town searches</li>
                  <li>Mobile-first with one-tap calling</li>
                  <li>Your Google reviews on the page</li>
                  <li>Google Business Profile optimization</li>
                  <li>One-tap review link + printable QR card to grow your stars</li>
                  <li>Quote form — leads straight to your email</li>
                  <li>Hosting, security + domain handled</li>
                  <li>Local + on-page SEO — set up, updated monthly, free</li>
                  <li><strong>7 days of unlimited free revisions</strong></li>
                </ul>
              </div>
            </div>
            <p className="w2-quote-note" data-rv>THE PRICE YOU SEE IS THE PRICE — WE JUST PUT IT IN A <strong>WRITTEN QUOTE</strong> FIRST, SO IT’S IN WRITING BEFORE YOU OWE A CENT.</p>
          </div>
        </section>

        {/* AFTER LAUNCH */}
        <section className="w2-band w2-sec">
          <div className="w2-wrap">
            <div data-rv>
              <div className="w2-kick">After launch</div>
              <h2 className="w2-h2">Changes, ownership, and the exit door.</h2>
            </div>
            <div className="w2-after">
              <div className="w2-after-card" data-rv>
                <i>Days 1–7</i>
                <h3>Change anything</h3>
                <p><strong>Unlimited free revisions for the first 7 days after it goes live.</strong> Colors, photos, wording, layout — we keep tweaking until you’d show it off.</p>
              </div>
              <div className="w2-after-card" data-rv>
                <i>Day 8 onward</i>
                <h3>Still covered</h3>
                <p>Pay monthly and day-to-day updates are included, free (within reason — the agreement spells it out). Pay once and small text and photo swaps stay free — anything bigger gets a <strong>written quote first</strong>, so nothing ever costs money by surprise.</p>
              </div>
              <div className="w2-after-card" data-rv>
                <i>Any day</i>
                <h3>No trap doors</h3>
                <p>One-time: <strong>you own the site and the domain</strong>, full stop — and we keep hosting it free. Monthly: cancel anytime, no lock-in — or buy it out whenever; the buyout price goes in writing before you decide anything.</p>
              </div>
            </div>
            <div className="w2-honest" data-rv>
              <i>What we won’t promise you</i>
              <p>
                A guaranteed #1 spot on Google. <strong>Nobody can honestly promise that</strong> — anyone who does is selling you something.
                What we do promise: a site built and SEO’d properly — updated monthly, free — that makes you the easiest
                company in town to size up and call. The full plain-English terms are at{' '}
                <Link to="/agreement">nuvion-solutions.com/agreement</Link> — two minutes, no legal wall.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w2-sec">
          <div className="w2-wrap">
            <div className="w2-price-head" data-rv>
              <div className="w2-kick">Straight answers</div>
              <h2 className="w2-h2">The questions everyone asks.</h2>
            </div>
            <div className="w2-faq" data-rv>
              {FAQS.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w2-band w2-sec w2-cta">
          <div className="w2-wrap">
            <div data-rv>
              <h2>Seen enough?</h2>
              <p className="w2-sub">Two easy ways to get started — whichever’s simpler. No form here, no card, no commitment; you only decide once you’ve seen your site.</p>
              <div className="w2-cta-two">
                <Link to="/book" className="w2-btn w2-btn-lg">Book a call with us <span aria-hidden="true">→</span></Link>
                <div className="w2-cta-or">or</div>
                <div className="w2-reply">
                  <div className="w2-reply-tag">In the text thread that sent you this</div>
                  <div className="w2-reply-line"><b>Reply</b> to the message that sent you — just say you’re ready.</div>
                  <div className="w2-reply-sub">We’ll set a time, I’ll walk you through the site I built for you, and it only goes online if you love it.</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
