import { SITE_URL } from "../lib/seo";

const pages = import.meta.glob("./**/*.astro");
const lastmod = "2026-05-04";
const excluded = new Set([
  "/book/checkout",
  "/book/thank-you",
  "/free",
  "/workshop/replay",
  "/workshop/thank-you",
]);

function routeFromFile(filePath: string) {
  let route = filePath
    .replace(/^\.\//, "/")
    .replace(/\/index\.astro$/, "")
    .replace(/\.astro$/, "");

  if (route === "/index") route = "/";
  if (route.includes("[") || route.includes("]")) return null;
  return route || "/";
}

function priorityFor(route: string) {
  if (route === "/") return "1.0";
  if (["/services", "/industries", "/locations", "/resources", "/workshop"].includes(route)) return "0.8";
  if (route.startsWith("/services/") || route.startsWith("/resources/free-visibility-audit")) return "0.7";
  if (route.startsWith("/locations/") || route.startsWith("/industries/") || route.startsWith("/resources/")) return "0.6";
  if (route === "/privacy-policy" || route === "/terms") return "0.3";
  return "0.7";
}

function changefreqFor(route: string) {
  if (route === "/" || route === "/services" || route === "/resources" || route === "/workshop") return "weekly";
  if (route === "/privacy-policy" || route === "/terms") return "yearly";
  return "monthly";
}

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const routes = Object.keys(pages)
    .map(routeFromFile)
    .filter((route): route is string => Boolean(route))
    .filter((route) => !excluded.has(route))
    .sort((a, b) => {
      if (a === "/") return -1;
      if (b === "/") return 1;
      return a.localeCompare(b);
    });

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map((route) => {
      const loc = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}/`;
      return [
        "  <url>",
        `    <loc>${escapeXml(loc)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${changefreqFor(route)}</changefreq>`,
        `    <priority>${priorityFor(route)}</priority>`,
        "  </url>",
      ].join("\n");
    }),
    "</urlset>",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
