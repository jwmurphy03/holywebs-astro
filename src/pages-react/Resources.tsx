import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Eye, CheckSquare, BookOpen, ArrowRight, Download, FileText,
  MapPin, Star, TrendingUp, Smartphone,
  BarChart3, Lightbulb, Zap, Clock
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import GatedDownloadDialog from "@/components/GatedDownloadDialog";
const auditSample = "/assets/audit-report-sample.png";

const guides = [
  {
    icon: CheckSquare,
    title: "Local Marketing Checklist",
    desc: "10 things every local service business should have in place before spending a dime on ads. Covers GBP, reviews, website basics, and more.",
    tag: "Checklist",
    color: "text-emerald-500",
    pdfPath: "/local-marketing-checklist.pdf",
  },
  {
    icon: MapPin,
    title: "Google Business Profile Optimization Guide",
    desc: "Step-by-step instructions for claiming, verifying, and optimizing your GBP listing to rank in the Map Pack.",
    tag: "Guide",
    color: "text-blue-500",
    pdfPath: "/gbp-optimization-guide.pdf",
  },
  {
    icon: Star,
    title: "How to Get More Google Reviews",
    desc: "Proven strategies for generating consistent 5-star reviews without being pushy — including scripts and follow-up templates.",
    tag: "Guide",
    color: "text-blue-500",
    pdfPath: "/google-reviews-guide.pdf",
  },
];

const blogPosts = [
  {
    title: "Why Your Contractor Website Gets Traffic But No Calls",
    desc: "Your website is getting visitors but the phone isn't ringing. Here are the five most common conversion killers and how to fix each one.",
    category: "Web Design",
    readTime: "9 min read",
    icon: Smartphone,
    slug: "contractor-website-not-converting",
  },
  {
    title: "Google Business Profile Tips That Actually Work",
    desc: "Simple optimizations that can improve your local visibility fast — no technical skills required.",
    category: "GBP",
    readTime: "4 min read",
    icon: MapPin,
    slug: "google-business-profile-tips",
  },
  {
    title: "SEO vs. Google Ads: Which One Do You Need?",
    desc: "When to invest in organic search, when to run paid ads, and when you need both.",
    category: "Strategy",
    readTime: "6 min read",
    icon: TrendingUp,
    slug: "seo-vs-google-ads",
  },
  {
    title: "What Is AEO and Why Should You Care?",
    desc: "Answer Engine Optimization is changing how customers find local businesses. Here's what you need to know.",
    category: "SEO",
    readTime: "7 min read",
    icon: Lightbulb,
    slug: "what-is-aeo",
  },
  {
    title: "5 Signs Your Marketing Agency Is Wasting Your Money",
    desc: "If you're paying for marketing but can't point to a single new customer it brought in, read this.",
    category: "Strategy",
    readTime: "5 min read",
    icon: BarChart3,
    slug: "signs-marketing-agency-wasting-money",
  },
  {
    title: "How Fast Should Your Website Load?",
    desc: "Page speed affects your Google rankings, your conversion rate, and your credibility. Here's what to aim for.",
    category: "Web Design",
    readTime: "4 min read",
    icon: Zap,
    slug: "how-fast-should-website-load",
  },
];


