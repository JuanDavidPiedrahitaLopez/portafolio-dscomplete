"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { getProjectCategory } from "@/config/projectCategories";
import ProjectThumbnail from "@/components/ProjectThumbnail";
import CategoryBadge from "@/components/CategoryBadge";
import StatusBadge from "@/components/StatusBadge";
import TechnologyBadge from "@/components/TechnologyBadge";

export default function ProjectCard({ project }) {
    const { lang } = useLanguage();
    const t = translations[lang];
    const { title, description, tags } = project[lang];
    const category = getProjectCategory(project.category);

    return (
        <article
            className="group h-full flex flex-col overflow-hidden rounded-2xl border border-[#1a2235] bg-[#0a0f1a] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 hover:border-[color:var(--cat-color)]"
            style={{ width: "100%", maxWidth: "360px", "--cat-color": category?.color ?? "#3b82f6" }}
        >
            {/* Línea superior — único uso "de relleno" del color de categoría */}
            <div className="h-[3px] w-full shrink-0" style={{ background: category?.color ?? "#1a2235" }} />

            <div style={{ padding: "16px" }} className="flex flex-col flex-1">
                {/* Imagen demo */}
                <div
                    className="relative w-full overflow-hidden rounded-xl shrink-0"
                    style={{ height: "160px", marginBottom: "14px" }}
                >
                    <ProjectThumbnail variant={project.thumbnail} />
                </div>

                {/* Categoría + estado */}
                <div className="flex flex-wrap items-center gap-2" style={{ marginBottom: "10px" }}>
                    <CategoryBadge category={project.category} />
                    <StatusBadge status={project.status} />
                </div>

                {/* Contenido */}
                <div className="flex flex-col flex-1">
                    <h3
                        className="font-bold leading-snug text-white"
                        style={{ fontSize: "17px", marginBottom: "6px" }}
                    >
                        {title}
                    </h3>

                    {/* Descripción — máximo tres líneas */}
                    <p
                        className="text-[#9ca3af] line-clamp-3"
                        style={{ fontSize: "13.5px", lineHeight: "1.6", marginBottom: "16px" }}
                    >
                        {description}
                    </p>

                    {/* Tecnologías principales */}
                    <div
                        className="flex flex-wrap"
                        style={{ gap: "8px", marginBottom: "14px" }}
                    >
                        {tags.slice(0, 4).map((tag, i) => (
                            <TechnologyBadge key={i} name={tag} />
                        ))}
                    </div>

                    {/* Link — azul cian eléctrico exacto de la imagen */}
                    <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center transition-all duration-200 mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                        style={{ fontSize: "14px", fontWeight: 500, color: "#4aa3ff", gap: "6px" }}
                    >
                        {t.projectsSection.viewProject}{" "}
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </div>
        </article>
    );
}
