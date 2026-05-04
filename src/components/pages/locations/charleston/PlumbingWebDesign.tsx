import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Phone, Gauge, Shield, Star,
  Smartphone, Search, Check, Droplets, Globe,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import LocalSpokeAnswers from "@/components/LocalSpokeAnswers";

const charlestonWaterfront = "/assets/charleston-waterfront.jpg";

const marketStats = [
  { stat: "72%", label: "Of plumbing searches happen on mobile — often mid-emergency, with water actively running" },
  { stat: "3 sec", label: "Load time threshold — beyond this, more than half of mobile visitors leave before your page loads" },
  { stat: "94%", label: "Of first impressions are design-related — a bad site signals an unprofessional company before a word is read" },
  { stat: "2×", label: "More conversions from a well-structured plumbing site vs. a generic contractor template" },
];

const features = [
  {
    icon: Phone,
    title: "Emergency-First Conversion Design",
    desc: "Sticky click-to-call button, phone number in the header, emergency service callout above the fold — every page is designed for the homeowner who needs a plumber now and is searching on their phone with water coming through the ceiling.",
  },
  {
    icon: Gauge,
    title: "Speed-Optimized for Mobile",
    desc: "Emergency plumbing searches don't happen on desktop. Your site loads in under 2 seconds on mobile — fast enough to keep the panicked homeowner who would otherwise hit back and call your competitor.",
  },
  {
    icon: Search,
    title: "Built for Local SEO",
    desc: "Service pages for every offering, service area pages for every community you cover, schema markup for LocalBusiness and Services, and a site structure that Google can crawl cleanly. SEO-ready from day one.",
  },
  {
    icon: Shield,
    title: "Trust Signals for Plumbing",
    desc: "License numbers, insurance certificates, BBB membership, manufacturer certifications, before/after job photos — all the signals that tell a homeowner you're legitimate, licensed, and trustworthy before they make the call.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First, Always",
    desc: "We design for the phone first. Desktop is secondary — because that's where your customers are when they need you most. Emergency calls happen on phones. Your site has to work perfectly in that moment.",
  },
  {
    icon: Star,
    title: "Reviews & Proof Integrated Throughout",
    desc: "Your Google review count, star rating, and best testimonials are built into the homepage, service pages, and contact page — not hidden on a reviews page. Proof where the decision happens.",
  },
];

const charlestonAngles = [
  {
    icon: Droplets,
    text: "Charleston homeowners dealing with a burst pipe or slab leak are searching on their phone in the middle of a stressful situation. A slow, confusing website loses that job instantly. Speed and clarity are not optional.",
  },
  {
    icon: Globe,
    text: "The Lowcountry's historic housing stock means many plumbing jobs are specialized — old cast iron pipe replacement, high water table drainage, coastal corrosion. Service-specific pages help you rank for and convert those higher-value jobs.",
  },
  {
    icon: Search,
    text: "Your website is the foundation that makes every other channel work better — it improves your map pack conversion rate, raises your Google Ads quality score, and gives SEO content a home.",
  },
  {
    icon: Phone,
    text: "Short-term rental property managers need plumbers they can call and trust immediately. A professional, credible website is the first thing they use to vet a new contractor — especially when a guest is waiting.",
  },
];

const deliverables = [
  "Custom design built for your brand — not a recycled contractor template",
  "Service pages for every plumbing offering you provide",
  "Service area pages for every community you target in the tri-county area",
  "Slab leak, water heater, drain cleaning, and emergency service landing pages",
  "Sticky click-to-call button on every page",
  "Google Analytics, Search Console, and call tracking integration",
  "Schema markup for LocalBusiness, Services, and FAQPage",
  "Fast load times — optimized images, clean code, no unnecessary bloat",
  "SSL certificate and security built in from day one",
  "Responsive design tested across iPhone, Android, and desktop",
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We learn your services, your service area, your ideal customer, and what separates you from other plumbing companies in the Lowcountry. That understanding drives every design and content decision.",
  },
  {
    step: "02",
    title: "Design & Copywriting",
    desc: "We design your site and write the copy — plumbing-specific, Charleston-specific, and built around the searches that book jobs. You review and approve before we write a line of code.",
  },
  {
    step: "03",
    title: "Build & Optimize",
    desc: "We build with performance, SEO, and conversion as the primary objectives. Every page is optimized before launch — not after you've already missed emergency calls.",
  },
  {
    step: "04",
    title: "Launch & Ongoing Support",
    desc: "We launch, set up tracking, and verify everything works. After launch, we're available for edits, updates, and additions as your service offerings and territory evolve.",
  },
];

