import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogSidebar from "@/components/BlogSidebar";

export default function AgencyWastingMoney() {
  return (
    <Layout>
      <Helmet>
        <title>5 Signs Your Marketing Agency Is Wasting Your Money | Holy Webs</title>
        <meta
          name="description"
          content="Paying for marketing but can't point to a single new customer it brought in? Here are five warning signs your agency isn't delivering real results."
        />
        <link rel="canonical" href="https://holywebs.com/resources/blog/signs-marketing-agency-wasting-money" />
      </Helmet>

      <section className="section-dark py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <Breadcrumbs items={[{ label: "Blog", href: "/resources/blog" }, { label: "Is Your Agency Wasting Money?" }]} />
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Strategy</span>
            <span className="text-white/40 text-xs">•</span>
            <span className="text-white/40 text-xs flex items-center gap-1">
              <Clock className="w-3 h-3" /> 5 min read
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-foreground leading-tight mb-6">
            5 Signs Your Marketing Agency Is Wasting Your&nbsp;Money
          </h1>
          <div className="flex items-center gap-4 text-white/50 text-sm">
            <span>By <strong className="text-white/70">Holy Webs Team</strong></span>
            <span>•</span>
            <span>Published Mar 4, 2025</span>
          </div>
        </div>
      </section>

      <section className="bg-background py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-[70%]">
              <article className="blog-article">
                <p className="text-lg leading-relaxed mb-8">
                  You signed the contract. You're paying the monthly retainer. And every month you get a report full of numbers that look impressive but don't seem to translate into anything you can actually measure at the register. Sound familiar? You're not alone. A lot of local service businesses find themselves stuck in marketing contracts that feel more like a subscription to confusion than a growth&nbsp;engine.
                </p>
                <p>
                  Here are five signs that your marketing partner might not be delivering what they promised.
                </p>

                <h2>1. You Can't Track a Single Lead Back to Their&nbsp;Work</h2>
                <p>
                  This is the most fundamental test. If you're paying someone $1,500 or $3,000 a month for marketing and you can't point to a single phone call, form submission, or booked job that came from their efforts, something is wrong. Good marketing produces measurable&nbsp;results.
                </p>
                <p>
                  That doesn't mean every campaign hits a home run on month one. Building organic visibility takes time. But even in the early stages, a competent agency should be able to show you leading indicators: traffic increases, ranking improvements, click-through rate gains, or conversion rate changes. If all you're getting is a PDF with vanity metrics like "impressions" and "reach" with no connection to actual business outcomes, that's a red&nbsp;flag.
                </p>
                <blockquote>
                  <strong>Ask this question:</strong> "Can you show me exactly how many leads we received from your work last month, and what those leads cost&nbsp;us?"
                </blockquote>

                <h2>2. They Don't Know Your&nbsp;Business</h2>
                <p>
                  Does your agency understand what a service call looks like for your business? Do they know your average ticket size? Do they know which services are most profitable versus which ones you'd rather not market? If they can't answer these questions, they're running a generic playbook. And generic playbooks produce generic&nbsp;results.
                </p>
                <p>
                  The best marketing agencies for local businesses take time to learn your operations, your margins, your seasonal patterns, and your competitive landscape. They should be asking you questions, not just sending you invoices. If your agency treats you like an account number instead of a partnership, the quality of work will reflect&nbsp;that.
                </p>

                <h2>3. Your Website Hasn't Changed in&nbsp;Months</h2>
                <p>
                  If your agency is supposedly doing SEO or running ads and your website hasn't been touched in three months, ask why. Effective digital marketing requires ongoing adjustments. Landing pages need testing. Content needs updating. Technical issues need fixing. A website that sits untouched isn't being&nbsp;optimized.
                </p>
                <p>
                  Some agencies will tell you they're "working behind the scenes" on link building or content strategy. That can be legitimate. But you should be seeing evidence of that work. New blog posts, updated service pages, improved page speed, fixed broken links. If nothing visible is changing and the results aren't improving, the work probably isn't&nbsp;happening.
                </p>

                <h2>4. They Lock You Into Long Contracts with No Performance&nbsp;Benchmarks</h2>
                <p>
                  Twelve-month contracts with no exit clause and no performance guarantees are a massive warning sign. A confident agency doesn't need to trap you. They keep clients because the results speak for themselves. If the only thing keeping you in the relationship is a contract rather than actual performance, that tells you everything you need to&nbsp;know.
                </p>
                <p>
                  Reasonable agreements exist. A 3-month initial commitment while SEO builds momentum makes sense. But that commitment should come with clear benchmarks: "By month three, we expect to see X improvement in rankings and Y increase in organic traffic." If your agency won't commit to benchmarks, ask yourself why.
                </p>

                <h2>5. They Disappear Between&nbsp;Reports</h2>
                <p>
                  Communication is the first thing that slips when an agency is overextended or disengaged. If you can't get your account manager on the phone, if emails take days to get a response, or if the only time you hear from them is when the monthly report lands in your inbox, that's a&nbsp;problem.
                </p>
                <p>
                  Your marketing partner should be proactively reaching out with ideas, updates, and strategic recommendations. They should be responsive when you have questions. And they should make you feel like your business matters to them. Because if it doesn't, the work will reflect that&nbsp;indifference.
                </p>

                <h2>What to Do If This Sounds Like Your&nbsp;Situation</h2>
                <p>
                  First, don't panic. A bad agency experience doesn't mean marketing doesn't work for your business. It means you had the wrong partner. The right approach with the right team can produce dramatic results for local service&nbsp;businesses.
                </p>
                <p>
                  Start by requesting a clear breakdown of what your current agency has actually done over the past 90 days. Not what they plan to do. What they've done. If they can't produce that list, you have your answer.
                </p>
                <p>
                  Then get a second opinion. An outside audit of your website, your Google Business Profile, and your current ad performance will show you exactly where you stand and where the gaps are. It's the fastest way to cut through the noise and figure out whether your current investment is working or if it's time to make a&nbsp;change.
                </p>
              </article>

              <div className="mt-12 bg-muted rounded-xl p-8 text-center">
                <h2 className="text-2xl font-extrabold text-foreground mb-3">
                  Want a Second Opinion on Your&nbsp;Marketing?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  Our free visibility audit gives you an honest look at how your online presence stacks up, with zero obligation and zero&nbsp;sales&nbsp;pressure.
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
