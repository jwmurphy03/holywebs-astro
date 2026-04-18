import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import OrganizationSchema from "./OrganizationSchema";
import ExitIntentPopup from "./ExitIntentPopup";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const ogUrl = `https://holywebs.com${pathname === "/" ? "" : pathname}`;

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <meta property="og:url" content={ogUrl} />
      </Helmet>
      <OrganizationSchema />
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
      <ExitIntentPopup />
    </div>
  );
}
