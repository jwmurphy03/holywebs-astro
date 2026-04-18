import { useState, useRef, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Flame, Wrench, Zap, Home, HardHat, Droplets, TreePine, Calculator, MapPin, BookOpen, Video, Search, FileText, Newspaper } from "lucide-react";
const logoWhite = "/assets/logo-white.png";
const logoColor = "/assets/logo-color.png";

const servicesMegaLinks = [
  { label: "Web Design", to: "/services/web-design", desc: "Sites that turn visitors into booked jobs" },
  { label: "SEO", to: "/services/seo", desc: "Get found on Google Maps and organic search" },
  { label: "Google Ads", to: "/services/google-ads", desc: "Targeted campaigns that generate real leads" },
  { label: "Meta Ads", to: "/services/meta-ads", desc: "Reach ideal customers on Facebook and Instagram" },
  { label: "AEO", to: "/services/aeo", desc: "Show up in AI-powered search results" },
  { label: "Google Business Profile", to: "/services/google-business-profile", desc: "Dominate the local map pack" },
];

const serviceSubLinks = servicesMegaLinks.map(({ label, to }) => ({ label, to }));

const industryIconMap: Record<string, React.ElementType> = {
  "/industries/hvac": Flame,
  "/industries/plumbing": Wrench,
  "/industries/electrical": Zap,
  "/industries/roofing": Home,
  "/industries/construction": HardHat,
  "/industries/power-washing": Droplets,
  "/industries/landscaping": TreePine,
  "/industries/cpa-bookkeeping": Calculator,
  "/industries/multi-location": MapPin,
};

const industrySubLinks = [
  { label: "HVAC", to: "/industries/hvac" },
  { label: "Plumbing", to: "/industries/plumbing" },
  { label: "Electrical", to: "/industries/electrical" },
  { label: "Roofing", to: "/industries/roofing" },
  { label: "Construction", to: "/industries/construction" },
  { label: "Power Washing", to: "/industries/power-washing" },
  { label: "Landscaping", to: "/industries/landscaping" },
  { label: "CPA & Bookkeeping", to: "/industries/cpa-bookkeeping" },
  { label: "Multi-Location & Franchise", to: "/industries/multi-location" },
];


const locationSubLinks = [
  {
    state: "South Carolina",
    cities: [
      { label: "Charleston", to: "/locations/south-carolina/charleston" },
      { label: "Greenville", to: "/locations/south-carolina/greenville" },
      { label: "Columbia", to: "/locations/south-carolina/columbia" },
    ],
  },
  {
    state: "Texas",
    cities: [
      { label: "Houston", to: "/locations/texas/houston" },
      { label: "Dallas", to: "/locations/texas/dallas" },
      { label: "Austin", to: "/locations/texas/austin" },
      { label: "San Antonio", to: "/locations/texas/san-antonio" },
      { label: "Arlington", to: "/locations/texas/arlington" },
      { label: "Waco", to: "/locations/texas/waco" },
      { label: "Tyler", to: "/locations/texas/tyler" },
      { label: "Huntsville", to: "/locations/texas/huntsville" },
    ],
  },
];

const resourceSubLinks = [
  { label: "Local SEO Guide", to: "/resources/local-seo-guide-service-businesses" },
  { label: "Website Guide", to: "/resources/website-guide-service-businesses" },
  { label: "GBP Optimization Guide", to: "/resources/google-business-profile-guide" },
  { label: "Free Visibility Audit", to: "/resources/free-visibility-audit" },
  { label: "Blog", to: "/resources/blog" },
];

const navLinks = [
  { label: "About", to: "/about" },
];

const highlightedLink = { label: "Free Workshop", to: "/workshop" };

