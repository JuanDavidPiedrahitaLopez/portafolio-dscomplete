"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import EmptyState from "@/components/EmptyState";
import { projectCategories } from "@/config/projectCategories";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function AllProjectsPage() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const [activeCategory, setActiveCategory] = useState("all");
    const containerRef = useScrollReveal("reveal-item", { direction: "left", distance: 40 });

    const filterOptions = useMemo(
        () => [
            { key: "all", label: t.allProjects.filterAll },
            ...Object.entries(projectCategories).map(([key, value]) => ({
                key,
                label: value.label[lang],
                color: value.color,
            })),
        ],
        [lang, t]
    );

    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section className="bg-[#06080d] min-h-screen relative overflow-hidden">
            {/* Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/5 rounded-full blur-3xl" />
            </div>

            <div
                ref={containerRef}
                className="w-full relative z-10"
                style={{
                    paddingLeft: "8%",
                    paddingRight: "8%",
                    paddingTop: "2.5rem",
                    paddingBottom: "6rem",
                }}
            >
                {/* Botón volver */}
                <div className="flex justify-end mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 transition-all hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                        style={{ color: "#4aa3ff", fontSize: "14px", fontWeight: 500 }}
                    >
                        <span>←</span> {t.allProjects.back}
                    </Link>
                </div>

                {/* Encabezado */}
                <div className="reveal-item mb-10">
                    <p className="text-blue-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                        {t.allProjects.eyebrow}
                    </p>
                    <h1
                        className="text-white font-bold leading-tight mb-5"
                        style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
                    >
                        {t.allProjects.title}
                    </h1>
                    <p className="text-gray-400 text-base leading-relaxed max-w-[560px]">
                        {t.allProjects.description}
                    </p>
                </div>

                {/* FILTROS */}
                <div
                    role="group"
                    aria-label={t.allProjects.filterAria}
                    className="reveal-item flex flex-wrap gap-2 mb-10"
                >
                    {filterOptions.map((option) => {
                        const isActive = activeCategory === option.key;
                        return (
                            <button
                                key={option.key}
                                type="button"
                                onClick={() => setActiveCategory(option.key)}
                                aria-pressed={isActive}
                                className="rounded-full border px-4 h-[36px] text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                style={
                                    isActive
                                        ? {
                                            borderColor: option.color ?? "#3b82f6",
                                            color: "#06080d",
                                            backgroundColor: option.color ?? "#3b82f6",
                                        }
                                        : {
                                            borderColor: "#1a2235",
                                            color: "#9ca3af",
                                            backgroundColor: "transparent",
                                        }
                                }
                            >
                                {option.label}
                            </button>
                        );
                    })}
                </div>

                {/* GRID */}
                {filteredProjects.length > 0 ? (
                    <div
                        key={activeCategory}
                        className="animate-fade-in grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),360px))] justify-center gap-8"
                    >
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="w-full">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <EmptyState message={t.allProjects.emptyFilter} />
                )}
            </div>
        </section>
    );
}
