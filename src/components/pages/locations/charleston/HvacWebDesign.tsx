import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Phone, Gauge, Shield, Star,
  Smartphone, Search, Check, Globe, Monitor, Wrench,
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
  { stat: "60%+", label: "Of HVAC searches happen on mobile — your site needs to work perfectly on a phone" },
  { stat: "3 sec", label: "The load time threshold — after 3 seconds, half of mobile visitors abandon the page" },
  { stat: "1st", label: "Impression your website makes is often the deciding factor on whether someone calls" },
  { stat: "94%", label: "Of first impressions are design-related — a bad site loses trust before a word is read" },
];

const designFeatures = [
  {
    icon: Phone,
    title: "Emergency Call Conversion",
    desc: "Every page on your HVAC site should make it effortless to call. Sticky click-to-call buttons, prominent phone numbers, emergency service CTAs above the fold — we design specifically for the moment a homeowner needs you now.",
  },
  {
    icon: Gauge,
    title: "Speed-Optimized for Google & Customers",
    desc: "Slow HVAC sites lose both rankings and customers. We build fast — optimized images, clean code, minimal bloat. Your site loads in under 2 seconds on mobile, which Google rewards and homeowners appreciate.",
  },
  {
    icon: Search,
    title: "Built for Local SEO from Day One",
    desc: "Your site structure, page names, headings, and schema markup are all built to support local search rankings — not retrofitted later. Service area pages for Mount Pleasant, Summerville, West Ashley, and every community you serve.",
  },
  {
    icon: Shield,
    title: "Trust Signals That Convert",
    desc: "Licenses, insurance, certifications, associations, manufacturer partnerships — your credentials displayed prominently. HVAC homeowners are trusting a stranger in their home. Your website needs to earn that trust before they call.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    desc: "We design for the phone first, desktop second — because that's where your customers are. Emergency AC searches happen on phones, in the heat, in frustration. Your site has to work perfectly in that moment.",
  },
  {
    icon: Star,
    title: "Reviews & Social Proof Integration",
    desc: "Your Google reviews, certifications, and before/after project photos are woven throughout the site — not hidden on a testimonials page nobody visits. Proof where it matters: the moment someone is deciding whether to call.",
  },
];

const charlestonAngles = [
  {
    icon: Phone,
    text: "Charleston's summer heat means your best leads are homeowners in distress — they need to call immediately. A site that buries the phone number or takes 5 seconds to load loses those jobs to someone with a better site.",
  },
  {
    icon: Globe,
    text: "The Charleston market has become more competitive as the city grows. A professional website is now table stakes — it's the first thing homeowners use to judge whether your company is legitimate and trustworthy.",
  },
  {
    icon: Monitor,
    text: "Tourists and short-term rental property managers make up a growing portion of HVAC service demand in coastal areas. A professional site with clear service descriptions and easy booking helps convert those higher-value clients.",
  },
  {
    icon: Search,
    text: "A properly structured HVAC website is the foundation of every other digital marketing channel — it supports SEO rankings, improves Google Ads conversion rates, and makes your GBP listing more credible.",
  },
];

const whatWeDeliver = [
  "Custom design that reflects your brand — not a template used by 200 other HVAC companies",
  "Service pages for every offering: AC repair, installation, maintenance, heating, ductwork",
  "Service area pages for every community you target in the tri-county area",
  "Integrated contact form and emergency call button on every page",
  "Google Analytics, Search Console, and call tracking setup",
  "Schema markup for your business, services, reviews, and FAQs",
  "Fast page speeds — optimized images, clean code, no unnecessary plugins",
  "SSL certificate and security best practices built in",
  "Responsive design tested across iPhone, Android, and desktop",
  "Local SEO-ready structure that supports future ranking growth",
];

