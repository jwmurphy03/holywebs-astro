import { Star } from "lucide-react";
import SectionWrapper from "../SectionWrapper";
import { Card } from "../ui/card";

const reviews = [
  {
    name: "Dylan May",
    text: "If you're not using Holy Webs you are missing out. I had a website I thought was good until I met their team. The finished product is awesome. In just two weeks, the ROI was 100% worth every penny. They are true professionals and their commitment to top-of-the-line marketing was never in doubt.",
  },
  {
    name: "Connor Sell",
    text: "We hired Holy Webs to build a new website for Quality Glass & Design of The Upstate, and it was one of the best decisions we've made for our business. Holy Webs understood how a home service business needs to communicate online — clear messaging, strong SEO structure, and a layout that builds trust.",
  },
  {
    name: "Aimee Byrum",
    text: "If you're looking for the company that is going to take the time to listen to your website vision and who also has the skills to bring that vision into creation — you've found it with Holy Webs. This is where you go to have the truest reflection of you and your business brought to light.",
  },
  {
    name: "Kenan Klein",
    text: "Holy Webs is more than an SEO, Website, and Social Media company — they are in it to help YOU win. The team is great to work with, amazing listeners, and full of encouragement to help you grow your business.",
  },
  {
    name: "Clean Residential Services, Inc.",
    text: "Holy Webs has been a fantastic partner for our SEO and social media needs. We've seen noticeable improvements in our online presence, and their efforts have been invaluable to our success. We highly recommend Holy Webs to businesses seeking honest and effective digital marketing solutions!",
  },
  {
    name: "Kandice Davis",
    text: "Couldn't have asked for a better experience from their team. From creating a website to forming a friendship! We're completely over the moon for the website they created for us at Long Cane Retrievers. They made the process seamless and easy!",
  },
  {
    name: "Jorge Garcia",
    text: "As a beginner, I was overwhelmed, but their team was patient, explanatory, and guided me through the entire process. Their expertise and efficiency impressed me — from concept to prototype, our website model was ready in just a few days!",
  },
  {
    name: "Tyler Davis",
    text: "The Holy Webs team are true masters of their craft! Rest assured, when you present them with a goal or an idea they will make just that come to life! It was a blessing I met them, they have taken my small business to new heights!",
  },
  {
    name: "Charles Jones",
    text: "Holy Webs Rock! I wish I could give more than a 5 star. They have been so easy to work with... I will be highly recommending Holy Webs to anyone that needs their services.",
  },
  {
    name: "Stefanie Owens",
    text: "If your website isn't getting the traffic you hoped it would, I recommend contacting Holy Webs. Their team has more drive and determination than anyone I know and will go above and beyond to ensure your website exceeds your expectations.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

const featuredReview = reviews[0]; // Dylan May — most impactful quote
const gridReviews = reviews.slice(1);

export default function SocialProofSection() {
  return (
    <SectionWrapper variant="light">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-3">
            What Our Clients&nbsp;Say
          </h2>
        </div>

        {/* Featured Quote */}
        <div className="relative mb-10 rounded-2xl bg-dark border border-white/10 p-8 md:p-10 text-center mx-auto">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl font-serif text-primary/30 leading-none select-none">"</span>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed italic mb-4">
            {featuredReview.text}
          </p>
          <p className="text-sm font-semibold text-primary">— {featuredReview.name}</p>
        </div>

        {/* Static Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {gridReviews.map((review, idx) => (
            <Card
              key={idx}
              className="bg-muted/50 border-border p-5 flex flex-col gap-3"
            >
              <StarRating />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                "{review.text}"
              </p>
              <p className="text-sm font-semibold text-primary">
                — {review.name}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
