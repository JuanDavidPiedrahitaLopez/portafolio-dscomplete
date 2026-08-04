"use client";

import { getProjectCategory } from "@/config/projectCategories";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Etiqueta de categoría (BI, Data Science, Data Engineering, ML,
 * Investigación). El color es moderado: solo se usa en el texto y el
 * borde, nunca como relleno completo de la tarjeta.
 */
export default function CategoryBadge({ category, className = "" }) {
    const { lang } = useLanguage();
    const entry = getProjectCategory(category);
    if (!entry) return null;

    return (
        <span
            className={`inline-flex items-center rounded-md border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${className}`}
            style={{
                color: entry.color,
                borderColor: `${entry.color}55`,
                backgroundColor: `${entry.color}14`,
            }}
        >
            {entry.label[lang]}
        </span>
    );
}
