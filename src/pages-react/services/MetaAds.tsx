import { Helmet } from "react-helmet-async";
import { Check, ArrowRight, Target, Users, BarChart3, Eye, Zap, RefreshCw, DollarSign, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import ServicesSocialProof from "@/components/ServicesSocialProof";
import WhereWeServe from "@/components/WhereWeServe";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSchema from "@/components/FAQSchema";
import RelatedLinks from "@/components/RelatedLinks";

const relatedLinks = [
  { title: "Google Ads", description: "Capture high-intent search traffic alongside your Meta campaigns for full-funnel coverage.", href: "/services/google-ads" },
  { title: "Social Media Management", description: "Pair paid social with organic content to build a consistent brand presence.", href: "/services/social-media" },
  { title: "Web Design", description: "Every ad needs a high-converting landing page. See how we build sites that turn clicks into customers.", href: "/services/web-design" },
  { title: "Landscaping", description: "Visual services like landscaping thrive on Meta Ads. See how we showcase their work.", href: "/industries/landscaping" },
  { title: "Power Washing", description: "Before-and-after transformations drive engagement on Facebook and Instagram.", href: "/industries/power-washing" },
  { title: "Roofing", description: "Storm season campaigns on Meta help roofers reach homeowners when they need help most.", href: "/industries/roofing" },
];

const features = [
  {
    icon: Target,
    title: "Hyper-Local Audience Targeting",
    desc: "We build audiences based on your exact service area — down to zip codes, neighborhoods, and radius targeting. Your ads reach the people who can actually become customers, not random scrollers three states away.",
  },
  {
    icon: Users,
    title: "Custom & Lookalike Audiences",
    desc: "We leverage your existing customer data to build custom audiences, then create lookalike audiences that mirror your best customers. This is how you scale — by finding more people who look like the ones already buying from you.",
  },
  {
    icon: Layers,
    title: "Full-Funnel Campaign Strategy",
    desc: "Cold audiences need awareness. Warm audiences need a nudge. We build campaigns across the full funnel — awareness, consideration, and conversion — so you're not just blasting the same ad at everyone.",
  },
  {
    icon: Eye,
    title: "Scroll-Stopping Creative",
    desc: "Your ad has about 1.5 seconds to earn attention. We develop ad creative — images, video, carousel, and copy — that stops the scroll and speaks directly to your customer's problem.",
  },
  {
    icon: RefreshCw,
    title: "Retargeting That Closes the Loop",
    desc: "Someone visited your site but didn't call? Watched your video but didn't convert? Retargeting puts your business back in front of them — repeatedly — until they're ready to take action.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting & Optimization",
    desc: "You'll see exactly where your money is going and what it's producing. We report on the metrics that matter — cost per lead, cost per acquisition, return on ad spend — and optimize relentlessly.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We learn your business, your ideal customer, and your goals. Then we map out a campaign strategy — audiences, funnel stages, offers, and creative direction — before a single dollar is spent.",
  },
  {
    step: "02",
    title: "Build & Launch",
    desc: "We set up your campaigns with proper tracking (Meta Pixel, Conversions API), build your audiences, develop the creative, and launch. Everything is structured for testing and scale from day one.",
  },
  {
    step: "03",
    title: "Optimize & Scale",
    desc: "Once data starts flowing, we analyze what's working and cut what isn't. We test new audiences, new creative, and new offers continuously. The goal is always more leads for less money.",
  },
];

const faqs = [
  {
    q: "How much should I budget for Meta Ads?",
    a: "For most local service businesses, we recommend starting with $1,500–$3,000/month in ad spend to generate enough data to optimize effectively. Too little budget means too little data, which means slow progress. We'll help you find the right starting point based on your market and goals.",
  },
  {
    q: "How quickly will I see results?",
    a: "You'll typically start seeing leads within the first 1–2 weeks. But the real optimization happens over 60–90 days as we gather data, test creative, refine audiences, and build retargeting pools. Month one is about learning. Months two and three are where things start to compound.",
  },
  {
    q: "What's the difference between Facebook Ads and Google Ads?",
    a: "Google Ads catches people who are actively searching for your service right now — high intent, ready to buy. Meta Ads (Facebook & Instagram) put your business in front of people who fit your ideal customer profile but aren't actively searching yet. Google captures existing demand. Meta creates new demand. The best strategies use both.",
  },
  {
    q: "Do I need good creative and video to run Meta Ads?",
    a: "Creative is everything on Meta. Unlike Google, where you're matching search intent with text ads, Meta is a visual platform competing for attention. We help develop the creative strategy and can work with what you have, but the businesses that invest in strong creative consistently outperform those that don't.",
  },
  {
    q: "Will Meta Ads work for my type of business?",
    a: "If your customers are on Facebook or Instagram (and they are), Meta Ads can work for you. We've seen strong results for home services, healthcare providers, real estate, professional services, fitness, and more. The key is the right targeting, the right message, and the right offer.",
  },
  {
    q: "Do you handle the creative or do I need to provide it?",
    a: "We handle creative strategy and can develop ad copy, image concepts, and carousel layouts. For video content, we'll guide you on what to create or connect you with production resources. We never launch a campaign with weak creative — it's too important.",
  },
  {
    q: "How do you track results?",
    a: "We install the Meta Pixel and set up the Conversions API on your website for accurate tracking. You'll get reports showing impressions, clicks, leads, cost per lead, and return on ad spend. No vanity metrics — just the numbers that tie back to revenue.",
  },
];

export default function MetaAds() {
  return (
    <Layout>
      <Helmet>
        <title>Facebook & Instagram Ads for Local Service Businesses | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Targeted Facebook and Instagram ad campaigns for contractors and service businesses. Reach homeowners in your area with Meta Ads that drive real leads." />
        <link rel="canonical" href="https://holywebs.com/services/meta-ads" />
        <meta property="og:image" content="https://holywebs.com/og/og-meta-ads.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Facebook & Instagram Ads",
            description: "Targeted Facebook and Instagram ad campaigns for contractors and service businesses. Reach homeowners in your area with Meta Ads that drive real leads.",
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
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Meta Ads" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Meta Ads — Facebook & Instagram</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Put Your Business in Front of Your Next Customer — Before They Even&nbsp;Search
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Google catches people who are already looking. Meta Ads put you in front of the people who should be. We build Facebook and Instagram ad campaigns that generate real leads for local businesses — not just likes and impressions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary text-lg">
              Get a Free Ads Consultation
            </Link>
            <Link
              to="/resources/free-visibility-audit"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
            >
              Or start with a free visibility audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <SectionWrapper variant="light">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
            Your Customers Are Scrolling<br className="hidden md:inline" /> Right Past&nbsp;You
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-8 border border-border flex flex-col gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">5 Billion Daily Users</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Nearly 3 billion people on Facebook and over 2 billion on Instagram. Your customers are on these platforms every single day — scrolling feeds, watching stories, browsing Reels. The question isn't whether they're there. It's whether they're seeing&nbsp;you.
              </p>
            </div>
            <div className="bg-background rounded-xl p-8 border border-border flex flex-col gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Boosting Posts ≠ Strategy</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Most local businesses either aren't running Meta Ads at all, or they're boosting posts and hoping for the best. That's not a strategy — that's a donation to Mark Zuckerberg. Real results require proper targeting, compelling creative, and continuous&nbsp;optimization.
              </p>
            </div>
            <div className="bg-background rounded-xl p-8 border border-border flex flex-col gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Systems Beat Spray & Pray</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                The businesses winning on Meta aren't just "running ads." They're building systems that put the right message in front of the right person at the right time — and following up until that person becomes a&nbsp;customer.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Demand Creation vs Demand Capture */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Demand Creation vs. Demand Capture
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            Understanding this distinction is the key to understanding why Meta Ads&nbsp;matter.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-xl p-8 border border-border">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Demand Capture (Google Ads, SEO)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Someone searches "plumber near me" — they already have a problem and they're looking for a solution. Google Ads and SEO capture that existing demand. This is powerful, but it's limited to the people actively searching right now.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                <strong className="text-foreground">The limitation:</strong> You're competing for a finite pool of searchers, and so is every other business in your&nbsp;area.
              </p>
            </div>
            <div className="bg-background rounded-xl p-8 border border-primary/30 ring-1 ring-primary/10">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Demand Creation (Meta Ads)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Meta Ads put your business in front of people who fit your ideal customer profile — before they search. You're creating awareness, building familiarity, and positioning your business as the obvious choice when they do need your service.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                <strong className="text-foreground">The advantage:</strong> You're not waiting for demand. You're generating it. And you're doing it at a scale that search alone can't&nbsp;match.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What's Included in Our Meta Ads Services
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          A complete paid social strategy — not just someone pressing "Boost Post."
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
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Our Process
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Structured for performance from day one.
        </p>
        <div className="max-w-3xl mx-auto space-y-8">
          {process.map((p) => (
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
      </SectionWrapper>

      {/* Why Us */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-10">
            Why Local Businesses Trust Holy Webs With Meta Ads
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "We focus on leads and revenue — not vanity metrics like reach and impressions",
              "Full-funnel strategy: awareness, retargeting, and conversion campaigns working together",
              "Creative strategy included — we don't just run your ads, we help build them",
              "Proper tracking setup: Meta Pixel + Conversions API for accurate attribution",
              "Month-to-month — no long-term contracts required",
              "We pair Meta Ads with SEO and Google Ads for businesses that want the full picture",
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
      <SectionWrapper variant="muted">
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
      <WhereWeServe serviceName="Meta Ads" />
      <ServicesSocialProof />
      <FinalCTASection headline="Stop Losing Jobs to Competitors With Worse Service" subtitle="You do better work — let's make sure your online presence reflects that. Fill out the form and we'll show you exactly where you're losing leads." />
    </Layout>
  );
}
