import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, BrainCircuit, MessageCircle, Check, Droplets, Clock, Users, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import IndustryFAQ from "@/components/IndustryFAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";

const relatedLinks = [
  { title: "SEO", description: "Get found for 'plumber near me' and other high-intent local searches that drive booked jobs.", href: "/services/seo" },
  { title: "Google Business Profile", description: "Your GBP is where most plumbing customers find you first. We make sure it is fully optimized.", href: "/services/google-business-profile" },
  { title: "Google Ads", description: "Emergency plumbing searches convert fast. Paid search puts you at the top when it matters most.", href: "/services/google-ads" },
  { title: "HVAC", description: "Many plumbing companies also offer HVAC. See how we market both services.", href: "/industries/hvac" },
  { title: "Construction", description: "New construction plumbing needs a different marketing approach. See our strategy.", href: "/industries/construction" },
  { title: "Electrical", description: "Electrical and plumbing contractors face similar local search challenges. See our approach.", href: "/industries/electrical" },
];

const plumberFaqs = [
  { question: "How much does plumbing marketing cost?", answer: "Most plumbing companies we work with invest between $1,000 and $4,000 a month depending on how competitive their market is and what services they're trying to grow. You don't have to do everything at once — some companies start with a website and SEO, others start with ads. We'll tell you what we think makes the most sense based on what you've already got in place." },
  { question: "How long does SEO take for a plumbing company?", answer: "Plan for 4–6 months before you see significant results. The first 60–90 days are mostly foundational — fixing technical issues, building out your content, getting your GBP dialed in. After that the compounding starts. Plumbing is competitive in most markets, but the businesses that invest consistently are the ones sitting on top of Google a year from now." },
  { question: "Is Google Ads or SEO better for plumbers?", answer: "For emergency calls — burst pipes, no hot water, clogged drain — ads are hard to beat because they capture people the moment they need you. SEO is what builds long-term presence and keeps the phone ringing without a cost-per-click. Most plumbing companies that are scaling use both, because each one fills a gap the other doesn't." },
  { question: "How do I get more emergency plumbing calls?", answer: "Emergency plumbing is almost entirely a local Map Pack game. When someone's pipe bursts at 11pm, they're not scrolling through a website — they're calling whoever shows up first in Google's local results. That means your Google Business Profile needs to be fully optimized, your reviews need to be current, and your website needs to clearly signal emergency service availability." },
  { question: "Should plumbers use Local Service Ads?", answer: "LSAs can be worth it, but the setup matters a lot and Google's credit determination process has gotten harder to manage over time. If you go that route, treat it as a supplement to — not a replacement for — organic SEO and standard Google Ads. We typically recommend a one-time setup rather than an ongoing management retainer for LSAs." },
  { question: "How important are Google reviews for plumbing companies?", answer: "Critical. Plumbing is a trust-based purchase that often happens under stress. Someone dealing with a leak doesn't have time to do a lot of research — they're looking for a business with recent, credible reviews and they're calling. A strong review profile also directly improves your Map Pack ranking, which determines whether they find you in the first place." },
  { question: "What should a plumbing company website include?", answer: "A clear list of the services you offer, service areas (by city and neighborhood, not just county), a phone number that's impossible to miss, and real social proof — reviews, photos of actual work, anything that makes you feel like a real business people can trust. If you offer emergency service, that needs to be front and center, not something visitors have to hunt for." },
  { question: "How do I rank in the Google Map Pack for plumbing?", answer: "Three things drive Map Pack rankings: the relevance of your GBP to the search, your proximity to the searcher, and your authority — which is built through reviews, citations, and your website's local signals. It's not one thing you fix once; it's a combination of factors that you build over time. We handle all of it as part of our local SEO work." },
  { question: "How do I know if my plumbing marketing is working?", answer: "The clearest signal is inbound call volume and where those calls are coming from. Rankings matter, but only because they lead to calls. If your traffic is going up but your phone isn't ringing, something else is wrong — usually the website or the offer. We track both traffic and calls so you can see the full picture." },
  { question: "Do plumbers need social media?", answer: "Not as a primary lead source — most plumbing leads come from search. But social media does matter for credibility. When someone finds you on Google and then checks your Facebook page and it hasn't been touched in two years, that creates doubt. Staying minimally active — posting a job here and there, sharing a review — is enough to keep that trust signal alive." },
];

const stats = [
  { stat: "$130B+", label: "U.S. plumbing services industry revenue" },
  { stat: "165K+", label: "Monthly 'plumber near me' searches on Google" },
  { stat: "78%", label: "Of local mobile searches result in a purchase within 24 hours" },
  { stat: "5 min", label: "Average time a homeowner spends choosing which plumber to call" },
];

