import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, MousePointerClick, Star,
  Globe, Home, TrendingUp, Check, CloudRain, Wind,
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
    desc: "Rank at the top of Google for high-value searches like \"roof replacement Charleston SC,\" \"storm damage roof repair Mount Pleasant,\" and \"metal roofing contractor Summerville.\" Organic rankings that pay off for years.",
    href: "/locations/south-carolina/charleston/roofing/seo",
    cta: "Roofing SEO in Charleston",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Storm events create a 72-hour window where roofing searches spike 10× — and most contractors miss it because their ads aren't ready. We build storm-ready campaigns that go live the moment the weather clears.",
    href: "/locations/south-carolina/charleston/roofing/google-ads",
    cta: "Roofing Google Ads in Charleston",
  },
  {
    icon: Star,
    title: "Google Business Profile",
    desc: "The map pack is where most local roofing jobs start. We optimize every GBP signal — categories, services, reviews, photos, posts — to put you in the top 3 and keep you there year-round, not just storm season.",
    href: "/locations/south-carolina/charleston/roofing/google-business-profile",
    cta: "Roofing GBP in Charleston",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "A fast, credibility-first roofing website with storm damage contact front and center, service pages for every offering, and trust signals — licensing, insurance, photos — that convert worried homeowners into signed estimates.",
    href: "/locations/south-carolina/charleston/roofing/web-design",
    cta: "Roofing Web Design in Charleston",
  },
];

const marketStats = [
  { stat: "850K+", label: "People in the Charleston metro — and the housing stock is aging into a high-replacement cycle" },
  { stat: "7–8", label: "Named storms per year affect the Southeast Atlantic coast — each one generates a roofing search spike" },
  { stat: "74%", label: "Of roofing leads originate from Google search — primarily maps, organic, and storm-intent queries" },
  { stat: "73", label: "Verified Google reviews for Holy Webs — we know what builds trust in the Charleston market" },
];

const whyCharleston = [
  {
    icon: Wind,
    text: "Hurricane season runs June through November — that's 6 months of potential storm events generating emergency roof repair searches. Contractors who are visible before the storm gets the calls after it.",
  },
  {
    icon: CloudRain,
    text: "Charleston's salt air and humidity accelerate shingle and flashing degradation faster than inland markets. Homeowners are replacing roofs 5–10 years earlier than the national average — creating consistent non-emergency demand.",
  },
  {
    icon: Home,
    text: "The Peninsula and older West Ashley neighborhoods have homes 40–80 years old that are either mid-cycle or past due for replacement. 'Roof replacement Charleston' is a high-volume, high-ticket keyword most contractors underestimate.",
  },
  {
    icon: TrendingUp,
    text: "New construction in Summerville, Nexton, and Carnes Crossroads is adding thousands of homes annually — and builders need roofing contractors they can rely on. Digital presence is how they find you.",
  },
];

const faqs = [
  {
    q: "What digital marketing should a Charleston roofer invest in first?",
    a: "Google Business Profile, because that's where emergency storm calls start. A fully optimized GBP with recent reviews and storm-damage service categories gets you into the map pack for the searches that matter most. From there, local SEO builds long-term rankings for replacement queries, and Google Ads provides surge capacity during storm season.",
  },
  {
    q: "How competitive is the roofing market in Charleston?",
    a: "Competitive, but with clear opportunities. Most local roofing companies have weak GBP profiles with inconsistent review generation and slow, generic websites. After storm events, out-of-state contractors flood the market — but homeowners who've already heard of a local company choose them. Visibility before the storm is the moat.",
  },
  {
    q: "How quickly can we start getting more roofing calls from Google?",
    a: "GBP optimization typically shows map pack movement in 4–8 weeks. Google Ads can go live and generate calls within days of a storm event — but the campaigns need to be ready before the storm hits, not after. Organic SEO takes 3–6 months to build real rankings. We'll tell you what to prioritize based on where you stand right now.",
  },
  {
    q: "Can you help with storm surge marketing specifically?",
    a: "Yes. We build roofing campaigns with storm-ready ad groups, landing pages for hail and wind damage, and GBP updates that can go live within hours of a significant weather event. The window after a storm is short — contractors who have the infrastructure ready capture the demand. Contractors who don't miss it entirely.",
  },
];

