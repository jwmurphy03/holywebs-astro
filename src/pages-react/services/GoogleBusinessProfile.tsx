import { Helmet } from "react-helmet-async";
import { Check, ArrowRight, MapPin, Star, Search, Image, MessageSquare, Clock, BarChart3, Phone, Globe, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import ServicesSocialProof from "@/components/ServicesSocialProof";
import WhereWeServe from "@/components/WhereWeServe";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSchema from "@/components/FAQSchema";
import RelatedLinks from "@/components/RelatedLinks";

const relatedLinks = [
  { title: "SEO", description: "Your GBP and website SEO work hand in hand. We optimize both for maximum local visibility.", href: "/services/seo" },
  { title: "Web Design", description: "A strong GBP needs a strong website behind it. See how we build sites that back up your profile.", href: "/services/web-design" },
  { title: "AEO", description: "AI search pulls from your GBP data. We structure it so you show up in AI-powered results too.", href: "/services/aeo" },
  { title: "Plumbing", description: "Plumbers live and die by their Google Business Profile. See how we optimize theirs.", href: "/industries/plumbing" },
  { title: "CPA & Bookkeeping", description: "Professional service firms need a polished GBP presence. Here is our approach.", href: "/industries/cpa-bookkeeping" },
  { title: "Electrical", description: "Electricians depend on map pack visibility. See how GBP optimization helps them rank.", href: "/industries/electrical" },
];

const features = [
  {
    icon: MapPin,
    title: "Full Profile Optimization",
    desc: "We optimize every field — business name, categories, attributes, service areas, and description — so Google has everything it needs to rank you in the map pack.",
  },
  {
    icon: Star,
    title: "Review Generation Strategy",
    desc: "Reviews are the #1 trust signal for local buyers. We help you build a system that generates consistent, authentic 5-star reviews from your happiest customers.",
  },
  {
    icon: Image,
    title: "Photo & Media Strategy",
    desc: "Profiles with photos get 42% more direction requests and 35% more website clicks. We add and organize high-quality images that showcase your work and build trust.",
  },
  {
    icon: MessageSquare,
    title: "Posts & Updates",
    desc: "Regular Google Posts keep your profile active, signal relevance to Google, and give potential customers another reason to choose you over the competition.",
  },
  {
    icon: Search,
    title: "Local Keyword Targeting",
    desc: "We research the exact terms your customers search — 'plumber near me,' 'roofer in Houston' — and weave them naturally throughout your profile for maximum visibility.",
  },
  {
    icon: Shield,
    title: "Listing Protection & Monitoring",
    desc: "Competitors and bad actors can suggest edits to your listing. We monitor your profile for unauthorized changes and keep your information accurate and protected.",
  },
];

const stats = [
  { value: "46%", label: "of all Google searches are local" },
  { value: "76%", label: "of people who search nearby visit within a day" },
  { value: "28%", label: "of local searches result in a purchase" },
  { value: "5x", label: "more views with an optimized profile" },
];

const process = [
  {
    step: "01",
    title: "Audit Your Current Profile",
    desc: "We review your existing Google Business Profile (or create one if you don't have it) and identify every gap and missed opportunity — from categories and attributes to photos and reviews.",
  },
  {
    step: "02",
    title: "Optimize Everything",
    desc: "We rewrite your description, select the right categories, add services, upload optimized photos, set up messaging, and configure every setting for maximum visibility.",
  },
  {
    step: "03",
    title: "Build Reviews & Content",
    desc: "We implement a review generation system and start publishing regular Google Posts to keep your profile active, relevant, and ahead of competitors who are doing nothing.",
  },
  {
    step: "04",
    title: "Monitor & Improve",
    desc: "We track your profile's performance — views, searches, calls, direction requests — and continuously refine your strategy based on real data, not guesswork.",
  },
];

const faqs = [
  {
    q: "What is Google Business Profile optimization?",
    a: "Google Business Profile (formerly Google My Business) optimization is the process of setting up, verifying, and continually improving your business listing on Google so it ranks higher in local search results and the map pack — the top 3 local results that appear when someone searches for a service in your area.",
  },
  {
    q: "How long does it take to see results?",
    a: "Most businesses start seeing noticeable improvements in profile views and engagement within 4–8 weeks. Ranking improvements in the map pack depend on competition, but consistent optimization typically delivers measurable results within 2–3 months.",
  },
  {
    q: "Do I need a physical location to have a Google Business Profile?",
    a: "No. If you're a service-area business (like a plumber, electrician, or landscaper), you can set up a profile without displaying a physical address. We'll configure your service areas so you show up where your customers are searching.",
  },
  {
    q: "Can't I just do this myself?",
    a: "You can fill in the basics, but most business owners miss critical optimization opportunities — the right categories, strategic keyword placement, review systems, regular posting, and ongoing monitoring. That's where the difference between showing up on page one and being invisible comes in.",
  },
  {
    q: "How do reviews affect my Google ranking?",
    a: "Reviews are one of Google's top local ranking factors. The quantity, quality, recency, and velocity of your reviews all impact where you show up. A profile with 50+ recent, high-quality reviews will almost always outrank one with 10 old ones.",
  },
  {
    q: "What if I have multiple locations?",
    a: "We can optimize profiles for each location individually. Each one gets its own strategy, photos, posts, and review approach tailored to that specific market and service area.",
  },
  {
    q: "Is this a one-time thing or ongoing?",
    a: "Initial optimization is a project, but the real results come from ongoing management — regular posts, review generation, photo updates, and performance monitoring. Google rewards profiles that stay active and relevant.",
  },
];

export default function GoogleBusinessProfile() {
  return (
    <Layout>
      <Helmet>
        <title>Google Business Profile Optimization for Local Service Businesses | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Optimize your Google Business Profile to dominate local search. Get more reviews, better Map Pack rankings, and increased visibility for your service business." />
        <link rel="canonical" href="https://holywebs.com/services/google-business-profile/" />
        <meta property="og:image" content="https://holywebs.com/og/og-google-business-profile.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Google Business Profile Optimization",
            description: "Optimize your Google Business Profile to dominate local search. Get more reviews, better Map Pack rankings, and increased visibility for your service business.",
            provider: { "@type": "LocalBusiness", name: "Holy Webs", url: "https://holywebs.com" },
            areaServed: [{ "@type": "State", name: "Texas" }, { "@type": "State", name: "South Carolina" }]
          })}
        </script>
      </Helmet>
      <FAQSchema faqs={faqs} />
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0F1729]" />
        <div className="absolute inset-0 bg-[url('/grain.svg')] opacity-[0.12] mix-blend-overlay" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Google Business Profile" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Google Business Profile Management</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Own Your Local Market on Google
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            When someone in your area searches for what you do, your Google Business Profile is often the first thing they see. If it's incomplete, outdated, or buried behind your competitors — you're losing customers every single day.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary text-lg">
              Get a Free Profile Audit
            </Link>
            <Link
              to="/resources/free-visibility-audit"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
            >
              Or start with a visibility audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl md:text-5xl font-extrabold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/70 text-sm font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Your Google Profile Is Your New Front Door
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Think about the last time you needed a plumber, a dentist, or a restaurant. You probably pulled out your phone, searched, and chose from the top results with the best reviews. Your customers do the exact same thing.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            If your Google Business Profile is incomplete, has outdated hours, no photos, or a handful of old reviews — potential customers scroll right past you. Worse, they call your competitor who took the time to get their profile right.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The map pack — those top 3 local results — gets <span className="text-foreground font-semibold">over 40% of all clicks</span> in a local search. If you're not there, you're invisible to the people who are ready to buy right now.
          </p>
        </div>
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What's Included in Our GBP Management
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          We don't just "claim and verify" your profile. We build it into a lead-generating machine.
        </p>
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

      {/* Map Pack Explainer */}
      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
                What Is the Google Map Pack — and Why Does It Matter?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                The map pack is the block of 3 local business listings that appears at the top of Google when someone searches with local intent — like "HVAC repair near me" or "best roofer in Charleston."
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                These results get the most clicks, the most calls, and the most foot traffic. Landing in the map pack is one of the single most impactful things you can do for your local business — and your Google Business Profile is the key to getting there.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Globe, text: "Appears above organic search results" },
                { icon: Phone, text: "Includes click-to-call and directions" },
                { icon: Star, text: "Displays your reviews and rating" },
                { icon: Clock, text: "Shows hours, photos, and recent activity" },
                { icon: BarChart3, text: "Gets 42%+ of all local search clicks" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4 bg-muted/50 rounded-lg p-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper variant="dark">
        <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
          Our Process
        </h2>
        <p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-14">
          A clear, proven system for turning your Google profile into a lead engine.
        </p>
        <div className="max-w-3xl mx-auto space-y-8">
          {process.map((p) => (
            <div key={p.step} className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center">
                <span className="text-primary font-extrabold text-lg">{p.step}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-foreground mb-2">{p.title}</h3>
                <p className="text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Us */}
      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-10">
            Why Local Businesses Trust Holy Webs With Their Google Profile
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "We treat your profile like a living, breathing marketing asset",
              "You get a dedicated strategist — not a call center",
              "We pair GBP optimization with SEO for compounding results",
              "Transparent reporting so you see exactly what's happening",
              "We've helped 200+ local businesses improve their visibility",
              "Ongoing management — not a one-time setup you forget about",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-background rounded-lg p-4 border border-border">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
          Frequently Asked Questions
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

      <RelatedLinks heading="Explore Related Services & Industries" links={relatedLinks} />
      <WhereWeServe serviceName="Google Business Profile" />
      <ServicesSocialProof />
      <FinalCTASection headline="Stop Losing Jobs to Competitors With Worse Service" subtitle="You do better work — let's make sure your online presence reflects that. Fill out the form and we'll show you exactly where you're losing leads." />
    </Layout>
  );
}
