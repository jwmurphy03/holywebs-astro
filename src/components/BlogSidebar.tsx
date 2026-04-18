
import { ArrowRight, BookOpen } from "lucide-react";
const bookCover = "/assets/book-cover.png";

export default function BlogSidebar() {
  return (
    <aside className="lg:w-[30%]">
      <div className="lg:sticky lg:top-28 space-y-8">
        {/* Free Audit CTA */}
        <div className="bg-background rounded-xl shadow-sm border border-border/60 border-t-4 border-t-primary p-6">
          <h3 className="text-lg font-bold text-foreground mb-2">Free Visibility Audit</h3>
          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
            See how your business shows up online and get a clear action plan to start generating more&nbsp;calls.
          </p>
          <a
            href="/resources/free-visibility-audit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors w-full justify-center"
          >
            Get Your Free Audit <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Book CTA */}
        <a href="/book" className="group block bg-background rounded-xl shadow-sm border border-border/60 p-6 text-center hover:border-primary/40 transition-colors">
          <img
            src={bookCover}
            alt="Found, Trusted, Chosen — The Local Business Visibility Playbook"
            width={120}
            height={180}
            className="mx-auto mb-4 rounded shadow-lg group-hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-foreground font-bold text-lg mb-1 flex items-center justify-center gap-1.5">
            <BookOpen className="w-4 h-4 text-primary" /> The Visibility Playbook
          </h3>
          <p className="text-muted-foreground text-xs leading-relaxed mb-4">
            The step-by-step guide to getting found, trusted, and chosen&nbsp;online.
          </p>
          <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
            Get the Book <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </a>

        {/* Popular Articles */}
        <div className="bg-background rounded-xl shadow-sm border border-border/60 p-6">
          <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-4">Popular Articles</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="/resources/blog/contractor-website-not-converting"
                className="group block"
              >
                <span className="text-xs font-bold uppercase text-primary">Web Design</span>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mt-1">
                  Why Your Contractor Website Gets Traffic But No&nbsp;Calls
                </p>
              </a>
            </li>
            <li>
              <a
                href="/resources/blog/google-business-profile-tips"
                className="group block"
              >
                <span className="text-xs font-bold uppercase text-primary">Local SEO</span>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mt-1">
                  Google Business Profile Tips That Actually Work
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
