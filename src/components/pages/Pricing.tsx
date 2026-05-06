import {
  ArrowRight,
  BarChart3,
  Check,
  Globe,
  HelpCircle,
  Search,
  Star,
  Target,
  X,
} from "lucide-react";

import SectionWrapper from "@/components/SectionWrapper";
import FinalCTASection from "@/components/home/FinalCTASection";
import RelatedLinks from "@/components/RelatedLinks";

const plans = [
  {
    name: "Local Growth",
    price: "$1,997",
    cadence: "/mo",
    eyebrow: "For one-market local service businesses",
    description:
      "A complete website and local visibility foundation for businesses that need to own their home market.",
    cta: "Talk About Local Growth",
    href: "#pricing-call",
    highlighted: false,
    bestFor: [
      "Single-city contractors and service businesses",
      "Companies that need the website, GBP, and SEO basics handled correctly",
      "Owners who want consistent local SEO without paid ads yet",
    ],
    includes: [
      "Custom website build included",
      "Hosting, maintenance, and reasonable website edits",
      "Onsite SEO and technical SEO foundation",
      "Google Business Profile management",
      "GBP posting and optimization",
      "50 citation submissions",
      "1 new content page per month",
      "Local SEO strategy and routine audits",
      "Internal linking and content silo planning",
      "Call/form tracking and monthly reporting",
    ],
  },
  {
    name: "Local Authority",
    price: "$2,997",
    cadence: "/mo",
    eyebrow: "Best fit for serious local SEO growth",
    description:
      "A stronger organic growth plan for businesses that want to expand into nearby cities without adding paid ads.",
    cta: "Talk About Local Authority",
    href: "#pricing-call",
    highlighted: true,
    bestFor: [
      "Businesses targeting a radius around their main city",
      "Companies that need more content and citation velocity",
      "Owners who want a bigger SEO push before adding ad spend",
    ],
    includes: [
      "Everything in Local Growth",
      "Expanded local SEO strategy",
      "100 citation submissions",
      "2 new content pages per month",
      "More service-area and location page expansion",
      "Ongoing GBP management and posting",
      "Conversion rate optimization evaluation",
      "AI search optimization for answer-based discovery",
      "Monthly reporting with deeper visibility review",
    ],
  },
  {
    name: "Market Leader",
    price: "$4,997",
    cadence: "/mo",
    eyebrow: "For aggressive growth and larger service areas",
    description:
      "A higher-output growth plan for businesses ready to expand across more services, cities, and paid traffic channels.",
    note: "Ad spend is not included. We recommend a minimum ad budget of $1,500/mo paid directly to Google or Meta.",
    cta: "Talk About Market Leader",
    href: "#pricing-call",
    highlighted: false,
    bestFor: [
      "Established businesses ready to win more of the market",
      "Multi-city, regional, or high-ticket service companies",
      "Teams that want SEO plus managed Google or Facebook ads",
    ],
    includes: [
      "Everything in Local Authority",
      "High-output regional SEO strategy",
      "150 citation submissions",
      "3 new content pages per month",
      "Expanded service-area and authority content",
      "Paid search or paid social strategy",
      "Google Ads or Facebook Ads management",
      "Campaign landing pages",
      "Advanced tracking and conversion improvements",
      "Priority support and higher-touch strategy",
      "Budget, offer, and lead-quality review",
      "Monthly reporting with deeper market review",
    ],
  },
];

const foundations = [
  {
    icon: Globe,
    title: "Website Included",
    text: "We build and maintain the site as part of the monthly plan, so the foundation and growth work stay connected.",
  },
  {
    icon: Search,
    title: "SEO Built In",
    text: "Every plan includes an SEO-ready website foundation. Ongoing local SEO starts with Local Growth.",
  },
  {
    icon: Star,
    title: "GBP Matters",
    text: "Your Google Business Profile is part of the system, not an afterthought or separate one-time setup.",
  },
  {
    icon: BarChart3,
    title: "Measured Monthly",
    text: "Calls, forms, rankings, map visibility, and next steps are reviewed in plain English.",
  },
];

