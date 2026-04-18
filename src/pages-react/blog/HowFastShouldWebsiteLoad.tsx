import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogSidebar from "@/components/BlogSidebar";

export default function HowFastShouldWebsiteLoad() {
  return (
    <Layout>
      <Helmet>
        <title>How Fast Should Your Website Load? | Holy Webs</title>
        <meta
          name="description"
          content="Page speed affects your Google rankings, your conversion rate, and your credibility. Here's what local service businesses should aim for and how to get there."
        />
        <link rel="canonical" href="https://holywebs.com/resources/blog/how-fast-should-website-load" />
      </Helmet>

      <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/resources/blog" }, { label: "How Fast Should Your Website Load?" }]} />
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Web&nbsp;Design</span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/40 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> 4 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-foreground leading-tight mb-6">
            How Fast Should Your Website&nbsp;Load?
          </h1>
          <div className="flex items-center gap-4 text-white/50 text-sm">
            <span>By <strong className="text-white/70">Holy Webs Team</strong></span>
            <span>•</span>
            <span>Published Mar 18, 2025</span>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-[70%]">
              <article className="blog-article">
                <p className="text-lg leading-relaxed mb-8">
                  Your website might be costing you customers before they even see what you offer. If your pages take more than a few seconds to load, a significant percentage of visitors will leave before anything appears on screen. They won't call. They won't fill out your form. They'll hit the back button and call the next company on the&nbsp;list.
                </p>
                <p>
                  Page speed isn't a vanity metric. It directly impacts your Google rankings, your conversion rates, and how professional your business appears online. And for local service businesses where every lead counts, a slow website is a leak in the bucket that never gets&nbsp;patched.
                </p>

                <h2>What "Fast" Actually&nbsp;Means</h2>
                <p>
                  Google measures page speed using a set of metrics called Core Web Vitals. The three that matter most are Largest Contentful Paint (LCP), which measures how quickly the main content loads; First Input Delay (FID), which measures how quickly the page responds when someone interacts with it; and Cumulative Layout Shift (CLS), which measures how much the page elements jump around while&nbsp;loading.
                </p>
                <p>
                  For most local service websites, the target is straightforward. Your main content should be visible within 2.5 seconds. The page should respond to clicks within 100 milliseconds. And the layout shouldn't shift around while the visitor is trying to tap your phone&nbsp;number.
                </p>
                <blockquote>
                  <strong>The benchmark:</strong> If your site loads in under 2.5 seconds on mobile, you're in good shape. Under 1.5 seconds and you're ahead of most competitors. Over 4 seconds? You're losing&nbsp;people.
                </blockquote>

                <h2>Why Mobile Speed Matters&nbsp;Most</h2>
                <p>
                  Over 60% of local searches happen on mobile devices. Someone's AC goes out on a Saturday afternoon and they grab their phone, not their laptop. If your site takes 6 seconds to load on a 4G connection, that person has already called your competitor by the time your homepage finishes&nbsp;rendering.
                </p>
                <p>
                  Google also uses the mobile version of your site as the primary version for ranking purposes. So even if your desktop site loads quickly, a sluggish mobile experience will drag down your search visibility across the&nbsp;board.
                </p>

                <h2>What Slows Most Service Business Websites&nbsp;Down</h2>
                <p>
                  The culprits are usually the same. Oversized images that were never compressed. Cheap hosting on a shared server with hundreds of other sites. Bloated page builders that load dozens of scripts and stylesheets whether the page needs them or not. And third-party widgets, chat bubbles, and tracking scripts that pile up over time like clutter in a&nbsp;garage.
                </p>
                <p>
                  Most of these issues are fixable without rebuilding the entire site. But they require someone who knows where to look and what to prioritize. Because not every speed optimization delivers the same return. Compressing your hero image might save 2 seconds. Switching to a faster host might save another second. Removing three unused plugins might save half a second. The key is knowing which fixes will have the biggest&nbsp;impact.
                </p>

                <h2>How to Check Your Site Speed Right&nbsp;Now</h2>
                <p>
                  Google offers a free tool called PageSpeed Insights. Go to <strong>pagespeed.web.dev</strong>, type in your URL, and run the test. It will give you a score from 0 to 100 for both mobile and desktop, along with specific recommendations for what to&nbsp;fix.
                </p>
                <p>
                  Don't panic if your mobile score is low. Most service business websites score between 30 and 60 on mobile, which means there's significant room for improvement. A score of 90 or above is excellent. Anything below 50 means you're likely losing leads to slow load&nbsp;times.
                </p>

                <h2>The Speed and Ranking&nbsp;Connection</h2>
                <p>
                  Google has been transparent about the fact that page speed is a ranking factor. It's not the only one, and a fast site alone won't put you at the top of search results. But when two businesses offer similar services in the same area with comparable SEO profiles, the faster site has an&nbsp;edge.
                </p>
                <p>
                  More importantly, speed affects the metrics that Google watches closely. Bounce rate, time on site, pages per session. A slow site increases bounces and decreases engagement, which sends negative signals to Google about the quality of your page. So the speed problem compounds. It hurts you directly through Core Web Vitals and indirectly through worse user&nbsp;behavior.
                </p>

                <h2>Quick Wins You Can Implement&nbsp;Today</h2>
                <p>
                  <strong>Compress your images.</strong> Use a tool like TinyPNG or ShortPixel to reduce file sizes without visible quality loss. This alone can cut load times&nbsp;dramatically.
                </p>
                <p>
                  <strong>Enable browser caching.</strong> This tells returning visitors' browsers to store certain files locally so the site loads faster on subsequent&nbsp;visits.
                </p>
                <p>
                  <strong>Remove unused plugins and scripts.</strong> Every plugin and third-party script adds weight to your pages. If you're not actively using it, remove&nbsp;it.
                </p>
                <p>
                  <strong>Upgrade your hosting.</strong> If you're on a $5/month shared hosting plan, your site is sharing resources with hundreds of other websites. Upgrading to a quality managed host can shave seconds off your load&nbsp;time.
                </p>

                <h2>The Bottom&nbsp;Line</h2>
                <p>
                  A fast website isn't a luxury. For local service businesses competing for every lead, it's a requirement. Every second of load time you shave off translates to more visitors staying on your site, more of those visitors converting into leads, and better visibility in search&nbsp;results.
                </p>
                <p>
                  The best part? Most speed improvements are one-time fixes that keep paying dividends for as long as your site is live. It's one of the highest-ROI investments you can make in your online&nbsp;presence.
                </p>
              </article>

              <div className="mt-12 bg-muted rounded-xl p-8 text-center">
                <h2 className="text-2xl font-extrabold text-foreground mb-3">
                  How Fast Is Your Site&nbsp;Really?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Our free visibility audit includes a full speed analysis with specific recommendations to improve your load times and rankings.
                </p>
                <Link
                  to="/resources/free-visibility-audit"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-full hover:bg-primary/90 transition-colors"
                >
                  Get Your Free Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <BlogSidebar />
          </div>
        </div>
      </section>
    </Layout>
  );
}
