"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { getResearchType, getResearchStatus } from "@/config/researchTypes";
import StatusBadge from "@/components/StatusBadge";

export default function ArticleCard({ article }) {
    const { lang } = useLanguage();
    const t = translations[lang];
    const { title, excerpt, tags } = article[lang];
    const type = getResearchType(article.type);

    return (
        <article
            className="group h-full flex flex-col rounded-2xl border border-[#1a2235] bg-[#0a0f1a] transition-all duration-300 hover:border-[#2dd4bf66] hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/5"
            style={{ width: "100%", maxWidth: "360px", padding: "16px" }}
        >
            {/* Encabezado — ícono + año */}
            <div className="flex items-center justify-between" style={{ marginBottom: "14px" }}>
                <div className="w-12 h-12 rounded-lg bg-[#0d2231] border border-[#1e3a4a] flex items-center justify-center shrink-0">
                    <FileText size={20} color="#2dd4bf" strokeWidth={1.8} />
                </div>
                {article.year && (
                    <span className="text-gray-500" style={{ fontSize: "12px" }}>{article.year}</span>
                )}
            </div>

            {/* Tipo + estado */}
            <div className="flex flex-wrap items-center gap-2" style={{ marginBottom: "10px" }}>
                {type && (
                    <span className="inline-flex items-center rounded-md border border-[#1e2d45] bg-[#111827] text-[#9ca3af] px-2.5 py-1 text-[11px] font-medium">
                        {type.label[lang]}
                    </span>
                )}
                <StatusBadge status={article.status} resolver={getResearchStatus} />
            </div>

            {/* Contenido */}
            <div className="flex flex-col flex-1">
                <h3
                    className="font-bold leading-snug text-white"
                    style={{ fontSize: "17px", marginBottom: "6px" }}
                >
                    {title}
                </h3>

                <p
                    className="text-[#9ca3af] line-clamp-3"
                    style={{ fontSize: "13.5px", lineHeight: "1.6", marginBottom: "16px" }}
                >
                    {excerpt}
                </p>

                <div className="flex flex-wrap" style={{ gap: "8px", marginBottom: "14px" }}>
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center rounded-md border border-[#1e2d45] bg-[#111827] text-[#d1d5db]"
                            style={{ fontSize: "12px", fontWeight: 500, padding: "5px 12px" }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <Link
                    href={`/research/${article.slug}`}
                    className="inline-flex items-center transition-all duration-200 mt-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-sm"
                    style={{ fontSize: "14px", fontWeight: 500, color: "#2dd4bf", gap: "6px" }}
                >
                    {t.researchSection.readMore}{" "}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
            </div>
        </article>
    );
}
