import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, TrendingUp, Star, BarChart3,
  Wind, Shield, Check, FileText, AlertTriangle, Sun,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import LocalSpokeAnswers from "@/components/LocalSpokeAnswers";

const marketStats = [
  { stat: "8–10 yr", label: "Average roof lifespan in Houston — shortened dramatically by extreme heat, UV exposure, and storm damage vs. the national 15–20 year standard" },
  { stat: "Top 3", label: "Map pack positions capture the majority of roofing clicks in Houston — especially in the post-storm surge window" },
  { stat: "5–10×", label: "Search volume spike for roofing terms in Houston in the 72 hours following a significant hail or storm event" },
  { stat: "7M+", label: "Houston metro residents — the scale of demand that makes local roofing search one of the highest-value markets in the country" },
];

const features = [
  {
    icon: MapPin,
    title: "Google Maps Pack Rankings",
    desc: "We optimize every local signal to put Houston roofing companies in the top 3 — GBP completeness, review velocity, citation consistency, engagement metrics. Being in the map pack when storm-surge searches spike is worth more than any other marketing investment.",
  },
  {
    icon: Search,
    title: "Storm & Insurance Keyword Targeting",
    desc: "We build around the searches that generate the most profitable jobs: 'roof storm damage Houston TX', 'hail damage roof repair Katy', 'insurance claim roofing Pearland', 'roof replacement The Woodlands', 'emergency roof repair after storm'. High intent, high value.",
  },
  {
    icon: FileText,
    title: "Suburb Service Area Pages",
    desc: "Katy, Pearland, The Woodlands, Sugar Land, Conroe, and Friendswood each get dedicated service area pages. Homeowners in these communities search for local roofers — not generic Houston contractors. Suburb-specific pages capture that demand.",
  },
  {
    icon: Star,
    title: "Review Generation System",
    desc: "Reviews are a direct ranking factor and the primary trust signal for a high-ticket purchase like a roof replacement. We build a consistent process to generate new reviews after every completed job — keeping your velocity competitive year-round.",
  },
  {
    icon: Shield,
    title: "Insurance Claim Content Strategy",
    desc: "Houston homeowners searching for roofing after a storm are often navigating insurance claims. Content that addresses the claims process, working with adjusters, and what to expect positions your company as the expert — and captures high-intent searches competitors miss.",
  },
  {
    icon: BarChart3,
    title: "Monthly Reporting That Matters",
    desc: "Keyword rankings, map pack position, traffic trends, and call volume. Clear numbers in plain language tied to actual roofing inquiries — not impressions on a report that doesn't tell you if you got any jobs.",
  },
];

const houstonAngles = [
  {
    icon: Wind,
    text: "Hurricane Harvey and subsequent tropical systems caused billions in Houston roofing damage. Homeowners who patched rather than replaced after Harvey are now entering the full replacement cycle — driving a sustained wave of roof replacement searches across the metro.",
  },
  {
    icon: Sun,
    text: "Houston's extreme heat and UV intensity shortens residential roof lifespans to 8–10 years — roughly half the national average. This creates a significantly higher replacement frequency than most roofing markets, generating more searches per capita every year.",
  },
  {
    icon: AlertTriangle,
    text: "Katy, Pearland, and The Woodlands have some of the highest hail frequency rates in Texas. After a significant hail event, roofing searches spike 5–10x and out-of-state storm chasers flood the market. Local roofers with established SEO rankings are already positioned when the surge hits.",
  },
  {
    icon: TrendingUp,
    text: "Houston's fastest-growing suburbs have among the highest rates of new construction in the country — and new homeowners in Pearland, Conroe, and Katy are searching for roofing contractors for maintenance and warranty work from the moment they move in.",
  },
];

const process = [
  {
    step: "01",
    title: "Houston Roofing Market Audit",
    desc: "We audit your current rankings, GBP, and competitor profiles across the Houston suburbs where you operate. You see exactly which searches you're missing and where your competitors are outperforming you — and what it will take to close the gap.",
  },
  {
    step: "02",
    title: "Foundation Build",
    desc: "We optimize your GBP for maximum map pack eligibility, fix technical SEO issues on your website, build suburb-specific service area pages, and establish the citation consistency that local rankings depend on.",
  },
  {
    step: "03",
    title: "Content, Citations & Reviews",
    desc: "We create Houston-specific roofing content around storm damage, insurance claims, and heat-shortened roof life — build citations on the directories that matter, and implement a review generation system tied to your job completion workflow.",
  },
  {
    step: "04",
    title: "Storm-Season Readiness",
    desc: "Houston's peak roofing search volume follows storm events. We position your rankings before hurricane season and peak hail months — so you're capturing surge demand that your competitors can only watch go by.",
  },
];

