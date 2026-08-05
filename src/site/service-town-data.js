// Service landing-page content for "[service] in [town]" pages (e.g. /seo/petaluma).
// English only — the site translates to Spanish at render time.
// Keyed by URL slug. A React template combines each SERVICE (town-agnostic copy
// below) with unique per-town context, so field names must match exactly.
// Prose uses template literals so apostrophes never need escaping.
// The literal placeholder {town} is swapped for the town name at render time.
//
// Schema per service:
//   slug, name, metaLead, metaDescTpl, h1a, h1b, sub, lead,
//   benefits[3]{ h, p }, features[6], faqs[3]{ q, a }
//
// Nuvion facts stay accurate: a real Santa Rosa team; SEO, Marketing, and
// Automation are month to month with no long-term contract; custom builds are
// scoped per project with a written quote; you own your work; (707) 520-9179.

export const SERVICES = {
  seo: {
    slug: 'seo',
    name: `Local SEO`,
    metaLead: `Local SEO`,
    metaDescTpl: `Local SEO in {town} that lands you in Google's map pack and the "near me" results. Month to month, honest reporting, no long-term contract.`,
    h1a: `Get found by`,
    h1b: `customers on Google`,
    sub: `Rank in the map pack, win the "near me" searches, and turn your Google Business Profile into a steady source of {town} calls.`,
    lead: `When someone in {town} grabs their phone to search for what you sell, the businesses in Google's top results and map pack get the call — everyone else gets scrolled past. Local SEO earns you that spot with a dialed-in Google Business Profile, pages built around what {town} customers actually search for, steady reviews, and local citations that tell Google you're the real, nearby answer. We do the work in the open and report on it in plain English, so you always know what's moving and why. It's month to month with no long-term contract, so we have to earn your business every single month.`,
    benefits: [
      { h: `Show up in the map pack`, p: `We optimize your Google Business Profile and local signals so you land in the three-result map pack — the prime real estate {town} customers tap first when they search "near me."` },
      { h: `Turn reviews into ranking`, p: `A steady flow of genuine Google reviews builds the trust that both customers and Google's algorithm reward. We make asking easy and help you respond, so your reputation and your ranking climb together.` },
      { h: `Honest reporting, no contract`, p: `You get plain-English reports showing calls, clicks, and where you rank — no jargon, no smoke. It's month to month, so we keep proving our worth instead of hiding behind a long-term contract.` },
    ],
    features: [
      `Google Business Profile setup and optimization`,
      `Map pack and "near me" ranking`,
      `On-page SEO: titles, content, page speed`,
      `Local citations and directory listings`,
      `Review generation and response help`,
      `Plain-English monthly reporting`,
    ],
    faqs: [
      { q: `How long until I rank in {town}?`, a: `Local SEO is a build, not a switch — most businesses start seeing movement in the map pack and search results within a few months, with momentum compounding after that. The exact pace depends on how competitive your category is in {town} and where you're starting from. We show you progress every month so you're never guessing.` },
      { q: `What's the difference between this and Google Ads?`, a: `Ads buy you a spot at the top for as long as you keep paying; local SEO earns you a spot that keeps working after the work is done. Many {town} businesses run both — ads for instant visibility while SEO builds a durable, lower-cost stream of calls. We can help you weigh what fits your budget.` },
      { q: `Am I locked into a contract?`, a: `No. Our SEO is month to month with no long-term contract, because we'd rather earn your business with results than trap you in paperwork. You can adjust or pause whenever you need to. Call us at (707) 520-9179 and we'll talk through what makes sense for you.` },
    ],
  },

  marketing: {
    slug: 'marketing',
    name: `Marketing & Social`,
    metaLead: `Marketing & Social`,
    metaDescTpl: `Marketing and social for {town} businesses — posts, reviews, and follow-up that keep you in front of local customers. Month to month, no lock-in.`,
    h1a: `Keep`,
    h1b: `customers coming back`,
    sub: `Stay top of mind in {town} with consistent social posts, a steady stream of reviews, and follow-up that turns interest into repeat business.`,
    lead: `Getting found once isn't enough — {town} customers buy from the businesses they see and trust over time, which means showing up consistently long after they first discover you. Marketing and social is how you stay top of mind: fresh posts, a steady flow of reviews, seasonal promotions, and quick follow-up so leads don't slip through the cracks. The catch for most small businesses is time — nobody has hours a week to post, chase reviews, and answer every inquiry. We handle the pieces you want handled and leave the rest, all as optional add-ons you can start or stop month to month.`,
    benefits: [
      { h: `Stay in front of local customers`, p: `Consistent social posts and updates keep your business in the feeds and minds of {town} customers, so when they're finally ready to buy, you're the name they already recognize and trust.` },
      { h: `Build a reputation that sells`, p: `We make it easy to collect a steady flow of genuine reviews and help you respond to them, turning happy customers into the social proof that convinces the next one to choose you.` },
      { h: `Never drop a lead`, p: `Quick, friendly follow-up by email or text catches the people who reached out but weren't ready yet — the leads most businesses forget about and lose to a competitor who called back first.` },
    ],
    features: [
      `Social media posts and scheduling`,
      `Google and Facebook review requests`,
      `Reputation monitoring and responses`,
      `Email and text lead follow-up`,
      `Seasonal promotions and announcements`,
      `Fresh photos and content refreshes`,
    ],
    faqs: [
      { q: `Do I have to sign up for all of it?`, a: `Not at all. Marketing and social is a menu of optional add-ons — pick just reviews, just social posting, just lead follow-up, or the whole set. We tailor it to what {town} customers respond to and what you actually have budget for, and you can change the mix anytime.` },
      { q: `Will you post as my business?`, a: `Yes, in your voice and with your approval. We draft posts, promotions, and responses that sound like you, and you can review them first or hand us the reins entirely — whichever you prefer. The goal is a consistent presence without you living in your phone.` },
      { q: `Is this month to month?`, a: `It is — no long-term contract, ever. You can scale marketing up for a busy season and back down when things slow, and cancel whenever you like. We keep it flexible on purpose so it fits how a real {town} small business runs. Questions? Call (707) 520-9179.` },
    ],
  },

  automation: {
    slug: 'automation',
    name: `Integrations & Automation`,
    metaLead: `Integrations & Automation`,
    metaDescTpl: `Integrations and automation for {town} businesses — connect your CRM, calendar, payments, and forms so follow-up, reminders, and reviews run themselves.`,
    h1a: `Automate the busywork for`,
    h1b: `businesses`,
    sub: `Connect the CRM, calendar, payment, and form tools your {town} business already uses so they finally talk to each other — and the repetitive work runs itself.`,
    lead: `Most {town} businesses are quietly losing hours every week to busywork — copying leads from a form into a spreadsheet, texting appointment reminders by hand, chasing down reviews, and stitching reports together from three different tools. Integrations and automation fix that by connecting the software you already use — your CRM, calendar, payment processor, and web forms — so information flows between them without anyone retyping it. From there we automate the repetitive stuff: follow-up messages, reminders, review requests, and reporting that used to eat your afternoons. The result is simple — your tools finally talk to each other, and your team gets its time back.`,
    benefits: [
      { h: `Your tools finally talk`, p: `We connect the CRM, calendar, payment, and form tools you already rely on, so a new lead or booking flows everywhere it needs to go automatically — no more double entry or copy-paste between apps.` },
      { h: `Follow-up that runs itself`, p: `Automated reminders, thank-you messages, and review requests fire at exactly the right moment without anyone remembering to send them, so fewer {town} customers slip away and more leave a five-star review.` },
      { h: `Reporting on autopilot`, p: `Instead of piecing numbers together by hand, you get the reports and dashboards you care about built and refreshed automatically, so you can see how the business is doing at a glance.` },
    ],
    features: [
      `CRM, calendar, and payment integrations`,
      `Automated appointment reminders`,
      `Web form to CRM lead routing`,
      `Automatic review requests after a job`,
      `Scheduled reports and dashboards`,
      `Data sync that ends double entry`,
    ],
    faqs: [
      { q: `Will this work with the software I already use?`, a: `That's the whole point — we build around the tools you've already got instead of forcing you onto something new. If your CRM, calendar, booking, or payment apps can connect (most popular ones do), we can usually get them talking. Tell us your setup and we'll confirm what's possible before you commit.` },
      { q: `Is automation only for big companies?`, a: `No — small {town} businesses often benefit the most, because every hour saved is an hour you get back. Even a couple of simple automations, like reminders that cut no-shows or review requests that run themselves, pay for themselves quickly. We start with the busywork that's costing you the most.` },
      { q: `How is this billed?`, a: `Automation runs month to month with no long-term contract. There's a setup phase to connect and configure everything, then an ongoing monthly amount to keep it running and maintained. Call (707) 520-9179 and we'll scope your setup and give you clear numbers up front.` },
    ],
  },

  'custom-builds': {
    slug: 'custom-builds',
    name: `Custom Builds & Web Apps`,
    metaLead: `Custom Builds & Web Apps`,
    metaDescTpl: `Custom web apps for {town} businesses — online stores, booking systems, client portals, and dashboards, scoped per project with a written quote. You own it.`,
    h1a: `Build the app your`,
    h1b: `business needs`,
    sub: `When your {town} website needs to actually do something — take orders, book appointments, log clients in — we build it, scoped per project with a written quote.`,
    lead: `Sometimes a brochure site isn't enough — your {town} business needs the website to actually do something: take orders, book appointments, give clients a secure login, or show you a live dashboard of what's happening. That's a custom build, and it's a different animal from a standard site. Rather than a monthly plan, these projects are scoped individually: we map out exactly what you need, then hand you a written quote with a fixed price and timeline before any work starts. You end up with a tool built specifically for how your business runs — and you own it outright.`,
    benefits: [
      { h: `A site that does the work`, p: `Online stores, booking systems, client portals, dashboards — we build the functionality your {town} business actually needs, not another static page that just sits there looking pretty.` },
      { h: `Scoped with a written quote`, p: `Custom work deserves a clear plan, so we map out the features, price, and timeline and put it all in a written quote before we start — no open-ended hourly surprises and no scope creep you didn't agree to.` },
      { h: `Built to grow, and it's yours`, p: `We build on solid, maintainable foundations that can expand as your business does, and when it's finished it belongs to you — the code, the content, and the accounts, free and clear.` },
    ],
    features: [
      `Online stores and checkout`,
      `Booking and scheduling systems`,
      `Client and customer portals`,
      `Custom dashboards and reporting`,
      `Forms, calculators, and workflows`,
      `Fixed project scope and written quote`,
    ],
    faqs: [
      { q: `How much does a custom build cost?`, a: `Because every project is different, custom builds are priced per project rather than off a menu. Once we understand what your {town} business needs, we put a fixed price and timeline in a written quote so you know exactly what you're getting before you say yes. There are no surprise hourly bills.` },
      { q: `Can you add features to my existing website?`, a: `Often, yes. If your current site is built on a platform we can work with, we can bolt on a store, booking, portal, or dashboard without starting from scratch. If it can't support what you need, we'll tell you honestly and lay out the options in your quote.` },
      { q: `Do I own it when it's done?`, a: `Absolutely. Unlike platforms that hold your site hostage, a custom build is yours — you own the code, the content, and the logins outright. We can maintain it for you if you'd like, but you're never locked in. Call (707) 520-9179 to talk through your project.` },
    ],
  },
};
