import { Helmet } from "react-helmet-async";
import { Play, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const learnings = [
  "Why your competitors are showing up on Google and you're not — and the exact reason most contractor websites fail to generate calls",
  "The 3-part local visibility system we use to get contractors ranked on Google Maps without running ads",
  "How to turn your Google Business Profile into your #1 lead source (most businesses are leaving this completely unoptimized)",
  "A live action plan built around your specific market so you leave the workshop knowing exactly what to do first",
];

export default function WorkshopReplay() {
  return (
    <Layout>
      <Helmet>
        <title>Watch the Replay — Stop Being Invisible Workshop | Holy Webs</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Watch the full replay of the Stop Being Invisible workshop. Learn the exact system contractors use to get found on Google and generate more calls." />
        <link rel="canonical" href="https://holywebs.com/workshop/replay" />
      </Helmet>

      {/* Hero */}
      <section className="bg-black py-24 lg:py-32 text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Missed the Live Workshop? Watch the Replay.
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
            The full recording of <span className="text-white font-semibold">Stop Being Invisible</span> is available for a limited time.
          </p>
        </div>
      </section>

      {/* Video Embed */}
      <section className="bg-black pb-6">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          {/* Replace the div below with an iframe when the embed URL is ready:
              <iframe src="YOUR_YOUTUBE_OR_VIMEO_URL" ... /> */}
          <div className="relative w-full aspect-video rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group cursor-pointer">
            <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
              <Play className="w-9 h-9 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
          <p className="text-primary text-sm font-semibold text-center mt-4">
            Replay available for a limited time.
          </p>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="bg-[#0a0a0a] border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center mb-14">
            What You'll Learn
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {learnings.map((item, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-white/80 text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="bg-black py-16 lg:py-20 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 text-center">
            <h3 className="text-2xl font-extrabold text-white mb-3">
              Ready to Put This Into Action?
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-lg mx-auto mb-6">
              Start with a free visibility audit of your business. It takes 30 seconds and shows you exactly where you stand online.
            </p>
            <Link
              to="/resources/free-visibility-audit"
              className="inline-block px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Get Your Free Audit
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/workshop"
              className="inline-flex items-center gap-2 text-white/60 hover:text-primary text-sm font-medium transition-colors"
            >
              Want to attend the next live session? Register here
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