const faqs = [
  {
    q: "What does a plumbing website need that other contractor sites don't?",
    a: "The emergency conversion path. Plumbing has the highest emergency-intent search rate of any trade. Your website needs to make it completely effortless to call you within the first 5 seconds of landing — especially on a phone in a stressful situation. Most plumbing websites bury the phone number or require scrolling to find it. That's where jobs get lost.",
  },
  {
    q: "Do you write the content or does our team need to provide it?",
    a: "We write it. We handle service page copy, about page, homepage, contact page, and service area content — all plumbing-specific and optimized for Charleston searches. You review and approve everything before it goes live.",
  },
  {
    q: "How long does it take to build a plumbing website?",
    a: "Typically 3–5 weeks from kickoff to launch. If you have a storm or busy season coming and need a faster turnaround, let us know — we can prioritize.",
  },
  {
    q: "Will a new website actually help me rank on Google?",
    a: "A well-built website is the foundation of local SEO. It doesn't guarantee rankings by itself, but nothing works well without it. We build with clean URL structure, proper heading hierarchy, fast load times, schema markup, and service area pages — everything Google needs to understand and rank your business. Combine this with our local SEO service and the results compound significantly.",
  },
  {
    q: "Can you redesign my existing plumbing site or do you build from scratch?",
    a: "Either. If your current site has a solid structure and just needs optimization and a visual refresh, we can work with it. If it's slow, outdated, and poorly organized, a clean build is usually faster and produces better results. We'll give you an honest assessment after reviewing what you have.",
  },
  {
    q: "Do you include service area pages for communities like Mount Pleasant and Summerville?",
    a: "Yes — this is standard in every site we build for Charleston plumbers. We create individual pages targeting the major communities in your service area: Mount Pleasant, Summerville, West Ashley, James Island, North Charleston, Daniel Island, and others based on where you work. These pages are what allow you to rank for searches in those specific communities.",
  },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Goose Creek", "Hanahan", "Isle of Palms", "Sullivan's Island",
  "Folly Beach", "Ladson", "Moncks Corner", "Kiawah Island",
];

