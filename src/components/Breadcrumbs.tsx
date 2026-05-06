
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: "dark" | "light";
}

export default function Breadcrumbs({ items, variant = "dark" }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const textColor = variant === "dark" ? "text-white/40" : "text-muted-foreground";
  const linkColor = variant === "dark" ? "text-white/60 hover:text-white/80" : "text-foreground/60 hover:text-foreground/80";
  const chevronColor = variant === "dark" ? "text-white/20" : "text-foreground/20";

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className={`w-3 h-3 ${chevronColor}`} />}
              {isLast || !item.href ? (
                <span className={textColor}>{item.label}</span>
              ) : (
                <a href={item.href} className={`${linkColor} transition-colors`}>
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
