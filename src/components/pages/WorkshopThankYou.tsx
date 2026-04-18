import { Helmet } from "react-helmet-async";
import { CheckCircle, Copy, ExternalLink } from "lucide-react";

import Layout from "@/components/Layout";
import { useState } from "react";

const calendarUrl =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Stop+Being+Invisible+%E2%80%94+Free+Workshop&dates=20260507T190000Z/20260507T200000Z&details=Live+workshop+for+contractors+and+service+businesses.+Learn+the+exact+system+to+get+found+on+Google.&location=Zoom+(link+in+email)";

const steps = [
  {
    number: "1",
    title: "Check your inbox",
    desc: "Look for a confirmation email with your Zoom link. If you don't see it, check your spam folder.",
  },
  {
    number: "2",
    title: "Add it to your calendar",
    desc: "May 7th, 2026 at 2:00 PM Central. Block it off so you don't miss it.",
    cta: true,
  },
  {
    number: "3",
    title: "Come ready to take notes",
    desc: "We'll build your action plan live during the workshop. Bring a pen or open a doc.",
  },
];

export default function WorkshopThankYou() {
  const [copied, setCopied] = useState(false);
  const workshopUrl = "https://holywebs.com/workshop";

  const handleCopy = () => {
    navigator.clipboard.writeText(workshopUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <Helmet>
        <title>You're Registered — See You May 7th | Holy Webs</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="You're registered for the Stop Being Invisible workshop. Check your email for your Zoom link and get ready for May 7th." />
        <link rel="canonical" href="https://holywebs.com/workshop/thank-you" />
      </Helmet>

      {/* Hero */}
      <section className="bg-black py-24 lg:py-32 text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-green-500" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            You're In. See You on May 7th.
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-xl mx-auto">
            Check your email — your Zoom link is on its way.
          </p>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-black py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-12">
            What Happens Next
          </h2>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
                  {step.cta && (
                    <a
                      href={calendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 px-5 py-2.5 rounded-lg bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition-colors"
                    >
                      Add to Google Calendar
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* While You Wait CTA */}
      <section className="bg-black py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 text-center">
            <h3 className="text-2xl font-extrabold text-white mb-3">While You Wait</h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-lg mx-auto mb-6">
              Want to know exactly where you stand online before the workshop? Get your free visibility audit — it takes 30 seconds.
            </p>
            <a
              href="/resources/free-visibility-audit"
              className="inline-block px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Get Your Free Audit
            </a>
          </div>
        </div>
      </section>

      {/* Share Prompt */}
      <section className="bg-black py-12 lg:py-16 border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <p className="text-white/70 text-sm mb-4">
            Know a contractor who needs this? Share the workshop.
          </p>
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
          >
            <Copy className="w-4 h-4" />
            {copied ? "Copied!" : workshopUrl}
          </button>
        </div>
      </section>
    </Layout>
  );
}
