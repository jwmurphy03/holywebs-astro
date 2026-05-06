import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, BrainCircuit, MessageCircle, Check, TrendingUp, Flame, Clock, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import IndustryFAQ from "@/components/IndustryFAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import IndustrySeoMarketLinks from "@/components/IndustrySeoMarketLinks";

const relatedLinks = [
  { title: "HVAC Marketing in Charleston, SC", description: "How we grow HVAC companies in one of the Southeast's most competitive cooling markets.", href: "/locations/south-carolina/charleston/hvac" },
  { title: "HVAC Marketing in Houston, TX", description: "HVAC marketing strategy for the country's hottest major metro — 4+ months of 90°F+ weather annually.", href: "/locations/texas/houston/hvac" },
  { title: "Plumbing", description: "Many HVAC companies also offer plumbing. See how we market plumbing services.", href: "/industries/plumbing" },
  { title: "Electrical", description: "HVAC and electrical often overlap. See our approach for electrical contractors.", href: "/industries/electrical" },
  { title: "Multi-Location", description: "Running HVAC operations across multiple markets? See how we scale visibility.", href: "/industries/multi-location" },
  { title: "All Locations", description: "See every market where we build HVAC visibility — and what makes each one different.", href: "/locations" },
];

const hvacFaqs = [
  { question: "How much does HVAC marketing cost?", answer: "Most HVAC companies invest somewhere between $1,500 and $5,000 a month depending on their market, the competition, and what they're trying to accomplish. Some companies start with just SEO or just ads — others want the full picture. We'll tell you what we think makes sense for your situation after we look at where you stand." },
  { question: "How long does SEO take for an HVAC company?", answer: "You'll usually see some early movement in the first 60–90 days, but real ranking gains take 4–6 months to build. HVAC is a competitive space in most metros, so the timeline depends a lot on who you're up against. The companies that stick with it past the 6-month mark are the ones that end up owning their market." },
  { question: "Is Google Ads or SEO better for HVAC companies?", answer: "They do different things. Ads put you in front of someone whose AC just went out — right now, today. SEO builds the kind of visibility that keeps your phone ringing without paying per click. Most HVAC companies that are serious about growth are running both, because relying on just one leaves money on the table." },
  { question: "How do I compete with big national HVAC brands online?", answer: "The national guys have ad budgets you can't match — but they don't have your reviews, your local reputation, or your ability to show up as a real business in the community. Local SEO and a strong Google Business Profile are where you can genuinely out-rank them. We've seen it happen in competitive markets because Google still rewards proximity and relevance." },
  { question: "How do I get more emergency AC and heating calls?", answer: "Emergency searches are almost always won or lost in the Map Pack. If you're not showing up in the top three local results when someone types \"AC repair near me\" at 9pm in July, you're not getting that call. That's a combination of GBP optimization, reviews, and your website's on-page signals — all things we focus on specifically." },
  { question: "Should I run ads year-round or just during peak season?", answer: "Running ads only in peak season means you're competing against every other HVAC company doing the exact same thing — costs go up and you're fighting harder for the same clicks. A smarter play is to stay visible year-round at a lower budget, then scale up heading into summer and winter. It keeps your pipeline steadier and your cost-per-lead lower over time." },
  { question: "How important are Google reviews for HVAC companies?", answer: "More important than most HVAC owners realize. Reviews are a direct ranking factor in local search, and they're often the deciding factor when someone is choosing between you and the company next to you in the Map Pack. A steady stream of recent reviews beats a big number of old ones — Google pays attention to recency." },
  { question: "What should my HVAC website actually include?", answer: "At minimum: clear service pages for each service you offer, a prominent phone number, a service area that's easy to find, and some form of social proof — reviews, photos, or past work. Emergency service callouts should be front and center, not buried. And it needs to load fast on mobile, because that's where most of those emergency searches happen." },
  { question: "How do I know if my HVAC marketing is actually working?", answer: "Track calls, not just clicks. Rankings and traffic are useful, but the real number is how many qualified calls you're getting and what they're costing you. We report on the metrics that tie directly to booked jobs — not a dashboard full of numbers that look good but don't mean anything for your business." },
  { question: "Do HVAC companies need social media?", answer: "It's not where most HVAC leads come from — search is. But social media does two things worth caring about: it gives people a place to verify you're a real, active business, and it creates a channel for seasonal promotions and tune-up offers to homeowners who already know you. It doesn't need to be a big investment to do its job." },
];

const stats = [
  { stat: "$31B+", label: "U.S. HVAC services market size" },
  { stat: "246K+", label: "Monthly 'AC repair near me' searches" },
  { stat: "87%", label: "Of homeowners search online before calling an HVAC company" },
  { stat: "3.2x", label: "More leads from page-one Google rankings vs. page two" },
];

const painPoints = [
  { icon: Flame, text: "Every HVAC company in your city is running the same playbook — Yelp ads, a basic website, and hoping for referrals. That's not a strategy." },
  { icon: Clock, text: "When someone's AC dies in July, they're calling the first company that shows up on Google. If that's not you, you're losing the highest-value jobs to your competitors." },
  { icon: Users, text: "Big franchise operations are outspending you on ads — but they can't outwork you on local trust, reviews, and community presence. You just need the right digital foundation." },
  { icon: TrendingUp, text: "Seasonal demand means feast or famine. A real marketing strategy evens out the peaks and valleys so your crew stays busy year-round." },
];

