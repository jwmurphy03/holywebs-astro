import { useCallback, useMemo } from "react";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { createClient } from "@supabase/supabase-js";
import { getStripe, getStripeEnvironment } from "@/lib/stripe";

interface BookCheckoutProps {
  stripePublicKey: string;
  supabaseUrl: string;
  supabaseKey: string;
  priceIds: string[];
  customerEmail?: string;
  returnUrl?: string;
}

export function BookCheckout({ stripePublicKey, supabaseUrl, supabaseKey, priceIds, customerEmail, returnUrl }: BookCheckoutProps) {
  const supabase = useMemo(() => createClient(supabaseUrl, supabaseKey), [supabaseUrl, supabaseKey]);
  const key = useMemo(() => priceIds.join("|"), [priceIds]);
  const stripeEnvironment = getStripeEnvironment(stripePublicKey);

  const fetchClientSecret = useCallback(async (): Promise<string> => {
    const { data, error } = await supabase.functions.invoke("create-checkout", {
      body: {
        priceIds,
        customerEmail,
        returnUrl:
          returnUrl ||
          `${window.location.origin}/book/thank-you?session_id={CHECKOUT_SESSION_ID}`,
        environment: stripeEnvironment,
      },
    });
    if (error || !data?.clientSecret) {
      throw new Error(error?.message || "Failed to create checkout session");
    }
    return data.clientSecret as string;
  }, [supabase, priceIds, customerEmail, returnUrl, stripeEnvironment]);

  return (
    <div id="checkout" key={key}>
      <EmbeddedCheckoutProvider stripe={getStripe(stripePublicKey)} options={{ fetchClientSecret }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
