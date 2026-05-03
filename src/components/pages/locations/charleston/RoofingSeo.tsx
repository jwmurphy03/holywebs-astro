import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, Check, TrendingUp,
  Wind, CloudRain, Home, Star, Clock,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import LocalSpokeAnswers from "@/components/LocalSpokeAnswers";

const charlestonWaterfront = "/assets/charleston-waterfront.jpg";

const seoFeatures = [
  {
    icon: Wind,
    title: "Storm-Damage Keyword Targeting",
    desc: "\"Storm damage roof repair Charleston,\" \"hail damage roofing Mount Pleasant,\" \"wind damage roof assessment\" — we build content and local signals around the searches that spike after every weather event.",
  },
  {
    icon: Home,
    title: "Roof Replacement Page Strategy",
    desc: "\"Roof replacement Charleston SC\" is high-volume and high-ticket. Most roofers don't have a dedicated, optimized page for it. We build the content authority that ranks for replacement queries year-round.",
  },
  {
    icon: MapPin,
    title: "Service Area Page Architecture",
    desc: "One homepage can't rank for Mount Pleasant, Summerville, and James Island simultaneously. We build geo-targeted service pages that capture local searches across every community you serve.",
  },
  {
    icon: Search,
    title: "Google Business Profile Integration",
    desc: "Your GBP and website work together as a single ranking signal. We align categories, services, and content so Google sees a consistent, authoritative roofing business across every touchpoint.",
  },
  {
    icon: Star,
    title: "Review Velocity Strategy",
    desc: "Roofing is a trust purchase. We build a systematic review generation process that keeps recent reviews coming in — because Google ranks recency, and homeowners read them.",
  },
  {
    icon: TrendingUp,
    title: "Long-Tail Specialty Targeting",
    desc: "\"Metal roofing contractor Charleston,\" \"flat roof repair James Island,\" \"TPO roofing Summerville\" — specialty searches are lower competition and higher intent. We capture the full search landscape, not just the obvious head terms.",
  },
];

const marketStats = [
  { stat: "6 mo.", label: "Hurricane season creates 6 months of elevated storm-damage search volume every year" },
  { stat: "42%", label: "Of all local clicks go to the top 3 map pack results — the only positions that matter" },
  { stat: "3–5×", label: "Roofing search volume increase in the 72 hours following a named storm event" },
  { stat: "73", label: "Verified Google reviews for Holy Webs — we apply the same strategy we use for ourselves" },
];

const process = [
  { step: "01", title: "Visibility Audit", desc: "We map exactly where you rank for high-value roofing terms in Charleston, Mount Pleasant, Summerville, and your full service area. You see the gaps before we start." },
  { step: "02", title: "Foundation Build", desc: "Technical SEO cleanup, GBP alignment, citation consistency, and service page structure — the infrastructure that everything else builds on." },
  { step: "03", title: "Content & Authority", desc: "Storm-damage landing pages, replacement cost guides, neighborhood service pages, and the content that earns organic rankings over time." },
  { step: "04", title: "Review & Rank", desc: "Systematic review generation keeps your GBP ranking signal fresh. Monthly tracking shows you exactly what's moving and what's next." },
];

const faqs = [
  {
    q: "How long does roofing SEO take to work in Charleston?",
    a: "GBP optimization typically shows map pack movement in 4–8 weeks. Organic rankings for competitive terms like 'roof replacement Charleston' take 4–6 months to build real traction. Storm-damage keywords can rank faster because most contractors don't optimize for them specifically — that's the early opportunity we exploit.",
  },
  {
    q: "What are the best roofing keywords to target in Charleston?",
    a: "The highest-value searches are roof replacement, storm damage repair, and emergency roof repair — all with Charleston, Mount Pleasant, Summerville, or James Island modifiers. Beyond those, specialty terms like metal roofing, flat roof repair, and insurance claim roofing tend to be lower competition with strong commercial intent.",
  },
  {
    q: "Can SEO help us capture work after a storm?",
    a: "Yes — but the SEO work has to happen before the storm. When a tropical system moves through Charleston, hundreds of homeowners search for roofers in the next 24–72 hours. Contractors who already rank in the map pack capture that surge. Contractors who try to 'do SEO after the storm' are months too late.",
  },
  {
    q: "How do you handle the off-season for roofing SEO?",
    a: "We don't pause in the off-season. That's when rankings are built for the next storm season. Consistent content, review generation, and GBP activity during the slower months is what puts you at the top when search volume spikes again.",
  },
  {
    q: "Do you guarantee rankings?",
    a: "No one can guarantee specific rankings — Google controls those. What we can guarantee is a documented strategy, transparent monthly reporting, and work that consistently moves the needle. We've built a 73-review GBP presence in our own market doing exactly what we do for clients.",
  },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Goose Creek", "Hanahan", "Isle of Palms", "Sullivan's Island",
];

export default function CharlestonRoofingSeo() {
  return (
    <Layout>
      <Helmet>
        <title>Local SEO for Roofing Contractors in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Rank at the top of Google for storm damage repair, roof replacement, and roofing searches in Charleston, SC. Local SEO built for Lowcountry roofing contractors."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/roofing/seo" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Local SEO for roofing contractors in Charleston, SC."
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
              { label: "South Carolina" },
              { label: "Charleston", href: "/locations/south-carolina/charleston" },
              { label: "Roofing", href: "/locations/south-carolina/charleston/roofing" },
              { label: "Local SEO" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Roofing Local SEO</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Local SEO for Roofing Contractors in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              After every storm, hundreds of Charleston homeowners search for roofers. The contractors in the top 3 of Google Maps get the calls. We build the rankings that put you there — before storm season starts.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                See your current rankings <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Charleston" state="South Carolina" industry="roofing" service="seo" />

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            The Roofing SEO Opportunity in Charleston
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Most roofing contractors in Charleston are competing for the same three generic keywords — and ignoring the long-tail searches where the real opportunity is. We capture the full landscape.
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            What Our Roofing SEO Covers
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Built specifically for the Charleston market — not a recycled template from somewhere else.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoFeatures.map((f) => (
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

      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
            Why Storm-Ready SEO Is the Roofing Edge in Charleston
          </h2>
          <p className="text-white/60 text-lg text-center leading-relaxed mb-10">
            Most roofing contractors think about SEO only after a storm. That's too late. The rankings that capture storm-damage calls are built in the months before the event — and maintained in the quiet months after.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Storm-damage landing pages built and indexed before season starts",
              "GBP categories optimized for emergency and storm repair searches",
              "Neighborhood service pages that rank hyper-locally across the tri-county area",
              "Review generation system that keeps your ranking signal fresh year-round",
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

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center p-6 bg-background rounded-xl border border-border">
                <p className="text-4xl font-extrabold text-primary/20 mb-2">{p.step}</p>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Service Area Coverage</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build local SEO signals for every community in your service area — not just the city of Charleston.
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

      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Roofing SEO Questions</h2>
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
        { name: "Charleston Roofing Marketing", to: "/locations/south-carolina/charleston/roofing" },
        { name: "Charleston Roofing Google Ads", to: "/locations/south-carolina/charleston/roofing/google-ads" },
        { name: "Houston Roofing SEO", to: "/locations/texas/houston/roofing/seo" },
        { name: "Roofing Industry Page", to: "/industries/roofing" },
      ]} />

      <FinalCTASection
        headline="Ready to Rank Before the Next Storm?"
        subtitle="Every storm season, hundreds of Charleston homeowners search for roofers. Let's make sure they find you. Fill out the form and we'll show you exactly where you rank right now."
      />
    </Layout>
  );
}
