import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, TrendingUp, Star, BarChart3,
  Thermometer, Wind, Check, Phone, FileText, Gauge,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";

const charlestonWaterfront = "/assets/charleston-waterfront.jpg";

const marketStats = [
  { stat: "90°F+", label: "Average summer highs in Charleston — 3+ months of peak AC demand every year" },
  { stat: "3–4×", label: "Spike in HVAC-related searches from May through September in the Lowcountry" },
  { stat: "42%", label: "Of map pack clicks go to the top 3 results — the rest fight over scraps" },
  { stat: "78%", label: "Of homeowners choose a service company from the first page of local results" },
];

const seoFeatures = [
  {
    icon: MapPin,
    title: "Google Maps Pack Domination",
    desc: "When a homeowner in Mount Pleasant types \"AC repair near me\" at 2pm on a July afternoon, you need to be in the top 3. We optimize every signal — proximity, reviews, engagement, GBP completeness — to put you there.",
  },
  {
    icon: Star,
    title: "Review Strategy That Compounds",
    desc: "Reviews are the #1 local ranking factor and the first thing homeowners read. We build a systematic process to generate consistent 5-star reviews from your best customers — the kind that build trust and rankings at the same time.",
  },
  {
    icon: Search,
    title: "HVAC Keyword Targeting",
    desc: "We go after the searches that book jobs: \"AC repair Charleston SC\", \"HVAC installation Mount Pleasant\", \"furnace replacement West Ashley\", \"emergency air conditioning service James Island\". High intent, specific, profitable.",
  },
  {
    icon: FileText,
    title: "On-Page Optimization",
    desc: "Service area pages, location-specific content, structured data markup for HVAC businesses, and technical SEO that tells Google exactly what you do and where you do it.",
  },
  {
    icon: TrendingUp,
    title: "Seasonal Surge Preparation",
    desc: "Charleston's HVAC search volume doesn't build gradually — it spikes hard in May. We build your rankings before the season so you're positioned when the phones need to ring, not still climbing the ladder.",
  },
  {
    icon: BarChart3,
    title: "Transparent Monthly Reporting",
    desc: "Keyword positions, map pack tracking, website traffic, call volume trends. Clear numbers in plain language — tied to jobs booked, not impressions on a PDF.",
  },
];

const charlestonAngles = [
  {
    icon: Thermometer,
    text: "Charleston's heat and humidity combine to push HVAC systems harder — and break them faster. That means more emergency repair searches, more replacement decisions, and more opportunities for the company that shows up first.",
  },
  {
    icon: Wind,
    text: "Hurricane season runs June through November. Homeowners get HVAC tune-ups before storms and call for emergency service after. Companies in the map pack during peak season capture calls they can't afford to miss.",
  },
  {
    icon: MapPin,
    text: "New construction is exploding in Summerville, Nexton, and Carnes Crossroads — all homeowners who need an HVAC contractor they can trust and find online.",
  },
  {
    icon: TrendingUp,
    text: "The short-term rental boom on Isle of Palms, Sullivan's Island, and Folly Beach means property managers need reliable HVAC contractors who show up in search when guests call with problems.",
  },
];

const process = [
  {
    step: "01",
    title: "HVAC-Specific Market Audit",
    desc: "We audit your current Google Business Profile, website, and rankings against the top HVAC competitors in Charleston. You'll see exactly where you're losing jobs and what it'll take to win them back.",
  },
  {
    step: "02",
    title: "GBP & On-Page Foundation",
    desc: "We fully optimize your Google Business Profile — categories, services, photos, posts, Q&A — and build out the on-page structure your site needs to rank for HVAC searches across the tri-county area.",
  },
  {
    step: "03",
    title: "Content, Citations & Reviews",
    desc: "We create targeted service area content, build consistent local citations, and implement a review generation system that builds your reputation while boosting your map pack position.",
  },
  {
    step: "04",
    title: "Monitor, Rank & Grow",
    desc: "SEO is not a one-time task. We track rankings, monitor GBP performance, and continuously improve your strategy — especially heading into peak season when the stakes are highest.",
  },
];

