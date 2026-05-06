import { Helmet } from "react-helmet-async";
import {
  ArrowRight, Star, Check, TrendingUp,
  Wind, MapPin, Camera, MessageSquare, Clock, Shield,
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

const optimizationChecklist = [
  { icon: Shield, title: "Primary Category: Roofing Contractor", desc: "Not 'General Contractor' or 'Construction Company.' The primary category is your single most important GBP ranking signal — it has to be exact." },
  { icon: Wind, title: "Storm Damage Service Listed", desc: "Storm damage repair and emergency roofing need to be explicit services in your GBP — not buried in the description. Google uses service data to match you to storm-intent searches." },
  { icon: MapPin, title: "Tri-County Service Area Configuration", desc: "Your GBP service area needs to include all three Lowcountry counties plus key cities: Charleston, Mount Pleasant, Summerville, North Charleston, Goose Creek, and James Island." },
  { icon: Camera, title: "Before/After Job Photos", desc: "Roofing is a visual purchase. Before/after photos of actual jobs in the Lowcountry — with Charleston-area landmarks or neighborhoods visible — outperform stock images for both trust and GBP rankings." },
  { icon: MessageSquare, title: "Review Velocity System", desc: "A steady stream of recent reviews — 2–4 per month minimum — outperforms a large number of old reviews. Google measures recency. We build the follow-up sequence that makes review generation automatic." },
  { icon: Clock, title: "Storm-Season GBP Posts", desc: "GBP posts during storm season signal active availability to Google and homeowners. Posts about storm inspection offers, insurance claim assistance, and emergency availability keep your profile current when it matters most." },
  { icon: TrendingUp, title: "Q&A Section Seeded", desc: "Pre-populate the Q&A section with questions homeowners actually ask: 'Do you work with insurance claims?' 'How soon can you inspect after a storm?' — and answer them authoritatively." },
  { icon: Star, title: "Review Response Protocol", desc: "Responding to reviews — especially negative ones — is a GBP ranking signal and a trust signal to homeowners researching your company. We handle responses that protect your reputation and demonstrate professionalism." },
];

const marketStats = [
  { stat: "42%", label: "Of all local clicks go to the top 3 map pack results — the positions GBP optimization determines" },
  { stat: "91%", label: "Of homeowners say online reviews influence which local contractor they call" },
  { stat: "3×", label: "More calls generated from a fully optimized GBP vs. a basic listing in the same market" },
  { stat: "73", label: "Verified Google reviews for Holy Webs — we practice what we preach in this market" },
];

const faqs = [
  {
    q: "How does GBP optimization help after a storm in Charleston?",
    a: "When a storm event generates emergency roofing searches, Google's map pack is the first thing most homeowners see. A fully optimized GBP with recent reviews, storm-damage services listed, and an active posting history ranks higher in those emergency searches than a neglected profile with an old review from two years ago. The optimization work happens before the storm — not after.",
  },
  {
    q: "How many Google reviews does a Charleston roofer need to rank in the map pack?",
    a: "There's no magic number, but consistent recency beats raw count. A profile with 20 reviews from the past 12 months will typically outrank a profile with 80 reviews where the most recent is two years old. We focus on velocity — a steady stream of recent reviews — rather than one big push.",
  },
  {
    q: "Can you help manage negative reviews?",
    a: "Yes. Negative review management is part of our GBP service. We help craft professional, factual responses that protect your reputation without escalating the situation. Homeowners researching your company read your responses as much as they read the reviews — a well-handled negative review often builds more trust than a profile with only perfect scores.",
  },
  {
    q: "What's the difference between a service area business and a business with a physical address on GBP?",
    a: "Most roofing contractors are service area businesses — you go to the customer, not the other way around. GBP handles this correctly if configured right: your service area should list the specific cities and counties you serve (not just your zip code). We've seen roofing companies lose half their potential map pack coverage because their service area was set too narrowly.",
  },
];

export default function CharlestonRoofingGbp() {
  return (
    <Layout>
      <Helmet>
        <title>Google Business Profile for Roofing Contractors in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="GBP optimization for roofing contractors in Charleston, SC. Get into the top 3 of Google Maps for storm damage repair, roof replacement, and roofing searches across the Lowcountry."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/roofing/google-business-profile/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Google Business Profile optimization for roofing contractors in Charleston, SC."
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
              { label: "Roofing", href: "/locations/south-carolina/charleston/roofing" },
              { label: "Google Business Profile" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Roofing GBP Optimization</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Google Business Profile for Roofers in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              The map pack is where most roofing jobs start — and where most contractors have the biggest gaps. We optimize every signal that determines whether you show up in the top 3 when Charleston homeowners search after a storm.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                See where you rank <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Charleston" state="South Carolina" industry="roofing" service="google-business-profile" />

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Why GBP Is the Most Important Roofing Marketing Asset in Charleston
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            When homeowners search for a roofer after a storm, the map pack is the first thing they see. The three businesses that appear there get the calls. Everyone below them — no matter how many ads they run — doesn't.
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

      <SectionWrapper variant="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
            The Charleston Roofing GBP Optimization Checklist
          </h2>
          <p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-12">
            Most roofing GBP profiles in Charleston are missing multiple items from this list. Every gap is a ranking disadvantage — and a lost call.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {optimizationChecklist.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            What We Actually Do
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            GBP optimization isn't a one-time setup. It's an ongoing system that compounds over time.
          </p>
          <div className="space-y-4">
            {[
              { title: "Month 1: Full Profile Audit & Rebuild", desc: "Category correction, service area configuration, service menu build-out, photo upload, Q&A seeding, and description optimization." },
              { title: "Months 2+: Velocity & Maintenance", desc: "Monthly GBP posts, review response management, review generation support, and ongoing photo updates with job photos from your work in the field." },
              { title: "Storm Season: Active Management", desc: "During hurricane season, we increase posting frequency, add storm-damage service updates, and monitor for review spikes that need rapid response." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Roofing GBP Questions</h2>
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
        { name: "Charleston Roofing SEO", to: "/locations/south-carolina/charleston/roofing/seo" },
        { name: "Houston Roofing GBP", to: "/locations/texas/houston/roofing/google-business-profile" },
        { name: "Roofing Industry Page", to: "/industries/roofing" },
      ]} />

      <FinalCTASection
        headline="Ready to Be in the Top 3 for Roofing in Charleston?"
        subtitle="Most roofing GBP profiles in this market are incomplete. Fill out the form and we'll show you exactly what's missing from yours — and what it'll take to rank in the map pack."
      />
    </Layout>
  );
}
