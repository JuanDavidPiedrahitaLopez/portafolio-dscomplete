"use client";

import { getProjectStatus } from "@/config/projectCategories";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Badge discreto de estado (completado / en desarrollo / archivado...).
 * Nunca presenta un proyecto o investigación en curso como si estuviera
 * terminado. `resolver` permite reutilizarlo con otro mapa de estados
 * (ej. researchStatuses) en vez de duplicar el componente.
 */
export default function StatusBadge({ status, resolver = getProjectStatus, className = "" }) {
    const { lang } = useLanguage();
    const entry = resolver(status);
    if (!entry) return null;

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${className}`}
            style={{ color: entry.color, borderColor: `${entry.color}55` }}
        >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: entry.color }} />
            {entry.label[lang]}
        </span>
    );
}
