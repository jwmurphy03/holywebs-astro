import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Star, Check, TrendingUp,
  Droplets, Camera, MessageSquare, Globe, BarChart3, Home,
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
    desc: "The categories on your GBP determine which plumbing searches you're eligible to appear in. Most plumbers under-select. We audit every category and attribute — drain cleaning, slab leak, water heater, sewer, repiping — to maximize your search eligibility across Houston.",
  },
  {
    icon: Star,
    title: "Review Velocity Strategy",
    desc: "In Houston's competitive plumbing market, review recency is a differentiator. A company with 20 old reviews gets outranked by one with 35 recent ones. We build a consistent review generation process that keeps your velocity high — especially critical in high-competition suburbs like Katy and Sugar Land.",
  },
  {
    icon: Camera,
    title: "Photo & Visual Optimization",
    desc: "GBPs with active photo libraries generate significantly more calls and direction requests. We develop your photo strategy around completed repairs, equipment, service vehicles, and your team — building visual credibility that converts searchers into callers.",
  },
  {
    icon: MessageSquare,
    title: "Services, Posts & Q&A",
    desc: "We build out your complete services list with keyword-rich descriptions for every type of plumbing work you do. Regular posts signal active business status. Pre-answered Q&A covers the questions Houston homeowners ask most — hard water, slab leaks, emergency availability.",
  },
  {
    icon: Globe,
    title: "Service Area Configuration",
    desc: "For plumbing companies serving a wide Houston metro area, proper service area configuration ensures your profile appears in searches across your full territory — not just in the immediate vicinity of your physical address.",
  },
  {
    icon: BarChart3,
    title: "GBP Insights & Competitive Monitoring",
    desc: "We track search queries triggering your profile, view counts, call clicks, and engagement metrics monthly. We also monitor competitor profiles in your target suburbs to identify gaps and opportunities in your positioning.",
  },
];

const marketStats = [
  { stat: "Top 3", label: "Map pack positions dominate plumbing clicks in Houston — the majority of searchers never go further" },
  { stat: "2.7×", label: "More website visits for plumbing companies with fully complete GBPs vs. partially complete profiles" },
  { stat: "64%", label: "Of local plumbing searches result in a direct contact action within 24 hours of the search" },
  { stat: "3–5 mo.", label: "Typical timeline to move from outside the map pack to top 3 in a competitive Houston suburb with proper optimization" },
];

const gbpChecklist = [
  "Primary and secondary category audit and correction",
  "Service area configuration for all Houston suburbs you cover",
  "Complete services list: drain, slab leak, water heater, sewer, repiping",
  "Photo optimization: completed repairs, equipment, vehicles, team",
  "Review response management and generation process",
  "Q&A: hard water, slab leaks, emergency availability, warranties",
  "Regular GBP posts tied to Houston's storm and seasonal patterns",
  "Monthly GBP Insights reporting with competitive context",
];

const faqs = [
  {
    q: "How important is a Google Business Profile for plumbers in Houston?",
    a: "It's the single most important local digital asset for a plumbing company. The Google Maps pack appears above organic results for virtually every local plumbing search in Houston. If you're not in the top 3, the majority of searchers — especially those with emergency intent — won't see you at all. Your GBP is the primary lever for map pack rankings.",
  },
  {
    q: "What's the most common GBP mistake plumbing companies in Houston make?",
    a: "Under-selecting categories and leaving the services list incomplete. Google uses your categories and services to determine which searches to show you for. A plumber who lists only 'Plumber' as their category is missing eligibility for 'Drain Cleaning Service', 'Water Heater Installer', 'Sewer Repair', and a dozen other high-value search categories. We typically find 5–10 optimization gaps in every new audit.",
  },
  {
    q: "How do reviews affect plumbing GBP rankings in Houston?",
    a: "Review quantity and recency are both ranking signals. More importantly, the keywords in review text — 'slab leak', 'emergency', 'Katy', 'fast response' — contribute to your profile's relevance for those searches. We build a review generation process that increases velocity and, over time, enriches the keyword profile of your reviews.",
  },
  {
    q: "Should a plumbing company have a service area GBP or a storefront listing?",
    a: "Most residential plumbing companies serve a territory without a customer-facing storefront — which makes service-area GBP configuration the right setup. This allows your profile to appear across your full service area without requiring a physical address to be publicly displayed. The service area radius and the suburb-level targeting within it needs to be correctly configured to show in all your target communities.",
  },
  {
    q: "How long does GBP optimization take to produce map pack results?",
    a: "Initial engagement and click improvements can appear within a few weeks as your profile becomes more complete and active. Map pack ranking movement in competitive Houston suburbs like Katy or Sugar Land typically begins in 60–90 days and reaches stable top-3 positioning in 3–5 months of consistent optimization.",
  },
];

export default function HoustonPlumbingGbp() {
  return (
    <Layout>
      <Helmet>
        <title>Google Business Profile for Plumbing Contractors in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Google Business Profile optimization for plumbing contractors in Houston, TX. Get into the map pack across Katy, Sugar Land, Pearland, The Woodlands, and the full Houston metro."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/plumbing/google-business-profile/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Google Business Profile optimization for plumbing contractors in Houston, TX."
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
                { label: "Texas" },
                { label: "Houston", href: "/locations/texas/houston" },
                { label: "Plumbing", href: "/locations/texas/houston/plumbing" },
                { label: "Google Business Profile" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — Plumbing Google Business Profile
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Get Your Plumbing Company Into Houston's Google Maps Pack
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Emergency plumbing searches in Houston produce a Google Maps pack with three winners. The rest of the market gets whatever is left. Your GBP is the primary lever for being one of those three — and it's almost certainly under-optimized right now.
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

      <LocalSpokeAnswers city="Houston" state="Texas" industry="plumbing" service="google-business-profile" />

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            The Map Pack Is Where Houston Plumbing Jobs Come From
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            When a homeowner in Pearland or Katy searches for a plumber on their phone, they call from the map pack. Getting into those top 3 positions — and staying there — is what your GBP optimization strategy needs to deliver.
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
            What We Optimize in Your Plumbing GBP
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Every element of your GBP sends signals to Google. Most plumbing companies leave the majority of these signals under-utilized.
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
            A complete plumbing GBP optimization — ongoing, not a one-time setup.
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
          Houston Plumbing GBP Questions
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
        { name: "Houston Plumbing Marketing", to: "/locations/texas/houston/plumbing" },
        { name: "Houston Plumbing SEO", to: "/locations/texas/houston/plumbing/seo" },
        { name: "Charleston Plumbing GBP", to: "/locations/south-carolina/charleston/plumbing/google-business-profile" },
        { name: "Plumbing Industry Page", to: "/industries/plumbing" },
      ]} />

      <FinalCTASection
        headline="Ready to Get Into Houston's Plumbing Map Pack?"
        subtitle="Houston homeowners are searching for plumbers right now. Fill out the form and we'll audit your GBP and show you exactly what's standing between you and the top 3."
      />
    </Layout>
  );
}
