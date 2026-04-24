import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/app/projects/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSession";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--background)] text-white">

      {/* <Navbar /> */}

      <div className="flex-1 w-full pt-32 pb-16 px-[6%] xl:px-[10%] 2xl:px-[14%]">
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
      </div>

      {/* <Footer /> */}

    </main>
  );
}