import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  variant?: "light" | "muted" | "muted-v2" | "muted-v3" | "muted-v4" | "dark";
  className?: string;
  id?: string;
}

const bgMap: Record<string, string> = {
  dark: "section-dark",
  muted: "section-muted",
  "muted-v2": "section-muted-v2",
  "muted-v3": "section-muted-v3",
  "muted-v4": "section-muted-v4",
  light: "section-light",
};

export default function SectionWrapper({ children, variant = "light", className = "", id }: SectionWrapperProps) {
  const bg = bgMap[variant] || "section-light";

  return (
    <section id={id} className={`${bg} py-14 lg:py-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
