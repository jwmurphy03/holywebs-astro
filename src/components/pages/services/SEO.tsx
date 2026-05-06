import { Helmet } from "react-helmet-async";
import { Check, ArrowRight, MapPin, Search, TrendingUp, FileText, Star, BarChart3, Code, Gauge, Globe, Link2, X } from "lucide-react";

import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import ServicesSocialProof from "@/components/ServicesSocialProof";
import WhereWeServe from "@/components/WhereWeServe";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSchema from "@/components/FAQSchema";
import RelatedLinks from "@/components/RelatedLinks";
import AnswerSummary from "@/components/AnswerSummary";
import ServiceOfferAlignment from "@/components/ServiceOfferAlignment";

const relatedLinks = [
  {
    title: "Web Design",
    description: "A fast, professional website is the foundation of every SEO strategy. See how we build sites that convert.",
    href: "/services/web-design",
  },
  {
    title: "Google Ads",
    description: "Pair organic SEO with paid search to dominate page one while your rankings build momentum.",
    href: "/services/google-ads",
  },
  {
    title: "AI Search Optimization",
    description: "AI search is changing the game. Learn how we optimize your content for ChatGPT, AI Overviews, and voice search.",
    href: "/services/aeo",
  },
  {
    title: "Plumbing",
    description: "See how our local SEO strategies help plumbers book more jobs in their service area.",
    href: "/industries/plumbing",
  },
  {
    title: "HVAC",
    description: "HVAC companies rely on local search to fill their schedule. Here's how we make that happen.",
    href: "/industries/hvac",
  },
  {
    title: "Roofing",
    description: "Storm season drives search volume. We help roofers capture that demand with targeted SEO.",
    href: "/industries/roofing",
  },
];

const features = [
  {
    icon: MapPin,
    title: "Local SEO & Google Business Profile",
    desc: "We optimize your Google Business Profile, build local citations, and make sure you show up in the map pack when customers in your area are searching for what you do.",
  },
  {
    icon: Search,
    title: "Keyword Strategy That Targets Buyers",
    desc: "We don't chase vanity keywords. We target the search terms your ideal customers are actually using, the ones that lead to phone calls and booked jobs.",
  },
  {
    icon: FileText,
    title: "On-Page Optimization",
    desc: "Title tags, meta descriptions, heading structure, internal linking, schema markup, we handle all the technical details that tell Google exactly what your pages are about.",
  },
  {
    icon: TrendingUp,
    title: "AI Search Optimization",
    desc: "AI-powered search is here. We structure your content to show up in AI overviews, featured snippets, and voice search results, not just traditional rankings.",
  },
  {
    icon: Star,
    title: "Reputation & Review Strategy",
    desc: "Reviews are a ranking factor and a trust signal. We help you build a system that generates consistent, authentic reviews from happy customers.",
  },
  {
    icon: BarChart3,
    title: "Monthly Reporting You Can Actually Read",
    desc: "No jargon-filled PDFs. You get clear, honest reports that show what's working, what we're doing next, and how it's impacting your bottom line.",
  },
];

const stats = [
  { value: "93%", label: "of online experiences start with search" },
  { value: "75%", label: "of users never scroll past page one" },
  { value: "14.6%", label: "close rate for SEO leads (vs 1.7% outbound)" },
  { value: "12x", label: "ROI on average for local SEO" },
];

const technicalItems = [
  { icon: Gauge, title: "Site Speed Optimization", desc: "Slow sites lose rankings and customers. We optimize load times, compress images, and eliminate render-blocking code so Google and users get a fast experience." },
  { icon: Code, title: "Clean, Crawlable Code", desc: "We ensure your site's HTML is semantic, your URLs are structured, and your robots.txt and sitemap are configured so Google can crawl and index every important page." },
  { icon: Globe, title: "Schema Markup & Structured Data", desc: "We add JSON-LD structured data, LocalBusiness, FAQ, Service, Review, so Google understands your content and can display rich results that get more clicks." },
  { icon: Link2, title: "Internal Linking Architecture", desc: "A strong internal linking structure helps Google discover your pages, understand their hierarchy, and distribute authority throughout your site." },
];

const comparison = [
  { topic: "Strategy", them: "Generic playbook for every client", us: "Custom strategy built for your market and competition" },
  { topic: "Communication", them: "Talk to a sales rep or account manager", us: "Talk directly to the person doing the work" },
  { topic: "Reporting", them: "Vanity metrics in a confusing PDF", us: "Clear monthly reports tied to real business results" },
  { topic: "Focus", them: "National or e-commerce SEO", us: "Local SEO for service businesses, it's all we do" },
  { topic: "AI Search", them: "Ignoring it or 'planning to address it'", us: "AI search ready from day one, optimizing for AI overviews now" },
  { topic: "Contracts", them: "12-month lock-in contracts", us: "Month-to-month, we earn your business every month" },
];

