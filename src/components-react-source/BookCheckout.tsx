import { useCallback, useMemo } from "react";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { getStripe, stripeEnvironment } from "@/lib/stripe";
import { supabase } from "@/integrations/supabase/client";

interface BookCheckoutProps {
  priceIds: string[];
  customerEmail?: string;
  returnUrl?: string;
}

export function BookCheckout({ priceIds, customerEmail, returnUrl }: BookCheckoutProps) {
  // Stable key so the iframe reloads when the order bump toggles
  const key = useMemo(() => priceIds.join("|"), [priceIds]);

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
  }, [priceIds, customerEmail, returnUrl]);

  return (
    <div id="checkout" key={key}>
      <EmbeddedCheckoutProvider stripe={getStripe()} options={{ fetchClientSecret }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
