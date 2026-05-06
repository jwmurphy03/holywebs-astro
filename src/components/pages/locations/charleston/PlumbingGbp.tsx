import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Star, Search, Camera, FileText,
  MessageSquare, TrendingUp, Check, BarChart3, Droplets,
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
  { stat: "Top 3", label: "Map pack positions capture the overwhelming majority of emergency plumbing clicks" },
  { stat: "91%", label: "Of consumers read online reviews before choosing a plumber — reviews are the #1 trust factor" },
  { stat: "73", label: "Verified Google reviews for Holy Webs — we've built our own review presence in this market" },
  { stat: "4×", label: "More website visits from a complete, optimized GBP vs. an incomplete profile" },
];

const features = [
  {
    icon: Search,
    title: "Full Profile Optimization",
    desc: "Every field — primary and secondary categories, services list, service areas, business description, attributes, hours, and special hours — optimized to signal exactly what you do and where you do it.",
  },
  {
    icon: Star,
    title: "Review Generation System",
    desc: "We build a repeatable process for turning completed jobs into 5-star reviews. The system runs on autopilot — every satisfied homeowner becomes an opportunity to strengthen your ranking and your reputation.",
  },
  {
    icon: MessageSquare,
    title: "Review Response Strategy",
    desc: "Every review — positive or negative — gets a response that demonstrates professionalism and builds trust. For plumbing specifically, how you handle negative reviews signals to homeowners whether you'll stand behind your work.",
  },
  {
    icon: Camera,
    title: "Photo Strategy",
    desc: "Before/after job photos, team photos, equipment, and job site images. Profiles with regular photo uploads rank higher and convert better — homeowners want to see evidence you do quality work.",
  },
  {
    icon: FileText,
    title: "GBP Posts & Seasonal Content",
    desc: "Regular posts keep your profile active and give homeowners a reason to engage. We write seasonal content — pre-storm plumbing tips, water heater tune-up offers, drain maintenance reminders — timed to Charleston demand.",
  },
  {
    icon: BarChart3,
    title: "Insights Monitoring",
    desc: "Monthly tracking of search queries, profile views, direction requests, and call clicks. We use that data to continuously improve your profile's performance and respond to what's working.",
  },
];

const charlestonAngles = [
  {
    icon: Droplets,
    text: "Plumbing has the highest trust barrier of any trade — homeowners are making a fast decision to let a stranger into their home, often during a stressful emergency. A strong review presence is how you clear that barrier.",
  },
  {
    icon: TrendingUp,
    text: "Most plumbing companies in the Charleston market have incomplete GBP profiles — wrong categories, no service area configuration, missing services. A fully optimized profile stands out immediately.",
  },
  {
    icon: MapPin,
    text: "Charleston's tri-county service area requires careful GBP service area configuration. We make sure your profile shows up for searches across Mount Pleasant, Summerville, West Ashley, and every other community you serve.",
  },
  {
    icon: Star,
    text: "Review recency matters as much as review count. A consistent stream of new reviews — one or two per week — outperforms a company with 200 reviews that stopped generating them a year ago.",
  },
];

const checklist = [
  "Primary category: Plumber (not just 'Contractor' — specificity matters for ranking)",
  "Secondary categories for every service you offer",
  "Full services list with descriptions for each offering",
  "Service area configured for every community in your territory",
  "Business description with local keywords and trust signals",
  "All relevant attributes (licensed, insured, 24/7 available, etc.)",
  "Q&A section seeded with common plumbing questions",
  "Photo library built with job photos, team photos, and equipment",
  "Regular post schedule aligned with seasonal plumbing demand",
  "Review generation system and response templates in place",
];

const process = [
  {
    step: "01",
    title: "GBP Audit & Gap Analysis",
    desc: "We audit your current profile against the top 3 plumbing companies in the Charleston map pack. You'll see exactly which signals they're stronger on and the fastest path to closing the gap.",
  },
  {
    step: "02",
    title: "Full Profile Optimization",
    desc: "We fix everything that's incomplete, incorrect, or suboptimal — categories, services, description, photos, service areas, attributes. The foundation everything else builds on.",
  },
  {
    step: "03",
    title: "Review System & Content Calendar",
    desc: "We implement your review generation process and set up a GBP post calendar. From here, your profile stays active and your review count grows with every job.",
  },
  {
    step: "04",
    title: "Monthly Monitoring",
    desc: "We track map pack position, review velocity, and engagement metrics — and adjust the strategy based on what the data shows and what competitors are doing.",
  },
];

