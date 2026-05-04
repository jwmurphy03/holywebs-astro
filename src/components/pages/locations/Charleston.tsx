import { Helmet } from "react-helmet-async";

import { ArrowRight, Globe, Search, MousePointerClick, Share2, TrendingUp, Users, MapPin, Palmtree, Check, Wrench, Droplets, HardHat, Hammer } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
const charlestonWaterfront = "/assets/charleston-waterfront.jpg";
const charlestonBridge = "/assets/charleston-ravenel-bridge.jpg";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    desc: "Charleston customers expect quality — your website should reflect the same standard as your work. We build clean, fast, professional sites that earn trust and drive calls from the Lowcountry.",
    link: "/services/web-design",
  },
  {
    icon: Search,
    title: "Local SEO",
    desc: "When someone in Mount Pleasant, Summerville, or West Ashley searches for your service, you need to be the first name they see. We build local SEO strategies tailored to the Charleston tri-county area.",
    link: "/services/seo",
  },
  {
    icon: MousePointerClick,
    title: "Google & Meta Ads",
    desc: "Capture high-intent searches across Charleston, Dorchester, and Berkeley counties with Google Ads, and put your business in front of ideal customers on Facebook and Instagram with hyper-local targeting.",
    link: "/services/google-ads",
  },
  {
    icon: Share2,
    title: "AEO — Answer Engine Optimization",
    desc: "AI search is reshaping how Lowcountry residents find local businesses. We position your business to show up when ChatGPT, Google AI Overviews, and voice assistants answer questions about services in your area.",
    link: "/services/aeo",
  },
];

const marketStats = [
  { stat: "850K+", label: "People in the Charleston-North Charleston metro — and growing fast" },
  { stat: "#1", label: "Charleston ranked #1 small city in the U.S. by Condé Nast Traveler for over a decade" },
  { stat: "35%", label: "Population growth in the Charleston metro over the last 10 years" },
  { stat: "20M+", label: "Annual tourists visiting Charleston — driving massive seasonal demand for services" },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Goose Creek", "Hanahan", "Isle of Palms", "Sullivan's Island",
  "Folly Beach", "Ladson", "Moncks Corner", "Kiawah Island",
];

