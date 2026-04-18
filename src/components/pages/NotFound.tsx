import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import { Search, ArrowRight, Home, Wrench, MapPin, BookOpen } from "lucide-react";

const popularLinks = [
  { icon: Wrench, label: "Our Services", href: "/services", desc: "Web design, SEO, Google Ads, and more" },
  { icon: MapPin, label: "Locations We Serve", href: "/locations", desc: "Texas, South Carolina, and beyond" },
  { icon: BookOpen, label: "Free Resources", href: "/resources", desc: "Guides, tools, and marketing insights" },
  { icon: Search, label: "Free Visibility Audit", href: "/resources/free-visibility-audit", desc: "Find out why customers can't find you" },
];

const suggestedPages = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "SEO", href: "/services/seo" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "HVAC Marketing", href: "/industries/hvac" },
  { label: "Plumber Marketing", href: "/industries/plumbing" },
  { label: "Roofing Marketing", href: "/industries/roofing" },
  { label: "Houston", href: "/locations/texas/houston" },
  { label: "Charleston", href: "/locations/south-carolina/charleston" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <Helmet>
        <title>Page Not Found | Holy Webs</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">404 Error</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              This page doesn't exist
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              The page at <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono">{location.pathname}</code> may have been moved or removed. Here are some places you might be looking&nbsp;for:
            </p>
          </div>

          {/* Popular Destinations */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {popularLinks.map(({ icon: Icon, label, href, desc }) => (
              <a
                key={href}
                href={href}
                className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{label}</p>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Popular pages</p>
            <div className="flex flex-wrap justify-center gap-2">
              {suggestedPages.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Home CTA */}
          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <Home className="w-4 h-4" />
              Back to Homepage
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;