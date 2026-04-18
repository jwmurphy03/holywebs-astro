import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Download, Mail, ArrowRight, BookOpen, Loader2 } from "lucide-react";
const bookCover = "/assets/book-cover.png";
import { supabase } from "@/integrations/supabase/client";
import { stripeEnvironment } from "@/lib/stripe";

interface SessionItem {
  lookupKey: string | null;
  productName: string;
  amount: number | null;
}

interface SessionData {
  status: string;
  paymentStatus: string;
  customerEmail?: string;
  customerName?: string;
  amountTotal?: number;
  currency?: string;
  items: SessionItem[];
}

export default function BookThankYouPage() {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  const [session, setSession] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const { data, error: fnError } = await supabase.functions.invoke(
          "get-checkout-session",
          { body: { sessionId, environment: stripeEnvironment } }
        );
        if (cancelled) return;
        if (fnError) throw new Error(fnError.message);
        setSession(data as SessionData);
      } catch (err) {
        if (!cancelled) setError((err as Error).message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  const hasBump = !!session?.items?.some((i) => i.lookupKey === "action_plan_bump");
  const paid = session?.paymentStatus === "paid";

  return (
    <>
      <Helmet>
        <title>Thank you! Your book is ready | Holy Webs</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-screen bg-muted py-10 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {loading ? (
            <div className="bg-background rounded-2xl border border-border p-12 text-center">
              <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-3" />
              <p className="text-muted-foreground">Confirming your order…</p>
            </div>
          ) : error || !sessionId ? (
            <div className="bg-background rounded-2xl border border-border p-10 text-center">
              <h1 className="text-2xl font-bold text-foreground mb-3">
                We couldn't find your order
              </h1>
              <p className="text-muted-foreground mb-6">
                {error || "No session ID provided. If you just paid, check your email for the receipt and download link."}
              </p>
              <Link to="/book" className="btn-primary">
                Back to the book
              </Link>
            </div>
          ) : (
            <>
              {/* Success header */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5">
                  <CheckCircle2 className="w-9 h-9 text-primary" />
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
                  {paid
                    ? `You're in${session?.customerName ? `, ${session.customerName.split(" ")[0]}` : ""}!`
                    : "Order received"}
                </h1>
                <p className="text-muted-foreground text-lg">
                  Thanks for grabbing the book. Everything you need is below.
                </p>
              </div>

              {/* Email confirmation */}
              {session?.customerEmail && (
                <div className="bg-background rounded-2xl border border-border p-5 mb-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">
                      Receipt &amp; download link sent to {session.customerEmail}
                    </p>
                    <p className="text-muted-foreground">
                      Don't see it in a few minutes? Check your spam folder.
                    </p>
                  </div>
                </div>
              )}

              {/* Downloads */}
              <div className="bg-background rounded-2xl border border-border p-6 lg:p-8 mb-6">
                <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-5">
                  Your downloads
                </h2>

                <DownloadCard
                  title="Stop Being Invisible"
                  description="The full digital book (PDF)"
                  href="/downloads/stop-being-invisible.pdf"
                  fileName="stop-being-invisible.pdf"
                />

                {hasBump && (
                  <div className="mt-4">
                    <DownloadCard
                      title="Get Found First — 30-Day Action Plan"
                      description="Your printable day-by-day implementation plan (PDF)"
                      href="/downloads/get-found-first-action-plan.pdf"
                      fileName="get-found-first-action-plan.pdf"
                      highlight
                    />
                  </div>
                )}

                <p className="text-xs text-muted-foreground mt-5">
                  Tip: bookmark this page or save the files locally — your email
                  receipt also includes these download links anytime.
                </p>
              </div>

              {/* What's next */}
              <div className="bg-background rounded-2xl border border-border p-6 lg:p-8">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  What to do next
                </h2>
                <ol className="space-y-3 text-foreground">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">1.</span>
                    <span>Download the PDF and read Chapter 1 today — it sets up everything else.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">2.</span>
                    <span>Block 30 minutes on your calendar this week to claim or audit your Google Business Profile (Chapter 4).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">3.</span>
                    <span>Want help applying it? Grab a free visibility audit from our team.</span>
                  </li>
                </ol>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link to="/resources/free-visibility-audit" className="btn-primary">
                    Get my free audit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/resources/blog"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Read the blog
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

function DownloadCard({
  title,
  description,
  href,
  fileName,
  highlight = false,
}: {
  title: string;
  description: string;
  href: string;
  fileName: string;
  highlight?: boolean;
}) {
  return (
    <a
      href={href}
      download={fileName}
      className={`flex items-center gap-4 p-5 rounded-xl border-2 transition-colors group ${
        highlight
          ? "border-primary bg-primary/5 hover:bg-primary/10"
          : "border-border hover:border-primary/40 hover:bg-muted/40"
      }`}
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Download className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
    </a>
  );
}
