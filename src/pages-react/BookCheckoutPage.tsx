import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ShieldCheck, Lock, Star, Zap } from "lucide-react";
import bookCover from "@/assets/book-cover.png";
import { BookCheckout } from "@/components/BookCheckout";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";

export default function BookCheckoutPage() {
  const [bumpSelected, setBumpSelected] = useState(false);

  const priceIds = useMemo(
    () => (bumpSelected ? ["book_main", "action_plan_bump"] : ["book_main"]),
    [bumpSelected]
  );

  const totalCents = bumpSelected ? 1900 + 2700 : 1900;
  const totalFormatted = `$${(totalCents / 100).toFixed(2)}`;

  return (
    <>
      <Helmet>
        <title>Checkout — Stop Being Invisible | Holy Webs</title>
        <meta name="description" content="Complete your order for the digital book Stop Being Invisible." />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://holywebs.com/book/checkout" />
      </Helmet>

      <PaymentTestModeBanner />

      <div className="min-h-screen bg-muted">
        <header className="bg-background border-b border-border">
          <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to book details
            </Link>
            <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="w-3.5 h-3.5" />
              Secure checkout
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 lg:px-8 py-10 lg:py-14">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
            {/* LEFT — Order summary */}
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
                Complete your order
              </h1>
              <p className="text-muted-foreground mb-8">
                You're one step away from getting the playbook.
              </p>

              <div className="bg-background rounded-2xl border border-border p-6 lg:p-8 mb-6">
                <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                  Your order
                </h2>

                {/* Main item */}
                <div className="flex gap-4 pb-5 border-b border-border">
                  <img
                    src={bookCover}
                    alt="Stop Being Invisible book cover"
                    className="w-20 h-auto rounded-md shadow-md flex-shrink-0"
                    width={80}
                    height={128}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-foreground leading-tight">
                      Stop Being Invisible
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Digital book — instant PDF download
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {[
                        "10 focused chapters",
                        "Read in a weekend",
                        "Lifetime access",
                      ].map((b) => (
                        <li
                          key={b}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-foreground">$19</div>
                  </div>
                </div>

                {/* Order bump */}
                <label
                  className={`mt-5 block rounded-xl border-2 border-dashed p-5 cursor-pointer transition-colors ${
                    bumpSelected
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/40 bg-muted/40"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <input
                      type="checkbox"
                      checked={bumpSelected}
                      onChange={(e) => setBumpSelected(e.target.checked)}
                      className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary cursor-pointer"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          Yes, add this to my order
                        </span>
                      </div>
                      <h3 className="font-bold text-foreground leading-tight">
                        Get Found First — 30-Day Action Plan
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                        A printable, day-by-day implementation plan that walks
                        you through every strategy in the book in just 30 days.
                        The fastest way to actually finish what you start.
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="font-bold text-foreground">+$27</div>
                      <div className="text-xs text-muted-foreground line-through">
                        $47
                      </div>
                    </div>
                  </div>
                </label>

                {/* Total */}
                <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                  <span className="text-lg font-bold text-foreground">Total</span>
                  <span className="text-2xl font-extrabold text-foreground">
                    {totalFormatted}
                  </span>
                </div>
              </div>

              {/* Trust signals */}
              <div className="bg-background rounded-2xl border border-border p-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Instant download &amp; email delivery after payment</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <Lock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Secure payment processing — your card is never stored</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground">
                  <Star className="w-5 h-5 text-primary flex-shrink-0 fill-primary" />
                  <span>Written by the founder of Holy Webs</span>
                </div>
              </div>
            </div>

            {/* RIGHT — Stripe checkout */}
            <div>
              <div className="bg-background rounded-2xl border border-border p-2 lg:p-4 sticky top-6">
                <BookCheckout priceIds={priceIds} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