const faqs = [
  {
    q: "How long does it take for an HVAC company to rank in Charleston?",
    a: "For map pack results, HVAC companies typically start seeing meaningful movement in 60–90 days if the foundation is right. Organic rankings take longer — plan for 4–6 months before strong traction. The upside is that most of your Charleston competitors haven't invested in SEO properly, so the barrier is lower than you'd think.",
  },
  {
    q: "What HVAC keywords should I be ranking for in Charleston?",
    a: "The highest-value searches are emergency and high-intent: \"AC repair Charleston SC\", \"air conditioning not working Mount Pleasant\", \"HVAC installation Summerville\", \"emergency AC service James Island\". We also target neighborhood-specific variations and seasonal keywords before each peak period.",
  },
  {
    q: "Is Google Maps or organic search more important for HVAC?",
    a: "For HVAC, the map pack is often more important — it shows up first and captures emergency searches where homeowners want to call immediately. We prioritize both, but getting into the top 3 map pack spots is usually the fastest path to more calls.",
  },
  {
    q: "My GBP already has good reviews. Why am I not in the top 3?",
    a: "Reviews are just one of many ranking factors. Proximity, GBP completeness, website authority, engagement signals, category selections, and local citations all play a role. We audit all of them to find what's holding you back.",
  },
  {
    q: "Do you understand the seasonal HVAC cycle in Charleston?",
    a: "We've been working with service businesses in Charleston since Holy Webs started here. We know the summer surge, the slower fall months, the pre-winter furnace tune-up window, and how to time your SEO investment to maximize impact when search volume peaks.",
  },
  {
    q: "Can you help us rank in multiple Charleston neighborhoods?",
    a: "Yes. We build out service area pages targeting specific communities — Mount Pleasant, Summerville, West Ashley, James Island, North Charleston, Daniel Island, and others. Hyper-local targeting is how you win against larger competitors with bigger budgets.",
  },
  {
    q: "Do you require a long-term contract?",
    a: "No. We work month-to-month. SEO takes time to build, and we'll be transparent about the timeline, but we never lock you in. We keep clients because the results justify the investment — not because of a contract.",
  },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Goose Creek", "Hanahan", "Isle of Palms", "Sullivan's Island",
  "Folly Beach", "Ladson", "Moncks Corner", "Kiawah Island",
];

const proofPoints = [
  "73 Google reviews — more than most agencies in the Southeast",
  "Started in Charleston — we know this market from the inside",
  "HVAC-specific keyword research, not a generic template",
  "Month-to-month — no long-term contracts",
];

