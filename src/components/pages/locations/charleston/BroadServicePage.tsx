import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  BarChart3,
  Check,
  FileText,
  Globe,
  MapPin,
  MousePointerClick,
  Search,
  Share2,
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

type CharlestonService = "seo" | "web-design" | "digital-marketing" | "social-media";

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
  oldUrls: string[];
  stats: Array<{ value: string; label: string }>;
  answers: Array<{ question: string; answer: string }>;
  features: Feature[];
  marketCopy: string[];
  faqs: Array<{ q: string; a: string }>;
  finalHeadline: string;
  finalSubtitle: string;
}

const charlestonWaterfront = "/assets/charleston-waterfront.jpg";

const configs: Record<CharlestonService, PageConfig> = {
  seo: {
    slug: "/locations/south-carolina/charleston/seo",
    eyebrow: "Charleston SEO",
    title: "Charleston SEO Services",
    metaTitle: "Charleston SEO Services for Local Businesses | Holy Webs",
    metaDescription:
      "Local SEO for Charleston, SC service businesses. Google Maps optimization, service-area content, and search strategy built for the Lowcountry.",
    h1: "Charleston SEO for Local Service Businesses",
    intro:
      "Charleston businesses do not need generic SEO. They need a local search strategy that understands Mount Pleasant, Summerville, West Ashley, James Island, North Charleston, and the way people actually choose service companies in the Lowcountry.",
    primaryCta: "Get a Free SEO Audit",
    oldUrls: ["/charleston-seo-company/", "/search-engine-optimization-charleston-sc/"],
    stats: [
      { value: "31K+", label: "3-month impressions on the legacy Charleston SEO page before migration planning" },
      { value: "Top 3", label: "The map pack positions that matter most for local service calls" },
      { value: "6-9 mo.", label: "A realistic window for meaningful SEO traction in a competitive local market" },
      { value: "Tri-county", label: "Charleston, Berkeley, and Dorchester counties require distinct local signals" },
    ],
    answers: [
      {
        question: "What does Charleston SEO need to do first?",
        answer:
          "It needs to clarify what you do, where you do it, and why your business is relevant in the Lowcountry. That means Google Business Profile work, location-aware service pages, reviews, internal links, and technical cleanup.",
      },
      {
        question: "Why not redirect the old Charleston SEO page to a generic SEO page?",
        answer:
          "Because the old page has Charleston-specific search equity. A broad local SEO page is useful, but this page gives those rankings a more relevant destination and protects the local intent.",
      },
      {
        question: "Which businesses benefit most?",
        answer:
          "Contractors, home service companies, professional services, and local businesses that depend on customers searching in Charleston, Mount Pleasant, Summerville, West Ashley, and nearby communities.",
      },
      {
        question: "Does this support AI search too?",
        answer:
          "Yes. Clear answers, structured data, local context, and strong internal links help both Google and answer engines understand when Holy Webs is relevant for Charleston marketing questions.",
      },
    ],
    features: [
      {
        icon: MapPin,
        title: "Map Pack Strategy",
        desc: "We optimize the signals that influence Google Maps visibility: services, categories, reviews, photos, citations, proximity, and website relevance.",
      },
      {
        icon: FileText,
        title: "Charleston Service Pages",
        desc: "We build content around the services and communities that matter most, instead of repeating the city name on thin pages.",
      },
      {
        icon: Star,
        title: "Review Growth",
        desc: "Recent, specific reviews help customers trust you and help Google understand the work you do across the Lowcountry.",
      },
      {
        icon: BarChart3,
        title: "Plain-English Reporting",
        desc: "You see rankings, calls, form fills, GBP actions, and the next moves without having to decode a confusing report.",
      },
    ],
    marketCopy: [
      "Charleston search is not one market. A homeowner in Mount Pleasant searches differently than a family in Summerville or a business owner downtown. SEO has to respect that geography.",
      "The old Charleston site earned visibility for SEO terms because it spoke directly to this market. As we migrate that equity into HolyWebs.com, the goal is to preserve local relevance while improving the depth, structure, and conversion path.",
      "This page is built to become the main destination for Charleston SEO demand, while the industry-specific pages handle more focused searches for HVAC, plumbing, roofing, and construction companies.",
    ],
    faqs: [
      {
        q: "How long does SEO take for a Charleston business?",
        a: "Most businesses should expect 3 to 6 months for early movement and 6 to 9 months for stronger traction. Competitive Charleston SEO terms take time, especially when map pack visibility and organic rankings both matter.",
      },
      {
        q: "Will this page replace the old holywebscharleston.com SEO pages?",
        a: "Yes, but only when the migration is ready. The old Charleston SEO URLs should be redirected here after this page is live, indexed, internally linked, and validated.",
      },
      {
        q: "Do you only work with contractors?",
        a: "Contractors and service businesses are the core focus, but the same local SEO foundation can help many Charleston businesses that depend on local customers.",
      },
    ],
    finalHeadline: "Ready to Protect and Grow Your Charleston Search Visibility?",
    finalSubtitle:
      "Charleston customers are already searching. We will show you where you stand now, what is holding you back, and what to fix first.",
  },
  "web-design": {
    slug: "/locations/south-carolina/charleston/web-design",
    eyebrow: "Charleston Web Design",
    title: "Charleston Web Design Services",
    metaTitle: "Charleston Web Design for Local Service Businesses | Holy Webs",
    metaDescription:
      "Website design for Charleston, SC service businesses. Fast, local, conversion-focused websites built for trust, calls, and Google visibility.",
    h1: "Charleston Web Design That Turns Local Visitors Into Calls",
    intro:
      "Your website is often the first real conversation a Charleston customer has with your business. It needs to load fast, look trustworthy, explain what you do, and make the next step obvious.",
    primaryCta: "Plan a Better Website",
    oldUrls: ["/charleston-web-design-company/", "/web-design-charleston-sc/"],
    stats: [
      { value: "20K+", label: "3-month impressions across the legacy Charleston web design pages" },
      { value: "Mobile first", label: "Most local service searches happen on a phone, often with urgency" },
      { value: "Trust", label: "The main thing a service-business website has to earn before someone calls" },
      { value: "Local proof", label: "Neighborhoods, reviews, photos, and work examples matter in Charleston" },
    ],
    answers: [
      {
        question: "What makes a good Charleston service-business website?",
        answer:
          "It should quickly explain who you help, what you do, where you work, why people trust you, and how to contact you. Pretty is not enough. The site has to help people make a decision.",
      },
      {
        question: "Why does this page need to exist before migration?",
        answer:
          "The old Charleston web design URLs have search equity. Redirecting them to a specific Charleston web design page is safer than sending that traffic to a generic service page.",
      },
      {
        question: "What should be on the page?",
        answer:
          "Clear service sections, city and neighborhood context, proof, FAQs, calls to action, schema, and internal links to SEO, Google Ads, GBP, and industry pages.",
      },
      {
        question: "Can a better website help SEO?",
        answer:
          "Yes. A faster, clearer, better-structured website helps Google crawl the site and helps visitors turn into leads once they arrive.",
      },
    ],
    features: [
      {
        icon: Globe,
        title: "Conversion-First Design",
        desc: "We design around the actions that matter: calls, quote requests, booked consultations, and clear paths to your highest-value services.",
      },
      {
        icon: Search,
        title: "Built for Local SEO",
        desc: "The site structure, headings, internal links, and schema are built with Charleston search visibility in mind from day one.",
      },
      {
        icon: Users,
        title: "Trust Signals",
        desc: "Reviews, service-area proof, photos, process, and plain language help customers feel confident before they call.",
      },
      {
        icon: MousePointerClick,
        title: "Fast Mobile Experience",
        desc: "Charleston customers are often searching from their phone. The site has to be fast, easy to scan, and simple to contact.",
      },
    ],
    marketCopy: [
      "Charleston buyers compare more than price. They look for trust, local proof, responsiveness, reviews, and signs that you understand the work they need.",
      "A website for a Mount Pleasant remodeler should not feel the same as a site for a Summerville HVAC company or a James Island plumber. The bones can be consistent, but the message needs to fit the customer.",
      "This page gives the legacy Charleston web design URLs a clean destination on HolyWebs.com and supports the broader local SEO strategy.",
    ],
    faqs: [
      {
        q: "How long does a Charleston business website take to build?",
        a: "Most service-business websites take a few weeks once the content, structure, and goals are clear. Larger sites or migration projects can take longer because redirects, SEO, and content mapping need careful handling.",
      },
      {
        q: "Should the old web design pages redirect here?",
        a: "Yes. After this page is live and checked, the old web design URLs on holywebscharleston.com should redirect here because the search intent matches closely.",
      },
      {
        q: "Do you write the website copy too?",
        a: "Yes. The copy needs to sound human, explain the offer clearly, and support search intent without feeling stuffed or generic.",
      },
    ],
    finalHeadline: "Need a Charleston Website That Actually Helps People Choose You?",
    finalSubtitle:
      "We build clean, local, conversion-focused websites for service businesses that want more than a brochure online.",
  },
  "digital-marketing": {
    slug: "/locations/south-carolina/charleston/digital-marketing",
    eyebrow: "Charleston Digital Marketing",
    title: "Charleston Digital Marketing Services",
    metaTitle: "Charleston Digital Marketing Agency for Service Businesses | Holy Webs",
    metaDescription:
      "Digital marketing for Charleston, SC service businesses. SEO, web design, Google Ads, GBP optimization, and local strategy for the Lowcountry.",
    h1: "Digital Marketing for Charleston Service Businesses",
    intro:
      "Charleston is where Holy Webs started, and this page is the new home for the broad Charleston marketing demand that used to live on the Charleston-only domain.",
    primaryCta: "Build Your Charleston Plan",
    oldUrls: ["/charleston-digital-marketing-agency/"],
    stats: [
      { value: "5.6K+", label: "3-month impressions on the legacy Charleston digital marketing agency page" },
      { value: "4 parts", label: "SEO, website, GBP, and paid search usually need to work together" },
      { value: "Local first", label: "Charleston businesses need local proof, not generic agency language" },
      { value: "Measured", label: "Calls, forms, rankings, and booked jobs matter more than vanity metrics" },
    ],
    answers: [
      {
        question: "What does digital marketing include for Charleston businesses?",
        answer:
          "The main pieces are local SEO, web design, Google Business Profile optimization, Google Ads, content, reviews, and internal links that help people and search engines understand your business.",
      },
      {
        question: "Why not send this traffic to the homepage?",
        answer:
          "The homepage is broad. The old Charleston digital marketing page earned local visibility, so the safer destination is a Charleston-specific marketing page with stronger local context.",
      },
      {
        question: "What should a business fix first?",
        answer:
          "Start with the channel closest to revenue. For some businesses that is the website. For others it is Google Maps, reviews, or paid search. The audit tells us where the leak is.",
      },
      {
        question: "How does this connect to the industry pages?",
        answer:
          "This page handles broad Charleston marketing intent. The HVAC, plumbing, roofing, and construction hubs handle trade-specific search intent.",
      },
    ],
    features: [
      {
        icon: Search,
        title: "Local SEO",
        desc: "We help Charleston businesses show up when local customers search for their services.",
      },
      {
        icon: Globe,
        title: "Web Design",
        desc: "We build websites that explain the offer clearly and turn traffic into calls and quote requests.",
      },
      {
        icon: MapPin,
        title: "Google Business Profile",
        desc: "We strengthen the local signals that support map pack visibility and customer trust.",
      },
      {
        icon: MousePointerClick,
        title: "Google Ads",
        desc: "We use paid search when the business needs faster lead flow or wants to test a new market.",
      },
    ],
    marketCopy: [
      "The Lowcountry has a mix of long-time local companies, fast-growing suburbs, tourism demand, storm season, and new residents who do not already have a go-to provider.",
      "That means the right marketing plan has to meet people in different stages: emergency searches, research-heavy service comparisons, neighborhood recommendations, and AI-assisted answers.",
      "The goal is not to do every marketing tactic. The goal is to build the pieces that help a Charleston business get found, trusted, and chosen.",
    ],
    faqs: [
      {
        q: "What is the best digital marketing channel for a Charleston service business?",
        a: "It depends on the business. SEO and GBP are usually the best long-term foundation. Google Ads can help faster when calls are needed now. A strong website supports both.",
      },
      {
        q: "Will this replace the old Charleston digital marketing agency page?",
        a: "Yes. This is the best destination for that legacy page once the migration is ready.",
      },
      {
        q: "Do you work with businesses outside Charleston?",
        a: "Yes. Holy Webs now serves multiple markets, but Charleston is where the company started and remains a key local market.",
      },
    ],
    finalHeadline: "Ready for a Charleston Marketing Plan That Feels Grounded?",
    finalSubtitle:
      "We will help you see what is working, what is missing, and which next move is most likely to create real leads.",
  },
  "social-media": {
    slug: "/locations/south-carolina/charleston/social-media",
    eyebrow: "Charleston Social Media",
    title: "Charleston Social Media Marketing",
    metaTitle: "Charleston Social Media Marketing for Local Businesses | Holy Webs",
    metaDescription:
      "Social media marketing for Charleston, SC local businesses. Content strategy, local trust building, and campaigns that support your broader digital presence.",
    h1: "Charleston Social Media Marketing for Local Businesses",
    intro:
      "Social media will not replace search, but for local Charleston businesses it can build trust, show real work, support referrals, and make the business feel active and approachable.",
    primaryCta: "Talk Through Social Media",
    oldUrls: ["/charleston-social-media-marketing/", "/social-media-charleston-sc/"],
    stats: [
      { value: "10K+", label: "3-month impressions across legacy Charleston social media pages" },
      { value: "Trust", label: "The main job of organic social for most local service businesses" },
      { value: "Local proof", label: "Real work, real people, real places beat generic content every time" },
      { value: "Support", label: "Social works best when it supports SEO, reviews, website trust, and ads" },
    ],
    answers: [
      {
        question: "Does social media help Charleston businesses get leads?",
        answer:
          "It can, but usually as part of a broader system. Social helps people trust the business, remember the name, and see recent work. Search and ads often capture the direct intent.",
      },
      {
        question: "Why build a Charleston social media page?",
        answer:
          "The old Charleston social pages have search visibility. This gives them a local destination on HolyWebs.com instead of sending everything to a generic service page.",
      },
      {
        question: "What should local social content show?",
        answer:
          "Your team, your work, customer questions, seasonal reminders, local projects, reviews, and the kind of proof that makes someone feel safer reaching out.",
      },
      {
        question: "Should every business post daily?",
        answer:
          "No. Consistency matters, but useful and realistic beats constant filler. A steady plan that fits the business is better than a burst of content that dies in three weeks.",
      },
    ],
    features: [
      {
        icon: Share2,
        title: "Content Strategy",
        desc: "We plan posts around the questions, projects, seasons, and trust signals that matter to your customers.",
      },
      {
        icon: Users,
        title: "Local Brand Trust",
        desc: "Charleston customers want to know who they are hiring. Social gives them a more human look at the business.",
      },
      {
        icon: Star,
        title: "Review and Proof Content",
        desc: "We turn testimonials, job photos, and customer wins into content that supports your reputation.",
      },
      {
        icon: BarChart3,
        title: "Simple Reporting",
        desc: "You get a clear read on what was posted, what people engaged with, and what should happen next.",
      },
    ],
    marketCopy: [
      "Charleston is a relationship-heavy market. People ask neighbors, check reviews, look at recent work, and pay attention to whether a business feels present and trustworthy.",
      "That is where social media can help. It should not be a random pile of holiday graphics and vague tips. It should show the business doing real work for real people in real places.",
      "This page gives the legacy social media URLs a clear home while the broader service page remains available for businesses outside Charleston.",
    ],
    faqs: [
      {
        q: "Is social media enough by itself?",
        a: "Usually not. Social media is strongest when it supports the website, SEO, reviews, paid ads, and referral trust.",
      },
      {
        q: "Will old Charleston social media URLs redirect here?",
        a: "That is the safest plan once this page is live and validated because the intent is a close match.",
      },
      {
        q: "Do you create the posts?",
        a: "Yes. The plan can include content ideas, writing, scheduling, and repurposing real photos, reviews, and project proof.",
      },
    ],
    finalHeadline: "Want Social Media That Actually Supports the Business?",
    finalSubtitle:
      "We will help you build a realistic content system that makes your Charleston business easier to trust and remember.",
  },
};

