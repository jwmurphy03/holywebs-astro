import { Helmet } from "react-helmet-async";
import {
  ArrowRight, Star, Check, TrendingUp,
  Building2, MapPin, Camera, MessageSquare, Shield, FileText,
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

const optimizationChecklist = [
  { icon: Shield, title: "Primary Category: General Contractor", desc: "The primary category is your strongest GBP ranking signal. 'General Contractor' beats 'Construction Company' for the highest-volume searches. Custom home builders and renovation specialists may need different primaries — we assess your specific situation." },
  { icon: Building2, title: "Service Menu by Project Type", desc: "Custom home building, home additions, renovations, commercial build-outs, historic restoration — each listed as a distinct service. Google uses service data to match your profile to specific search intent." },
  { icon: MapPin, title: "Full Tri-County Service Area", desc: "Your service area should include Charleston, Berkeley, and Dorchester Counties plus key cities — not just your office zip code. Most contractors are losing map pack visibility in communities they actively serve because this is misconfigured." },
  { icon: Camera, title: "Project Portfolio Photos", desc: "Completed project photos — especially with location context ('Daniel Island custom home,' 'West Ashley addition') — are GBP ranking signals and the most powerful trust builders for construction prospects evaluating you." },
  { icon: MessageSquare, title: "Review Generation System", desc: "Construction clients who are happy almost never leave reviews unprompted. We build a post-project follow-up sequence that turns satisfied clients into reviews — consistently, month over month." },
  { icon: FileText, title: "Credentials Prominently Listed", desc: "SC contractor's license number, insurance carrier, bonding status, and any specialty certifications visible in your GBP description. Construction clients vet harder than any other category — this data builds trust before they ever visit your site." },
  { icon: TrendingUp, title: "GBP Posts Featuring Completed Work", desc: "Regular posts featuring recent projects — with the neighborhood and project type mentioned — signal active business and local relevance to Google. Most construction GBPs have no posts at all." },
  { icon: Star, title: "Detailed Review Response Protocol", desc: "Construction clients read reviews carefully and pay attention to how contractors respond. We craft responses that reinforce your professionalism and address any concerns that appear in negative reviews." },
];

const marketStats = [
  { stat: "42%", label: "Of all local clicks go to the top 3 map pack results — GBP optimization determines whether you're in them" },
  { stat: "91%", label: "Of buyers say contractor reviews influence their decision to contact or pass" },
  { stat: "3×", label: "More inquiries from a fully optimized GBP vs. a basic listing in the same construction market" },
  { stat: "73", label: "Verified Google reviews for Holy Webs — built using the same system we use for clients" },
];

const faqs = [
  {
    q: "Do construction companies really get leads from Google Maps?",
    a: "More than most contractors expect. The map pack appears for searches like 'general contractor Charleston' and 'custom home builder near me' — and it captures the same 42% click share it does for any local search. Commercial clients doing vendor research, homeowners planning additions, and investors looking for local contractors all use the map pack as a first filter. Contractors not in the top 3 are invisible to a large portion of their potential market.",
  },
  {
    q: "How important are photos for a construction company's GBP?",
    a: "Critical — and more so than for most industries. Construction is a visual proof business. Clients are making $100K+ decisions and they want to see your work. GBP profiles with multiple project photos get significantly more views and contact actions than profiles with generic office or logo images. Neighborhood-specific photos (a completed home on Daniel Island, a renovation on the Peninsula) also improve local relevance signals.",
  },
  {
    q: "How do we get more Google reviews from construction clients?",
    a: "With a systematic follow-up process, not just asking in person. Construction clients are busy and happy clients rarely remember to leave reviews. We set up a post-project sequence — typically 1–2 weeks after substantial completion — that asks satisfied clients for a review with a direct link. Timing and simplicity are everything. The contractors with the most reviews have a process, not just good relationships.",
  },
  {
    q: "Should we have multiple GBP profiles for different project types?",
    a: "Generally no — one well-optimized profile is stronger than multiple thin profiles. The exception is if you have genuinely separate businesses with separate branding, locations, and client bases. For most general contractors, the right approach is one profile with a comprehensive service menu and project portfolio that communicates the full range of your capabilities.",
  },
];

export default function CharlestonConstructionGbp() {
  return (
    <Layout>
      <Helmet>
        <title>Google Business Profile for Contractors in Charleston, SC | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="GBP optimization for general contractors and construction companies in Charleston, SC. Get into the top 3 of Google Maps for construction, renovation, and custom home searches across the Lowcountry."
        />
        <link rel="canonical" href="https://holywebs.com/locations/south-carolina/charleston/construction/google-business-profile/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <FAQSchema faqs={faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description="Google Business Profile optimization for construction contractors in Charleston, SC."
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
              { label: "Construction", href: "/locations/south-carolina/charleston/construction" },
              { label: "Google Business Profile" },
            ]} />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Charleston, SC — Construction GBP Optimization</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Google Business Profile for Contractors in&nbsp;Charleston
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              Construction clients use the map pack to find and vet contractors before they ever visit a website. We optimize every GBP signal that determines whether your construction company shows up — and whether prospects trust what they see.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">Get a Free Consultation</a>
              <a href="/resources/free-visibility-audit" className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium">
                See where you rank <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocalSpokeAnswers city="Charleston" state="South Carolina" industry="construction" service="google-business-profile" />

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Why GBP Matters for Construction in Charleston
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            The map pack isn't just for emergency services — it's where homeowners and developers go to shortlist contractors for major projects. If you're not in the top 3, you're not in the conversation.
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

      <SectionWrapper variant="dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
            The Charleston Construction GBP Checklist
          </h2>
          <p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-12">
            Most construction GBP profiles are missing multiple items from this list. Every gap is a ranking disadvantage — and a missed inquiry.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {optimizationChecklist.map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">Construction GBP Questions</h2>
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
        { name: "Houston Construction GBP", to: "/locations/texas/houston/construction/google-business-profile" },
        { name: "Construction Industry Page", to: "/industries/construction" },
      ]} />

      <FinalCTASection
        headline="Ready to Show Up When Charleston Clients Are Looking for a Contractor?"
        subtitle="Most construction GBP profiles in this market are incomplete. Fill out the form and we'll show you what's missing from yours — and what it'll take to rank in the map pack."
      />
    </Layout>
  );
}
