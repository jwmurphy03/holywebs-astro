import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MousePointerClick, Check, TrendingUp,
  Wind, Clock, Phone, Target, DollarSign, BarChart3, Shield,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import LocalSpokeAnswers from "@/components/LocalSpokeAnswers";

const adFeatures = [
  {
    icon: Wind,
    title: "Storm-Surge Campaign Activation",
    desc: "We pre-build storm-damage ad groups with ready-to-scale budgets. When a named storm tracks toward Houston or a significant hail event hits Katy or Pearland, campaigns go live within hours — while competitors are still scrambling to respond.",
  },
  {
    icon: Phone,
    title: "Call-Only Ads for Emergency Intent",
    desc: "'Emergency roof repair after storm' and 'hail damage roof' searches happen on mobile — homeowners want to call, not fill out a form. Call-only ads put your phone number directly in the search result, converting emergency searches into immediate calls.",
  },
  {
    icon: Target,
    title: "Suburb-Level Geo-Targeting",
    desc: "Houston's roofing demand is distributed across dozens of distinct suburbs. We build separate campaigns for Katy, Pearland, The Woodlands, Sugar Land, Conroe, and others — with messaging and bids calibrated to each community's competitive landscape and average job values.",
  },
  {
    icon: Shield,
    title: "Insurance Claim Campaign Targeting",
    desc: "'Insurance claim roof repair Houston' and 'roofing company that works with insurance Katy' are high-intent, lower-competition keywords in the Houston market. We build dedicated campaigns capturing homeowners navigating the claims process — one of the most profitable customer segments for Houston roofers.",
  },
  {
    icon: BarChart3,
    title: "Seasonal & Storm Budget Scaling",
    desc: "Houston's peak roofing demand follows storms and the heat season. We scale budgets strategically heading into hurricane season and hail-prone months — maximizing return during high-demand windows without burning budget when search volume is low.",
  },
  {
    icon: MousePointerClick,
    title: "Competitor Conquest Campaigns",
    desc: "Homeowners searching for national roofing franchises in Houston are ready to spend. Conquest campaigns put your name in front of high-intent buyers who don't yet have a strong preference — and position a local contractor as the better alternative.",
  },
];

const marketStats = [
  { stat: "5–10×", label: "Search volume increase for roofing terms in the 72 hours after a significant Houston storm or hail event" },
  { stat: "$8K–$25K", label: "Typical value of a full residential roof replacement in the Houston suburbs — high enough that ads pay for themselves quickly" },
  { stat: "72 hrs", label: "The critical post-storm window — local roofers with live campaigns capture it while out-of-state storm chasers are still traveling" },
  { stat: "6+ mo.", label: "Hurricane season in the Gulf of Mexico — the window where paid visibility compounds with organic rankings for maximum impact" },
];

const faqs = [
  {
    q: "How fast can Google Ads go live for a Houston roofing company?",
    a: "A new campaign can go live in 3–5 business days. For storm-surge campaigns, we recommend having infrastructure built before hurricane season — so when an event happens, we're activating and scaling existing campaigns rather than building from scratch. The 72-hour post-storm window is where the majority of emergency roofing searches in Houston happen, and established campaigns outperform brand-new ones significantly.",
  },
  {
    q: "What does a roofing Google Ads campaign cost in Houston?",
    a: "Most roofing campaigns in the Houston market start at $2,000–$4,000/month in ad spend plus management. Storm-surge periods call for higher budgets — a major event can drive enough search volume to justify 2–3x normal spend for a 2–3 week window. Given that a single signed roofing job can run $10,000–$25,000, the ROI math works even at modest conversion rates.",
  },
  {
    q: "Should I run roofing ads year-round in Houston or just during storm season?",
    a: "Year-round, with strategic scaling. Roof replacement, repair, and maintenance searches happen continuously in Houston — the heat alone shortens roof lifespans dramatically, driving planned replacement searches every month of the year. Pausing entirely in the off-season degrades your Quality Scores and increases costs when you restart. We maintain a base campaign year-round and scale significantly for storm-season surges.",
  },
  {
    q: "How do you handle the storm chaser problem in Houston?",
    a: "Out-of-state storm chasers don't have established Google Ads accounts in the Houston market — they either can't advertise quickly or pay premium CPCs with low Quality Scores. A well-maintained local campaign with historical performance data outperforms brand-new accounts dramatically. Being the established local advertiser in your Houston suburbs is a structural advantage every time a storm hits.",
  },
  {
    q: "How do you target insurance claim roofing searches in Houston?",
    a: "Insurance claim searches are among the highest-converting in the Houston roofing market — homeowners who are actively navigating a claim are ready to choose a contractor. We build dedicated campaigns with messaging that speaks to the claims process, what to expect, and your company's experience working with insurance adjusters. These campaigns typically have lower competition than general roof repair keywords.",
  },
  {
    q: "How do you target different Houston suburbs like Katy and Pearland separately?",
    a: "We use zip-code-level geo-targeting combined with suburb-specific ad copy and landing pages. Katy homeowners and Pearland homeowners have different search behaviors, different housing stock ages, and different hail exposure histories. Campaigns calibrated to each community outperform a single metro-wide campaign on both click-through rate and conversion rate.",
  },
];