export default function CharlestonPlumbingWebDesign() {
  return (
    <Layout>
      <Helmet>
        <title>Web Design for Plumbers in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Professional plumbing website design for Charleston, SC contractors. Fast, mobile-first, emergency-conversion-optimized sites built for Lowcountry plumbers."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/plumbing/web-design/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Design for Plumbers — Charleston, SC",
            description: "Professional website design for plumbing contractors in Charleston, South Carolina.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "City", name: "Charleston" }, { "@type": "City", name: "Mount Pleasant" }],
            serviceType: "Web Design",
          })}
        </script>
      </Helmet>
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Web design for plumbing contractors in Charleston, SC. Mobile-first, emergency-conversion-optimized sites for Lowcountry plumbers."
        areaServed={["Charleston", "Mount Pleasant", "Summerville", "North Charleston", "West Ashley", "James Island"]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={charlestonWaterfront} alt="Charleston South Carolina waterfront" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70" />
        </div>
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs items={[
              { label: "Locations", href: "/locations" },
              { label: "South Carolina" },
              { label: "Charleston", href: "/locations/south-carolina/charleston" },
              { label: "Plumbing", href: "/locations/south-carolina/charleston/plumbing" },
              { label: "Web Design" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Plumbing Web Design</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Plumbing Websites That Convert Emergency Calls in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When a Charleston homeowner finds your plumbing company online, they've already decided they need help. Your website's only job is to make it easy to call you. We build sites that do exactly that — fast, mobile-first, and built for emergencies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">See Our Work</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Start with a free visibility audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Charleston" state="South Carolina" industry="plumbing" service="web-design" />

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Your Plumbing Website Has One Job. Is It Doing It?
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Emergency plumbing calls are decided in seconds. The homeowner finds you on Google, lands on your site, scans for a phone number, and either calls — or hits back and calls the next plumber. A slow, cluttered site loses that job. Here's the reality.
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

      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
            What a Charleston Plumbing Website Has to Get Right
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A plumbing website is not a portfolio or a brochure. It's a conversion machine with one purpose: turn the person who found you on Google into a phone call. The design, content, and structure all exist to serve that goal.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                In Charleston specifically, that means designing for the emergency scenario first. A Mount Pleasant homeowner with a burst pipe at 10pm is not reading your about page. They need your phone number, confirmation you serve their area, and evidence you're trustworthy — all visible within 3 seconds. We design for that reality.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We've built websites for plumbing and other trades across the Lowcountry. We know what Charleston homeowners respond to and how to structure a site that converts emergency calls, supports SEO rankings, and looks professional enough to compete with the larger companies in your market.
              </p>
            </div>
            <div className="space-y-4">
              {charlestonAngles.map((item) => (
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

      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">What We Build Into Every Plumbing Site</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">Design decisions with one purpose: more calls from Charleston homeowners who need a plumber.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f) => (
            <div key={f.title} className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">What You Get</h2>
          <p className="text-white/60 text-lg text-center mb-12 leading-relaxed">Everything your plumbing company needs built in — not added on later at extra cost.</p>
          <div className="space-y-3">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <p className="text-white/80 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Our Process</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">From first conversation to a live plumbing website — here's how it works.</p>
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

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Serving Plumbers Across the Lowcountry</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">We build service area pages for every community you cover so your site ranks where your customers search.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {neighborhoods.map((n) => (
              <div key={n} className="flex items-center gap-2 bg-background rounded-lg p-3 border border-border">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm font-medium">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Questions About Plumbing Web Design in Charleston</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-10">Explore More for Charleston Plumbers</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Local SEO for Plumbers in Charleston", desc: "A great website is the foundation. SEO is what drives homeowners to it from Google.", href: "/locations/south-carolina/charleston/plumbing/seo" },
              { title: "Google Ads for Plumbers in Charleston", desc: "Put your new site to work immediately with targeted emergency plumbing campaigns.", href: "/locations/south-carolina/charleston/plumbing/google-ads" },
              { title: "Plumbing Digital Marketing", desc: "See our full approach to growing plumbing companies with digital marketing.", href: "/industries/plumbing" },
            ].map((link) => (
              <a key={link.title} href={link.href} className="block bg-background rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group">
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{link.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{link.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">Learn more <ArrowRight className="w-3.5 h-3.5" /></span>
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>

            <NearbyMarkets markets={[
        { name: "Charleston Plumbing Marketing", to: "/locations/south-carolina/charleston/plumbing" },
        { name: "Charleston Plumbing SEO", to: "/locations/south-carolina/charleston/plumbing/seo" },
        { name: "Houston Plumbing Web Design", to: "/locations/texas/houston/plumbing/web-design" },
        { name: "Plumbing Industry Page", to: "/industries/plumbing" },
      ]} />

      <FinalCTASection
        headline="Your Plumbing Website Should Be Booking Emergency Jobs Around the Clock"
        subtitle="If your current site isn't converting Charleston homeowners into calls, it's costing you jobs. Fill out the form and we'll take a look — no commitment required."
      />
    </Layout>
  );
}
