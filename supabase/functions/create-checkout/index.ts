import Stripe from "https://esm.sh/stripe@14?target=deno";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") as string, {
  apiVersion: "2024-04-10",
});

// Accepts either a price ID (price_...) or product ID (prod_...)
// If a product ID, looks up the first active price for that product
async function resolvePriceId(id: string): Promise<string> {
  if (id.startsWith("price_")) return id;
  const prices = await stripe.prices.list({ product: id, active: true, limit: 1 });
  if (!prices.data.length) throw new Error(`No active price found for product: ${id}`);
  return prices.data[0].id;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  try {
    const { priceIds, customerEmail, returnUrl } = await req.json();

    if (!priceIds?.length) {
      return Response.json({ error: "priceIds required" }, { status: 400 });
    }

    const resolvedPriceIds = await Promise.all(priceIds.map(resolvePriceId));

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      payment_method_types: ["card"],
      line_items: resolvedPriceIds.map((price: string) => ({ price, quantity: 1 })),
      mode: "payment",
      customer_email: customerEmail || undefined,
      return_url: returnUrl || "https://holywebs.com/book/thank-you?session_id={CHECKOUT_SESSION_ID}",
    });

    return Response.json(
      { clientSecret: session.client_secret },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
        },
      }
    );
  } catch (err) {
    console.error("Checkout error:", err);
    return Response.json(
      { error: err instanceof Error ? err.message : "Unknown error" },
      { status: 500, headers: { "Access-Control-Allow-Origin": "*" } }
    );
  }
});
