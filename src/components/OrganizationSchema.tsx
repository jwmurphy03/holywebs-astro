export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Holy Webs",
    url: "https://holywebs.com",
    logo: "https://holywebs.com/assets/logo-white.png",
    description:
      "Web design, SEO, Google Ads, and local digital marketing for contractors and service businesses across Texas and South Carolina.",
    telephone: "(843) 847-0181",
    email: "hello@holywebs.com",
    areaServed: [
      { "@type": "State", name: "Texas" },
      { "@type": "State", name: "South Carolina" },
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
