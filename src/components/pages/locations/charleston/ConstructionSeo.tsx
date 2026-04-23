import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MapPin, Search, Check, TrendingUp,
  Building2, Home, HardHat, Star, FileText,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";

const charlestonWaterfront = "/assets/charleston-waterfront.jpg";

const seoFeatures = [
  {
    icon: Home,
    title: "Residential Construction Keyword Strategy",
    desc: "\"Custom home builder Mount Pleasant,\" \"home addition contractor Summerville,\" \"kitchen remodel Charleston SC\" — each residential segment requires its own keyword research and page strategy.",
  },
  {
    icon: Building2,
    title: "Commercial Construction Targeting",
    desc: "Commercial clients search differently. \"Commercial contractor Charleston,\" \"commercial build-out North Charleston,\" \"tenant improvement contractor\" — we build the content authority for both sides of the market.",
  },
  {
    icon: MapPin,
    title: "Service Area Page Architecture",
    desc: "One homepage can't rank for Mount Pleasant, Summerville, and James Island simultaneously. Geo-targeted service pages capture construction searches across every community in your trade area.",
  },
  {
    icon: FileText,
    title: "Project Type Content Strategy",
    desc: "Dedicated pages for custom homes, additions, renovations, commercial build-outs, and historic restoration — each targeting its own keyword cluster and serving a different buyer intent.",
  },
  {
    icon: Star,
    title: "Portfolio as SEO Signal",
    desc: "Project pages with real photos, project descriptions, and location signals (\"Kiawah Island custom home,\" \"Downtown Charleston renovation\") create content that ranks and builds trust simultaneously.",
  },
  {
    icon: TrendingUp,
    title: "Long-Tail Specialty Targeting",
    desc: "\"Historic home renovation Charleston,\" \"Kiawah Island custom builder,\" \"Nexton new home contractor\" — specialty searches bring pre-qualified clients who already know what they want.",
  },
];

const marketStats = [
  { stat: "68%", label: "Of construction clients research contractors on Google before making contact" },
  { stat: "42%", label: "Of all local clicks go to the top 3 map pack results — the positions SEO determines" },
  { stat: "4–6mo", label: "Typical timeline to build meaningful organic rankings for construction keywords" },
  { stat: "73", label: "Verified Google reviews for Holy Webs — the same strategy we use for clients" },
];

const process = [
  { step: "01", title: "Visibility Audit", desc: "We map where you rank for high-value construction searches across your service area. You see the gaps before we start." },
  { step: "02", title: "Keyword Architecture", desc: "Separate keyword strategies for residential and commercial, organized by project type and geography — not one generic list." },
  { step: "03", title: "Content & Project Pages", desc: "Service pages, area pages, project portfolio pages, and the content that builds authority over time." },
  { step: "04", title: "Authority & Reviews", desc: "Citation building, GBP alignment, and a systematic review process that compounds rankings month over month." },
];

const faqs = [
  {
    q: "Is there enough search volume in Charleston to justify construction SEO?",
    a: "Significantly more than most contractors expect. 'General contractor Charleston SC' gets hundreds of searches monthly. The surrounding terms — custom home builder, home addition, renovation contractor — across the tri-county area represent thousands of searches from buyers with large budgets. And most construction websites in this market are under-optimized, which means strong opportunities exist for contractors willing to invest in content.",
  },
  {
    q: "How do we rank for both residential and commercial construction searches?",
    a: "With separate content tracks. Residential clients use consumer search language ('home addition contractor') while commercial clients use vendor language ('commercial general contractor Charleston'). A single page can't effectively target both. We build dedicated pages and content for each segment — so you rank across your full market.",
  },
  {
    q: "Can SEO help us win more historic renovation projects on the Peninsula?",
    a: "Yes — and this is one of the most underexploited SEO opportunities in the Charleston construction market. Very few contractors have optimized content for historic renovation, Peninsula home restoration, or Historic Charleston Foundation compliance. Ranking for those terms captures high-value, low-competition searches from exactly the premium client base you want.",
  },
  {
    q: "How long does construction SEO take to produce results?",
    a: "GBP optimization shows movement in 4–8 weeks. Organic rankings for competitive terms like 'general contractor Charleston' take 4–6 months to build meaningful traction. Project-specific and specialty terms (historic renovation, custom home builder) can rank faster because competition is lower. We build a roadmap that sequences quick wins before longer-term authority work.",
  },
];

const neighborhoods = [
  "Downtown Charleston", "Mount Pleasant", "West Ashley", "James Island",
  "Summerville", "North Charleston", "Daniel Island", "Johns Island",
  "Kiawah Island", "Folly Beach", "Goose Creek", "Hanahan",
];

export default function CharlestonConstructionSeo() {
  return (
    <Layout>
      <Helmet>
        <title>Local SEO for General Contractors in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Rank at the top of Google for construction searches in Charleston, SC. Local SEO built for general contractors, custom home builders, and renovation companies across the Lowcountry."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/construction/seo" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Local SEO for construction contractors in Charleston, SC."
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
              { label: "Construction", href: "/locations/south-carolina/charleston/construction" },
              { label: "Local SEO" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Construction Local SEO</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Local SEO for General Contractors in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Homeowners planning a $300K addition, developers scoping a commercial build-out, and investors looking for renovation contractors — they all start on Google. We build the rankings that put your construction company in front of them first.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                See your current rankings <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            The Construction SEO Opportunity in Charleston
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            One of the fastest-growing metros in the Southeast, with a construction market serving everything from historic Peninsula renovations to large-scale suburban development — and most contractor websites are leaving search traffic on the table.
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            What Our Construction SEO Covers
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Built for the specific demand patterns of the Charleston construction market — not a recycled template.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoFeatures.map((f) => (
              <div key={f.title} className="bg-background rounded-xl p-6 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
            The Historic Renovation SEO Opportunity Most Contractors Miss
          </h2>
          <p className="text-white/60 text-lg text-center leading-relaxed mb-10">
            Charleston's Peninsula has thousands of historic homes that need renovation work annually — and almost no contractors have built optimized content for those searches. The first company to rank for 'historic home renovation Charleston' and 'Historic Charleston Foundation contractor' owns a high-value niche with very little competition.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Historic renovation and restoration keyword targeting",
              "Peninsula-specific service pages and content",
              "Historic Charleston Foundation compliance content",
              "Premium project portfolio pages with location signals",
            ].map((item) => (
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">How It Works</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="text-center p-6 bg-background rounded-xl border border-border">
                <p className="text-4xl font-extrabold text-primary/20 mb-2">{p.step}</p>
                <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">Service Area Coverage</h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            We build local SEO signals for every community in your service area — not just the city of Charleston.
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

      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Construction SEO Questions</h2>
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
        { name: "Charleston Construction Marketing Hub", to: "/locations/south-carolina/charleston/construction" },
        { name: "Charleston Construction Google Ads", to: "/locations/south-carolina/charleston/construction/google-ads" },
        { name: "Charleston Construction GBP", to: "/locations/south-carolina/charleston/construction/google-business-profile" },
        { name: "Houston Construction SEO", to: "/locations/texas/houston/construction/seo" },
      ]} />

      <FinalCTASection
        headline="Ready to Rank for the Construction Projects You Want?"
        subtitle="Charleston's construction market is booming — and most contractor websites aren't built to capture it. Fill out the form and we'll show you exactly where you rank and what it'll take to get in front of your best clients."
      />
    </Layout>
  );
}
