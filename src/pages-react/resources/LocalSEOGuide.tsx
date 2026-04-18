import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
const heroImg = "/assets/guide-hero-local-seo.jpg";

const tocItems = [
  { id: "why-local-seo", label: "Why Local SEO Matters" },
  { id: "three-pillars", label: "The 3 Pillars of Local Search" },
  { id: "google-business-profile", label: "Step 1: Google Business Profile" },
  { id: "local-citations", label: "Step 2: Local Citations" },
  { id: "review-generation", label: "Step 3: Review Generation" },
  { id: "on-page-seo", label: "Step 4: On-Page Local SEO" },
  { id: "common-mistakes", label: "Mistakes to Avoid" },
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

function InlineCTA() {
  return (
    <div className="my-12 rounded-xl bg-dark p-8 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-primary blur-[100px]" />
      </div>
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">
          Want Us to Handle This for&nbsp;You?
        </h3>
        <p className="text-white/60 leading-relaxed mb-5 max-w-xl">
          We build and execute local SEO strategies for service businesses across Texas and the Southeast. If you'd rather focus on running your business, let's&nbsp;talk.
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

export default function LocalSEOGuide() {
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
        <title>The Ultimate Local SEO Guide for Service Businesses (2026) | Holy Webs</title>
        <meta
          name="description"
          content="Learn how to dominate Google Maps and local search. The complete 2026 local SEO playbook for HVAC, plumbing, roofing, and home service businesses."
        />
        <link rel="canonical" href="https://holywebs.com/resources/local-seo-guide-service-businesses" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Ultimate Local SEO Guide for Service Businesses (2026 Edition)",
            description: "Learn how to dominate Google Maps and local search. The complete 2026 local SEO playbook for HVAC, plumbing, roofing, and home service businesses.",
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
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Local SEO Guide" }]} />
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Pillar Guide</span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/40 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> 15 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-dark-foreground leading-tight mb-6">
            The Ultimate Local SEO Guide for Service Businesses (2026&nbsp;Edition)
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed">
            If your business doesn't appear in the top three results on Google Maps, you're invisible to the people searching for exactly what you offer. This guide is the complete playbook for changing&nbsp;that.
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
              {/* Intro */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Here's a stat that should bother you: <strong className="text-foreground">75% of users never scroll past the first page of Google</strong>. If your business is sitting on page two, or worse, not indexed for local searches at all, you might as well not exist online. The leads are going to whoever shows up first. Every single&nbsp;day.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Local SEO is fundamentally different from traditional SEO. Traditional SEO is about ranking nationally (or globally) for broad keywords. Local SEO is about showing up when someone in <em>your area</em> searches for <em>your service</em>. It's hyper-targeted, geography-specific, and directly tied to revenue for businesses like HVAC companies, plumbers, roofers, electricians, and every other trade that relies on local&nbsp;customers.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This guide covers everything you need to know to dominate local search in 2026, from optimizing your Google Business Profile to building a citation network to generating a steady stream of reviews. Whether you're doing this yourself or evaluating an agency, this is the playbook. For a deeper look at our overall SEO strategy, visit our{" "}
                <Link to="/services/seo" className="text-primary font-semibold hover:underline">SEO services page</Link>.
              </p>

              {/* Section 1 */}
              <h2 id="why-local-seo" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                Why Local SEO Is the Lifeblood of Home Service&nbsp;Companies
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Consumer behavior has shifted, permanently. When someone's AC goes out in July or a pipe bursts at 2 a.m., they don't flip through the Yellow Pages. They grab their phone and search "AC repair near me" or "emergency plumber [city name]." Google processes over 8.5 billion searches per day, and <strong className="text-foreground">46% of all Google searches have local intent</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                That's nearly half of all search activity. And the businesses that capture those searches are the ones that show up in the Map Pack, the three local listings pinned at the top of the results page with reviews, hours, directions, and a tap-to-call button. If you're not there, your competitor&nbsp;is.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The shift toward "near me" searches has been explosive. Google reports that "near me" queries have grown by over 500% in the last few years. Mobile searches for "open now near me" have tripled. Consumers expect immediacy, proximity, and social proof, and Google's algorithm is designed to deliver exactly&nbsp;that.
              </p>
              <PullQuote>
                If your business doesn't show up when someone searches for what you do, in the city where you do it, you don't have a visibility problem. You have a revenue&nbsp;problem.
              </PullQuote>
              <p className="text-muted-foreground leading-relaxed mb-5">
                For service businesses specifically, local SEO isn't a "nice to have." It's the primary driver of inbound leads. Your website, your Google Business Profile, your reviews, and your local search presence work together to create a pipeline of customers who are actively looking for help right now. Not next week. Right&nbsp;now.
              </p>

              {/* Section 2 */}
              <h2 id="three-pillars" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                The 3 Pillars of the Google Local&nbsp;Algorithm
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Google's local search algorithm is built on three core factors. Understanding them is essential to building a strategy that actually works. Every tactic in this guide connects back to one or more of these&nbsp;pillars.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Relevance</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Relevance is how well your business profile and website match what the searcher is looking for. If someone searches "residential electrician in Waco" and your Google Business Profile lists "General Contractor" as your primary category with no mention of electrical work, Google has no reason to show you. Relevance is controlled by your business categories, your service descriptions, your website content, and the keywords you use across your online&nbsp;presence.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Proximity</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Proximity is how close your business is to the searcher (or to the location specified in their query). This is the one factor you can't fully control, but you can influence it. Setting accurate service areas in your GBP, creating city-specific landing pages on your website, and building citations in local directories all help Google understand <em>where</em> you operate and expand your effective&nbsp;radius.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Prominence</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Prominence measures how well-known and trusted your business is. Google evaluates this through review quantity and quality, backlinks to your website, mentions across the web (citations), and the overall authority of your online presence. A business with 200 five-star reviews, consistent directory listings, and a well-built website will outrank a competitor with 10 reviews and a bare-bones&nbsp;site.
              </p>

              <InlineCTA />

              {/* Section 3 */}
              <h2 id="google-business-profile" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                Step 1: Dominating Your Google Business&nbsp;Profile
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Your Google Business Profile is the single most important asset in your local SEO strategy. It's what appears in the Map Pack, it's what customers see first, and it's what Google uses to decide if you're relevant to a search. If you only do one thing after reading this guide, make it a complete GBP&nbsp;overhaul.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Choose the Right Primary&nbsp;Category</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Your primary category is the most influential ranking signal in your GBP. If you're a plumber, your primary category should be "Plumber", not "Home Improvement" or "General Contractor." Google offers hundreds of specific categories. Choose the one that most precisely describes your core service. Use secondary categories for everything else. An HVAC company might use "HVAC Contractor" as the primary and add "Air Conditioning Repair Service," "Furnace Repair Service," and "Heating Contractor" as&nbsp;secondaries.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Define Your Service Areas&nbsp;Accurately</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                If you're a service-area business (you go to the customer rather than them coming to you), you need to list every city and region you serve. Don't just list your home city. If you serve Houston, Katy, Sugar Land, Pearland, and The Woodlands, say so. Google uses this information to match you with searches originating from those areas. Be thorough, but be honest. Don't list cities you won't actually service, it hurts your credibility and your click-to-call&nbsp;rate.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Photos and&nbsp;Geotagging</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Businesses with photos receive 42% more requests for directions and 35% more click-throughs to their websites. Upload high-quality photos of your team, your work, your vehicles, and your equipment. Before-and-after project photos are especially effective. For an extra edge, geotag your photos with GPS coordinates of the locations where you've done work. This creates a geolocation signal that reinforces your service area to&nbsp;Google.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                For a deeper dive on GBP optimization, check out our{" "}
                <Link to="/services/google-business-profile" className="text-primary font-semibold hover:underline">Google Business Profile management service</Link>.
              </p>

              {/* Section 4 */}
              <h2 id="local-citations" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                Step 2: Building Local Authority Through&nbsp;Citations
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                A citation is any online mention of your business's Name, Address, and Phone number (NAP). Citations appear on directories like Yelp, Angi, BBB, industry-specific directories, local chamber of commerce websites, and dozens of other data aggregators. They serve as trust signals that validate your business's existence and&nbsp;location.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">NAP&nbsp;Consistency</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                This is the most critical factor in citation management: your Name, Address, and Phone number must be <em>exactly the same</em> everywhere. Not "close enough." Identical. "123 Main Street" on one listing and "123 Main St" on another can cause confusion for Google's algorithm. Decide on one format for your business name, address, and phone number, and use it consistently on every directory, your website, your social media profiles, and your Google Business&nbsp;Profile.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Top Directories to&nbsp;Target</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Start with the directories that carry the most weight:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-5">
                <li>Google Business Profile (your foundation)</li>
                <li>Yelp</li>
                <li>Facebook Business Page</li>
                <li>Apple Maps / Apple Business Connect</li>
                <li>Bing Places</li>
                <li>Better Business Bureau (BBB)</li>
                <li>Angi (formerly Angie's List)</li>
                <li>HomeAdvisor / Angi Leads</li>
                <li>Industry-specific directories (e.g., PHCC for plumbers)</li>
                <li>Local Chamber of Commerce</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-5">
                After covering the major platforms, look for niche and local directories specific to your trade and region. Every consistent, accurate citation strengthens Google's confidence that your business is legitimate and located where you say you&nbsp;are.
              </p>

              <PullQuote>
                NAP consistency isn't optional. One wrong phone number on a forgotten directory listing can undermine months of&nbsp;work.
              </PullQuote>

              {/* Section 5 */}
              <h2 id="review-generation" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                Step 3: The Review Generation&nbsp;Machine
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Reviews are the closest thing to a cheat code in local SEO. They influence your ranking in the Map Pack, they influence whether someone clicks on your listing, and they influence whether that person actually picks up the phone and calls you. Google has said explicitly that "high-quality, positive reviews" improve local&nbsp;ranking.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">How to Ask for&nbsp;Reviews</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The best time to ask is immediately after the job is complete and the customer is satisfied. Have your technicians or project managers ask in person, it's the most effective method. Follow up within 24 hours with a text or email containing a direct link to your Google review page. Make it as easy as possible. One tap, leave a review. Don't ask customers to find you on Google themselves, every step of friction reduces your conversion&nbsp;rate.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Review Velocity&nbsp;Matters</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                It's not just about having a lot of reviews, it's about the <em>rate</em> at which new reviews come in. Google favors businesses that receive reviews consistently over time, not businesses that got 50 reviews two years ago and nothing since. A steady stream of 3–5 new reviews per week signals to Google that your business is active and customers are regularly using your&nbsp;services.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Responding to Every&nbsp;Review</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Respond to every review, positive and negative. For positive reviews, thank the customer by name and mention the specific service you provided (this adds keyword-rich content to your profile). For negative reviews, respond professionally, acknowledge the concern, and offer to make it right. Never get defensive or argumentative. How you handle criticism publicly says more about your business than the complaint&nbsp;itself.
              </p>

              <InlineCTA />

              {/* Section 6 */}
              <h2 id="on-page-seo" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                Step 4: On-Page SEO for Local&nbsp;Websites
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Your website is the foundation of everything. It's where Google looks to confirm who you are, what you do, and where you do it. A poorly structured website with thin content and no geographic signals is a liability. A well-built local website is a ranking&nbsp;machine.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">City Pages and the Spiderweb&nbsp;Strategy</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                If you serve multiple cities, you need a dedicated landing page for each one. Not a single "Areas We Serve" page with a list of city names, individual, content-rich pages that are optimized for "[service] in [city]" searches. Each page should include city-specific content, local landmarks or references, your services in that area, and relevant testimonials. We call this the "Spiderweb Strategy" because it creates a web of interlinked location pages that reinforces your geographic authority across your entire service&nbsp;area.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                You can see this in action on our own site, check out our{" "}
                <Link to="/locations" className="text-primary font-semibold hover:underline">location pages</Link>{" "}
                to see how we structure city-specific content for maximum local search&nbsp;impact.
              </p>

              <h3 className="text-xl font-bold text-foreground mt-8 mb-3">Local Schema&nbsp;Markup</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Schema markup is structured data you add to your website's code that helps Google understand your business information in a machine-readable format. For local businesses, the most important schema type is <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-foreground">LocalBusiness</code>. This should include your business name, address, phone number, hours of operation, service area, and accepted payment methods. While schema doesn't directly boost rankings, it helps Google display rich results and improves the accuracy of your business information in search&nbsp;results.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Beyond LocalBusiness schema, implement <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-foreground">Service</code> schema on each of your service pages and <code className="bg-muted px-1.5 py-0.5 rounded text-sm text-foreground">FAQPage</code> schema on pages with frequently asked questions. Every piece of structured data gives Google more context about what you offer and where you offer&nbsp;it.
              </p>

              {/* Section 7 */}
              <h2 id="common-mistakes" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                Common Local SEO Mistakes to&nbsp;Avoid
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Even well-intentioned businesses make mistakes that sabotage their local search performance. Here are the most common ones we see, and they're all&nbsp;avoidable.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">Keyword stuffing your business name.</strong> Adding "Best Plumber in Houston TX | 24/7 Emergency Service" to your GBP business name violates Google's guidelines and can get your listing suspended. Use your actual legal business&nbsp;name.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">Creating fake locations.</strong> Some businesses create GBP listings for addresses where they don't have a physical presence, virtual offices, PO boxes, or a friend's address in another city. Google actively hunts for and removes these fake listings, and the penalty can affect your legitimate listing&nbsp;too.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">Inconsistent NAP data.</strong> We've covered this, but it bears repeating. If your phone number is different on Yelp than it is on your website, or your address format varies across directories, Google's confidence in your business data drops. Audit every listing and fix&nbsp;inconsistencies.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong className="text-foreground">Ignoring your website.</strong> A Google Business Profile alone isn't enough. Google still evaluates the quality, relevance, and authority of your website when determining local rankings. A one-page site with no content, no schema, and no city pages is leaving rankings on the&nbsp;table.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                <strong className="text-foreground">Not tracking results.</strong> If you're not monitoring your Map Pack rankings, your website traffic from local searches, and the number of calls and direction requests from your GBP, you have no idea what's working. You can't improve what you don't&nbsp;measure.
              </p>

              <PullQuote>
                The businesses that win at local SEO aren't the ones doing everything, they're the ones doing the right things&nbsp;consistently.
              </PullQuote>

              {/* Section 8 */}
              <h2 id="conclusion" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-5 scroll-mt-24">
                When to DIY and When to Hire an&nbsp;Agency
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Everything in this guide is actionable. You <em>can</em> do it yourself. The question is whether you <em>should</em>. For a business owner already managing crews, handling customers, and running day-to-day operations, local SEO can feel like another full-time job. Because in many ways, it&nbsp;is.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                If you have the time and discipline to optimize your GBP weekly, build and manage citations, actively generate reviews, create city-specific content, implement schema, and track your progress, go for it. This guide gives you everything you&nbsp;need.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                But if local SEO keeps falling to the bottom of your to-do list, or if you've been trying for months without seeing movement in the Map Pack, it might be time to bring in a team that does this every day. At Holy Webs, we build and manage complete local SEO strategies for service businesses across Texas and the Southeast. We handle the GBP optimization, citation management, review strategy, content creation, and technical SEO, so you can focus on running your&nbsp;business.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                The math is simple: if the cost of hiring an agency is less than the revenue you'd lose by staying invisible online, it pays for itself. And for most service businesses, a single new customer from local search more than covers a month of&nbsp;SEO.
              </p>

              {/* Final CTA */}
              <div className="mt-14 mb-4 rounded-xl bg-dark p-8 md:p-12 relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-primary blur-[140px]" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                    Ready to Dominate Local&nbsp;Search?
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-6 max-w-lg mx-auto">
                    Start with a free visibility audit. We'll review your Google presence, your website, and your competition, then show you exactly what to fix&nbsp;first.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      to="/resources/free-visibility-audit"
                      className="btn-primary text-base !px-8 !py-3.5"
                    >
                      Get Your Free Audit <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="btn-outline-light text-base !px-8 !py-3.5"
                    >
                      Let's Talk
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
}
