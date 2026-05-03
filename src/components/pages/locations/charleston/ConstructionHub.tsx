import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, MousePointerClick, Star,
  Globe, Home, TrendingUp, Check, HardHat, Building2,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import AnswerSummary from "@/components/AnswerSummary";

const charlestonWaterfront = "/assets/charleston-waterfront.jpg";

const services = [
  {
    icon: Search,
    title: "Local SEO",
    desc: "Rank for high-value searches like \"general contractor Charleston SC,\" \"custom home builder Mount Pleasant,\" and \"commercial construction Summerville.\" Build the organic presence that generates consistent inbound from both residential and commercial clients.",
    href: "/locations/south-carolina/charleston/construction/seo",
    cta: "Construction SEO in Charleston",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads",
    desc: "Construction is a high-ticket, high-competition market. Targeted paid campaigns that put your business in front of developers, property owners, and homeowners who are actively planning projects — not just browsing.",
    href: "/locations/south-carolina/charleston/construction/google-ads",
    cta: "Construction Google Ads in Charleston",
  },
  {
    icon: Star,
    title: "Google Business Profile",
    desc: "The map pack isn't just for service trades — commercial and residential construction clients use it too. A fully optimized GBP with the right categories, portfolio photos, and reviews puts you ahead of most competitors who haven't touched their listing.",
    href: "/locations/south-carolina/charleston/construction/google-business-profile",
    cta: "Construction GBP in Charleston",
  },
  {
    icon: Globe,
    title: "Web Design",
    desc: "A portfolio-first construction website that showcases your completed projects, communicates your capabilities, and converts visitors into consultation requests. Built for both the $80K renovation client and the $2M commercial project lead.",
    href: "/locations/south-carolina/charleston/construction/web-design",
    cta: "Construction Web Design in Charleston",
  },
];

const marketStats = [
  { stat: "850K+", label: "People in the Charleston metro — one of the fastest-growing regions in the Southeast" },
  { stat: "$4.2B", label: "In construction permits issued in Charleston County in recent years as development accelerates" },
  { stat: "68%", label: "Of construction RFQs now start with a Google search for local contractors" },
  { stat: "73", label: "Verified Google reviews for Holy Webs — we know what builds credibility in this market" },
];

const whyCharleston = [
  {
    icon: Building2,
    text: "Charleston is one of the fastest-growing metros in the country. Nexton, Carnes Crossroads, and West of the Ashley are expanding rapidly — creating consistent demand for residential construction, renovation, and commercial build-outs.",
  },
  {
    icon: Home,
    text: "The Peninsula's historic district creates a specialized renovation and restoration niche. Contractors who can work within HOA and Historic Charleston Foundation guidelines command premium rates — and need online visibility to capture those clients.",
  },
  {
    icon: TrendingUp,
    text: "Short-term rental growth on the coast and in downtown neighborhoods is driving renovation and new construction demand from investors. These buyers search Google to find contractors — they don't have word-of-mouth networks in a new market.",
  },
  {
    icon: HardHat,
    text: "Post-hurricane reconstruction and storm recovery cycles generate multi-year construction demand across the Lowcountry. General contractors with online presence capture more of that work than those relying solely on insurance adjuster referrals.",
  },
];

const faqs = [
  {
    q: "What digital marketing should a Charleston general contractor invest in first?",
    a: "A professional website with a portfolio, followed by Google Business Profile optimization. Construction clients vet contractors more carefully than almost any other purchase — they want to see completed work, read reviews, and verify credentials before making contact. Once those credibility foundations are in place, SEO and Google Ads build lead flow on top of them.",
  },
  {
    q: "Is there enough construction search volume in Charleston to justify SEO?",
    a: "Yes, significantly. 'General contractor Charleston SC,' 'custom home builder Mount Pleasant,' 'home addition contractor Summerville' — these are searches happening daily from buyers with large budgets. The challenge is that most construction websites are outdated and un-optimized, which means a well-built SEO strategy can outrank established companies relatively quickly.",
  },
  {
    q: "How do you market to both residential and commercial construction clients?",
    a: "They require separate strategies. Residential clients search consumer keywords and respond to portfolio and review signals. Commercial clients search vendor-style keywords and vet based on project scale, bonding, licensing, and past commercial work. We build separate content tracks and landing pages for each audience, rather than trying to serve both from one generic homepage.",
  },
  {
    q: "Do you work with specialty contractors — not just general contractors?",
    a: "Yes. We work with GCs, custom home builders, renovation contractors, commercial contractors, and specialty trades. The strategy varies by specialty — a custom home builder needs a different keyword set and content approach than a commercial general contractor. We tailor to your specific niche.",
  },
];

