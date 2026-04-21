import SectionWrapper from "@/components/SectionWrapper";

interface Project {
  image: string;
  name: string;
}

interface IndustryPortfolioProps {
  industry: string;
  projects: Project[];
}

export default function IndustryPortfolio({ industry, projects }: IndustryPortfolioProps) {
  const isFew = projects.length <= 2;
  const isOddThreeCol = projects.length === 5;

  return (
    <SectionWrapper variant="dark">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-dark-foreground mb-4">
          Websites We've Built for {industry}
        </h2>
        <p className="text-lg text-dark-foreground/70 max-w-3xl mx-auto">
          Real results for real businesses. Here's a look at some of the sites we've launched.
        </p>
      </div>

      {isOddThreeCol ? (
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {projects.slice(0, 3).map((project, i) => (
              <PortfolioCard key={project.name} project={project} index={i} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[66%] mx-auto">
            {projects.slice(3).map((project, i) => (
              <PortfolioCard key={project.name} project={project} index={i + 3} />
            ))}
          </div>
        </div>
      ) : (
        <div
          className={`grid gap-6 ${
            projects.length === 3
              ? "grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto"
              : isFew
                ? "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
          }`}
        >
          {projects.map((project, i) => (
            <PortfolioCard key={project.name} project={project} index={i} />
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}

function PortfolioCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/5">
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} website by Holy Webs`}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          width={640}
          height={360}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
        <span className="text-dark-foreground font-semibold text-sm">
          {project.name}
        </span>
      </div>
    </div>
  );
}
