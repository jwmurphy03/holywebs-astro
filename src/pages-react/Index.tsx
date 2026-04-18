import { Helmet } from "react-helmet-async";
import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import WhySection from "@/components/home/WhySection";
import SocialProofSection from "@/components/home/SocialProofSection";
import FounderSection from "@/components/home/FounderSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import LocationsSection from "@/components/home/LocationsSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import FinalCTASection from "@/components/home/FinalCTASection";

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <title>Holy Webs | Digital Marketing for Local Service Businesses</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Web design, SEO, Google Ads, and local marketing for contractors and service businesses across Texas and South Carolina." />
        <link rel="canonical" href="https://holywebs.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Holy Webs",
            url: "https://holywebs.com",
            telephone: "843-847-0181",
            email: "hello@holywebs.com",
            description: "Digital marketing agency specializing in SEO, web design, Google Ads, and local marketing for home service contractors across Texas and South Carolina.",
            logo: "https://holywebs.com/assets/logo-white.png",
            priceRange: "$$",
            areaServed: [
              { "@type": "State", name: "Texas" },
              { "@type": "State", name: "South Carolina" }
            ],
            sameAs: [
              "https://www.google.com/maps/place/Holy+Webs",
              "https://www.linkedin.com/company/holy-webs"
            ]
          })}
        </script>
      </Helmet>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <HowItWorksSection />
      <WhySection />
      <SocialProofSection />
      <FounderSection />
      <PortfolioSection />
      <LocationsSection />
      <ResourcesSection />
      <FinalCTASection />
    </Layout>
  );
}
