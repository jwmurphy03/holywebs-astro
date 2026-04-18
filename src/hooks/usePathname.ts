/**
 * Returns the current pathname safely — works in both SSR and client contexts.
 * Replaces useLocation().pathname from react-router-dom.
 */
export function usePathname(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}
