import { Helmet } from "react-helmet-async";
import { ArrowRight, BarChart3, CheckCircle2, ClipboardCheck, FileText, MapPin, PhoneCall, Search } from "lucide-react";

import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import RelatedLinks from "@/components/RelatedLinks";
import FinalCTASection from "@/components/home/FinalCTASection";

const proofItems = [
  {
    icon: Search,
    title: "Search Visibility",
    text: "We track the markets, services, and keywords that matter to booked work, not vanity rankings that never turn into calls.",
  },
  {
    icon: MapPin,
    title: "Google Maps Movement",
    text: "We watch Google Business Profile visibility, category fit, service coverage, review signals, photos, posts, and local relevance.",
  },
  {
    icon: PhoneCall,
    title: "Calls and Forms",
    text: "The goal is not traffic for its own sake. We care about qualified calls, form fills, booked appointments, and which pages helped create them.",
  },
  {
    icon: FileText,
    title: "Work Completed",
    text: "Monthly output should be visible. Content, citations, GBP updates, technical fixes, page improvements, and conversion changes all get documented.",
  },
  {
    icon: BarChart3,
    title: "Plain-English Reporting",
    text: "Reports should answer the useful questions: what improved, what changed, what we learned, and what we are doing next.",
  },
  {
    icon: ClipboardCheck,
    title: "Next-Step Decisions",
    text: "Good proof helps decide where to push next, whether that means more local pages, stronger GBP work, better offers, or paid ads on top of SEO.",
  },
];

const futureCaseStudy = [
  "The starting point before Holy Webs began work",
  "The market, industry, and services being targeted",
  "The plan used and the major work completed",
  "The timeline, including what changed first and what took longer",
  "The results, with context around seasonality, budget, and market difficulty",
  "The lessons a similar business can use before hiring an agency",
];

export default function Results() {
  return (
    <Layout>
      <Helmet>
        <title>Results and Proof | Holy Webs</title>
        <meta
          name="description"
          content="How Holy Webs proves digital marketing work for local service businesses through visibility, Google Maps movement, calls, forms, completed work, and plain-English reporting."
        />
        <link rel="canonical" href="https://holywebs.com/results/" />
      </Helmet>

      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0 hero-bg-proof" />
        <div className="absolute inset-0 hero-bg-grain" />
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Results and Proof</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              We Are Building Public Case Studies the Right Way
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
              We are not going to publish fake case studies or dress up private client work as something it is not. Until we have approved public stories to share, this page explains how we prove the work every month.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/pricing" className="btn-primary text-lg">
                View Monthly Plans
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Talk through your market
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Our Standard</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-5">
            Proof Should Be Useful, Not Just Impressive
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A good case study should help a business owner understand what actually changed. It should show the starting point, the work, the timeline, the results, and the context. That is the standard we will use when we publish client stories.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">
            How We Prove the Work Now
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            These are the signals we use to keep monthly SEO, website, GBP, and ad work accountable.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proofItems.map((item) => (
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
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm text-center">Future Case Studies</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-8">
            What We Will Include When Public Case Studies Are Ready
          </h2>
          <div className="grid gap-4">
            {futureCaseStudy.map((item) => (
              <div key={item} className="flex gap-4 rounded-lg border border-border bg-background p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <p className="text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <RelatedLinks
        heading="Useful Next Pages"
        subheading="These pages explain the offers and services behind the proof framework."
        links={[
          { title: "Pricing", description: "See the monthly growth plans and what each plan includes.", href: "/pricing" },
          { title: "Local SEO", description: "Learn how we approach local visibility for service businesses.", href: "/services/seo" },
          { title: "Google Business Profile", description: "See how GBP work supports map visibility and calls.", href: "/services/google-business-profile" },
          { title: "Website Design", description: "See how a stronger website helps traffic turn into calls.", href: "/services/web-design" },
          { title: "AI Search Optimization", description: "See how we prepare local businesses for AI-influenced search.", href: "/services/aeo" },
          { title: "Contact", description: "Tell us what market you want to grow in and what you need to prove.", href: "/contact" },
        ]}
      />

      <FinalCTASection
        headline="Want a Marketing Plan You Can Actually Measure?"
        subtitle="We will look at your current visibility, your market, and your highest-value services, then show you what should be fixed first."
      />
    </Layout>
  );
}