export default function Resources() {
  const [downloadDialog, setDownloadDialog] = useState<{ open: boolean; title: string; pdfPath: string }>({
    open: false,
    title: "",
    pdfPath: "",
  });

  return (
    <Layout>
      <Helmet>
        <title>Free Marketing Resources for Contractors & Service Businesses | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Free SEO guides, marketing checklists, and tools built for contractors and local service businesses. Download resources to grow your online presence." />
        <link rel="canonical" href="https://holywebs.com/resources/" />
      </Helmet>
      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
          <div className="absolute bottom-10 left-20 w-96 h-96 rounded-full bg-primary/50 blur-[150px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-4xl">
          <p className="text-primary font-semibold mb-4 tracking-wide uppercase text-sm">Resources</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6 leading-tight">
            Free Tools, Guides & Insights for Local Business&nbsp;Owners
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
            Practical resources to help you understand your market, fix what's not working, and actually grow your business online.
          </p>
        </div>
      </section>

      {/* Featured: Free Audit CTA */}
      <SectionWrapper variant="muted">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/resources/free-visibility-audit"
            className="group block relative rounded-2xl overflow-hidden bg-dark p-8 md:p-12 border border-white/10 hover:border-primary/30 transition-all duration-300"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary blur-[100px]" />
            </div>
            <div className="relative z-10 flex flex-col-reverse md:flex-row items-stretch gap-8 md:gap-12">
              <div className="flex-1 flex flex-col justify-center">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-primary mb-2">
                  Most Popular
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                  Free Visibility Audit
                </h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-6">
                  Find out exactly where your business is losing ground online. We'll review your website, Google Business Profile, and local search presence — and tell you what to fix first. No cost. No obligation.
                </p>
                <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full group-hover:gap-3 transition-all duration-300 w-fit">
                  Start Your Free Audit
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
              <div className="w-40 md:w-44 flex-shrink-0 flex items-center relative overflow-hidden rounded-2xl group-hover:scale-[1.03] transition-transform duration-500">
                <img
                  src={auditSample}
                  alt="Sample Free Visibility Audit Report"
                  className="shadow-2xl w-full h-full object-cover object-top rounded-2xl"
                  width={320}
                  height={450}
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 backdrop-blur-md pointer-events-none rounded-b-2xl" style={{ maskImage: 'linear-gradient(to top, black, transparent)', WebkitMaskImage: 'linear-gradient(to top, black, transparent)' }} />
              </div>
            </div>
          </Link>
        </div>
      </SectionWrapper>

      {/* Pillar Guides */}
      <SectionWrapper variant="light">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-5 h-5 text-primary" />
            <p className="text-primary font-semibold tracking-wide uppercase text-sm">In-Depth Guides</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Pillar Guides
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Comprehensive, long-form resources that cover everything you need to know about a topic. Bookmark these.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link
              to="/resources/local-seo-guide-service-businesses"
              className="group bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-7 flex flex-col flex-1">
                <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Pillar Guide</span>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  The Ultimate Local SEO Guide for Service Businesses (2026)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  The complete playbook for dominating Google Maps and local search — from GBP optimization to reviews to the Spiderweb Strategy.
                </p>
                <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                  Read Guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link
              to="/resources/website-guide-service-businesses"
              className="group bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-7 flex flex-col flex-1">
                <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Pillar Guide</span>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  The Ultimate Website Guide for Service Businesses (2026)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  The complete playbook for building a local service business website that actually generates leads — from hero sections to SEO architecture.
                </p>
                <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                  Read Guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link
              to="/resources/google-business-profile-guide"
              className="group bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-7 flex flex-col flex-1">
                <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Pillar Guide</span>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  The Complete Google Business Profile Guide for Local Service Businesses (2026)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  Everything you need to know about claiming, optimizing, and dominating the Map Pack — from verification to reviews to weekly posts.
                </p>
                <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                  Read Guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link
              to="/resources/google-ads-guide-contractors"
              className="group bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-7 flex flex-col flex-1">
                <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Pillar Guide</span>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  The Complete Google Ads Guide for Contractors (2026)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  Everything you need to know about running Google Ads that generate real calls, booked jobs, and measurable revenue for your service business.
                </p>
                <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                  Read Guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
            <Link
              to="/resources/online-reviews-reputation-guide"
              className="group bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="p-7 flex flex-col flex-1">
                <span className="text-xs font-bold tracking-widest uppercase text-primary mb-3">Pillar Guide</span>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  The Local Service Business Guide to Online Reviews & Reputation (2026)
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  How to generate consistent reviews, manage your online reputation, and turn customer feedback into your strongest competitive advantage.
                </p>
                <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                  Read Guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Downloadable Guides & Checklists */}
      <SectionWrapper variant="muted">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Download className="w-5 h-5 text-primary" />
            <p className="text-primary font-semibold tracking-wide uppercase text-sm">Free Downloads</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Guides & Checklists
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Practical resources you can use right now. Written specifically for local service business owners — not marketers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => (
              <button
                key={g.title}
                onClick={() => setDownloadDialog({ open: true, title: g.title, pdfPath: g.pdfPath })}
                className="group bg-background rounded-xl p-7 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col text-left"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <g.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className={`text-xs font-bold tracking-widest uppercase ${g.color}`}>
                    {g.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{g.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{g.desc}</p>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  Download Free Guide
                </span>
              </button>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Blog & Articles */}
      <SectionWrapper variant="light">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-5 h-5 text-primary" />
            <p className="text-primary font-semibold tracking-wide uppercase text-sm">Blog</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Latest Articles & Insights
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            Straight talk about local marketing — what works, what doesn't, and what's worth your time and money.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.title}
                to={`/resources/blog${'slug' in post && post.slug ? `/${post.slug}` : ''}`}
                className="group bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <post.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold tracking-wide uppercase text-primary">
                        {post.category}
                      </span>
                      <span className="text-muted-foreground text-xs">•</span>
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.desc}</p>
                  <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/resources/blog"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
            >
              View All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Bottom CTA */}
      <SectionWrapper variant="muted">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Not Sure Where to Start?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Take the free audit. We'll review your website, Google presence, and competition — then tell you exactly what to focus on first.
          </p>
          <Link
            to="/resources/free-visibility-audit"
            className="btn-primary text-base !px-8 !py-3.5"
          >
            Get Your Free Visibility Audit
          </Link>
        </div>
      </SectionWrapper>

      <GatedDownloadDialog
        open={downloadDialog.open}
        onOpenChange={(open) => setDownloadDialog((prev) => ({ ...prev, open }))}
        guideTitle={downloadDialog.title}
        pdfPath={downloadDialog.pdfPath}
      />
    </Layout>
  );
}