type DropdownKey = "services" | "industries" | "locations" | "resources" | null;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (key: DropdownKey) => {
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  const handleMouseEnter = useCallback((key: DropdownKey) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setActiveDropdown(key);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  }, []);

  const renderServicesMegaMenu = () => (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter("services")}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => toggleDropdown("services")}
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          location.pathname.startsWith("/services")
            ? "text-primary"
            : "text-white/80 hover:text-primary"
        }`}
      >
        Services
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
      </button>
      {activeDropdown === "services" && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[580px] bg-dark border border-white/10 rounded-lg shadow-2xl p-6">
          <Link
            to="/services"
            onClick={() => setActiveDropdown(null)}
            className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-3 hover:text-primary transition-colors"
          >
            All Services
          </Link>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1">
            <div className="space-y-1">
              {servicesMegaLinks.slice(0, 3).map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setActiveDropdown(null)}
                  className={`block px-3 py-2.5 rounded-md transition-colors hover:bg-white/5 group ${
                    location.pathname === s.to ? "bg-white/5" : ""
                  }`}
                >
                  <span className={`text-sm font-medium ${location.pathname === s.to ? "text-primary" : "text-white/90 group-hover:text-primary"}`}>
                    {s.label}
                  </span>
                  <span className="block text-xs text-white/40 mt-0.5">{s.desc}</span>
                </Link>
              ))}
            </div>
            <div className="space-y-1">
              {servicesMegaLinks.slice(3, 6).map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setActiveDropdown(null)}
                  className={`block px-3 py-2.5 rounded-md transition-colors hover:bg-white/5 group ${
                    location.pathname === s.to ? "bg-white/5" : ""
                  }`}
                >
                  <span className={`text-sm font-medium ${location.pathname === s.to ? "text-primary" : "text-white/90 group-hover:text-primary"}`}>
                    {s.label}
                  </span>
                  <span className="block text-xs text-white/40 mt-0.5">{s.desc}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-white/5 mt-4 pt-4">
            <div className="bg-white/5 border border-primary/30 rounded-lg px-5 py-4 flex items-center justify-between gap-4">
              <div>
                <span className="text-sm font-semibold text-white">Not Sure Where to&nbsp;Start?</span>
                <p className="text-xs text-white/50 mt-0.5">Get a free audit of your online visibility and a clear action plan.</p>
              </div>
              <Link
                to="/resources/free-visibility-audit"
                onClick={() => setActiveDropdown(null)}
                className="btn-primary text-xs !px-4 !py-2 whitespace-nowrap"
              >
                Free Visibility Audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const industryColumns = [
    industrySubLinks.slice(0, 5),
    industrySubLinks.slice(5),
  ];

  const renderIndustriesMegaMenu = () => (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter("industries")}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => toggleDropdown("industries")}
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          location.pathname.startsWith("/industries")
            ? "text-primary"
            : "text-white/80 hover:text-primary"
        }`}
      >
        Industries
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
      </button>
      {activeDropdown === "industries" && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] bg-dark border border-white/10 rounded-lg shadow-2xl p-6">
          <Link
            to="/industries"
            onClick={() => setActiveDropdown(null)}
            className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-3 hover:text-primary transition-colors"
          >
            All Industries
          </Link>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1">
            {industryColumns.map((col, ci) => (
              <div key={ci} className="space-y-1">
                {col.map((ind) => {
                  const Icon = industryIconMap[ind.to];
                  return (
                    <Link
                      key={ind.to}
                      to={ind.to}
                      onClick={() => setActiveDropdown(null)}
                      className={`flex items-center gap-2.5 px-3 py-2.5 rounded-md transition-colors hover:bg-white/5 group ${
                        location.pathname === ind.to ? "bg-white/5" : ""
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4 text-primary flex-shrink-0" />}
                      <span className={`text-sm font-medium ${location.pathname === ind.to ? "text-primary" : "text-white/80 group-hover:text-primary"}`}>
                        {ind.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="border-t border-white/5 mt-4 pt-3">
            <Link
              to="/contact"
              onClick={() => setActiveDropdown(null)}
              className="text-sm text-white/60 hover:text-primary transition-colors flex items-center gap-1"
            >
              Don't see your industry? Let's talk <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );

  const renderResourcesMegaMenu = () => (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter("resources")}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => toggleDropdown("resources")}
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          location.pathname.startsWith("/resources") || location.pathname.startsWith("/book") || location.pathname.startsWith("/workshop")
            ? "text-primary"
            : "text-white/80 hover:text-primary"
        }`}
      >
        Resources
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "resources" ? "rotate-180" : ""}`} />
      </button>
      {activeDropdown === "resources" && (
        <div className="absolute top-full right-0 mt-3 w-[560px] bg-dark border border-white/10 rounded-lg shadow-2xl p-6">
          <div className="grid grid-cols-2 gap-x-8">
            {/* Left column - Featured */}
            <div className="space-y-1">
              <span className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">Featured</span>
              <Link
                to="/book"
                onClick={() => setActiveDropdown(null)}
                className="flex items-start gap-3 px-3 py-2.5 rounded-md hover:bg-white/5 group"
              >
                <BookOpen className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-white/90 group-hover:text-primary">The Local Marketing Book</span>
                  <span className="block text-xs text-white/40 mt-0.5">The playbook for local service businesses</span>
                </div>
              </Link>
              <Link
                to="/workshop"
                onClick={() => setActiveDropdown(null)}
                className="flex items-start gap-3 px-3 py-2.5 rounded-md hover:bg-white/5 group"
              >
                <Video className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-white/90 group-hover:text-primary">Free Workshop</span>
                  <span className="block text-xs text-white/40 mt-0.5">Live training for contractors and service pros</span>
                </div>
              </Link>
              <Link
                to="/resources/free-visibility-audit"
                onClick={() => setActiveDropdown(null)}
                className="flex items-start gap-3 px-3 py-2.5 rounded-md hover:bg-white/5 group"
              >
                <Search className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-sm font-medium text-white/90 group-hover:text-primary">Free Visibility Audit</span>
                  <span className="block text-xs text-white/40 mt-0.5">See how your business shows up online</span>
                </div>
              </Link>
            </div>
            {/* Right column - Guides & Blog */}
            <div className="space-y-1">
              <span className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">Guides</span>
              <Link
                to="/resources/local-seo-guide-service-businesses"
                onClick={() => setActiveDropdown(null)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-white/5 group"
              >
                <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-white/80 group-hover:text-primary">Local SEO Guide</span>
              </Link>
              <Link
                to="/resources/website-guide-service-businesses"
                onClick={() => setActiveDropdown(null)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-white/5 group"
              >
                <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-white/80 group-hover:text-primary">Website Guide</span>
              </Link>
              <Link
                to="/resources/google-business-profile-guide"
                onClick={() => setActiveDropdown(null)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-white/5 group"
              >
                <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-white/80 group-hover:text-primary">GBP Optimization Guide</span>
              </Link>
              <Link
                to="/resources/google-ads-guide-contractors"
                onClick={() => setActiveDropdown(null)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-white/5 group"
              >
                <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-white/80 group-hover:text-primary">Google Ads Guide</span>
              </Link>
              <Link
                to="/resources/online-reviews-reputation-guide"
                onClick={() => setActiveDropdown(null)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-white/5 group"
              >
                <FileText className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-white/80 group-hover:text-primary">Reviews &amp; Reputation Guide</span>
              </Link>
              <div className="border-t border-white/5 mt-2 pt-2">
                <Link
                  to="/resources/blog"
                  onClick={() => setActiveDropdown(null)}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-md hover:bg-white/5 group"
                >
                  <Newspaper className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-white/80 group-hover:text-primary">Blog</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 mt-4 pt-3">
            <Link
              to="/resources"
              onClick={() => setActiveDropdown(null)}
              className="text-sm text-white/60 hover:text-primary transition-colors flex items-center gap-1"
            >
              View all resources <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );


  const renderDropdown = (
    label: string,
    key: DropdownKey,
    allLink: string,
    subLinks: { label: string; to: string }[],
    pathPrefix: string
  ) => (
    <div className="relative">
      <button
        onClick={() => toggleDropdown(key)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          location.pathname.startsWith(pathPrefix)
            ? "text-primary"
            : "text-white/80 hover:text-primary"
        }`}
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === key ? "rotate-180" : ""}`} />
      </button>
      {activeDropdown === key && (
        <div className="absolute top-full left-0 mt-3 w-72 bg-dark border border-white/10 rounded-lg shadow-xl py-2">
          <Link
            to={allLink}
            onClick={() => setActiveDropdown(null)}
            className="block px-4 py-2.5 text-sm text-white/60 hover:text-primary hover:bg-white/5 transition-colors"
          >
            All {label}
          </Link>
          <div className="border-t border-white/5 my-1" />
          {subLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setActiveDropdown(null)}
              className={`block px-4 py-2.5 text-sm transition-colors ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-white/80 hover:text-primary hover:bg-white/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
  const renderLocationsMegaMenu = () => (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter("locations")}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => toggleDropdown("locations")}
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          location.pathname.startsWith("/locations")
            ? "text-primary"
            : "text-white/80 hover:text-primary"
        }`}
      >
        Locations
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "locations" ? "rotate-180" : ""}`} />
      </button>
      {activeDropdown === "locations" && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] bg-dark border border-white/10 rounded-lg shadow-2xl p-6">
          <Link
            to="/locations"
            onClick={() => setActiveDropdown(null)}
            className="block text-xs font-semibold uppercase tracking-wider text-white/40 mb-3 hover:text-primary transition-colors"
          >
            All Locations
          </Link>
          <div className="grid grid-cols-2 gap-x-8">
            {locationSubLinks.map((group) => (
              <div key={group.state}>
                <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  {group.state}
                </span>
                <div className="space-y-1 mb-4">
                  {group.cities.map((city) => (
                    <Link
                      key={city.to}
                      to={city.to}
                      onClick={() => setActiveDropdown(null)}
                      className={`block px-3 py-2 rounded-md transition-colors hover:bg-white/5 group ${
                        location.pathname === city.to ? "bg-white/5" : ""
                      }`}
                    >
                      <span className={`text-sm font-medium ${location.pathname === city.to ? "text-primary" : "text-white/80 group-hover:text-primary"}`}>
                        {city.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-white/5 mt-2 pt-3">
            <Link
              to="/contact"
              onClick={() => setActiveDropdown(null)}
              className="text-sm text-white/60 hover:text-primary transition-colors flex items-center gap-1"
            >
              Don't see your city? Let's talk <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );

  const renderMobileLocationsAccordion = () => (
    <>
      <button
        onClick={() => setMobileLocationsOpen(!mobileLocationsOpen)}
        className="flex items-center justify-between w-full py-3 text-white/80 hover:text-primary font-medium"
      >
        Locations
        <ChevronDown className={`w-4 h-4 transition-transform ${mobileLocationsOpen ? "rotate-180" : ""}`} />
      </button>
      {mobileLocationsOpen && (
        <div className="pl-4 pb-2">
          {locationSubLinks.map((group) => (
            <div key={group.state}>
              <span className="block py-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                {group.state}
              </span>
              {group.cities.map((city) => (
                <Link
                  key={city.to}
                  to={city.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-white/70 hover:text-primary"
                >
                  {city.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            to="/locations"
            onClick={() => setOpen(false)}
            className="block py-2 text-sm text-primary font-semibold"
          >
            View All Locations →
          </Link>
        </div>
      )}
    </>
  );


  const renderMobileAccordion = (
    label: string,
    isOpen: boolean,
    toggle: () => void,
    allLink: string,
    subLinks: { label: string; to: string }[]
  ) => (
    <>
      <button
        onClick={toggle}
        className="flex items-center justify-between w-full py-3 text-white/80 hover:text-primary font-medium"
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pl-4 pb-2">
          <Link
            to={allLink}
            onClick={() => setOpen(false)}
            className="block py-2 text-sm text-white/60 hover:text-primary"
          >
            All {label}
          </Link>
          {subLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-white/70 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8 h-16">
        <Link to="/">
          <img src={logoWhite} alt="Holy Webs" className="h-8 w-[160px]" width={160} height={32} />
        </Link>

        {/* Desktop */}
        <div ref={navRef} className="hidden md:flex items-center gap-8 ml-4">
          {renderServicesMegaMenu()}
          {renderIndustriesMegaMenu()}
          {renderLocationsMegaMenu()}
          {renderResourcesMegaMenu()}

          <Link
            to={highlightedLink.to}
            className={`text-sm font-medium transition-colors ${
              location.pathname.startsWith(highlightedLink.to)
                ? "text-primary"
                : "text-primary hover:text-primary/80"
            }`}
          >
            {highlightedLink.label}
            <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wider bg-primary/15 text-primary px-1.5 py-0.5 rounded">Live</span>
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname.startsWith(link.to)
                  ? "text-primary"
                  : "text-white/80 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-sm !px-6 !py-2.5 ml-4">
            Let's Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-dark-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark border-t border-white/10 px-4 pb-6 pt-2">
          {renderMobileAccordion("Services", mobileServicesOpen, () => setMobileServicesOpen(!mobileServicesOpen), "/services", serviceSubLinks)}
          {renderMobileAccordion("Industries", mobileIndustriesOpen, () => setMobileIndustriesOpen(!mobileIndustriesOpen), "/industries", industrySubLinks)}
          {renderMobileLocationsAccordion()}
          {renderMobileAccordion("Resources", mobileResourcesOpen, () => setMobileResourcesOpen(!mobileResourcesOpen), "/resources", resourceSubLinks)}
          <Link
            to={highlightedLink.to}
            onClick={() => setOpen(false)}
            className="block py-3 text-primary hover:text-primary/80 font-medium"
          >
            {highlightedLink.label}
            <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wider bg-primary/15 text-primary px-1.5 py-0.5 rounded">Live</span>
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-white/80 hover:text-primary font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full justify-center text-sm !py-3"
          >
            Let's Talk
          </Link>
        </div>
      )}
      {/* Scroll progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-transparent">
        <div
          className="h-full bg-primary transition-[width] duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}
