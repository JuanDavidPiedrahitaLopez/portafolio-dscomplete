"use client";

import { User, Target, MessageSquare, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useScrollReveal } from "@/lib/useScrollReveal";

const VALUE_ICONS = { Target, MessageSquare, BookOpen };

export default function About() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const containerRef = useScrollReveal("about-item", { direction: "left", distance: 40 });

    return (
        <section id="sobre-mi"
            className="relative w-full scroll-mt-24 overflow-hidden"
        >
            {/* Gradiente de fondo — mismo lenguaje visual que el glow de /contacto */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 right-0 w-[520px] h-[520px] bg-blue-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-teal-900/10 rounded-full blur-3xl" />
            </div>

            <div
                ref={containerRef}
                className="relative z-10 pt-14 md:pt-[2%]"
                style={{
                    paddingLeft: "8%",
                    paddingRight: "8%",
                    paddingBottom: "2%",
                }}
            >
                {/* Título */}
                <div className="flex items-center gap-3 mb-10 about-item">
                    <User size={20} color="#4aa3ff" strokeWidth={1.8} />
                    <h2 className="text-white font-bold text-[22px] leading-tight">
                        {t.about.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
                    {/* Biografía */}
                    <p className="about-item text-gray-400 text-base leading-relaxed max-w-[560px]">
                        {t.about.bio}
                    </p>

                    {/* Valores */}
                    <div className="flex flex-col gap-4">
                        {t.about.values.map((value, i) => {
                            const Icon = VALUE_ICONS[value.icon] ?? Target;
                            return (
                                <div
                                    key={i}
                                    className="about-item flex items-start gap-4 px-5 py-4 rounded-xl border border-[#1a2235] bg-[#080c14] transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-0.5"
                                >
                                    <div className="w-11 h-11 rounded-lg bg-[#0f1a2e] border border-blue-900/40 flex items-center justify-center shrink-0">
                                        <Icon size={18} color="#60a5fa" strokeWidth={1.8} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-white text-sm font-semibold mb-1">{value.title}</p>
                                        <p className="text-gray-400 text-xs leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
