import { Helmet } from "react-helmet-async";
import { Check, ArrowRight, Monitor, Smartphone, Zap, Search, Shield, BarChart3, Code, Gauge, Globe, Lock, Database, Palette } from "lucide-react";

import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import ServicesSocialProof from "@/components/ServicesSocialProof";
import WhereWeServe from "@/components/WhereWeServe";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSchema from "@/components/FAQSchema";
import RelatedLinks from "@/components/RelatedLinks";

const relatedLinks = [
  { title: "SEO", description: "A beautiful website needs traffic. Our local SEO strategies make sure your new site gets found by the right customers.", href: "/services/seo" },
  { title: "Google Ads", description: "Launch targeted ad campaigns that drive immediate traffic to your new website while organic rankings build.", href: "/services/google-ads" },
  { title: "Google Business Profile", description: "Your website and GBP work together. We optimize both so you dominate local search results.", href: "/services/google-business-profile" },
  { title: "Construction", description: "See how we build high-performance websites for construction companies that generate leads.", href: "/industries/construction" },
  { title: "Roofing", description: "Roofing companies need fast, mobile-first websites. Here is how we build them.", href: "/industries/roofing" },
  { title: "HVAC", description: "HVAC websites need to convert visitors into booked calls. See our approach.", href: "/industries/hvac" },
];

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    desc: "Over 60% of your customers are searching on their phone. Every site we build is designed for mobile first, then scaled up — not the other way around.",
  },
  {
    icon: Zap,
    title: "Fast Load Times",
    desc: "Speed matters for both users and Google. We build lightweight, optimized sites that load in under 3 seconds — because every second of delay costs you leads.",
  },
  {
    icon: Search,
    title: "Built for SEO",
    desc: "Clean code, proper heading structure, schema markup, and optimized metadata — baked in from day one so your site is ready to rank the moment it goes live.",
  },
  {
    icon: BarChart3,
    title: "Conversion-Focused",
    desc: "A beautiful site that doesn't convert is just a brochure. We design every page around a clear goal — getting visitors to call, click, or fill out a form.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    desc: "SSL certificates, regular updates, and clean hosting. Your site stays protected, fast, and online — so you never lose a lead to downtime.",
  },
  {
    icon: Monitor,
    title: "Easy to Manage",
    desc: "Built on WordPress so you can make simple updates yourself. And when you need help, we're a text or email away.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    desc: "We learn your business, your customers, and your competition. No generic questionnaire — we have a real conversation about what's working and what isn't.",
  },
  {
    step: "02",
    title: "Design & Build",
    desc: "We design and develop your site with your brand, your voice, and your goals front and center. You'll review everything before it goes live.",
  },
  {
    step: "03",
    title: "Launch & Optimize",
    desc: "Once approved, we launch, connect analytics, submit to Google, and make sure everything is dialed in. Then we keep an eye on performance and adjust.",
  },
];

const faqs = [
  {
    q: "How long does a website take to build?",
    a: "Most standard websites are completed within 7–14 days. More complex or custom builds may take a bit longer depending on the scope — we'll give you a clear timeline upfront so there are no surprises.",
  },
  {
    q: "Do I own my website?",
    a: "Yes. 100%. You own everything — the design, the content, the domain. If you ever want to move, you take it all with you.",
  },
  {
    q: "Do you only work with service businesses?",
    a: "That's our specialty — contractors, trades, home services, health and wellness, and more. But we also work with professional services like CPAs, financial advisors, and consultants.",
  },
  {
    q: "What platform do you build on?",
    a: "We primarily build on WordPress. It's reliable, scalable, and gives you the ability to make basic updates yourself when needed.",
  },
  {
    q: "What if I already have a website?",
    a: "We'll audit what you have and tell you honestly whether it makes sense to redesign or rebuild. Sometimes a few strategic changes are all it takes.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. We offer maintenance plans that include updates, security monitoring, backups, and priority support so your site stays healthy long after launch.",
  },
];

export default function WebDesign() {
  return (
    <Layout>
      <Helmet>
        <title>Web Design for Local Service Businesses | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Custom, mobile-first websites built for contractors and service businesses. Fast-loading, conversion-focused web design that turns visitors into booked jobs." />
        <link rel="canonical" href="https://holywebs.com/services/web-design" />
        <meta property="og:image" content="https://holywebs.com/og/og-web-design.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Design",
            description: "Custom, mobile-first websites built for contractors and service businesses. Fast-loading, conversion-focused web design that turns visitors into booked jobs.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "State", name: "Texas" }, { "@type": "State", name: "South Carolina" }]
          })}
        </script>
      </Helmet>
      <FAQSchema faqs={faqs} />
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0F1729]" />
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.12] mix-blend-overlay" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Web Design" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Web Design Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Your Website Should Be Your Best Salesperson
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Most local business websites look outdated, load slowly, and do nothing to convert visitors into customers. We build websites that look sharp, load fast, and are designed from the ground up to turn visitors into&nbsp;calls.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="btn-primary text-lg">
              Get a Free Quote
            </a>
            <a
              href="/resources/free-visibility-audit"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
            >
              Or start with a free audit
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper variant="muted">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "300+", label: "Websites Launched" },
            { value: "1.8s", label: "Avg. Load Time" },
            { value: "4.9★", label: "Client Rating" },
            { value: "3x", label: "Avg. Lead Increase" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-background rounded-xl border border-border">
              <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Problem Section */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            A Website That Doesn't Convert Is Just a Digital Business Card
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            You've probably been told you "need a website" — and you got one. Maybe it was a template. Maybe a friend built it. Maybe you paid an agency that disappeared after launch. Either way, it's not doing what it should be doing: bringing in leads.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Your website is the first impression most customers will ever have of your business. If it looks outdated, loads slowly, or makes it hard to contact you — they're calling your competitor instead.
          </p>
        </div>
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What You Get With Holy Webs
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every website we build is custom-designed around your business, your customers, and your goals.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="bg-background rounded-xl p-6 border border-border">
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
      <SectionWrapper variant="dark">
        <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
          Our Process
        </h2>
        <p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-14">
          Simple, transparent, and built around your schedule — not ours.
        </p>
        <div className="max-w-3xl mx-auto space-y-8">
          {process.map((p) => (
            <div key={p.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                <span className="text-primary font-extrabold text-lg">{p.step}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-foreground mb-2">{p.title}</h3>
                <p className="text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Us Differentiators */}
      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-10">
            Why Local Businesses Choose Holy Webs
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Every site is custom-designed for your business",
              "You talk directly to the person building your site",
              "Designed to convert visitors into phone calls and leads",
              "Built on WordPress — reliable, scalable, and easy to manage",
              "SEO-ready from day one — not bolted on as an afterthought",
              "Ongoing support so your site keeps working long after launch",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
          Frequently Asked Questions
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

      <RelatedLinks heading="Explore Related Services & Industries" links={relatedLinks} />
      <WhereWeServe serviceName="Web Design" />
      <ServicesSocialProof />
      <FinalCTASection headline="Stop Losing Jobs to Competitors With Worse Service" subtitle="You do better work — let's make sure your online presence reflects that. Fill out the form and we'll show you exactly where you're losing leads." />
    </Layout>
  );
}
