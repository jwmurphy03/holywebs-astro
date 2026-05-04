import AnswerSummary from "@/components/AnswerSummary";
import FAQSchema from "@/components/FAQSchema";

type City =
  | "Dallas"
  | "Austin"
  | "San Antonio"
  | "Waco"
  | "Greenville"
  | "Columbia";

interface CityQuickAnswersProps {
  city: City;
}

const cityData: Record<
  City,
  {
    state: string;
    market: string;
    localAngle: string;
    priority: string;
    serviceAreas: string;
  }
> = {
  Dallas: {
    state: "Texas",
    market: "DFW",
    localAngle:
      "Dallas is really a collection of search markets. Plano, Frisco, McKinney, Irving, and the city core all have different competition, different buyers, and different service-area intent.",
    priority:
      "Start with local SEO and Google Business Profile work if you already have steady reviews. Add Google Ads when you want faster call volume in specific suburbs or service lines.",
    serviceAreas:
      "Your content should name the parts of DFW you actually serve, then back that up with relevant services, proof, and internal links. A broad Dallas page by itself will leave too much demand uncovered.",
  },
  Austin: {
    state: "Texas",
    market: "Greater Austin",
    localAngle:
      "Austin buyers research hard. They compare reviews, websites, photos, and local proof before they call, especially in fast-growing areas like Round Rock, Cedar Park, Georgetown, and Dripping Springs.",
    priority:
      "A fast website and strong review profile matter here. Pair that with service pages that answer real questions, then use paid search for urgent jobs and competitive neighborhoods.",
    serviceAreas:
      "Austin pages should separate the city core, northern suburbs, Hill Country communities, and south corridor when those areas matter to your business.",
  },
  "San Antonio": {
    state: "Texas",
    market: "Greater San Antonio",
    localAngle:
      "San Antonio has military families, long-time homeowners, tourism demand, and fast-growing suburbs all moving at once. Stone Oak, Alamo Heights, Boerne, New Braunfels, and Southtown do not search the same way.",
    priority:
      "Google Business Profile, reviews, and a clear website are the foundation. Google Ads can work well when it is built around the right neighborhoods and not spread thin across the whole metro.",
    serviceAreas:
      "The page should tell Google and customers exactly where you work, then connect those places to the services that drive revenue.",
  },
  Waco: {
    state: "Texas",
    market: "Central Texas",
    localAngle:
      "Waco is smaller than the major metros, but it has strong local intent. Baylor, Magnolia tourism, Woodway, Hewitt, Robinson, and China Spring create different pockets of demand.",
    priority:
      "For Waco businesses, the quickest wins often come from cleaning up Google Business Profile signals, tightening the website, and making service-area relevance obvious.",
    serviceAreas:
      "A good Waco page should sound local without pretending every business serves every nearby town. Specificity beats a long list of places you barely cover.",
  },
  Greenville: {
    state: "South Carolina",
    market: "the Upstate",
    localAngle:
      "Greenville is not just downtown. Simpsonville, Greer, Mauldin, Travelers Rest, Spartanburg, and Anderson all shape how Upstate customers search and choose service companies.",
    priority:
      "Local SEO and website trust signals should come first. Paid search is useful when you want to target high-value services in specific Upstate communities.",
    serviceAreas:
      "The page should explain the Upstate market clearly, then link people toward the services and guides that help them make a smart next move.",
  },
  Columbia: {
    state: "South Carolina",
    market: "the Midlands",
    localAngle:
      "Columbia has state government, USC, Fort Jackson, healthcare, and fast-growing Lexington County all feeding local demand. That mix creates a different search pattern than Charleston or Greenville.",
    priority:
      "GBP optimization, strong city content, and review growth are usually the first moves. Google Ads can support urgent services while organic rankings build.",
    serviceAreas:
      "A Midlands strategy should speak to Columbia, Lexington, Irmo, Chapin, West Columbia, and Forest Acres with useful context instead of city-name stuffing.",
  },
};

const linkClass = "font-semibold text-primary hover:text-primary/80 underline underline-offset-4";

export default function CityQuickAnswers({ city }: CityQuickAnswersProps) {
  const data = cityData[city];
  const schemaFaqs = [
    {
      q: `What makes ${city} different from other markets?`,
      a: data.localAngle,
    },
    {
      q: `What should a ${city} service business fix first?`,
      a: data.priority,
    },
    {
      q: `Which digital marketing services matter most in ${city}?`,
      a: "Most service businesses need local SEO, Google Business Profile optimization, a website that converts, and Google Ads when they need leads sooner.",
    },
    {
      q: `How should service areas be handled in ${data.state}?`,
      a: data.serviceAreas,
    },
  ];

  return (
    <>
      <FAQSchema faqs={schemaFaqs} />
      <AnswerSummary
        eyebrow="Local Answers"
        heading={`Digital marketing in ${city}, answered plainly`}
        intro={`If you run a service business in ${data.market}, the real question is not whether you need more marketing. It is where the next best lead should come from and what has to be fixed first.`}
        variant="muted"
        items={[
          {
            question: `What makes ${city} different from other markets?`,
            answer: data.localAngle,
          },
          {
            question: `What should a ${city} service business fix first?`,
            answer: data.priority,
          },
          {
            question: "Which services matter most?",
            answer: (
              <>
                Most businesses need the same core pieces working together:{" "}
                <a href="/services/seo" className={linkClass}>
                  local SEO
                </a>
                ,{" "}
                <a href="/services/google-business-profile" className={linkClass}>
                  Google Business Profile optimization
                </a>
                ,{" "}
                <a href="/services/web-design" className={linkClass}>
                  a website that converts
                </a>
                , and{" "}
                <a href="/services/google-ads" className={linkClass}>
                  Google Ads
                </a>{" "}
                when you need leads sooner.
              </>
            ),
          },
          {
            question: `How should service areas be handled in ${data.state}?`,
            answer: (
              <>
                {data.serviceAreas} For the bigger picture, start with the{" "}
                <a href="/resources/local-seo-guide-service-businesses" className={linkClass}>
                  local SEO guide
                </a>{" "}
                or request a{" "}
                <a href="/resources/free-visibility-audit" className={linkClass}>
                  free visibility audit
                </a>
                .
              </>
            ),
          },
        ]}
      />
    </>
  );
}
