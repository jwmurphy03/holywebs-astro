import { Helmet } from "react-helmet-async";

import { Flame, Droplets, HardHat, SprayCanIcon, Home, Calculator, Zap, TreePine, Building2, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";

const industries = [
  {
    icon: Flame,
    title: "HVAC",
    to: "/industries/hvac",
    desc: "Emergency AC and heating searches spike every season. We help HVAC companies dominate 'near me' searches and turn urgent demand into booked jobs.",
    live: true,
  },
  {
    icon: Droplets,
    title: "Plumbers",
    to: "/industries/plumbing",
    desc: "When a pipe bursts at 2 AM, homeowners grab their phone. We make sure your plumbing business is the first one they find — and the one they trust enough to call.",
    live: true,
  },
  {
    icon: Home,
    title: "Roofing",
    to: "/industries/roofing",
    desc: "Storm season drives massive demand spikes. We help roofing companies capture high-ticket leads with strategies built for seasonal surges and insurance-driven searches.",
    live: true,
  },
  {
    icon: HardHat,
    title: "Construction & Home Building",
    to: "/industries/construction",
    desc: "Custom home builders and general contractors need a portfolio that sells and a search presence that generates qualified leads — not tire kickers.",
    live: true,
  },
  {
    icon: SprayCanIcon,
    title: "Power Washing",
    to: "/industries/power-washing",
    desc: "Power washing is hyper-local and seasonal. We build visibility strategies that keep your schedule full year-round, not just during spring cleaning season.",
    live: true,
  },
  {
    icon: Calculator,
    title: "CPA & Bookkeeping",
    to: "/industries/cpa-bookkeeping",
    desc: "Trust is everything in financial services. We help CPAs and bookkeepers build credibility online and capture clients searching for tax, payroll, and accounting help.",
    live: true,
  },
  {
    icon: Zap,
    title: "Electrical",
    to: "/industries/electrical",
    desc: "From emergency repairs to EV charger installations, homeowners search online first. We help electricians dominate local search and turn clicks into booked jobs.",
    live: true,
  },
  {
    icon: TreePine,
    title: "Landscaping",
    to: "/industries/landscaping",
    desc: "Landscaping is visual, seasonal, and hyper-local. We help landscaping companies showcase their best work online and keep their schedule full year-round.",
    live: true,
  },
  {
    icon: Building2,
    title: "Multi-Location & Franchise",
    to: "/industries/multi-location",
    desc: "Managing SEO and local visibility across multiple locations requires a system, not just a strategy. We build coordinated marketing that scales with your business.",
    live: true,
  },
];

export default function Industries() {
  return (
    <Layout>
      <Helmet>
        <title>Industries We Serve — Contractors & Service Businesses | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Specialized digital marketing for HVAC, plumbing, roofing, electrical, construction, power washing, landscaping, and CPA firms. Built for contractors." />
        <link rel="canonical" href="https://holywebs.com/industries" />
      </Helmet>
      <section className="section-dark py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-6">Industries We Serve</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            We specialize in local service businesses — trades and professional services that depend on being found online to fill their schedule and grow.
          </p>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="grid md:grid-cols-2 gap-8">
          {industries.map((ind) => (
            <a
              key={ind.title}
              href={ind.to}
              className="group bg-background rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 relative"
            >
              {!ind.live && (
                <span className="absolute top-4 right-4 text-xs font-semibold bg-muted text-muted-foreground px-2.5 py-1 rounded-full">
                  Coming Soon
                </span>
              )}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <ind.icon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{ind.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{ind.desc}</p>
              <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                {ind.live ? "Learn More" : "Contact Us"} <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </SectionWrapper>

      <FinalCTASection headline="Stop Losing Jobs to Competitors With Worse Service" subtitle="You do better work — let's make sure your online presence reflects that. Fill out the form and we'll show you exactly where you're losing leads." />
    </Layout>
  );
}
