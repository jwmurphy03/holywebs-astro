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
      <section className="section-dark py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-6">Our Services</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Everything a local service business needs to get found, build trust, and get&nbsp;the&nbsp;call.
          </p>
        </div>
      </section>

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
