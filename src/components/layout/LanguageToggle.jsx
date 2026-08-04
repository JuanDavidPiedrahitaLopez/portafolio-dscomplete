"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function LanguageToggle({ className = "" }) {
    const { lang, toggleLang } = useLanguage();
    const t = translations[lang];
    const nextLabel = lang === "es" ? "EN" : "ES";

    return (
        <button
            type="button"
            onClick={toggleLang}
            aria-label={t.nav.langToggleAria}
            className={`flex items-center justify-center gap-2 border border-gray-600 px-4 h-[36px] min-w-[76px] rounded-md text-sm font-medium text-gray-300 hover:text-white hover:border-blue-500 hover:bg-[#0f1623] transition-all duration-200 ${className}`}
        >
            <Languages className="w-4 h-4 opacity-75" strokeWidth={1.8} />
            {nextLabel}
        </button>
    );
}
