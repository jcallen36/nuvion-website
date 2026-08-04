// Industry landing-page content for the Nuvion Solutions website.
// English only — the site translates to Spanish at render time.
// Keyed by URL slug. A React template consumes these fields, so field
// names must match exactly. Prose uses template literals so apostrophes
// never need escaping.
//
// Schema per industry:
//   slug, name, metaTitle, metaDesc, h1a, h1b, sub, intro,
//   solves[3]{ h, p }, features[6], faqs[3]{ q, a }

export const INDUSTRIES = {
  restaurants: {
    slug: 'restaurants',
    name: 'Restaurants & Cafés',
    metaTitle: 'Restaurant Web Design in Sonoma County | Nuvion Solutions',
    metaDesc: `Restaurant websites for Sonoma County cafés and eateries — fast menus, online reservations, and mouthwatering photos that turn hungry searchers into diners.`,
    h1a: `Restaurant websites that`,
    h1b: `fill more tables`,
    sub: `A fast, appetizing site that shows your menu, takes reservations, and gets you found the moment a hungry local searches "near me."`,
    intro: `When someone in Santa Rosa or Petaluma is deciding where to eat tonight, they pull out their phone and search — and if your menu won't load or your hours are wrong, they scroll to the next spot. Most restaurant owners are stuck with a slow site, a menu trapped in a blurry PDF, and no way to take a booking after the kitchen closes. On top of that, third-party apps skim a fat cut of every order. Your website should be the one place diners can see today's menu, book a table, and order direct — fast, on any phone, without a middleman taking a bite.`,
    solves: [
      { h: `Get found by "near me" diners`, p: `Local SEO built around Santa Rosa, Petaluma, and your neighborhood puts you in front of hungry people searching right now — plus a Google Business setup that shows your hours, photos, and menu at a glance.` },
      { h: `Reservations and orders around the clock`, p: `Guests book a table or place a pickup order straight from your site at midnight or during the lunch rush, so you capture business even when the phone goes unanswered.` },
      { h: `Photos that make people hungry`, p: `Big, sharp shots of your best plates and your dining room do the selling before anyone walks in — the single biggest driver of "let's eat there" decisions.` },
    ],
    features: [
      `Easy-to-update online menu (no PDFs)`,
      `Online reservations and waitlist`,
      `Direct online ordering and pickup`,
      `Mobile-first, sub-2-second load speed`,
      `Google Business Profile and maps setup`,
      `Photo gallery and daily specials board`,
    ],
    faqs: [
      { q: `Can customers order directly from my website instead of a delivery app?`, a: `Yes. We can add direct online ordering for pickup so you keep the full ticket instead of handing 20-30% to a third-party app. It works on any phone, and orders come straight to you. Many owners use their site to steer regulars away from the apps entirely.` },
      { q: `How do I update the menu when prices or dishes change?`, a: `You get a simple editor to change items, prices, and daily specials yourself in minutes — no waiting on a developer. If you'd rather not touch it, just send us the changes and we'll handle them. Either way, your menu is always current instead of stuck in an outdated PDF.` },
      { q: `Will my site load fast enough for someone standing outside deciding where to eat?`, a: `That's exactly what we build for. Your site is optimized to load in under two seconds on a phone over cell data, so the menu and "book a table" button appear instantly. A slow site is the fastest way to lose a walk-in to the restaurant next door.` },
    ],
  },

  wineries: {
    slug: 'wineries',
    name: 'Wineries & Tasting Rooms',
    metaTitle: 'Winery & Tasting Room Web Design in Sonoma County | Nuvion Solutions',
    metaDesc: `Winery websites for Sonoma County tasting rooms — booked tastings, a thriving wine club, event listings, and allocation releases that sell out faster.`,
    h1a: `Winery websites that`,
    h1b: `pour year-round`,
    sub: `Turn visitors into tasting reservations, wine club members, and repeat buyers — with a site as refined as what's in the glass.`,
    intro: `In Sonoma County, your tasting room competes with hundreds of others for the same weekend visitor, and your website is the deciding factor long before anyone drives up the lane. Wine travelers plan ahead: they compare tasting experiences, check whether they need a reservation, and judge the whole estate by how your site looks and feels. Meanwhile your real revenue lives in the wine club and allocation releases, which too many wineries bury behind a clunky, generic page. Your site should book the tasting, grow the club, sell the release, and capture every email so a first-time guest becomes a lifelong member.`,
    solves: [
      { h: `Reservations that fill the tasting room`, p: `Guests reserve a flight, a private tasting, or a group visit online in seconds, with party size and time slots you control — so your weekends book up instead of relying on walk-ins.` },
      { h: `A wine club that grows itself`, p: `A polished club page that sells the perks and lets members sign up and manage shipments online turns one great visit into recurring revenue you can count on every quarter.` },
      { h: `Allocations and releases that sell out`, p: `Announce a new vintage or limited release, capture the waitlist, and let allocated members claim their bottles online before the wine ever hits the floor.` },
    ],
    features: [
      `Online tasting reservations by time slot`,
      `Wine club signup and member perks page`,
      `Allocation and new-release waitlists`,
      `Events calendar (harvest, pairings, live music)`,
      `Estate photo galleries and vineyard story`,
      `Email capture for release announcements`,
    ],
    faqs: [
      { q: `Can guests book tastings and private groups directly on the site?`, a: `Yes. We build a reservation flow tailored to your experiences — standard flights, reserve tastings, and larger groups — with the time slots and party sizes you set. It cuts down on phone tag and no-shows, and your weekends fill in advance. You stay in control of availability at all times.` },
      { q: `How do you handle the wine club and allocation releases?`, a: `We give the club its own persuasive page that spells out the tiers and perks, plus online signup so a great visit converts on the spot. For allocations, we can add waitlists and release announcements that notify members the moment new wine is available. It turns your best customers into a dependable, recurring base.` },
      { q: `Can I sell wine online, or does it only take reservations?`, a: `Both are possible. Many Sonoma wineries start with reservations, club signups, and release waitlists, then add direct wine sales and shipping once they're ready. We build the foundation so you can flip on e-commerce and club fulfillment when it fits your compliance and shipping setup, without rebuilding the site.` },
    ],
  },

  'real-estate': {
    slug: 'real-estate',
    name: 'Real Estate Agents',
    metaTitle: 'Real Estate Agent Web Design in Sonoma County | Nuvion Solutions',
    metaDesc: `Real estate websites for Sonoma County agents — a personal brand that wins listings, captures buyer leads, and ranks for the neighborhoods you know best.`,
    h1a: `Real estate sites that`,
    h1b: `win the listing`,
    sub: `A personal brand that makes sellers choose you, captures buyer leads day and night, and ranks for the Sonoma County areas you know best.`,
    intro: `In real estate you're not selling houses on your website — you're selling you, and the brokerage-issued profile page you were handed does nothing to prove why a seller should trust their biggest asset to you. Sonoma County buyers and sellers vet their agent online before they ever call, comparing your presence against every other agent in Santa Rosa, Sebastopol, and Healdsburg. A generic IDX template that looks like a thousand others won't set you apart, and it won't capture the lead who's browsing at 10pm. You need a site that tells your story, showcases your listings and sales, ranks for the neighborhoods you farm, and turns a curious visitor into a booked consultation.`,
    solves: [
      { h: `A personal brand sellers trust`, p: `Your story, your track record, and real testimonials front and center — so when a homeowner is choosing who to list with, your site closes the deal before the listing appointment even starts.` },
      { h: `Capture leads day and night`, p: `Home valuation requests, buyer inquiries, and showing bookings come in while you sleep, with instant lead notifications so you're the first agent to respond — the one who usually wins.` },
      { h: `Rank for the areas you sell`, p: `Dedicated neighborhood and community pages help you show up when someone searches "homes in Sebastopol" or "Santa Rosa realtor," pulling in local leads you don't have to pay a portal for.` },
    ],
    features: [
      `Featured and past-sold listings showcase`,
      `Home valuation and buyer lead capture`,
      `Neighborhood and community area pages`,
      `Consultation and showing booking`,
      `Client testimonials and sales stats`,
      `IDX / MLS listing integration ready`,
    ],
    faqs: [
      { q: `Can it pull live MLS listings onto my site?`, a: `Yes. We build the site ready for IDX or MLS integration so active listings display automatically and stay current. Buyers can search and browse without leaving your brand, which keeps you in front of them instead of sending them to a national portal. We'll match the integration to your MLS and brokerage rules.` },
      { q: `How is this better than the profile page my brokerage gives me?`, a: `Your brokerage page looks identical to every other agent's and does nothing to build your personal brand. Your own site tells your story, features your listings and reviews, and ranks for local searches you control. It's the difference between being one agent in a directory and being the obvious local expert a seller wants to hire.` },
      { q: `Will it help me capture leads instead of just showing listings?`, a: `That's the whole point. We add home valuation forms, buyer inquiries, and consultation booking that send you an instant notification the moment someone reaches out. Speed-to-lead wins deals in real estate, so being first to respond puts you ahead of agents relying on portal leads.` },
    ],
  },

  'med-spas': {
    slug: 'med-spas',
    name: 'Med Spas & Salons',
    metaTitle: 'Med Spa & Salon Web Design in Sonoma County | Nuvion Solutions',
    metaDesc: `Med spa and salon websites for Sonoma County — 24/7 online booking, clear service menus, before-and-after galleries, and gift cards that sell themselves.`,
    h1a: `Med spa sites that`,
    h1b: `stay fully booked`,
    sub: `Let clients book treatments online any hour, show off real results, and sell gift cards on autopilot — so your calendar fills itself.`,
    intro: `A med spa or salon lives and dies by the appointment book, yet most sites make clients call during business hours just to schedule — and half of them book somewhere else instead. In a beauty-conscious market like Sonoma County, clients also want proof before they commit: clear pricing, a service menu they actually understand, and real before-and-after results that show you deliver. Your front desk is busy with clients in the chair, not answering phones, so every booking that can't happen online is money walking out the door. Your website should take appointments 24/7, showcase your work, and sell gift cards and packages while you sleep.`,
    solves: [
      { h: `Booking that never closes`, p: `Clients reserve facials, injectables, cuts, and color online at any hour, synced to your calendar — so you stop losing after-hours bookers to the salon that lets them tap "reserve" on the spot.` },
      { h: `A service menu that sells`, p: `Clear treatments, pricing, and what to expect turn a hesitant browser into a confident booking, and cut down on the phone calls asking "how much is that?"` },
      { h: `Show the results and the reviews`, p: `Tasteful before-and-after galleries and glowing client reviews prove your work and justify your prices, so new clients arrive already sold on the outcome.` },
    ],
    features: [
      `24/7 online appointment booking`,
      `Detailed service menu with pricing`,
      `Before-and-after result galleries`,
      `Online gift card and package sales`,
      `Client reviews and testimonials`,
      `Staff and provider bios`,
    ],
    faqs: [
      { q: `Can clients book their own appointments online?`, a: `Yes. We integrate online booking so clients can schedule any service, any time, synced to your calendar and staff availability. It captures the after-hours and weekend bookers your front desk can't answer, and cuts down on phone tag. You can keep your current booking software or we'll help you pick one.` },
      { q: `Can I show before-and-after photos without it looking unprofessional?`, a: `Absolutely. We build clean, tasteful galleries that let your results speak for themselves while keeping the design elegant and on-brand. Real before-and-after proof is one of the strongest ways to convince a new client you're worth booking. We'll help you present it in a way that feels premium, not clinical.` },
      { q: `Can the site sell gift cards and prepaid packages?`, a: `Yes. We can add online gift card and package sales so clients buy them any time — a big revenue driver around holidays, Mother's Day, and Valentine's. Purchases happen without staff involvement, and the recipient often becomes a new regular. It turns your website into a steady second register.` },
    ],
  },

  'dental-medical': {
    slug: 'dental-medical',
    name: 'Dental & Medical Practices',
    metaTitle: 'Dental & Medical Web Design in Sonoma County | Nuvion Solutions',
    metaDesc: `Dental and medical websites for Sonoma County practices — new-patient booking, insurance clarity, provider credentials, and secure, HIPAA-aware forms.`,
    h1a: `Practice websites that`,
    h1b: `grow new patients`,
    sub: `Make it effortless for new patients to book, understand your insurance, and trust your team — with secure forms built for a medical practice.`,
    intro: `For a dental or medical practice, your website is the front door new patients walk through, and if it looks dated or makes booking a hassle, they simply choose the practice down the road. Sonoma County patients want three things fast: can I get an appointment, do you take my insurance, and can I trust these providers with my care. Too many practice sites bury that behind stock photos and clinical jargon, then rely on phone tag for every new-patient request. On top of that, any form that collects health information has to be handled carefully. Your site should convert a searching patient into a booked appointment, answer the insurance question up front, and build trust through your credentials and reviews.`,
    solves: [
      { h: `New-patient booking made easy`, p: `A prominent, simple request-an-appointment flow turns a searching patient into a scheduled visit before they call three other offices — the make-or-break moment for practice growth.` },
      { h: `Answer the insurance question up front`, p: `Clearly listing accepted plans and financing removes the number-one reason patients hesitate, so the people who reach out are ready to book instead of just price-shopping.` },
      { h: `Build trust and credibility`, p: `Provider bios, credentials, real patient reviews, and a clean, modern design signal safety and competence — exactly what someone needs to feel before trusting you with their health.` },
    ],
    features: [
      `New-patient appointment requests`,
      `Accepted insurance and financing info`,
      `Provider bios and credentials`,
      `Secure, HIPAA-aware intake forms`,
      `Services and treatment pages`,
      `Patient reviews and trust signals`,
    ],
    faqs: [
      { q: `Are your patient forms HIPAA-aware?`, a: `We build intake and contact forms with privacy in mind and can route protected health information through secure, HIPAA-compliant tools rather than plain email. For anything involving patient health data, we set it up so submissions are handled responsibly. We'll work with your practice to match the level of compliance your workflows require.` },
      { q: `Can new patients book or request an appointment online?`, a: `Yes. We make "request an appointment" the clearest action on the site, and we can connect it to your scheduling or patient-management system so requests land where your front desk already works. Making it easy to book is the single biggest driver of new-patient growth. It also cuts down on missed calls during busy clinic hours.` },
      { q: `How do you build trust with patients who've never visited?`, a: `Trust comes from clarity and proof. We highlight your providers' credentials and experience, feature genuine patient reviews, and use a clean, professional design that signals a well-run practice. When a patient can quickly see who you are, what you offer, and that others trust you, they're far more likely to choose your office.` },
    ],
  },

  fitness: {
    slug: 'fitness',
    name: 'Gyms & Fitness Studios',
    metaTitle: 'Gym & Fitness Studio Web Design in Sonoma County | Nuvion Solutions',
    metaDesc: `Gym and fitness studio websites for Sonoma County — live class schedules, easy memberships, free-trial signups, and a community that keeps members coming back.`,
    h1a: `Fitness sites that`,
    h1b: `sign up members`,
    sub: `Show your schedule, hand out free-trial passes, sell memberships, and build the community that keeps people renewing month after month.`,
    intro: `People join a gym or studio on a wave of motivation, and if your website makes them hunt for the class schedule or wait until Monday to sign up, that wave passes and they never come back. Sonoma County has no shortage of gyms, yoga studios, and martial arts schools competing for the same members, so the studio that makes it easiest to start usually wins. Your prospects want to see when classes run, try a session risk-free, and know what membership costs — all in under a minute, on their phone. Your site should turn that burst of motivation into a booked free trial and, ultimately, a paying member who feels part of your community.`,
    solves: [
      { h: `Turn motivation into free trials`, p: `A can't-miss free-trial or intro-offer signup catches people at the exact moment they decide to change, so their motivation becomes a booked first class instead of a missed opportunity.` },
      { h: `A schedule members actually use`, p: `A clear, always-current class schedule with easy booking means members show up more often and prospects can see there's a class that fits their life — no PDF, no guessing.` },
      { h: `Memberships and community that retain`, p: `Online membership signups plus your story, coaches, and member wins build the belonging that keeps people renewing long after the New Year's resolution fades.` },
    ],
    features: [
      `Live class schedule and booking`,
      `Free-trial and intro-offer signups`,
      `Membership plans and online signup`,
      `Coach and instructor bios`,
      `Member testimonials and results`,
      `Community events and challenges`,
    ],
    faqs: [
      { q: `Can the site show my live class schedule?`, a: `Yes. We can display an always-current schedule and connect it to booking software like Mindbody, Mariana Tek, or your current system so classes update automatically. Members book straight from your site, and prospects can see exactly when they'd train. No more outdated PDFs or "message us for the schedule."` },
      { q: `Can people sign up for a free trial without calling?`, a: `Definitely — and they should be able to. We make the free-trial or intro-offer signup a prominent, one-tap action so you catch people the moment they're motivated. Every hour of friction loses prospects to the studio that made it easy. Leads come straight to you so you can follow up fast.` },
      { q: `Can new members buy memberships online?`, a: `Yes. We can present your membership tiers clearly and connect signup and payment so a new member can join entirely online, any time. Removing the "come in to sign up" step captures people while they're excited. You can still offer in-person signup for those who prefer it.` },
    ],
  },

  'professional-services': {
    slug: 'professional-services',
    name: 'Law & Professional Services',
    metaTitle: 'Law & Professional Services Web Design in Sonoma County | Nuvion Solutions',
    metaDesc: `Websites for Sonoma County attorneys, accountants, and consultants — authority that earns trust, booked consultations, and service pages that rank and convert.`,
    h1a: `Professional sites that`,
    h1b: `earn the client`,
    sub: `Establish authority, make booking a consultation effortless, and rank for the services clients search — so serious prospects choose you.`,
    intro: `When someone needs an attorney, accountant, or consultant, they're choosing who to trust with something that matters — their business, their money, their case — and they judge that trust largely by your website. In Sonoma County's competitive professional market, a dated or vague site quietly signals that your practice might be the same, and prospects move on to a firm that looks the part. The clients you want are researching before they ever reach out, weighing your credentials, your areas of practice, and whether others vouch for you. Your site should project authority, clearly explain each service, answer the questions that make people hesitate, and turn a qualified visitor into a booked consultation.`,
    solves: [
      { h: `Authority that earns trust`, p: `A polished, credible site with your credentials, results, and real testimonials tells a prospective client you're the professional worth hiring — the trust that gets you the call over a cheaper competitor.` },
      { h: `Consultations booked, not chased`, p: `A clear path to schedule a consultation or request a quote converts serious prospects on the spot, so qualified leads land on your calendar instead of slipping away.` },
      { h: `Service pages that rank and convert`, p: `Dedicated pages for each practice area or service help you show up for specific local searches and answer exactly what that client needs to know before they commit.` },
    ],
    features: [
      `Individual practice-area / service pages`,
      `Online consultation booking or request`,
      `Attorney / advisor bios and credentials`,
      `Case results and client testimonials`,
      `Clear contact and intake forms`,
      `Local SEO for your specialties`,
    ],
    faqs: [
      { q: `How does a website help a firm that gets clients by referral?`, a: `Referrals still check you out online before they call — a strong site confirms you're the professional they were told about and makes the decision easy. Without one, even a warm referral can hesitate or compare you to a firm that looks more established. Your site turns the referral's interest into a booked consultation. It also helps you earn clients who found you through search, not just word of mouth.` },
      { q: `Can clients book a consultation directly on the site?`, a: `Yes. We add clear consultation booking or request forms so a qualified prospect can reach out or schedule the moment they decide, instead of playing phone tag. You can gate it with a few intake questions to filter for the right cases or clients. Serious leads land where you can act on them quickly.` },
      { q: `Should I have a separate page for each service or practice area?`, a: `Yes — it's one of the most effective things you can do. Individual pages let you rank for specific searches like "estate planning attorney Santa Rosa" and speak directly to each client's situation. A single catch-all services page competes for nothing and converts poorly. Focused pages bring in better-qualified leads.` },
    ],
  },

  nonprofits: {
    slug: 'nonprofits',
    name: 'Nonprofits',
    metaTitle: 'Nonprofit Web Design in Sonoma County | Nuvion Solutions',
    metaDesc: `Nonprofit websites for Sonoma County causes — easy donations, volunteer signups, impact stories, and event pages that turn supporters into lasting givers.`,
    h1a: `Nonprofit sites that`,
    h1b: `move supporters to give`,
    sub: `Make donating effortless, recruit volunteers, tell your impact story, and fill your events — all from a site that stretches every dollar.`,
    intro: `A nonprofit's website carries a heavy load on a light budget: it has to raise money, recruit volunteers, promote events, and prove your impact, often with a tiny team and no time to fuss over technology. In Sonoma County's crowded field of worthy causes, supporters give to the organizations whose story moves them and whose donate button actually works on a phone. Yet so many nonprofit sites bury the "donate" link, hide upcoming events, and tell donors nothing about where their gift goes. Your website should make giving one easy tap, sign up volunteers in seconds, share the real stories behind your work, and turn a one-time donor into a lasting supporter.`,
    solves: [
      { h: `Donations made effortless`, p: `A prominent, mobile-friendly donate button and a fast giving flow — including recurring gifts — capture supporters in the moment their heart is moved, instead of losing them to a clunky checkout.` },
      { h: `Recruit and organize volunteers`, p: `Simple volunteer signups and clear opportunities turn people who want to help into people who show up, without your staff drowning in emails and spreadsheets.` },
      { h: `Tell the story of your impact`, p: `Real photos, stories, and numbers that show exactly what donations accomplish build the trust that convinces a first-time giver to become a monthly one.` },
    ],
    features: [
      `Prominent donate button and giving page`,
      `Recurring / monthly donation option`,
      `Volunteer signup and opportunities`,
      `Impact stories, photos, and stats`,
      `Events calendar and registration`,
      `Email newsletter signup`,
    ],
    faqs: [
      { q: `Can the site accept donations, including recurring gifts?`, a: `Yes. We make the donate button impossible to miss and connect it to a fast, mobile-friendly giving flow that supports one-time and recurring monthly donations. Recurring gifts are the backbone of stable funding, so we make signing up for them simple. We can work with donation platforms like Donorbox, Givebutter, or your current processor.` },
      { q: `We have a small team and a tight budget — can we manage the site ourselves?`, a: `Absolutely. We build your site to be easy to update, so a staff member or volunteer can post events, stories, and news without technical skills. And our pricing is built for tight budgets — one-time from $600, or $49 a month with $0 down. You get a professional presence without a professional's overhead.` },
      { q: `Can we promote events and sign up volunteers on the site?`, a: `Yes. We can add an events calendar with online registration and simple volunteer signup forms, so supporters can act the moment they're inspired. It saves your team from managing everything by email and spreadsheet. Everything routes to you organized and ready to follow up.` },
    ],
  },
};
