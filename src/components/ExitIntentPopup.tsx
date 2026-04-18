import { useState, useEffect, useCallback } from "react";
import { X, Search, BarChart3, FileText } from "lucide-react";


const DISMISSED_KEY = "exit-popup-dismissed";
const EXCLUDED_PATHS = ["/resources/free-visibility-audit", "/schedule", "/contact"];

export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const [scrollReady, setScrollReady] = useState(false);
  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  const dismiss = useCallback(() => {
    setVisible(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  }, []);

  // Track 60% scroll depth
  useEffect(() => {
    if (EXCLUDED_PATHS.includes(pathname)) return;
    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    const onScroll = () => {
      const scrollPct =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPct >= 0.6) {
        setScrollReady(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Exit-intent detection (mouse leaves viewport top)
  useEffect(() => {
    if (!scrollReady) return;
    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setVisible(true);
        document.removeEventListener("mouseout", onMouseLeave);
      }
    };

    document.addEventListener("mouseout", onMouseLeave);
    return () => document.removeEventListener("mouseout", onMouseLeave);
  }, [scrollReady]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />

      {/* Modal */}
      <div className="relative bg-[hsl(var(--dark-bg))] border border-white/10 rounded-2xl max-w-lg w-full p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          Before you go&hellip;
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold text-dark-foreground mb-3">
          Find out why customers can't find&nbsp;you
        </h2>
        <p className="text-white/60 text-base mb-6 leading-relaxed">
          Get a free, no-obligation visibility audit. We'll review your Google rankings, business profile, and website
          &mdash; then tell you exactly what to&nbsp;fix.
        </p>

        <div className="space-y-3 mb-8">
          {[
            { icon: Search, text: "Google Search ranking analysis" },
            { icon: BarChart3, text: "Google Business Profile review" },
            { icon: FileText, text: "Website performance snapshot" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-white/70 text-sm">{text}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            dismiss();
            window.location.href = "/resources/free-visibility-audit";
          }}
          className="btn-primary w-full text-base"
        >
          Get My Free Audit
        </button>

        <p className="text-white/40 text-xs text-center mt-4">
          No credit card. No commitment. Just answers.
        </p>
      </div>
    </div>
  );
}
