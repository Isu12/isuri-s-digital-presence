import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    school: "Sri Lanka Institute of Information Technology (SLIIT)",
    degree: "BSc (Hons) in Information Technology",
    period: "2023 – Present",
    note: "CGPA 3.77 · Fully funded scholarship",
  },
  {
    school: "Devi Balika Vidyalaya",
    degree: "G.C.E A/L — Bio Systems Technology",
    period: "2021",
    note: "Island Rank 1",
  },
  {
    school: "Anula Vidyalaya",
    degree: "G.C.E O/L",
    period: "2018",
    note: "",
  },
  {
    school: "National Institute of Business Management (NIBM)",
    degree: "Python Certificate Course",
    period: "2024",
    note: "",
  },
];

export const Education = () => (
  <Section id="education" eyebrow="Education" title="Academic background">
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((it) => (
        <div
          key={it.school}
          className="group rounded-2xl border border-border bg-card/60 p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50"
        >
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary group-hover:bg-primary/25">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-base font-semibold leading-snug">{it.degree}</h3>
              <p className="mt-1 text-sm text-foreground/80">{it.school}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-muted-foreground">
                  {it.period}
                </span>
                {it.note && (
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-semibold text-primary">
                    {it.note}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);
