import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogSidebar from "@/components/BlogSidebar";

export default function ContractorWebsiteNotConverting() {
  return (
    <Layout>
      <Helmet>
        <title>Why Your Contractor Website Gets Traffic But No Calls | Holy Webs</title>
        <meta
          name="description"
          content="Your contractor website is getting visitors but the phone isn't ringing. Here are the five most common reasons home service websites fail to convert traffic into leads."
        />
        <link rel="canonical" href="https://holywebs.com/resources/blog/contractor-website-not-converting" />
        <meta property="og:title" content="Why Your Contractor Website Gets Traffic But No Calls" />
        <meta property="og:description" content="Your contractor website is getting visitors but the phone isn't ringing. Here are the five most common conversion killers and how to fix each one." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://holywebs.com/resources/blog/contractor-website-not-converting" />
      </Helmet>

      {/* Dark navy hero */}
      <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/resources/blog" }, { label: "Contractor Website Not Converting" }]} />
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Web&nbsp;Design</span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/40 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> 9 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-foreground leading-tight mb-6">
            Why Your Contractor Website Gets Traffic But No&nbsp;Calls (And How to Fix&nbsp;It)
          </h1>
          <div className="flex items-center gap-4 text-white/50 text-sm">
            <span>By <strong className="text-white/70">Holy Webs Team</strong></span>
            <span>•</span>
            <span>Published Apr 16, 2026</span>
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
                  You paid for a website. Maybe you even paid for SEO or Google Ads to drive traffic to it. The analytics say people are visiting. But the phone isn't ringing. The contact form sits empty. And you're left wondering whether any of this online marketing stuff actually&nbsp;works.
                </p>
                <p>
                  Here's the uncomfortable truth: getting traffic to your website and getting leads from your website are two completely different problems. Traffic means people are finding you. Leads mean those people are convinced enough to pick up the phone or fill out a&nbsp;form.
                </p>
                <p>
                  The gap between the two is where most contractor websites fail. And the fix is almost never "get more traffic." The fix is almost always about what happens after someone lands on your&nbsp;site.
                </p>

                <h2>The Gap Between Traffic and&nbsp;Leads</h2>
                <p>
                  Think about how a homeowner actually searches for a contractor. They type something like "plumber near me" or "HVAC repair in Houston" into Google. They click a few results. They look at each site for maybe five to ten seconds before deciding whether to call or hit the back&nbsp;button.
                </p>
                <p>
                  That's your window. Five to ten seconds. If your site doesn't immediately answer three questions&nbsp;&mdash;&nbsp;What do you do? Where do you do it? How do I contact you?&nbsp;&mdash;&nbsp;you've already lost&nbsp;them.
                </p>
                <p>
                  Traffic is a volume problem. Conversion is a clarity problem. You can have 500 visitors a month and generate more leads than a competitor with 2,000 visitors, simply because your website makes it obvious what to do&nbsp;next.
                </p>

                <h2>The 5 Most Common Reasons Contractor Websites Don't&nbsp;Convert</h2>
                <p>
                  After auditing hundreds of contractor websites across HVAC, plumbing, roofing, electrical, and landscaping businesses, the same five problems come up again and&nbsp;again.
                </p>

                <h3>1. No Clear Call to&nbsp;Action</h3>
                <p>
                  This is the single most common issue. A contractor invests in a website that looks decent, but there's no obvious next step for the visitor. The phone number is buried in the footer. The contact form is on a separate page. There's no "Call Now" button anywhere above the&nbsp;fold.
                </p>
                <p>
                  Your visitors aren't browsing for fun. They have a broken AC unit or a leaking pipe. They want to call someone right now. If you make them scroll, search, or think about how to reach you, they'll move on to the contractor who made it&nbsp;easy.
                </p>
                <blockquote>
                  <p>
                    <strong>The fix:</strong> Put a clickable phone number and a short contact form in the hero section of every page. On mobile, add a sticky "Call Now" button that stays visible as they scroll. Make the CTA button large, high-contrast, and impossible to&nbsp;miss.
                  </p>
                </blockquote>

                <h3>2. Slow Page Load&nbsp;Time</h3>
                <p>
                  Page speed is one of those things that doesn't seem important until you see the data. Google's own research shows that if your page takes more than three seconds to load, over half your visitors will leave before the page even finishes&nbsp;rendering.
                </p>
                <p>
                  For contractor websites, the usual culprits are oversized images (that 4MB hero photo of your truck), bloated page builders like Wix or Squarespace loading dozens of unnecessary scripts, cheap shared hosting, and too many third-party widgets stacking&nbsp;up.
                </p>
                <p>
                  Speed isn't just a user experience issue. It's a <Link to="/services/seo" className="text-primary">ranking factor</Link>. Google explicitly uses Core Web Vitals as part of its algorithm. A slow site loses twice: once to bouncing visitors, and once to lower search&nbsp;rankings.
                </p>
                <blockquote>
                  <p>
                    <strong>The fix:</strong> Compress all images to WebP format. Remove any plugins or scripts you aren't actively using. Upgrade to quality hosting. Run your site through <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-primary">Google PageSpeed Insights</a> and aim for a score above 80 on&nbsp;mobile.
                  </p>
                </blockquote>

                <h3>3. No Trust&nbsp;Signals</h3>
                <p>
                  Homeowners are cautious about who they let into their home. Before they call, they're looking for proof that you're legitimate, experienced, and reliable. A website with no reviews, no photos of real work, no license numbers, and no team photos feels like a&nbsp;gamble.
                </p>
                <p>
                  This is especially true for higher-ticket services. A homeowner considering a $15,000 roof replacement or a $10,000 HVAC installation isn't going to call a company whose website feels thin or&nbsp;anonymous.
                </p>
                <blockquote>
                  <p>
                    <strong>The fix:</strong> Display your Google reviews prominently on every page (not just a link, but actual star ratings and snippets). Add real photos of your team and completed jobs. Include your license number, insurance information, and years in business. Show logos of any certifications or manufacturer partnerships. Every trust signal reduces the friction between "maybe" and "I'll&nbsp;call."
                  </p>
                </blockquote>

                <h3>4. Weak Mobile&nbsp;Experience</h3>
                <p>
                  Over 60% of local service searches happen on a smartphone. For emergency services like plumbing and HVAC, that number is even higher. If your website doesn't work flawlessly on a phone, you're losing the majority of your potential&nbsp;leads.
                </p>
                <p>
                  "Works on mobile" doesn't just mean the layout is responsive. It means a homeowner can tap your phone number and call instantly. It means the contact form is easy to fill out with a thumb. It means the page loads fast on a cellular connection. It means nothing is cut off, overlapping, or too small to&nbsp;read.
                </p>
                <blockquote>
                  <p>
                    <strong>The fix:</strong> Open your website on your own phone right now. Try to complete every action a customer would take. If anything feels clunky, slow, or frustrating, it needs to be rebuilt with a <Link to="/services/web-design" className="text-primary">mobile-first approach</Link>.
                  </p>
                </blockquote>

                <h3>5. No Phone Number Above the&nbsp;Fold</h3>
                <p>
                  This deserves its own section because it's that important. The phone number is the single most valuable element on a contractor's website. It should be visible without scrolling on every single page, on every device. Not just on the contact page. Not just in the&nbsp;header.
                </p>
                <p>
                  The best-converting contractor websites we've built display the phone number in three places: the sticky header, the hero section CTA, and a floating mobile button. Redundancy isn't a design flaw here. It's a conversion&nbsp;strategy.
                </p>
                <blockquote>
                  <p>
                    <strong>The fix:</strong> Add your phone number as a clickable <code>tel:</code> link in your site header, your hero section, and as a sticky mobile element. If you use a tracking number for analytics, make sure it forwards correctly and displays a local area&nbsp;code.
                  </p>
                </blockquote>

                <h2>What a Converting Contractor Website Actually Looks&nbsp;Like</h2>
                <p>
                  A website that converts traffic into calls isn't about fancy design or expensive features. It's about clarity and confidence. Here's what the best-performing contractor websites have in&nbsp;common:
                </p>
                <ul>
                  <li><strong>A headline that says what you do and where you do it.</strong> Not "Welcome to Smith Plumbing." Instead: "Fast, Reliable Plumbing in Houston. Call for Same-Day&nbsp;Service."</li>
                  <li><strong>A prominent phone number and contact form above the fold.</strong> Visible within three seconds of the page loading, on desktop and&nbsp;mobile.</li>
                  <li><strong>Social proof within the first scroll.</strong> Google review stars, a customer testimonial, a "Rated 4.9 stars from 200+ reviews"&nbsp;badge.</li>
                  <li><strong>Dedicated pages for each service.</strong> Not a single "Services" page with bullet points, but individual pages for "AC Repair," "Water Heater Installation," "Emergency Plumbing" that target specific search&nbsp;queries.</li>
                  <li><strong>Fast load time.</strong> Under two seconds on mobile. Compressed images. Clean code. No unnecessary&nbsp;bloat.</li>
                  <li><strong>A clear service area.</strong> Homeowners want to know you serve their specific city or neighborhood before they&nbsp;call.</li>
                </ul>
                <p>
                  None of these elements require a massive budget. They require intentional design decisions made by someone who understands how local customers actually search and make&nbsp;decisions.
                </p>

                <h2>The 10-Minute Self-Audit Every Contractor Should&nbsp;Do</h2>
                <p>
                  Before you hire anyone or spend another dollar on advertising, run through this quick audit on your own&nbsp;website:
                </p>
                <ol>
                  <li><strong>Open your website on your phone.</strong> Can you see your phone number without scrolling? Can you tap it to&nbsp;call?</li>
                  <li><strong>Time the page load.</strong> Use <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer" className="text-primary">PageSpeed Insights</a>. Is your mobile score above&nbsp;70?</li>
                  <li><strong>Read your headline.</strong> Does it mention your service and your city? Or does it say something generic like "Quality You Can&nbsp;Trust"?</li>
                  <li><strong>Look for reviews.</strong> Are your Google reviews displayed on the homepage? Or do visitors have to leave your site to find&nbsp;them?</li>
                  <li><strong>Check your service pages.</strong> Do you have individual pages for each service, or is everything crammed onto one&nbsp;page?</li>
                  <li><strong>Find the contact form.</strong> How many clicks does it take to reach it from the homepage? If it's more than one, that's too&nbsp;many.</li>
                  <li><strong>Look at your photos.</strong> Are they real photos of your team and work, or generic stock&nbsp;images?</li>
                  <li><strong>Check your Google Business Profile.</strong> Does your <Link to="/services/google-business-profile" className="text-primary">GBP listing</Link> link to the correct page on your&nbsp;website?</li>
                </ol>
                <p>
                  If you answered "no" to more than two of these, your website is actively losing leads. The traffic isn't the problem. The site&nbsp;is.
                </p>

                <h2>Why More Traffic Won't Fix a Conversion&nbsp;Problem</h2>
                <p>
                  The most expensive mistake we see contractors make is pouring money into Google Ads or SEO before fixing their website's ability to convert. It's like turning up the water pressure on a hose full of&nbsp;holes.
                </p>
                <p>
                  If your website converts at 2% (meaning 2 out of every 100 visitors call or submit a form), sending 500 visitors a month gives you 10 leads. Double the traffic to 1,000 visitors and you get 20 leads. But if you fix the website first and raise the conversion rate to 5%, those same 500 visitors give you 25 leads. You've gained more leads without spending a single extra dollar on&nbsp;advertising.
                </p>
                <p>
                  Conversion optimization is the highest-ROI investment a contractor can make in their online&nbsp;presence. It makes every other marketing dollar work harder. It's also the thing most marketing agencies skip because it takes real thought and trade-specific experience to get&nbsp;right.
                </p>
                <p>
                  For a deeper look at what your website should include, read our full <Link to="/resources/website-guide-service-businesses" className="text-primary">Website Guide for Local Service&nbsp;Businesses</Link>.
                </p>

                <h2>The Bottom&nbsp;Line</h2>
                <p>
                  Your contractor website's job isn't to look pretty. It's to generate phone calls and form submissions from homeowners who need your services. If that isn't happening, the answer isn't more traffic. It's a better website built with conversion in&nbsp;mind.
                </p>
                <p>
                  The five fixes outlined above aren't complicated. They don't require a redesign from scratch. But they do require someone who understands how local service businesses actually win customers online, and who builds websites accordingly.
                </p>
              </article>

              {/* CTA banner */}
              <div className="mt-12 bg-muted rounded-xl p-8 text-center">
                <h2 className="text-2xl font-extrabold text-foreground mb-3">
                  Want to Know Exactly Where Your Website Is Losing&nbsp;Leads?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Our free visibility audit breaks down your website's speed, SEO, mobile experience, and conversion setup with specific recommendations you can act on&nbsp;today.
                </p>
                <Link
                  to="/resources/free-visibility-audit"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-full hover:bg-primary/90 transition-colors"
                >
                  Get Your Free Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Secondary CTA */}
              <div className="mt-6 text-center">
                <p className="text-muted-foreground text-sm">
                  Or join our next live workshop where we walk through contractor website audits in real&nbsp;time.{" "}
                  <Link to="/workshop" className="text-primary underline decoration-2 decoration-[#ecec13] hover:bg-[#ecec13] hover:text-foreground transition-colors font-medium">
                    Reserve your spot
                  </Link>
                </p>
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
