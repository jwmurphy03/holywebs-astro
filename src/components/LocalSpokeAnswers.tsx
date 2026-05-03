import AnswerSummary from "@/components/AnswerSummary";

type City = "Houston" | "Charleston";
type State = "Texas" | "South Carolina";
type Industry = "hvac" | "roofing" | "plumbing" | "construction";
type Service = "seo" | "google-ads" | "google-business-profile" | "web-design";

interface LocalSpokeAnswersProps {
  city: City;
  state: State;
  industry: Industry;
  service: Service;
}

const citySlug: Record<City, string> = {
  Houston: "/locations/texas/houston",
  Charleston: "/locations/south-carolina/charleston",
};

const cityContext: Record<City, string> = {
  Houston:
    "Houston is too large and spread out for broad targeting. Katy, Sugar Land, The Woodlands, Pearland, and the inner loop all behave like separate search markets, so the page needs to prove you understand the neighborhoods where the best jobs actually come from.",
  Charleston:
    "Charleston search behavior shifts by community. Mount Pleasant, Summerville, West Ashley, James Island, and the islands all bring different urgency, budgets, and buyer questions, so local pages need Lowcountry-specific context instead of generic city copy.",
};

const industryContext: Record<Industry, string> = {
  hvac: "HVAC buyers often have immediate comfort problems, but they still want proof that the company understands local climate, neighborhoods, and system issues.",
  roofing: "Roofing buyers are comparing trust, insurance confidence, storm readiness, and proof of completed work before they request an estimate.",
  plumbing: "Plumbing searches are usually urgent, but the best pages also speak to bigger-ticket repairs like repiping, slab leaks, water heaters, and sewer work.",
  construction: "Construction prospects take longer to choose. They need portfolio proof, service-area relevance, and clear signals that the contractor can handle the type of project they are planning.",
};

const industryLabel: Record<Industry, string> = {
  hvac: "HVAC",
  roofing: "roofing",
  plumbing: "plumbing",
  construction: "construction",
};

const industryPage: Record<Industry, string> = {
  hvac: "/industries/hvac",
  roofing: "/industries/roofing",
  plumbing: "/industries/plumbing",
  construction: "/industries/construction",
};

const serviceLabel: Record<Service, string> = {
  seo: "local SEO",
  "google-ads": "Google Ads",
  "google-business-profile": "Google Business Profile optimization",
  "web-design": "website design",
};

const serviceAdvice: Record<Service, string> = {
  seo:
    "The page should quickly answer who you help, where you help them, which searches matter, and why your strategy is built for local ranking signals instead of vague content volume.",
  "google-ads":
    "The page should make the paid-search plan concrete: which services deserve budget, which locations need separate campaigns, how calls are tracked, and how wasted spend gets cut.",
  "google-business-profile":
    "The page should explain how the profile becomes more than a listing: categories, services, photos, reviews, posts, questions, and website alignment all need to support map pack visibility.",
  "web-design":
    "The page should connect design to revenue: fast mobile loading, clear calls to action, service-area content, trust proof, and pages that answer real customer questions before they call.",
};

const serviceVerb: Record<Service, string> = {
  seo: "rank",
  "google-ads": "convert paid clicks",
  "google-business-profile": "show up in the map pack",
  "web-design": "turn visitors into booked jobs",
};

const siblingLabel: Record<Service, string> = {
  seo: "SEO",
  "google-ads": "Google Ads",
  "google-business-profile": "Google Business Profile",
  "web-design": "web design",
};

function linkClass() {
  return "font-semibold text-primary hover:text-primary/80 underline underline-offset-4";
}

function siblingPath(city: City, industry: Industry, service: Service) {
  return `${citySlug[city]}/${industry}/${service}`;
}

export default function LocalSpokeAnswers({ city, state, industry, service }: LocalSpokeAnswersProps) {
  const industryName = industryLabel[industry];
  const serviceName = serviceLabel[service];
  const hubPath = `${citySlug[city]}/${industry}`;
  const otherServices = (["seo", "google-ads", "google-business-profile", "web-design"] as Service[]).filter(
    (item) => item !== service
  );

  return (
    <AnswerSummary
      eyebrow="Local Answers"
      heading={`${city} ${industryName} ${siblingLabel[service]} questions, answered plainly`}
      intro={`A good local spoke page should help a business owner understand the move, not just repeat "${city} ${state}" a dozen times. Here is the practical version.`}
      variant="muted"
      items={[
        {
          question: `What should this ${serviceName} page answer first?`,
          answer: serviceAdvice[service],
        },
        {
          question: `Why does ${city} need its own ${industryName} strategy?`,
          answer: (
            <>
              {cityContext[city]} {industryContext[industry]}
            </>
          ),
        },
        {
          question: `Where should a ${city} ${industryName} company go next?`,
          answer: (
            <>
              Start with the{" "}
              <a className={linkClass()} href={hubPath}>
                {city} {industryName} marketing hub
              </a>
              , then compare the supporting pieces:{" "}
              {otherServices.map((item, index) => (
                <span key={item}>
                  <a className={linkClass()} href={siblingPath(city, industry, item)}>
                    {siblingLabel[item]}
                  </a>
                  {index < otherServices.length - 2 ? ", " : index === otherServices.length - 2 ? ", and " : ""}
                </span>
              ))}
              .
            </>
          ),
        },
        {
          question: "How does this help with SEO and AI answers?",
          answer: (
            <>
              Clear answer blocks, specific local language, and strong internal links help Google and AI tools understand
              what you do, where you do it, and why you are relevant. This spoke supports the broader{" "}
              <a className={linkClass()} href={industryPage[industry]}>
                {industryName} marketing page
              </a>{" "}
              while giving searchers a more useful local answer.
            </>
          ),
        },
      ]}
    />
  );
}