const services = [
  {
    icon: Globe,
    title: "Web Design",
    desc: "A fast, professional HVAC website that builds trust instantly. Emergency service callouts, financing options, service area maps, and click-to-call — built for homeowners who need help now.",
    link: "/services/web-design",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "We target high-margin HVAC searches, AC replacement, furnace installation, HVAC maintenance contracts, not just emergency repair calls. We build the local authority that keeps you in the Map Pack year-round, not just during peak season.",
    link: "/services/seo",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Capture emergency searches the moment they happen. Our HVAC ad campaigns target high-intent keywords with geo-targeting down to the zip code — so you're not paying for clicks outside your service area.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "Meta Ads",
    desc: "Stay top-of-mind with homeowners before their system breaks down. Seasonal tune-up promotions, new system financing offers, and brand awareness campaigns that generate demand before the emergency hits.",
    link: "/services/meta-ads",
  },
  {
    icon: BrainCircuit,
    title: "AI Search Optimization",
    desc: "When homeowners ask ChatGPT or Google AI 'best HVAC company near me,' your business needs to be the answer. We optimize your content for AI-powered search results.",
    link: "/services/aeo",
  },
  {
    icon: MessageCircle,
    title: "Google Business Profile",
    desc: "Your GBP listing is the #1 factor in local Map Pack rankings. We optimize every detail — service categories, photos, review responses, and posts — to help you dominate local search.",
    link: "/services/google-business-profile",
  },
];

const differentiators = [
  "We specialize in local service businesses — not generic 'digital marketing'",
  "No long-term contracts — month-to-month, cancel anytime",
  "We understand seasonal HVAC demand and build strategies around it",
  "Every strategy is built for your specific service area, not a template",
  "We focus on calls and booked jobs — not vanity metrics",
  "Free visibility audit so you can see exactly where you stand",
];

export default function HVAC() {
  return (
    <Layout>
      <Helmet>
        <title>Digital Marketing for HVAC Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Web design, SEO, and digital advertising built for HVAC contractors. Get found when homeowners search for AC repair, heating installation, and HVAC services near them." />
              <link rel="canonical" href="https://holywebs.com/industries/hvac/" />
        <meta property="og:image" content="https://holywebs.com/og/og-hvac.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: "HVAC" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">HVAC Industry</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Digital Marketing Built for HVAC&nbsp;Companies
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            Your next customer is searching for AC repair right now. If they're not finding you, they're finding your competitor — and once they call someone else, that job is gone. We help HVAC companies show up first, build trust fast, and turn searches into booked&nbsp;jobs.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="btn-primary text-lg">
              Get a Free Consultation
            </a>
            <a
              href="/resources/free-visibility-audit"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
            >
              Start with a free visibility audit
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper variant="light">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 bg-background rounded-xl border border-border">
              <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{s.stat}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Pain Points */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            The Problem Most HVAC Companies Face&nbsp;Online
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            You're great at what you do. But if homeowners can't find you when their AC goes out, none of that matters.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {painPoints.map((p) => (
              <div key={p.text} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground text-sm leading-relaxed font-medium">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What We Do for HVAC Companies
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every service is tailored to how homeowners actually search for and choose HVAC providers.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <a href={s.link} className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Differentiators */}
      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Why HVAC Companies Choose Holy&nbsp;Webs
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We're not a generic marketing agency. We specialize in helping local service businesses — including HVAC — build real, measurable online visibility.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
            {differentiators.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Markets We Serve */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            HVAC Marketing by Market
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Every market has different competition, seasonality, and customer behavior. See how we approach HVAC marketing in the specific markets we serve.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                city: "Charleston, SC",
                desc: "Our home market. Intense summer heat, hurricane season, and explosive Lowcountry growth create one of the highest-demand HVAC markets in the Southeast.",
                href: "/locations/south-carolina/charleston/hvac",
                tag: "Established market · 73 Google reviews",
              },
              {
                city: "Houston, TX",
                desc: "One of the hottest and most humid major metros in the country. A massive service area spanning multiple counties with year-round HVAC demand and high search volume.",
                href: "/locations/texas/houston/hvac",
                tag: "High-volume market · Competitive landscape",
              },
            ].map((m) => (
              <a
                key={m.city}
                href={m.href}
                className="block bg-background rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{m.city}</h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{m.desc}</p>
                <span className="text-xs font-semibold text-primary/70 uppercase tracking-wide">{m.tag}</span>
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <IndustryFAQ faqs={hvacFaqs} canonicalUrl="https://holywebs.com/industries/hvac" />

      <IndustrySeoMarketLinks industry="hvac" label="HVAC" />

      <RelatedLinks heading="Explore Related Services & Industries" links={relatedLinks} />
      <FinalCTASection headline="Most HVAC Companies Are Losing Leads They Don't Even Know About" subtitle="Your customers are searching right now — let's make sure they find you first. Fill out the form and we'll show you what you're missing." />
    </Layout>
  );
}
