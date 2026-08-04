import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/app/projects/ProjectsSection";
import ResearchSection from "@/app/research/ResearchSection";
import ExperienceSection from "@/components/sections/ExperienceSession";
import Education from "@/components/sections/Education";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import ScrollToHash from "@/components/layout/ScrollToHash";

export default function Home() {
  return (
    <main className="w-full bg-[var(--background)] text-white">
      <ScrollToHash />
      <Hero />
      <About />
      <Education />
      <ProjectsSection />
      <ResearchSection />
      <ExperienceSection />
      <Skills />
    </main>
  );
}
