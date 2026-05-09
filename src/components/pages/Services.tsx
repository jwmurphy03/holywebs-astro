import { Helmet } from "react-helmet-async";

import { Globe, Search, MousePointerClick, Share2, ArrowRight, MessageCircle, BrainCircuit } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import ServicesSocialProof from "@/components/ServicesSocialProof";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    to: "/services/web-design",
    desc: "Your website is your hardest-working employee. We build sites that look sharp, load fast, and turn visitors into calls, not just clicks. Every site we build is mobile-first, conversion-focused, and designed to make your business look as professional online as it is in person.",
  },
  {
    icon: Search,
    title: "SEO",
    to: "/services/seo",
    desc: "We build SEO strategies for local service businesses that move the needle in your market, not just improve a report. From Google Business Profile optimization to local keyword strategy, we get you in front of customers who are actively searching for your services.",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    to: "/services/google-ads",
    desc: "Get in front of buyers the moment they're searching. Our campaigns are built around your margins, not your impressions. We focus on high-intent local searches that drive calls and booked jobs, not vanity metrics.",
  },
  {
    icon: Share2,
    title: "Meta Ads",
    to: "/services/meta-ads",
    desc: "Create demand before people even know they need you. We run targeted Facebook and Instagram campaigns that put your business in front of the right audience, driving awareness, leads, and booked jobs.",
  },
  {
    icon: BrainCircuit,
    title: "AI Search Optimization",
    to: "/services/aeo",
    desc: "AI-powered search is changing how customers find local businesses. We optimize your content to appear in AI answers, featured snippets, and voice search results, so you show up where the future of search is heading.",
  },
  {
    icon: MessageCircle,
    title: "Google Business Profile",
    to: "/services/google-business-profile",
    desc: "Your GBP listing is often the first thing potential customers see. We optimize every detail, categories, photos, posts, reviews, and Q&A, to help you rank in the Map Pack and convert searchers into callers.",
  },
  {
    icon: Share2,
    title: "Social Media",
    to: "/services/social-media",
    desc: "Consistent social content keeps your business visible, reinforces trust, and gives prospects more reasons to recognize you before they call.",
  },
];

export default function Services() {
  return (
    <Layout>
      <Helmet>
        <title>Digital Marketing Services for Local Service Businesses | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Web design, local SEO, Google Ads, Meta Ads, AI Search, and Google Business Profile optimization, all built for contractors and service businesses." />
        <link rel="canonical" href="https://holywebs.com/services/" />
      </Helmet>
      <section className="section-dark py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg-noise" />
        <div className="absolute inset-0 hero-bg-grain" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-6 max-w-5xl">Our Services</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Everything a local service business needs to get found, build trust, and get&nbsp;the&nbsp;call.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="/pricing" className="btn-primary">
              View Pricing & Packages
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
              Talk through the right fit
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
            Packaged for Monthly Growth
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5">
            These Services Are Built to Work Together
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We explain each service separately so you can understand the work, but our public offers package the website, SEO, Google Business Profile, tracking, content, and monthly improvement into one growth system.
          </p>
          <a href="/pricing" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
            Compare Local Growth, Local Authority, and Market Leader
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <a key={s.title} href={s.to} className="group bg-background rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <span className="text-primary font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </SectionWrapper>

      <ServicesSocialProof />
      <FinalCTASection headline="Stop Losing Jobs to Competitors With Worse Service" subtitle="You do better work, let's make sure your online presence reflects that. Fill out the form and we'll show you exactly where you're losing leads." />
    </Layout>
  );
}
