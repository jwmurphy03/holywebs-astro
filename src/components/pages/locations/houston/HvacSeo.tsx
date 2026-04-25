import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, TrendingUp, Star, BarChart3,
  Thermometer, Wind, Check, FileText, Gauge, Sun,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";

const marketStats = [
  { stat: "7M+", label: "Houston metro population — the largest HVAC market in Texas and one of the top 5 in the country" },
  { stat: "4+ mo.", label: "Months of 90°F+ heat every year in Houston — driving year-round demand that most markets never see" },
  { stat: "42%", label: "Of map pack clicks go to the top 3 results — the rest of the market splits what's left" },
  { stat: "78%", label: "Of Houston homeowners choose a service company from page one of local search results" },
];

const seoFeatures = [
  {
    icon: MapPin,
    title: "Google Maps Pack Domination",
    desc: "When a homeowner in Katy types 'AC repair near me' at 3pm on an August afternoon, you need to be in the top 3. We optimize every signal — proximity, reviews, GBP completeness, engagement — to put Houston HVAC companies there and keep them there.",
  },
  {
    icon: Star,
    title: "Review Strategy That Compounds",
    desc: "Reviews are the #1 local ranking factor and the first thing Houston homeowners read before calling. We build a systematic process to generate consistent 5-star reviews from your best customers — the kind that build trust and map pack rankings simultaneously.",
  },
  {
    icon: Search,
    title: "Houston HVAC Keyword Targeting",
    desc: "We go after the searches that book jobs: 'AC repair Houston TX', 'HVAC installation Katy', 'emergency air conditioning The Woodlands', 'heat pump replacement Sugar Land', 'AC service Pearland'. High intent, suburb-specific, profitable.",
  },
  {
    icon: FileText,
    title: "On-Page Optimization",
    desc: "Service area pages for Katy, Sugar Land, The Woodlands, Pearland, Friendswood, and beyond — each with location-specific content, structured data markup, and technical SEO that tells Google exactly what you do and where you do it.",
  },
  {
    icon: TrendingUp,
    title: "Year-Round Season Strategy",
    desc: "Houston HVAC demand never really turns off — it just shifts. Cooling season dominates May through October, but mild winters mean heating calls year-round. We position you for every window, not just summer.",
  },
  {
    icon: BarChart3,
    title: "Transparent Monthly Reporting",
    desc: "Keyword positions, map pack tracking, website traffic, call volume trends. Clear numbers in plain language — tied to jobs booked, not impressions on a PDF that doesn't mean anything.",
  },
];

const houstonAngles = [
  {
    icon: Thermometer,
    text: "Houston averages 90°F or higher for 4+ months annually. The combination of extreme heat and Gulf Coast humidity pushes HVAC systems past design limits faster — creating more emergency breakdowns, more replacement decisions, and more searches than almost any other market in the country.",
  },
  {
    icon: Wind,
    text: "Hurricane Harvey and subsequent tropical systems damaged thousands of HVAC units across the metro. Homeowners who replaced systems post-storm are now entering the next replacement cycle, and those searches are already happening.",
  },
  {
    icon: MapPin,
    text: "Katy, The Woodlands, Sugar Land, and Pearland are among the fastest-growing suburbs in America. New construction and first-time homeowners in these areas are actively searching for HVAC contractors they can trust long-term.",
  },
  {
    icon: Sun,
    text: "Houston's year-round demand creates a fundamentally different opportunity than seasonal markets. A well-ranked HVAC company in Houston generates calls in every month of the year — the SEO investment pays back continuously.",
  },
];

const process = [
  {
    step: "01",
    title: "Houston HVAC Market Audit",
    desc: "We audit your current Google Business Profile, website, and rankings against the top HVAC competitors in your Houston service area. You'll see exactly where you're losing jobs — in Katy, Sugar Land, Pearland, or wherever your growth targets are — and what it'll take to win them.",
  },
  {
    step: "02",
    title: "GBP & On-Page Foundation",
    desc: "We fully optimize your Google Business Profile — categories, services, photos, posts, Q&A responses — and build out the on-page structure your site needs to rank for HVAC searches across the Houston metro and its suburbs.",
  },
  {
    step: "03",
    title: "Content, Citations & Reviews",
    desc: "We create targeted service area content for each Houston suburb you serve, build consistent local citations, and implement a review generation system that builds your reputation while boosting your map pack position.",
  },
  {
    step: "04",
    title: "Monitor, Rank & Grow",
    desc: "SEO is not a one-time task. We track rankings, monitor GBP performance, and continuously improve your strategy — especially heading into the summer surge when competition for map pack positions peaks.",
  },
];

