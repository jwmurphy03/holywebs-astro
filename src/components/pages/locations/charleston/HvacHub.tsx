import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, MousePointerClick, Star,
  Globe, Thermometer, TrendingUp, Check, Wind,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import AnswerSummary from "@/components/AnswerSummary";

const charlestonWaterfront = "/assets/charleston-waterfront.jpg";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "Own the Google Maps pack for high-intent searches like \"AC repair Charleston SC\" and \"HVAC installation Mount Pleasant.\" We build the organic rankings that keep your phone ringing year-round — not just when you're paying per click.",
    href: "/locations/south-carolina/charleston/hvac/seo",
    cta: "HVAC SEO in Charleston",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Capture emergency HVAC calls the moment they happen. Campaign structures built around emergency intent, seasonal bidding that follows Charleston's demand curve, and call-only ads for homeowners who want to talk — not browse.",
    href: "/locations/south-carolina/charleston/hvac/google-ads",
    cta: "HVAC Google Ads in Charleston",
  },
  {
    icon: Star,
    title: "Google Business Profile",
    desc: "The map pack is where most HVAC jobs are won or lost. We optimize every GBP signal — categories, reviews, photos, posts, service areas — to put you in the top 3 and build the trust that closes the call before you pick up the phone.",
    href: "/locations/south-carolina/charleston/hvac/google-business-profile",
    cta: "HVAC GBP in Charleston",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "A fast, mobile-first HVAC website designed for the moment a Charleston homeowner's AC fails and they're searching on their phone at 2pm. Prominent click-to-call, clear service area, trust signals front and center.",
    href: "/locations/south-carolina/charleston/hvac/web-design",
    cta: "HVAC Web Design in Charleston",
  },
];

const marketStats = [
  { stat: "90°F+", label: "Average July highs in Charleston — peak HVAC demand runs 4+ months" },
  { stat: "3–4×", label: "Search volume surge from April to July for HVAC keywords in the Lowcountry" },
  { stat: "Top 3", label: "Map pack positions capture the overwhelming majority of emergency call clicks" },
  { stat: "73", label: "Verified Google reviews for Holy Webs — we know what builds trust in this market" },
];

const whyCharleston = [
  {
    icon: Thermometer,
    text: "Charleston's heat and humidity push HVAC systems harder than almost any other Southeast market. More breakdowns, more replacements, more emergency searches — all year, every summer.",
  },
  {
    icon: Wind,
    text: "Hurricane season from June through November adds a second wave of HVAC demand on top of the summer surge. Homeowners prepare systems before storms and call for service after.",
  },
  {
    icon: TrendingUp,
    text: "The Lowcountry is one of the fastest-growing metros in the Southeast. New neighborhoods in Summerville, Nexton, and Carnes Crossroads mean constant installation demand from first-time homeowners.",
  },
  {
    icon: MapPin,
    text: "The tri-county service area spans distinct communities — each with different competitive dynamics, housing stock, and customer profiles. One-size-fits-all strategy doesn't work here.",
  },
];

const faqs = [
  {
    q: "What digital marketing does an HVAC company in Charleston actually need?",
    a: "The foundation is a Google Business Profile that's fully optimized and actively generating reviews — that's what gets you into the map pack where most emergency calls originate. A fast, mobile-first website supports both direct conversions and local SEO rankings. From there, organic SEO builds compounding visibility and Google Ads fills the gap while rankings grow. The right mix depends on your budget, your current presence, and how fast you need results.",
  },
  {
    q: "What makes HVAC marketing in Charleston different from other markets?",
    a: "The combination of intense summer heat, high humidity, hurricane season, and rapid population growth creates a demand pattern that's more extreme and more predictable than most markets. A smart strategy is built around that cycle — getting ranked and optimized before the season hits, not scrambling to catch up in June when every other HVAC company is doing the same thing.",
  },
  {
    q: "How quickly can we start getting more HVAC calls from the internet?",
    a: "Google Ads can generate calls within a week of launch. Google Business Profile optimization typically shows map pack movement in 4–8 weeks. Organic SEO takes longer — 3–6 months for meaningful traction, but it compounds over time and doesn't stop when you stop paying. We'll tell you which lever to pull first based on where you stand today.",
  },
  {
    q: "Do you work exclusively with HVAC companies in Charleston?",
    a: "No — we work with HVAC companies across Charleston, Houston, and other markets we serve. We don't take competing clients in the same market. If you're an HVAC contractor in the Charleston tri-county area and a competitor is already working with us, we'll let you know upfront.",
  },
  {
    q: "What does it cost to market an HVAC company in Charleston?",
    a: "It depends on what you're trying to accomplish and how fast. SEO and GBP optimization typically runs $750–$1,500/month. Google Ads management is our fee plus your ad spend — most Charleston HVAC companies spend $1,500–$3,500/month in ads during peak season, less in winter. A new website is a one-time project. We'll give you a specific number after we understand your goals.",
  },
];

const answerSummary = [
  {
    question: "What should a Charleston HVAC company fix first?",
    answer: "Start with the places customers see before they ever reach your website: Google Business Profile categories, service areas, reviews, photos, and click-to-call visibility. Then make sure the site has fast mobile pages for AC repair, replacement, maintenance, emergency service, and the Lowcountry towns you actually serve.",
  },
  {
    question: "When do HVAC searches spike in Charleston?",
    answer: "The biggest surge usually starts before the worst heat arrives. Spring tune-up searches build early, then AC repair and replacement searches climb hard from late spring through summer. Hurricane season adds a second layer of demand around system checks, outages, and post-storm repair.",
  },
  {
    question: "Which Charleston HVAC keywords are strongest?",
    answer: "The most useful terms tend to mix urgency, service, and place: AC repair Charleston, emergency HVAC Mount Pleasant, air conditioner replacement Summerville, HVAC maintenance West Ashley, and AC installation North Charleston.",
  },
  {
    question: "How does local trust affect HVAC leads?",
    answer: "In a hot, humid market, homeowners move fast but they still scan reviews. A contractor with recent reviews, real photos, clear service areas, and a site that loads quickly feels safer to call than a company with thin listings and vague service pages.",
  },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Goose Creek", "Hanahan", "Isle of Palms", "Sullivan's Island",
];

