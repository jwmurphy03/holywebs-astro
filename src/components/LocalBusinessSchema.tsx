interface LocalBusinessSchemaProps {
  city: string;
  state: string;
  areaServed: string[];
  description: string;
}

export default function LocalBusinessSchema({ city, state, areaServed, description }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://holywebs.com/locations/${state.toLowerCase().replace(/\s/g, "-")}/${city.toLowerCase().replace(/\s/g, "-")}`,
    name: `Holy Webs — ${city}, ${state}`,
    description,
    url: `https://holywebs.com/locations/${state.toLowerCase().replace(/\s/g, "-")}/${city.toLowerCase().replace(/\s/g, "-")}`,
    telephone: "(843) 847-0181",
    email: "hello@holywebs.com",
    areaServed: areaServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    logo: "https://holywebs.com/assets/logo-white.png",
    parentOrganization: {
      "@type": "Organization",
      name: "Holy Webs",
      url: "https://holywebs.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