const faqs = [
  {
    q: "How does Google Business Profile affect my plumbing company's map pack ranking?",
    a: "Your GBP is the primary input Google uses to determine your map pack position. The three ranking factors are proximity (where the searcher is located — you can't control this), relevance (how well your profile matches the search — you can fully control this), and prominence (your reviews, engagement, and online authority — you can significantly influence this). We optimize the two controllable factors.",
  },
  {
    q: "How many reviews do I need to compete in Charleston?",
    a: "The top plumbing companies in the Charleston map pack typically have 30–100+ reviews. If you're below that range, there's a clear gap to close. But count isn't the only factor — recency, star rating, and response rate all matter. A company with 40 fresh, responded-to reviews often outranks one with 100 stale ones.",
  },
  {
    q: "What categories should a plumbing company use on Google Business Profile?",
    a: "Your primary category should be 'Plumber' — not a broader category like 'Contractor.' Secondary categories can include 'Drainage service,' 'Water softening equipment supplier,' 'Well drilling contractor,' or others based on your specific services. Getting categories right is one of the most impactful changes most plumbers can make to their GBP.",
  },
  {
    q: "How does your review generation system work?",
    a: "We build a process tailored to your workflow — typically a text sent after job completion with a direct link to your Google review page. Simple, low-friction, and it runs on autopilot. You do good work; the system makes sure that work generates public proof.",
  },
  {
    q: "Is GBP optimization a one-time task or ongoing?",
    a: "Both. Initial optimization fixes everything that's wrong or incomplete. After that, it's ongoing — regular posts, responding to new reviews, adding job photos, monitoring performance. Google rewards active profiles. A profile you set up and forget will lose ground to competitors who stay consistent.",
  },
  {
    q: "Does my website affect my GBP ranking?",
    a: "Yes — significantly. A well-optimized website with local keywords, service area pages, and proper schema markup supports your map pack ranking. We often recommend running GBP optimization alongside local SEO so both channels reinforce each other.",
  },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Goose Creek", "Hanahan", "Isle of Palms", "Sullivan's Island",
  "Folly Beach", "Ladson", "Moncks Corner", "Kiawah Island",
];

export default function CharlestonPlumbingGbp() {
  return (
    <Layout>
      <Helmet>
        <title>Google Business Profile for Plumbers in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Get your plumbing company into the top 3 of Google Maps in Charleston, SC. Full GBP optimization, review generation system, and map pack strategy for Lowcountry plumbers."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/plumbing/google-business-profile/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Google Business Profile for Plumbers — Charleston, SC",
            description: "Google Business Profile optimization for plumbing contractors in Charleston, SC.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "City", name: "Charleston" }, { "@type": "City", name: "Mount Pleasant" }],
            serviceType: "Google Business Profile Optimization",
          })}
        </script>
      </Helmet>
      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Google Business Profile optimization for plumbing contractors in Charleston, SC."
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
              { label: "South Carolina", href: "/locations/south-carolina" },
              { label: "Charleston", href: "/locations/south-carolina/charleston" },
              { label: "Plumbing", href: "/locations/south-carolina/charleston/plumbing" },
              { label: "Google Business Profile" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Plumbing Google Business Profile</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Own the Google Maps Pack for Plumbing in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Most plumbing jobs in Charleston start with a Google Maps search. The top 3 results get almost all the calls. Your Google Business Profile is the key to getting there — and most Charleston plumbers have left it half-finished.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free GBP Audit</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Start with a free visibility audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Charleston" state="South Carolina" industry="plumbing" service="google-business-profile" />

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Your Google Business Profile Is the Front Door for Plumbing Jobs in Charleston
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            For most plumbing searches in Charleston, homeowners see the map pack, read a few reviews, and call — without ever visiting a website. Your GBP is often the only thing standing between you and the job. Here's what that looks like in numbers.
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
            Why GBP Is the Highest-Leverage Move for Charleston Plumbers
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We've audited dozens of local plumbing companies in the Lowcountry. The pattern is consistent: the companies ranking in the top 3 aren't always the most experienced or the most established. They're the ones with the most complete, active, and reviewed Google Business Profiles.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                In a market where most plumbing companies have neglected their GBP, a fully optimized profile moves up the map pack significantly — often faster than any other investment. And once you're in the top 3, the calls compound.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We've built Holy Webs' own 73-review Google presence in South Carolina. We apply the same system to the plumbing companies we work with.
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">What's Included in GBP Optimization</h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">A complete GBP strategy from initial audit through ongoing monthly management.</p>
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">Our GBP Optimization Checklist</h2>
          <p className="text-white/60 text-lg text-center mb-12 leading-relaxed">Most Charleston plumbers have completed fewer than half of these. We complete all of them.</p>
          <div className="space-y-3">
            {checklist.map((item) => (
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
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">From audit to ranking — here's how we optimize your plumbing Google Business Profile.</p>
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">GBP Optimization Across the Lowcountry</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">We configure your service area to cover every community you serve — so you show up when homeowners in those neighborhoods search.</p>
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Questions About GBP for Plumbers in Charleston</h2>
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
              { title: "Local SEO for Plumbers in Charleston", desc: "GBP and SEO work together — build organic rankings that support your map pack position.", href: "/locations/south-carolina/charleston/plumbing/seo" },
              { title: "Google Ads for Plumbers in Charleston", desc: "Pair GBP optimization with paid search to capture emergency calls from multiple directions.", href: "/locations/south-carolina/charleston/plumbing/google-ads" },
              { title: "Plumbing Digital Marketing", desc: "See our complete approach to digital marketing for plumbing contractors.", href: "/industries/plumbing" },
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
        { name: "Houston Plumbing GBP", to: "/locations/texas/houston/plumbing/google-business-profile" },
        { name: "Plumbing Industry Page", to: "/industries/plumbing" },
      ]} />

      <FinalCTASection
        headline="Let's Get Your Plumbing Company Into the Top 3 on Google Maps"
        subtitle="Most Charleston plumbers have an incomplete Google Business Profile. We fix that — and build the review presence to back it up. Fill out the form to get started."
      />
    </Layout>
  );
}
