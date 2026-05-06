import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Star, Check, TrendingUp,
  Thermometer, Camera, MessageSquare, Clock, BarChart3, Globe,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import LocalSpokeAnswers from "@/components/LocalSpokeAnswers";

const gbpFeatures = [
  {
    icon: MapPin,
    title: "Category & Attribute Optimization",
    desc: "The primary and secondary categories on your GBP determine which searches you're eligible to appear in. Most HVAC companies select too few or the wrong ones. We audit and optimize every category and attribute selection to maximize your search eligibility across Houston.",
  },
  {
    icon: Star,
    title: "Review Generation System",
    desc: "Houston's HVAC market is competitive enough that review volume and recency are differentiators. We build a systematic process to generate consistent new reviews from your satisfied customers — the kind that lift your map pack position and convert browsers into callers.",
  },
  {
    icon: Camera,
    title: "Photo & Visual Optimization",
    desc: "GBPs with 10+ high-quality photos generate significantly more direction requests and website clicks. We optimize your photo strategy — equipment photos, completed installs, team shots, and service van images — to build visual credibility at a glance.",
  },
  {
    icon: MessageSquare,
    title: "Posts, Q&A & Services",
    desc: "Regular GBP posts signal active business status to Google and give homeowners relevant content. We build out your services list with detailed descriptions, manage Q&A, and create a posting cadence tied to Houston's seasonal HVAC patterns.",
  },
  {
    icon: Globe,
    title: "Multi-Location Management",
    desc: "HVAC companies serving Katy, Sugar Land, The Woodlands, and Pearland may benefit from multiple service-area GBP profiles. We audit whether a multi-location strategy makes sense for your business and execute it correctly to avoid duplicate listing penalties.",
  },
  {
    icon: BarChart3,
    title: "GBP Insights & Reporting",
    desc: "Search queries that triggered your profile, view counts, call clicks, direction requests, and photo views — all tracked monthly. We use GBP performance data to continuously improve your profile's relevance and engagement signals.",
  },
];

const marketStats = [
  { stat: "Top 3", label: "Map pack positions capture the majority of clicks on HVAC searches in Houston — everything below fights for scraps" },
  { stat: "64%", label: "Of local searches result in a contact action — call, direction, or website visit — within 24 hours" },
  { stat: "2.7×", label: "More website visits for businesses with complete GBPs vs. incomplete profiles, per Google's own data" },
  { stat: "7M+", label: "Houston metro residents generating HVAC searches year-round — the GBP is your storefront for all of them" },
];

const gbpChecklist = [
  "Primary and secondary category audit and correction",
  "Service area configuration for all Houston suburbs you serve",
  "Complete services list with keyword-rich descriptions",
  "Photo optimization: equipment, installs, team, vehicles",
  "Review response templates and review generation process",
  "Q&A optimization with pre-answered common questions",
  "Regular GBP posts tied to seasonal HVAC demand",
  "Monthly performance reporting from GBP Insights",
];

const faqs = [
  {
    q: "How important is a Google Business Profile for HVAC companies in Houston?",
    a: "Critical. The Google Maps pack appears above organic results for virtually every local HVAC search in Houston. If you're not in the top 3 map pack positions, you're invisible to the majority of homeowners who search and don't scroll. Your GBP is the primary lever for map pack rankings — and it's often the most under-optimized asset HVAC companies have.",
  },
  {
    q: "What's the most common GBP mistake Houston HVAC companies make?",
    a: "Incomplete category selections and an underdeveloped services list. Most contractors select a primary category and stop there. Google uses your full category and service configuration to determine search eligibility — missing categories means missing searches. The second most common mistake is neglecting photo updates, which signals to Google that the profile is inactive.",
  },
  {
    q: "How do GBP reviews affect Houston HVAC rankings?",
    a: "Review quantity, recency, and the keywords in review text all contribute to local rankings. A business with 20 reviews from three years ago will typically rank below a competitor with 35 reviews from the past six months. We build a consistent review generation process so your velocity stays competitive — especially heading into Houston's peak cooling season.",
  },
  {
    q: "Should we have separate GBP profiles for different Houston service areas?",
    a: "Possibly. Google allows service-area businesses to set a service radius rather than requiring a physical address. For HVAC companies with a single location serving a large territory, one optimized profile is usually sufficient. For companies with genuine satellite offices or separate entities in different suburbs, additional profiles may make sense. We evaluate each situation individually.",
  },
  {
    q: "How long does GBP optimization take to show results?",
    a: "Some changes — like completing missing service listings or responding to reviews — can improve engagement metrics within weeks. Map pack ranking movement typically begins in 30–60 days for well-optimized profiles. Sustained movement into the top 3 in a competitive Houston suburb like Katy or Sugar Land usually takes 3–4 months of consistent optimization.",
  },
];

export default function HoustonHvacGbp() {
  return (
    <Layout>
      <Helmet>
        <title>Google Business Profile for HVAC Contractors in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Google Business Profile optimization for HVAC contractors in Houston, TX. Get into the map pack across Katy, Sugar Land, The Woodlands, and the full Houston metro."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/hvac/google-business-profile/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Google Business Profile optimization for HVAC contractors in Houston, TX."
        areaServed={["Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Friendswood"]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-dark" />
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Locations", href: "/locations" },
                { label: "Texas", href: "/locations/texas" },
                { label: "Houston", href: "/locations/texas/houston" },
                { label: "HVAC", href: "/locations/texas/houston/hvac" },
                { label: "Google Business Profile" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — HVAC Google Business Profile
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Get Your HVAC Company Into Houston's Google Maps Pack
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              The map pack is where Houston homeowners go when the AC dies. Three positions. Hundreds of daily searches. Your Google Business Profile is the primary lever for getting in — and staying there.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">
                Get a Free GBP Audit
              </a>
              <a
                href="/resources/free-visibility-audit"
                className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
              >
                Start with a free visibility audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Houston" state="Texas" industry="hvac" service="google-business-profile" />

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            The Map Pack Is Where Houston HVAC Jobs Come From
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            In a market of 7 million people with 4+ months of peak heat demand, the companies that appear in the top 3 of Google Maps have a structural advantage that compounds every day. Your GBP is the foundation of that position.
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
            What We Optimize in Your Google Business Profile
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Every element of your GBP sends signals to Google. Most HVAC companies leave the majority of these signals under-optimized.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gbpFeatures.map((f) => (
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
            Everything We Do to Your GBP
          </h2>
          <p className="text-white/60 text-lg text-center leading-relaxed mb-10">
            A complete GBP optimization — not a one-time setup and forget.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {gbpChecklist.map((item) => (
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
          Houston HVAC GBP Questions
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
        { name: "Houston HVAC Marketing", to: "/locations/texas/houston/hvac" },
        { name: "Houston HVAC SEO", to: "/locations/texas/houston/hvac/seo" },
        { name: "Charleston HVAC GBP", to: "/locations/south-carolina/charleston/hvac/google-business-profile" },
        { name: "HVAC Industry Page", to: "/industries/hvac" },
      ]} />

      <FinalCTASection
        headline="Ready to Get Into Houston's HVAC Map Pack?"
        subtitle="Houston homeowners are searching for HVAC contractors right now. Fill out the form and we'll audit your GBP and show you exactly what's standing between you and the top 3."
      />
    </Layout>
  );
}
