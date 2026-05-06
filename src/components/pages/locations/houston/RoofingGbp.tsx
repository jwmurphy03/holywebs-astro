import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Star, Check, TrendingUp,
  Wind, Camera, MessageSquare, Globe, BarChart3, Shield,
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
    title: "Category & Service Optimization",
    desc: "Most roofers select only 'Roofing Contractor' and stop. We audit and optimize every eligible category — storm damage, hail damage, gutters, skylight installation, commercial roofing — to maximize your search eligibility across Houston's diverse roofing search landscape.",
  },
  {
    icon: Star,
    title: "Review Velocity Management",
    desc: "Post-storm periods generate jobs — and jobs should generate reviews. We build a systematic review generation process tied to your job completion workflow so your velocity stays high year-round, not just when you're busy after an event.",
  },
  {
    icon: Camera,
    title: "Before & After Photo Strategy",
    desc: "GBPs with active, high-quality photo libraries generate significantly more calls. For roofing, before/after project photos are exceptionally powerful — they show the quality of your work in a format that converts browsers to callers. We build a consistent photo strategy around your completed jobs.",
  },
  {
    icon: Shield,
    title: "Storm Damage & Insurance Services",
    desc: "Your GBP services list should specifically call out storm damage inspection, hail damage assessment, and insurance claim assistance. These are high-intent search terms that homeowners in Houston use constantly — especially after weather events — and most roofers haven't added them to their profile.",
  },
  {
    icon: MessageSquare,
    title: "Posts, Q&A & Seasonal Content",
    desc: "Regular GBP posts signal active business status and surface relevant content to searchers. We create a posting cadence tied to Houston's storm season, hail months, and peak search windows — and pre-answer the Q&A questions Houston homeowners ask most.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking & Optimization",
    desc: "Monthly GBP Insights reporting covering search queries, view counts, call clicks, and direction requests. We track competitor profiles in your target suburbs to identify ranking gaps and continuously improve your profile's performance signals.",
  },
];

const marketStats = [
  { stat: "Top 3", label: "Map pack positions dominate roofing clicks in Houston — especially in the post-storm surge window when demand spikes 5–10x" },
  { stat: "2.7×", label: "More website visits and calls for roofing companies with fully optimized GBPs vs. incomplete profiles" },
  { stat: "6+ mo.", label: "Gulf Coast hurricane season — the period where map pack positioning directly correlates to how much storm-surge demand you capture" },
  { stat: "64%", label: "Of Houston homeowners searching for roofers take a contact action within 24 hours of finding a business in the map pack" },
];

const gbpChecklist = [
  "Full category audit: roofing, storm damage, hail, gutters, commercial",
  "Service area configuration for Katy, Pearland, The Woodlands, Sugar Land, and beyond",
  "Services list: storm damage, hail inspection, insurance claims, replacement, repair",
  "Before/after photo strategy for completed Houston projects",
  "Review generation process tied to job completion",
  "Q&A: storm damage, insurance claims, warranties, timeline",
  "Regular GBP posts tied to storm season and hail events",
  "Monthly Insights reporting with competitive analysis",
];

const faqs = [
  {
    q: "How does a Google Business Profile affect roofing calls in Houston?",
    a: "The map pack is the most visible real estate in local search — it appears above organic results for virtually every roofing query in Houston. In the post-storm window, when search volume for roofing terms spikes 5–10x, being in the top 3 map pack positions means capturing a disproportionate share of that demand. Your GBP is the primary lever for that position.",
  },
  {
    q: "What GBP categories matter most for Houston roofers?",
    a: "Beyond the primary 'Roofing Contractor' category, you should have 'Roofer', 'Roof Repair Service', and where applicable, 'Gutter Cleaning Service' and 'Commercial Roofing Contractor'. If you do storm damage work — which every Houston roofer should — your services list needs to explicitly call out hail damage assessment, storm damage inspection, and insurance claim assistance.",
  },
  {
    q: "How important are reviews for roofing companies in Houston?",
    a: "Critical on two dimensions. Reviews are a direct local ranking signal — more recent, relevant reviews help your map pack position. And for a high-ticket purchase like a roof replacement, reviews are the primary trust factor. A Houston homeowner choosing between two roofers will almost always go with the one who has more recent, positive reviews. We build ongoing review generation into every engagement.",
  },
  {
    q: "Should I respond to every Google review for my roofing company?",
    a: "Yes — responding to reviews is both a ranking signal and a trust signal. Responses to positive reviews show appreciation and professionalism. Responses to negative reviews show how you handle problems — which matters enormously for a high-ticket trade like roofing. We write professional review response templates that reflect your company's voice.",
  },
  {
    q: "How does GBP optimization interact with post-storm demand surges?",
    a: "Your map pack position during a storm surge is determined by the GBP work done in the weeks and months before the event. You can't rapidly improve your position in 24 hours — you have to be well-optimized before the storm hits. Companies with strong, consistently maintained GBPs capture storm-surge demand as a compounding reward for ongoing optimization.",
  },
];

export default function HoustonRoofingGbp() {
  return (
    <Layout>
      <Helmet>
        <title>Google Business Profile for Roofing Contractors in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Google Business Profile optimization for roofing contractors in Houston, TX. Get into the map pack across Katy, Pearland, The Woodlands, Sugar Land, and the full Houston metro."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/roofing/google-business-profile/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Google Business Profile optimization for roofing contractors in Houston, TX."
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
                { label: "Texas", href: "/locations/texas" },
                { label: "Houston", href: "/locations/texas/houston" },
                { label: "Roofing", href: "/locations/texas/houston/roofing" },
                { label: "Google Business Profile" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — Roofing Google Business Profile
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Get Your Roofing Company Into Houston's Google Maps Pack
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When a storm hits Houston, roofing searches spike massively — and the companies already in the top 3 of Google Maps capture the surge. Your GBP position is determined before the storm, not after. We build the foundation that gets you there.
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

      <LocalSpokeAnswers city="Houston" state="Texas" industry="roofing" service="google-business-profile" />

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            The Map Pack Is Where Houston Roofing Jobs Come From
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Year-round demand, storm surges, and insurance claims all funnel through local search. The roofers in the top 3 of Google Maps capture a disproportionate share of every wave of demand.
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
            What We Optimize in Your Roofing GBP
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Every element of your GBP sends ranking signals to Google. Most roofing companies leave the majority of these signals under-utilized.
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
            A complete roofing GBP optimization — ongoing, not a one-time setup.
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
          Houston Roofing GBP Questions
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
        { name: "Charleston Roofing GBP", to: "/locations/south-carolina/charleston/roofing/google-business-profile" },
        { name: "Roofing Industry Page", to: "/industries/roofing" },
      ]} />

      <FinalCTASection
        headline="Ready to Get Into Houston's Roofing Map Pack Before the Next Storm?"
        subtitle="Map pack position is earned before the demand spike, not after. Fill out the form and we'll audit your GBP and show you what's standing between you and the top 3."
      />
    </Layout>
  );
}