const faqs = [
  {
    q: "Is ad spend included in Market Leader?",
    a: "No. Market Leader includes Google Ads or Facebook Ads management, landing pages, tracking, and optimization. Your ad spend is paid directly to the platform and set based on your market and goals.",
  },
  {
    q: "What is the difference between Local Growth and Local Authority?",
    a: "Local Growth is built for one-market visibility. Local Authority adds more monthly content, more citation work, and a stronger SEO push for businesses that want to expand into nearby service areas without adding paid ads yet.",
  },
  {
    q: "Can I just buy a website?",
    a: "Sometimes, but that is not the main Holy Webs offer. We are built around recurring growth plans because local visibility requires a strong site, SEO, Google Business Profile work, tracking, and ongoing improvement.",
  },
  {
    q: "What happens if I already have a website?",
    a: "We will audit it first. If the site can support the strategy, we may improve it instead of rebuilding. If it is holding you back, we will recommend a rebuild inside the plan.",
  },
  {
    q: "Do you require a contract?",
    a: "The website is a real build, so each plan starts with an initial agreement. After that, we want to keep your business by doing useful work every month, not by hiding behind confusing terms.",
  },
];

const fitChecks = [
  {
    title: "You only want a website handoff",
    text: "These plans are built around ongoing visibility. If you only need a brochure site delivered once and left alone, this is probably more than you need.",
  },
  {
    title: "You are shopping for the lowest monthly bill",
    text: "We care about ROI, but we are not trying to be the cheapest vendor in the stack. The plan needs to make sense against booked work, not just line-item cost.",
  },
  {
    title: "You want guaranteed rankings",
    text: "No honest SEO partner can promise exact rankings. We can promise a clear process, consistent execution, tracking, and plain communication about what is moving.",
  },
  {
    title: "You cannot handle more lead flow yet",
    text: "If calls go unanswered, forms sit for days, or estimates are not followed up, more visibility will not fix the real bottleneck.",
  },
  {
    title: "You need results this week without ads",
    text: "SEO and local visibility compound over time. If immediate lead flow is the priority, Market Leader with paid ads may be the better fit.",
  },
  {
    title: "You are not ready to be involved",
    text: "We do the heavy lifting, but we still need your input on services, markets, photos, reviews, offers, and what a good lead actually looks like.",
  },
];

const goodFit = [
  "You are an established local service business with real revenue behind each booked job",
  "You want one accountable team for website, SEO, GBP, tracking, and monthly improvements",
  "You understand that local visibility is built over months, not flipped on overnight",
  "You are willing to answer calls, follow up quickly, and help us understand lead quality",
];