const process = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We learn your service area, your top services, your ideal customer, and what separates you from other HVAC companies in Charleston. That understanding shapes every design decision we make.",
  },
  {
    step: "02",
    title: "Design & Content",
    desc: "We design your site and write the copy — HVAC-specific, Charleston-specific, and built around the searches that book jobs. You review and approve before we touch a line of code.",
  },
  {
    step: "03",
    title: "Build & Optimize",
    desc: "We build your site with performance, SEO, and conversion as the primary objectives. Every page is optimized before launch — not after you've already missed leads.",
  },
  {
    step: "04",
    title: "Launch & Support",
    desc: "We launch, set up tracking, and make sure everything works perfectly. After launch, we're available for updates, edits, and changes as your business evolves.",
  },
];

const faqs = [
  {
    q: "Do HVAC companies really need a custom website, or is a template fine?",
    a: "Templates aren't the problem — bad templates are. The issue is most template-built contractor sites are slow, not optimized for mobile emergencies, and look identical to 50 other HVAC companies in your market. We build on proven frameworks but design and optimize specifically for your business and your market.",
  },
  {
    q: "How long does it take to build an HVAC website?",
    a: "Typically 3–5 weeks from kickoff to launch, depending on how quickly we can gather your content, photos, and approvals. If you need something faster for peak season, let us know — we can prioritize.",
  },
  {
    q: "What makes an HVAC website different from other contractor sites?",
    a: "The emergency use case is unique. HVAC homeowners are often stressed, hot, and searching on a phone. Your site needs to deliver the essentials — who you are, what you do, your service area, and how to call — within 3 seconds of landing. Most HVAC sites make homeowners work too hard to find that information.",
  },
  {
    q: "Do you write the content or do I have to provide it?",
    a: "We write it. Our team writes HVAC-specific, Charleston-specific content that's built to rank and built to convert. You review and approve, but you don't have to start from scratch or hand us a Word doc.",
  },
  {
    q: "Will my new website help me rank on Google?",
    a: "A well-built site is the foundation of local SEO — it's not sufficient by itself, but nothing works without it. We structure your site to support future ranking growth: clean URLs, proper heading hierarchy, schema markup, service area pages, and fast load times. Combine this with our local SEO service and the results compound.",
  },
  {
    q: "Can you redesign my existing site or do you build from scratch?",
    a: "Either. If your current site has a good structure and just needs a visual refresh and optimization pass, we can work with that. If it's beyond saving, we build new. We'll give you an honest assessment after looking at what you have.",
  },
  {
    q: "Do you offer ongoing website maintenance?",
    a: "Yes. We offer monthly maintenance plans that cover security updates, performance monitoring, content updates, and technical fixes. You focus on running your HVAC business — we keep the site running cleanly in the background.",
  },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Goose Creek", "Hanahan", "Isle of Palms", "Sullivan's Island",
  "Folly Beach", "Ladson", "Moncks Corner", "Kiawah Island",
];

