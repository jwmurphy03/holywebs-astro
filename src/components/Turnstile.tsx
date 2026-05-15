import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback": () => void;
          "error-callback": () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}

interface TurnstileProps {
  onVerify: (token: string) => void;
  onExpire: () => void;
  theme?: "light" | "dark" | "auto";
}

const siteKey = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY;
export const isTurnstileEnabled = Boolean(siteKey);
let turnstileScriptPromise: Promise<void> | null = null;

function loadTurnstileScript() {
  if (window.turnstile) return Promise.resolve();
  if (turnstileScriptPromise) return turnstileScriptPromise;

  turnstileScriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>('script[src^="https://challenges.cloudflare.com/turnstile/v0/api.js"]');
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Turnstile failed to load")), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Turnstile failed to load"));
    document.head.appendChild(script);
  });

  return turnstileScriptPromise;
}

export default function Turnstile({ onVerify, onExpire, theme = "auto" }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    if (!siteKey) return;

    loadTurnstileScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.turnstile || widgetIdRef.current) return;

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme,
          callback: (token) => {
            setFailed(false);
            onVerify(token);
          },
          "expired-callback": onExpire,
          "error-callback": () => {
            setFailed(true);
            onExpire();
          },
        });
      })
      .catch(() => {
        setFailed(true);
        onExpire();
      });

    return () => {
      cancelled = true;
    };
  }, [onExpire, onVerify, theme]);

  if (!isTurnstileEnabled) return null;

  return (
    <div className="space-y-2">
      <div ref={containerRef} />
      {failed && (
        <p className="text-sm text-destructive">
          Verification could not load. Please refresh the page and try again.
        </p>
      )}
    </div>
  );
}
