import { Helmet } from "react-helmet-async";

import { Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogSidebar from "@/components/BlogSidebar";

export default function ConstructionNotShowingOnGoogle() {
  return (
    <Layout>
      <Helmet>
        <title>Why Your Construction Company Isn't Showing Up on Google | Holy Webs</title>
        <meta
          name="description"
          content="Most general contractors and custom home builders are invisible on Google Maps — not because they lack credibility, but because their GBP and website aren't built to rank. Here's what to fix."
        />
        <meta name="keywords" content="construction company not showing up on Google, general contractor SEO problems, custom home builder Google ranking, contractor local search visibility" />
        <link rel="canonical" href="https://holywebs.com/resources/blog/construction-not-showing-on-google/" />
      </Helmet>

      {/* Dark navy hero */}
      <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/resources/blog" }, { label: "Construction Not Showing on Google" }]} />
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Construction&nbsp;Marketing</span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/40 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> 7 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-foreground leading-tight mb-6">
            The Real Reason Your Construction Company Isn't Showing Up on&nbsp;Google
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
                  A homeowner planning a $400,000 addition doesn't call the first contractor they see at a job site. They spend weeks on Google — reading reviews, looking at project photos, comparing companies — before they contact anyone. By the time they reach out, they've usually already decided on a short list. If your construction company isn't showing up in those searches, you're not even being considered for some of the highest-value projects in your&nbsp;market.
                </p>
                <p>
                  Construction differs from emergency-driven trades. The search intent is research-heavy and the sales cycle is longer, but the same fundamental visibility problems apply: an incomplete Google Business Profile, a website without geographic or project-type content, and a thin review profile. The difference is that in construction, every one of those invisible lost leads represents a project worth tens or hundreds of thousands of&nbsp;dollars.
                </p>

                <h2>The Three Most Common Reasons Construction Companies Don't Show Up on&nbsp;Google</h2>
                <p>
                  Google's local algorithm weighs <strong>relevance</strong> (does your online presence match what the searcher is looking for?), <strong>distance</strong> (how close is your business to the searcher?), and <strong>prominence</strong> (how well-known and trusted is your business online?). For construction companies, relevance and prominence are the two most common failure&nbsp;points.
                </p>

                <h2>Reason 1: Your GBP Primary Category and Service List Are Too&nbsp;Generic</h2>
                <p>
                  Your <a href="/services/google-business-profile" className="text-primary">Google Business Profile</a> is the foundation of your local search presence. For most construction companies, "General Contractor" is the right primary category — but the service list is where the real problem&nbsp;lives.
                </p>
                <p>
                  Most construction GBPs say "General Contractor" and list one or two services, or nothing at all. That tells Google almost nothing about the specific types of work you do. A homeowner searching "custom home builder near me" is looking for something different from one searching "commercial general contractor Charleston SC" — and Google's algorithm tries to match them to businesses whose profiles reflect that&nbsp;specificity.
                </p>
                <p>
                  A complete construction GBP service list should break down every project type you offer:
                </p>
                <ul>
                  <li>Custom home building</li>
                  <li>Home additions</li>
                  <li>Kitchen remodeling</li>
                  <li>Bathroom remodeling</li>
                  <li>Commercial build-outs</li>
                  <li>Historic renovation</li>
                  <li>Structural work and repairs</li>
                  <li>Decks and outdoor living spaces</li>
                  <li>Accessory dwelling units (ADUs)</li>
                  <li>New construction project management</li>
                </ul>
                <blockquote>
                  <strong>Quick check:</strong> Log into your GBP, click "Edit Profile," then "Services." If you have fewer than eight services listed, you're invisible for a significant portion of construction searches in your area — including some of the highest-value project&nbsp;types.
                </blockquote>
                <p>
                  For a full breakdown of every GBP optimization step, see our <a href="/resources/blog/google-business-profile-tips" className="text-primary">Google Business Profile tips</a>.
                </p>

                <h2>Reason 2: Your Website Treats All Services as One&nbsp;Page</h2>
                <p>
                  A "Services" page with a bullet list of everything you do looks clean, but it can't rank for anything specific. A single page can't simultaneously rank for "custom home builder Charleston SC" and "commercial general contractor Houston" and "historic renovation contractor near me" — those are different searches, different intents, and Google needs to see dedicated pages for&nbsp;each.
                </p>
                <p>
                  This is the most common website problem we see with construction companies: everything is on one or two pages, with no geographic signals and no project-type-specific content. A homeowner planning a kitchen remodel is searching for a kitchen remodeling contractor — not a general contractor whose website mentions "kitchen remodeling" in a bullet point on the services&nbsp;page.
                </p>

                <h3>What to&nbsp;Fix</h3>
                <ul>
                  <li><strong>Dedicated pages per project type:</strong> Custom home building, additions, kitchen remodels, commercial work — each deserves its own page with title tag, meta description, and content specific to that service.</li>
                  <li><strong>Geographic pages per service area:</strong> A page for "General Contractor in [City]" with content specific to that market will rank for searches in that city. A generic "Service Areas" list won't.</li>
                  <li><strong>Service + location combinations in headings and title tags:</strong> "Custom Home Builder in Charleston SC" is a specific, rankable phrase. "Custom Homes" is&nbsp;not.</li>
                  <li><strong>Portfolio pages with project details:</strong> Past projects with photos, square footage, neighborhood, and project description give Google more content to rank and give homeowners more reason to trust&nbsp;you.</li>
                </ul>
                <p>
                  A <a href="/services/web-design" className="text-primary">well-built contractor website</a> structures all of this from the ground up. If your current site has one page for services and no geographic content, it's a structural problem that needs to be rebuilt — not patched.
                </p>

                <h2>Reason 3: You Have Almost No Reviews Because No One&nbsp;Asks</h2>
                <p>
                  Construction clients are often the most satisfied customers any contractor will ever have — a homeowner who just watched their dream home come to life or finally got the addition they've been planning for a decade is genuinely thrilled. They will absolutely leave you a glowing review. But the project took 8 months, the punch list just wrapped up, everyone moved on, and no one ever sent them a link.
                </p>
                <p>
                  In most markets, general contractors and custom home builders have dramatically fewer Google reviews than trade contractors — even when their actual work is superior. Plumbers get reviewed after every service call. A construction company might complete four major projects in a year and ask for zero reviews.
                </p>
                <blockquote>
                  <strong>The fix:</strong> Ask within 2-3 weeks of project completion, while the client's satisfaction is freshest. Send a personal note with a direct link to your Google review page — not a generic automated message, but something specific to their project. A $400K addition client who loved working with you needs exactly one touchpoint to become a five-star review. Our <a href="/resources/online-reviews-reputation-guide" className="text-primary">reviews and reputation guide</a> walks through building a system that makes this&nbsp;consistent.
                </blockquote>
                <p>
                  Even adding four or five reviews per year from major projects will compound meaningfully over time — and in a category where most competitors have 10-20 reviews, a construction company with 50 or 60 stands out&nbsp;significantly.
                </p>

                <h2>The 15-Minute Self-Audit for Construction&nbsp;Companies</h2>
                <p>
                  Before you invest in marketing, run through this checklist. It takes about 15 minutes and will identify the specific gaps holding you back from the searches that matter&nbsp;most.
                </p>
                <ol>
                  <li><strong>Google your business name.</strong> Does a GBP listing appear on the right? Is it claimed? Are all fields filled&nbsp;out?</li>
                  <li><strong>Google "general contractor [your city]."</strong> Are you in the Map Pack? Anywhere on the first&nbsp;page?</li>
                  <li><strong>Google "custom home builder [your city]"</strong> (if applicable). Do you rank for your primary project type in your primary&nbsp;market?</li>
                  <li><strong>Count your Google reviews.</strong> How many do you have? Compare to the businesses showing in the Map Pack for your main keyword.</li>
                  <li><strong>Check your GBP service list.</strong> Does it list every project type you actually do, or just "General Contractor"?</li>
                  <li><strong>Check your website structure.</strong> Do you have individual pages for each service type — custom homes, additions, remodels — or one combined "Services"&nbsp;page?</li>
                  <li><strong>Check for city-specific pages.</strong> Does your site have individual pages for each market you serve, or a generic service areas&nbsp;list?</li>
                  <li><strong>Run your site through <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-primary">PageSpeed Insights</a>.</strong> Is your mobile score above&nbsp;70?</li>
                </ol>
                <p>
                  If you found issues in more than two of these areas, those are the specific gaps costing you high-value leads. Every one of them is fixable — and fixing them positions you for the long research cycles that construction buyers go through before they ever contact&nbsp;anyone.
                </p>

                <h2>What If You've Fixed These Things and Still Aren't&nbsp;Ranking?</h2>
                <p>
                  If your GBP is fully optimized, your website has project-type and geographic pages, and your reviews are growing — but you're still not ranking — a few deeper factors may be at&nbsp;play.
                </p>
                <ul>
                  <li><strong>Competition from established operators.</strong> In larger metros, general contractors with years of domain authority and backlink profiles built up over time are difficult to displace quickly. A sustained <a href="/services/seo" className="text-primary">local SEO strategy</a> — including backlinks, project case studies, and ongoing content — is typically required to compete at the top of the&nbsp;Map Pack.</li>
                  <li><strong>Website authority.</strong> A newer site or a recently redesigned site that lost its backlink profile will struggle to rank against established competitors. Authority takes 6-12 months to rebuild.</li>
                  <li><strong>NAP inconsistencies.</strong> If your business name, address, or phone number appear differently across your website, GBP, Yelp, BBB, and other directories, Google's confidence in your listing&nbsp;drops.</li>
                  <li><strong>Lack of content depth.</strong> A city page with 150 words won't outrank a competitor with a detailed, useful 800-word page about serving that specific market. Content quality matters in a research-heavy category like&nbsp;construction.</li>
                </ul>
                <p>
                  The construction companies consistently showing up in the Map Pack in competitive markets are investing in professional <a href="/industries/construction" className="text-primary">construction marketing</a> — because the technical depth and consistency required is genuinely hard to execute while managing active job sites and client&nbsp;relationships.
                </p>
                <p>
                  We work with general contractors and custom home builders in <a href="/locations/south-carolina/charleston/construction" className="text-primary">Charleston, SC</a> and <a href="/locations/texas/houston/construction" className="text-primary">Houston, TX</a> — markets where the project values are high and being visible on Google before a competitor gets the call matters&nbsp;enormously.
                </p>

                <h2>The Bottom&nbsp;Line</h2>
                <p>
                  If your construction company isn't showing up on Google, it isn't because you lack credibility or experience. It's almost always because your Google Business Profile doesn't reflect the full scope of your work, your website can't rank for specific project types or geographic searches, and your review profile is too thin to compete. Fix those three things and you'll capture the research-phase leads that are currently going to competitors who did this work before&nbsp;you.
                </p>
                <p>
                  In a category where a single invisible lead could represent a $500,000 project, the cost of not ranking isn't abstract. It shows up in your pipeline.
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
