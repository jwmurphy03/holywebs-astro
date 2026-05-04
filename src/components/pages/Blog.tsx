import { Helmet } from "react-helmet-async";
import { ArrowRight, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import BlogSidebar from "@/components/BlogSidebar";
// Unsplash blog thumbnails

const gbpTipsThumb = "/assets/blog/gbp-tips-thumb-v2.jpg";
const seoVsAdsThumb = "/assets/blog/seo-vs-google-ads-thumb-v3.jpg";
const aeoThumb = "/assets/blog/what-is-aeo-thumb-v2.jpg";
const agencyThumb = "/assets/blog/agency-wasting-money-thumb-v2.jpg";
const speedThumb = "/assets/blog/website-speed-thumb-v2.jpg";
const contractorNoCallsThumb = "/assets/blog/contractor-website-no-calls-thumb-v2.jpg";
const googleMapsThumb = "/assets/blog/google-maps-ranking-thumb.jpg";
const hvacNotShowingThumb = "/assets/blog/hvac-not-showing-google-thumb.jpg";
const plumbingNotShowingThumb = "/assets/blog/plumbing-not-showing-google-thumb.jpg";
const roofingNotShowingThumb = "/assets/blog/roofing-not-showing-google-thumb.jpg";
const constructionNotShowingThumb = "/assets/blog/construction-not-showing-google-thumb.jpg";

const POSTS_PER_PAGE = 6;

const publishedPosts = [
  {
    title: "How Texas Service Businesses Can Show Up in Google Maps",
    desc: "A practical Google Maps ranking guide for Texas service businesses in Dallas, Austin, San Antonio, Waco, Houston, and beyond.",
    category: "Local SEO",
    readTime: "8 min read",
    slug: "texas-service-business-google-maps",
    thumb: googleMapsThumb,
  },
  {
    title: "Why City Pages Help Contractors Rank in More Places",
    desc: "City pages can help contractors rank across more service areas, but only when they are useful, specific, and connected to a real local SEO strategy.",
    category: "Local SEO",
    readTime: "7 min read",
    slug: "city-pages-for-contractors",
    thumb: contractorNoCallsThumb,
  },
  {
    title: "The Real Reason Your HVAC Business Isn't Showing Up on Google",
    desc: "Can't find your HVAC company on Google? Here are the three most common reasons and a 15-minute self-audit to start fixing it today.",
    category: "HVAC Marketing",
    readTime: "7 min read",
    slug: "hvac-not-showing-on-google",
    thumb: hvacNotShowingThumb,
  },
  {
    title: "How to Rank on Google Maps as a Home Service Business (The 2026 Guide)",
    desc: "A step-by-step breakdown of the three ranking factors Google uses for Maps, plus practical tactics for GBP optimization, reviews, citations, and multi-city visibility.",
    category: "Local SEO",
    readTime: "10 min read",
    slug: "google-maps-ranking",
    thumb: googleMapsThumb,
  },
  {
    title: "Why Your Contractor Website Gets Traffic But No Calls",
    desc: "Your website is getting visitors but the phone isn't ringing. Here are the five most common conversion killers and how to fix each one.",
    category: "Web Design",
    readTime: "9 min read",
    slug: "contractor-website-not-converting",
    thumb: contractorNoCallsThumb,
  },
  {
    title: "Google Business Profile Tips That Actually Work",
    desc: "Simple optimizations that can improve your local visibility fast. No technical skills required.",
    category: "Local SEO",
    readTime: "4 min read",
    slug: "google-business-profile-tips",
    thumb: gbpTipsThumb,
  },
  {
    title: "SEO vs. Google Ads: Which One Do You Need?",
    desc: "When to invest in organic search, when to run paid ads, and when you need both.",
    category: "Strategy",
    readTime: "6 min read",
    slug: "seo-vs-google-ads",
    thumb: seoVsAdsThumb,
  },
  {
    title: "What Is AEO and Why Should You Care?",
    desc: "Answer Engine Optimization is changing how customers find local businesses. Here's what you need to know.",
    category: "SEO",
    readTime: "5 min read",
    slug: "what-is-aeo",
    thumb: aeoThumb,
  },
  {
    title: "5 Signs Your Marketing Agency Is Wasting Your Money",
    desc: "If you're paying for marketing but can't point to a single new customer it brought in, read this.",
    category: "Strategy",
    readTime: "5 min read",
    slug: "signs-marketing-agency-wasting-money",
    thumb: agencyThumb,
  },
  {
    title: "How Fast Should Your Website Load?",
    desc: "Page speed affects your Google rankings, your conversion rate, and your credibility. Here's what to aim for.",
    category: "Web Design",
    readTime: "4 min read",
    slug: "how-fast-should-website-load",
    thumb: speedThumb,
  },
  {
    title: "The Real Reason Your Plumbing Business Isn't Showing Up on Google",
    desc: "Can't find your plumbing company on Google Maps? Here are the most common reasons plumbers don't rank locally — and how to fix each one.",
    category: "Plumbing Marketing",
    readTime: "7 min read",
    slug: "plumbing-not-showing-on-google",
    thumb: plumbingNotShowingThumb,
  },
  {
    title: "The Real Reason Your Roofing Company Isn't Showing Up on Google",
    desc: "Roofing clients search Google Maps immediately after a storm. If you're not in the top 3 results, you're invisible when it matters most.",
    category: "Roofing Marketing",
    readTime: "7 min read",
    slug: "roofing-not-showing-on-google",
    thumb: roofingNotShowingThumb,
  },
  {
    title: "The Real Reason Your Construction Company Isn't Showing Up on Google",
    desc: "Most general contractors are invisible on Google Maps — not because they lack credibility, but because their GBP and website aren't built to rank.",
    category: "Construction Marketing",
    readTime: "7 min read",
    slug: "construction-not-showing-on-google",
    thumb: constructionNotShowingThumb,
  },
];

export default function Blog({ page = 1 }: { page?: number }) {
  const totalPages = Math.max(1, Math.ceil(publishedPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.max(1, Math.min(page, totalPages));
  const startIdx = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = publishedPosts.slice(startIdx, startIdx + POSTS_PER_PAGE);

  const baseUrl = "https://holywebs.com/resources/blog";
  const canonical = currentPage === 1 ? baseUrl : `${baseUrl}/page/${currentPage}`;
  const prevUrl =
    currentPage > 1
      ? currentPage === 2
        ? baseUrl
        : `${baseUrl}/page/${currentPage - 1}`
      : null;
  const nextUrl = currentPage < totalPages ? `${baseUrl}/page/${currentPage + 1}` : null;

  const pageSuffix = currentPage > 1 ? ` – Page ${currentPage}` : "";

  const pageHref = (p: number) =>
    p === 1 ? "/resources/blog" : `/resources/blog/page/${p}`;

  return (
    <Layout>
      <Helmet>
        <title>{`Digital Marketing Blog for Contractors & Service Businesses${pageSuffix} | Holy Webs`}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Practical digital marketing tips, SEO guides, and growth strategies written specifically for local service businesses and contractors."
        />
        <link rel="canonical" href={canonical} />
        {prevUrl && <link rel="prev" href={prevUrl} />}
        {nextUrl && <link rel="next" href={nextUrl} />}
      </Helmet>

      {/* Dark navy hero */}
      <section className="section-dark py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">
            The Holy Webs Blog
          </h1>
          <p className="text-white/60 text-lg max-w-2xl">
            Practical marketing advice for HVAC, plumbing, and home service contractors.
          </p>
        </div>
      </section>

      {/* Light gray content area */}
      <section className="py-14 lg:py-20" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left – Post feed (70%) in 2-column grid */}
            <div className="lg:w-[70%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {visiblePosts.map((post) => (
                  <a
                    key={post.slug}
                    href={`/resources/blog/${post.slug}`}
                    className="group block bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.thumb}
                        alt={post.title}
                        width={960}
                        height={540}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-bold tracking-wide uppercase text-primary">
                          {post.category}
                        </span>
                        <span className="text-muted-foreground/40 text-xs">•</span>
                        <span className="text-muted-foreground text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                        {post.desc}
                      </p>
                      <span className="text-primary text-sm font-semibold inline-flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav
                  aria-label="Blog pagination"
                  className="mt-12 flex items-center justify-center gap-2"
                >
                  {prevUrl ? (
                    <a
                      href={pageHref(currentPage - 1)}
                      rel="prev"
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-background text-foreground text-sm font-semibold shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="w-4 h-4" /> Prev
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-background/60 text-muted-foreground/60 text-sm font-semibold cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4" /> Prev
                    </span>
                  )}

                  <div className="flex items-center gap-1 mx-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
                      const isActive = p === currentPage;
                      return (
                        <a
                          key={p}
                          href={pageHref(p)}
                          aria-current={isActive ? "page" : undefined}
                          className={`min-w-[40px] h-10 inline-flex items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                            isActive
                              ? "bg-primary text-primary-foreground"
                              : "bg-background text-foreground hover:bg-primary/10"
                          }`}
                        >
                          {p}
                        </a>
                      );
                    })}
                  </div>

                  {nextUrl ? (
                    <a
                      href={pageHref(currentPage + 1)}
                      rel="next"
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-background text-foreground text-sm font-semibold shadow-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Next page"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-background/60 text-muted-foreground/60 text-sm font-semibold cursor-not-allowed"
                    >
                      Next <ChevronRight className="w-4 h-4" />
                    </span>
                  )}
                </nav>
              )}
            </div>

            {/* Right – Sticky sidebar (30%) */}
            <BlogSidebar />
          </div>
        </div>
      </section>
    </Layout>
  );
}
