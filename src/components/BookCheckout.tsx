import { useCallback, useMemo } from "react";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { getStripe, getStripeEnvironment } from "@/lib/stripe";
import { supabase } from "@/integrations/supabase/client";

interface BookCheckoutProps {
  stripePublicKey: string;
  priceIds: string[];
  customerEmail?: string;
  returnUrl?: string;
}

export function BookCheckout({ stripePublicKey, priceIds, customerEmail, returnUrl }: BookCheckoutProps) {
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
  }, [priceIds, customerEmail, returnUrl, stripeEnvironment]);

  return (
    <div id="checkout" key={key}>
      <EmbeddedCheckoutProvider stripe={getStripe(stripePublicKey)} options={{ fetchClientSecret }}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
