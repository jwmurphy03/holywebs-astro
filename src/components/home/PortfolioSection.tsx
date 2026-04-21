import { ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
const snapbooksImg = "/assets/portfolio-snapbooks.png";
const redboxImg = "/assets/portfolio-redbox.png";
const dnaImg = "/assets/portfolio-dna-landscape.png";
const palmettoImg = "/assets/portfolio-palmetto.png";
const gsbImg = "/assets/portfolio-gsb.png";
const notorious5Img = "/assets/portfolio-notorious5.png";
const willshireImg = "/assets/portfolio-willshire.png";
const refinedImg = "/assets/portfolio-refined-roofing.png";
const wrapstarImg = "/assets/portfolio-wrapstar.png";
const tidewaterImg = "/assets/portfolio-tidewater.png";
const longcaneImg = "/assets/portfolio-longcane.png";
const csgImg = "/assets/portfolio-csg.png";

const projects = [
  { image: snapbooksImg, name: "SnapBooks", url: null },
  { image: redboxImg, name: "Red Box Heating & Air", url: null },
  { image: dnaImg, name: "DNA Landscape", url: null },
  { image: palmettoImg, name: "Palmetto Custom Cabinets", url: null },
  { image: gsbImg, name: "Great Southern Builders", url: null },
  { image: notorious5Img, name: "The Notorious 5 Fishing Charters", url: "https://thenotorious5.com/" },
  { image: willshireImg, name: "Willshire Farms Inc.", url: null },
  { image: refinedImg, name: "Refined Roofing Co.", url: "https://www.refinedroofingco.com/" },
  { image: wrapstarImg, name: "Wrapstar Vehicle Wraps", url: "http://www.wrapstarsignandbanner.com/" },
  { image: tidewaterImg, name: "Tidewater Roofing", url: "https://tidewaterroofingconstruction.com/" },
  { image: longcaneImg, name: "Long Cane Retrievers", url: null },
  { image: csgImg, name: "Construction Services Group", url: null },
];

export default function PortfolioSection() {
  return (
    <SectionWrapper variant="light">
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
          Trusted by Local Service Businesses
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => {
          const cardClass = "group relative block overflow-hidden rounded-xl border border-border bg-muted/40";
          const inner = (
            <>
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
            </>
          );
          return project.url ? (
            <a key={project.name} href={project.url} target="_blank" rel="noopener noreferrer" className={cardClass}>
              {inner}
            </a>
          ) : (
            <div key={project.name} className={cardClass}>
              {inner}
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <a
          href="/services/web-design"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          See what we can build for you
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </SectionWrapper>
  );
}
