"use client";

import { FileText, Lightbulb, Layers, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { SectionHeader, BulletList } from "@/components/DetailSection";
import { getResearchType, getResearchStatus } from "@/config/researchTypes";
import StatusBadge from "@/components/StatusBadge";

export default function ArticleDetailView({ article }) {
    const { lang } = useLanguage();
    const t = translations[lang];
    const data = article[lang];
    const badgeLabel = data.tags[0]?.toUpperCase();
    const containerRef = useScrollReveal("detail-item", { direction: "left", distance: 48 });
    const type = getResearchType(article.type);
    const meta = [article.institution, article.authors?.join(", "), article.advisor && `${t.articleDetail.advisor}: ${article.advisor}`]
        .filter(Boolean);
    const links = [
        article.links?.documentationUrl && { href: article.links.documentationUrl, label: t.projectLinks.docs },
        article.links?.repositoryUrl && { href: article.links.repositoryUrl, label: t.projectLinks.code },
        article.doi && { href: `https://doi.org/${article.doi}`, label: `DOI: ${article.doi}` },
    ].filter(Boolean);

    return (
        <section className="min-h-screen overflow-x-hidden text-white" style={{ background: "#06080d" }}>
            <div ref={containerRef} style={{ width: "min(92%, 1000px)", margin: "0 auto", paddingTop: "1vh", paddingBottom: "80px" }}>

                {/* ── BOTÓN VOLVER ── */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 mb-8 transition-all hover:gap-3"
                    style={{ color: "#4aa3ff", fontSize: "14px", fontWeight: 500 }}
                >
                    <span>←</span> {t.articleDetail.back}
                </Link>

                {/* ── HERO CARD ── */}
                <div
                    className="detail-item rounded-2xl border border-[#1a2235] overflow-hidden mb-16 mt-10"
                    style={{ background: "linear-gradient(180deg,#0b1220 0%,#070c16 100%)", padding: "32px" }}
                >
                    <div className="flex items-start justify-between mb-3">
                        <p style={{ color: "#2dd4bf", fontSize: "11px", letterSpacing: "0.12em", fontWeight: 600 }}>
                            {badgeLabel}
                        </p>
                        {article.year && (
                            <span style={{ color: "#6b7280", fontSize: "12px" }}>{article.year}</span>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        {type && (
                            <span className="inline-flex items-center rounded-md border border-[#1e2d45] bg-[#111827] text-[#9ca3af] px-2.5 py-1 text-[11px] font-medium">
                                {type.label[lang]}
                            </span>
                        )}
                        <StatusBadge status={article.status} resolver={getResearchStatus} />
                    </div>

                    <h1 className="font-bold leading-tight mb-3"
                        style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
                        {data.title}
                    </h1>

                    <p style={{ color: "#9ca3af", maxWidth: "640px", fontSize: "15px", lineHeight: "1.6" }}>
                        {data.excerpt}
                    </p>

                    {meta.length > 0 && (
                        <p style={{ color: "#6b7280", fontSize: "13px", marginTop: "12px" }}>
                            {meta.join(" · ")}
                        </p>
                    )}

                    <div className="flex flex-wrap gap-2 mt-6">
                        {data.tags.map((tag, i) => (
                            <span key={i}
                                className="border border-[#1e2d45] bg-[#111827] text-[#d1d5db]"
                                style={{ padding: "5px 12px", fontSize: "12px", borderRadius: "6px" }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    {links.length > 0 && (
                        <div className="flex flex-wrap items-center gap-5 mt-6">
                            {links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4aa3ff] hover:text-blue-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                                >
                                    <ExternalLink size={14} strokeWidth={1.8} aria-hidden="true" />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>

                {/* ── RESUMEN ── */}
                {data.content.abstract && (
                    <div className="detail-item pb-14 mb-14 border-b border-[#1a2235]">
                        <SectionHeader Icon={FileText} title={t.articleDetail.abstractTitle} />
                        <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.8", maxWidth: "720px" }}>
                            {data.content.abstract}
                        </p>
                    </div>
                )}

                {/* ── HALLAZGOS CLAVE ── */}
                {data.content.keyPoints?.length > 0 && (
                    <div className="detail-item pb-14 mb-14 border-b border-[#1a2235]">
                        <SectionHeader Icon={Lightbulb} title={t.articleDetail.keyPointsTitle} />
                        <BulletList items={data.content.keyPoints} />
                    </div>
                )}

                {/* ── TEMAS Y HERRAMIENTAS ── */}
                {data.content.topics?.length > 0 && (
                    <div className="detail-item">
                        <SectionHeader Icon={Layers} title={t.articleDetail.topicsTitle} />
                        <div className="flex flex-wrap gap-2">
                            {data.content.topics.map((topic, i) => (
                                <span key={i}
                                    className="border border-[#1e3a4a] bg-[#0d2231] text-[#2dd4bf]"
                                    style={{ padding: "6px 14px", fontSize: "13px", fontWeight: 500, borderRadius: "8px" }}>
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
