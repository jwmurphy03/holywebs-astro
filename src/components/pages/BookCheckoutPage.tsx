import { useMemo, useState, Component } from "react";
import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

class ErrorBoundary extends Component<{ children: ReactNode }, { error: string | null }> {
  state = { error: null };
  static getDerivedStateFromError(e: Error) { return { error: e.message }; }
  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-lg w-full">
            <h2 className="text-red-800 font-bold text-lg mb-2">Checkout failed to load</h2>
            <p className="text-red-600 text-sm font-mono">{this.state.error}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

import { ArrowLeft, CheckCircle2, ShieldCheck, Lock, Star, Zap } from "lucide-react";
const bookCover = "/assets/book-cover.png";
import { BookCheckout } from "@/components/BookCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";

export default function BookCheckoutPage({ stripePublicKey, supabaseUrl, supabaseKey }: { stripePublicKey?: string; supabaseUrl?: string; supabaseKey?: string }) {
  const [bumpSelected, setBumpSelected] = useState(false);

  const BOOK_PRODUCT_ID = "prod_UMUim7JZ9mSYAq";
  const UPSELL_PRODUCT_ID = "prod_UMUlDjsxJ93o0d";

  const priceIds = useMemo(
    () => (bumpSelected ? [BOOK_PRODUCT_ID, UPSELL_PRODUCT_ID] : [BOOK_PRODUCT_ID]),
    [bumpSelected]
  );

  const totalCents = bumpSelected ? 1900 + 2700 : 1900;
  const totalFormatted = `$${(totalCents / 100).toFixed(2)}`;

  return (
    <ErrorBoundary>
      <>
      <Helmet>
        <title>Checkout — Stop Being Invisible | Holy Webs</title>
        <meta name="description" content="Complete your order for the digital book Stop Being Invisible." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://holywebs.com/book/checkout/" />
      </Helmet>

      <PaymentTestModeBanner stripePublicKey={stripePublicKey} />

      <div className="min-h-screen bg-background">
        {/* Minimal nav bar */}
        <div className="border-b border-border">
          <div className="max-w-5xl mx-auto px-4 lg:px-8 py-3 flex items-center justify-between">
            <a
              href="/book"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </a>
            <span className="text-sm font-semibold text-foreground tracking-tight">holywebs.com</span>
            <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="w-3.5 h-3.5" />
              Secure
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 lg:px-8 py-10 lg:py-16">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">

            {/* LEFT — Order summary */}
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">Order summary</p>
                <div className="flex gap-4 items-start">
                  <img
                    src={bookCover}
                    alt="Stop Being Invisible book cover"
                    className="w-16 h-auto rounded-lg shadow-md flex-shrink-0"
                    width={64}
                    height={100}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground leading-tight">Stop Being Invisible</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">Digital book — instant PDF download</p>
                    <ul className="mt-2 space-y-1">
                      {["10 focused chapters", "Read in a weekend", "Lifetime access"].map((b) => (
                        <li key={b} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3 h-3 text-primary flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="font-bold text-foreground flex-shrink-0">$19</div>
                </div>
              </div>

              {/* Order bump */}
              <div className="border-t border-border pt-6">
                <label
                  className={`block rounded-xl border-2 border-dashed p-4 cursor-pointer transition-colors ${
                    bumpSelected
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={bumpSelected}
                      onChange={(e) => setBumpSelected(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-primary cursor-pointer"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Zap className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">Add to my order</span>
                      </div>
                      <h3 className="font-semibold text-foreground text-sm leading-tight">Get Found First — 30-Day Action Plan</h3>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        A printable, day-by-day plan that walks you through every strategy in just 30 days.
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-bold text-foreground text-sm">+$27</div>
                      <div className="text-xs text-muted-foreground line-through">$47</div>
                    </div>
                  </div>
                </label>
              </div>

              {/* Total */}
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <span className="font-semibold text-foreground">Total due</span>
                <span className="text-xl font-bold text-foreground">{totalFormatted}</span>
              </div>

              {/* Trust signals */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  Instant PDF download after payment
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  Secure payment — your card is never stored
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Star className="w-3.5 h-3.5 text-primary flex-shrink-0 fill-primary" />
                  Written by the founder of Holy Webs
                </div>
              </div>
            </div>

            {/* RIGHT — Stripe checkout (no wrapper, let Stripe breathe) */}
            <div className="sticky top-6">
              <BookCheckout priceIds={priceIds} stripePublicKey={stripePublicKey ?? ''} supabaseUrl={supabaseUrl ?? ''} supabaseKey={supabaseKey ?? ''} />
            </div>

          </div>
        </div>
      </div>
      </>
    </ErrorBoundary>
  );
}
