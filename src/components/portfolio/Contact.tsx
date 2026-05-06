import { Mail, Phone, Linkedin, Github, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";

const items = [
  { icon: Mail, label: "Email", value: "isuripabasara2020@gmail.com", href: "mailto:isuripabasara2020@gmail.com" },
  { icon: Phone, label: "Phone", value: "071 1262 656", href: "tel:+94711262656" },
  { icon: Linkedin, label: "LinkedIn", value: "isuri-lokupathirage-b62a44276", href: "https://linkedin.com/in/isuri-lokupathirage-b62a44276" },
  { icon: Github, label: "GitHub", value: "github.com/Isu12", href: "https://github.com/Isu12" },
  { icon: MapPin, label: "Location", value: "Maharagama, Sri Lanka", href: null },
];

export const Contact = () => (
  <Section
    id="contact"
    eyebrow="Contact"
    title="Let's build something together"
    description="Open to collaborations, internships, freelance work, and a good conversation about tech and entrepreneurship."
  >
    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((it) => {
          const content = (
            <div className="group flex items-center gap-4 rounded-xl border border-border bg-card/60 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-glow">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary group-hover:bg-primary/25">
                <it.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{it.label}</div>
                <div className="truncate text-sm font-medium text-foreground">{it.value}</div>
              </div>
            </div>
          );
          return it.href ? (
            <a key={it.label} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            <div key={it.label}>{content}</div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-border bg-card/60 p-6 text-center shadow-card">
        <h3 className="font-display text-lg font-semibold">Get in touch</h3>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          The fastest way to reach me is by email — I usually reply within a day.
        </p>
        <Button asChild className="mt-5 bg-accent-gradient text-primary-foreground shadow-glow hover:opacity-95">
          <a href="mailto:isuripabasara2020@gmail.com">
            <Send className="mr-2 h-4 w-4" /> Send an email
          </a>
        </Button>
      </div>
    </div>
  </Section>
);