const faqs = [
  {
    q: "How long does it take for an HVAC company to rank in Houston?",
    a: "For map pack results, HVAC companies typically start seeing meaningful movement in 60–90 days with proper foundation work. Organic rankings take longer — plan for 4–6 months before strong traction. Houston is a large market, but most local HVAC companies haven't invested in SEO systematically, so the barrier to breaking into the top 3 is lower than the market size suggests.",
  },
  {
    q: "What Houston HVAC keywords should I be targeting?",
    a: "The highest-value searches are emergency and high-intent: 'AC repair Houston TX', 'air conditioning not cooling Katy', 'HVAC installation Sugar Land', 'emergency AC service The Woodlands', 'heat pump replacement Pearland'. We also build out suburb-specific and neighborhood-level variations to capture demand across your full service area.",
  },
  {
    q: "Is Google Maps or organic search more important for Houston HVAC?",
    a: "For HVAC, the map pack is usually more important — it appears first and captures emergency searches where homeowners want to call immediately. We prioritize both, but getting into the top 3 map pack positions in your target Houston zip codes is typically the fastest path to more calls.",
  },
  {
    q: "My GBP has decent reviews. Why am I not in the top 3?",
    a: "Reviews are one of many ranking factors. Proximity, GBP completeness, website authority, engagement signals, category selections, and local citations all play a role. In a market as large as Houston, the competition for map pack positions is intense — a thorough audit usually reveals multiple factors holding a company back.",
  },
  {
    q: "Can you help us rank in Houston's suburbs like Katy, Sugar Land, and Pearland?",
    a: "Yes — and this is where the opportunity is largest. Katy, Sugar Land, Pearland, Friendswood, League City, The Woodlands, and Conroe are all fast-growing communities with high homeowner density and strong HVAC search volume. We build suburb-specific service area pages and optimize your GBP for these exact locations.",
  },
  {
    q: "How does Houston's climate affect HVAC SEO strategy?",
    a: "Houston's year-round heat creates a fundamentally different SEO environment than seasonal markets. There's no three-month off-season to coast through. Search volume remains elevated year-round, which means consistent investment in rankings pays back consistently — not just during a four-month summer window.",
  },
  {
    q: "Do you require a long-term contract?",
    a: "No. We work month-to-month. SEO takes time to build, and we'll be transparent about the timeline, but we never lock you in. We keep clients because the results justify the investment — not because of a contract.",
  },
];

const neighborhoods = [
  "Katy", "Sugar Land", "The Woodlands", "Pearland",
  "Friendswood", "League City", "Conroe", "Spring",
  "Tomball", "Cypress", "Humble", "Pasadena",
  "Baytown", "Missouri City", "Richmond", "Stafford",
];

const competitivePoints = [
  "Houston's HVAC market generates hundreds of millions in annual revenue — the contractors in the top 3 of Google Maps capture a disproportionate share",
  "HVAC-specific keyword research built for Houston's suburban geography — not a generic template",
  "Year-round strategy, not just a summer push",
  "Month-to-month — no long-term contracts",
];

