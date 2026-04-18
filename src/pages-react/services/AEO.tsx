import { Helmet } from "react-helmet-async";
import { Check, ArrowRight, Bot, MessageSquare, Globe, Layers, Sparkles, BarChart3, MessageCircleQuestion, Mic, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
const aeoSearchImg = "/assets/aeo-ai-search.jpg";
import FinalCTASection from "@/components/home/FinalCTASection";
import ServicesSocialProof from "@/components/ServicesSocialProof";
import WhereWeServe from "@/components/WhereWeServe";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSchema from "@/components/FAQSchema";
import RelatedLinks from "@/components/RelatedLinks";

const relatedLinks = [
  { title: "SEO", description: "AEO builds on a strong SEO foundation. See how our full local SEO strategy drives organic visibility.", href: "/services/seo" },
  { title: "Google Business Profile", description: "AI tools pull data from your GBP. We make sure it is structured for both traditional and AI search.", href: "/services/google-business-profile" },
  { title: "Web Design", description: "AI search rewards well-structured, fast websites. See how we build sites that are AEO-ready from day one.", href: "/services/web-design" },
  { title: "Multi-Location", description: "Multi-location businesses need consistent AI visibility across every market they serve.", href: "/industries/multi-location" },
  { title: "HVAC", description: "Homeowners ask AI assistants for HVAC recommendations. We make sure your business is the answer.", href: "/industries/hvac" },
  { title: "CPA & Bookkeeping", description: "Professional service searches are shifting to AI. See how we position CPA firms for that shift.", href: "/industries/cpa-bookkeeping" },
];

const features = [
  {
    icon: Bot,
    title: "AI Overview Optimization",
    desc: "We structure your content so Google's AI Overviews pull from your site — not your competitors'. When someone asks a question your business can answer, you should be the source.",
  },
  {
    icon: MessageSquare,
    title: "Conversational Query Targeting",
    desc: "People search differently when they're talking to AI. We optimize for the natural-language questions your customers are actually asking — not just traditional keywords.",
  },
  {
    icon: Layers,
    title: "Structured Data & Schema Markup",
    desc: "AI search tools need structured data to understand and reference your content. We implement the right schema markup so machines can read your site as clearly as humans can.",
  },
  {
    icon: Globe,
    title: "Content Authority Building",
    desc: "AI tools prioritize content from sources they trust. We help you build topical authority through well-structured, expert-level content that positions your business as the go-to answer.",
  },
  {
    icon: Sparkles,
    title: "Featured Snippet & Zero-Click Strategy",
    desc: "Featured snippets are the gateway to AI answers. We optimize your content to win those positions — giving you visibility even when users don't click through.",
  },
  {
    icon: BarChart3,
    title: "AI Visibility Tracking",
    desc: "Traditional rank tracking doesn't capture the full picture anymore. We monitor how your business shows up across AI-powered search tools and report on what's actually driving visibility.",
  },
];

const aeoExamples = [
  {
    icon: MessageCircleQuestion,
    title: "AI Chat Recommendations",
    desc: "When someone asks ChatGPT \"who's the best HVAC company in Houston,\" the answer comes from structured, authoritative content. We build FAQ pages and service content specifically designed so AI tools reference your business by name — not a generic list of competitors.",
  },
  {
    icon: Mic,
    title: "Voice Search Optimization",
    desc: "\"Hey Siri, find a plumber near me\" triggers a completely different search process than typing keywords into Google. We optimize your content for these natural-language, conversational queries so voice assistants surface your business first.",
  },
  {
    icon: Search,
    title: "Google AI Overview Features",
    desc: "Google's AI Overviews now appear above traditional results for many local searches. We structure your content with the right schema markup and topical authority signals so Google's AI pulls from your site when generating those answers.",
  },
];

const faqs = [
  {
    q: "What is AEO?",
    a: "AEO — Answer Engine Optimization — is the practice of optimizing your online presence so AI-powered tools like ChatGPT, Google AI Overviews, and voice assistants reference and recommend your business. It's about making sure your content is structured in a way that machines can understand, trust, and cite.",
  },
  {
    q: "How is AEO different from SEO?",
    a: "SEO focuses on ranking your website in traditional search engine results. AEO goes a step further — it optimizes your content so AI tools actively pull from it when generating answers. Think of SEO as getting on the list, and AEO as getting recommended. They work best together.",
  },
  {
    q: "How long does AEO take to show results?",
    a: "AEO results typically start appearing within 60–90 days, though the timeline depends on your existing SEO foundation and how competitive your market is. AI tools prioritize established, well-structured content — so businesses with strong SEO foundations often see faster AEO results.",
  },
  {
    q: "Can I do AEO without doing SEO?",
    a: "Not effectively. AEO builds directly on your SEO foundation. AI search tools pull answers from content that's already well-optimized, authoritative, and properly structured. Without SEO, there's nothing for AEO to amplify. We always recommend establishing strong SEO fundamentals first.",
  },
  {
    q: "How do I know if AI search is sending me traffic?",
    a: "We track AI visibility through a combination of methods: monitoring your appearances in Google AI Overviews, tracking branded mentions in AI tools, analyzing changes in organic traffic patterns, and measuring featured snippet performance. We include all of this in your regular reporting so you can see exactly where AI search is driving results.",
  },
];

export default function AEO() {
  return (
    <Layout>
      <Helmet>
        <title>Answer Engine Optimization (AEO) for Local Service Businesses | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Get your service business featured in AI-powered search results. AEO strategies for ChatGPT, Google AI Overviews, and voice search that drive qualified leads." />
        <link rel="canonical" href="https://holywebs.com/services/aeo" />
        <meta property="og:image" content="https://holywebs.com/og/og-aeo.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Answer Engine Optimization (AEO)",
            description: "Get your service business featured in AI-powered search results. AEO strategies for ChatGPT, Google AI Overviews, and voice search that drive qualified leads.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "State", name: "Texas" }, { "@type": "State", name: "South Carolina" }]
          })}
        </script>
      </Helmet>
      <FAQSchema faqs={faqs} />
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-20 w-96 h-96 rounded-full bg-primary/50 blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "AEO" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">AEO — Answer Engine Optimization</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Show Up Where AI Is Sending Your Customers
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Google's AI Overviews. ChatGPT. Voice search. The way people find businesses is changing — and most local companies aren't ready for it. AEO is our add-on to <Link to="/services/seo" className="text-primary hover:underline">SEO</Link> that makes sure your business shows up when AI answers the questions your customers are&nbsp;asking.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary text-lg">
              Let's Talk About AEO
            </Link>
            <Link
              to="/services/seo"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
            >
              Learn about our SEO services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <SectionWrapper variant="light">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Search Is Changing.{" "}<br className="hidden md:inline" />Your Strategy Should&nbsp;Too.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              AI-powered search isn't coming — it's here. Google is already showing AI-generated answers above traditional results. ChatGPT is recommending businesses. Voice assistants are answering local queries without a single click.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              If your content isn't structured for these tools, you're not just missing out on new traffic — you're losing ground to competitors who are already adapting. AEO bridges that gap.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={aeoSearchImg}
              alt="AI-powered search evolution showing a search bar transforming into artificial intelligence"
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* What AEO Looks Like */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What AEO Looks Like for a Local Service&nbsp;Business
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          AEO isn't abstract — here's exactly how it works for contractors and service companies.
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {aeoExamples.map((ex) => (
            <div key={ex.title} className="bg-background rounded-xl p-8 border border-border">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <ex.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{ex.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{ex.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Who Needs AEO */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Who Needs AEO Right&nbsp;Now
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            If you're a local service business in a competitive market — HVAC, plumbing, roofing, electrical, or any trade where multiple companies are fighting for the same customers — you should be implementing AEO alongside traditional SEO right&nbsp;now.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            AI-powered search isn't a future trend. It's already changing how homeowners find and choose service providers. Google AI Overviews are appearing on more local searches every month. ChatGPT is being used to research and compare businesses. Voice search is the default for an entire generation of&nbsp;consumers.
          </p>
          <p className="text-foreground text-lg leading-relaxed font-medium">
            The businesses investing in AEO now will have a significant head start over competitors who wait. Once AI tools learn to trust and reference your content, that advantage compounds — and it's much harder for latecomers to&nbsp;catch&nbsp;up.
          </p>
          <div className="mt-10">
            <Link to="/contact" className="btn-primary text-lg">
              Talk to Us About AEO
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What AEO Adds to Your SEO Strategy
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Everything we do in AEO builds on your existing SEO foundation — it's not a separate strategy, it's the next layer.
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

      {/* How It Works With SEO */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-10">
            How AEO Works With Your SEO
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "We Audit Your AI Visibility",
                desc: "We check how your business currently shows up (or doesn't) across AI-powered search tools — Google AI Overviews, ChatGPT, voice search, and more.",
              },
              {
                step: "02",
                title: "We Optimize Your Content for AI",
                desc: "We restructure and enhance your existing content with schema markup, conversational targeting, and authority signals that AI tools prioritize.",
              },
              {
                step: "03",
                title: "We Monitor & Adapt",
                desc: "AI search is evolving fast. We continuously track your AI visibility, test new approaches, and adjust your strategy as the landscape changes.",
              },
            ].map((p) => (
              <div key={p.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-extrabold text-lg">{p.step}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Add AEO */}
      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-10">
            Why Add AEO to Your SEO
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Get referenced in Google's AI Overviews before your competitors do",
              "Show up when people ask ChatGPT for recommendations in your area",
              "Win featured snippets that feed AI-generated answers",
              "Future-proof your online visibility as search evolves",
              "Build on your existing SEO investment — not a separate budget",
              "Stay ahead of competitors who are still ignoring AI search",
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
      <WhereWeServe serviceName="AEO" />
      <ServicesSocialProof />
      <FinalCTASection headline="Stop Losing Jobs to Competitors With Worse Service" subtitle="You do better work — let's make sure your online presence reflects that. Fill out the form and we'll show you exactly where you're losing leads." />
    </Layout>
  );
}
