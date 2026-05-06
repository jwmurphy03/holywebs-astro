import { Helmet } from "react-helmet-async";

import { ArrowRight, Users, Target, Shield, Heart, Clock, Award, BookOpen, Briefcase, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
const jeremyPhoto = "/assets/jeremy-murphy.webp";

const values = [
  {
    icon: Target,
    title: "Adaptability",
    subtitle: "Mission Over Method",
    desc: "We're not married to any particular tool, platform, or approach. What we're committed to is your results. If something isn't working, we change it. The mission always drives the method — never the other way around.",
  },
  {
    icon: Shield,
    title: "Integrity",
    subtitle: "Foundation First",
    desc: "We don't run ads to a broken website. We don't chase rankings without the infrastructure to back them up. Before we grow anything, we make sure what's underneath it can hold the weight.",
  },
  {
    icon: Heart,
    title: "Humility",
    subtitle: "Confidence Without the Ego",
    desc: "We're good at what we do and we know it. We're also easy to talk to, quick to listen, and we treat every client like a person — not a line item. Most agencies are a pain to deal with. We've heard that enough times to make it a priority.",
  },
  {
    icon: Users,
    title: "Commitment",
    subtitle: "Partners, Not Vendors",
    desc: "We're not here to deliver a project and disappear. Digital marketing is a long game and we play it that way — consistent, patient, and genuinely invested in where your business is headed, not just where it is today.",
  },
  {
    icon: Clock,
    title: "Efficiency",
    subtitle: "We Respect Your Time",
    desc: "No meetings for the sake of meetings. We keep you informed on performance, we're always available when you have questions, and we don't fill your calendar just to look busy. You hired us to do the work — so we do it.",
  },
];

const expertise = [
  { icon: Briefcase, title: "Trades & Home Services", desc: "HVAC, plumbing, roofing, electrical, construction, power washing — we know how these businesses operate and what their customers search for." },
  { icon: BookOpen, title: "Professional Services", desc: "CPAs, bookkeepers, financial advisors, and consultants who need a digital presence that matches the quality of their work." },
  { icon: MapPin, title: "Multi-Location Businesses", desc: "Businesses that serve multiple cities or regions and need a coordinated local marketing strategy across every market." },
];

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>About Holy Webs — Digital Marketing for Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="20+ years helping local service businesses grow online. Meet the team behind Holy Webs and learn why contractors trust us for web design, SEO, and digital marketing." />
        <link rel="canonical" href="https://holywebs.com/about/" />
      </Helmet>

      {/* Hero */}
      <section className="section-dark py-28 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-20 w-96 h-96 rounded-full bg-primary/50 blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">About</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight max-w-4xl">
            About Holy&nbsp;Webs
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl leading-relaxed">
            A small, faith-driven digital marketing team helping local service businesses get found, build trust, and&nbsp;grow.
          </p>
        </div>
      </section>

      {/* Meet Jeremy */}
      <SectionWrapper variant="light">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 items-stretch">
          <div className="md:col-span-2">
            <div className="rounded-2xl overflow-hidden border-2 border-border shadow-lg h-full">
              <img
                src={jeremyPhoto}
                alt="Jeremy Murphy, digital marketing strategist at Holy Webs"
                className="w-full h-full object-cover"
                width={600}
                height={800}
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-5">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Meet Jeremy</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With over 20 years in digital marketing, Jeremy Murphy has worked with hundreds of local service businesses across the country — from one-truck operations to multi-location enterprises. The story is almost always the same: good people, great businesses, and almost no visibility&nbsp;online.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Jeremy's career spans the full spectrum of digital marketing. He's served as a fractional CMO for nationally recognized brands, managed large-scale advertising campaigns, and built high-converting websites for businesses in every corner of the&nbsp;market. That depth of experience is what sets Holy Webs apart — enterprise-level strategy applied to the businesses that need it&nbsp;most.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Today, Jeremy channels all of that experience into one mission: making sure the local businesses that serve people well are the ones that get seen&nbsp;first.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Our Mission */}
      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-8">Our Mission</h2>
          <p>
            Holy Webs exists because we believe local service businesses deserve better than cookie-cutter marketing and agency runarounds. You built something real — your digital presence should reflect that.
          </p>
          <p>
            We're a small team serving local service businesses across Texas and South Carolina. We specialize in web design, SEO, Google Ads, Facebook Ads, Google Business Profile optimization, and AI Search Optimization — specifically for contractors, trades, home services, and professional service firms.
          </p>
          <p>
            We're unapologetically Christian. Our faith shapes how we work — with integrity, transparency, and a genuine care for the businesses we partner with. It doesn't determine who we work with. We serve any local business that's ready to grow.
          </p>
        </div>
      </SectionWrapper>

      {/* Industry Expertise */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Deep Industry Expertise
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            We don't market everything to everyone. We focus on the industries where we've built deep experience and proven results.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((e) => (
              <div key={e.title} className="bg-background rounded-xl p-6 border border-border">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <e.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{e.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/industries" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors">
              View all industries we serve <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid gap-8">
            {values.map((item) => (
              <div key={item.title} className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-primary">{item.subtitle}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Markets We Serve */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Where We Work
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            We serve local service businesses across two of the fastest-growing regions in the country.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <a href="/locations/texas/houston" className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all group">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-1">Texas</h3>
              <p className="text-muted-foreground text-sm">Houston · Waco · Dallas · Austin</p>
            </a>
            <a href="/locations/south-carolina/charleston" className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all group">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="text-lg font-bold text-foreground mb-1">South Carolina</h3>
              <p className="text-muted-foreground text-sm">Charleston · Greenville · Columbia</p>
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Why We Focus on Local Service Businesses */}
      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-8">
            Why We Focus on Local Service Businesses
          </h2>
          <p>
            There are thousands of marketing agencies out there — and most of them are chasing SaaS companies, e-commerce brands, or whoever has the biggest budget. That's fine. We chose a different path.
          </p>
          <p>
            We focus on local service businesses because they're the backbone of every community. The plumber who shows up at midnight. The roofer who makes it right after a storm. The electrician who keeps the lights on. The CPA who helps a small business owner keep more of what they've earned. These businesses do real work for real people — and most of them are invisible online.
          </p>
          <p>
            The problem isn't a lack of skill or work ethic. It's that the digital marketing industry wasn't built for them. Most agencies sell packages designed for companies with six-figure marketing budgets. Most tools are built for people who already understand SEO, conversion rates, and ad platforms. Local service businesses get left behind — not because they don't deserve great marketing, but because nobody's building it for them.
          </p>
          <p>
            That's exactly why we exist. We've built our entire process, pricing, and strategy around the way local service businesses actually operate. We understand seasonal demand, service area targeting, reputation management, and the reality that most of our clients are running their business from the truck — not sitting in front of a dashboard all day.
          </p>
          <p>
            When we help a contractor show up first on Google, it doesn't just grow their business — it supports their family, their crew, and the community they serve. That's the work we signed up for, and it's the work we'll keep doing.
          </p>
        </div>
      </SectionWrapper>

      <FinalCTASection />
    </Layout>
  );
}