const process = [
  {
    step: "01",
    title: "Audit & Research",
    desc: "We dig into your current online presence, your competitors, and your market. We find the gaps and the opportunities, then build a plan around them.",
  },
  {
    step: "02",
    title: "Optimize & Build",
    desc: "We optimize your site, your Google Business Profile, and your content. We build the foundation that Google needs to trust and rank your business.",
  },
  {
    step: "03",
    title: "Create & Earn",
    desc: "We create targeted content, build local citations, earn quality backlinks, and implement review strategies that compound your authority over time.",
  },
  {
    step: "04",
    title: "Track & Improve",
    desc: "SEO isn't set-it-and-forget-it. We monitor rankings, analyze traffic, and continuously refine your strategy to keep you moving up.",
  },
];

const faqs = [
  {
    q: "How long does SEO take to see results?",
    a: "Honest answer: plan for 6–9 months before you see real traction. You may notice early movement before that, but meaningful results take time to build. SEO compounds, the longer you're in, the stronger your position gets. We always recommend a full year commitment to see the full return.",
  },
  {
    q: "What's the difference between SEO and Google Ads?",
    a: "Google Ads puts you at the top of the page instantly, but you pay for every click. SEO earns you organic visibility that doesn't cost per click. The best strategy usually combines both.",
  },
  {
    q: "What is AI Search and why does it matter?",
    a: "AI Search Optimization, sometimes called AEO or GEO, is the work of making your content easier for AI tools to understand and cite. With AI tools like ChatGPT and Google's AI Overviews changing how people search, your content needs to be structured to show up in those results, not just traditional search listings.",
  },
  {
    q: "Do I need a new website to do SEO?",
    a: "Not always. We'll audit what you have and let you know if your current site can support a strong SEO strategy or if there are foundational issues that need to be addressed first.",
  },
  {
    q: "What's included in your monthly SEO service?",
    a: "Everything: keyword research, on-page optimization, content creation, local citation building, Google Business Profile management, review strategy, technical SEO audits, and monthly performance reporting.",
  },
  {
    q: "How do you report on progress?",
    a: "You get monthly reports that cover keyword rankings, traffic, Google Business Profile performance, and what we're working on next. Plain language, no fluff.",
  },
  {
    q: "Do you lock clients into long-term contracts?",
    a: "No. We work on a month-to-month basis. We keep clients because we deliver results, not because of a contract.",
  },
  {
    q: "Can you guarantee first page rankings?",
    a: "Anyone who guarantees rankings is either lying or using tactics that will get you penalized. What we can guarantee is a proven process, transparent communication, and a relentless focus on improving your visibility month over month.",
  },
];

const answerSummary = [
  {
    question: "What does local SEO do for a service business?",
    answer: "Local SEO helps your business appear when nearby customers search for services you provide. For contractors, that usually means stronger Google Maps visibility, better organic rankings, more calls, and more booked jobs from people already looking for help.",
  },
  {
    question: "What should a contractor prioritize first?",
    answer: "Start with Google Business Profile optimization, technical website cleanup, location-and-service pages, review generation, and clear internal links between your core services, industries, and markets. Those pieces give Google and AI answer engines the strongest foundation.",
  },
  {
    question: "How is Holy Webs different from a generic SEO agency?",
    answer: "Holy Webs focuses on local service businesses, especially contractors and home service companies in Texas and South Carolina. The strategy is built around calls, booked estimates, Google Maps visibility, and service-area demand instead of generic national rankings.",
  },
  {
    question: "Does SEO still matter with AI search?",
    answer: "Yes. AI search depends on crawlable, trusted, well-structured sources. Strong SEO gives answer engines the content, schema, reviews, and authority signals they need to understand and recommend your business.",
  },
];