const relatedLinks = [
  {
    title: "Charleston Digital Marketing",
    description: "Start with the broad Charleston strategy and see how SEO, web design, GBP, and ads fit together.",
    href: "/locations/south-carolina/charleston/digital-marketing",
  },
  {
    title: "Charleston SEO",
    description: "Build visibility in Google Maps and organic search across the Lowcountry.",
    href: "/locations/south-carolina/charleston/seo",
  },
  {
    title: "Charleston Web Design",
    description: "Create a site that builds trust, explains your offer, and turns local visitors into leads.",
    href: "/locations/south-carolina/charleston/web-design",
  },
  {
    title: "Charleston HVAC Marketing",
    description: "See how we approach search, ads, GBP, and websites for HVAC companies in the Lowcountry.",
    href: "/locations/south-carolina/charleston/hvac",
  },
  {
    title: "Charleston Roofing Marketing",
    description: "Storm season and roof replacement searches need a focused local marketing plan.",
    href: "/locations/south-carolina/charleston/roofing",
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

export default function CharlestonBroadServicePage({ service }: { service: CharlestonService }) {
  const page = configs[service];

  return (
    <Layout>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={`https://holywebs.com${page.slug}/`} />
        <meta property="og:type" content="website" />
      </Helmet>
      <FAQSchema faqs={page.faqs} />
      <LocalBusinessSchema
        city="Charleston"
        state="South Carolina"
        description={page.metaDescription}
        areaServed={["Charleston", "Mount Pleasant", "Summerville", "North Charleston", "West Ashley", "James Island"]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={charlestonWaterfront}
            alt="Charleston South Carolina waterfront"
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
                { label: page.title },
              ]}
            />
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">{page.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              {page.h1}
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              {page.intro}
            </p>
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
        eyebrow="Migration-Safe Local Answers"
        heading={`${page.title}, answered plainly`}
        intro="These pages are being built as careful destination pages for the Charleston site migration. They need to help customers first and preserve search intent second."
        variant="muted"
        items={page.answers}
      />

      <SectionWrapper variant="light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Why This Page Matters for the Charleston Migration
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            The old Charleston site has real search equity. Before any redirect happens, the new destination page has to match the intent, improve the content, and fit the larger Holy Webs structure.
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
              Built for Charleston, Not Just Moved From Another Domain
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

      <SectionWrapper variant="light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            Legacy URLs This Page Can Protect
          </h2>
          <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-10">
            These are the Charleston-domain URLs this page is designed to receive when the migration is ready.
          </p>
          <div className="space-y-3">
            {page.oldUrls.map((url) => (
              <div key={url} className="flex items-start gap-3 bg-muted rounded-xl p-4 border border-border">
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-medium">holywebscharleston.com{url}</span>
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
        heading="Explore More Charleston Marketing Pages"
        subheading="These internal links help visitors and search engines understand how the Charleston cluster fits together."
        links={filteredRelatedLinks(page.slug)}
      />

      <NearbyMarkets
        heading="South Carolina Markets We Serve"
        markets={[
          { name: "Charleston", to: "/locations/south-carolina/charleston" },
          { name: "Greenville", to: "/locations/south-carolina/greenville" },
          { name: "Columbia", to: "/locations/south-carolina/columbia" },
          { name: "Houston", to: "/locations/texas/houston" },
        ]}
      />

      <FinalCTASection headline={page.finalHeadline} subtitle={page.finalSubtitle} />
    </Layout>
  );
}