const answerSummary = [
  {
    question: "What is the best marketing strategy for Charleston roofers?",
    answer: "Charleston roofers need Google Business Profile optimization, storm-ready Google Ads, local SEO for replacement and storm-damage searches, and a website that proves local trust with photos, reviews, licensing, insurance, and clear emergency contact options.",
  },
  {
    question: "Which roofing searches matter most in Charleston?",
    answer: "High-intent searches include roof repair Charleston SC, roof replacement Charleston, storm damage roof repair, metal roofing Charleston, roofing contractor Mount Pleasant, and roofer Summerville. These keywords often come from homeowners ready to schedule an estimate.",
  },
  {
    question: "Why is Charleston a unique roofing market?",
    answer: "Charleston combines hurricane season, salt air corrosion, humid summers, older housing stock, and fast suburban growth. That creates both emergency repair demand and steady replacement demand across the Lowcountry.",
  },
  {
    question: "What should a Charleston roofer optimize first?",
    answer: "Start with the Google Business Profile and review system, then build storm-damage landing pages, local service pages, Google Ads campaigns, and website content for communities like Mount Pleasant, Summerville, West Ashley, James Island, and North Charleston.",
  },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Goose Creek", "Hanahan", "Isle of Palms", "Sullivan's Island",
];

export default function CharlestonRoofingHub() {
  return (
    <Layout>
      <Helmet>
        <title>Roofing Digital Marketing in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="SEO, Google Ads, Google Business Profile, and web design for roofing contractors in Charleston, SC. Built for Lowcountry roofers who want to dominate storm-season search and book more estimates."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/roofing/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Roofing Digital Marketing — Charleston, SC",
            description: "Digital marketing for roofing contractors in Charleston, SC.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "City", name: "Charleston" }, { "@type": "City", name: "Mount Pleasant" }, { "@type": "City", name: "Summerville" }],
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Digital marketing for roofing contractors in Charleston, SC. Local SEO, Google Ads, GBP optimization, and web design."
        areaServed={["Charleston", "Mount Pleasant", "Summerville", "North Charleston", "West Ashley", "James Island"]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={charlestonWaterfront} alt="Charleston South Carolina waterfront" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[
              { label: "Locations", href: "/locations" },
              { label: "South Carolina", href: "/locations/south-carolina" },
              { label: "Charleston", href: "/locations/south-carolina/charleston" },
              { label: "Roofing" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Roofing Digital Marketing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Roofers in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When a storm rolls through the Lowcountry, Charleston homeowners go straight to Google. We make sure your roofing company is the one they find — before the storm, and after it.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Start with a free visibility audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Charleston Is One of the Most Active Roofing Markets in the&nbsp;Southeast
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Hurricane season, salt air corrosion, aging housing stock, and explosive growth in the suburbs — Charleston generates roofing demand year-round. The contractors who show up in search own that demand.
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

      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
            What Makes Roofing Marketing in Charleston Different
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Charleston's roofing market is defined by two forces that don't exist in most inland markets: storm season and salt air. Together, they create a replacement and repair cycle that's significantly shorter than the national average — and a consistent spike in emergency search every time a named storm tracks up the coast.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Most roofing contractors in Charleston aren't ready for that spike. Their GBP profiles are incomplete, their ad campaigns aren't set up for storm-intent keywords, and their websites don't build the credibility that turns a worried homeowner into a signed estimate.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We built Holy Webs in Charleston. We know this market, and we build roofing marketing strategies that perform in the calm and dominate during the storm.
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
        heading="Charleston Roofing Marketing: Direct Answers"
        intro="These short, specific answers reinforce local relevance for both search engines and AI-powered discovery tools."
        items={answerSummary}
        variant="light"
      />

      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          How We Help Charleston Roofers Grow
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Four services — each built around how Charleston homeowners find and choose a roofing contractor.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <a href={s.href} className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                {s.cta} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">Built in Charleston. Built for Storm Season.</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            We're not a national agency managing your campaign from another state. We started here, know this market, and apply the same local expertise to your roofing business that we've used to build our own 73-review Google presence in South Carolina.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {["Month-to-month — no long-term contracts", "Storm-ready campaigns built before the season starts", "You talk to the person doing the work", "Free visibility audit before you spend a dollar"].map((item) => (
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

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Serving Roofers Across the Lowcountry</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build hyper-local strategies targeting every community you serve across the tri-county area.
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

      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Common Questions from Charleston Roofers</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <NearbyMarkets markets={[
        { name: "Houston Roofing Marketing", to: "/locations/texas/houston/roofing" },
        { name: "Charleston HVAC Marketing", to: "/locations/south-carolina/charleston/hvac" },
        { name: "Charleston Plumbing Marketing", to: "/locations/south-carolina/charleston/plumbing" },
        { name: "Roofing Industry Page", to: "/industries/roofing" },
      ]} />

      <FinalCTASection
        headline="Ready to Be the Go-To Roofer in Charleston?"
        subtitle="Charleston homeowners are searching for roofers right now — and every storm season, thousands more are searching in an emergency. Fill out the form and we'll show you where you rank and what it'll take to get to the top."
      />
    </Layout>
  );
}
