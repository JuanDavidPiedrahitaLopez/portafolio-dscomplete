"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import FeaturedProject from "@/components/FeaturedProject";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function ProjectsSection() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const featured = projects.find((p) => p.featured);
    const secondary = projects.filter((p) => !p.featured);
    const containerRef = useScrollReveal("reveal-item", { direction: "left", distance: 40 });

    return (
        <section className="w-full scroll-mt-24" id="proyectos" ref={containerRef} style={{
            width: "100%",
            paddingLeft: "8%",
            paddingTop: "2%",
            paddingBottom: "2%",
            paddingRight: "8%"
        }} >

            <div className="mx-auto max-w-[1144px]">

                {/* HEADER */}
                <div className="reveal-item flex justify-between items-center flex-wrap gap-3 mb-10">
                    <h2 className="text-white font-bold text-[28px]">
                        {t.projectsSection.title}
                    </h2>

                    <Link
                        href="/projects"
                        className="text-[#4aa3ff] text-[18px] flex items-center gap-1.5 transition-all duration-200 hover:gap-2.5"
                    >
                        {t.projectsSection.viewAll}
                    </Link>
                </div>

                {/* PROYECTO DESTACADO */}
                {featured && (
                    <div className="reveal-item">
                        <FeaturedProject project={featured} />
                    </div>
                )}

                {/* GRID SECUNDARIO */}
                {secondary.length > 0 && (
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),360px))] justify-center gap-8 mt-10">
                        {secondary.map((project) => (
                            <div key={project.id} className="reveal-item w-full">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    );
}
