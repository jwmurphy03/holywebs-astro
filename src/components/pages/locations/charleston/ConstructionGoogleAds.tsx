import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MousePointerClick, Check, TrendingUp,
  Building2, Home, Target, DollarSign, BarChart3, Users,
} from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import NearbyMarkets from "@/components/NearbyMarkets";

const charlestonWaterfront = "/assets/charleston-waterfront.jpg";

const adFeatures = [
  {
    icon: Home,
    title: "Residential Project Campaigns",
    desc: "Separate campaigns for custom homes, additions, renovations, and remodels — each with its own keyword set, landing page, and bid strategy. High-ticket residential clients search specifically and convert on specificity.",
  },
  {
    icon: Building2,
    title: "Commercial Construction Targeting",
    desc: "Commercial clients search with different intent than homeowners. Tenant improvement, commercial build-out, and office renovation campaigns with targeted bids on commercial-intent keywords.",
  },
  {
    icon: Target,
    title: "Tri-County Geo-Targeting",
    desc: "Charleston, Berkeley, and Dorchester Counties — dialed to zip code level. No spend on projects outside your service area. We also exclude areas where you don't want to work.",
  },
  {
    icon: Users,
    title: "Developer & Investor Audience Targeting",
    desc: "In-market audience signals for real estate investors and property developers — the clients planning multiple projects who are worth far more than a single homeowner.",
  },
  {
    icon: DollarSign,
    title: "High-Ticket Keyword Bidding",
    desc: "Construction keywords have higher CPCs because the deal sizes justify it. We manage bids strategically to stay competitive on high-intent terms without overpaying for research-phase traffic.",
  },
  {
    icon: BarChart3,
    title: "Lead Quality Optimization",
    desc: "Not all construction leads are equal. We track lead quality and optimize campaigns toward the project types and price points you actually want to win — not just raw lead volume.",
  },
];

const marketStats = [
  { stat: "$80K–$2M+", label: "Typical range for construction projects in the Charleston market — the ad math works at all levels" },
  { stat: "68%", label: "Of construction clients research contractors online before making first contact" },
  { stat: "3–5 days", label: "Typical time from campaign launch to first qualified leads in an established Google Ads account" },
  { stat: "73", label: "Verified Google reviews for Holy Webs — the credibility we help contractors build" },
];

const faqs = [
  {
    q: "Are Google Ads effective for construction companies or just service trades?",
    a: "Effective — but different. Trades like HVAC and plumbing have emergency intent that converts immediately. Construction has a longer decision cycle with higher deal values. Ads work by capturing buyers in the research phase and staying visible throughout their 2–8 week evaluation process. The ROI math is compelling because construction projects are worth 10–100× what a plumbing call is worth.",
  },
  {
    q: "How much should a Charleston construction company spend on Google Ads?",
    a: "Most construction campaigns start at $1,500–$3,000/month in ad spend. Custom home and commercial campaigns often warrant higher budgets because the project values are larger and the keyword competition is higher. Given that a single signed contract can run $150K+, even modest conversion rates produce strong returns. We'll tell you what we think makes sense for your project mix after reviewing your situation.",
  },
  {
    q: "How do we target the right project types — not just anyone searching for a contractor?",
    a: "Through campaign segmentation and negative keyword management. We build separate campaigns for the project types you want (custom homes, additions, commercial build-outs) and exclude irrelevant searches (handyman, small repairs, project types you don't take). The result is qualified traffic from the clients whose projects match your capacity.",
  },
  {
    q: "Can we target real estate investors and developers specifically?",
    a: "Yes. Google's in-market audience data includes buyers researching real estate investment, property development, and commercial construction. We layer these audiences over your keyword campaigns to increase bids for the most valuable traffic segments — the clients who have multiple projects, not just one.",
  },
];

export default function CharlestonConstructionGoogleAds() {
  return (
    <Layout>
      <Helmet>
        <title>Google Ads for General Contractors in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Google Ads campaigns for construction contractors in Charleston, SC. Residential, commercial, and renovation campaigns that target the right clients and the right project types across the Lowcountry."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/construction/google-ads" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Google Ads management for construction contractors in Charleston, SC."
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
              { label: "Google Ads" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Construction Google Ads</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Google Ads for Construction Contractors in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              The homeowners and developers planning the largest construction projects in Charleston are searching Google right now. Targeted campaigns that reach them at the research phase — before they've called anyone — put you in the conversation first.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                Start with a free audit <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Construction Ads in a Booming Market
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Charleston is one of the fastest-growing metros in the country. The pipeline of new construction, renovation, and commercial projects is expanding every year — and the clients planning those projects are finding contractors on Google.
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
            What's in Our Construction Ad Campaigns
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Built for the specific project types and client segments driving construction demand in Charleston.
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

      <SectionWrapper variant="dark">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">Targeting the Right Clients — Not Just Any Leads</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            Construction lead quality matters more than volume. A campaign that brings 50 unqualified leads is worth less than 5 leads from buyers with projects that match your capacity. We optimize toward quality from day one.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {["Separate campaigns by project type and ticket size", "Negative keyword lists excluding low-value searches", "In-market audience layers for developer and investor traffic", "Lead quality feedback loop to continuously improve targeting"].map((item) => (
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Construction Google Ads Questions</h2>
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
        { name: "Charleston Construction Marketing", to: "/locations/south-carolina/charleston/construction" },
        { name: "Charleston Construction SEO", to: "/locations/south-carolina/charleston/construction/seo" },
        { name: "Houston Construction Google Ads", to: "/locations/texas/houston/construction/google-ads" },
        { name: "Construction Industry Page", to: "/industries/construction" },
      ]} />

      <FinalCTASection
        headline="Ready to Reach the Best Construction Clients in Charleston?"
        subtitle="The homeowners and developers planning major construction projects are searching Google right now. Fill out the form and we'll show you what it takes to get in front of them first."
      />
    </Layout>
  );
}