export default function HoustonHvacSeo() {
  return (
    <Layout>
      <Helmet>
        <title>Local SEO for HVAC Contractors in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Rank higher on Google Maps and dominate local search for HVAC services in Houston, TX. Holy Webs builds local SEO strategies for Houston HVAC contractors that drive real calls year-round."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/hvac/seo" />
        <meta property="og:title" content="Local SEO for HVAC Contractors in Houston, TX | Holy Webs" />
        <meta
          property="og:description"
          content="Rank higher on Google Maps for HVAC searches in Houston, TX. Local SEO strategies built for Houston's year-round heat market."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Local SEO for HVAC Contractors — Houston, TX",
            description:
              "Local SEO and Google Business Profile optimization for HVAC contractors in Houston, Texas.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [
              { "@type": "City", name: "Houston" },
              { "@type": "City", name: "Katy" },
              { "@type": "City", name: "Sugar Land" },
              { "@type": "City", name: "The Woodlands" },
              { "@type": "City", name: "Pearland" },
            ],
            serviceType: "Local SEO",
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />

      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Local SEO services for HVAC contractors in Houston, TX. Google Maps optimization, keyword rankings, and review strategy for the Houston metro."
        areaServed={["Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Friendswood"]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-dark" />
        <div className="relative z-10 py-24 lg:py-36">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <Breadcrumbs
              items={[
                { label: "Locations", href: "/locations" },
                { label: "Texas" },
                { label: "Houston", href: "/locations/texas/houston" },
                { label: "HVAC", href: "/locations/texas/houston/hvac" },
                { label: "Local SEO" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — HVAC Local SEO
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Get Your HVAC Company to the Top of Google in&nbsp;Houston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Houston's heat market runs 4+ months at 90°F — and the demand never really stops. When a homeowner in Katy or Sugar Land searches for an HVAC contractor, the company in the top 3 of Google Maps gets the call. We put Houston HVAC contractors in that position.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">
                Get a Free SEO Audit
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

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            The Houston HVAC Market Is One of the Largest in the Country
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Houston's combination of extreme heat, Gulf Coast humidity, and 7 million residents creates an HVAC market that generates demand year-round. The contractors who dominate local search capture a compounding share of that demand — every month, not just in summer.
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

      {/* Houston-Specific Angles */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
            Why Houston HVAC SEO Is a Different Game
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Houston is not like Dallas or Phoenix. The Gulf Coast humidity doesn't just make the heat feel worse — it accelerates HVAC system degradation, drives up maintenance frequency, and creates more emergency repair searches per household than most markets in the country.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The suburban geography matters too. Katy, Sugar Land, The Woodlands, Pearland, and Friendswood aren't just Houston neighborhoods — they're independent search markets with their own keyword patterns and competition dynamics. A single 'Houston HVAC' strategy misses most of where the jobs actually are.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Houston's HVAC market generates hundreds of millions in annual revenue. The contractors who appear in the top 3 of Google Maps for suburb-specific searches capture a disproportionate share of that revenue. SEO is how you get there — and how you stay there.
              </p>
            </div>
            <div className="space-y-4">
              {houstonAngles.map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border"
                >
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
          What's Included in HVAC Local SEO
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          A complete local SEO strategy built specifically for HVAC contractors across the Houston metro.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {seoFeatures.map((f) => (
            <div
              key={f.title}
              className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Competitive Framing */}
      <SectionWrapper variant="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
            The Houston HVAC Market Rewards Visibility
          </h2>
          <p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            The math is straightforward: a 7-million-person metro with year-round heat creates more HVAC searches per day than most entire regional markets. The companies positioned at the top of local results capture the majority of that demand.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {competitivePoints.map((point) => (
              <div key={point} className="flex items-start gap-4 bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-white/80 text-sm leading-relaxed font-medium">{point}</p>
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
          No smoke and mirrors — here's exactly how we approach HVAC SEO in Houston.
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

      {/* Areas Served */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            HVAC SEO Across the Houston Metro
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build hyperlocal SEO targeting every suburb and community you serve — so you rank where your customers are searching.
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
          Questions About HVAC SEO in Houston
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
            Explore More for Houston HVAC Companies
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Google Ads for HVAC in Houston",
                desc: "Pair SEO with paid search to capture emergency calls while your organic rankings build.",
                href: "/locations/texas/houston/hvac/google-ads",
              },
              {
                title: "Google Business Profile for HVAC",
                desc: "Your GBP is the foundation of local search. We optimize it end-to-end for maximum map pack visibility.",
                href: "/locations/texas/houston/hvac/google-business-profile",
              },
              {
                title: "HVAC Digital Marketing",
                desc: "See our complete approach to digital marketing for HVAC contractors across all channels.",
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
        { name: "Houston HVAC Marketing", to: "/locations/texas/houston/hvac" },
        { name: "Houston HVAC Google Ads", to: "/locations/texas/houston/hvac/google-ads" },
        { name: "Charleston HVAC SEO", to: "/locations/south-carolina/charleston/hvac/seo" },
        { name: "HVAC Industry Page", to: "/industries/hvac" },
      ]} />

      <FinalCTASection
        headline="Ready to Dominate HVAC Search in Houston?"
        subtitle="Houston homeowners are searching for HVAC contractors right now. Fill out the form and we'll show you exactly where you rank — and how to get to the top."
      />
    </Layout>
  );
}
