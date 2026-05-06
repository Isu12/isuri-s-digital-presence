import { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, eyebrow, title, description, children, className }: SectionProps) => {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={cn("reveal scroll-mt-24 py-20 md:py-28", className)}
    >
      <div className="container">
        <div className="mb-12 max-w-2xl">
          {eyebrow && (
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" />
              {eyebrow}
            </div>
          )}
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};
