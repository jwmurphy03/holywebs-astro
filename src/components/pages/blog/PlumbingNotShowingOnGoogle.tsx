import { Helmet } from "react-helmet-async";

import { Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogSidebar from "@/components/BlogSidebar";

export default function PlumbingNotShowingOnGoogle() {
  return (
    <Layout>
      <Helmet>
        <title>Why Your Plumbing Business Isn't Showing Up on Google | Holy Webs</title>
        <meta
          name="description"
          content="Can't find your plumbing company on Google Maps? Here are the most common reasons plumbers don't rank locally — and how to fix each one before it costs you more jobs."
        />
        <meta name="keywords" content="plumbing business not showing up on Google, why is my plumbing company not on Google, plumber SEO problems, plumber Google ranking" />
        <link rel="canonical" href="https://holywebs.com/resources/blog/plumbing-not-showing-on-google" />
      </Helmet>

      {/* Dark navy hero */}
      <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/resources/blog" }, { label: "Plumbing Not Showing on Google" }]} />
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Plumbing&nbsp;Marketing</span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/40 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-foreground leading-tight mb-6">
            The Real Reason Your Plumbing Business Isn't Showing Up on&nbsp;Google
          </h1>
          <div className="flex items-center gap-4 text-white/50 text-sm">
            <span>By <strong className="text-white/70">Holy Webs Team</strong></span>
            <span>•</span>
            <span>Published April 24, 2026</span>
          </div>
        </div>
      </section>

      {/* White body with two-column layout */}
      <section className="bg-background py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Article body (70%) */}
            <div className="lg:w-[70%]">
              <article className="blog-article">
                <p className="text-lg leading-relaxed mb-8">
                  A pipe bursts at 11 PM and the homeowner grabs their phone. They're not asking a neighbor for a referral — they're searching "emergency plumber near me" and calling whoever shows up first. If your plumbing business isn't in the Map Pack when that search happens, that call is going to your&nbsp;competitor.
                </p>
                <p>
                  Plumbing is one of the most emergency-driven trades there is, which means the Map Pack isn't just nice to have — it's where almost every high-intent job originates. The businesses that own those three spots get the calls. Everyone else waits. Here's why most plumbers don't rank, and what you can do about&nbsp;it.
                </p>

                <h2>The Three Most Common Reasons Plumbing Companies Don't Show Up on&nbsp;Google</h2>
                <p>
                  Google's local algorithm weighs three factors: <strong>relevance</strong> (does your online presence match what the searcher is looking for?), <strong>distance</strong> (how close is your business to the searcher?), and <strong>prominence</strong> (how well-known and trusted is your business online?). When plumbers don't rank, it's almost always one of these three things working against&nbsp;them.
                </p>

                <h2>Reason 1: Your Google Business Profile Is Incomplete or Using the Wrong&nbsp;Category</h2>
                <p>
                  Your <a href="/services/google-business-profile" className="text-primary">Google Business Profile</a> is the foundation of your local search presence. But here's something most plumbers don't realize: the primary category you choose changes which searches Google shows you for. "Plumber," "Plumbing Service," and "Emergency Plumber" are all valid GBP categories — and they each target a different set of&nbsp;searches.
                </p>
                <p>
                  For most plumbing businesses, "Plumber" or "Plumbing Service" is the right primary category. But the real gap is almost always in the service list. If you haven't filled out your services, Google doesn't know the full scope of what you&nbsp;offer.
                </p>
                <p>
                  A complete plumbing GBP service list should include, at minimum:
                </p>
                <ul>
                  <li>Drain cleaning</li>
                  <li>Water heater repair and replacement</li>
                  <li>Leak detection</li>
                  <li>Pipe repair and replacement</li>
                  <li>Sewer line repair and replacement</li>
                  <li>Tankless water heater installation</li>
                  <li>Emergency plumbing service</li>
                  <li>Water pressure issues</li>
                  <li>Fixture installation and repair</li>
                </ul>
                <blockquote>
                  <strong>Quick check:</strong> Log into your GBP and click on "Edit Profile," then "Services." If you have fewer than eight services listed, you're leaving searches on the table — especially for high-value jobs like water heater replacement and sewer&nbsp;work.
                </blockquote>
                <p>
                  For a full walkthrough of every GBP setting that matters, see our <a href="/resources/blog/google-business-profile-tips" className="text-primary">Google Business Profile tips</a>.
                </p>

                <h2>Reason 2: Your Website Has No Location-Specific&nbsp;Pages</h2>
                <p>
                  A generic plumbing website — one that talks about your services without ever mentioning specific cities or neighborhoods — can't rank for "plumber in Katy" or "emergency plumber Summerville SC." Google needs to see geographic signals on your website to know where you serve.
                </p>
                <p>
                  This is one of the most common structural problems we see on plumbing websites. The homepage says something like "Honest, Reliable Plumbing" but never mentions the city. There are no individual pages for service areas. Title tags say "Plumbing Services" without a city name anywhere.
                </p>

                <h3>What to&nbsp;Fix</h3>
                <ul>
                  <li><strong>Homepage headline:</strong> Should include your primary city — "Plumber in Charleston, SC" or "Emergency Plumbing in Houston,&nbsp;TX"</li>
                  <li><strong>City-specific pages:</strong> A page for "Plumber in Sugar Land, TX" with real content about that area will rank for those searches. A generic "Service Areas" list&nbsp;won't.</li>
                  <li><strong>Service + city combinations in headings and title tags:</strong> "Drain Cleaning in Katy TX" is a specific, rankable phrase. "Drain Cleaning Services" is&nbsp;not.</li>
                  <li><strong>Footer NAP:</strong> Your full business name, address, and phone number on every&nbsp;page</li>
                </ul>
                <p>
                  A <a href="/services/web-design" className="text-primary">well-built contractor website</a> builds these geographic signals into the structure from the start. If yours doesn't have them, no amount of ad spend will compensate for the visibility you're&nbsp;missing.
                </p>

                <h2>Reason 3: Your Review Velocity Has&nbsp;Stalled</h2>
                <p>
                  Plumbing clients are genuinely grateful right after the job is done — but that gratitude has a short window. Emergency calls especially: the customer was stressed, you fixed the problem, they paid, they moved on. If you don't ask for a review within a few hours of that job, the moment passes and it almost never&nbsp;happens.
                </p>
                <p>
                  In most markets, the plumbing companies sitting in the Map Pack have 80, 150, or 300+ Google reviews. If you have fewer than 20, Google sees that gap and so does every potential customer comparing their options.
                </p>
                <blockquote>
                  <strong>The fix:</strong> Build a same-day follow-up text system. When a job is marked complete in your dispatch software, trigger an automated text to the customer with your direct Google review link. Keep it short: "Thanks for trusting us today — if we earned it, a quick review means the world to us. [link]." Our <a href="/resources/online-reviews-reputation-guide" className="text-primary">reviews and reputation guide</a> walks through the full&nbsp;setup.
                </blockquote>
                <p>
                  Done consistently, this adds 10-20 reviews per month without any additional effort from your&nbsp;team.
                </p>

                <h2>The 15-Minute Self-Audit for Plumbing&nbsp;Businesses</h2>
                <p>
                  Before you spend money on marketing, run through this checklist. It takes about 15 minutes and will tell you exactly where your visibility problems&nbsp;are.
                </p>
                <ol>
                  <li><strong>Google your business name.</strong> Does a GBP listing appear on the right? Is it claimed? Is every field filled&nbsp;out?</li>
                  <li><strong>Google "plumber in [your city]."</strong> Are you in the Map Pack? Anywhere on the first&nbsp;page?</li>
                  <li><strong>Google "emergency plumber [your city]."</strong> Same question — this is often a completely different set of results from the non-emergency&nbsp;search.</li>
                  <li><strong>Count your Google reviews.</strong> How many do you have? What's your average rating? When was the last&nbsp;one?</li>
                  <li><strong>Check your GBP service list.</strong> Are all your core services listed? Do you have emergency plumbing, water heater work, and sewer listed&nbsp;explicitly?</li>
                  <li><strong>Open your homepage.</strong> Does your headline mention your city? Does it describe your services&nbsp;specifically?</li>
                  <li><strong>Check for city-specific pages.</strong> Does your site have individual pages for each city or area you serve, or just a generic "Service Areas"&nbsp;page?</li>
                  <li><strong>Run your site through <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-primary">PageSpeed Insights</a>.</strong> Is your mobile score above&nbsp;70?</li>
                </ol>
                <p>
                  If you found issues in more than two of these areas, you have your answer. The good news is none of these are permanent — they're fixable with the right&nbsp;focus.
                </p>

                <h2>What If You've Fixed These Things and Still Aren't&nbsp;Ranking?</h2>
                <p>
                  If your GBP is optimized, your website has location-specific content, and your reviews are growing — but you're still not ranking — a few deeper issues may be at&nbsp;play.
                </p>
                <ul>
                  <li><strong>Competition density.</strong> In larger metros, the Map Pack is extremely competitive. You may need a sustained <a href="/services/seo" className="text-primary">local SEO strategy</a> that includes backlink building, content creation, and ongoing GBP management to break&nbsp;through.</li>
                  <li><strong>Website authority.</strong> A newer website with few inbound links will struggle to rank against established competitors. Domain authority builds over 6-12&nbsp;months.</li>
                  <li><strong>NAP inconsistencies.</strong> If your business name, address, or phone number appear differently across your website, GBP, Yelp, Angi, and other directories, Google's confidence in your listing&nbsp;drops.</li>
                  <li><strong>Thin or duplicate content.</strong> City pages that are copied from each other with only the city name swapped out can trigger Google's duplicate content filters rather than earning&nbsp;rankings.</li>
                </ul>
                <p>
                  In competitive markets, the plumbing companies consistently occupying the Map Pack are investing in professional <a href="/industries/plumbing" className="text-primary">plumbing marketing</a> — not because the fundamentals are complicated, but because executing them consistently while running a business is genuinely hard.
                </p>
                <p>
                  We work with plumbing contractors in <a href="/locations/south-carolina/charleston/plumbing" className="text-primary">Charleston, SC</a> and <a href="/locations/texas/houston/plumbing" className="text-primary">Houston, TX</a> — two markets where the demand is high and the Map Pack competition is stiff. The same fundamentals apply everywhere, but the timeline to results depends heavily on how crowded your market&nbsp;is.
                </p>

                <h2>The Bottom&nbsp;Line</h2>
                <p>
                  If your plumbing business isn't showing up on Google, it's not because your competitors have a secret advantage. It's almost always an incomplete Google Business Profile, a website without geographic content, or a review count that's fallen behind. Fix those three things and you'll be ahead of most plumbers in your&nbsp;market.
                </p>
                <p>
                  Plumbing is emergency-driven, which means the cost of being invisible isn't just a slow week — it's hundreds of jobs over the course of a year going to the competitor who did the basic SEO work you haven't gotten to&nbsp;yet.
                </p>

                {/* Internal link to pillar guide */}
                <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border/40">
                  <p className="text-sm text-muted-foreground mb-2">Want the complete local SEO playbook for service businesses?</p>
                  <a
                    href="/resources/local-seo-guide-service-businesses"
                    className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read our Local SEO Guide for Service Businesses <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>

              {/* CTA banner */}
              <div className="mt-12 bg-muted rounded-xl p-8 text-center">
                <h2 className="text-2xl font-extrabold text-foreground mb-3">
                  Want to Know Exactly Why You're Not Showing&nbsp;Up?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Our free visibility audit covers your Google Business Profile, local rankings, website performance, and review presence. We'll show you what's holding you back and what to fix&nbsp;first.
                </p>
                <a
                  href="/resources/free-visibility-audit"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-full hover:bg-primary/90 transition-colors"
                >
                  Get Your Free Audit <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Sidebar (30%) */}
            <BlogSidebar />
          </div>
        </div>
      </section>
    </Layout>
  );
}
