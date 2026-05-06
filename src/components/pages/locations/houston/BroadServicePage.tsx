import {
  ArrowRight,
  BarChart3,
  FileText,
  Globe,
  MapPin,
  MousePointerClick,
  Search,
  Star,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSchema from "@/components/FAQSchema";
import AnswerSummary from "@/components/AnswerSummary";
import RelatedLinks from "@/components/RelatedLinks";
import NearbyMarkets from "@/components/NearbyMarkets";

type HoustonService = "seo" | "web-design" | "google-ads" | "google-business-profile";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface PageConfig {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  primaryCta: string;
  stats: Array<{ value: string; label: string }>;
  answers: Array<{ question: string; answer: string }>;
  features: Feature[];
  marketCopy: string[];
  faqs: Array<{ q: string; a: string }>;
  finalHeadline: string;
  finalSubtitle: string;
}

const houstonSkyline = "/assets/houston-skyline.jpg";

const configs: Record<HoustonService, PageConfig> = {
  seo: {
    slug: "/locations/texas/houston/seo",
    eyebrow: "Houston SEO",
    title: "Houston SEO Services",
    metaTitle: "Houston SEO Services for Local Service Businesses | Holy Webs",
    metaDescription:
      "Local SEO for Houston service businesses. Google Maps optimization, service-area pages, reviews, and organic search strategy for the Greater Houston market.",
    h1: "Houston SEO for Service Businesses That Need More Calls",
    intro:
      "Houston SEO has to be more specific than city plus service. A business serving Katy, The Heights, Sugar Land, Cypress, Pearland, and The Woodlands needs a search strategy that understands how spread out and competitive this metro really is.",
    primaryCta: "Get a Free SEO Audit",
    stats: [
      { value: "7M+", label: "People across Greater Houston searching in hundreds of local pockets" },
      { value: "Map pack", label: "The local results that drive urgent service calls and quote requests" },
      { value: "Service areas", label: "Houston SEO works better when your actual coverage is clear" },
      { value: "Compounding", label: "Organic visibility gets stronger when pages, reviews, and GBP work together" },
    ],
    answers: [
      {
        question: "What should Houston SEO fix first?",
        answer:
          "Start with the basics that affect calls: Google Business Profile accuracy, review quality, core service pages, service-area clarity, technical crawl issues, and whether the site actually explains why someone should choose you.",
      },
      {
        question: "Why is Houston SEO harder than smaller markets?",
        answer:
          "Houston is not one search market. A customer in Katy is not comparing the same companies as someone in Midtown or Pearland. The strategy has to account for proximity, suburbs, competition, and the services that matter most.",
      },
      {
        question: "Which businesses benefit most?",
        answer:
          "Home service companies, contractors, professional services, and local businesses that depend on calls from specific neighborhoods or suburbs across Greater Houston.",
      },
      {
        question: "Does SEO support AI search too?",
        answer:
          "Yes. Clear answers, local proof, structured pages, and strong service context help both Google and answer engines understand when your business is relevant.",
      },
    ],
    features: [
      {
        icon: MapPin,
        title: "Google Maps Strategy",
        desc: "We improve the profile, website signals, reviews, categories, services, and local relevance that influence map pack visibility.",
      },
      {
        icon: FileText,
        title: "Service-Area Content",
        desc: "We build pages around the services and communities that actually drive revenue, without thin city-name swaps.",
      },
      {
        icon: Star,
        title: "Review and Trust Signals",
        desc: "Specific reviews, project proof, and local details help customers trust you before they call.",
      },
      {
        icon: BarChart3,
        title: "Plain-English Reporting",
        desc: "You see rankings, calls, form fills, profile actions, and the next move without having to decode a messy dashboard.",
      },
    ],
    marketCopy: [
      "Houston gives service businesses a huge opportunity, but the size of the market can hide weak strategy. You can rank in one part of town and be invisible 15 miles away.",
      "That is why Houston SEO needs a clear map of your actual service area, your most profitable jobs, your strongest proof, and the neighborhoods where you can realistically win.",
      "The broad SEO plan should connect to trade-specific pages for HVAC, plumbing, roofing, construction, and other service businesses, so each page has a real purpose.",
    ],
    faqs: [
      {
        q: "How long does SEO take in Houston?",
        a: "Most businesses should expect early movement in 3 to 6 months and stronger traction in 6 to 12 months. Competitive Houston terms take patience because map results, organic rankings, reviews, and website authority all matter.",
      },
      {
        q: "Do I need separate pages for Houston suburbs?",
        a: "Sometimes. If suburbs like Katy, Sugar Land, Cypress, Pearland, or The Woodlands are important to your business, the site should make that clear with useful local context and service proof.",
      },
      {
        q: "Can SEO help with Google Maps?",
        a: "Yes. The website, Google Business Profile, reviews, categories, photos, citations, and local content all influence how strong your business looks in map results.",
      },
    ],
    finalHeadline: "Want to Know Why Your Houston SEO Is Not Turning Into Calls?",
    finalSubtitle:
      "We will show you where visibility is leaking, which pages need work, and what should happen first.",
  },
  "web-design": {
    slug: "/locations/texas/houston/web-design",
    eyebrow: "Houston Web Design",
    title: "Houston Web Design Services",
    metaTitle: "Houston Web Design for Local Service Businesses | Holy Webs",
    metaDescription:
      "Website design for Houston service businesses. Fast, trustworthy, conversion-focused websites built for calls, quotes, and local search visibility.",
    h1: "Houston Web Design That Helps Local Customers Choose You",
    intro:
      "Your website has a hard job in Houston. It has to earn trust quickly, explain what you do, show where you work, and make it easy for a busy customer to call, book, or request a quote.",
    primaryCta: "Plan a Better Website",
    stats: [
      { value: "Mobile first", label: "Many Houston service searches happen from a phone in a hurry" },
      { value: "Trust", label: "The site has to make people feel safe contacting you" },
      { value: "Speed", label: "Slow pages lose good leads before the offer is even read" },
      { value: "Proof", label: "Photos, reviews, neighborhoods, and project details matter" },
    ],
    answers: [
      {
        question: "What makes a good Houston service-business website?",
        answer:
          "It should explain who you help, what you do, where you work, why customers trust you, and what to do next. Design matters, but clarity and conversion matter more.",
      },
      {
        question: "Can a website improve local SEO?",
        answer:
          "Yes. A clean structure, fast pages, helpful copy, clear service areas, and strong internal paths help search engines understand the business and help visitors become leads.",
      },
      {
        question: "What should the homepage do?",
        answer:
          "The homepage should orient people quickly. It should not carry the whole SEO strategy by itself. Service pages, city pages, and trade-specific pages should each answer more specific questions.",
      },
      {
        question: "Do you write the copy too?",
        answer:
          "Yes. The copy should sound human, explain the offer plainly, and support search without feeling stuffed or generic.",
      },
    ],
    features: [
      {
        icon: Globe,
        title: "Conversion-First Design",
        desc: "We design around calls, quote requests, booked consultations, and clear paths to your highest-value services.",
      },
      {
        icon: Search,
        title: "Built for Local Search",
        desc: "The page structure, headings, service sections, and related pages are planned with Houston search visibility in mind.",
      },
      {
        icon: Users,
        title: "Trust Signals",
        desc: "Reviews, service-area proof, job photos, process, and clear language help customers feel more confident.",
      },
      {
        icon: MousePointerClick,
        title: "Fast Mobile Experience",
        desc: "Houston customers are often comparing options on their phones. The site needs to be fast, easy to scan, and simple to contact.",
      },
    ],
    marketCopy: [
      "Houston customers compare quickly. They look at reviews, photos, service areas, response time, and whether the business feels professional enough to trust.",
      "A site for an AC company in Katy should not say the same thing as a site for a remodeler in The Heights or a plumber in Pearland. The structure can be consistent, but the message should fit the customer.",
      "A strong website also makes every other marketing channel work harder. SEO, Google Ads, Google Business Profile, reviews, and referral traffic all perform better when the website is clear.",
    ],
    faqs: [
      {
        q: "How long does a Houston business website take to build?",
        a: "Most service-business websites take a few weeks once the structure, content, goals, and proof are clear. Larger sites take longer when there are more services, areas, photos, and page types.",
      },
      {
        q: "Can you redesign my current site?",
        a: "Yes. A redesign makes sense when the current site is slow, unclear, outdated, hard to edit, or not turning visitors into calls.",
      },
      {
        q: "Should my website have separate service pages?",
        a: "Usually, yes. Service pages help customers find the exact thing they need and help search engines understand what your business should rank for.",
      },
    ],
    finalHeadline: "Need a Houston Website That Pulls Its Weight?",
    finalSubtitle:
      "We build clear, fast, local websites that help people understand your business and take the next step.",
  },
  "google-ads": {
    slug: "/locations/texas/houston/google-ads",
    eyebrow: "Houston Google Ads",
    title: "Houston Google Ads Management",
    metaTitle: "Houston Google Ads Management for Service Businesses | Holy Webs",
    metaDescription:
      "Google Ads management for Houston service businesses. Search campaigns built around high-intent local searches, service areas, calls, and booked jobs.",
    h1: "Houston Google Ads for Service Businesses That Need Better Leads",
    intro:
      "Google Ads can work extremely well in Houston, but only when the campaigns are focused. Broad targeting, weak landing pages, and loose keywords can burn through budget fast in a market this competitive.",
    primaryCta: "Review My Ad Account",
    stats: [
      { value: "High intent", label: "Search ads capture people already looking for help" },
      { value: "Local control", label: "Budgets should follow service areas, job value, and capacity" },
      { value: "Fast feedback", label: "Ads show quickly where the offer, page, or targeting is weak" },
      { value: "Measured", label: "Calls, forms, booked jobs, and cost per lead matter most" },
    ],
    answers: [
      {
        question: "When should a Houston business use Google Ads?",
        answer:
          "Use ads when you need lead flow sooner, want to test a new service, or need visibility while SEO is still building. Ads work best when the website and tracking are already solid.",
      },
      {
        question: "Why do Houston ad campaigns waste money?",
        answer:
          "Usually because the targeting is too broad, keywords are too loose, calls are not tracked correctly, landing pages are weak, or the campaign is trying to cover the whole metro with one generic message.",
      },
      {
        question: "Should ads go to the homepage?",
        answer:
          "Sometimes, but usually a focused landing page or service page performs better. The page should match the search and make the next step obvious.",
      },
      {
        question: "Can Google Ads support SEO?",
        answer:
          "Yes. Ads can bring calls now while SEO compounds. The data can also show which services, suburbs, and messages deserve more organic content.",
      },
    ],
    features: [
      {
        icon: MousePointerClick,
        title: "Search Campaigns",
        desc: "We build campaigns around high-intent searches instead of vague traffic that never turns into jobs.",
      },
      {
        icon: MapPin,
        title: "Service-Area Targeting",
        desc: "Houston budgets need geographic discipline. Katy, Cypress, Pearland, and The Woodlands should not always be treated the same.",
      },
      {
        icon: Globe,
        title: "Landing Page Alignment",
        desc: "The ad, keyword, and page need to match. Otherwise the click gets expensive and the lead quality drops.",
      },
      {
        icon: BarChart3,
        title: "Lead Quality Reporting",
        desc: "We care about real calls, form fills, booked jobs, and wasted spend, not just clicks.",
      },
    ],
    marketCopy: [
      "Houston paid search is competitive because the upside is real. A single good job can justify the spend for many service businesses, but bad campaign structure can waste money quickly.",
      "The right Google Ads plan starts with your most profitable services, the areas you actually want to serve, your capacity, and the kinds of leads you do not want.",
      "Ads should not live in a separate box from the rest of the marketing. The best campaigns feed what we learn back into SEO, website copy, service pages, and local positioning.",
    ],
    faqs: [
      {
        q: "How much should a Houston service business spend on Google Ads?",
        a: "It depends on the service, competition, and job value. The right starting budget should be large enough to collect useful data without spreading thin across too many services or areas.",
      },
      {
        q: "Can you audit my current Google Ads account?",
        a: "Yes. We look for wasted spend, keyword issues, tracking gaps, weak landing pages, poor location targeting, and campaigns that are getting clicks without enough real leads.",
      },
      {
        q: "Do Google Ads work for contractors?",
        a: "Yes, when the campaigns are focused on the right services, the right areas, and the landing pages are built to convert. Generic contractor ads usually struggle.",
      },
    ],
    finalHeadline: "Want to Know Where Your Houston Ad Budget Is Leaking?",
    finalSubtitle:
      "We will review the campaign structure, targeting, landing pages, and lead quality so you know what to fix first.",
  },
  "google-business-profile": {
    slug: "/locations/texas/houston/google-business-profile",
    eyebrow: "Houston Google Business Profile",
    title: "Houston Google Business Profile Optimization",
    metaTitle: "Houston Google Business Profile Optimization | Holy Webs",
    metaDescription:
      "Google Business Profile optimization for Houston service businesses. Improve local map visibility, reviews, categories, services, photos, and profile trust.",
    h1: "Houston Google Business Profile Optimization for Local Visibility",
    intro:
      "For many Houston service businesses, the Google Business Profile is where the first serious decision happens. Customers compare reviews, photos, hours, services, proximity, and whether the business looks active.",
    primaryCta: "Audit My Google Profile",
    stats: [
      { value: "Maps first", label: "Many local customers choose from the map pack before visiting a website" },
      { value: "Reviews", label: "Recent, specific reviews carry more trust than vague five-star ratings" },
      { value: "Categories", label: "The wrong category can quietly limit visibility" },
      { value: "Activity", label: "Photos, services, posts, and updates help the profile feel alive" },
    ],
    answers: [
      {
        question: "What matters most on a Google Business Profile?",
        answer:
          "Categories, services, reviews, photos, business information, proximity, website relevance, and whether the profile clearly matches what customers are searching for.",
      },
      {
        question: "Why is Google Maps so competitive in Houston?",
        answer:
          "There are thousands of local service businesses competing across a huge metro. Proximity matters, but so do relevance, trust, reviews, and how clearly your website supports the profile.",
      },
      {
        question: "Can reviews help rankings?",
        answer:
          "Yes. Reviews help customers choose and help Google understand what services people associate with your business. Specific reviews are much more useful than generic praise.",
      },
      {
        question: "Is GBP enough by itself?",
        answer:
          "Usually not. The profile works best when the website, service pages, reviews, photos, and local content all support the same message.",
      },
    ],
    features: [
      {
        icon: MapPin,
        title: "Profile Cleanup",
        desc: "We check categories, services, hours, service areas, business info, links, and profile completeness.",
      },
      {
        icon: Star,
        title: "Review Strategy",
        desc: "We help you earn more useful reviews and turn customer language into stronger local proof.",
      },
      {
        icon: FileText,
        title: "Service Relevance",
        desc: "The profile and website should reinforce the same services, locations, and proof.",
      },
      {
        icon: BarChart3,
        title: "Local Visibility Tracking",
        desc: "We look at profile actions, calls, direction requests, rankings, and where visibility is weakest.",
      },
    ],
    marketCopy: [
      "Houston map results can change dramatically by neighborhood. A business can look strong near its office and nearly invisible across town.",
      "That does not mean you should stuff a profile with every suburb in the metro. It means the profile, website, reviews, and service-area signals need to tell a consistent story.",
      "For service businesses, GBP optimization is often the fastest way to find practical issues: wrong categories, weak reviews, missing services, poor photos, or a website that does not support the profile.",
    ],
    faqs: [
      {
        q: "Can you guarantee map pack rankings?",
        a: "No one can honestly guarantee map pack rankings. What we can do is improve the signals Google and customers rely on, then track whether visibility, calls, and profile actions improve.",
      },
      {
        q: "Should I list every Houston suburb in my profile?",
        a: "Only if it reflects your real service area. A cleaner, more truthful profile usually performs better than one stuffed with places that do not match the business.",
      },
      {
        q: "How often should I update my Google Business Profile?",
        a: "Keep the basics accurate all the time. Add photos, review responses, service updates, and posts when you have something useful to show.",
      },
    ],
    finalHeadline: "Is Your Google Business Profile Helping or Holding You Back?",
    finalSubtitle:
      "We will review the profile, website, reviews, and local signals so you know what is costing you map visibility.",
  },
};

const relatedLinks = [
  {
    title: "Houston SEO",
    description: "Build organic visibility and map pack relevance across Greater Houston.",
    href: "/locations/texas/houston/seo",
  },
  {
    title: "Houston Web Design",
    description: "Create a fast, clear site that helps local visitors understand and contact you.",
    href: "/locations/texas/houston/web-design",
  },
  {
    title: "Houston Google Ads",
    description: "Use paid search to reach high-intent local customers while SEO compounds.",
    href: "/locations/texas/houston/google-ads",
  },
  {
    title: "Houston Google Business Profile",
    description: "Improve the profile signals that support map visibility and customer trust.",
    href: "/locations/texas/houston/google-business-profile",
  },
  {
    title: "Houston HVAC Marketing",
    description: "See how SEO, ads, GBP, and web design work for HVAC companies in Houston.",
    href: "/locations/texas/houston/hvac",
  },
  {
    title: "Houston Plumbing Marketing",
    description: "Explore marketing strategy for plumbing companies across Greater Houston.",
    href: "/locations/texas/houston/plumbing",
  },
  {
    title: "Local SEO Guide",
    description: "Read the broader guide to local search for contractors and service businesses.",
    href: "/resources/local-seo-guide-service-businesses",
  },
];

function filteredRelatedLinks(currentSlug: string) {
  return relatedLinks.filter((link) => link.href !== currentSlug);
}

export default function HoustonBroadServicePage({ service }: { service: HoustonService }) {
  const page = configs[service];

  return (
    <Layout>
      <FAQSchema faqs={page.faqs} />
      <LocalBusinessSchema
        city="Houston"
        state="Texas"
        description={page.metaDescription}
        areaServed={["Houston", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Cypress", "Spring"]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={houstonSkyline}
            alt="Houston Texas skyline at sunset"
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
                { label: "Texas", href: "/locations/texas" },
                { label: "Houston", href: "/locations/texas/houston" },
                { label: page.title },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">{page.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {page.h1}
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">{page.intro}</p>
            <div className="flex flex-wrap gap-4">
              <a href="/contact" className="btn-primary text-lg">
                {page.primaryCta}
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

      <AnswerSummary
        eyebrow="Houston Local Answers"
        heading={`${page.title}, answered plainly`}
        intro="If you run a service business in Houston, the practical question is where the next good lead should come from and what has to be fixed first."
        variant="muted"
        items={page.answers}
      />

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Why Houston Needs a More Specific Local Strategy
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Houston is too large for vague marketing. The right plan should reflect your real service area, strongest jobs, available capacity, local proof, and the neighborhoods where customers are already searching.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-background rounded-xl border border-border">
                <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
              Built Around How Houston Customers Search
            </h2>
            {page.marketCopy.map((copy) => (
              <p key={copy} className="text-muted-foreground text-lg leading-relaxed mb-6">
                {copy}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            {page.features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-12">
          Questions About {page.title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {page.faqs.map((faq) => (
            <div key={faq.q} className="bg-background rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <RelatedLinks
        heading="Explore More Houston Marketing Pages"
        subheading="Find the next page that matches what you are trying to improve, from broad service strategy to trade-specific marketing."
        links={filteredRelatedLinks(page.slug)}
      />

      <NearbyMarkets
        heading="Texas Markets We Serve"
        markets={[
          { name: "Houston", to: "/locations/texas/houston" },
          { name: "Waco", to: "/locations/texas/waco" },
          { name: "Dallas", to: "/locations/texas/dallas" },
          { name: "Austin", to: "/locations/texas/austin" },
        ]}
      />

      <FinalCTASection headline={page.finalHeadline} subtitle={page.finalSubtitle} />
    </Layout>
  );
}
