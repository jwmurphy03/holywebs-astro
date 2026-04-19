import { useState } from "react";
import { Check, AlertCircle } from "lucide-react";
import { postToGHL } from "@/lib/ghl";

const serviceOptions = [
  "Web Design",
  "SEO",
  "Google Ads",
  "Meta Ads (Facebook & Instagram)",
  "Social Media Management",
  "AEO (Answer Engine Optimization)",
  "Multiple Services",
  "Not sure yet — help me figure it out",
];

interface FinalCTASectionProps {
  headline?: string;
  subtitle?: string;
}

export default function FinalCTASection({ headline, subtitle }: FinalCTASectionProps) {
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
        websiteUrl: fd.get("websiteUrl") as string,
        service: fd.get("service") as string,
        message: fd.get("message") as string,
        source: "homepage-cta",
      });
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-[#0F1729] to-[#1a2640]">
      <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.08] mix-blend-overlay" />
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
          {/* Left — Copy */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-dark-foreground mb-6">
              {headline || "Ready to stop being invisible?"}
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              {subtitle || "Let's find out what's holding your business back — and what it would take to fix it. Fill out the form and we'll get back to you within 24 hours."}
            </p>
            <div className="space-y-4 mb-8">
              {[
                "No pressure, no hard sell — just an honest conversation",
                "We'll review your online presence before the call",
                "You'll get real recommendations — whether you work with&nbsp;us or&nbsp;not",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-white/60 text-base" dangerouslySetInnerHTML={{ __html: item }} />
                </div>
              ))}
            </div>

            <p className="text-white/70 text-lg leading-relaxed">
              Most of our clients come to us after wasting money on agencies that overpromised and underdelivered. We do things differently — we show you exactly what's working, what's not, and what to&nbsp;do about&nbsp;it.
            </p>
          </div>

          {/* Right — Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7 text-primary" />
                </div>
                <p className="text-dark-foreground text-xl font-bold mb-2">Message sent!</p>
                <p className="text-white/60">We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-red-300">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p>Something went wrong. Please try again or email <a href="mailto:hello@holywebs.com" className="font-semibold underline">hello@holywebs.com</a>.</p>
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-1.5">Name *</label>
                    <input
                      required name="name" type="text" maxLength={100} placeholder="Your name"
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-dark-foreground placeholder:text-white/30 focus:outline-none focus:border-primary/60 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-1.5">Email *</label>
                    <input
                      required name="email" type="email" maxLength={255} placeholder="you@email.com"
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-dark-foreground placeholder:text-white/30 focus:outline-none focus:border-primary/60 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-1.5">Phone</label>
                    <input
                      name="phone" type="tel" maxLength={20} placeholder="(555) 123-4567"
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-dark-foreground placeholder:text-white/30 focus:outline-none focus:border-primary/60 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/70 mb-1.5">Business Name</label>
                    <input
                      name="businessName" type="text" maxLength={150} placeholder="Your business name"
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-dark-foreground placeholder:text-white/30 focus:outline-none focus:border-primary/60 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1.5">Website URL</label>
                  <input
                    name="websiteUrl" type="text" maxLength={255} placeholder="https://yourbusiness.com"
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-dark-foreground placeholder:text-white/30 focus:outline-none focus:border-primary/60 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1.5">Service interested in *</label>
                  <select
                    required name="service" defaultValue=""
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-white/30 focus:outline-none focus:border-primary/60 transition-colors text-sm appearance-none [&:has(option:checked:not([value='']])]:text-dark-foreground"
                  >
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/70 mb-1.5">How can we help?</label>
                  <textarea
                    name="message" rows={3} maxLength={1000}
                    placeholder="Tell us about your business and what you're looking for..."
                    className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-2.5 text-dark-foreground placeholder:text-white/30 focus:outline-none focus:border-primary/60 transition-colors text-sm resize-none"
                  />
                </div>

                <button type="submit" disabled={submitting} className="btn-primary w-full text-base mt-2 disabled:opacity-50">
                  {submitting ? "Sending..." : "Get My Free Consultation"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