export default function SEO() {
  return (
    <Layout>
      <Helmet>
        <title>Local SEO Services for Local Service Businesses | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Dominate Google Maps and local search results with SEO strategies built for contractors. Rank higher, get more calls, and grow your service business organically." />
        <link rel="canonical" href="https://holywebs.com/services/seo/" />
        <meta property="og:image" content="https://holywebs.com/og/og-seo.jpg" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Local SEO",
            description: "Dominate Google Maps and local search results with SEO strategies built for contractors. Rank higher, get more calls, and grow your service business organically.",
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
          <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "SEO" }]} />
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">SEO Services</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Get Found by the Customers Already Looking for You
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Your competitors are showing up on Google. You should be too. We build SEO strategies for local businesses that drive real visibility, real traffic, and real leads, not just rankings on a report.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/contact" className="btn-primary text-lg">
              Get a Free SEO Audit
            </a>
            <a
              href="/resources/free-visibility-audit"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary transition-colors font-medium"
            >
              Or start with a free visibility audit
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <SectionWrapper variant="muted">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-background rounded-xl border border-border">
              <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <AnswerSummary
        heading="Local SEO for Contractors, in Plain English"
        intro="These are the direct answers searchers, AI tools, and business owners need before they decide what to do next."
        items={answerSummary}
        variant="light"
      />

      {/* Problem Section */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            If You're Not on Page One, You Don't Exist
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Here's the reality: 75% of users never scroll past the first page of Google. If your business isn't ranking for the services you offer in your area, you're handing customers to your competitors, every single day.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            And it's getting harder. Google's algorithm changes constantly. AI-powered search is reshaping how people find answers. The businesses that adapt now will dominate for years. The ones that wait will spend twice as much trying to catch up.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            The worst part? Most local businesses have been burned by an agency that promised rankings, sent confusing reports, and delivered nothing. That's not how we operate.
          </p>
          <p className="text-foreground text-lg leading-relaxed font-semibold">
            We build SEO strategies that are honest, transparent, and laser-focused on one thing: getting your phone to ring more.
          </p>
        </div>
      </SectionWrapper>

      {/* What You Get */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          What's Included in Our SEO Services
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          A full-stack local SEO strategy built around your business, your market, and your goals.
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

      {/* Technical SEO Breakdown */}
      <SectionWrapper variant="dark">
        <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground text-center mb-4">
          What's Under the Hood
        </h2>
        <p className="text-white/60 text-lg text-center max-w-2xl mx-auto mb-14">
          Great SEO isn't just content and keywords, it's the technical foundation that makes everything work.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {technicalItems.map((item) => (
            <div key={item.title} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-primary/40 transition-colors">
              <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark-foreground mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Them vs Us Comparison */}
      <SectionWrapper variant="light">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Not All SEO Is Created Equal
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          Here's how we stack up against the typical agency experience.
        </p>
        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-3 bg-muted/50 p-4 border-b border-border">
            <span className="text-sm font-bold text-foreground"></span>
            <span className="text-sm font-bold text-muted-foreground text-center">Typical Agency</span>
            <span className="text-sm font-bold text-primary text-center">Holy Webs</span>
          </div>
          {comparison.map((row, i) => (
            <div key={row.topic} className={`grid grid-cols-3 p-4 items-center ${i < comparison.length - 1 ? "border-b border-border" : ""}`}>
              <span className="text-sm font-semibold text-foreground">{row.topic}</span>
              <div className="flex items-start gap-2 justify-center text-center">
                <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-xs leading-relaxed">{row.them}</span>
              </div>
              <div className="flex items-start gap-2 justify-center text-center">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-xs font-medium leading-relaxed">{row.us}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
          Our Process
        </h2>
        <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-14">
          No smoke and mirrors. Here's exactly how we approach SEO.
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

      {/* Why Us Differentiators */}
      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-10">
            Why Local Businesses Trust Holy Webs With SEO
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "We specialize in local SEO, not national or e-commerce",
              "Strategies built around your market, not a cookie-cutter playbook",
              "AI search ready, we optimize for AI search and traditional rankings",
              "Transparent reporting with no vanity metrics",
              "Month-to-month, no long-term contracts",
              "You talk to the person doing the work, not a sales rep",
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
      <SectionWrapper variant="muted">
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

      <RelatedLinks
        heading="Explore Related Services &amp; Industries"
        links={relatedLinks}
      />
      <ServiceOfferAlignment
        serviceName="SEO"
        headline="SEO Is Included in Every Growth Plan"
        intro="SEO is not sold as a disconnected task list. It works because the website, Google Business Profile, content, citations, tracking, and monthly improvement are moving in the same direction."
        recommendedPlan="Local Growth, Local Authority, and Market Leader"
        points={[
          "Local Growth includes the one-market SEO foundation.",
          "Local Authority adds more content and citation velocity.",
          "Market Leader adds the highest SEO output before paid ads are layered in.",
        ]}
      />
      <WhereWeServe serviceName="SEO" />
      <ServicesSocialProof />
      <FinalCTASection headline="Stop Losing Jobs to Competitors With Worse Service" subtitle="You do better work, let's make sure your online presence reflects that. Fill out the form and we'll show you exactly where you're losing leads." />
    </Layout>
  );
}
