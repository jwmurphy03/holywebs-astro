import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MousePointerClick, Check, TrendingUp,
  Building2, DollarSign, Phone, Target, Home, BarChart3,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";
import LocalSpokeAnswers from "@/components/LocalSpokeAnswers";

const adFeatures = [
  {
    icon: Target,
    title: "Neighborhood-Level Geo-Targeting",
    desc: "The Heights teardown buyer, the Memorial custom estate client, and the Katy new construction homeowner are different people with different budgets. We build campaigns with neighborhood and zip-code-level targeting so your ads reach the right buyer at the right income tier — not everyone in Houston.",
  },
  {
    icon: DollarSign,
    title: "High-Value Project Campaigns",
    desc: "Custom home builds, major additions, commercial buildouts, and luxury renovations warrant higher bids and more refined targeting than general contracting searches. We build separate campaigns for high-value project types with bidding strategies calibrated to their actual revenue potential.",
  },
  {
    icon: Building2,
    title: "Commercial Construction Targeting",
    desc: "Houston's commercial market — Medical Center expansion, Energy Corridor, industrial — is a separate search ecosystem from residential. If you compete commercially, we build distinct campaigns targeting commercial developer, property manager, and business owner search behavior.",
  },
  {
    icon: Home,
    title: "Inner-Loop Gentrification Targeting",
    desc: "The Heights, Montrose, and Midtown teardown and renovation market is highly concentrated geographically. We build hyper-targeted campaigns for these neighborhoods, reaching buyers actively planning high-value projects in Houston's most active urban construction zones.",
  },
  {
    icon: BarChart3,
    title: "Long-Cycle Lead Tracking",
    desc: "Construction has a longer sales cycle than service trades. We build attribution models that track leads from first click through to proposal request — so you understand the full pipeline impact of your Google Ads investment, not just immediate conversions.",
  },
  {
    icon: MousePointerClick,
    title: "Portfolio & Credentials Landing Pages",
    desc: "Construction clients don't call from an ad — they research. We build dedicated landing pages that showcase your relevant portfolio, credentials, and process for each campaign segment, dramatically improving conversion rates vs. sending all traffic to a generic homepage.",
  },
];

const marketStats = [
  { stat: "$500K+", label: "Average value of a custom home project in Houston's premium neighborhoods — high enough that a single signed contract justifies months of ad spend" },
  { stat: "7M+", label: "Houston metro residents, including some of the highest concentrations of high-net-worth households in the southern United States" },
  { stat: "4 of 10", label: "Fastest-growing U.S. cities are Houston suburbs — continuous new construction demand from energy-sector relocations and population growth" },
  { stat: "6–18 mo.", label: "Typical construction sales cycle — campaigns need to be built for long-term pipeline development, not just immediate conversions" },
];

const faqs = [
  {
    q: "Does Google Ads work for construction companies in Houston?",
    a: "Yes, but it requires a different approach than service trades. Construction projects have longer decision cycles, higher stakes, and more research-intensive buyers. The goal isn't to generate immediate calls — it's to get in front of serious buyers during their research phase and direct them to portfolio and credentialing content that moves them toward a consultation request. Houston's construction market is high-value enough that even a low conversion rate produces strong ROI.",
  },
  {
    q: "What should Houston construction Google Ads campaigns target?",
    a: "We segment by project type and geography. Residential campaigns target custom home, addition, and renovation keywords in Houston's premium neighborhoods — River Oaks, Memorial, The Heights, Katy, The Woodlands. Commercial campaigns target general contractor, tenant improvement, and commercial construction keywords in Houston's business districts. Each gets distinct messaging and landing pages.",
  },
  {
    q: "How do we reach high-net-worth construction buyers in Houston?",
    a: "Geo-targeting is the primary tool. We use zip-code-level targeting for Houston's high-income corridors — Memorial, River Oaks, West University, Bellaire, Tanglewood — combined with keyword targeting that reflects the language premium buyers use. Custom home, estate, luxury renovation, and architect collaboration searches index toward higher-budget buyers.",
  },
  {
    q: "How much should a Houston construction company spend on Google Ads?",
    a: "Starting budgets of $2,000–$3,000/month in ad spend can generate meaningful pipeline for residential construction in Houston. Commercial construction campaigns typically warrant more given longer sales cycles. The right budget depends on your average project value and how many qualified leads your team can handle — given that a single custom home contract can run $500K–$2M+, even modest conversion rates justify significant spend.",
  },
  {
    q: "How do we track construction leads from Google Ads?",
    a: "We configure call tracking, form submission tracking, and where applicable, consultation booking tracking. For construction, we also set up extended attribution windows — because the buyer who clicks your ad in February and requests a proposal in June should still be credited to that initial ad interaction. Monthly reporting maps your ad spend to lead quality and pipeline stage.",
  },
];

