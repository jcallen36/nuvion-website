// Guides / blog content for the Nuvion Solutions website.
// English only — the site translates to Spanish at render time.
// Schema per article: slug, metaTitle, title, metaDesc, excerpt, category,
// date, readMins, intro[], sections[{ h, body[], list? }], faqs[{ q, a }], related[].
// Prose uses template literals so apostrophes never need escaping.

export const ARTICLES = [
  {
    slug: 'website-cost-sonoma-county',
    metaTitle: 'How Much Does a Website Cost in Sonoma County? (2026) | Nuvion Solutions',
    title: 'How Much Does a Website Cost in Sonoma County?',
    metaDesc: `A straight, no-hype answer on what a website really costs in Sonoma County in 2026 — DIY, freelancers, agencies, and transparent one-time vs. monthly pricing.`,
    excerpt: `Real local price ranges, what actually drives the cost, and how to pay for a site you actually own — one-time or monthly with $0 down.`,
    category: 'Pricing',
    date: '2026-07-30',
    readMins: 7,
    intro: [
      `Most business websites in Sonoma County land somewhere between free-but-DIY and about $10,000. A polished do-it-yourself site on a builder like Wix or Squarespace runs a few hundred dollars a year in subscriptions and a lot of your own weekends. A freelancer typically charges $1,000 to $3,000 for a small site. A local agency building a full marketing website usually quotes $3,000 to $10,000, and sometimes more once you add copywriting, photography, and integrations.`,
      `That is a wide range because "a website" can mean very different things. Below is a plain-English breakdown of what each option really costs, what actually drives the price up or down, and where our own pricing sits — on purpose — as the honest middle.`,
    ],
    sections: [
      {
        h: `The real price ranges in 2026`,
        body: [
          `Here is what local business owners in Santa Rosa, Petaluma, and around the county actually pay, depending on who does the work:`,
        ],
        list: [
          `DIY website builders (Wix, Squarespace, GoDaddy): roughly $150 to $400 a year in subscriptions, plus your time. Cheapest on paper, most expensive in hours.`,
          `Freelancers and part-timers: usually $1,000 to $3,000 for a small business site. Quality and availability vary a lot from person to person.`,
          `Local design agencies: commonly $3,000 to $10,000 for a marketing website, and $10,000+ once you get into e-commerce, custom features, or booking systems.`,
          `Rent-a-site subscriptions: $50 to $300 a month forever, where you never actually own the finished site.`,
        ],
      },
      {
        h: `What actually drives the cost`,
        body: [
          `Two websites that look similar can be priced thousands of dollars apart. The difference usually comes down to a handful of things, not the number of pages.`,
          `The biggest cost drivers are custom design versus a template, how much writing and photography is included, and whether the site needs to do something — take payments, book appointments, sync with a calendar, or connect to software you already use. A five-page site that just needs to look professional and load fast is far cheaper than one that runs part of your business.`,
          `Content is the quiet budget-eater. If you hand over your text and photos, the build moves fast. If someone has to interview you, write every page, and source images, that is real work and it shows up in the price.`,
        ],
      },
      {
        h: `One-time or monthly — and why it matters`,
        body: [
          `There are two honest ways to pay for a website, and the right one depends on your cash flow, not on a sales pitch.`,
          `Paying once means you own the finished site outright from day one. Our one-time website pricing is $600, $900, or from $1,800 depending on how much you need, and that is yours to keep — design, files, and code.`,
          `Paying monthly spreads the cost so you are not out a lump sum up front. Our monthly plans are $49, $89, or $149 a month with $0 down, and hosting plus ongoing care are included. The important part: after 18 months the site is yours to keep. It is rent-to-own, not rent-forever. Be careful with any offer that keeps charging you monthly but never hands you the finished site.`,
        ],
      },
      {
        h: `Where Nuvion sits — the honest middle`,
        body: [
          `We are a small, senior team in Santa Rosa, so you get agency-level work without the agency overhead. That is why a professional site with us starts well below the $3,000-to-$10,000 range most local agencies quote.`,
          `We also guarantee your site goes live in one week once we have your content — or you do not pay. And every plan, one-time or monthly, ends with you owning everything. No lock-in.`,
          `If you want ongoing help after launch, our care plans are optional and separate: Essential at $29 a month covers hosting, backups, security, and monitoring; Plus at $50 adds revisions; Pro at $149 adds local SEO, content, Google Business Profile management, and reviews. You are never required to buy them to keep your site.`,
        ],
      },
      {
        h: `So what should you budget?`,
        body: [
          `If you are a solo operator or brand-new business testing an idea, a clean one-time site around $600 is plenty to look credible. If your website is a real part of how you get customers — a contractor, a clinic, a shop, a restaurant in Healdsburg or Sonoma — budget for the $900-to-$1,800 range or a monthly plan, and treat ongoing care as a small line item, not an afterthought.`,
          `The number that should worry you is not the highest quote or the lowest. It is the vague one. A fair website price comes with a clear list of what you get and a plain answer to one question: at the end, do you own it?`,
        ],
      },
    ],
    faqs: [
      {
        q: `How much does a small business website cost in Sonoma County?`,
        a: `Most small business sites here cost between $1,000 and $10,000 depending on who builds it. Freelancers tend to be $1,000 to $3,000, and local agencies $3,000 to $10,000. Our own one-time pricing starts at $600, or $49 a month with $0 down.`,
      },
      {
        q: `Is it cheaper to build my own website?`,
        a: `On paper, yes — a DIY builder costs a few hundred dollars a year. But you pay for it in time, and the result often looks and performs like a template. If your site needs to bring in customers, hiring help usually pays for itself.`,
      },
      {
        q: `What is the difference between paying once and paying monthly?`,
        a: `Paying once means you own the site outright from day one. Paying monthly spreads the cost with $0 down and includes hosting and care, and after 18 months the site is still yours to keep. Both end in ownership — the difference is cash flow.`,
      },
      {
        q: `Are there ongoing costs after the website is built?`,
        a: `You will always need hosting and a domain, which are small. Beyond that, ongoing costs are optional. Our care plans start at $29 a month for hosting, backups, security, and monitoring, but you are never required to buy one to keep your site running.`,
      },
    ],
    related: ['do-i-own-my-website', 'choose-web-designer-santa-rosa'],
  },

  {
    slug: 'do-i-own-my-website',
    metaTitle: 'Do You Actually Own Your Website? What to Check | Nuvion Solutions',
    title: `Do You Actually Own Your Website? What to Check Before You Hire Anyone`,
    metaDesc: `Many businesses rent their website without realizing it. Here is how to tell owned from rented, spot lock-in traps, and verify real ownership before you sign.`,
    excerpt: `Owned vs. rented, the subscription traps to watch for, and exactly what to check in a contract so the website you pay for is actually yours.`,
    category: 'Before you hire',
    date: '2026-07-28',
    readMins: 6,
    intro: [
      `You own your website when you own three things: the finished code and design files, your domain name, and the ability to host it anywhere you want. If any one of those stays in someone else's hands, you are renting — even if it does not feel like it.`,
      `A lot of business owners in Sonoma County only discover this when they try to leave a provider and find out they cannot take their site with them. Here is how to tell the difference before you hire anyone, and how to verify ownership in writing.`,
    ],
    sections: [
      {
        h: `Owned vs. rented — the real difference`,
        body: [
          `An owned website is like buying a house. You paid for it, the files are yours, and you can move to a new host, hire a new designer, or make changes without asking permission. A rented website is like an apartment: it may be a very nice apartment, but the day you stop paying, you walk away with nothing.`,
          `Renting is not automatically bad. Some monthly plans are genuinely rent-to-own, where the site becomes yours after a set period. The problem is the plans that look like ownership but never actually transfer it.`,
          `The reason this catches so many local businesses is that everything feels fine until the day you want to leave. The site is up, it looks good, the bill is small — and then you try to switch designers or hosts and discover the files were never yours to take. That is the moment to prevent, and you prevent it before you sign, not after.`,
        ],
      },
      {
        h: `The lock-in traps to watch for`,
        body: [
          `Most lock-in is not a scam — it is just how some builders and agencies are set up. But the effect on you is the same, so watch for these:`,
        ],
        list: [
          `Proprietary platforms you cannot export from, so your site only works on that one company's system.`,
          `The provider owning your domain name instead of registering it in your name.`,
          `"Free website" offers that require an expensive monthly plan forever and hand you nothing if you cancel.`,
          `No access to your own files, hosting login, or content management system.`,
          `Cancellation terms that take your site offline immediately with no way to keep a copy.`,
        ],
      },
      {
        h: `What real ownership means`,
        body: [
          `Real ownership is specific, and you should be able to point to each piece:`,
          `You own the design and the code — the actual files that make up your site. You own your domain, registered in your name or your business's name. And you can host the site anywhere, so if you ever want to switch providers, you download your files and go. No permission required, no ransom.`,
          `This is how we build every site at Nuvion. Whether you pay once or monthly, you end up owning your design, files, domain, and code. There is no lock-in and no rentals-forever.`,
        ],
      },
      {
        h: `How to verify it in a contract`,
        body: [
          `Do not rely on a handshake. Before you sign, ask for these things in writing and read the answers:`,
        ],
        list: [
          `"Do I own the finished website files and design outright?" — you want a clear yes.`,
          `"Is the domain registered in my name, and can I take it with me?"`,
          `"Can I host this site somewhere else if I leave?"`,
          `"What exactly happens to my site if I cancel or stop paying?"`,
          `"Are there any ongoing fees required just to keep my site online?"`,
        ],
      },
      {
        h: `Rent-to-own, done honestly`,
        body: [
          `Monthly pricing is a great fit when you would rather not pay a lump sum up front — but it should still lead to ownership. Our monthly plans are $49, $89, or $149 a month with $0 down, and they include hosting and care. After 18 months, the site is yours to keep.`,
          `That is the honest version of rent-to-own: you are paying toward something you will actually own, not renting it indefinitely. If a monthly offer never ends in ownership, treat it as rent — and price it accordingly, because you will be paying it for as long as you have the site.`,
        ],
      },
    ],
    faqs: [
      {
        q: `How do I know if I own my website?`,
        a: `You own it if you have the design and code files, your domain is registered in your name, and you can host the site anywhere you choose. If your provider holds any of those, you are effectively renting, even on a paid plan.`,
      },
      {
        q: `What happens to my website if I stop paying a monthly plan?`,
        a: `It depends entirely on the contract. With honest rent-to-own plans like ours, the site becomes yours after 18 months. With rent-forever plans, the site can go offline the moment you cancel and you keep nothing — so always ask this question before signing.`,
      },
      {
        q: `Should my web designer own my domain name?`,
        a: `No. Your domain should always be registered in your name or your business's name. It is fine for a designer to help set it up, but you should hold the account and be able to move the domain whenever you want.`,
      },
      {
        q: `Is a monthly website plan a bad deal?`,
        a: `Not if it ends in ownership. Monthly plans are a smart way to avoid a big up-front cost, as long as the site becomes yours after a set period. The plans to avoid are the ones that charge forever and never hand you the finished site.`,
      },
    ],
    related: ['website-cost-sonoma-county', 'choose-web-designer-santa-rosa'],
  },

  {
    slug: 'choose-web-designer-santa-rosa',
    metaTitle: 'How to Choose a Web Designer in Santa Rosa: 7 Checks | Nuvion',
    title: `How to Choose a Web Designer in Santa Rosa: 7 Things to Check First`,
    metaDesc: `A practical 7-point checklist for hiring a web designer in Santa Rosa — from real portfolios and ownership to timelines, pricing, and who actually answers the phone.`,
    excerpt: `Seven specific things to check before you hire a web designer in Sonoma County, so you end up with a site you own and a partner who picks up the phone.`,
    category: 'Before you hire',
    date: '2026-08-01',
    readMins: 7,
    intro: [
      `Choosing a web designer in Santa Rosa comes down to seven things: are they local and reachable, do they have a real portfolio, who actually builds your site, do you own it at the end, is the timeline realistic, is the pricing transparent, and what does ongoing support look like. Get clear answers to those and you will avoid almost every common regret.`,
      `Here is the full checklist, with what a good answer sounds like for each one.`,
    ],
    sections: [
      {
        h: `1. Are they local and reachable?`,
        body: [
          `You do not strictly need someone in Sonoma County, but you do need someone who answers. A designer who understands the difference between marketing to Healdsburg wine-country visitors and to year-round Rohnert Park residents will build you a better site. And when something breaks the week of a big sale, a local phone number beats a support ticket that gets answered in three days.`,
          `Ask how you will reach them after launch, and how fast they typically respond. We are based in Santa Rosa and you can call us directly at (707) 520-9179.`,
        ],
      },
      {
        h: `2. Do they have a real portfolio?`,
        body: [
          `Look for live websites you can actually visit, not just polished mockups. Click through them on your phone. Do they load fast? Are they easy to use? Ideally, ask to see work for businesses a bit like yours.`,
          `A portfolio of real, working sites tells you far more than a slick sales page. If a designer cannot show you anything live, that is worth a pause.`,
        ],
      },
      {
        h: `3. Who actually builds it?`,
        body: [
          `This one catches people. Some agencies sell you on a friendly local rep, then send the work offshore to whoever is cheapest that month. That is not always bad, but you deserve to know.`,
          `Ask who will design and build your site, and who you will talk to when you need a change. We are a small, senior team — the people you talk to are the people doing the work.`,
        ],
      },
      {
        h: `4. Do you own it when it is done?`,
        body: [
          `Before anything else is agreed, get a clear answer: at the end, do you own the design, the files, the code, and your domain? Can you host it anywhere and switch providers if you ever want to?`,
          `With us the answer is always yes — you own everything, whether you pay once or monthly, with no lock-in. If a designer is vague here, treat it as a red flag.`,
        ],
      },
      {
        h: `5. Is the timeline realistic — and specific?`,
        body: [
          `"A few weeks" with no commitment often turns into a few months. Ask for a real timeline and what it depends on. Almost always, the thing that slows a build down is content — your text and photos.`,
          `We guarantee your site goes live in one week once we have your content, or you do not pay. A specific, committed timeline protects you; a vague one protects the vendor.`,
        ],
      },
      {
        h: `6. Is the pricing transparent?`,
        body: [
          `You should be able to see prices before a sales call, and understand exactly what is and is not included. Watch for surprise add-ons — extra pages, revisions, "SEO," a content fee — that were not in the original quote.`,
          `Our website pricing is public: $600, $900, or from $1,800 one-time, or $49, $89, or $149 a month with $0 down. Care plans are separate and optional, starting at $29 a month. No mystery, no pressure.`,
        ],
      },
      {
        h: `7. What does support look like after launch?`,
        body: [
          `A website is not a set-it-and-forget-it project. Things need updating — hours, prices, a new service, a security patch. Ask what help is available after you go live, what it costs, and whether it is required.`,
          `Good support should be optional and clearly priced. Our care plans handle hosting, backups, security, and monitoring from $29 a month, with higher tiers that add revisions, local SEO, and Google Business Profile management — but you are free to manage the site yourself, because you own it.`,
        ],
      },
    ],
    faqs: [
      {
        q: `Do I need a local web designer in Sonoma County?`,
        a: `Not strictly, but it helps. A local designer understands the area and is easier to reach when something needs fixing fast. What matters most is that whoever you hire is responsive and gives you a real way to contact them after launch.`,
      },
      {
        q: `What questions should I ask a web designer before hiring?`,
        a: `Ask who actually builds the site, whether you own it when it is done, how long it will take, what the total price includes, and what ongoing support costs. Clear answers to those five questions filter out most bad fits.`,
      },
      {
        q: `How can I tell if a web designer is any good?`,
        a: `Look at live sites they have built, not just mockups, and visit them on your phone to check speed and ease of use. Real, working examples for businesses like yours tell you far more than a sales pitch.`,
      },
      {
        q: `How long should it take to build a small business website?`,
        a: `A focused small business site can go live in about a week once the content is ready — we guarantee exactly that, or you do not pay. Bigger projects with e-commerce or custom features take longer, but you should always get a specific timeline, not a vague one.`,
      },
    ],
    related: ['do-i-own-my-website', 'website-cost-sonoma-county'],
  },

  {
    slug: 'local-seo-sonoma-county',
    metaTitle: 'Local SEO for Sonoma County: Show Up on Google | Nuvion',
    title: `Local SEO for Sonoma County Businesses: How to Actually Show Up on Google`,
    metaDesc: `A practical, honest guide to local SEO for Sonoma County businesses — Google Business Profile, reviews, local pages, and on-page basics that help you get found.`,
    excerpt: `What local SEO really is, the handful of things that move the needle in Sonoma County, and the honest truth about how long it takes.`,
    category: 'Local SEO',
    date: '2026-07-29',
    readMins: 7,
    intro: [
      `Local SEO is the work that helps your business show up when someone nearby searches for what you do — "plumber near me," "Santa Rosa dentist," "Petaluma taco shop." The biggest levers are your Google Business Profile, your reviews, and having real pages on your website about your services and the towns you serve.`,
      `None of it is magic, and anyone promising you the #1 spot on Google is not being straight with you. What follows is the honest version: what actually helps, in roughly the order it matters, for a business in Sonoma County.`,
    ],
    sections: [
      {
        h: `What local SEO actually is`,
        body: [
          `Regular SEO is about ranking for searches anywhere. Local SEO is about ranking for searches near you — the map results and the "near me" listings that show up when someone in Windsor or Sebastopol is looking for a business like yours right now.`,
          `That distinction matters because local search rewards different things: a complete, accurate Google Business Profile, genuine reviews from nearby customers, and a website that clearly says what you do and where you do it. You are not competing with the whole internet — you are competing with the other shops across town.`,
        ],
      },
      {
        h: `Your Google Business Profile comes first`,
        body: [
          `For most local businesses, the Google Business Profile does more than the website itself for local visibility. It is the free listing that shows your hours, location, photos, and reviews right in Google Maps and search.`,
          `Get the fundamentals right and keep them current:`,
        ],
        list: [
          `Claim and fully complete your profile — correct category, hours, service area, and phone number.`,
          `Add real photos and update them now and then; fresh, real images beat stock every time.`,
          `Keep your name, address, and phone number identical everywhere they appear online.`,
          `Post updates and respond to questions — an active profile signals a real, open business.`,
        ],
      },
      {
        h: `Reviews are your local reputation`,
        body: [
          `Reviews do two jobs at once: they help you rank in local results, and they are often the deciding factor when a customer is choosing between you and a competitor. A steady flow of recent, honest reviews matters more than a pile of old ones.`,
          `The best system is simple: ask every happy customer, make it easy with a direct link, and reply to the reviews you get — the good ones and the critical ones. A calm, professional reply to a bad review can win over the next person reading it. Never buy fake reviews; it violates Google's rules and customers can usually smell them.`,
        ],
      },
      {
        h: `Local content and service pages`,
        body: [
          `Google needs to understand what you do and where. A single vague "Services" page does not cut it. Give each core service its own page, and where it is genuine, create pages for the specific towns you serve — Santa Rosa, Petaluma, Rohnert Park, Windsor, Healdsburg, Sonoma, Sebastopol.`,
          `The key word is genuine. A real page about "emergency plumbing in Petaluma" with useful, specific information helps. Ten thin copy-paste pages that just swap the town name can hurt you. Write for the customer first, and the search benefit follows.`,
        ],
      },
      {
        h: `On-page basics that still matter`,
        body: [
          `A few technical fundamentals quietly support everything above. They are not glamorous, but skipping them holds you back:`,
        ],
        list: [
          `Fast loading and a site that works cleanly on phones — most local searches happen on a phone.`,
          `Clear page titles and headings that say what you do and where.`,
          `Your contact info and service area easy to find on every page.`,
          `A simple, logical structure so both people and Google can navigate it.`,
        ],
      },
      {
        h: `The honest truth about timing`,
        body: [
          `Local SEO compounds. You will not see much in week one. Over a few months of a complete profile, steady reviews, and real local pages, you climb — and the effect builds on itself. It is closer to tending a garden than flipping a switch.`,
          `And to be clear, nobody can guarantee you the #1 spot on Google. Any honest provider will tell you that. What we can do is handle the pieces that reliably help — our Pro care plan at $149 a month includes local SEO, content, Google Business Profile management, and reviews — and be straight with you about what it takes.`,
        ],
      },
    ],
    faqs: [
      {
        q: `How long does local SEO take to work?`,
        a: `Usually a few months before you see meaningful movement, and it keeps compounding after that. It rewards consistency — a complete Google Business Profile, steady reviews, and real local pages — rather than a one-time push. Anyone promising overnight results is overpromising.`,
      },
      {
        q: `Can anyone guarantee I will rank #1 on Google?`,
        a: `No, and you should be cautious of anyone who does. Google's rankings depend on many factors outside any provider's control. An honest partner focuses on the things that reliably help you get found, not on promising a specific position.`,
      },
      {
        q: `What is the most important thing for local SEO?`,
        a: `For most local businesses, a complete and active Google Business Profile does the heavy lifting, closely followed by genuine customer reviews. Get those two right before worrying about anything more advanced.`,
      },
      {
        q: `Do I need a separate page for each town I serve?`,
        a: `It helps if the pages are genuinely useful and specific to each town you truly serve. Thin, copy-paste pages that only swap the town name can hurt more than help, so write real content for the customer first.`,
      },
    ],
    related: ['choose-web-designer-santa-rosa', 'website-cost-sonoma-county'],
  },

  {
    slug: 'ai-website-builder-vs-real-designer',
    metaTitle: 'AI Website Builder vs. a Real Web Designer | Nuvion Solutions',
    title: `AI Website Builders vs. a Real Web Designer: Which Is Right for You?`,
    metaDesc: `An honest comparison of AI and DIY website builders versus hiring a real web designer — the pros, the cons, when each makes sense, and what AI still cannot do.`,
    excerpt: `A fair look at AI and DIY builders versus a real designer — when each is the smart choice, and what AI cannot do for a business that depends on its site.`,
    category: 'Getting started',
    date: '2026-08-02',
    readMins: 6,
    intro: [
      `AI and DIY website builders are genuinely good now, and for some people they are the right call. If you need a simple site fast, you are on a tight budget, and your website is not central to how you make money, a builder can absolutely get you online. If your website is a real part of your business, a designer is usually the better investment.`,
      `We build websites for a living, so we have a stake here — but we would rather be honest than talk you into something you do not need. Here is the fair version of the trade-off.`,
    ],
    sections: [
      {
        h: `Where AI and DIY builders genuinely shine`,
        body: [
          `Modern builders like Wix, Squarespace, and the AI tools bolted onto them are fast, cheap, and surprisingly capable. Credit where it is due:`,
        ],
        list: [
          `Low cost — usually a few hundred dollars a year.`,
          `Speed — you can have something online in an afternoon.`,
          `Full control — you can log in and change things whenever you want.`,
          `Good enough templates — for a simple brochure site, they often look clean out of the box.`,
        ],
      },
      {
        h: `Where they fall short`,
        body: [
          `The catch with a DIY builder is that the easy part is easy and the hard part is still hard. AI can generate a page, but it cannot make the judgment calls that make a site actually work for your business.`,
          `The common frustrations show up later:`,
        ],
        list: [
          `The time cost is real — the "afternoon" often becomes many evenings once you fuss over details.`,
          `Sites end up looking like their template, so you blend in with everyone using the same one.`,
          `Custom features — a specific booking flow, a payment integration, a connection to software you already use — get difficult or impossible.`,
          `You are often locked into that platform, so the site is hard to move later.`,
          `When something breaks, there is no one to call who knows your business.`,
        ],
      },
      {
        h: `What a real designer actually adds`,
        body: [
          `Hiring a designer is not about pushing pixels around. The value is the thinking and the accountability around the site.`,
          `A good designer brings strategy — what your site should say, who it is for, and what you want a visitor to do. They handle the custom pieces AI struggles with, make sure the site is fast and works on phones, and set it up so you actually own it. Just as important, there is a real person who answers when you need a change or something goes wrong.`,
          `That is how we work at Nuvion. We are a small, senior team in Santa Rosa, you own everything we build, and we guarantee your site goes live in one week once we have your content, or you do not pay.`,
        ],
      },
      {
        h: `What AI still cannot do`,
        body: [
          `AI is a great assistant and a poor owner. It can draft copy and lay out a page, but it cannot sit down with you and understand your business, weigh a trade-off, or take responsibility when something needs to be right.`,
          `Specifically, AI still cannot handle custom integrations that connect your site to the rest of how you operate, make real strategic decisions about your business, or be a person who answers the phone when it counts. For a site your livelihood depends on, those are not small gaps.`,
        ],
      },
      {
        h: `A simple way to decide`,
        body: [
          `Use this rough test. If your website is a business card — nice to have, not how you get customers — a DIY or AI builder is a reasonable, budget-friendly choice, and we will tell you so.`,
          `If your website is a storefront — where customers find you, judge you, and decide to call or buy — hire a partner. And if the reason you are eyeing a builder is cost, look closely at real pricing before you assume a designer is out of reach. Our sites start at $600 one-time or $49 a month with $0 down, which is not far from what a builder costs over a couple of years, and you get a professional and a site you own at the end.`,
        ],
      },
    ],
    faqs: [
      {
        q: `Are AI website builders good enough for a small business?`,
        a: `For a simple brochure site on a tight budget, yes — they can look clean and get you online quickly. They fall short when you need custom features, a distinctive design, or someone to call when something breaks. It depends on how much your business relies on the site.`,
      },
      {
        q: `Is it worth paying a web designer instead of using AI?`,
        a: `If your website is central to getting customers, usually yes. A designer brings strategy, handles custom work AI cannot, sets you up to own the site, and gives you a real person to reach. If the site is just a simple placeholder, a builder may be enough.`,
      },
      {
        q: `What can a web designer do that AI cannot?`,
        a: `A designer can understand your specific business, make strategic decisions, build custom integrations with the tools you use, and take responsibility for getting it right. AI can draft and lay out pages, but it cannot own the outcome or answer the phone.`,
      },
      {
        q: `Is a designer much more expensive than a DIY builder?`,
        a: `Less than most people assume. Over a couple of years, builder subscriptions add up, and our sites start at $600 one-time or $49 a month with $0 down. For not much more than a DIY tool, you get a professional build and a site you actually own.`,
      },
    ],
    related: ['website-cost-sonoma-county', 'choose-web-designer-santa-rosa'],
  },
];
