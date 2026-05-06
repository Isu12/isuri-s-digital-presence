import { Rocket, TrendingUp, Crown } from "lucide-react";
import { Section } from "./Section";

const plan = [
  {
    icon: Rocket,
    term: "Short-Term",
    range: "1–2 years",
    items: [
      "Strengthen core software engineering skills",
      "Deepen expertise in Angular, React & Node.js",
      "Complete CAPM certification",
    ],
  },
  {
    icon: TrendingUp,
    term: "Mid-Term",
    range: "3–5 years",
    items: [
      "Grow into Senior Software Engineer / Tech Lead",
      "Mentor and guide junior developers",
      "Build DevOps & cloud experience",
      "Launch side projects",
    ],
  },
  {
    icon: Crown,
    term: "Long-Term",
    range: "5+ years",
    items: [
      "Launch my own tech business",
      "Build scalable software products",
      "Combine technical & business leadership",
    ],
  },
];

export const CareerPlan = () => (
  <Section
    id="career"
    eyebrow="Career Development Plan"
    title="Where I'm heading"
    description="A roadmap from engineer today to founder tomorrow."
  >
    <div className="relative grid gap-6 md:grid-cols-3">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
      />
      {plan.map((p, i) => (
        <div
          key={p.term}
          className="group relative rounded-2xl border border-border bg-card/60 p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow md:p-8"
        >
          <div className="mb-5 flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow">
              <p.icon className="h-6 w-6" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">
              Phase 0{i + 1}
            </div>
          </div>
          <h3 className="font-display text-xl font-bold">{p.term}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{p.range}</p>
          <ul className="mt-5 space-y-3">
            {p.items.map((it) => (
              <li key={it} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);