const painPoints = [
  { icon: Droplets, text: "When a pipe bursts, homeowners don't comparison shop — they call the first plumber that shows up on Google. If your website is buried on page two, you don't exist in an emergency." },
  { icon: Clock, text: "Reviews make or break plumbing businesses. One bad review at the top of your Google listing can cost you dozens of jobs. But most plumbers have no strategy for generating and managing reviews." },
  { icon: Users, text: "The big franchises (Roto-Rooter, Mr. Rooter) are spending six figures on ads. You can't outspend them — but you can outrank them locally with the right SEO and GBP strategy." },
  { icon: TrendingUp, text: "Most plumbing websites look like they were built in 2012. Your website is your first impression — and right now, it might be costing you the job before you even get a chance to bid." },
];

const services = [
  {
    icon: Globe,
    title: "Web Design",
    desc: "A modern plumbing website that builds instant trust. Emergency service banners, service area pages, licensing credentials, and click-to-call buttons — designed for homeowners who need a plumber now.",
    link: "/services/web-design",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "We rank you for the jobs that pay: water heater installation, trenchless sewer repair, whole-house repiping. We build emergency search dominance so when a pipe bursts at 2am, your number is the one that shows up.",
    link: "/services/seo",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Capture emergency plumbing searches the moment they happen. Geo-targeted campaigns that put your phone number in front of homeowners with burst pipes, backed-up drains, and running toilets.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "Meta Ads",
    desc: "Build awareness before the emergency. Seasonal campaigns for water heater maintenance, sump pump checks, and drain cleaning — so homeowners already know your name when they need you most.",
    link: "/services/meta-ads",
  },
  {
    icon: BrainCircuit,
    title: "Answer Engine Optimization",
    desc: "When homeowners ask AI assistants 'who's the best plumber near me,' your business needs to be the answer. We optimize your content for ChatGPT, Google AI, and voice search.",
    link: "/services/aeo",
  },
  {
    icon: MessageCircle,
    title: "Google Business Profile",
    desc: "Your GBP is where most plumbing customers make their decision. We optimize your listing, manage your reviews, and keep your profile active so you stay at the top of the local pack.",
    link: "/services/google-business-profile",
  },
];

const differentiators = [
  "We specialize in local service businesses — plumbing is our wheelhouse",
  "No long-term contracts — earn your business every month",
  "We understand emergency-driven search behavior and build for it",
  "Review generation and reputation management built into every strategy",
  "Hyper-local targeting for your actual service area",
  "Free visibility audit so you see exactly where you stand vs. competitors",
];

export default function Plumbers() {
  return (
    <Layout>
      <Helmet>
        <title>Digital Marketing for Plumbing Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Web design, SEO, and advertising built for plumbing contractors. Dominate local search and turn emergency plumbing searches into booked jobs." />
              <link rel="canonical" href="https://holywebs.com/industries/plumbing" />
        <meta property="og:image" content="https://holywebs.com/og/og-plumbing.jpg" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: "Plumbing" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Plumbing Industry</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Digital Marketing Built for Plumbing&nbsp;Companies
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mb-8 leading-relaxed">
            A homeowner with a burst pipe isn't browsing — they're calling the first plumber they find. If that's not you, it's your competitor. We help plumbing companies show up first, earn trust through reviews, and turn urgent searches into booked&nbsp;jobs.
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
            Why Most Plumbing Companies Struggle to Grow&nbsp;Online
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12">
            You're licensed, insured, and do great work. But if Google doesn't know that, neither do your next customers.
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
          What We Do for Plumbing Companies
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every service is tailored to how homeowners actually search for and choose a plumber.
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
            Why Plumbing Companies Choose Holy&nbsp;Webs
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            We're not a generic agency. We understand how emergency-driven, trust-dependent industries like plumbing actually win online.
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
            Plumbing Marketing by Market
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Every market has different competition, housing stock, and call patterns. See how we approach plumbing marketing in the specific markets we serve.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                city: "Charleston, SC",
                desc: "Our home market. Aging Peninsula plumbing, clay soil slab leaks, hurricane flooding events, and rapid growth in Summerville and Nexton create year-round emergency and installation demand.",
                href: "/locations/south-carolina/charleston/plumbing",
                tag: "Established market · 73 Google reviews",
              },
              {
                city: "Houston, TX",
                desc: "The largest city in Texas with millions of homes, extreme weather events, and one of the highest concentrations of plumbing searches in the country. A market built for aggressive local search campaigns.",
                href: "/locations/texas/houston/plumbing",
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

      <IndustryFAQ faqs={plumberFaqs} canonicalUrl="https://holywebs.com/industries/plumbing" />

      <RelatedLinks heading="Explore Related Services & Industries" links={relatedLinks} />
      <FinalCTASection headline="Most Plumbing Companies Are Losing Leads They Don't Even Know About" subtitle="Your customers are searching right now — let's make sure they find you first. Fill out the form and we'll show you what you're missing." />
    </Layout>
  );
}
