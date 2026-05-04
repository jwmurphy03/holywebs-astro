import { Helmet } from "react-helmet-async";
import {
  ArrowRight, Globe, Check, TrendingUp,
  Wind, Phone, Shield, Star, Zap, FileText,
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

const designFeatures = [
  {
    icon: Wind,
    title: "Storm Damage Landing Page",
    desc: "A dedicated page for storm damage and emergency roof repair — with a direct call path and inspection request form. When a storm hits, this is the page that converts. Most roofing sites don't have one.",
  },
  {
    icon: Phone,
    title: "Emergency-First Conversion Path",
    desc: "Your phone number is in the header on every page. A sticky mobile call bar follows users on scroll. A 'Request Emergency Inspection' CTA is above the fold on the homepage. Emergency callers convert in seconds or not at all.",
  },
  {
    icon: Shield,
    title: "License, Insurance & Credential Display",
    desc: "SC roofing license number, insurance carrier, manufacturer certifications (GAF, CertainTeed), and BBB accreditation — all visible without scrolling. Homeowners vet roofing contractors more than almost any trade.",
  },
  {
    icon: Star,
    title: "Review Integration",
    desc: "Google and Facebook review embeds pull your ratings directly onto your site — so visitors see your reputation without leaving. Updated automatically as new reviews come in.",
  },
  {
    icon: FileText,
    title: "Insurance Claim Education Page",
    desc: "A resource explaining how to file a roof insurance claim in South Carolina positions you as an expert and captures homeowners researching the process. One of the most underutilized content opportunities in roofing.",
  },
  {
    icon: Zap,
    title: "Sub-2 Second Mobile Load",
    desc: "Most roofing websites are slow on mobile. After a storm, homeowners searching from their phones won't wait. We build fast sites that load before impatience sets in — and before they tap back to find a competitor.",
  },
];

const deliverables = [
  "Conversion-optimized homepage with storm damage and emergency CTAs",
  "Storm damage + emergency roof repair landing page",
  "Individual service pages: roof replacement, repair, gutters, metal roofing",
  "Insurance claim resource page",
  "Service area pages for Charleston, Mount Pleasant, Summerville, and more",
  "Credential and licensing display on all pages",
  "Google review integration",
  "Before/after project gallery",
  "Mobile-first design with sticky call bar",
  "Contact and free inspection request forms",
];

const marketStats = [
  { stat: "68%", label: "Of roofing searches happen on mobile — often minutes after discovering storm damage" },
  { stat: "< 3s", label: "The maximum load time before a significant portion of mobile visitors abandon the page" },
  { stat: "53%", label: "Of homeowners say a contractor's website influences whether they call or look elsewhere" },
  { stat: "73", label: "Verified Google reviews for Holy Webs — credibility we build into every site we design" },
];

const faqs = [
  {
    q: "What makes a roofing website different from a generic contractor site?",
    a: "Three things: emergency access, credibility signals, and storm-specific content. A homeowner with a damaged roof after a storm isn't browsing casually — they want to reach you immediately, verify you're legitimate, and find out if you handle insurance claims. A generic contractor template doesn't address any of those needs specifically.",
  },
  {
    q: "Should we have separate pages for storm damage and regular roof replacement?",
    a: "Yes. The search intent is completely different. Someone searching 'storm damage roof repair Charleston' is in emergency mode — they want an immediate inspection. Someone searching 'roof replacement cost Charleston SC' is in research mode — they want information and estimates. One page can't serve both intents effectively.",
  },
  {
    q: "How long does a roofing website take to build?",
    a: "A fully built roofing site with service pages, area pages, and all the conversion elements typically takes 4–6 weeks. If you're heading into storm season, we can prioritize a faster launch of the core pages and add depth afterward.",
  },
  {
    q: "Do you build sites that work with our existing SEO?",
    a: "Yes. If you have existing rankings we don't want to disrupt, we map your current URL structure before redesigning, redirect correctly, and maintain the on-page elements that are contributing to current rankings. A redesign shouldn't cost you SEO equity.",
  },
];

export default function CharlestonRoofingWebDesign() {
  return (
    <Layout>
      <Helmet>
        <title>Roofing Website Design in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Fast, conversion-focused roofing websites built for Charleston, SC contractors. Storm damage landing pages, emergency-first design, and credibility signals that convert storm-season visitors into signed estimates."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/roofing/web-design/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Roofing website design for contractors in Charleston, SC."
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
              { label: "Web Design" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Roofing Web Design</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Roofing Website Design for Charleston&nbsp;Contractors
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When a homeowner discovers storm damage and grabs their phone, you have seconds to earn the call. A site built for emergency roofing — with storm damage pages, instant call access, and credibility front and center — converts that moment before they tap back and call your competitor.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Start with a free audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Charleston" state="South Carolina" industry="roofing" service="web-design" />

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Why Most Roofing Websites Fail in Storm Season
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            A generic contractor site built from a template wasn't designed for the moment when a homeowner is standing in their front yard looking at missing shingles. That moment requires a site built for urgency.
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
            What We Build Into Every Roofing Site
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Built for Charleston's weather patterns and homeowner behavior — not a generic contractor template.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {designFeatures.map((f) => (
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
            Everything Included
          </h2>
          <p className="text-white/60 text-lg text-center leading-relaxed mb-10">
            Every roofing site we build includes these deliverables as standard — not as add-ons.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {deliverables.map((item) => (
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Roofing Web Design Questions</h2>
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
        { name: "Houston Roofing Web Design", to: "/locations/texas/houston/roofing/web-design" },
        { name: "Roofing Industry Page", to: "/industries/roofing" },
      ]} />

      <FinalCTASection
        headline="Ready to Build a Roofing Site That Converts?"
        subtitle="Before the next storm season, your site needs to be ready to capture emergency calls. Fill out the form and we'll show you what your current site is costing you."
      />
    </Layout>
  );
}
