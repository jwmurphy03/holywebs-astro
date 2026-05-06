import { ArrowRight, BarChart3, Check, FileText, MapPin, Search, Star, Target } from "lucide-react";

import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FAQSchema from "@/components/FAQSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import RelatedLinks from "@/components/RelatedLinks";
import FinalCTASection from "@/components/home/FinalCTASection";

type Industry = "hvac" | "plumbing" | "roofing";
type StateSlug = "texas" | "south-carolina";

interface MoneyPageProps {
  city: string;
  state: string;
  stateSlug: StateSlug;
  citySlug: string;
  industry: Industry;
  nearby: string[];
}

const industryConfig = {
  hvac: {
    label: "HVAC",
    plural: "HVAC companies",
    singular: "HVAC company",
    customer: "homeowners",
    jobs: "AC repair, HVAC replacement, maintenance, and emergency service calls",
    keywords: ["AC repair", "HVAC replacement", "emergency AC service", "furnace repair", "heat pump installation"],
    proof: "seasonal urgency, financing options, reviews, service-area pages, and emergency contact paths",
  },
  plumbing: {
    label: "Plumbing",
    plural: "plumbing companies",
    singular: "plumbing company",
    customer: "homeowners and property managers",
    jobs: "emergency plumbing, drain cleaning, water heater, leak repair, and repipe jobs",
    keywords: ["emergency plumber", "drain cleaning", "water heater repair", "slab leak repair", "sewer line repair"],
    proof: "emergency response language, clear service pages, reviews, job photos, and strong local trust signals",
  },
  roofing: {
    label: "Roofing",
    plural: "roofing companies",
    singular: "roofing company",
    customer: "homeowners and property owners",
    jobs: "roof replacement, storm damage repair, roof inspections, leak repair, and insurance-related estimates",
    keywords: ["roof replacement", "storm damage repair", "roof inspection", "roof leak repair", "hail damage roofing"],
    proof: "project photos, insurance claim guidance, reviews, service-area pages, and local credibility signals",
  },
};

const stateLabels: Record<StateSlug, string> = {
  texas: "Texas",
  "south-carolina": "South Carolina",
};