export default function CharlestonHvacWebDesign() {
  return (
    <Layout>
      <Helmet>
        <title>Web Design for HVAC Companies in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Professional HVAC website design for Charleston, SC contractors. Fast, mobile-first sites built to convert emergency calls, support local SEO, and earn trust from Lowcountry homeowners."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/hvac/web-design/" />
        <meta property="og:title" content="Web Design for HVAC Companies in Charleston, SC | Holy Webs" />
        <meta
          property="og:description"
          content="HVAC websites built for emergency calls, local SEO, and trust — designed specifically for Charleston contractors serving the Lowcountry."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Web Design for HVAC Companies — Charleston, SC",
            description: "Professional website design for HVAC contractors in Charleston, South Carolina.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [
              { "@type": "City", name: "Charleston" },
              { "@type": "City", name: "Mount Pleasant" },
              { "@type": "City", name: "Summerville" },
              { "@type": "City", name: "North Charleston" },
            ],
            serviceType: "Web Design",
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />

      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Web design for HVAC contractors in Charleston, SC. Mobile-first, fast-loading, conversion-optimized websites built for the Lowcountry market."
        areaServed={["Charleston", "Mount Pleasant", "Summerville", "North Charleston", "West Ashley", "James Island"]}
      />

      {/* Hero */}
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
            <Breadcrumbs
              items={[
                { label: "Locations", href: "/locations" },
                { label: "South Carolina" },
                { label: "Charleston", href: "/locations/south-carolina/charleston" },
                { label: "HVAC" },
                { label: "Web Design" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Charleston, SC — HVAC Web Design
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              HVAC Websites Built to Convert Charleston&nbsp;Homeowners
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When a homeowner finds your HVAC company online, your website has about 5 seconds to earn their trust and make it easy to call. We build sites that do that — fast, mobile-first, and built specifically for the Lowcountry market.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">
                See Our Work
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

      <LocalSpokeAnswers city="Charleston" state="South Carolina" industry="hvac" service="web-design" />

      {/* Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Your Website Is Working — or It's Costing&nbsp;You&nbsp;Jobs
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Most HVAC companies in Charleston have a website that looks fine on a desktop at 9am. The problem is the customer visiting it on a phone in 95-degree heat at 2pm when the AC dies. That version of your site — slow, hard to navigate, buried phone number — is where the job gets lost.
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

      {/* Charleston Context */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
            What a Charleston HVAC Website Needs to&nbsp;Do
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                An HVAC website is not a brochure. It's a conversion machine with one job: turn the person who found you on Google into a phone call. Everything else — the photos, the copy, the design choices — exists to serve that goal.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                In Charleston specifically, that means designing for the emergency scenario. A Mount Pleasant homeowner at 2pm in July needs to immediately see that you serve their area, that you have good reviews, that you're available, and exactly how to call you. No scrolling required.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We've built websites for contractors and service businesses across the Lowcountry. We know what Charleston homeowners respond to, which trust signals move the needle in this market, and how to structure a site that supports both organic search and paid campaigns.
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

      {/* What We Do */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What We Build Into Every HVAC Site
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Design decisions that exist for one reason: more calls from Charleston homeowners.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {designFeatures.map((f) => (
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

      {/* Deliverables Checklist */}
      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
            What You Get
          </h2>
          <p className="text-white/60 text-lg text-center mb-12 leading-relaxed">
            Everything your HVAC company needs — built in, not added on later.
          </p>
          <div className="space-y-3">
            {whatWeDeliver.map((item) => (
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

      {/* Process */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Our Process
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          From first conversation to a live HVAC website — here's how it works.
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

      {/* Areas */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Serving HVAC Contractors Across the Lowcountry
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build service area pages for every community you cover — so your site ranks where your customers search.
          </p>
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

      {/* FAQ */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
          Questions About HVAC Web Design in Charleston
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

      {/* Cross-links */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-10">
            Explore More for Charleston HVAC Companies
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Local SEO for HVAC in Charleston",
                desc: "A great website is the foundation. SEO is what drives homeowners to it from Google.",
                href: "/locations/south-carolina/charleston/hvac/seo",
              },
              {
                title: "Google Ads for HVAC in Charleston",
                desc: "Put your new site to work immediately with targeted paid search campaigns.",
                href: "/locations/south-carolina/charleston/hvac/google-ads",
              },
              {
                title: "HVAC Digital Marketing",
                desc: "See our full approach to growing HVAC companies with digital marketing.",
                href: "/industries/hvac",
              },
            ].map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="block bg-background rounded-xl p-6 border border-border hover:border-primary/40 hover:shadow-md transition-all duration-300 group"
              >
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{link.desc}</p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </SectionWrapper>

            <NearbyMarkets markets={[
        { name: "Charleston HVAC Marketing", to: "/locations/south-carolina/charleston/hvac" },
        { name: "Charleston HVAC SEO", to: "/locations/south-carolina/charleston/hvac/seo" },
        { name: "Houston HVAC Web Design", to: "/locations/texas/houston/hvac/web-design" },
        { name: "HVAC Industry Page", to: "/industries/hvac" },
      ]} />

      <FinalCTASection
        headline="Your HVAC Website Should Be Your Best Salesperson"
        subtitle="If your current site isn't generating consistent calls from Charleston homeowners, it's time for a change. Fill out the form and we'll take a look at what you have — no commitment required."
      />
    </Layout>
  );
}
