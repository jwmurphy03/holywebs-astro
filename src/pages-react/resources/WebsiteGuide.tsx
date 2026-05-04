import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
const heroImg = "/assets/guide-hero-website.jpg";

const tocItems = [
  { id: "why-failing", label: "Why Your Website Is Failing" },
  { id: "anatomy", label: "Anatomy of a High-Converting Site" },
  { id: "purpose-audience", label: "Step 1: Purpose & Audience" },
  { id: "responsive-mobile", label: "Step 2: Responsive & Mobile-First" },
  { id: "design-for-seo", label: "Step 3: Designing for Local SEO" },
  { id: "launch-beyond", label: "Step 4: Launch & Beyond" },
  { id: "conclusion", label: "DIY vs. Hiring an Agency" },
];

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 border-l-4 border-primary pl-6 py-2">
      <p className="text-xl md:text-2xl font-bold text-foreground leading-snug italic">
        {children}
      </p>
    </blockquote>
  );
}

function InlineCTA({ heading, body }: { heading?: string; body?: string }) {
  return (
    <div className="my-12 rounded-xl bg-dark p-8 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-primary blur-[100px]" />
      </div>
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">
          {heading || "Want Us to Handle This for\u00a0You?"}
        </h3>
        <p className="text-white/60 leading-relaxed mb-5 max-w-xl">
          {body || "We design and build high-converting websites for service businesses across Texas and the Southeast. If you'd rather skip the learning curve and get it done right, let's\u00a0talk."}
        </p>
        <Link
          to="/contact"
          className="btn-primary text-sm !px-6 !py-3"
        >
          Let's Talk <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function WebsiteGuide() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>The Ultimate Website Guide for Service Businesses (2026) | Holy Webs</title>
        <meta
          name="description"
          content="Learn how to turn your local service business website into a 24/7 lead generation machine. The complete 2026 web design playbook for contractors and home services."
        />
        <link rel="canonical" href="https://holywebs.com/resources/website-guide-service-businesses/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Ultimate Website Guide for Service Businesses (2026 Edition)",
            description: "Learn how to turn your local service business website into a 24/7 lead generation machine. The complete 2026 web design playbook for contractors and home services.",
            author: { "@type": "Organization", name: "Holy Webs" },
            publisher: { "@type": "Organization", name: "Holy Webs" },
            datePublished: "2026-04-04",
            dateModified: "2026-04-04",
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/90 to-dark/75" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Website Guide" }]} />
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Pillar Guide</span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/40 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> 18 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-dark-foreground leading-tight mb-6">
            The Ultimate Website Guide for Service Businesses (2026&nbsp;Edition)
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed">
            Your website isn't a digital brochure. It's your hardest-working salesperson, or at least, it should be. This guide is the complete playbook for turning a local service business website into a 24/7 lead generation&nbsp;machine.
          </p>
        </div>
      </section>

      {/* Content with Sticky TOC */}
      <section className="section-light py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Sticky TOC Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <nav className="lg:sticky lg:top-24">
                <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Table of Contents
                </p>
                <ul className="space-y-1">
                  {tocItems.map(({ id, label }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className={`block text-sm py-1.5 pl-3 border-l-2 transition-all duration-200 ${
                          activeSection === id
                            ? "border-primary text-primary font-semibold"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                        }`}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-border">
                  <Link
                    to="/resources/free-visibility-audit"
                    className="btn-primary text-xs !px-4 !py-2.5 w-full justify-center"
                  >
                    Free Visibility Audit
                  </Link>
                </div>
              </nav>
            </aside>

            {/* Article Body */}
            <article className="flex-1 min-w-0 max-w-3xl">
              {/* Introduction */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Let's start with a reality check: <strong className="text-foreground">in 2026, every business has a website</strong>. The question is no longer whether you need one, it's whether the one you have is actually doing anything for you. For service businesses, HVAC contractors, plumbers, roofers, landscapers, electricians, a website is often the first impression a potential customer gets of your company. And for most, that first impression is costing them&nbsp;money.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                There's a critical difference between a "pretty" website and a <em>high-converting</em> website. A pretty website has nice colors, maybe a stock photo of a smiling family, and an "About Us" page that talks about how your company was founded in 2008. That's fine. But it's not generating leads. A high-converting website is engineered to guide every visitor toward one clear outcome: contacting&nbsp;you.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This guide breaks down everything that separates a website that just exists from a website that actively grows your business. Whether you're building a new site from scratch, redesigning an underperforming one, or evaluating an agency's work, this is the playbook. For a look at how we approach this for our clients, visit our{" "}
                <Link to="/services/web-design" className="text-primary font-semibold hover:underline">professional web design services</Link>&nbsp;page.
              </p>

              {/* Section 1 */}
              <h2 id="why-failing" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                Why Your Website Is Failing Your Service&nbsp;Business
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Most service business websites don't fail because they're ugly. They fail because they were built without a strategy. A business owner picks a template on Wix or Squarespace, uploads a logo, writes a few paragraphs, and calls it done. The site looks "good enough", but it's missing the elements that actually convert visitors into&nbsp;customers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The most common pitfalls are predictable. <strong className="text-foreground">Slow load times</strong> kill your chances before anyone even sees your content, Google reports that 53% of mobile users abandon a page that takes longer than three seconds to load. <strong className="text-foreground">Confusing navigation</strong> makes visitors work too hard to find what they need. And the biggest killer of all: <strong className="text-foreground">no clear call to action</strong>. If a visitor lands on your homepage and has to figure out how to contact you, you've already lost&nbsp;them.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Here's the hard truth: your competitors are one click away. When a homeowner searches "AC repair near me" and lands on your site, they're also going to look at two or three other companies. If your site is slower, more confusing, or less trustworthy than the competition, that lead is gone. You'll never know they visited, and you'll never know what you&nbsp;lost.
              </p>
              <PullQuote>
                A website that doesn't generate leads isn't an asset, it's an expense. And most service business websites are&nbsp;expenses.
              </PullQuote>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The "three-second rule" applies to more than just load time. It also applies to user comprehension. Within three seconds of landing on your homepage, a visitor should be able to answer three questions: <em>What do you do? Where do you do it? How do I contact you?</em> If any of those answers are unclear, your site is underperforming. Period.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                And then there's mobile. Over <strong className="text-foreground">60% of all local searches</strong> happen on mobile devices. If your website breaks, loads slowly, or is hard to navigate on a phone, you're losing the majority of your potential customers before they ever see your best&nbsp;work.
              </p>

              {/* Section 2 */}
              <h2 id="anatomy" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                The Anatomy of a High-Converting Service&nbsp;Website
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                A high-converting service website isn't an accident. It's the result of deliberate design decisions, every element placed with purpose, every section engineered to move the visitor closer to picking up the phone or filling out a form. Here are the non-negotiable&nbsp;elements.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">The Hero Section (Above the&nbsp;Fold)</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The hero section is the first thing a visitor sees without scrolling. It needs to do three things immediately: communicate your <strong className="text-foreground">value proposition</strong>, present a <strong className="text-foreground">primary call to action</strong>, and establish <strong className="text-foreground">trust</strong>. A strong hero for a plumbing company might read: "Fast, Reliable Plumbing in Houston, Call for a Free Estimate" with a prominent phone number or button, and a trust badge like "Serving the Greater Houston Area for 15&nbsp;Years."
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The biggest mistake businesses make with their hero section is trying to be clever instead of being clear. Don't use vague taglines like "Excellence in Every Drop" or "Building Tomorrow, Today." Your visitor doesn't want poetry. They want to know if you can fix their problem and how to reach you. Save the creativity for the design, keep the copy direct and benefit-driven.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Clear, Benefit-Driven&nbsp;Copywriting</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Every word on your website should answer one question from the visitor's perspective: <em>"What's in it for me?"</em> Too many service business websites read like internal memos, they list certifications, equipment brands, and company history. None of that matters to a homeowner with a flooded&nbsp;basement.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Focus on the <strong className="text-foreground">customer's problem</strong> and <strong className="text-foreground">your solution</strong>. Instead of "We offer comprehensive HVAC services including installation, repair, and maintenance," try "Your AC broke down in the middle of July. We'll have it running again today, guaranteed." One is a feature list. The other speaks directly to the customer's pain point and offers a concrete&nbsp;outcome.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Use short paragraphs, clear headings, and bullet points for scannable content. Most users don't read web pages, they scan them. Structure your copy so that someone who only reads the headings still understands what you do and why they should call&nbsp;you.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Trust Signals and Social&nbsp;Proof</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Trust is the currency of local service businesses. A homeowner is inviting a stranger into their home, they need to feel confident you're legitimate, competent, and reliable. Your website needs to provide that confidence at every turn. <strong className="text-foreground">Real customer testimonials</strong> (with names and cities, not "J.S. from somewhere") are the most powerful trust signal you can have. Industry certifications, manufacturer partnerships, before-and-after project photos, satisfaction guarantees, and years in business, all of these reduce friction and build&nbsp;credibility.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Place trust signals strategically: in the hero section, next to contact forms, on service pages, and in the footer. Don't hide them on an "About" page that nobody visits. A Google Reviews widget displaying your star rating in real time is particularly effective because it's third-party validation that visitors can verify&nbsp;themselves.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Frictionless Contact&nbsp;Forms</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Your contact form is where leads are won or lost. The cardinal rule: <strong className="text-foreground">keep it short</strong>. Name, phone number, and a brief description of the issue, that's all you need to start a conversation. Every additional field you add reduces your conversion rate. Nobody wants to fill out a 10-field form on their phone while their kitchen is&nbsp;flooding.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Set clear expectations. Instead of a generic "Submit" button, use action-oriented language like "Get My Free Estimate" or "Schedule a Call." Let visitors know what happens next, "We'll call you back within 2 hours" is far more compelling than silence. And make sure the form works on mobile. Test it. On your phone. Right&nbsp;now.
              </p>

              <InlineCTA
                heading="Need a Website That Actually Converts?"
                body="We design and build websites specifically for service businesses, engineered for leads, not just looks. Let's talk about what your site should be doing for you."
              />

              {/* Section 3 */}
              <h2 id="purpose-audience" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                Step 1: Defining Your Website's Purpose and Target&nbsp;Audience
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Before you design a single page or write a single headline, you need to answer two foundational questions: <em>Who am I talking to?</em> and <em>What do I want them to do?</em> Every decision that follows, the layout, the copy, the imagery, the CTAs, should flow from these&nbsp;answers.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Identifying Your Ideal&nbsp;Customer</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Not all customers are equal, and your website shouldn't try to speak to everyone. Are you targeting high-end residential homeowners who want premium finishes and white-glove service? Or are you going after commercial property managers who need reliable, fast turnarounds? The language, imagery, and even the pricing signals on your site should reflect who you're trying to&nbsp;attract.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                A roofing company targeting luxury home builders will use a different visual style, different project photos, and different copy than one targeting insurance restoration work. Neither approach is wrong, but trying to do both on the same page dilutes your message and confuses your visitor. Know your customer, and build your site for&nbsp;them.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Mapping the Customer&nbsp;Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Think about what a potential customer needs to see, and in what order, to go from "I have a problem" to "I'm calling this company right now." For most service businesses, the journey looks something like&nbsp;this:
              </p>
              <ol className="list-decimal pl-6 space-y-3 text-muted-foreground mb-5">
                <li><strong className="text-foreground">Recognition:</strong> "I have a problem" (leaky roof, broken AC, clogged drain)</li>
                <li><strong className="text-foreground">Search:</strong> "Who can fix this near me?" (Google search, Maps)</li>
                <li><strong className="text-foreground">Evaluation:</strong> "Is this company any good?" (website, reviews, photos)</li>
                <li><strong className="text-foreground">Decision:</strong> "Can I trust them? Can I afford them?" (testimonials, guarantees, pricing signals)</li>
                <li><strong className="text-foreground">Action:</strong> "I'm calling them right now" (click-to-call, contact form)</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Your website needs to facilitate every step of this journey. The homepage handles recognition and initial trust. Service pages handle evaluation. Testimonials and project galleries handle the decision. And prominent, frictionless CTAs handle the action. If any step is weak or missing, the chain breaks, and the lead goes to your&nbsp;competitor.
              </p>

              {/* Section 4 */}
              <h2 id="responsive-mobile" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                Step 2: Mastering Responsive Design and Mobile-First&nbsp;Architecture
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                This isn't optional, and it isn't a nice-to-have. Over <strong className="text-foreground">60% of local searches happen on mobile devices</strong>. For emergency services like plumbing and HVAC, that number is even higher. A website that looks great on a 27-inch desktop monitor but breaks on an iPhone is actively losing you money every single&nbsp;day.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Mobile-first design means exactly what it sounds like: you design the mobile experience first, then expand to larger screens. This forces you to prioritize. On a 375-pixel-wide screen, there's no room for clutter. Every element has to earn its place. The result is a faster, cleaner, more focused experience, which actually improves your desktop version&nbsp;too.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">The "Tap to Call"&nbsp;Button</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                For service businesses, the most important mobile feature is a <strong className="text-foreground">sticky, highly visible "Tap to Call" button</strong>. When someone is searching for "emergency plumber near me" at 11 p.m., they don't want to fill out a form. They want to tap one button and have someone on the line. This button should be fixed to the bottom of the screen, use a contrasting color, and be impossible to&nbsp;miss.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The data backs this up: Google research shows that <strong className="text-foreground">70% of mobile searchers call a business directly from search results</strong>. If you make that call easy, you win the lead. If you bury your phone number in a hamburger menu, you lose it. It's that&nbsp;simple.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Speed Is&nbsp;Revenue</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Page speed isn't just a technical metric, it's a business metric. Every additional second of load time increases your bounce rate by roughly 32%. For a service business generating 500 website visits per month, even a one-second improvement in load time could mean dozens of additional leads per&nbsp;year.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The biggest culprits for slow service business websites are <strong className="text-foreground">unoptimized images</strong> (that 5MB photo of your truck), bloated page builders (looking at you, WordPress with 30 plugins), and cheap shared hosting. Compress every image. Use modern formats like WebP. Minimize unnecessary scripts. And invest in quality hosting, the difference between a $5/month shared server and a $30/month managed host is measurable in&nbsp;revenue.
              </p>
              <PullQuote>
                Speed is trust. A fast website tells visitors you run a professional operation. A slow one tells them you cut&nbsp;corners.
              </PullQuote>

              {/* Section 5 */}
              <h2 id="design-for-seo" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                Step 3: Designing for Local&nbsp;SEO
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                A beautiful website is worthless if nobody can find it. Design and SEO aren't separate disciplines, they're two sides of the same coin. The way you structure your site, organize your content, and build your pages directly impacts how Google understands, indexes, and ranks your&nbsp;business.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Site Architecture and Service&nbsp;Pages</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                One of the most common mistakes service businesses make is cramming all their services onto a single page. "We do AC repair, furnace installation, duct cleaning, and water heater replacement", all on one page titled "Our Services." This is an SEO disaster. Google can't rank a single page for five different keywords&nbsp;effectively.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Instead, create a <strong className="text-foreground">dedicated page for every core service you offer</strong>. Each page should have its own unique title tag, meta description, H1 heading, and at least 500 words of original content. An HVAC company should have separate pages for "AC Repair," "Furnace Installation," "Duct Cleaning," and "Heat Pump Services", each optimized for the specific keyword someone would search when they need that&nbsp;service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                This structure does two things: it gives Google clear signals about what each page is about, and it gives you more "entry points", more pages that can rank for more search queries. A single "Services" page might rank for one or two terms. Five dedicated pages can rank for dozens.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Location Pages (The Spiderweb&nbsp;Strategy)</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                If you serve multiple cities, and most service businesses do, you need a dedicated landing page for each one. We call this the <strong className="text-foreground">Spiderweb Strategy</strong>: your main website is the hub, and each city page is a spoke that reaches out to capture local search traffic in that&nbsp;area.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                A well-built city page isn't just your homepage with the city name swapped in. It includes locally relevant content: the specific services you offer in that area, mentions of local landmarks or neighborhoods, testimonials from local customers, and localized schema markup. It should feel like a dedicated landing page built specifically for that&nbsp;city.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                To see this strategy in action, take a look at our{" "}
                <Link to="/locations" className="text-primary font-semibold hover:underline">locations hub</Link>, where we've built individual city pages for each market we serve, each one optimized for local search visibility in that specific&nbsp;area.
              </p>

              <InlineCTA
                heading="Ready to Build Your Spiderweb?"
                body="Our location page strategy has helped service businesses capture leads in cities they never ranked in before. Let's build yours."
              />

              {/* Section 6 */}
              <h2 id="launch-beyond" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                Step 4: The Launch and Beyond (Iterative&nbsp;Improvement)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Here's something most business owners don't want to hear: <strong className="text-foreground">your website is never finished</strong>. Launching a new site is a milestone, not a finish line. The most successful service business websites are the ones that are continuously updated, tested, and improved based on real performance&nbsp;data.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Analytics and&nbsp;Tracking</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                If you don't have Google Analytics and conversion tracking set up on your website, you're flying blind. You need to know how many people visit your site, where they come from, which pages they view, and, most importantly, how many of them convert into leads. Without this data, every decision about your website is a&nbsp;guess.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Set up conversion tracking for every lead-generating action: form submissions, phone calls (using call tracking numbers), and chat interactions. Tag your marketing campaigns with UTM parameters so you can trace every lead back to its source. This data is what allows you to calculate your actual ROI, not just "I think the website is working" but "the website generated 47 qualified leads last month at $23&nbsp;each."
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Regular Content&nbsp;Updates</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Google rewards websites that publish fresh, relevant content. For service businesses, this doesn't mean writing a blog post every day (you're running a business, not a media company). But it does mean periodically adding new content that demonstrates your expertise and keeps search engines coming back to crawl your&nbsp;site.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The most effective content strategies for service businesses include <strong className="text-foreground">project galleries</strong> (before-and-after photos with descriptions), <strong className="text-foreground">seasonal tips</strong> (winterization guides, summer maintenance checklists), <strong className="text-foreground">FAQ pages</strong> that answer common customer questions, and <strong className="text-foreground">case studies</strong> that showcase specific results. Each piece of content is an opportunity to rank for a new keyword and demonstrate your authority in your&nbsp;field.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Even updating existing pages with fresh information, new testimonials, updated service areas, current pricing signals, sends positive signals to Google and keeps your content relevant and&nbsp;accurate.
              </p>
              <PullQuote>
                The best service business websites aren't built once and forgotten. They're living assets that improve month over month, year over&nbsp;year.
              </PullQuote>

              {/* Section 7: Conclusion */}
              <h2 id="conclusion" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                Conclusion: When to DIY and When to Hire an&nbsp;Agency
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Let's be honest about what it takes to build and maintain a high-converting service business website. The platforms are more accessible than ever, Wix, Squarespace, WordPress, and others make it possible for anyone to get a basic site online in a weekend. If you're just starting out, have a tight budget, and need something up fast, a DIY approach can work as a starting&nbsp;point.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                But there's a difference between "having a website" and "having a website that generates revenue." The strategy behind the site, the conversion architecture, the SEO foundation, the technical performance, the content strategy, is where most DIY projects fall short. A template can give you a pretty homepage. It can't give you a lead generation&nbsp;system.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Here's a practical framework for deciding:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-5">
                <li><strong className="text-foreground">DIY makes sense</strong> if you have more time than money, you're comfortable learning web design tools, and you're willing to invest the hours to get the technical details right, from mobile optimization to page speed to structured&nbsp;data.</li>
                <li><strong className="text-foreground">Hiring an agency makes sense</strong> if your time is more valuable spent running your business, you need a website that's engineered for lead generation from day one, and you want ongoing support for SEO, content updates, and performance&nbsp;optimization.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The cost of an agency website is typically measured in thousands of dollars. The cost of a website that doesn't convert is measured in the leads you never knew you lost, and those losses compound every month the site is&nbsp;live.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                At Holy Webs, we build websites specifically for local service businesses. Every site we deliver is designed around a conversion strategy, built with local SEO in mind, optimized for mobile and speed, and backed by ongoing performance tracking. We don't build digital brochures. We build digital&nbsp;storefronts.
              </p>

              <div className="my-12 rounded-xl bg-dark p-8 md:p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-primary blur-[100px]" />
                </div>
                <div className="relative z-10 text-center">
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">
                    Ready to Turn Your Website into a Lead Generation&nbsp;Machine?
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-5 max-w-xl mx-auto">
                    Let Holy Webs build your digital storefront. We'll handle the strategy, the design, and the technical details, so you can focus on running your&nbsp;business.
                  </p>
                  <Link
                    to="/contact"
                    className="btn-primary text-sm !px-8 !py-3.5"
                  >
                    Let's Talk <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Related guides */}
              <div className="mt-16 pt-10 border-t border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">Continue Reading</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Link
                    to="/resources/local-seo-guide-service-businesses"
                    className="group p-5 rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <span className="text-xs font-bold tracking-widest uppercase text-primary">Pillar Guide</span>
                    <h4 className="text-foreground font-bold mt-1 group-hover:text-primary transition-colors">
                      The Ultimate Local SEO Guide (2026)
                    </h4>
                    <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 mt-2 group-hover:gap-2 transition-all">
                      Read Guide <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                  <Link
                    to="/resources/blog/contractor-website-not-converting"
                    className="group p-5 rounded-lg border border-border hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <span className="text-xs font-bold tracking-widest uppercase text-primary">Blog</span>
                    <h4 className="text-foreground font-bold mt-1 group-hover:text-primary transition-colors">
                      Why Your Contractor Website Gets Traffic But No&nbsp;Calls
                    </h4>
                    <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 mt-2 group-hover:gap-2 transition-all">
                      Read Article <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
}
