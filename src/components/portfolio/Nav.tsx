import { useEffect, useState } from "react";
import { Download, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-gradient font-display text-sm font-bold text-primary-foreground shadow-glow">
            IPL
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide sm:block">
            Isuri Pabasara
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden bg-accent-gradient text-primary-foreground hover:opacity-90 sm:inline-flex">
            <a 
              href="https://res.cloudinary.com/dtu0zojzx/image/upload/fl_attachment/v1778081503/Isuri_Pabasara_Lokupathirage_2_q1rw8e.pdf" 
              download="Isuri_Pabasara_CV.pdf"
            >
              <Download className="mr-2 h-4 w-4" /> Download CV
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-border bg-background">
              <nav className="mt-10 flex flex-col gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
                <Button asChild className="mt-4 bg-accent-gradient text-primary-foreground hover:opacity-90">
                  <a 
                    href="https://res.cloudinary.com/dtu0zojzx/image/upload/fl_attachment/v1778081503/Isuri_Pabasara_Lokupathirage_2_q1rw8e.pdf" 
                    download="Isuri_Pabasara_CV.pdf"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download CV
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
