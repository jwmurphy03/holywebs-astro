import { Helmet } from "react-helmet-async";

import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogSidebar from "@/components/BlogSidebar";

export default function GoogleBusinessProfileTips() {
  return (
    <Layout>
      <Helmet>
        <title>Google Business Profile Tips That Actually Work | Holy Webs</title>
        <meta
          name="description"
          content="Practical Google Business Profile optimizations that improve your local visibility fast — no technical skills required. A guide for local service businesses."
        />
        <link rel="canonical" href="https://holywebs.com/resources/blog/google-business-profile-tips" />
      </Helmet>

      {/* Dark navy hero */}
      <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/resources/blog" }, { label: "GBP Tips" }]} />
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Local&nbsp;SEO</span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/40 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> 4 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-foreground leading-tight mb-6">
            Google Business Profile Tips That Actually&nbsp;Work
          </h1>
          <div className="flex items-center gap-4 text-white/50 text-sm">
            <span>By <strong className="text-white/70">Holy Webs Team</strong></span>
            <span>•</span>
            <span>Published Jan 22, 2025</span>
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
                  When someone searches "<a href="/industries/plumbing" className="text-primary">plumber</a> near me" or "<a href="/industries/hvac" className="text-primary">HVAC</a> repair in [City]," Google doesn't just show a list of websites. It shows the Map Pack — those three local businesses pinned to the top with reviews, hours, and a phone number ready to tap. Getting into that Map Pack starts with one thing: a well-optimized Google Business&nbsp;Profile.
                </p>
                <p>
                  The problem is that most profiles are half-finished. A business name, an address, maybe a phone number — and that's it. Google rewards profiles that are complete, active, and relevant. Here's what actually moves the&nbsp;needle.
                </p>

                <h2>1. Complete Every Single&nbsp;Field</h2>
                <p>
                  This sounds basic, but it's where most businesses fall short. Google uses the information in your profile to match you with relevant searches. If your profile is missing service categories, a business description, service areas, or hours of operation — you're invisible for searches you should be showing up&nbsp;for.
                </p>
                <p>
                  Go through every section: primary and secondary categories, services offered, products (if applicable), business attributes, the "from the business" description, and your service area. Fill in everything. Be specific.
                </p>
                <blockquote>
                  <strong>Pro tip:</strong> Your primary category has the biggest impact on what searches you appear in. Choose the one that best represents your core service. Use secondary categories for everything&nbsp;else.
                </blockquote>

                <h2>2. Post Weekly&nbsp;Updates</h2>
                <p>
                  Google Business Profile has a built-in posting feature that most businesses ignore entirely. These posts show up directly on your profile in search results and on Google Maps. They signal to Google that your business is active.
                </p>
                <p>
                  You don't need to write essays. A quick update about a recent job, a seasonal tip, a promotion, or a before-and-after photo works perfectly. The key is consistency — one post per week keeps your profile fresh.
                </p>
                <blockquote>
                  <strong>What to post:</strong> Completed projects with photos, seasonal service reminders, limited-time offers, tips your customers would find useful, or community involvement&nbsp;highlights.
                </blockquote>

                <h2>3. Get Reviews — and Respond to Every&nbsp;One</h2>
                <p>
                  Reviews are the single most influential factor in local search rankings after your profile completeness. More importantly, they're what convinces a potential customer to call you instead of the competitor listed right below&nbsp;you.
                </p>
                <p>
                  The businesses that consistently generate reviews aren't doing anything complicated. They simply ask at the right moment — right after a job is completed and the customer is happy.
                </p>
                <blockquote>
                  <strong>Pro tip:</strong> Create a short link to your review page and save it in your phone. After every completed job, send the customer a quick text: "Thanks for choosing us! If you have a minute, a Google review would mean a lot."
                </blockquote>

                <h2>4. Add Photos — Real&nbsp;Ones</h2>
                <p>
                  Businesses with photos get 42% more requests for directions and 35% more clicks to their website, according to Google's own data. But not just any photos — real photos of your team on a job site, before-and-after shots, your trucks, your equipment.
                </p>
                <p>
                  Aim to add at least one new photo per week. Over time, this builds a visual portfolio that tells your story better than any description ever&nbsp;could.
                </p>

                <h2>5. Use the Q&A Section Before Your Customers&nbsp;Do</h2>
                <p>
                  The Q&A section on your Google Business Profile is public — anyone can ask a question, and anyone can answer it. Take control by seeding it yourself with your most common questions.
                </p>
                <blockquote>
                  <strong>Pro tip:</strong> Check your Q&A section monthly. Answer any new questions promptly, and flag anything inaccurate or&nbsp;spammy.
                </blockquote>

                <h2>6. Keep Your Information Consistent&nbsp;Everywhere</h2>
                <p>
                  Google cross-references your business information across the web. If your name, address, and phone number (NAP) are different on your website, Facebook, Yelp, and your GBP — Google gets confused. And when Google is confused, it's less likely to show you in search&nbsp;results.
                </p>
                <p>
                  <strong>The fix:</strong> Search your business name on Google and check every listing that appears. Update anything that doesn't match your GBP exactly.
                </p>

                <h2>7. Track What's Working with GBP&nbsp;Insights</h2>
                <p>
                  Google gives you free analytics through the "Insights" section of your profile. You can see how many people found your business through search vs. maps, what search terms they used, how many people called directly from your profile, and how many requested&nbsp;directions.
                </p>
                <p>
                  Review these numbers monthly. They'll tell you whether your optimizations are working and where your customers are coming&nbsp;from.
                </p>

                <h2>The Bottom&nbsp;Line</h2>
                <p>
                  Your Google Business Profile isn't a one-time setup task — it's an ongoing marketing channel. The businesses that treat it like one consistently outrank their competitors in local search, generate more calls, and build stronger trust with potential&nbsp;customers.
                </p>
                <p>
                  Most of these optimizations take less than 30 minutes per week. The returns, however, compound over&nbsp;time.
                </p>

                {/* Internal link to pillar guide */}
                <div className="mt-8 p-6 bg-muted/50 rounded-lg border border-border/40">
                  <p className="text-sm text-muted-foreground mb-2">Want the complete step-by-step GBP optimization walkthrough?</p>
                  <a
                    href="/resources/google-business-profile-guide"
                    className="text-primary font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read our Google Business Profile Optimization Guide <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>

              {/* CTA banner */}
              <div className="mt-12 bg-muted rounded-xl p-8 text-center">
                <h2 className="text-2xl font-extrabold text-foreground mb-3">
                  Not Sure How Your GBP Stacks&nbsp;Up?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  We'll review your Google Business Profile as part of our free visibility audit — and show you exactly what to fix&nbsp;first.
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