const faqs = [
  {
    q: "How long does SEO take for a roofing company in Houston?",
    a: "Map pack movement typically appears in 60–90 days with proper foundation work. Meaningful organic ranking gains take 4–6 months. The strategic imperative for Houston roofers is to have rankings established before storm season — so when Harvey-level event searches spike, you're already in position rather than still climbing.",
  },
  {
    q: "What roofing keywords should I be targeting in Houston?",
    a: "The highest-value categories are storm damage and insurance: 'roof storm damage repair Houston', 'hail damage roof Katy', 'insurance claim roofing Pearland'. Followed by planned replacement searches: 'roof replacement The Woodlands', 'roofing company Sugar Land'. We also build suburb-specific variations for every community in your service area.",
  },
  {
    q: "How does Houston's storm history affect roofing SEO strategy?",
    a: "Harvey and subsequent storm events created a multi-year wave of roofing demand that continues to ripple through the market. We build content that captures homeowners navigating insurance claims, planning delayed replacements, and searching for roofers who have storm damage experience specifically. This positions your company as the expert in Houston's distinctive storm recovery market.",
  },
  {
    q: "How do out-of-state storm chasers affect the Houston roofing market?",
    a: "Storm chasers flood the Houston market after major events, but they typically don't have established local SEO. They either can't rank in local search or rank poorly. A well-optimized local roofing company with established GBP, reviews, and suburb-specific content has a structural advantage over storm chasers that can't be easily replicated in a short window.",
  },
  {
    q: "Can you help us rank for insurance claim roofing searches in Houston?",
    a: "Yes — and this is one of the most valuable keyword categories in the Houston roofing market. We build content that addresses the insurance claim process, working with adjusters, documentation requirements, and what homeowners should know before signing anything. This content captures high-intent searches and positions your company as the expert on a topic most roofers ignore.",
  },
  {
    q: "Do you require a long-term contract?",
    a: "No. We work month-to-month. We'll be transparent about the timeline for results, but we never lock you in. The results justify the investment.",
  },
];

const neighborhoods = [
  "Katy", "Pearland", "The Woodlands", "Sugar Land",
  "Conroe", "Spring", "Friendswood", "League City",
  "Cypress", "Tomball", "Missouri City", "Humble",
  "Pasadena", "Baytown", "Richmond", "Stafford",
];

export default function HoustonRoofingSeo() {
  return (
    <Layout>
      <Helmet>
        <title>Local SEO for Roofing Contractors in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Rank higher on Google Maps for roofing searches in Houston, TX. Local SEO for Houston roofers — storm damage, insurance claims, hail, and replacement. Built for Houston's market."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/roofing/seo/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Local SEO for Roofing Contractors — Houston, TX",
            description: "Local SEO for roofing contractors in Houston, Texas.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [
              { "@type": "City", name: "Houston" },
              { "@type": "City", name: "Katy" },
              { "@type": "City", name: "Pearland" },
              { "@type": "City", name: "The Woodlands" },
            ],
            serviceType: "Local SEO",
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Local SEO for roofing contractors in Houston, TX. Storm damage, insurance claims, hail damage, and roof replacement keyword strategy."
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
                { label: "Local SEO" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — Roofing Local SEO
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Get Your Roofing Company to the Top of Google in&nbsp;Houston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Houston's combination of extreme heat, storm seasons, and 7 million residents generates roofing search demand that dwarfs most markets. The roofing companies that dominate local search capture an outsized share of that demand — year-round, not just after storms.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">
                Get a Free SEO Audit
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

      <LocalSpokeAnswers city="Houston" state="Texas" industry="roofing" service="seo" />

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Houston's Roofing Market Generates More Demand Per Capita Than Almost Any Other City
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Extreme heat, storm damage, and shortened roof lifespans create a replacement cycle that runs faster in Houston than in most markets. The contractors positioned at the top of local search capture that demand continuously.
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

      {/* Houston-Specific Angles */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
            Why Houston Roofing SEO Is a Market Apart
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Houston isn't a typical roofing market. The combination of hurricane exposure, hail frequency, and extreme UV heat creates a roof replacement cycle that generates consistently high search volume — even in years without major storm events.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                After Harvey, Houston homeowners became more attuned to roof condition than nearly any other market in the country. Insurance claim navigation, damage documentation, and finding a trustworthy local roofer are all search behaviors that persist years after the initial event.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The fast-growing suburbs — Katy, Pearland, The Woodlands, Conroe — add new roofing demand continuously. New construction, new homeowners, new searches. The roofers with suburb-specific SEO capture this demand from the moment residents move in.
              </p>
            </div>
            <div className="space-y-4">
              {houstonAngles.map((item) => (
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

      {/* Features */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What's Included in Roofing Local SEO
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          A complete local SEO strategy built for roofing contractors across the Houston metro.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Our Process</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          No smoke and mirrors — here's how we approach roofing SEO in Houston.
        </p>
        <div className="max-w-3xl mx-auto space-y-8">
          {process.map((p) => (
            <div key={p.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-extrabold text-lg">{p.step}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Areas Served */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Roofing SEO Across the Houston Metro
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build suburb-specific rankings for every community you serve.
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
          Questions About Roofing SEO in Houston
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

      {/* Cross-links */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-10">
            Explore More for Houston Roofing Companies
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Google Ads for Roofers in Houston", desc: "Capture storm-surge demand immediately while your organic rankings build.", href: "/locations/texas/houston/roofing/google-ads" },
              { title: "Google Business Profile for Roofers", desc: "The map pack is where post-storm roofing jobs originate. We optimize your GBP to own it.", href: "/locations/texas/houston/roofing/google-business-profile" },
              { title: "Roofing Digital Marketing", desc: "See our complete approach to digital marketing for roofing contractors.", href: "/industries/roofing" },
            ].map((link) => (
              <a key={link.title} href={link.href} className="block bg-background rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group">
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{link.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{link.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">Learn more <ArrowRight className="w-3.5 h-3.5" /></span>
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>

            <NearbyMarkets markets={[
        { name: "Houston Roofing Marketing", to: "/locations/texas/houston/roofing" },
        { name: "Houston Roofing Google Ads", to: "/locations/texas/houston/roofing/google-ads" },
        { name: "Charleston Roofing SEO", to: "/locations/south-carolina/charleston/roofing/seo" },
        { name: "Roofing Industry Page", to: "/industries/roofing" },
      ]} />

      <FinalCTASection
        headline="Ready to Dominate Roofing Search in Houston?"
        subtitle="Houston homeowners are searching for roofers right now — and after every storm, that demand spikes. Fill out the form and we'll show you where you rank and how to get to the top before the next event."
      />
    </Layout>
  );
}