export default function HoustonConstructionGoogleAds() {
  return (
    <Layout>
      <Helmet>
        <title>Google Ads for Construction Contractors in Houston, TX | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Google Ads for Houston construction contractors. Neighborhood-level targeting for Heights, Memorial, Katy, The Woodlands. Reach high-value buyers searching for custom homes and additions."
        />
        <link rel="canonical" href="https://holywebs.com/locations/texas/houston/construction/google-ads" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description="Google Ads management for construction contractors in Houston, TX."
        areaServed={["Houston", "Katy", "Sugar Land", "The Woodlands", "The Heights", "Memorial"]}
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
                { label: "Construction", href: "/locations/texas/houston/construction" },
                { label: "Google Ads" },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">
              Houston, TX — Construction Google Ads
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Google Ads for Construction Contractors in&nbsp;Houston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Houston's energy-sector wealth and relentless suburban growth create a construction market where serious buyers research online before they talk to anyone. Paid search gets your portfolio in front of those buyers at the moment they're actively looking.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">
                Get a Free Consultation
              </a>
              <a
                href="/resources/free-visibility-audit"
                className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
              >
                Start with a free audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Houston" state="Texas" industry="construction" service="google-ads" />

      {/* Market Stats */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Houston's Construction Market Rewards Visibility at the Top of Search
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            In a market where a single signed contract can run into seven figures, paid search is one of the most efficient ways to put your company in front of high-value buyers during their decision process.
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

      {/* Features */}
      <SectionWrapper variant="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            What's in Our Houston Construction Ad Campaigns
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Built for Houston's premium residential market, fast-growing suburbs, and active commercial construction landscape.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adFeatures.map((f) => (
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

      {/* Checklist */}
      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">
            Built for Houston's Long-Cycle Construction Market
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Construction campaigns need to be calibrated for longer decision cycles and higher-value conversions. We build infrastructure that tracks the full pipeline — from first click to proposal request.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Neighborhood-level targeting for The Heights, Memorial, Katy, The Woodlands",
              "Separate campaigns for residential and commercial construction",
              "Portfolio landing pages matched to each campaign segment",
              "Extended attribution windows to track long-cycle construction leads",
              "Call tracking and form submission tracking on all campaigns",
              "Monthly reporting mapping ad spend to pipeline quality",
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

      {/* FAQ */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
          Houston Construction Google Ads Questions
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

            <NearbyMarkets markets={[
        { name: "Houston Construction Marketing", to: "/locations/texas/houston/construction" },
        { name: "Houston Construction SEO", to: "/locations/texas/houston/construction/seo" },
        { name: "Charleston Construction Google Ads", to: "/locations/south-carolina/charleston/construction/google-ads" },
        { name: "Construction Industry Page", to: "/industries/construction" },
      ]} />

      <FinalCTASection
        headline="Ready to Capture Houston's High-Value Construction Leads?"
        subtitle="Houston's construction buyers are researching online right now. Fill out the form and we'll show you what a campaign built for this market looks like."
      />
    </Layout>
  );
}
