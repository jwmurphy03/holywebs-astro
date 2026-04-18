import { Link } from "react-router-dom";
import SectionWrapper from "../SectionWrapper";
import { ArrowRight } from "lucide-react";
const founderPhoto = "/assets/jeremy-workshop.jpeg";

export default function FounderSection() {
  return (
    <SectionWrapper variant="muted">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-stretch max-w-6xl mx-auto">
        {/* Photo */}
        <div className="relative rounded-2xl overflow-hidden min-h-[400px] md:min-h-0">
          <img
            src={founderPhoto}
            alt="Jeremy Murphy and his wife"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-center py-4">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Who's Behind Holy Webs
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6 leading-tight">
            Jeremy Murphy
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            With 20+ years in marketing, including time as a fractional CMO for national brands and hands-on work with hundreds of local businesses, Jeremy leads the team at Holy Webs to solve a problem he kept seeing: talented contractors and service pros getting buried online by companies half as good.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            He brings big-brand strategy to local business marketing, without the big-brand price tag or the agency runaround. Every campaign, every website, every strategy runs through someone who has managed national budgets and knows what actually moves the needle for local growth.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
          >
            Learn more about Holy Webs
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
