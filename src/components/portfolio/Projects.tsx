import { Folder, Users, User } from "lucide-react";
import { Section } from "./Section";

type Project = {
  name: string;
  year: string;
  type: "Group" | "Individual";
  stack: string[];
};

const projects: Project[] = [
  { name: "Online Apartment Selling System", year: "1st Year", type: "Group", stack: ["HTML", "CSS", "PHP", "JavaScript"] },
  { name: "Event Management Web App", year: "2nd Year", type: "Group", stack: ["HTML", "CSS", "PHP", "JavaScript", "Java", "MySQL"] },
  { name: "Android Period Tracker App", year: "2nd Year", type: "Individual", stack: ["Kotlin"] },
  { name: "Garment Management Web App", year: "2nd Year", type: "Group", stack: ["MongoDB", "ReactJS", "NodeJS", "ExpressJS", "HTML", "CSS", "Git"] },
  { name: "Python Desktop Application", year: "Individual Project", type: "Individual", stack: ["Python", "MySQL"] },
  { name: "Vehicle Details Tracking Web App", year: "3rd Year", type: "Group", stack: ["MongoDB", "ReactJS", "NodeJS", "ExpressJS", "NextJS", "HTML", "CSS", "Git"] },
  { name: "LearnX Skill Sharing Web App", year: "3rd Year", type: "Group", stack: ["MongoDB", "Java Springboot", "ReactJS", "Git"] },
];

export const Projects = () => (
  <Section
    id="projects"
    eyebrow="Projects"
    title="Things I've built"
    description="A selection of academic and personal projects across the web, mobile and desktop."
  >
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => {
        const TypeIcon = p.type === "Group" ? Users : User;
        return (
          <article
            key={p.name}
            className="group relative flex flex-col rounded-2xl border border-border bg-card/60 p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary/25">
                <Folder className="h-5 w-5" />
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                <TypeIcon className="h-3 w-3" />
                {p.type}
              </span>
            </div>

            <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
              {p.name}
            </h3>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
              {p.year}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-border">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-secondary/70 px-2 py-1 text-[11px] font-medium text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  </Section>
);
