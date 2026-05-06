import { ArrowDown, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Animated gradient mesh */}
      <div
        aria-hidden
        className="absolute inset-0 bg-hero-mesh animate-gradient-shift"
        style={{ backgroundSize: "200% 200%" }}
      />
      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
      {/* Floating particles */}
      <div aria-hidden className="absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-primary/40 animate-float-slow"
            style={{
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
              top: `${(i * 53) % 100}%`,
              left: `${(i * 37) % 100}%`,
              animationDelay: `${(i % 6) * 0.6}s`,
              animationDuration: `${5 + (i % 5)}s`,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>

      <div className="container relative">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Open to opportunities & collaborations
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-accent-gradient">Isuri Pabasara</span>
            <br />
            Lokupathirage.
          </h1>

          <p className="mt-6 text-lg font-medium text-muted-foreground md:text-xl">
            Associate Software Engineer{" "}
            <span className="text-primary">·</span> SLIIT Final Year Student
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Building solutions today.{" "}
            <span className="font-semibold text-foreground">
              Building my own business tomorrow.
            </span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-accent-gradient text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] hover:opacity-95"
            >
              <a href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border bg-secondary/40 backdrop-blur hover:bg-secondary"
            >
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { k: "3.77", v: "SLIIT CGPA" },
              { k: "Rank 1", v: "A/L Island" },
              { k: "1+ yrs", v: "Industry Exp." },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-foreground md:text-3xl">
                  {s.k}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
