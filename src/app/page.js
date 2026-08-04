import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/app/projects/ProjectsSection";
import ResearchSection from "@/app/research/ResearchSection";
import ExperienceSection from "@/components/sections/ExperienceSession";
import About from "@/components/sections/About";
import ScrollToHash from "@/components/layout/ScrollToHash";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--background)] text-white">
      <ScrollToHash />
      <div className="flex-1 w-full pb-16">
        <Hero />
        <About />
        <ProjectsSection />
        <ResearchSection />
        <ExperienceSection />
      </div>
    </main>
  );
}