export default function Pricing() {
  return (
    <>
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0F1729]" />
        <div className="absolute inset-0 bg-[url('/grain.svg')] opacity-[0.12] mix-blend-overlay" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-5xl">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Pricing</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight max-w-4xl">
            Clear Monthly Plans for Local Businesses That Want to Get Found
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            A focused monthly growth plan for local businesses that need stronger search visibility, a sharper web presence, better Google Business Profile performance, and clear tracking. Everything works together without a random menu of disconnected services.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/70">
            {["Website included", "Local SEO included", "GBP included", "Ad management available"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2">
                <Check className="h-4 w-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper variant="light" className="py-16 lg:py-24 border-b border-border/70">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Three Plans. One Clear Direction.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Most local businesses do not need a pile of separate services. They need the right foundation, consistent visibility work, and a team responsible for making the system better every month.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg border p-6 md:p-8 flex min-h-full flex-col ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-[0_18px_45px_-28px_hsl(var(--primary))]"
                  : "border-border bg-background shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-6 rounded-md bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                  Recommended
                </div>
              )}
              <div className="mb-7 min-h-[238px] border-b border-border/70 pb-6">
                <p className="text-sm font-semibold text-primary mb-2">{plan.eyebrow}</p>
                <h3 className="text-3xl font-extrabold text-foreground mb-3">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground pb-1">{plan.cadence}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-7 rounded-lg border border-border/80 bg-background/80 p-4 lg:min-h-[196px]">
                <p className="text-sm font-bold text-foreground mb-3">Best for:</p>
                <ul className="space-y-2">
                  {plan.bestFor.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <Target className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8 flex-1">
                <p className="text-sm font-bold text-foreground mb-3">Included:</p>
                <ul className="grid gap-3">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-2">
                {"note" in plan && plan.note && (
                  <p className="mb-4 rounded-md border border-primary/20 bg-primary/5 px-3 py-2 text-sm font-medium leading-relaxed text-foreground/80">
                    {plan.note}
                  </p>
                )}
                <a
                  href={plan.href}
                  className={
                    plan.highlighted
                      ? "btn-primary w-full justify-center"
                      : "inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-foreground/20 px-8 py-4 font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                  }
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </SectionWrapper>

      <SectionWrapper variant="muted" className="border-b border-border/70">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            What You Are Actually Paying For
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            The website is not the finish line. It is the foundation for the local marketing system that keeps improving after launch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto items-stretch">
          {foundations.map((item) => (
            <div key={item.title} className="rounded-lg border border-border bg-background p-5 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <RelatedLinks
        heading="What Each Plan Connects"
        subheading="The plans are not a menu of disconnected services. These pages explain the core pieces that work together inside the monthly growth system."
        links={[
          { title: "Local SEO", description: "The ongoing search work behind Local Growth, Local Authority, and Market Leader.", href: "/services/seo" },
          { title: "Google Business Profile", description: "The map pack and profile work included in every public plan.", href: "/services/google-business-profile" },
          { title: "Web Design", description: "The website foundation that supports SEO, tracking, trust, and conversion.", href: "/services/web-design" },
          { title: "AI Search Optimization", description: "How we structure content for AI Overviews, ChatGPT, Perplexity, and voice search.", href: "/services/aeo" },
          { title: "Google Ads", description: "Paid search management available only inside Market Leader.", href: "/services/google-ads" },
          { title: "Meta Ads", description: "Facebook and Instagram ad management available only inside Market Leader.", href: "/services/meta-ads" },
        ]}
      />

      <SectionWrapper variant="dark" className="border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">The Math Has to Work</p>
          <div className="grid lg:grid-cols-[1fr_0.75fr] gap-10 lg:gap-14 items-end">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark-foreground mb-6 leading-tight">
                This Should Pay for Itself in Booked Work.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                A growth plan only makes sense when the upside is real. For a contractor or local service business, the right comparison is not just another website quote. It is the value of the jobs you are missing when customers cannot find, trust, or choose you online.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                If one or two additional booked jobs per month would not justify the investment, this may not be the right time yet. If visibility is already costing you serious revenue, the math changes quickly.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-white/40 mb-4">A simple gut check</p>
              <div className="space-y-4">
                {[
                  "What is one booked job worth to your business?",
                  "How many good jobs are you losing because competitors show up first?",
                  "Would one or two more jobs per month make this plan make sense?",
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-white/75 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light" className="border-b border-border/70">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Fit</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Who This Is Not For
            </h2>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-background shadow-sm">
            <div className="border-b border-border bg-muted/40 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-5">Probably not a fit if...</p>
              <div className="space-y-5">
                {fitChecks.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-background border border-border">
                      <X className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground leading-tight mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-b border-border bg-primary/5 p-6">
              <p className="text-sm font-bold uppercase tracking-wide text-primary mb-5">A strong fit when...</p>
              <div className="space-y-5">
                {goodFit.map((item) => (
                  <div key={item} className="flex gap-3">
                    <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <p className="text-foreground/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted/30 px-6 py-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Not sure where you land? We would rather tell you “not yet” than sell you a plan before the math or timing makes sense.
                </p>
                <a href="#pricing-call" className="btn-primary justify-center whitespace-nowrap !px-5 !py-3 text-sm">
                  Ask Us Straight
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Questions</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Pricing FAQ
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-lg border border-border bg-background p-5 shadow-sm">
                <div className="flex gap-3">
                  <HelpCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <section id="pricing-call">
        <FinalCTASection
          headline="Want to see which plan fits?"
          subtitle="Tell us where your business is now, what you want to grow, and what has or has not worked before. We will help you decide whether Local Growth, Local Authority, Market Leader, or no plan at all is the honest next step."
        />
      </section>
    </>
  );
}