export default function CharlestonHvacSeo() {
  return (
    <Layout>
      <Helmet>
        <title>Local SEO for HVAC Companies in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Rank higher on Google Maps and dominate local search for HVAC services in Charleston, SC. Holy Webs builds local SEO strategies for Lowcountry HVAC contractors that drive real calls."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/hvac/seo" />
        <meta property="og:title" content="Local SEO for HVAC Companies in Charleston, SC | Holy Webs" />
        <meta
          property="og:description"
          content="Rank higher on Google Maps and dominate local search for HVAC services in Charleston, SC. Local SEO strategies built for Lowcountry HVAC contractors."
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Local SEO for HVAC Companies — Charleston, SC",
            description:
              "Local SEO and Google Business Profile optimization for HVAC contractors in Charleston, South Carolina.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [
              { "@type": "City", name: "Charleston" },
              { "@type": "City", name: "Mount Pleasant" },
              { "@type": "City", name: "Summerville" },
              { "@type": "City", name: "North Charleston" },
            ],
            serviceType: "Local SEO",
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />

      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Local SEO services for HVAC contractors in Charleston, SC. Google Maps optimization, keyword rankings, and review strategy for the Lowcountry."
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
                { label: "Local SEO" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Charleston, SC — HVAC Local SEO
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Get Your HVAC Company to the Top of Google in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              When a homeowner's AC goes out on a July afternoon in Charleston, they're not scrolling to page two. They're calling the first HVAC company that shows up. We put Charleston HVAC contractors in that map pack — and keep them&nbsp;there.
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
            The Charleston HVAC Market Is High-Intent — and Highly&nbsp;Competitive
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Charleston homeowners don't shop around when the AC dies. They search, they scan the top results, and they call. The companies in the top 3 of Google Maps win the majority of those emergency calls. Everyone else waits. Here's the reality of the market you're competing in.
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

      {/* Why Charleston HVAC SEO Is Different */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
            Charleston's Climate Creates HVAC Opportunities<br />That Don't Exist Anywhere&nbsp;Else
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Charleston isn't Phoenix. The heat here comes with humidity — the kind that pushes HVAC systems past their limits faster, increases emergency breakdowns, and drives homeowners to search for contractors they've never heard of. That's your window.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                The Lowcountry market also has characteristics that no out-of-state agency understands. The surge of short-term rental properties along the coast. The wave of new construction in Summerville and Nexton. The aging historic homes on the Peninsula that need specialized HVAC solutions. These are the real opportunities — and the real keywords your strategy needs to capture.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We started Holy Webs in Charleston. We know this market because we live here. When we build an SEO strategy for your HVAC company, it's built around how Charleston actually works — not a template that was built for a contractor in Ohio.
              </p>
            </div>
            <div className="space-y-4">
              {charlestonAngles.map((item) => (
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
          A complete local SEO strategy built specifically for HVAC contractors in the Charleston tri-county area.
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

      {/* Proof Section */}
      <SectionWrapper variant="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
            Proof Over Promises
          </h2>
          <p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-12 leading-relaxed">
            We're not going to tell you we're the best agency in Charleston. We'll let the evidence do that.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {proofPoints.map((point) => (
              <div key={point} className="flex items-start gap-4 bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-white/80 text-sm leading-relaxed font-medium">{point}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="text-white/80 text-lg leading-relaxed italic max-w-2xl mx-auto mb-4">
              "Before Holy Webs, we were invisible on Google. Now we consistently get calls from customers who found us in the maps. The summer was our best season on record."
            </p>
            <p className="text-white/50 text-sm font-medium">— Charleston HVAC Contractor, verified Google review</p>
          </div>
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Our Process
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          No smoke and mirrors — here's exactly how we approach HVAC SEO in Charleston.
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
            HVAC SEO Across the Lowcountry
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build hyperlocal SEO targeting every community you serve — so you rank where your customers are searching.
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
          Questions About HVAC SEO in Charleston
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
                title: "Google Ads for HVAC in Charleston",
                desc: "Pair SEO with paid search to capture emergency calls while your organic rankings build.",
                href: "/locations/south-carolina/charleston/hvac/google-ads",
              },
              {
                title: "Google Business Profile for HVAC",
                desc: "Your GBP is the foundation of local search. We optimize it end-to-end for maximum map pack visibility.",
                href: "/locations/south-carolina/charleston/hvac/google-business-profile",
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
        { name: "Charleston HVAC Marketing", to: "/locations/south-carolina/charleston/hvac" },
        { name: "Charleston HVAC Google Ads", to: "/locations/south-carolina/charleston/hvac/google-ads" },
        { name: "Houston HVAC SEO", to: "/locations/texas/houston/hvac/seo" },
        { name: "HVAC Industry Page", to: "/industries/hvac" },
      ]} />

      <FinalCTASection
        headline="Ready to Dominate HVAC Search in Charleston?"
        subtitle="Charleston homeowners are searching for HVAC companies right now. Fill out the form and we'll show you exactly where you rank — and how to get to the top."
      />
    </Layout>
  );
}
