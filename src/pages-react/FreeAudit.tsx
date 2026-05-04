import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import SectionWrapper from "@/components/SectionWrapper";
import { postToGHL } from "@/lib/ghl";
import { Search, BarChart3, FileText, CheckCircle2, AlertCircle } from "lucide-react";

const auditIncludes = [
  {
    icon: Search,
    title: "Google Search Visibility",
    desc: "We'll check how you rank for the keywords your customers are actually searching — and where your competitors are beating you.",
  },
  {
    icon: BarChart3,
    title: "Google Business Profile Review",
    desc: "Your GBP is often the first thing people see. We'll evaluate your listing for completeness, accuracy, and missed opportunities.",
  },
  {
    icon: FileText,
    title: "Website Performance Check",
    desc: "Speed, mobile experience, and whether your site is actually set up to convert visitors into leads.",
  },
  {
    icon: CheckCircle2,
    title: "Actionable Next Steps",
    desc: "You'll get a clear, prioritized list of what to fix first — whether you hire us or handle it yourself.",
  },
];

export default function FreeAudit() {
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
        source: "free-audit",
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Free Visibility Audit for Local Service Businesses | Holy Webs</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Get a free audit of your website, Google Business Profile, and local search visibility. No cost, no obligation — see exactly where you're losing leads." />
        <link rel="canonical" href="https://holywebs.com/resources/free-visibility-audit/" />
      </Helmet>

      {/* Hero */}
      <section className="section-dark py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-6">
            Find Out Why You're Not&nbsp;Showing&nbsp;Up
          </h1>
          <p className="text-white/70 text-lg leading-relaxed">
            Most local service businesses are invisible online and don't know why. We'll look under the hood and show you exactly where you're losing customers — and what to&nbsp;do&nbsp;about&nbsp;it.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <SectionWrapper variant="muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-4">
            What You'll&nbsp;Get
          </h2>
          <p className="text-muted-foreground text-center text-lg max-w-2xl mx-auto mb-12">
            This isn't a generic automated report. We personally review your online presence and put together a custom breakdown tailored to your&nbsp;business.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {auditIncludes.map((item) => (
              <div
                key={item.title}
                className="bg-background rounded-xl p-6 border border-border"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper variant="light">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            How It&nbsp;Works
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 text-left mt-8">
            <div className="flex-1">
              <span className="text-primary font-extrabold text-2xl">1.</span>
              <h3 className="font-bold text-foreground mt-1 mb-1">Fill Out the&nbsp;Form</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tell us a little about your business and where you're located. Takes about&nbsp;60&nbsp;seconds.
              </p>
            </div>
            <div className="flex-1">
              <span className="text-primary font-extrabold text-2xl">2.</span>
              <h3 className="font-bold text-foreground mt-1 mb-1">We Review&nbsp;Everything</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our team manually audits your website, Google Business Profile, and local search&nbsp;rankings.
              </p>
            </div>
            <div className="flex-1">
              <span className="text-primary font-extrabold text-2xl">3.</span>
              <h3 className="font-bold text-foreground mt-1 mb-1">Get Your&nbsp;Report</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You'll receive a clear breakdown with prioritized recommendations — no sales pitch&nbsp;required.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Form */}
      <SectionWrapper variant="muted">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground text-center mb-3">
            Request Your Free&nbsp;Audit
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            No cost, no obligation. Just a clear picture of where you&nbsp;stand.
          </p>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">We're On&nbsp;It.</h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mx-auto">
                We'll review your digital presence and get back to you with a clear breakdown of what's working, what's not, and what to do about it. If you'd like to skip ahead and talk it through, feel free to book a Discovery&nbsp;Call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>Something went wrong. Please try again or email us at <a href="mailto:hello@holywebs.com" className="font-semibold underline">hello@holywebs.com</a>.</p>
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input required name="name" type="text" maxLength={100} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Business Name</label>
                  <input required name="businessName" type="text" maxLength={150} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <input required name="phone" type="tel" maxLength={20} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input required name="email" type="email" maxLength={255} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">City / Market</label>
                  <input required name="city" type="text" maxLength={100} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Website URL</label>
                  <input name="websiteUrl" type="text" maxLength={255} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">What's your biggest challenge right now?</label>
                <textarea name="challenge" rows={4} maxLength={1000} className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
              </div>
              <button type="submit" disabled={submitting} className="btn-primary w-full justify-center text-base disabled:opacity-50">
                {submitting ? "Submitting..." : "Get My Free Audit"}
              </button>
            </form>
          )}
        </div>
      </SectionWrapper>
    </Layout>
  );
}
