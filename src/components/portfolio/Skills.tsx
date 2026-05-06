import { Code2, Heart } from "lucide-react";
import { Section } from "./Section";

const technical = [
  "TypeScript", "Next.js", "React", "Node.js", "Express.js", "MongoDB",
  "Git", "GitHub", "Azure", "Kotlin", "Python", "Figma", "ClickUp",
  "Scrum Master", "Agile", "Azure Repos", "Defect Identification",
];

const soft = [
  "Adaptability", "Time Management", "Communication", "Team Building",
  "Attention to Detail", "Self-learning", "Willingness to Learn",
];

const Pill = ({ label }: { label: string }) => (
  <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:bg-secondary hover:text-primary">
    {label}
  </span>
);

export const Skills = () => (
  <Section
    id="skills"
    eyebrow="Skills"
    title="What I bring to the table"
    description="A blend of modern web engineering, mobile, cloud, and the human skills that make teams thrive."
  >
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-2xl border border-border bg-card/60 p-6 shadow-card md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
            <Code2 className="h-5 w-5" />
          </div>
          <h3 className="font-display text-xl font-semibold">Technical Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {technical.map((s) => <Pill key={s} label={s} />)}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card/60 p-6 shadow-card md:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
            <Heart className="h-5 w-5" />
          </div>
          <h3 className="font-display text-xl font-semibold">Soft Skills</h3>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {soft.map((s) => <Pill key={s} label={s} />)}
        </div>
      </div>
    </div>
  </Section>
);
