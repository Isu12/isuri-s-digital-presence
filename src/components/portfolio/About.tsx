import { Award, GraduationCap, Briefcase, Target } from "lucide-react";
import { Section } from "./Section";

export const About = () => {
  const highlights = [
    { icon: GraduationCap, label: "BSc (Hons) IT — SLIIT", sub: "CGPA 3.77" },
    { icon: Briefcase, label: "Associate Software Engineer", sub: "Xeynergy" },
    { icon: Award, label: "Island Rank 1 — A/L Bio Systems Tech", sub: "2021" },
    { icon: Target, label: "CAPM Certification", sub: "In progress" },
  ];

  return (
    <Section id="about" eyebrow="About Me" title="A little about my journey">
      <div className="grid items-start gap-10 lg:grid-cols-[360px_1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-3xl bg-accent-gradient opacity-20 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-secondary/40 shadow-card transition-all duration-500 hover:shadow-glow/10 group">
            <img
              src="/profile.jpg"
              alt="Isuri Pabasara"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            I'm <span className="text-foreground font-semibold">Isuri</span> — a final-year
            BSc (Hons) Information Technology undergraduate at{" "}
            <span className="text-foreground">SLIIT</span>, currently maintaining a{" "}
            <span className="text-primary font-semibold">CGPA of 3.77</span>. I joined SLIIT
            on a fully funded scholarship after achieving{" "}
            <span className="text-foreground">Island Rank 1</span> in G.C.E A/L Bio Systems
            Technology at Devi Balika Vidyalaya in 2021.
          </p>
          <p>
            Today I work as an{" "}
            <span className="text-foreground font-semibold">
              Associate Software Engineer at Xeynergy
            </span>
            , where I help shape products end-to-end — from gathering requirements and
            prototyping with AI tools to writing production code and running Agile sprints
            as a Scrum Master.
          </p>
          <p>
            I'm passionate about software development, clean engineering, and
            entrepreneurship. My long-term goal is to launch my own tech business and
            build products that scale. I'm also currently pursuing my{" "}
            <span className="text-foreground">CAPM certification</span> to sharpen the
            project-management side of that journey.
          </p>

          <div className="grid gap-3 pt-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card/60 p-4 transition-all hover:border-primary/50 hover:bg-card"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20">
                  <h.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{h.label}</div>
                  <div className="text-xs text-muted-foreground">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