const answerSummary = [
  {
    question: "What should Charleston contractors highlight online?",
    answer: "Show the kind of work you want more of: historic renovations, additions, custom homes, commercial build-outs, investor renovations, or specialty construction. Charleston buyers care about local experience, project photos, credentials, and whether you understand the constraints of the neighborhood.",
  },
  {
    question: "Which construction searches matter in Charleston?",
    answer: "Valuable searches include general contractor Charleston SC, custom home builder Mount Pleasant, home addition Summerville, renovation contractor downtown Charleston, commercial contractor North Charleston, and historic renovation Charleston.",
  },
  {
    question: "Why does Charleston construction marketing need local nuance?",
    answer: "A Peninsula renovation, a Mount Pleasant custom home, and a Summerville commercial build-out are three different buying journeys. The copy, proof, keywords, and calls to action should reflect that instead of treating every construction lead the same.",
  },
  {
    question: "How do project pages help contractors rank?",
    answer: "Project pages turn completed work into search assets. A well-written page with photos, location context, scope, and outcome can rank for neighborhood searches while giving prospects the confidence to reach out about similar work.",
  },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Goose Creek", "Hanahan", "Kiawah Island", "Folly Beach",
];

export default function CharlestonConstructionHub() {
  return (
    <Layout>
      <Helmet>
        <title>Construction Digital Marketing in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="SEO, Google Ads, Google Business Profile, and web design for general contractors and construction companies in Charleston, SC. Built for Lowcountry contractors who want to win more bids."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/construction" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Construction Digital Marketing — Charleston, SC",
            description: "Digital marketing for construction contractors in Charleston, SC.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "City", name: "Charleston" }, { "@type": "City", name: "Mount Pleasant" }, { "@type": "City", name: "Summerville" }],
          })}
        </script>
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Digital marketing for construction contractors in Charleston, SC. Local SEO, Google Ads, GBP optimization, and web design."
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
              { label: "Construction" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Construction Digital Marketing</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Digital Marketing for Contractors in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Charleston is one of the fastest-growing cities in the Southeast. Homeowners planning additions, developers scoping build-outs, and investors searching for renovation contractors are on Google right now. We make sure your construction business is the one they find.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Start with a free visibility audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Charleston's Construction Market Is Growing Faster Than Most Contractors Can&nbsp;Keep Up
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            New development in the suburbs, historic renovation demand on the Peninsula, STR investor build-outs on the coast — Charleston generates construction opportunities year-round. The contractors who show up in search capture the best projects.
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
            What Makes Construction Marketing in Charleston Different
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Charleston has three distinct construction demand streams happening simultaneously. The suburban growth corridor (Summerville, Nexton, Carnes Crossroads) is generating new construction at a pace that rivals any market in the country. The Peninsula and historic neighborhoods are creating premium renovation and restoration demand. And the coastal communities are seeing investor-driven build-outs fueled by short-term rental growth.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Each of these segments requires a different marketing message — and different search keywords. A contractor trying to capture all three from a single generic homepage is underperforming in all three.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We built Holy Webs in Charleston. We know this market, and we build construction marketing strategies that speak to the specific client types driving demand here.
              </p>
            </div>
            <div className="space-y-4">
              {whyCharleston.map((item) => (
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

      <AnswerSummary
        heading="Charleston Construction Marketing: Useful Answers"
        intro="Construction buyers are careful. They want evidence, local familiarity, and a reason to believe you can handle their specific type of project."
        items={answerSummary}
        variant="light"
      />

      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          How We Help Charleston Contractors Grow
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Four services — each built around how Charleston homeowners and developers find and choose a contractor.
        </p>
        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((s) => (
            <div key={s.title} className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <a href={s.href} className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:text-primary/80 transition-colors">
                {s.cta} <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">Built in Charleston. Built for the Lowcountry Market.</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            We're not a national agency running your campaign from another state. We started here, know this market, and apply the same local expertise to your construction business that we've used to build our own 73-review Google presence in South Carolina.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {["Month-to-month — no long-term contracts", "Separate strategies for residential and commercial clients", "You talk to the person doing the work", "Free visibility audit before you spend a dollar"].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <span className="text-white/80 text-sm font-medium leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Serving Contractors Across the Lowcountry</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build hyper-local strategies targeting every community you serve across the tri-county area.
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

      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Common Questions from Charleston Contractors</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <NearbyMarkets markets={[
        { name: "Houston Construction Marketing", to: "/locations/texas/houston/construction" },
        { name: "Charleston HVAC Marketing", to: "/locations/south-carolina/charleston/hvac" },
        { name: "Charleston Roofing Marketing", to: "/locations/south-carolina/charleston/roofing" },
        { name: "Construction Industry Page", to: "/industries/construction" },
      ]} />

      <FinalCTASection
        headline="Ready to Win More Construction Projects in Charleston?"
        subtitle="Charleston homeowners, developers, and investors are searching for contractors right now. Fill out the form and we'll show you where you rank and what it'll take to capture the projects your company is built for."
      />
    </Layout>
  );
}
