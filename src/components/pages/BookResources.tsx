import { useState } from "react";
import logoWhite from "@/assets/logo-white.png";
import { Helmet } from "react-helmet-async";

import { motion } from "framer-motion";
import { postToGHL } from "@/lib/ghl";
import {
  CheckCircle2,
  AlertCircle,
  Download,
  FileText,
  Search,
  Star,
  ArrowRight,
  ClipboardCheck,
  Eye,
  BarChart3,
  MessageSquareText,
} from "lucide-react";

export default function BookResources() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);
    try {
      await postToGHL({
        name: fd.get("name") as string,
        email: fd.get("email") as string,
        phone: fd.get("phone") as string,
        businessName: fd.get("businessName") as string,
        city: fd.get("city") as string,
        websiteUrl: fd.get("websiteUrl") as string,
        message: fd.get("challenge") as string,
        source: "book-free-audit",
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const downloads = [
    {
      icon: ClipboardCheck,
      title: "The 5-Second Website Checklist",
      desc: "A quick-hit checklist to see if your website is helping or hurting you.",
      href: "#",
    },
    {
      icon: Search,
      title: "Local SEO Foundation Guide",
      desc: "The fundamentals of showing up when your customers are searching.",
      href: "#",
    },
    {
      icon: MessageSquareText,
      title: "Review Request Text Templates",
      desc: "Copy-paste messages that actually get customers to leave reviews.",
      href: "#",
    },
  ];

  const auditIncludes = [
    {
      icon: Eye,
      title: "Google Visibility Check",
      desc: "We look at how you show up when customers search for what you do.",
    },
    {
      icon: Star,
      title: "Review & Reputation Snapshot",
      desc: "A clear picture of your online reputation and how it compares to competitors.",
    },
    {
      icon: BarChart3,
      title: "Website Performance Scan",
      desc: "Speed, mobile experience, and conversion readiness at a glance.",
    },
    {
      icon: FileText,
      title: "Plain-Language Video Report",
      desc: "You will get a custom video walking through exactly what we found.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Reader Resources | Stop Being Invisible | Holy Webs</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Access free tools, checklists, and your custom visibility audit. Exclusive resources for readers of Stop Being Invisible by Holy Webs."
        />
        <link rel="canonical" href="https://holywebs.com/free" />
      </Helmet>

      {/* ─── HERO (dark, branded) ─── */}
      <section className="section-dark relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[160px]" />
          <div className="absolute bottom-10 right-1/4 w-72 h-72 rounded-full bg-primary/15 blur-[120px]" />
        </div>

        {/* Film grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-8">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm text-white/90 font-medium">
                Stop Being Invisible
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground leading-[1.1] mb-6">
              Reader{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, hsl(19 100% 62%), hsl(38 100% 55%))",
                }}
              >
                Resources
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              You read the book. Now let's put it to work. Access your free
              tools, templates, and checklists below, or request a custom audit
              of your digital&nbsp;footprint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── DOWNLOADS & TEMPLATES (light) ─── */}
      <section className="section-muted py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Downloads &amp;&nbsp;Templates
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Grab the tools we reference throughout the book. Each one is
              designed to help you take action&nbsp;today.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {downloads.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group bg-background rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                  {item.desc}
                </p>
                <span className="text-primary font-semibold text-sm inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Download <Download className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-10">
            More tools and templates are on the way. Check back soon, or request
            your audit below and we will keep you&nbsp;posted.
          </p>
        </div>
      </section>

      {/* ─── FREE VISIBILITY AUDIT (light) ─── */}
      <section className="section-light py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              Get Your Free Visibility&nbsp;Audit
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Want to know exactly where you stand before you make a move? We
              will review your online presence and send you a plain-language
              video showing you what is working and what&nbsp;needs&nbsp;attention.
            </p>
          </div>

          {/* What's included */}
          <div className="grid sm:grid-cols-2 gap-6 mb-14">
            {auditIncludes.map((item) => (
              <div
                key={item.title}
                className="bg-background rounded-xl p-6 border border-border flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-background rounded-2xl border border-border p-8 md:p-10 max-w-3xl mx-auto">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-extrabold text-foreground mb-3">
                  We're On&nbsp;It.
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We'll review your digital presence and get back to you with a
                  clear breakdown of what's working and what
                  needs&nbsp;attention.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p>
                      Something went wrong. Please try again or email us at{" "}
                      <a
                        href="mailto:hello@holywebs.com"
                        className="font-semibold underline"
                      >
                        hello@holywebs.com
                      </a>
                      .
                    </p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { label: "Name", name: "name", type: "text", required: true },
                    { label: "Business Name", name: "businessName", type: "text", required: true },
                    { label: "Phone", name: "phone", type: "tel", required: true },
                    { label: "Email", name: "email", type: "email", required: true },
                    { label: "City / Market", name: "city", type: "text", required: true },
                    { label: "Website URL", name: "websiteUrl", type: "text", required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-sm font-semibold text-foreground mb-2">
                        {field.label}
                      </label>
                      <input
                        required={field.required}
                        name={field.name}
                        type={field.type}
                        maxLength={field.type === "email" ? 255 : 150}
                        className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    What's your biggest challenge right now?
                  </label>
                  <textarea
                    name="challenge"
                    rows={3}
                    maxLength={1000}
                    className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full justify-center text-base disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Get My Free Audit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ─── FOOTER (dark, minimal) ─── */}
      <footer className="section-dark py-10">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <a href="https://holywebs.com">
            <img src={logoWhite} alt="Holy Webs" className="h-8" width={160} height={32} />
          </a>
          <p>&copy; {new Date().getFullYear()} Holy Webs. All rights reserved.</p>
          <a
            href="https://holywebs.com"
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            holywebs.com
          </a>
        </div>
      </footer>
    </>
  );
}
