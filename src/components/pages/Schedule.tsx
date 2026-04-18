import { Helmet } from "react-helmet-async";
import { Clock, ShieldCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Schedule() {
  const scrollToCalendar = () => {
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Book a Discovery Call | Holy Webs</title>
        <meta
          name="description"
          content="Schedule a free 15-minute discovery call with Holy Webs. We'll talk about your business goals and tell you plainly whether we can help."
        />
        <meta name="robots" content="noindex, nofollow" />
        <script
          type="text/javascript"
          src="https://api.digitaltentmakers.com/js/form_embed.js"
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-[hsl(var(--dark-bg))] text-white min-h-[65vh] flex items-center">
        <div className="container mx-auto px-4 py-20 lg:py-28 text-center max-w-3xl">
          <p className="text-primary font-semibold tracking-wide uppercase text-base md:text-lg mb-5">
            Free 15-Minute Discovery Call
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
            Let's See if We&nbsp;Can{" "}
            <span className="bg-gradient-to-r from-[hsl(19,100%,62%)] to-[hsl(38,100%,55%)] bg-clip-text text-transparent">
              Help
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/75 mb-10 leading-relaxed max-w-4xl mx-auto">
            Pick a time that works for you, and we will spend 15 minutes talking
            about your business, your goals, and what is actually standing in
            your way. If we can help, we will tell you exactly how. And if we
            are not the right fit, we will tell you&nbsp;that&nbsp;too.
          </p>
          <Button
            size="lg"
            onClick={scrollToCalendar}
            className="text-base px-10 py-6 rounded-lg font-semibold"
          >
            Book My Call
          </Button>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <p className="text-center text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 max-w-4xl mx-auto">
            This is not a sales pitch. It is a real conversation about your business
            and where you want it to go over the next 12 months. We will ask about
            the challenges you are facing right now and what has or has not worked
            in the past. If we are a good fit, we will walk you through what working
            together looks like. And if we are not the right team for you, we will
            tell you that too.
          </p>

          {/* Trust Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
            {[
              {
                icon: Clock,
                title: "15 Minutes",
                text: "Quick, focused, and respectful of your time. No hour-long presentations.",
              },
              {
                icon: ShieldCheck,
                title: "Zero Pressure",
                text: "We only take on clients we know we can actually help. If that is not you, we will say so.",
              },
              {
                icon: MessageCircle,
                title: "Real Answers",
                text: "You will leave the call with a clear picture of where you stand and what to do next.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center bg-muted/50 border border-border rounded-2xl p-8 shadow-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Calendar Embed */}
          <div id="book" className="scroll-mt-8 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-1">
              Choose a Time That Works for&nbsp;You
            </h2>
            <iframe
              src="https://api.digitaltentmakers.com/widget/booking/ZK4kzNtKr2z2iXyAjbVo"
              className="rounded-xl overflow-hidden"
              style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "900px" }}
              scrolling="no"
              id="ZK4kzNtKr2z2iXyAjbVo_1776137244121"
            />
            <p className="text-center text-sm text-muted-foreground mt-6">
              Can't find a time that works?{" "}
              <a
                href="mailto:hello@holywebs.com"
                className="text-primary hover:underline font-medium"
              >
                Email us at hello@holywebs.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(var(--dark-bg))] text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <img
            src="/assets/logo-white.png"
            alt="Holy Webs"
            className="h-8 mx-auto mb-4"
          />
          <p className="text-white/50 text-sm mb-2">
            &copy; {new Date().getFullYear()} Holy Webs. All rights reserved.
          </p>
          <a
            href="https://holywebs.com"
            className="text-white/60 hover:text-primary text-sm transition-colors"
          >
            holywebs.com
          </a>
        </div>
      </footer>
    </>
  );
}
