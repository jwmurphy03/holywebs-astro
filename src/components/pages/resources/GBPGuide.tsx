import { Helmet } from "react-helmet-async";

import { ArrowLeft, ArrowRight, Clock, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
const heroImg = "/assets/guide-hero-gbp.jpg";

const tocItems = [
  { id: "why-gbp-matters", label: "Why GBP Matters in 2026" },
  { id: "claiming-verifying", label: "Step 1: Claiming & Verifying" },
  { id: "optimizing-profile", label: "Step 2: Optimizing Your Profile" },
  { id: "categories-services", label: "Step 3: Categories & Services" },
  { id: "photos-videos", label: "Step 4: Photos & Videos" },
  { id: "reviews-strategy", label: "Step 5: Reviews Strategy" },
  { id: "posts-updates", label: "Step 6: Posts & Updates" },
  { id: "common-mistakes", label: "Mistakes to Avoid" },
  { id: "conclusion", label: "DIY vs. Hiring an Agency" },
];

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 border-l-4 border-primary pl-6 py-2">
      <p className="text-xl md:text-2xl font-bold text-foreground leading-snug italic">
        {children}
      </p>
    </blockquote>
  );
}

function InlineCTA() {
  return (
    <div className="my-12 rounded-xl bg-dark p-8 md:p-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-primary blur-[100px]" />
      </div>
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">
          Want Us to Handle Your GBP for&nbsp;You?
        </h3>
        <p className="text-white/60 leading-relaxed mb-5 max-w-xl">
          We optimize and manage Google Business Profiles for service businesses across Texas and the Southeast. If you'd rather focus on running your business, let's&nbsp;talk.
        </p>
        <a
          href="/contact"
          className="btn-primary text-sm !px-6 !py-3"
        >
          Let's Talk <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default function GBPGuide() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>The Complete Google Business Profile Guide for Local Service Businesses (2026) | Holy Webs</title>
        <meta
          name="description"
          content="The definitive 2026 guide to Google Business Profile optimization for service businesses. Learn how to claim, optimize, and rank in the Map Pack, step by step."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://holywebs.com/resources/google-business-profile-guide" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The Complete Google Business Profile Guide for Local Service Businesses (2026)",
            description: "The definitive 2026 guide to Google Business Profile optimization for service businesses.",
            author: { "@type": "Organization", name: "Holy Webs" },
            publisher: { "@type": "Organization", name: "Holy Webs" },
            datePublished: "2026-01-15",
            dateModified: "2026-04-06",
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/90 to-dark/75" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-3xl">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Google Business Profile Guide" }]} />
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold tracking-widest uppercase text-primary">Pillar Guide</span>
            <span className="text-white/30">•</span>
            <span className="text-white/50 text-xs flex items-center gap-1"><Clock className="w-3 h-3" /> 25 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-dark-foreground leading-tight mb-6">
            The Complete Google Business Profile Guide for Local Service Businesses (2026)
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl leading-relaxed">
            Everything you need to know about claiming, optimizing, and ranking your Google Business Profile in the Map Pack, from scratch to dominance.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sticky TOC */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Table of Contents
                </h2>
                <nav className="space-y-1">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm py-1.5 pl-3 border-l-2 transition-colors ${
                        activeSection === item.id
                          ? "border-primary text-primary font-semibold"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <article className="flex-1 min-w-0 prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                If you run a local service business, HVAC, plumbing, roofing, electrical, landscaping, your Google Business Profile (GBP) is the single most important piece of online real estate you own. It's what shows up when someone in your area searches for the service you provide. And most business owners are leaving money on the table by ignoring it.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed">
                This guide covers everything: claiming your listing, optimizing every field, earning reviews, using posts strategically, and avoiding the mistakes that keep businesses invisible in local search. Whether you're starting from zero or trying to climb from page two, this is your playbook.
              </p>

              {/* Section 1 */}
              <h2 id="why-gbp-matters" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Why Your Google Business Profile Matters More Than Ever in 2026
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Google's local algorithm has changed dramatically. The Map Pack, those top three results with the map, now captures the vast majority of clicks for local service searches. According to recent data, <strong className="text-foreground">46% of all Google searches have local intent</strong>, and the Map Pack appears in nearly all of them.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Here's what that means for you: if your GBP isn't optimized, you're invisible to nearly half the people searching for services in your area. No amount of website SEO, paid ads, or social media will compensate for a neglected GBP listing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Your GBP profile is often the <strong className="text-foreground">first impression</strong> a potential customer has of your business. They see your photos, your star rating, your hours, and your reviews, all before they ever visit your website. In many cases, they call you directly from the listing without ever clicking through.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Consider the numbers: businesses that appear in the Map Pack receive an estimated <strong className="text-foreground">70% of local search clicks</strong>. The business in position one gets roughly 30% of those clicks, position two gets about 20%, and position three picks up around 15%. Everyone below that splits the remaining scraps, or gets nothing at all.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Google has also introduced AI-powered overviews that pull information directly from GBP listings. If your profile is complete and well-maintained, you have a better chance of being featured in these AI summaries, which is essentially free advertising at the very top of search results.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">The Three Pillars of Local Ranking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Google evaluates local results based on three primary factors:
              </p>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Relevance:</strong> How well your profile matches the searcher's query. This is driven by your categories, services, business description, and even the content of your reviews.</li>
                <li><strong className="text-foreground">Distance:</strong> How close your business is to the searcher. You can't change your physical location, but you can influence how broadly Google associates you with surrounding areas through your service area settings and local content.</li>
                <li><strong className="text-foreground">Prominence:</strong> How well-known and trusted your business is. This is determined by review count and quality, citation consistency, website authority, and overall online presence.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Every optimization in this guide maps back to one or more of these pillars. When you understand what Google is measuring, you can be intentional about every field you fill out and every action you take.
              </p>

              <PullQuote>
                "Your Google Business Profile isn't just a listing, it's your storefront for every local search in your area."
              </PullQuote>

              {/* Section 2 */}
              <h2 id="claiming-verifying" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Step 1: Claiming & Verifying Your Profile
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Before you can optimize anything, you need to claim ownership of your listing. If you've never done this, there's a good chance Google has already created a basic listing for your business, you just don't control it yet.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                An unclaimed listing is a liability. Anyone, including competitors, can suggest edits to your profile. They can change your hours, mark you as "permanently closed," or add incorrect information. Claiming your listing gives you full control and is the essential first step.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">How to Claim Your GBP</h3>
              <ol className="text-muted-foreground space-y-2 leading-relaxed list-decimal pl-6">
                <li>Go to <strong className="text-foreground">business.google.com</strong> and sign in with a Google account you want to manage the profile.</li>
                <li>Search for your business name. If it already exists, click "Claim this business." If not, click "Add your business."</li>
                <li>Follow the prompts to enter your business name, category, address, and phone number.</li>
                <li>Choose a verification method, Google will typically offer postcard, phone, email, or video verification depending on your business type.</li>
                <li>Once verified, you'll receive a confirmation and gain access to the full GBP management dashboard.</li>
              </ol>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Verification Tips</h3>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Postcard verification</strong> can take 1–2 weeks. Don't change your address or business name while waiting, it can reset the process.</li>
                <li><strong className="text-foreground">Video verification</strong> is increasingly common. Be prepared to show your business location, signage, and equipment on camera. Walk through the space and show your business name displayed somewhere visible.</li>
                <li>If your business doesn't have a physical storefront (e.g., you go to customers), you can set up as a <strong className="text-foreground">service-area business</strong> without displaying your address.</li>
                <li><strong className="text-foreground">Multi-location businesses</strong> need a separate verified listing for each physical location. Use a consistent naming convention and designate a primary manager for each listing.</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">What Happens After Verification</h3>
              <p className="text-muted-foreground leading-relaxed">
                Once verified, your profile won't immediately rank well, verification just unlocks access. Think of it as getting the keys to the building. The real work (and the competitive advantage) comes from what you do next: completing every field, uploading photos, generating reviews, and maintaining an active presence.
              </p>

              <InlineCTA />

              {/* Section 3 */}
              <h2 id="optimizing-profile" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Step 2: Optimizing Every Field in Your Profile
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Once verified, most business owners fill in the basics and stop. That's a mistake. Google uses the completeness and accuracy of your profile as a ranking signal. The more thoroughly you fill out your listing, the better you'll rank.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Business Name</h3>
              <p className="text-muted-foreground leading-relaxed">
                Use your <strong className="text-foreground">exact legal business name</strong>, nothing more, nothing less. Don't stuff keywords into your business name (e.g., "Smith Plumbing | Best Plumber in Houston"). Google can and will suspend profiles for keyword stuffing. If you see competitors doing this, report them through the "Suggest an edit" feature on their listing.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Business Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                You get 750 characters. Use all of them. Front-load your primary service and location in the first sentence. Write naturally, this description is for customers, not just search engines. Include your service area, specialties, years of experience, and what makes you different.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Example for a roofing company:</strong> "ABC Roofing has been serving the greater Dallas–Fort Worth area for over 15 years, specializing in residential roof replacements, storm damage repair, and new construction roofing. As a licensed and insured contractor, we work with all major shingle, metal, and tile manufacturers. Our team handles everything from initial inspection and insurance claims assistance to final cleanup. We serve Dallas, Fort Worth, Arlington, Plano, Frisco, and surrounding communities."
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Hours of Operation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Keep these accurate at all times. Set special hours for holidays, Google proactively asks you to confirm holiday hours, and profiles that respond to these prompts get a small ranking boost. If you offer emergency or after-hours service, note that in your description. Inconsistent hours erode trust and can trigger Google penalties.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Phone Number & Website</h3>
              <p className="text-muted-foreground leading-relaxed">
                Use your primary local phone number, not a call-tracking number (unless it's consistent across all your listings). Your website URL should point to your homepage or a dedicated location landing page if you serve multiple areas.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Attributes & Highlights</h3>
              <p className="text-muted-foreground leading-relaxed">
                Google offers a growing list of attributes you can add to your profile, things like "Veteran-owned," "Women-led," "Free estimates," and "Licensed & insured." These appear as badges on your listing and can influence which searches surface your profile. Go through the full attributes list in your GBP dashboard and enable everything that applies. Most competitors skip this entirely.
              </p>

              <PullQuote>
                "A half-filled GBP profile is like a half-open store, people will walk right past it."
              </PullQuote>

              {/* Section 4 */}
              <h2 id="categories-services" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Step 3: Categories & Services, The Hidden Ranking Levers
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Your primary category is arguably the <strong className="text-foreground">single biggest ranking factor</strong> in Google's local algorithm. If you're an HVAC company, your primary category should be "HVAC Contractor", not "Heating Contractor" or "Air Conditioning Contractor" (unless that's your only service).
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Choosing Your Primary Category</h3>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li>Pick the category that best describes your <strong className="text-foreground">core service</strong>.</li>
                <li>Research what categories your top-ranking competitors are using.</li>
                <li>Google has hundreds of categories, be specific. "Roofing Contractor" outperforms "Contractor" for roofing searches.</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Additional Categories</h3>
              <p className="text-muted-foreground leading-relaxed">
                You can add up to 9 additional categories. Use these for secondary services. A plumbing company might add "Water Heater Installation Service," "Drain Cleaning Service," and "Septic System Service." Only add categories that accurately represent services you actively provide.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Services Section</h3>
              <p className="text-muted-foreground leading-relaxed">
                The Services section lets you list specific services with descriptions. This is powerful for long-tail visibility. Add every service you offer with a brief description. Include pricing if you're comfortable, it can increase click-through rates and filter out unqualified leads.
              </p>

              <InlineCTA />

              {/* Section 5 */}
              <h2 id="photos-videos" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Step 4: Photos & Videos That Build Trust
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Businesses with photos receive <strong className="text-foreground">42% more direction requests</strong> and <strong className="text-foreground">35% more website clicks</strong> than those without. Yet most service businesses either have zero photos or only stock images. This is a massive missed opportunity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Google has confirmed that photos are a ranking signal. Listings with more than 100 photos get <strong className="text-foreground">520% more calls</strong> than the average business. You don't need 100 photos on day one, but you need a plan to build your photo library consistently over time.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">What to Upload</h3>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Cover photo:</strong> Your best before-and-after, your branded vehicle, or your team on a job site. This is the first image people see, make it count.</li>
                <li><strong className="text-foreground">Logo:</strong> Clean, high-resolution version of your business logo. Make sure it's square and looks good at small sizes.</li>
                <li><strong className="text-foreground">Work photos:</strong> Before-and-after shots of completed projects. These are gold for service businesses. A roofing company showing a damaged roof next to the finished repair tells a compelling story without a single word.</li>
                <li><strong className="text-foreground">Team photos:</strong> Show the faces behind the business. People hire people they trust. A photo of your crew in uniform on a job site builds more confidence than any marketing copy.</li>
                <li><strong className="text-foreground">Equipment/vehicles:</strong> Branded trucks, professional equipment, these signal legitimacy and professionalism.</li>
                <li><strong className="text-foreground">Interior/exterior of your location:</strong> If you have an office or shop, show it. This helps Google verify your business and gives customers a sense of who you are.</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Photo Best Practices</h3>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li>Upload at least <strong className="text-foreground">10–15 photos</strong> to start, then add 2–3 new photos per week.</li>
                <li>Use real photos, never stock images. Google (and customers) can tell.</li>
                <li>Geo-tag your photos with your service area location data when possible.</li>
                <li>Name your image files descriptively before uploading (e.g., "hvac-installation-houston-tx.jpg" not "IMG_3847.jpg").</li>
                <li>Aim for a mix of photo types, Google categorizes them into "interior," "exterior," "at work," "team," and "identity." Cover all categories.</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Video on GBP</h3>
              <p className="text-muted-foreground leading-relaxed">
                You can upload videos up to 30 seconds long and 75 MB in size. Short walk-throughs of completed projects, time-lapses of installations, or quick "meet the team" clips perform well. Videos don't need to be professionally produced, authenticity matters more than production value. Even a well-lit smartphone video of a finished bathroom remodel or a freshly installed HVAC system can set you apart from competitors who upload nothing.
              </p>

              <PullQuote>
                "The businesses winning the Map Pack aren't necessarily better, they're just better at showing their work."
              </PullQuote>

              {/* Section 6 */}
              <h2 id="reviews-strategy" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Step 5: Building a Review Strategy That Actually Works
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Reviews are the second most important local ranking factor after your primary category. But it's not just about quantity, Google evaluates recency, velocity, diversity of keywords, and your response rate. A business with 200 reviews from two years ago will get outranked by a business with 80 reviews that's consistently earning 4–6 new reviews per month.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Here's an important insight: the <strong className="text-foreground">content of your reviews matters for rankings</strong>. When a customer writes "Great HVAC installation in Plano, they replaced our entire system in one day," Google associates your profile with those keywords and that location. You can't control what customers write, but you can guide them by asking specific questions like "Would you mind mentioning the service we did and your city?"
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">How to Generate Consistent Reviews</h3>
              <ol className="text-muted-foreground space-y-2 leading-relaxed list-decimal pl-6">
                <li><strong className="text-foreground">Ask at the point of satisfaction.</strong> Right after completing a job, when the customer is happiest, is the best time to ask. Train your technicians to ask in person before they leave the job site.</li>
                <li><strong className="text-foreground">Make it effortless.</strong> Send a direct link to your Google review page via text message, not a generic "please leave a review" email. Text messages have a 98% open rate compared to 20% for email.</li>
                <li><strong className="text-foreground">Create a short URL.</strong> Use your GBP's review link and shorten it. Print it on receipts, invoices, follow-up cards, and even your vehicle wraps via a QR code.</li>
                <li><strong className="text-foreground">Follow up once.</strong> If they don't leave a review within 24–48 hours, send one follow-up message. Don't nag, a single reminder is enough.</li>
                <li><strong className="text-foreground">Automate the process.</strong> Use a CRM or follow-up tool to automatically send review requests after every completed job. This removes the human element and ensures consistency.</li>
              </ol>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Responding to Reviews</h3>
              <p className="text-muted-foreground leading-relaxed">
                Respond to <strong className="text-foreground">every single review</strong>, positive and negative. Thank happy customers by name and mention the specific service you provided (this adds keyword-rich content to your profile). For negative reviews, respond professionally, acknowledge the issue, and offer to resolve it offline. Never argue publicly, future customers are reading your responses to decide whether to hire you.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Example response to a positive review:</strong> "Thank you, Sarah! We're glad the AC installation at your home in Arlington went smoothly. Our team takes pride in getting the job done right the first time. Don't hesitate to reach out if you need anything in the future." Notice how this response naturally includes the service type and location, that's intentional.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">What Not to Do</h3>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li>Never offer incentives (discounts, gift cards) for reviews, this violates Google's policies and can result in all your reviews being removed.</li>
                <li>Never buy fake reviews. Google's detection is sophisticated and penalties are severe (profile suspension or permanent removal).</li>
                <li>Don't gate reviews by only asking happy customers. Google wants authentic feedback, and a mix of ratings actually looks more credible than a perfect 5.0.</li>
                <li>Don't copy-paste the same response to every review. Personalize each reply, it takes 30 seconds and signals to Google (and potential customers) that you're actively engaged.</li>
              </ul>

              <InlineCTA />

              {/* Section 7 */}
              <h2 id="posts-updates" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Step 6: Using Google Posts to Stay Active and Visible
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Google Posts are short updates that appear directly on your GBP listing. They expire after 7 days (except event posts), which means you need to post consistently. Most competitors don't, which gives you an easy advantage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Think of Google Posts as free micro-advertisements that appear right on your listing. When a potential customer finds your profile, active posts signal that your business is engaged, current, and operational. A listing with no recent posts can look abandoned, even if you're fully booked.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Types of Posts</h3>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">What's New:</strong> Share recent projects, seasonal tips, or company news. Example: "Just completed a full roof replacement in Frisco, 50-year architectural shingles with a lifetime warranty. Here's the before and after."</li>
                <li><strong className="text-foreground">Offers:</strong> Promote seasonal specials or limited-time discounts with a clear CTA. Example: "Schedule your AC tune-up before June 1st and save $50. Book online or call today."</li>
                <li><strong className="text-foreground">Events:</strong> If you're attending a trade show, hosting a workshop, or running a seasonal campaign. Event posts stay live until the event date passes.</li>
              </ul>
              <h3 className="text-xl font-bold text-foreground mt-8 mb-4">Post Strategy</h3>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li>Post at least <strong className="text-foreground">once per week</strong>. Twice is better. Set a recurring calendar reminder if you need to.</li>
                <li>Include a high-quality image with every post, posts with images get significantly more engagement.</li>
                <li>Always include a call to action: "Call Now," "Learn More," or "Book Online."</li>
                <li>Mention your service area and specific services naturally in the post copy. This reinforces relevance signals for local searches.</li>
                <li>Use posts to highlight recent before-and-after work, customer testimonials, or seasonal service reminders.</li>
                <li>Batch-create your posts monthly. Spend 30 minutes creating four posts, schedule them (or set reminders to publish), and you're covered for the month.</li>
              </ul>

              <PullQuote>
                "The businesses that post consistently on GBP don't just look more active, they rank higher."
              </PullQuote>

              {/* Section 8 */}
              <h2 id="common-mistakes" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                Common GBP Mistakes That Kill Your Local Rankings
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Even experienced business owners make these mistakes. Any one of them can tank your Map Pack visibility:
              </p>
              <ol className="text-muted-foreground space-y-4 leading-relaxed list-decimal pl-6">
                <li>
                  <strong className="text-foreground">Keyword-stuffing your business name.</strong> Adding "Best Plumber in Dallas" to your business name is a violation. Google may not catch it immediately, but when they do, you could be suspended.
                </li>
                <li>
                  <strong className="text-foreground">Using a virtual office or P.O. Box.</strong> Google requires a real physical location where you conduct business or meet customers. Virtual offices are specifically prohibited.
                </li>
                <li>
                  <strong className="text-foreground">Inconsistent NAP (Name, Address, Phone).</strong> Your business name, address, and phone number must be identical across your GBP, website, and every directory listing. Even small differences ("St." vs. "Street") can hurt.
                </li>
                <li>
                  <strong className="text-foreground">Ignoring the Q&A section.</strong> Anyone can ask (and answer) questions on your GBP. If you're not monitoring this, competitors or unhappy customers might be answering for you.
                </li>
                <li>
                  <strong className="text-foreground">Not using the Products/Services section.</strong> This is free real estate for keyword-rich content and you're leaving it blank.
                </li>
                <li>
                  <strong className="text-foreground">Setting it and forgetting it.</strong> GBP is not a one-time setup. Google rewards active, regularly-updated profiles. If you haven't touched your listing in months, you're falling behind.
                </li>
              </ol>

              {/* Section 9 */}
              <h2 id="conclusion" className="text-2xl md:text-3xl font-extrabold text-foreground mt-16 mb-6 scroll-mt-24">
                DIY vs. Hiring an Agency
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                You can absolutely manage your GBP yourself. Everything in this guide is actionable without any technical skills. If you have 2–3 hours per week to dedicate to uploading photos, responding to reviews, creating posts, and monitoring your listing, you'll see results within 60–90 days.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Here's a realistic breakdown of what ongoing GBP management looks like:
              </p>
              <ul className="text-muted-foreground space-y-2 leading-relaxed list-disc pl-6">
                <li><strong className="text-foreground">Weekly:</strong> Create and publish 1–2 Google Posts, upload 2–3 new photos, respond to any new reviews (10–15 minutes each).</li>
                <li><strong className="text-foreground">Monthly:</strong> Review your GBP Insights dashboard for trends in search queries, views, and actions. Check for any suggested edits or Q&A activity. Audit your listing for accuracy (30 minutes).</li>
                <li><strong className="text-foreground">Quarterly:</strong> Research competitor listings for new categories or strategies. Update your business description and services if anything has changed. Refresh seasonal offers (1 hour).</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                But here's the reality: most business owners don't have that time. You're running jobs, managing crews, handling estimates, and putting out fires. GBP optimization falls to the bottom of the list, and your rankings reflect it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That's where we come in. At Holy Webs, we manage GBP optimization as part of a complete local search strategy for service businesses across Texas and the Southeast. We handle the optimization, the posts, the review strategy, and the ongoing monitoring, so you can focus on what you do best.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you go the DIY route or bring in help, the important thing is to start. Every week your profile sits unoptimized, your competitors are gaining ground. The strategies in this guide work, but only if you implement them.
              </p>

              <InlineCTA />

              {/* Bottom Nav */}
              <div className="mt-16 pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="/resources"
                  className="text-muted-foreground hover:text-primary text-sm inline-flex items-center gap-2 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Resources
                </a>
                <a
                  href="/resources/free-visibility-audit"
                  className="btn-primary text-sm !px-6 !py-3"
                >
                  Get Your Free Visibility Audit <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
}