export default function Charleston() {
  return (
    <Layout>
      <Helmet>
        <title>Charleston Digital Marketing & SEO for Contractors | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Charleston's Lowcountry market is growing fast. Local SEO, professional web design, and ad campaigns that connect your service business with homeowners who need you." />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/" />
      </Helmet>
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Local digital marketing for service businesses in Charleston, SC. Web design, SEO, Google Ads, and more for the Lowcountry."
        areaServed={["Charleston", "Mount Pleasant", "Summerville", "North Charleston", "West Ashley", "James Island"]}
      />
      {/* Hero with Charleston Waterfront */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={charlestonWaterfront}
            alt="Charleston South Carolina waterfront at sunset"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: "South Carolina", href: "/locations" }, { label: "Charleston" }]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, South Carolina — Where It All Started</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Charleston &amp; Lowcountry Service&nbsp;Businesses
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Charleston is where Holy Webs was born. We know this market — the neighborhoods, the seasons, the competition, and the customers. We help Lowcountry service businesses get found online and grow with a strategy built for how Charleston actually&nbsp;works.
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
        </div>
      </section>

      {/* Charleston Market Opportunity */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Charleston Is Booming — And the Competition Is Catching&nbsp;Up
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Charleston isn't the sleepy Southern town it used to be. The metro has grown by over 35% in the last decade, with new residents, new developments, and new businesses pouring into Mount Pleasant, Summerville, and beyond. Tourism alone brings 20+ million visitors a year. The demand for local services is surging — but so is the number of businesses competing for attention. The ones investing in their digital presence are the ones winning.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((m) => (
              <div key={m.label} className="text-center p-6 bg-background rounded-xl border border-border">
                <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{m.stat}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Why Charleston Is Different */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
            We Know the Lowcountry Because<br />We Started&nbsp;Here
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Charleston has its own rhythm. The summer surge when tourists flood King Street and every HVAC company is slammed. The hurricane season when restoration companies need to be top of mind. The steady year-round demand from the Mount Pleasant families, the West Ashley homeowners, the Summerville newcomers building their lives in the Lowcountry.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Marketing in Charleston means understanding that a roofer in Summerville and a financial advisor on Daniel Island have completely different customers, search behaviors, and competitive landscapes — even though they're 20 minutes apart. Cookie-cutter strategies don't work here.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We built Holy Webs in Charleston because we believe local businesses deserve better than generic marketing from agencies that don't know the difference between West Ashley and West Columbia. This is home. We know how this market moves.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: TrendingUp, text: "Charleston is one of the fastest-growing metros in the Southeast — new customers are moving in every week" },
                { icon: Palmtree, text: "Tourism drives massive seasonal demand — your marketing strategy needs to account for the surge and the slow months" },
                { icon: Users, text: "The tri-county area (Charleston, Berkeley, Dorchester) means your customers are spread across distinct communities with different needs" },
                { icon: MapPin, text: "From the Peninsula to Summerville to Johns Island — hyper-local targeting is the only way to compete effectively" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground text-sm leading-relaxed font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What We Do for Charleston Businesses
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Every service is built around the Lowcountry market — not a template from another city.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
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

      {/* Industry Marketing Hubs */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Digital Marketing by Industry in Charleston
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Every trade has different customers, different search behavior, and different competitive dynamics. See how we approach marketing for your specific industry in the Lowcountry.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: Wrench,
                industry: "HVAC",
                desc: "Charleston's heat and humidity make HVAC one of the highest-demand trades in the metro. We put you in the map pack for emergency AC searches and keep you there year-round.",
                href: "/locations/south-carolina/charleston/hvac",
              },
              {
                icon: Droplets,
                industry: "Plumbing",
                desc: "From slab leaks in older Peninsula homes to new construction in Summerville — plumbing search volume in the tri-county area is high and growing. We help plumbers own it.",
                href: "/locations/south-carolina/charleston/plumbing",
              },
              {
                icon: HardHat,
                industry: "Roofing",
                desc: "Hurricane season drives massive roofing search spikes. We build the rankings and ad campaigns that capture storm-damage calls before your competitors even know it hit.",
                href: "/locations/south-carolina/charleston/roofing",
              },
              {
                icon: Hammer,
                industry: "Construction",
                desc: "New construction and renovation demand in the Lowcountry is as strong as it's ever been. We help general contractors and remodelers get found by homeowners who are ready to hire.",
                href: "/locations/south-carolina/charleston/construction",
              },
            ].map((item) => (
              <a
                key={item.industry}
                href={item.href}
                className="flex items-start gap-4 bg-background rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{item.industry}</h3>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-2" />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Ravenel Bridge Image Bar with Heading */}
      <div className="relative h-auto overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={charlestonBridge}
            alt="Arthur Ravenel Jr. Bridge illuminated at twilight over Charleston Harbor"
            className="w-full h-full object-cover object-[center_40%]"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-16 md:py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Areas We Serve Across the Lowcountry
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              From the Peninsula to the suburbs — if you serve customers in the Charleston metro, we can help you reach them.
            </p>
          </div>
        </div>
      </div>

      {/* Neighborhood Grid */}
      <SectionWrapper variant="light">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {neighborhoods.map((n) => (
            <div key={n} className="flex items-center gap-2 bg-background rounded-lg p-3 border border-border">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm font-medium">{n}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Charleston-Specific CTA */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            The Lowcountry Is Growing. Is Your Business Keeping&nbsp;Up?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Every new family that moves to Summerville needs a plumber, an electrician, a CPA, a dentist. Every tourist that visits downtown needs a restaurant, a tour guide, a rental service. Every homeowner on James Island who watches the next storm roll in needs a roofer they can trust. The demand is there. The question is whether they're finding you — or the competitor who invested in showing up first.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Charleston is where Holy Webs started, and the Lowcountry will always be home. We built this agency to serve local businesses like yours — with strategies that reflect this market, not some generic playbook from a national agency that's never been south of&nbsp;I-26.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            Let's build something that works.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto mt-10">
            {[
              "No long-term contracts — month-to-month",
              "Built by a team that started in Charleston",
              "We serve trades and professional services",
              "Free visibility audit to start",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-left">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <NearbyMarkets
        markets={[
          { name: "Greenville, SC", to: "/locations/south-carolina/greenville" },
          { name: "Columbia, SC", to: "/locations/south-carolina/columbia" },
          { name: "Houston, TX", to: "/locations/texas/houston" },
          { name: "Waco, TX", to: "/locations/texas/waco" },
        ]}
      />

      <FinalCTASection headline="Ready to Be the Go-To Service Company in Charleston?" subtitle="Charleston homeowners are searching for service companies right now. Fill out the form and we'll show you how to win more of those jobs." />
    </Layout>
  );
}
