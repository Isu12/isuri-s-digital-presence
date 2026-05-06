import { Briefcase } from "lucide-react";
import { Section } from "./Section";

const roles = [
  {
    title: "Associate Software Engineer",
    company: "Xeynergy",
    period: "Feb 2026 – Present",
    points: [
      "Requirements gathering and stakeholder collaboration",
      "UI/UX prototyping with Lovable AI & Antigravity",
      "Acting Scrum Master for team ceremonies",
      "Defect identification and resolution across the stack",
    ],
    stack: ["TypeScript", "Next.js", "React", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "Azure", "ClickUp", "Lovable AI"],
  },
  {
    title: "Intern Software Engineer",
    company: "Xeynergy",
    period: "Jan 2025 – Jan 2026",
    points: [
      "Full-stack MERN feature development",
      "ClickUp-driven Agile sprints and ceremonies",
      "End-to-end SDLC exposure across multiple products",
    ],
    stack: ["TypeScript", "Next.js", "React", "Node.js", "Express.js", "MongoDB", "Azure", "Git"],
  },
];

export const Experience = () => (
  <Section
    id="experience"
    eyebrow="Experience"
    title="Where I've worked"
    description="My professional path so far at Xeynergy."
  >
    <div className="relative space-y-8 border-l border-border pl-6 md:pl-10">
      {roles.map((r) => (
        <div key={r.period} className="relative">
          <span className="absolute -left-[34px] md:-left-[46px] top-2 grid h-7 w-7 place-items-center rounded-full bg-accent-gradient text-primary-foreground shadow-glow ring-4 ring-background">
            <Briefcase className="h-3.5 w-3.5" />
          </span>
          <div className="rounded-2xl border border-border bg-card/60 p-6 shadow-card md:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                <p className="text-sm font-medium text-primary">{r.company}</p>
              </div>
              <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
                {r.period}
              </span>
            </div>
            <ul className="mt-5 space-y-2.5">
              {r.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {r.stack.map((s) => (
                <span key={s} className="rounded-md bg-secondary/70 px-2 py-1 text-[11px] font-medium text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
