import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null> | null = null;
let cachedKey: string | null = null;

export function getStripeEnvironment(key: string): "sandbox" | "live" {
  return key.startsWith("pk_test_") ? "sandbox" : "live";
}

export function getStripe(key: string): Promise<Stripe | null> {
  if (!key) {
    throw new Error("VITE_PAYMENTS_CLIENT_TOKEN is not set");
  }
  if (!stripePromise || cachedKey !== key) {
    cachedKey = key;
    stripePromise = loadStripe(key);
  }
  return stripePromise;
}

export function isTestMode(key: string): boolean {
  return getStripeEnvironment(key) === "sandbox";
}
