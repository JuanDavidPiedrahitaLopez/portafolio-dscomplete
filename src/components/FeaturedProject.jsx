"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { getProjectCategory } from "@/config/projectCategories";
import ProjectThumbnail from "@/components/ProjectThumbnail";
import CategoryBadge from "@/components/CategoryBadge";
import StatusBadge from "@/components/StatusBadge";
import TechnologyBadge from "@/components/TechnologyBadge";
import ProjectLinks from "@/components/ProjectLinks";

/**
 * Tarjeta de mayor jerarquía visual para el proyecto principal (caso de
 * estudio). Ocupa más espacio y muestra más información que una
 * ProjectCard normal; las secciones sin contenido no se renderizan.
 */
export default function FeaturedProject({ project }) {
    const { lang } = useLanguage();
    const t = translations[lang];
    const data = project[lang];
    const category = getProjectCategory(project.category);

    return (
        <article
            className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-2xl border transition-all duration-300"
            style={{ borderColor: category ? `${category.color}55` : "#1a2235", background: "#0a0f1a" }}
        >
            {/* Imagen / gráfica */}
            <div className="relative w-full min-h-[220px] lg:min-h-full">
                <ProjectThumbnail variant={project.thumbnail} />
            </div>

            {/* Contenido */}
            <div className="flex flex-col p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                    <CategoryBadge category={project.category} />
                    <StatusBadge status={project.status} />
                </div>

                <h3 className="text-white font-bold leading-snug mb-3" style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)" }}>
                    {data.title}
                </h3>

                <p className="text-[#9ca3af] text-sm leading-relaxed mb-5">
                    {data.description}
                </p>

                {data.content.problem && (
                    <div className="mb-4">
                        <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wide mb-1">
                            {t.projectDetail.problemTitle}
                        </p>
                        <p className="text-[#c3c9d4] text-sm leading-relaxed">{data.content.problem}</p>
                    </div>
                )}

                {data.content.dataUsed && (
                    <div className="mb-5">
                        <p className="text-gray-500 text-[11px] font-semibold uppercase tracking-wide mb-1">
                            {t.projectDetail.dataUsedTitle}
                        </p>
                        <p className="text-[#c3c9d4] text-sm leading-relaxed">{data.content.dataUsed}</p>
                    </div>
                )}

                {data.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-6">
                        {data.tags.map((tag, i) => (
                            <TechnologyBadge key={i} name={tag} />
                        ))}
                    </div>
                )}

                <div className="flex flex-wrap items-center gap-5 mt-auto pt-2">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 rounded-md px-4 h-[38px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                        {t.projectsSection.viewProject} →
                    </Link>
                    <ProjectLinks links={project.links} />
                </div>
            </div>
        </article>
    );
}
