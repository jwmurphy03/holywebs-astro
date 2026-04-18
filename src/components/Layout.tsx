
// In Astro, the Layout shell (Navbar, Footer, meta tags) is handled by Layout.astro.
// This component is a passthrough so React page components render their content only.
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