export default function CharlestonHvacHub() {
  return (
    <Layout>
      <Helmet>
        <title>HVAC Digital Marketing in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="SEO, Google Ads, Google Business Profile, and web design for HVAC companies in Charleston, SC. Built for Lowcountry contractors who want to dominate local search and fill their schedule."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/hvac/" />
        <meta property="og:title" content="HVAC Digital Marketing in Charleston, SC | Holy Webs" />
        <meta
          property="og:description"
          content="Complete digital marketing for HVAC contractors in Charleston, SC. Local SEO, Google Ads, GBP optimization, and web design built for the Lowcountry market."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "HVAC Digital Marketing — Charleston, SC",
            description: "Digital marketing services for HVAC contractors in Charleston, South Carolina including local SEO, Google Ads, Google Business Profile optimization, and web design.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [
              { "@type": "City", name: "Charleston" },
              { "@type": "City", name: "Mount Pleasant" },
              { "@type": "City", name: "Summerville" },
              { "@type": "City", name: "North Charleston" },
            ],
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />

      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Digital marketing for HVAC contractors in Charleston, SC. Local SEO, Google Ads, GBP optimization, and web design for the Lowcountry market."
        areaServed={["Charleston", "Mount Pleasant", "Summerville", "North Charleston", "West Ashley", "James Island"]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={charlestonWaterfront}
            alt="Charleston South Carolina waterfront at sunset"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Locations", href: "/locations" },
                { label: "South Carolina" },
                { label: "Charleston", href: "/locations/south-carolina/charleston" },
                { label: "HVAC" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Charleston, SC — HVAC Digital Marketing
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for HVAC Companies in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Charleston homeowners search Google when their AC dies. The HVAC company that shows up first gets the call. We build the digital presence — SEO, ads, GBP, and website — that puts you there consistently, especially when it matters most.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">
                Get a Free Consultation
              </a>
              <a
                href="/resources/free-visibility-audit"
                className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
              >
                Start with a free visibility audit
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Why Charleston Is One of the Best HVAC Markets in the&nbsp;Southeast
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            The Lowcountry's heat, humidity, and explosive population growth create HVAC demand that's both intense and predictable. The contractors who show up online own that demand. Here's what the market looks like.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((m) => (
              <div key={m.label} className="text-center p-6 bg-background rounded-xl border border-border">
                <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{m.stat}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Charleston */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
            The Lowcountry Market Has Unique Dynamics.<br />Your Marketing Strategy Should Too.
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We built Holy Webs in Charleston. We've been working with local service businesses here since the beginning, and we know this market in a way that no out-of-state agency does.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We know which neighborhoods have the oldest housing stock and the most frequent HVAC replacements. We know how the summer surge affects search volume — and when to start preparing for it. We know the competitive dynamics between Peninsula companies, Mount Pleasant players, and the larger national franchises pushing into Summerville.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                That local knowledge is baked into every strategy we build. It's the difference between an HVAC marketing plan that could work anywhere and one built for how the Lowcountry actually works.
              </p>
            </div>
            <div className="space-y-4">
              {whyCharleston.map((item) => (
                <div key={item.text} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <AnswerSummary
        heading="Charleston HVAC Marketing: Clear Answers"
        intro="The Lowcountry HVAC market has a rhythm: spring prep, summer emergencies, storm-season calls, and steady replacement demand."
        items={answerSummary}
        variant="light"
      />

      {/* Services */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          How We Help Charleston HVAC Companies Grow
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Four services. Every one built around how Charleston homeowners actually find and choose an HVAC contractor.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <a
                href={s.href}
                className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-primary/80 transition-colors"
              >
                {s.cta} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Proof */}
      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">
            We Started Here. We Know What Works Here.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Holy Webs was founded in Charleston. We've built our own 73-review Google presence in one of the most competitive local markets in South Carolina. We apply the exact same processes we use for ourselves to the HVAC contractors we work with.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Month-to-month — no long-term contracts",
              "HVAC-specific strategies, not generic contractor templates",
              "You talk to the person doing the work, not a project manager",
              "Free visibility audit before you spend a dollar",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-white/80 text-sm font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Areas */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Serving HVAC Contractors Across the Lowcountry
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            From the Peninsula to the suburbs — if you serve homeowners in the Charleston metro, we can help you reach them online.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {neighborhoods.map((n) => (
              <div key={n} className="flex items-center gap-2 bg-background rounded-lg p-3 border border-border">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
          Common Questions from Charleston HVAC Contractors
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <NearbyMarkets
        markets={[
          { name: "Houston HVAC Marketing", to: "/locations/texas/houston/hvac" },
          { name: "Charleston Plumbing Marketing", to: "/locations/south-carolina/charleston/plumbing" },
          { name: "Charleston Roofing Marketing", to: "/locations/south-carolina/charleston/roofing" },
          { name: "HVAC Industry Page", to: "/industries/hvac" },
        ]}
      />

      <FinalCTASection
        headline="Ready to Dominate HVAC Search in Charleston?"
        subtitle="Charleston homeowners are searching for HVAC companies right now. Fill out the form and we'll show you where you rank — and exactly what it'll take to get to the top."
      />
    </Layout>
  );
}
