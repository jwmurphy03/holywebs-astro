import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Search, MapPin, FileText, BarChart3, Building2, Wrench, Rocket, Globe, Users, Map } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";

import FinalCTASection from "@/components/home/FinalCTASection";
import IndustryFAQ from "@/components/IndustryFAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

const relatedLinks = [
  { title: "SEO", description: "Every location needs its own local SEO strategy. We build scalable systems that work across markets.", href: "/services/seo" },
  { title: "AEO", description: "AI search visibility across multiple markets requires structured, location-specific content.", href: "/services/aeo" },
  { title: "Social Media Management", description: "Managing social across multiple locations requires consistency and local relevance.", href: "/services/social-media" },
  { title: "HVAC", description: "Multi-location HVAC companies need market-specific visibility. See our HVAC approach.", href: "/industries/hvac" },
  { title: "Plumbing", description: "Plumbing franchises and multi-location operations need scalable marketing.", href: "/industries/plumbing" },
  { title: "CPA & Bookkeeping", description: "CPA firms with multiple offices face unique multi-location marketing challenges.", href: "/industries/cpa-bookkeeping" },
];

const services = [
  {
    icon: Search,
    title: "Local SEO Per Location",
    desc: "Each location gets its own optimized web presence, targeted to the specific city and surrounding suburbs it serves.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Management",
    desc: "We build, optimize, and manage a separate GBP for each location so every one of them shows up in the local map pack.",
  },
  {
    icon: FileText,
    title: "Location-Specific Landing Pages",
    desc: "Dedicated pages for each market that rank for local searches and convert visitors into calls, not generic 'areas we serve' pages.",
  },
  {
    icon: BarChart3,
    title: "Centralized Reporting",
    desc: "One dashboard showing performance across all locations so you always know which markets are winning and which need attention.",
  },
];

const audiences = [
  {
    icon: Building2,
    title: "Franchise Operators",
    desc: "You have a proven system. We make sure every franchisee is visible in their local market.",
  },
  {
    icon: Wrench,
    title: "Multi-Location Service Businesses",
    desc: "HVAC, plumbing, roofing, electrical, and other trades operating across multiple cities or regions.",
  },
  {
    icon: Rocket,
    title: "Expanding Businesses",
    desc: "You're opening new locations and need a marketing presence built before the doors open.",
  },
];

const stats = [
  { value: "2 States", label: "Active markets we serve today" },
  { value: "11 Cities", label: "Location-specific pages managed" },
  { value: "100%", label: "Of our clients see results within 90 days" },
];

const faqs = [
  { question: "How do you handle SEO for multiple locations?", answer: "Each location gets its own dedicated landing page, optimized for the specific city and surrounding suburbs. We build unique content, local citations, and Google Business Profiles for each one so they rank independently in their own market." },
  { question: "Can you manage Google Business Profiles for all of our locations?", answer: "Yes. We set up, optimize, and manage a separate GBP for every location. That includes category selection, service descriptions, photos, review management, and weekly posts, all tailored to each market." },
  { question: "How do you maintain brand consistency across locations?", answer: "We work from your existing brand guidelines, messaging, and visual identity. Every page and profile we build follows the same tone and look, but with local details woven in so each location feels relevant to its specific market." },
  { question: "What if we're opening a new location?", answer: "We can have your digital presence, landing pages, GBP, and local SEO foundation, built and live before you open the doors. That way you're already showing up in search when customers in that market start looking for you." },
  { question: "How is this different from just having one website?", answer: "A single website with an 'areas we serve' page won't rank in local search for each individual market. Location-specific pages with unique content, local signals, and dedicated GBP listings are what Google needs to show you in the Map Pack in each city." },
  { question: "Do you offer centralized reporting?", answer: "Yes. You get a single dashboard that shows performance metrics, calls, rankings, traffic, and leads, for every location. That makes it easy to see which markets are performing and which need attention without logging into multiple tools." },
  { question: "How much does multi-location marketing cost?", answer: "It depends on how many locations you have and what services you need. Most multi-location clients invest between $3,000 and $10,000 per month. We'll give you a clear recommendation after reviewing your current setup and goals." },
  { question: "How long does it take to see results?", answer: "You'll typically see early movement within 60 to 90 days, with more meaningful ranking and lead generation improvements at the 4 to 6 month mark. New locations in less competitive markets can sometimes gain traction faster." },
  { question: "Can you work with our existing marketing team?", answer: "Absolutely. We often work alongside internal marketing teams or other agencies, handling the local SEO and GBP management while your team focuses on brand-level marketing, social media, or paid campaigns." },
  { question: "What industries do you work with for multi-location businesses?", answer: "We specialize in local service businesses, including HVAC, plumbing, roofing, electrical, construction, power washing, landscaping, and professional services like CPA and bookkeeping firms. If you serve customers in a defined local area, we can help." },
];

export default function MultiLocation() {
  return (
    <Layout>
      <Helmet>
        <title>Multi-Location & Franchise Marketing | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Holy Webs helps multi-location service businesses and franchise brands build a coordinated local marketing presence across every market they serve." />
        <link rel="canonical" href="https://holywebs.com/industries/multi-location/" />
        <meta property="og:image" content="https://holywebs.com/og/og-multi-location.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: "Multi-Location" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">MULTI-LOCATION & FRANCHISE</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            One Brand. Every Market.<br className="hidden md:inline" /> Consistent Results.
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            We help multi-location service businesses and franchise operators build a local marketing presence in every city they serve, without losing brand consistency or wasting budget.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary text-lg">
              Let's Talk
            </Link>
            <Link
              to="/resources/free-visibility-audit"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
            >
              Get a Free Visibility Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem */}
      <SectionWrapper variant="muted">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 leading-tight">
              Most Multi-Location Businesses Are Invisible in Half Their&nbsp;Markets.
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              You've built a brand that works. But when a customer in a new city searches for what you offer, your competitor shows up, not you. Managing SEO, Google Business Profiles, and local ads across multiple locations is a different challenge than running a single-location business. It requires a system, not just a strategy.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Globe, label: "Inconsistent online presence" },
              { icon: Map, label: "Missing from local Map Packs" },
              { icon: Users, label: "Competitors outranking you" },
              { icon: BarChart3, label: "No visibility into performance" },
            ].map((item) => (
              <div key={item.label} className="bg-background rounded-xl p-5 border border-border text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground text-sm font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What We Do */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          A Coordinated Local Marketing System<br className="hidden md:inline" /> Across Every Location
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every location deserves its own local marketing strategy. Here's how we build it.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Who This Is For */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Built for Businesses Like Yours
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Whether you're managing five locations or fifty, we build the local foundation each one needs to compete.
        </p>
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((a) => (
            <div key={a.title} className="bg-background rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <a.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{a.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Holy Webs */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            We Already Work Across Multiple&nbsp;Markets.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We serve businesses across Texas and South Carolina, which means we understand how local search works differently in different cities, how to build location authority from scratch, and how to scale a marketing system without losing what makes each location feel local.
          </p>
        </div>
      </SectionWrapper>

      

      <IndustryFAQ faqs={faqs} canonicalUrl="https://holywebs.com/industries/multi-location" variant="muted" />

      <RelatedLinks heading="Explore Related Services & Industries" links={relatedLinks} />
      <FinalCTASection headline="Your Brand Deserves to Be Found in Every Market You Serve" subtitle="Let's build a local marketing system that scales with your business. Fill out the form and we'll show you where your locations stand today." />
    </Layout>
  );
}
