"use client";

import Image from "next/image";
import { FileText, ListChecks, Layers, TrendingUp, Gauge, AlertTriangle, Lightbulb, ImageOff } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { SectionHeader, BulletList } from "@/components/DetailSection";
import ProjectThumbnail from "@/components/ProjectThumbnail";
import CategoryBadge from "@/components/CategoryBadge";
import StatusBadge from "@/components/StatusBadge";
import TechnologyBadge from "@/components/TechnologyBadge";
import ProjectLinks from "@/components/ProjectLinks";

export default function ProjectDetailView({ project }) {
    const { lang } = useLanguage();
    const t = translations[lang];
    const data = project[lang];
    const containerRef = useScrollReveal("detail-item", { direction: "left", distance: 48 });
    const hasLinks = Object.values(project.links ?? {}).some(Boolean);
    const showArchitecture = project.category === "dataEngineering";

    return (
        <section className="min-h-screen overflow-x-hidden text-white" style={{ background: "#06080d" }}>
            <div ref={containerRef} style={{ width: "min(92%, 1000px)", margin: "0 auto", paddingTop: "1vh", paddingBottom: "80px" }}>

                {/* ── BOTÓN VOLVER ── */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 mb-8 transition-all hover:gap-3"
                    style={{ color: "#4aa3ff", fontSize: "14px", fontWeight: 500 }}
                >
                    <span>←</span> {t.projectDetail.back}
                </Link>

                {/* ── HERO CARD ── */}
                <div
                    className="detail-item rounded-2xl border border-[#1a2235] overflow-hidden mb-16 mt-10"
                    style={{ background: "linear-gradient(180deg,#0b1220 0%,#070c16 100%)" }}
                >
                    <div className="relative w-full" style={{ height: "220px" }}>
                        <ProjectThumbnail variant={project.thumbnail} />
                    </div>

                    <div style={{ padding: "32px" }}>
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <CategoryBadge category={project.category} />
                            <StatusBadge status={project.status} />
                            {project.year && (
                                <span style={{ color: "#6b7280", fontSize: "12px" }}>{project.year}</span>
                            )}
                        </div>

                        <h1 className="font-bold leading-tight mb-3"
                            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
                            {data.title}
                        </h1>

                        <p style={{ color: "#9ca3af", maxWidth: "640px", fontSize: "15px", lineHeight: "1.6" }}>
                            {data.description}
                        </p>

                        {data.tags?.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-6">
                                {data.tags.map((tag, i) => (
                                    <span key={i}
                                        className="border border-[#1e2d45] bg-[#111827] text-[#d1d5db]"
                                        style={{ padding: "5px 12px", fontSize: "12px", borderRadius: "6px" }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {hasLinks && <ProjectLinks links={project.links} className="mt-6" />}
                    </div>
                </div>

                {/* ── DESCRIPCIÓN ── */}
                {(data.content.overview || data.content.problem) && (
                    <div className="detail-item pb-14 mb-14 border-b border-[#1a2235]">
                        <SectionHeader Icon={FileText} title={t.projectDetail.descriptionTitle} />
                        <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.8", maxWidth: "720px" }}>
                            {[data.content.overview, data.content.problem].filter(Boolean).join(" ")}
                        </p>
                    </div>
                )}

                {/* ── DATOS UTILIZADOS ── */}
                {data.content.dataUsed && (
                    <div className="detail-item pb-14 mb-14 border-b border-[#1a2235]">
                        <SectionHeader Icon={Gauge} title={t.projectDetail.dataUsedTitle} />
                        <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.8", maxWidth: "720px" }}>
                            {data.content.dataUsed}
                        </p>
                    </div>
                )}

                {/* ── FUNCIONALIDAD ── */}
                {data.content.features?.length > 0 && (
                    <div className="detail-item pb-14 mb-14 border-b border-[#1a2235]">
                        <SectionHeader Icon={ListChecks} title={t.projectDetail.featuresTitle} />
                        <BulletList items={data.content.features} />
                    </div>
                )}

                {/* ── STACK USADO ── */}
                {data.content.technologies?.length > 0 && (
                    <div className="detail-item pb-14 mb-14 border-b border-[#1a2235]">
                        <SectionHeader Icon={Layers} title={t.projectDetail.stackTitle} />
                        <div className="flex flex-wrap gap-2">
                            {data.content.technologies.map((tech, i) => (
                                <TechnologyBadge key={i} name={tech} size="md" />
                            ))}
                        </div>
                    </div>
                )}

                {/* ── ARQUITECTURA (solo proyectos de ingeniería de datos) ── */}
                {showArchitecture && (
                    <div className="detail-item pb-14 mb-14 border-b border-[#1a2235]">
                        <SectionHeader Icon={Layers} title={t.projectDetail.architectureTitle} />
                        {project.architectureImage ? (
                            <div className="relative w-full rounded-xl overflow-hidden border border-[#1a2235]" style={{ aspectRatio: "16/9" }}>
                                <Image
                                    src={project.architectureImage}
                                    alt={t.projectDetail.architectureAlt.replace("{title}", data.title)}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#1e2d45] bg-[#080c14] py-12 px-6 text-center">
                                <ImageOff size={24} className="text-gray-600" strokeWidth={1.5} aria-hidden="true" />
                                <p className="text-gray-500 text-sm">{t.projectDetail.architecturePending}</p>
                            </div>
                        )}
                    </div>
                )}

                {/* ── MÉTRICAS ── */}
                {project.metrics?.length > 0 && (
                    <div className="detail-item pb-14 mb-14 border-b border-[#1a2235]">
                        <SectionHeader Icon={Gauge} title={t.projectDetail.metricsTitle} />
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {project.metrics.map((metric, i) => (
                                <div key={i} className="rounded-xl border border-[#1a2235] bg-[#0a0f1a] text-center px-3 py-4">
                                    <p style={{ color: "#9ca3af", fontSize: "11px", marginBottom: "6px" }}>{metric.label}</p>
                                    <p className="text-white font-bold" style={{ fontSize: "20px" }}>{metric.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* ── RESULTADOS ── */}
                {(data.content.results?.length > 0 || data.content.conclusions) && (
                    <div className="detail-item pb-14 mb-14 border-b border-[#1a2235]">
                        <SectionHeader Icon={TrendingUp} title={t.projectDetail.resultsTitle} />
                        <BulletList items={data.content.results ?? []} />
                        {data.content.conclusions && (
                            <p className="mt-6"
                                style={{ color: "#6b7280", fontSize: "13.5px", lineHeight: "1.7", fontStyle: "italic", maxWidth: "720px" }}>
                                {data.content.conclusions}
                            </p>
                        )}
                    </div>
                )}

                {/* ── LIMITACIONES ── */}
                {data.content.limitations && (
                    <div className="detail-item pb-14 mb-14 border-b border-[#1a2235]">
                        <SectionHeader Icon={AlertTriangle} title={t.projectDetail.limitationsTitle} />
                        <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.8", maxWidth: "720px" }}>
                            {data.content.limitations}
                        </p>
                    </div>
                )}

                {/* ── APRENDIZAJES ── */}
                {data.content.learnings && (
                    <div className="detail-item">
                        <SectionHeader Icon={Lightbulb} title={t.projectDetail.learningsTitle} />
                        <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.8", maxWidth: "720px" }}>
                            {data.content.learnings}
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
}
