export const SITE_URL = "https://holywebs.com";
export const SITE_NAME = "Holy Webs";
export const DEFAULT_OG_IMAGE = "/og/og-seo.jpg";
export const PHONE = "(843) 847-0181";
export const EMAIL = "hello@holywebs.com";

export const serviceAreas = [
  { "@type": "State", name: "Texas" },
  { "@type": "State", name: "South Carolina" },
  { "@type": "City", name: "Houston" },
  { "@type": "City", name: "Dallas" },
  { "@type": "City", name: "Austin" },
  { "@type": "City", name: "San Antonio" },
  { "@type": "City", name: "Waco" },
  { "@type": "City", name: "Charleston" },
  { "@type": "City", name: "Greenville" },
  { "@type": "City", name: "Columbia" },
];

export const sameAs = [
  "https://www.facebook.com/holywebs",
  "https://www.linkedin.com/company/holy-webs",
];

export function absoluteUrl(pathOrUrl = "/") {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  return new URL(pathOrUrl, SITE_URL).href;
}

export function cleanCanonical(url: string) {
  const parsed = new URL(url, SITE_URL);
  parsed.hash = "";
  parsed.search = "";

  const isHome = parsed.pathname === "/";
  const hasFileExtension = /\.[a-z0-9]+$/i.test(parsed.pathname);

  if (!isHome && !hasFileExtension && !parsed.pathname.endsWith("/")) {
    parsed.pathname = `${parsed.pathname}/`;
  }

  return parsed.href;
}

export function getRobotsForPath(pathname: string, explicitRobots?: string) {
  if (explicitRobots) return explicitRobots;

  const noIndexPaths = [
    "/book/checkout",
    "/book/thank-you",
    "/free",
    "/workshop/replay",
    "/workshop/thank-you",
  ];

  return noIndexPaths.includes(pathname) ? "noindex, nofollow" : "index, follow, max-image-preview:large";
}

export function breadcrumbsFromUrl(canonicalUrl: string) {
  const parsed = new URL(canonicalUrl);
  const segments = parsed.pathname.split("/").filter(Boolean);
  const crumbs = [{ name: "Home", url: SITE_URL }];
  let path = "";

  for (const segment of segments) {
    path += `/${segment}`;
    crumbs.push({
      name: segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      url: absoluteUrl(path),
    });
  }

  return crumbs;
}

export function organizationSchema() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/assets/logo-color.png"),
    },
    image: absoluteUrl("/og/og-seo.jpg"),
    description:
      "Holy Webs is a digital marketing agency helping contractors and local service businesses grow with web design, local SEO, Google Ads, Google Business Profile optimization, and answer engine optimization.",
    telephone: PHONE,
    email: EMAIL,
    priceRange: "$$",
    areaServed: serviceAreas,
    knowsAbout: [
      "Local SEO",
      "Answer Engine Optimization",
      "Google AI Overviews",
      "Google Business Profile optimization",
      "Contractor website design",
      "Google Ads for service businesses",
      "Digital marketing for home service companies",
    ],
    sameAs,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(canonicalUrl: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: breadcrumbsFromUrl(canonicalUrl).map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

export function webpageSchema({
  canonicalUrl,
  title,
  description,
  ogImage,
  pageType = "WebPage",
  dateModified,
}: {
  canonicalUrl: string;
  title: string;
  description: string;
  ogImage: string;
  pageType?: string;
  dateModified?: string;
}) {
  return {
    "@type": pageType,
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    headline: title,
    description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(ogImage),
    },
    inLanguage: "en-US",
    ...(dateModified ? { dateModified } : {}),
  };
}

export function serviceSchema({
  canonicalUrl,
  title,
  description,
}: {
  canonicalUrl: string;
  title: string;
  description: string;
}) {
  return {
    "@type": "Service",
    "@id": `${canonicalUrl}#service`,
    name: title.replace(` | ${SITE_NAME}`, ""),
    description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: serviceAreas,
    url: canonicalUrl,
  };
}

export function graphSchema(items: Array<object | undefined | null>) {
  return {
    "@context": "https://schema.org",
    "@graph": items.filter(Boolean),
  };
}
