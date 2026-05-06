
const logoWhite = "/assets/logo-white.png";

const serviceLinks = [
  { label: "Web Design", to: "/services/web-design" },
  { label: "SEO", to: "/services/seo" },
  { label: "Google Ads", to: "/services/google-ads" },
  { label: "Meta Ads", to: "/services/meta-ads" },
  { label: "AEO", to: "/services/aeo" },
  { label: "Google Business Profile", to: "/services/google-business-profile" },
  { label: "Social Media", to: "/services/social-media" },
];

const industryLinks = [
  { label: "HVAC", to: "/industries/hvac" },
  { label: "Plumbing", to: "/industries/plumbing" },
  { label: "Electrical", to: "/industries/electrical" },
  { label: "Roofing", to: "/industries/roofing" },
  { label: "Construction", to: "/industries/construction" },
  { label: "Power Washing", to: "/industries/power-washing" },
  { label: "CPA & Bookkeeping", to: "/industries/cpa-bookkeeping" },
  { label: "Landscaping", to: "/industries/landscaping" },
];

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "FAQ", to: "/faq" },
  { label: "Free Tools", to: "/resources" },
  { label: "Free Visibility Audit", to: "/resources/free-visibility-audit" },
  { label: "Free Workshop", to: "/workshop" },
];

const locationGroups = [
  {
    state: "South Carolina",
    stateTo: "/locations/south-carolina",
    cities: [
      { label: "Charleston", to: "/locations/south-carolina/charleston" },
      { label: "Greenville", to: "/locations/south-carolina/greenville" },
      { label: "Columbia", to: "/locations/south-carolina/columbia" },
    ],
    seeAll: { label: "See All SC Markets →", to: "/locations/south-carolina" },
  },
  {
    state: "Texas",
    stateTo: "/locations/texas",
    cities: [
      { label: "Houston", to: "/locations/texas/houston" },
      { label: "Waco", to: "/locations/texas/waco" },
      { label: "Dallas", to: "/locations/texas/dallas" },
      { label: "Austin", to: "/locations/texas/austin" },
    ],
    seeAll: { label: "See All Texas Markets →", to: "/locations/texas" },
  },
];

export default function Footer() {
  return (
    <footer className="section-dark py-16 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-12">
          {/* Column 1: Brand & Locations */}
          <div className="space-y-6">
            <div>
              <a href="/">
                <img src={logoWhite} alt="Holy Webs" className="h-8" width={160} height={32} />
              </a>
              <p className="text-white/60 mt-3 text-sm leading-relaxed">
                Digital marketing for local service businesses that want to dominate their market.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">
                Locations
              </p>
              <div className="space-y-2.5">
                {locationGroups.map((group) => (
                  <div key={group.state}>
                    <div className="flex flex-wrap items-center gap-x-0.5 text-sm leading-relaxed">
                      <a href={group.stateTo} className="font-bold text-white/70 hover:text-primary transition-colors mr-1">
                        {group.state}:
                      </a>
                      {group.cities.map((city, i) => (
                        <span key={city.to} className="inline-flex items-center">
                          <a
                            href={city.to}
                            className="text-white/50 hover:text-primary transition-colors"
                          >
                            {city.label}
                          </a>
                          {i < group.cities.length - 1 && (
                            <span className="text-white/25 mx-1">|</span>
                          )}
                        </span>
                      ))}
                      {group.seeAll && (
                        <>
                          <span className="text-white/25 mx-1">|</span>
                          <a
                            href={group.seeAll.to}
                            className="text-primary/70 hover:text-primary transition-colors font-medium"
                          >
                            {group.seeAll.label}
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Services</h4>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  className="text-sm text-white/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  className={
                    link.to === "/workshop"
                      ? "text-sm text-primary font-semibold hover:text-primary/80 transition-colors"
                      : "text-sm text-white/60 hover:text-primary transition-colors"
                  }
                >
                  {link.label}
                  {link.to === "/workshop" && <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wider bg-primary/15 text-primary px-1.5 py-0.5 rounded">Live</span>}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Industries */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Industries</h4>
            <div className="flex flex-col gap-3">
              {industryLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  className="text-sm text-white/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 5: CTA */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Ready to Grow?</h4>
              <p className="text-sm text-white/60 mb-5">
                Let's build a digital presence that actually works for your business.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm"
              >
                Let's Talk
              </a>
            </div>

            <div className="space-y-2">
              <a
                href="tel:843-847-0181"
                className="block text-sm text-white/60 hover:text-primary transition-colors"
              >
                Phone: 843-847-0181
              </a>
              <a
                href="mailto:hello@holywebs.com"
                className="block text-sm text-white/60 hover:text-primary transition-colors"
              >
                hello@holywebs.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© 2026 Holy Webs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="text-sm text-white/40 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-white/40 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
