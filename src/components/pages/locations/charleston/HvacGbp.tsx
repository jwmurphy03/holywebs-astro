import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Star, Search, Camera, FileText,
  MessageSquare, TrendingUp, Check, BarChart3, Users,
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
  { stat: "Top 3", label: "Map pack positions capture the vast majority of clicks on local HVAC searches" },
  { stat: "88%", label: "Of consumers trust online reviews as much as personal recommendations" },
  { stat: "73", label: "Verified Google reviews for Holy Webs — we understand what it takes to build a review presence" },
  { stat: "7×", label: "More likely to get a direction request from a fully optimized GBP vs. an incomplete one" },
];

const gbpFeatures = [
  {
    icon: Search,
    title: "Complete Profile Optimization",
    desc: "We audit and optimize every field — primary and secondary categories, services list, business description, attributes, service areas, and hours. Completeness is a ranking signal most HVAC companies ignore.",
  },
  {
    icon: Star,
    title: "Review Generation System",
    desc: "We build a repeatable process for generating authentic 5-star reviews from your best customers. The system runs in the background — every job you complete becomes an opportunity to strengthen your ranking.",
  },
  {
    icon: MessageSquare,
    title: "Review Response Strategy",
    desc: "Every review — positive and negative — gets a response that builds trust and signals to Google that your business is active and engaged. We handle the responses or write them for you to send.",
  },
  {
    icon: Camera,
    title: "Photo & Visual Strategy",
    desc: "Profiles with regular photo uploads rank higher and earn more engagement. We build a photo strategy around your team, equipment, job sites, and seasonal content that keeps your profile active.",
  },
  {
    icon: FileText,
    title: "GBP Posts & Seasonal Offers",
    desc: "Regular GBP posts signal activity to Google and give customers a reason to click. We write and publish seasonal posts — AC tune-up specials, hurricane prep offers, heating checkups — timed to Lowcountry demand.",
  },
  {
    icon: BarChart3,
    title: "Insights Tracking & Reporting",
    desc: "We monitor your GBP insights monthly — search queries, view counts, direction requests, and call clicks — and use that data to continuously improve your profile's performance.",
  },
];

const charlestonAngles = [
  {
    icon: TrendingUp,
    text: "Charleston's HVAC market is competitive, but most local companies have neglected, incomplete Google Business Profiles. A fully optimized GBP is often the fastest path to more map pack visibility in this market.",
  },
  {
    icon: Star,
    text: "Reviews matter more for HVAC than almost any other trade — homeowners are letting a stranger into their house during a stressful situation. A strong review count builds the trust that closes the call.",
  },
  {
    icon: MapPin,
    text: "Charleston's tri-county service area means your GBP needs properly configured service areas for Mount Pleasant, Summerville, West Ashley, and every other community you cover.",
  },
  {
    icon: Users,
    text: "The seasonal nature of Charleston HVAC demand means your GBP needs to stay active year-round — not just in summer. Google rewards consistency, not just a burst of activity during peak season.",
  },
];

const optimizationChecklist = [
  "Primary and secondary category selection (most HVAC companies get this wrong)",
  "Full services list with descriptions for every offering",
  "Service area configuration across all communities you serve",
  "Business description with local keywords and trust signals",
  "All relevant attributes enabled (licensed, insured, veteran-owned, etc.)",
  "Q&A section seeded with common HVAC questions and answers",
  "Photo library built with team, equipment, and job site images",
  "Regular post schedule aligned with seasonal demand",
  "Review generation system and response templates",
  "Monthly insights review with adjustments",
];

const process = [
  {
    step: "01",
    title: "GBP Audit & Competitive Analysis",
    desc: "We audit your current profile against the top 3 HVAC companies ranking in your area. You'll see exactly which signals they're stronger on and where you can close the gap quickly.",
  },
  {
    step: "02",
    title: "Full Profile Optimization",
    desc: "We fix every element that's incomplete, incorrect, or suboptimal — categories, services, description, photos, service areas, attributes. This is the foundation everything else builds on.",
  },
  {
    step: "03",
    title: "Review System & Ongoing Activity",
    desc: "We implement your review generation process and set up a content calendar for posts. From here, your GBP stays active and your review count grows with every job you complete.",
  },
  {
    step: "04",
    title: "Monthly Monitoring & Adjustment",
    desc: "We track your ranking position in the map pack, review velocity, and engagement metrics. We adjust the strategy based on what the data shows and what competitors are doing.",
  },
];

