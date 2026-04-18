import { Star } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { Card } from "./ui/card";

const reviews = [
  {
    name: "Trenton Everett",
    text: "Holy Webs is the place to go if you want your business to go to the next level. Reach out to them and hit that goal you've been reaching for!",
  },
  {
    name: "Tyler Davis",
    text: "The Holy Webs team are true masters of their craft! Rest assured, when you present them with a goal or an idea they will make just that come to life! It was a blessing I met them, they have taken my small business to new heights!",
  },
  {
    name: "Clean Residential Services, Inc.",
    text: "Holy Webs has been a fantastic partner for our SEO and social media needs. We've seen noticeable improvements in our online presence, and their efforts have been invaluable to our success. We highly recommend Holy Webs to businesses seeking honest and effective digital marketing solutions!",
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

export default function ServicesSocialProof() {
  return (
    <SectionWrapper variant="light">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-10">
          What Our Clients&nbsp;Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <Card
              key={idx}
              className="bg-background border-border p-6 flex flex-col gap-3"
            >
              <StarRating />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 italic">
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