export default function LocalSeoMoneyPage({ city, state, stateSlug, citySlug, industry, nearby }: MoneyPageProps) {
  const config = industryConfig[industry];
  const statePath = `/locations/${stateSlug}`;
  const cityPath = `${statePath}/${citySlug}`;
  const industryPath = `/industries/${industry === "plumbing" ? "plumbing" : industry}`;
  const canonical = `https://holywebs.com${cityPath}/${industry}/seo/`;
  const title = `Local SEO for ${config.label} Companies in ${city}, ${state} | Holy Webs`;
  const description = `Local SEO for ${config.plural} in ${city}, ${state}. Google Maps optimization, service-area content, Google Business Profile work, tracking, and monthly SEO built to drive more calls.`;

  const faqs = [
    {
      q: `How does local SEO help ${config.plural} in ${city}?`,
      a: `Local SEO helps your ${config.singular} show up when ${config.customer} search for high-intent services like ${config.keywords.slice(0, 3).join(", ")}. The goal is more visibility in Google Maps, stronger organic rankings, and a website that turns those visits into calls.`,
    },
    {
      q: `Do ${city} ${config.plural} need separate service-area pages?`,
      a: `Usually, yes. If you serve nearby markets like ${nearby.slice(0, 3).join(", ")}, your site should explain that clearly with useful local context instead of thin city-name swaps.`,
    },
    {
      q: "Is this available as a one-time SEO project?",
      a: "Our public offers are built around monthly growth plans because local visibility compounds over time. Website structure, Google Business Profile work, content, citations, reviews, tracking, and improvements need to work together.",
    },
  ];

  return (
    <Layout>
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city={city}
        state={state}
        description={description}
        areaServed={[city, ...nearby.slice(0, 5)]}
      />

      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-dark" />
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Locations", href: "/locations" },
                { label: stateLabels[stateSlug], href: statePath },
                { label: city, href: cityPath },
                { label: config.label, href: industryPath },
                { label: "Local SEO" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              {city}, {state} {config.label} Local SEO
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Local SEO for {config.label} Companies in {city}
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              When {config.customer} in {city} search for {config.jobs}, the companies that show up first get the chance to win the job. Holy Webs builds the website, Google Business Profile, content, citation, and tracking system that helps your {config.singular} get found.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/pricing" className="btn-primary text-lg">
                View Monthly Plans
              </a>
              <a
                href="/services/seo"
                className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
              >
                Learn about local SEO
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-start">
            <div>
              <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Why This Page Exists</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5">
                {city} Search Is Too Valuable for Generic SEO
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Ranking for {config.label.toLowerCase()} searches in {city} is not just about adding keywords to a homepage. Google needs to understand what you do, where you work, which services matter most, and why customers should trust your business.
                </p>
                <p>
                  We build that foundation inside our monthly plans. The website, local SEO, Google Business Profile, tracking, and monthly improvements are packaged together because they support the same outcome: more qualified local opportunities.
                </p>
                <p>
                  For {city} {config.plural}, the highest-value SEO work usually connects {config.proof}. When those pieces line up, your business is easier for customers and search engines to choose.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-muted/40 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-4">High-intent searches we plan around</p>
              <div className="space-y-3">
                {config.keywords.map((keyword) => (
                  <div key={keyword} className="flex gap-3">
                    <Search className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="font-medium text-foreground">{keyword} in {city}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">
            What We Improve for {city} {config.label} SEO
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            The work is not a random checklist. Each piece makes the next piece stronger.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: "Google Maps Visibility", text: "Profile categories, services, photos, posts, reviews, and local relevance all need to support the market you want to win." },
              { icon: FileText, title: "Service and Area Pages", text: `We build useful pages around your most profitable services and nearby markets like ${nearby.slice(0, 3).join(", ")}.` },
              { icon: Star, title: "Trust Signals", text: "Reviews, project proof, clear offers, and local details help visitors feel confident enough to call." },
              { icon: Target, title: "Citation Consistency", text: "Your name, address, phone, categories, and service information should be consistent across the local web." },
              { icon: BarChart3, title: "Tracking and Reporting", text: "Calls, forms, rankings, map visibility, and next steps are tracked in plain language." },
              { icon: Check, title: "Monthly Improvement", text: "SEO gets stronger when the site, GBP, content, and conversion paths keep improving after launch." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-background p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm text-center">Offer Fit</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-5">
            This Fits Inside Local Growth or Local Authority
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto mb-10">
            We do not sell disconnected SEO tasks. For most {city} {config.plural}, the decision is whether you need the one-market Local Growth plan or the stronger Local Authority plan for nearby-city expansion.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="/pricing" className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/40 hover:shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary">Local Growth</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Best when your main goal is to build a stronger website, GBP, and SEO foundation for {city}.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold">
                See the $1,997 plan <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a href="/pricing" className="group rounded-xl border border-primary/30 bg-primary/5 p-6 transition-all hover:border-primary/60 hover:shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary">Local Authority</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Best when you want more content, more citations, and a stronger push into surrounding markets.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold">
                See the $2,997 plan <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-10">
            Common Questions
          </h2>
          <div className="grid gap-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-lg border border-border bg-background p-5">
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <RelatedLinks
        heading="Useful Next Pages"
        subheading={`These pages help connect the strategy for ${city} ${config.label} SEO.`}
        links={[
          { title: "Pricing", description: "See the monthly plans that include website, SEO, GBP, tracking, and ongoing improvement.", href: "/pricing" },
          { title: "Local SEO", description: "Learn how Holy Webs approaches SEO for local service businesses.", href: "/services/seo" },
          { title: "Google Business Profile", description: "See how GBP work supports local rankings and calls.", href: "/services/google-business-profile" },
          { title: "Website Design", description: "A stronger website makes SEO traffic easier to convert.", href: "/services/web-design" },
          { title: config.label, description: `Explore how we market ${config.plural} across web, SEO, GBP, and ads.`, href: industryPath },
          { title: `${city} Digital Marketing`, description: `See the broader local marketing strategy for service businesses in ${city}.`, href: cityPath },
        ]}
      />

      <FinalCTASection
        headline={`Want to Know Where Your ${city} ${config.label} SEO Stands?`}
        subtitle="Tell us what you do, where you work, and which jobs matter most. We will show you where visibility is leaking and which plan honestly fits."
      />
    </Layout>
  );
}
