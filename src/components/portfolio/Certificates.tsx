import { BadgeCheck, Clock } from "lucide-react";
import { Section } from "./Section";

const certs = [
  {
    title: "Certificate in Python Programming",
    org: "NIBM",
    period: "Feb – Jun 2024",
    status: "Completed",
    completed: true,
  },
  {
    title: "Certificate in Project Management (CAPM)",
    org: "SLIIT",
    period: "In progress",
    status: "Ongoing",
    completed: false,
  },
];

export const Certificates = () => (
  <Section id="certificates" eyebrow="Certificates" title="Continuous learning">
    <div className="grid gap-6 md:grid-cols-2">
      {certs.map((c) => {
        const Icon = c.completed ? BadgeCheck : Clock;
        return (
          <div
            key={c.title}
            className="group flex items-start gap-5 rounded-2xl border border-border bg-card/60 p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow md:p-8"
          >
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent-gradient text-primary-foreground shadow-glow">
              <Icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-foreground/80">{c.org}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-muted-foreground">
                  {c.period}
                </span>
                <span
                  className={`rounded-full px-2.5 py-1 font-semibold ${
                    c.completed
                      ? "border border-primary/30 bg-primary/10 text-primary"
                      : "border border-border bg-secondary text-foreground"
                  }`}
                >
                  {c.status}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </Section>
);
