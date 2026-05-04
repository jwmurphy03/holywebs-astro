import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  label: string;
  cta?: { text: string; href: string };
  faqs: FAQItem[];
}

const categories: FAQCategory[] = [
  {
    id: "working-with-us",
    label: "Working With Us",
    cta: { text: "Start a conversation", href: "/contact" },
    faqs: [
      {
        question: "What makes Holy Webs different from other digital marketing agencies?",
        answer:
          "Holy Webs is a specialized digital marketing team focused exclusively on local service businesses — contractors, tradespeople, and home service companies. Unlike generalist agencies that work with anyone from e-commerce stores to nonprofits, we've spent years learning the specific challenges of marketing in the trades: seasonal demand, neighborhood-level competition, reputation-driven decisions, and the reality that your phone needs to ring with real jobs, not just website traffic. We're also a small, hands-on team. You work directly with the people building your strategy and doing the actual work — no account managers passing messages back and forth. We run on month-to-month agreements, so we earn your business every single month.",
      },
      {
        question: "Do you require long-term contracts?",
        answer:
          "No. Most Holy Webs services operate on a month-to-month basis after a brief onboarding period. We don't believe in locking clients into 12- or 24-month contracts to protect our revenue — we'd rather do work good enough that you want to stay. That said, we'll always be honest about timelines. SEO typically takes 6–9 months to gain real traction, and we'd rather set that expectation upfront than have you cancel after 60 days wondering why you haven't ranked yet. The month-to-month model means you hold us accountable every single billing cycle.",
      },
      {
        question: "Who does Holy Webs typically work with?",
        answer:
          "We work with local service businesses — primarily contractors and home service companies. Our core industries include HVAC, plumbing, roofing, electrical, landscaping, power washing, and general construction. We also work with CPA and bookkeeping firms. We focus on businesses in Texas (Houston, Waco, Dallas, Austin, Tyler, Arlington, San Antonio) and South Carolina (Charleston, Greenville, Columbia), though we occasionally take on clients in other markets. If you run a service business and need more customers finding you online, we're likely a good fit.",
      },
      {
        question: "How does the onboarding process work?",
        answer:
          "After our initial call, we send you a short onboarding questionnaire covering your business, your competitors, your service area, and your goals. We then conduct a full audit of your current online presence — website, Google Business Profile, search rankings, and local citations — and build a custom strategy based on what we find. We present that strategy to you before any work begins, so you know exactly what we're doing and why. The whole process typically takes 1–2 weeks. From day one, you'll have a direct line to the person doing the work — not a support ticket queue.",
      },
      {
        question: "Do you offer one-time projects or only monthly retainers?",
        answer:
          "Both. Web design projects are typically one-time engagements — we build your site, launch it, and hand it off. Ongoing services like SEO, Google Ads management, Meta Ads, and Google Business Profile optimization work best on a monthly retainer because they require consistent attention and optimization over time. Some clients start with a one-time website project and later add monthly marketing services as their business grows.",
      },
      {
        question: "What's the typical response time after I submit a contact form?",
        answer:
          "We aim to respond within 24 hours on business days, and usually faster. When you fill out our contact form, you'll receive an automated confirmation immediately. A real person follows up to schedule an initial call where we can learn about your business and see if we're a good fit. We don't do high-pressure sales calls — it's a conversation, and we'll tell you honestly if we think we can help.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing & Investment",
    cta: { text: "Get a custom quote", href: "/contact" },
    faqs: [
      {
        question: "How much does digital marketing cost for a contractor or home service business?",
        answer:
          "Most Holy Webs clients invest between $1,500 and $5,000 per month, depending on their market, competition level, and which services they need. A single-service engagement — like SEO or Google Ads management for a smaller market — typically starts around $1,500/month. Clients who need a combination of services in a competitive market like Houston or Charleston are often in the $2,500–$5,000/month range. We give clear, specific pricing after a 20-minute call where we can understand your situation. We never recommend services you don't actually need.",
      },
      {
        question: "What kind of return can I expect on my investment?",
        answer:
          "Results vary by market, service, and starting point, but a realistic benchmark for a well-run local SEO campaign is generating enough new jobs in months 4–9 to cover the monthly cost several times over. Google Ads can produce a positive ROI faster — sometimes within the first 4–6 weeks of a dialed-in campaign. We focus on cost-per-lead and cost-per-booked-job as the metrics that actually matter. Before we start any engagement, we walk you through realistic expectations for your specific market so there are no surprises.",
      },
      {
        question: "Is there a setup or onboarding fee?",
        answer:
          "Some services include a one-time setup fee to cover the audit, strategy development, and initial build-out work. We're transparent about this upfront — it's included in the proposal before you sign anything. There are no hidden fees or surprise charges.",
      },
      {
        question: "Do you offer any guarantees?",
        answer:
          "We guarantee our work in the sense that we stand behind the quality, and we don't lock you into long contracts specifically because we want you to be able to leave if you're unhappy. We can't guarantee specific ranking positions or lead volumes — anyone who does is not being honest with you. What we do commit to is a documented strategy, regular reporting, and honest communication about what's working and what isn't. If something isn't working, we'll tell you why and what we're doing to fix it.",
      },
      {
        question: "Can I start with just one service and add more later?",
        answer:
          "Absolutely — and it's often the right approach. Many clients start with a website rebuild or a single service like SEO or Google Ads, then expand as they see results and build confidence in the relationship. We'll recommend a starting point based on what will move the needle fastest for your specific situation. We're not going to oversell you on a full bundle on day one.",
      },
    ],
  },
  {
    id: "web-design",
    label: "Web Design",
    cta: { text: "Learn about web design", href: "/services/web-design" },
    faqs: [
      {
        question: "How much does a contractor website cost?",
        answer:
          "A professional website for a contractor or home service business typically ranges from $3,000 to $8,000 for a custom-built site, depending on the number of pages, features, and complexity. This includes strategy, design, copywriting, on-page SEO, mobile optimization, and launch. We don't use generic page-builder templates that load slowly and look like everyone else — every site is purpose-built to convert visitors into calls. After launch, hosting and ongoing maintenance are typically a separate monthly fee.",
      },
      {
        question: "How long does it take to build a contractor website?",
        answer:
          "Most website projects take 4–6 weeks from kickoff to launch. The timeline depends on how quickly we receive content inputs from you — photos, business details, any existing copy — and how many revision rounds are needed. We keep the process efficient with a clear milestone structure: discovery, design mockup, build, review, and launch. You'll know exactly where things stand at every stage.",
      },
      {
        question: "Will my website work on mobile phones?",
        answer:
          "Yes — every site we build is fully responsive and designed mobile-first. More than 70% of local service searches happen on a smartphone, so mobile performance isn't optional. We test across device sizes and browsers before launch, and we optimize for Core Web Vitals — the page speed and usability metrics Google uses to rank sites.",
      },
      {
        question: "Do I own my website after it's built?",
        answer:
          "Yes. You own the site outright — the code, the content, and the domain. We don't use proprietary platforms that hold your site hostage if you leave. If you ever decide to move to a different provider, you take everything with you. We believe that's the only ethical way to work.",
      },
      {
        question: "Can you improve my existing website, or do I need to start from scratch?",
        answer:
          "Either is possible. We audit your current site first — looking at page speed, conversion rate, SEO structure, and user experience — and give you an honest recommendation. Sometimes a targeted optimization effort is all you need. Other times the architecture is fundamentally broken and a rebuild is the more cost-effective path. We'll tell you which applies to your situation before proposing anything.",
      },
    ],
  },
  {
    id: "seo",
    label: "SEO & Local Rankings",
    cta: { text: "Explore our SEO service", href: "/services/seo" },
    faqs: [
      {
        question: "How long does SEO take to produce results?",
        answer:
          "Honest answer: for most markets and starting points, meaningful organic ranking improvements take 4–9 months of consistent work. The first 60–90 days are typically foundational — fixing technical issues, optimizing existing pages, building out content. Months 3–6 is when ranking movement becomes visible. Months 6–12 is where you start seeing leads coming in from organic search. Google Maps rankings (local pack) can move faster, often within 60–90 days of GBP optimization and citation building. Anyone who promises page-one results in 30 days is either lying or targeting keywords nobody searches for.",
      },
      {
        question: "Why isn't my business showing up on Google?",
        answer:
          "The most common reasons a service business doesn't appear in Google search results are: (1) your website has little to no SEO optimization — no location-specific pages, weak title tags, no schema markup; (2) your Google Business Profile is incomplete or inconsistently listed across the web; (3) your site has little authority compared to established competitors; or (4) your service area or categories don't match what customers are actually searching. A free visibility audit is the fastest way to find out which of these applies to you.",
      },
      {
        question: "What's the difference between SEO and local SEO?",
        answer:
          "Traditional SEO focuses on ranking a website for broad, often national search terms. Local SEO specifically targets searches with geographic intent — things like 'HVAC repair Charleston SC' or 'plumber near me.' Local SEO includes optimizing your Google Business Profile for map pack rankings, building consistent citations across directories, creating location-specific landing pages, and earning reviews. For contractors and home service businesses, local SEO is almost always far more valuable than trying to rank nationally.",
      },
      {
        question: "How do I get my business to rank in the Google Maps pack?",
        answer:
          "Google Maps rankings — the local pack showing three businesses with a map at the top of local search results — are determined by three main factors: relevance (how well your profile and website match the search query), distance (proximity to the searcher), and prominence (how established and reputable your business appears online). To improve your Maps ranking, you need a fully optimized Google Business Profile with accurate categories, complete service descriptions, and consistent NAP (name, address, phone) information across the web. Regular posts, review responses, and photo updates also signal to Google that your listing is active and trustworthy.",
      },
      {
        question: "Do I need SEO if I'm already running Google Ads?",
        answer:
          "Yes — they serve different purposes and work better together. Google Ads gives you immediate visibility at the top of search results, but you pay for every click and the traffic stops the moment you pause the campaign. SEO builds organic rankings that generate free traffic over time. The best strategy for most contractors is to run Ads while SEO is building — Ads keep the phone ringing in the short term while SEO creates a long-term asset that reduces your cost per lead over time.",
      },
      {
        question: "What does a local SEO campaign actually include?",
        answer:
          "A Holy Webs local SEO campaign typically includes: a full technical audit and on-page optimization of your website, Google Business Profile optimization and ongoing management, local citation building and cleanup, location-specific content creation, review generation strategy, monthly reporting on rankings and traffic, and link outreach where appropriate. The specific mix depends on your starting point and market. We build a custom roadmap before any work begins so you know exactly what's happening each month.",
      },
    ],
  },
  {
    id: "google-ads",
    label: "Google Ads & Paid Media",
    cta: { text: "Learn about Google Ads", href: "/services/google-ads" },
    faqs: [
      {
        question: "How much should I budget for Google Ads as a contractor?",
        answer:
          "For most local service businesses in mid-size markets like Waco, Greenville, or Tyler, a starting ad spend of $1,000–$2,000/month is enough to generate consistent leads and gather meaningful data. Competitive metros like Houston, Dallas, or Charleston typically require $2,500–$5,000/month in ad spend to compete effectively. Keep in mind this is the ad budget — separate from the management fee. The right number depends on your average job value, your target lead volume, and your market's cost-per-click. We'll run the numbers with you before you commit to anything.",
      },
      {
        question: "How quickly can Google Ads start generating leads?",
        answer:
          "Google Ads can produce leads within the first week of a live campaign — it's one of the fastest ways to generate phone calls for a service business. That said, the first 4–6 weeks are typically a learning and optimization phase where we refine targeting, adjust bids, and improve ad copy based on what's actually converting. Most clients see their cost-per-lead drop significantly after the first month as the campaign gets dialed in. We don't set it and forget it.",
      },
      {
        question: "What's the difference between Google Ads and Meta Ads (Facebook/Instagram)?",
        answer:
          "Google Ads targets people who are actively searching for your service right now — high intent, ready to hire. Meta Ads (Facebook and Instagram) target people based on demographics, interests, and behaviors — they may not be looking for you yet, but you're getting in front of the right audience. For most contractors, Google Ads produces faster, higher-intent leads. Meta Ads are better for building brand awareness, promoting seasonal offers, or retargeting people who visited your website but didn't call. The right choice depends on your goals — many businesses benefit from both.",
      },
      {
        question: "Do you manage the ads and the creative, or do I need to provide that?",
        answer:
          "We handle everything. Google Ads management includes campaign strategy, keyword research, ad copy, landing page recommendations, bid management, conversion tracking, and monthly reporting. For Meta Ads, we handle audience targeting, ad creative, copy, and ongoing optimization. You don't need to know anything about how the platforms work. We report results in plain English, focused on leads and cost-per-acquisition — not impressions or clicks that don't pay your bills.",
      },
    ],
  },
  {
    id: "gbp",
    label: "Google Business Profile",
    cta: { text: "Learn about GBP optimization", href: "/services/google-business-profile" },
    faqs: [
      {
        question: "Why isn't my Google Business Profile showing up in local search?",
        answer:
          "Several factors can suppress GBP visibility: an incomplete or unverified profile, incorrect business categories, inconsistent name/address/phone information across the web, a low review count compared to competitors, no recent posts or activity, or a service area that doesn't align with where your searches originate. Google prioritizes active, complete, trusted listings. If your GBP was showing and then dropped, it could also be related to an algorithm update, increased competitor activity, or a suspension flag. A GBP audit is the fastest way to identify what's holding you back.",
      },
      {
        question: "How do I get more Google reviews for my business?",
        answer:
          "The most effective review generation strategy is simple: ask every satisfied customer directly and make it as frictionless as possible. This means sending a follow-up text or email with a direct link to your Google review page within 24 hours of completing a job. A direct link removes the friction of customers having to search for your profile. Beyond the ask itself, having a consistent process — not just asking when you remember — is what separates businesses with 8 reviews from those with 80. Review velocity (getting new reviews consistently over time) also signals to Google that your business is actively serving customers, which improves your Maps ranking.",
      },
      {
        question: "Do I need a website if I already have a Google Business Profile?",
        answer:
          "Yes — they serve different purposes and neither replaces the other. Your GBP is what gets you found in Google Maps and local pack results. Your website is what converts that searcher into a customer and is where you rank for longer-tail search queries that GBP alone can't capture. A GBP with no website is like a billboard with no phone number. Additionally, Google uses your website as a trust signal when determining GBP rankings — a well-built site with matching NAP information actually improves your Maps ranking.",
      },
      {
        question: "How often should I post on my Google Business Profile?",
        answer:
          "At minimum, once per week. GBP posts expire after 7 days and regular posting signals to Google that your listing is active and managed. Good post content for contractors includes: completed project photos, seasonal promotions, tips relevant to your service (HVAC filter reminders before summer, gutter cleaning before fall), and answers to common customer questions. Posts alone won't dramatically move your ranking, but they're a consistent signal that compounds over time and keeps your profile looking current to potential customers.",
      },
    ],
  },
  {
    id: "aeo",
    label: "AEO & AI Search",
    cta: { text: "Learn about AEO", href: "/services/aeo" },
    faqs: [
      {
        question: "What is Answer Engine Optimization (AEO)?",
        answer:
          "Answer Engine Optimization (AEO) is the practice of optimizing your business's online presence to be cited and recommended by AI-powered answer tools like ChatGPT, Perplexity, Google AI Overviews, and voice assistants. When someone asks 'Who is the best HVAC company in Houston?' into ChatGPT, or 'Top-rated roofers in Charleston?' into Perplexity, AEO is what determines whether your business gets mentioned. It involves structured data markup, authoritative content, consistent citations across the web, strong reviews, and a clear topical presence that AI systems can verify and trust. It's one of the fastest-growing areas of local marketing and most contractors haven't started thinking about it yet.",
      },
      {
        question: "How do I get my business to show up in ChatGPT or Perplexity?",
        answer:
          "AI answer engines like ChatGPT and Perplexity pull from publicly available web sources — primarily authoritative websites, review platforms, structured data, and well-cited business listings. To be recommended, your business needs: a strong review profile on Google and other platforms (AI engines weight reviews heavily as trust signals), consistent and accurate business information across directories and citation sources, well-structured website content that clearly states your services and location, schema markup that helps AI crawlers parse your business data, and mentions in local content sources. We build all of this systematically as part of our AEO service.",
      },
      {
        question: "Is AEO the same as SEO, or is it different?",
        answer:
          "They overlap significantly but aren't identical. Traditional SEO optimizes for Google's ranking algorithm. AEO optimizes for AI systems that synthesize information across multiple sources and generate direct answers — without the user clicking on any link. A business can rank #1 on Google but never be cited by ChatGPT, because AI engines weight different signals: review authority, citation consistency, structured data, and topical credibility matter more than backlinks. The most competitive businesses optimize for both, which is what our AEO service is designed to do.",
      },
      {
        question: "How important is AEO for a local contractor right now?",
        answer:
          "It's growing fast and the window to get ahead of competitors is still open. ChatGPT has over 100 million daily active users and Perplexity is growing rapidly, particularly among younger and higher-income searchers. As more people use AI tools to find local services instead of typing queries into Google, businesses that aren't optimized for these platforms will start losing leads they never even knew existed. Most contractors in most markets haven't started working on AEO yet, which means the businesses that start now will have a meaningful first-mover advantage. The foundation work — strong reviews, consistent citations, structured data — also reinforces your traditional SEO, so it's not extra effort for a completely separate channel.",
      },
    ],
  },
  {
    id: "markets",
    label: "Local Markets",
    cta: { text: "View all locations", href: "/locations" },
    faqs: [
      {
        question: "What cities and markets does Holy Webs serve?",
        answer:
          "Our primary markets are Texas — including Houston, Dallas, Austin, Waco, Tyler, Arlington, and San Antonio — and South Carolina, including Charleston, Greenville, and Columbia. We have deep knowledge of the competitive landscape in these markets and have helped service businesses rank and generate leads across all of them. We do occasionally work with clients outside these areas when we believe we can deliver strong results. Reach out and we'll tell you honestly whether your market is one we can serve well.",
      },
      {
        question: "I'm based in Charleston, SC — is it competitive for contractors?",
        answer:
          "Charleston is a competitive market for home service businesses, particularly in HVAC, roofing, plumbing, and web design. The rapid population growth across the greater Charleston area — including Mount Pleasant, Summerville, Goose Creek, and North Charleston — means demand is high, but so is the number of contractors competing for it. The businesses winning local search in Charleston typically have strong Google Business Profile optimization, consistent reviews, and location-specific pages targeting the neighborhoods and suburbs where they actually work. It's a market where doing the fundamentals well puts you significantly ahead of most competitors.",
      },
      {
        question: "I'm in Houston — is the market too big and competitive to rank?",
        answer:
          "Houston is one of the most competitive local markets in the country, but ranking there is absolutely achievable with the right strategy. The key is hyper-local targeting — instead of competing for 'HVAC Houston' against established companies with years of domain authority, we build rankings for specific neighborhoods, suburbs, and service combinations where competition is lower and conversion rates are often higher. Katy, The Woodlands, Sugar Land, Pearland, and Cypress each have their own search ecosystems where a well-optimized local business can compete effectively. We have clients ranking and generating leads in the Houston market.",
      },
    ],
  },
];

// Flatten all FAQs for the schema
const allFaqs = categories.flatMap((cat) => cat.faqs);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  return (
    <Layout>
      <Helmet>
        <title>FAQ — Digital Marketing for Contractors & Service Businesses | Holy Webs</title>
        <meta
          name="description"
          content="Answers to the most common questions about digital marketing, SEO, web design, Google Ads, and local visibility for contractors and home service businesses."
        />
        <link rel="canonical" href="https://holywebs.com/faq/" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-20 w-96 h-96 rounded-full bg-primary/50 blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            Got Questions?
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Frequently Asked&nbsp;Questions
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            Everything you want to know about working with Holy Webs — pricing, timelines,
            services, and how local marketing actually works for contractors and home service
            businesses.
          </p>
        </div>
      </section>

      {/* Jump nav */}
      <div className="bg-background border-b border-border sticky top-16 z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <nav
            aria-label="FAQ categories"
            className="flex gap-1 overflow-x-auto py-3 scrollbar-none"
          >
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="shrink-0 text-xs font-semibold px-4 py-2 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
              >
                {cat.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* FAQ sections */}
      {categories.map((cat, idx) => (
        <SectionWrapper key={cat.id} variant={idx % 2 === 0 ? "light" : "muted"}>
          <div className="max-w-3xl mx-auto" id={cat.id}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">
              {cat.label}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {cat.faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`${cat.id}-${i}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-left text-foreground font-semibold text-base hover:no-underline hover:text-primary transition-colors py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {cat.cta && (
              <div className="mt-6">
                <a
                  href={cat.cta.href}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  {cat.cta.text} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </SectionWrapper>
      ))}

      {/* Bottom CTA */}
      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark-foreground mb-4">
            Still have questions?
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            We're happy to walk through anything that's not covered here. There's no
            pressure and no sales pitch — just an honest conversation about your business
            and whether we can help.
          </p>
          <a href="/contact" className="btn-primary inline-flex">
            Talk to a Real Person
          </a>
        </div>
      </SectionWrapper>
    </Layout>
  );
}
