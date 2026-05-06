import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { CareerPlan } from "@/components/portfolio/CareerPlan";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Certificates } from "@/components/portfolio/Certificates";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <CareerPlan />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <footer className="border-t border-border py-8">
        <div className="container flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Isuri Pabasara Lokupathirage. All rights reserved.</p>
          <p>Built with React, Tailwind & a lot of coffee ☕</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