export default function HoustonRoofingGoogleAds() {
  return (
    <Layout>
      <Helmet>
        <title>Google Ads for Roofing Contractors in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Storm-ready Google Ads campaigns for roofing contractors in Houston, TX. Insurance claim targeting, suburb-level geo-targeting, and storm-surge activation built for the Houston roofing market."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/roofing/google-ads" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Google Ads management for roofing contractors in Houston, TX."
        areaServed={["Houston", "Katy", "Pearland", "The Woodlands", "Sugar Land", "Conroe"]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-dark" />
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Locations", href: "/locations" },
                { label: "Texas" },
                { label: "Houston", href: "/locations/texas/houston" },
                { label: "Roofing", href: "/locations/texas/houston/roofing" },
                { label: "Google Ads" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — Roofing Google Ads
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Google Ads for Roofing Contractors in&nbsp;Houston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              The 72 hours after a storm hits Houston are worth more roofing jobs than the previous 3 months combined. Storm-ready campaigns are live before the weather clears — and local roofers are capturing calls while out-of-state chasers are still driving into town.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">
                Get a Free Consultation
              </a>
              <a
                href="/resources/free-visibility-audit"
                className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
              >
                Start with a free audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Houston" state="Texas" industry="roofing" service="google-ads" />

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            The Storm-Season Economics of Roofing Ads in Houston
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Every time a storm tracks toward Houston or hail hits Katy and Pearland, roofing searches spike massively. Local roofers with live campaigns capture the surge. Everyone else watches the phones ring for someone else.
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

      {/* Features */}
      <SectionWrapper variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            What's in Our Houston Roofing Ad Campaigns
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Built for Houston's storm patterns, suburban geography, and insurance claim market — not a generic contractor template.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adFeatures.map((f) => (
              <div key={f.title} className="bg-background rounded-xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Checklist */}
      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">
            Storm-Ready Before the Season Starts
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Houston roofers who dominate after storms don't build campaigns after the event. They have campaigns in place, tested, and ready to scale — so when the weather turns, they're capturing leads within hours.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Storm-surge ad groups pre-built for rapid activation",
              "Insurance claim campaigns targeting high-converting searches",
              "Suburb-specific campaigns: Katy, Pearland, The Woodlands, Sugar Land",
              "Call tracking on every campaign to identify what's booking jobs",
              "Negative keywords eliminating non-service-area waste",
              "Monthly budget optimization tied to Houston's seasonal patterns",
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

      {/* FAQ */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
          Houston Roofing Google Ads Questions
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

            <NearbyMarkets markets={[
        { name: "Houston Roofing Marketing", to: "/locations/texas/houston/roofing" },
        { name: "Houston Roofing SEO", to: "/locations/texas/houston/roofing/seo" },
        { name: "Charleston Roofing Google Ads", to: "/locations/south-carolina/charleston/roofing/google-ads" },
        { name: "Roofing Industry Page", to: "/industries/roofing" },
      ]} />

      <FinalCTASection
        headline="Don't Miss Houston's Next Storm Surge"
        subtitle="Every storm that hits the Houston metro is worth significant roofing revenue. Fill out the form and we'll show you what it takes to be positioned before the next one hits."
      />
    </Layout>
  );
}