const faqs = [
  {
    q: "What is Google Business Profile and why does it matter for HVAC?",
    a: "Google Business Profile (formerly Google My Business) is the listing that shows up in Google Maps and the local map pack when someone searches for HVAC services near them. For HVAC companies, it's often the first thing a homeowner sees — before your website. Getting into the top 3 positions can double or triple your call volume from local search.",
  },
  {
    q: "How do I get into the top 3 of Google Maps for HVAC in Charleston?",
    a: "The top 3 positions are determined by a combination of proximity, relevance, and prominence. Proximity is fixed — it's about where searchers are located. Relevance comes from your profile completeness and your website content. Prominence is driven by reviews, engagement, and online authority. We optimize all of the controllable signals.",
  },
  {
    q: "How many reviews do I need to compete in Charleston?",
    a: "The top HVAC companies in the Charleston map pack typically have 50–200+ reviews. If you're below that, there's a real gap to close. But review count isn't everything — recency and response rate matter too. A company with 40 fresh, responded-to reviews often outperforms one with 200 stale ones.",
  },
  {
    q: "How does the review generation system work?",
    a: "We build a simple, repeatable process tailored to how your business operates. Usually it involves a text or email sent after job completion with a direct link to your Google review page. The system runs on autopilot — you focus on doing good work, we make sure that work turns into public proof.",
  },
  {
    q: "Can you help with negative reviews?",
    a: "We can help you respond to negative reviews in a way that demonstrates professionalism and often recovers the situation. We can also help flag reviews that violate Google's policies for removal. What we can't do — and what you should never pay anyone to do — is fake or remove legitimate reviews.",
  },
  {
    q: "Is GBP optimization a one-time task or ongoing?",
    a: "Both. There's an initial optimization sprint to fix everything that's wrong or incomplete. After that, it's ongoing — regular posts, responding to new reviews, adding photos, monitoring performance, and adjusting for algorithm changes. Google rewards profiles that stay active.",
  },
  {
    q: "Does my website affect my Google Business Profile ranking?",
    a: "Yes — your website is a strong off-profile ranking signal. A well-optimized website with service area pages, local keywords, and proper schema markup supports your GBP ranking significantly. We often recommend running GBP optimization alongside local SEO for this reason.",
  },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Goose Creek", "Hanahan", "Isle of Palms", "Sullivan's Island",
  "Folly Beach", "Ladson", "Moncks Corner", "Kiawah Island",
];

export default function CharlestonHvacGbp() {
  return (
    <Layout>
      <Helmet>
        <title>Google Business Profile for HVAC in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Get your HVAC company into the top 3 of Google Maps in Charleston, SC. Full Google Business Profile optimization, review generation, and map pack strategy for Lowcountry HVAC contractors."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/hvac/google-business-profile/" />
        <meta property="og:title" content="Google Business Profile for HVAC in Charleston, SC | Holy Webs" />
        <meta
          property="og:description"
          content="Dominate the Google Maps pack for HVAC searches in Charleston with a fully optimized Google Business Profile and a review generation system that compounds over time."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Google Business Profile Optimization for HVAC — Charleston, SC",
            description: "Google Business Profile optimization and map pack strategy for HVAC contractors in Charleston, South Carolina.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [
              { "@type": "City", name: "Charleston" },
              { "@type": "City", name: "Mount Pleasant" },
              { "@type": "City", name: "Summerville" },
              { "@type": "City", name: "North Charleston" },
            ],
            serviceType: "Google Business Profile Optimization",
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />

      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Google Business Profile optimization for HVAC contractors in Charleston, SC. Map pack rankings, review generation, and ongoing GBP management."
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
                { label: "Google Business Profile" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Charleston, SC — HVAC Google Business Profile
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Own the Google Maps Pack for HVAC in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When homeowners search for HVAC service in Charleston, the top 3 map results get almost all the calls. Your Google Business Profile is the key to getting there — and most HVAC companies in the Lowcountry have left it half-finished. We fix that.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">
                Get a Free GBP Audit
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

      <LocalSpokeAnswers city="Charleston" state="South Carolina" industry="hvac" service="google-business-profile" />

      {/* Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Your Google Business Profile Is Your Most Valuable Digital&nbsp;Asset
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            For HVAC companies in Charleston, the Google Maps pack drives more inbound calls than almost any other channel — including your website. Most homeowners never click through to a site. They see the map, read a few reviews, and call. Here's what the numbers say about why this matters.
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
            Why GBP Is the Highest-Leverage Move for Charleston HVAC
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We've audited dozens of local HVAC companies in the Charleston area, and the pattern is consistent: the top-ranking companies aren't necessarily the largest or most experienced. They're the ones with the most complete, active, and reviewed Google Business Profiles.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                That's the opportunity. In a market this competitive, a fully optimized GBP is often the single fastest way to move up in the map pack — faster than building backlinks, faster than new website content. The work pays off in weeks, not months.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We've built 73 Google reviews for Holy Webs itself. We know exactly what it takes to build a review presence that ranks and converts — and we apply that same system to the HVAC companies we work with.
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
          What's Included in GBP Optimization
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          A complete GBP strategy from initial setup through ongoing management.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {gbpFeatures.map((f) => (
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

      {/* Checklist */}
      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
            Our GBP Optimization Checklist
          </h2>
          <p className="text-white/60 text-lg text-center mb-12 leading-relaxed">
            Most HVAC companies in Charleston have completed fewer than half of these. We complete all of them.
          </p>
          <div className="space-y-3">
            {optimizationChecklist.map((item) => (
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
          From audit to ranking — here's how we optimize your HVAC Google Business Profile.
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

      {/* Service Area */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            GBP Optimization Across the Lowcountry
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We configure your service area to cover every community you serve — so you rank when searchers in those neighborhoods need HVAC help.
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
          Questions About GBP for HVAC in Charleston
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
                desc: "GBP and local SEO work together. Build organic rankings that support your map pack position.",
                href: "/locations/south-carolina/charleston/hvac/seo",
              },
              {
                title: "Google Ads for HVAC in Charleston",
                desc: "Pair your GBP optimization with paid search to dominate the top of the results page.",
                href: "/locations/south-carolina/charleston/hvac/google-ads",
              },
              {
                title: "HVAC Digital Marketing",
                desc: "See our complete digital marketing approach for HVAC contractors.",
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
        { name: "Houston HVAC GBP", to: "/locations/texas/houston/hvac/google-business-profile" },
        { name: "HVAC Industry Page", to: "/industries/hvac" },
      ]} />

      <FinalCTASection
        headline="Let's Get Your HVAC Company Into the Top 3 on Google Maps"
        subtitle="Most Charleston HVAC companies have an incomplete Google Business Profile. We fix that — and then build the review presence to back it up. Fill out the form to get started."
      />
    </Layout>
  );
}
