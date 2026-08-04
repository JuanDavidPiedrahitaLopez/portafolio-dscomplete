"use client";

import { ExternalLink, GitBranch, FileText, Database } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

/**
 * Enlaces condicionales de un proyecto (repo / demo / documento / fuente
 * de datos). Solo se muestra el botón cuando el enlace existe — nunca se
 * renderiza un botón con href="#" ni deshabilitado sin explicación.
 */
export default function ProjectLinks({ links = {}, className = "" }) {
    const { lang } = useLanguage();
    const t = translations[lang].projectLinks;

    const items = [
        { key: "repositoryUrl", href: links.repositoryUrl, label: t.code, Icon: GitBranch },
        { key: "demoUrl", href: links.demoUrl, label: t.demo, Icon: ExternalLink },
        { key: "documentationUrl", href: links.documentationUrl, label: t.docs, Icon: FileText },
        { key: "dataSourceUrl", href: links.dataSourceUrl, label: t.dataSource, Icon: Database },
    ].filter((item) => Boolean(item.href));

    if (items.length === 0) return null;

    return (
        <div className={`flex flex-wrap items-center gap-4 ${className}`}>
            {items.map(({ key, href, label, Icon }) => (
                <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4aa3ff] hover:text-blue-300 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
                >
                    <Icon size={15} strokeWidth={1.8} aria-hidden="true" />
                    {label}
                </a>
            ))}
        </div>
    );
}
