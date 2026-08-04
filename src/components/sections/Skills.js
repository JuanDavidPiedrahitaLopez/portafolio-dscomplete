"use client";

import { Sigma, Building2, FolderKanban, BookOpen } from "lucide-react";
import { skillGroups } from "@/data/skills";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useScrollReveal } from "@/lib/useScrollReveal";
import TechnologyBadge from "@/components/TechnologyBadge";

const GROUPS = [
    { key: "professional", Icon: Building2 },
    { key: "projects", Icon: FolderKanban },
    { key: "complementary", Icon: BookOpen },
];

export default function Skills() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const containerRef = useScrollReveal("skills-item", { direction: "left", distance: 40 });

    return (
        <section id="habilidades" ref={containerRef} className="w-full scroll-mt-24" style={{
            paddingLeft: "8%",
            paddingRight: "8%",
            paddingTop: "2%",
            paddingBottom: "2%",
        }}>
            <div className="flex items-center gap-3 mb-10 skills-item">
                <Sigma size={20} color="#4aa3ff" strokeWidth={1.8} />
                <h2 className="text-white font-bold text-[22px] leading-tight">
                    {t.skillsSection.title}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {GROUPS.map(({ key, Icon }) => {
                    const items = skillGroups[key];
                    if (!items?.length) return null;

                    return (
                        <div
                            key={key}
                            className="skills-item flex flex-col gap-4 rounded-xl border border-[#1a2235] bg-[#080c14] p-6 transition-all duration-300 hover:border-blue-500/30"
                        >
                            <div className="flex items-center gap-2.5">
                                <Icon size={16} color="#60a5fa" strokeWidth={1.8} aria-hidden="true" />
                                <h3 className="text-white font-semibold text-sm">
                                    {t.skillsSection[key]}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {items.map((item, i) => (
                                    <TechnologyBadge
                                        key={i}
                                        name={typeof item === "string" ? item : item[lang]}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
