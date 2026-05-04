import { Helmet } from "react-helmet-async";
import {
  ArrowRight, MousePointerClick, Check, TrendingUp,
  Wind, Clock, Phone, Target, DollarSign, BarChart3,
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

const adFeatures = [
  {
    icon: Wind,
    title: "Storm-Surge Campaign Activation",
    desc: "We pre-build storm-damage ad groups with ready-to-activate budgets. When a named storm makes landfall near Charleston, campaigns go live within hours — not days after your competitors have already captured the surge.",
  },
  {
    icon: Phone,
    title: "Call-Only Ads for Emergency Intent",
    desc: "\"Emergency roof repair\" and \"storm damage roof\" searches happen on mobile — homeowners want to call, not fill out a form. Call-only ads put your phone number directly in the search result.",
  },
  {
    icon: Target,
    title: "Tri-County Geo-Targeting",
    desc: "Your ads show in Charleston, Berkeley, and Dorchester Counties — and can be dialed down to zip code level. No wasted spend on searches outside your service area.",
  },
  {
    icon: DollarSign,
    title: "Insurance Claim Campaign Targeting",
    desc: "\"Insurance claim roof repair\" and \"roofing company that works with insurance\" are high-intent, lower-competition keywords. We build dedicated campaigns that capture homeowners navigating the claims process.",
  },
  {
    icon: BarChart3,
    title: "Seasonal Budget Scaling",
    desc: "Storm season runs June through November. We scale budgets heading into peak months and pull back strategically in winter — maximizing your return without burning budget when search volume is low.",
  },
  {
    icon: TrendingUp,
    title: "Competitor Conquest Campaigns",
    desc: "Homeowners searching for large roofing franchises are ready to spend. Conquest campaigns put your name in front of high-intent buyers who don't have a strong brand preference yet.",
  },
];

const marketStats = [
  { stat: "3–5×", label: "Search volume increase for roofing terms in the 72 hours after a storm event" },
  { stat: "$800–$2,000", label: "Typical value of a single residential roofing estimate in Charleston" },
  { stat: "72 hrs", label: "The critical window after a storm — contractors with live campaigns capture it; others miss it entirely" },
  { stat: "6 mo.", label: "Hurricane season — the window where paid visibility compounds with organic rankings" },
];

const faqs = [
  {
    q: "How fast can Google Ads go live for a Charleston roofing company?",
    a: "A new campaign can go live in 3–5 business days. For storm-surge campaigns, we prefer to have infrastructure built before the season starts — so when a storm event happens, we're activating existing campaigns rather than building from scratch. That 72-hour post-storm window is where the majority of emergency roofing searches happen.",
  },
  {
    q: "What does a roofing Google Ads campaign cost in Charleston?",
    a: "Most roofing campaigns in this market start at $1,500–$2,500/month in ad spend plus management. Storm-surge periods may call for temporary budget increases. Given that a single signed roofing job can run $10,000–$25,000, the ROI math works even at modest conversion rates.",
  },
  {
    q: "Should I run Google Ads year-round or just during storm season?",
    a: "Year-round, but with seasonal scaling. The off-season is where you capture roof replacement searches, insurance claim work, and homeowners doing planned upgrades. Pausing entirely in winter means you lose visibility and your Quality Scores decline — costing more when you restart. We keep a base campaign live and scale aggressively for storm season.",
  },
  {
    q: "How do you handle the surge of contractors after a major storm?",
    a: "Most out-of-state contractors don't have established Google Ads accounts in the Charleston market — they either can't advertise or pay premium CPCs for low Quality Scores. A well-maintained local campaign with historical data outperforms brand-new accounts significantly. Being the established local advertiser is a structural advantage.",
  },
];

export default function CharlestonRoofingGoogleAds() {
  return (
    <Layout>
      <Helmet>
        <title>Google Ads for Roofing Contractors in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Storm-ready Google Ads campaigns for roofing contractors in Charleston, SC. Call-only ads, storm-surge activation, and tri-county geo-targeting built for the Lowcountry roofing market."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/roofing/google-ads/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Google Ads management for roofing contractors in Charleston, SC."
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
              { label: "Roofing", href: "/locations/south-carolina/charleston/roofing" },
              { label: "Google Ads" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Roofing Google Ads</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Google Ads for Roofing Contractors in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              The 72 hours after a storm hits Charleston are worth more roofing jobs than the previous 3 months combined. Storm-ready campaigns are live before the weather clears — and you're capturing calls while competitors are still scrambling.
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

      <LocalSpokeAnswers city="Charleston" state="South Carolina" industry="roofing" service="google-ads" />

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            The Storm-Season Economics of Roofing Ads in Charleston
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Every time a named storm tracks near the coast, roofing searches spike. Contractors with live campaigns capture the surge. Contractors without them watch the phones go to someone else.
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
            What's in Our Roofing Ad Campaigns
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12">
            Built for the Lowcountry's weather patterns and roofing market dynamics — not a generic contractor template.
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">Storm-Ready Before the Season Starts</h2>
          <p className="text-white/60 text-lg leading-relaxed mb-10">
            The roofers who dominate in Charleston don't build storm campaigns after the storm. They have campaigns in place, tested, and ready to scale — so when the weather turns, they're capturing leads within hours.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {[
              "Storm-surge ad groups pre-built and ready to activate",
              "Call tracking on every campaign so you know what's working",
              "Negative keyword lists to eliminate non-service-area waste",
              "Monthly budget optimization tied to seasonal search volume",
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Roofing Google Ads Questions</h2>
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
        { name: "Charleston Roofing Marketing", to: "/locations/south-carolina/charleston/roofing" },
        { name: "Charleston Roofing SEO", to: "/locations/south-carolina/charleston/roofing/seo" },
        { name: "Houston Roofing Google Ads", to: "/locations/texas/houston/roofing/google-ads" },
        { name: "Roofing Industry Page", to: "/industries/roofing" },
      ]} />

      <FinalCTASection
        headline="Don't Miss the Next Storm Surge"
        subtitle="Every storm that hits Charleston is worth thousands in roofing jobs. Let's make sure your campaigns are live before the next one. Fill out the form and we'll show you what it takes to capture storm-season demand."
      />
    </Layout>
  );
}
