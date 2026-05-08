interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 bg-background rounded-xl border border-border">
              <p className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{s.value}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
