"use client";

import Link from "next/link";
import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { useScrollReveal } from "@/lib/useScrollReveal";
import SectionGlow from "@/components/SectionGlow";

export default function ResearchSection() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const containerRef = useScrollReveal("reveal-item", { direction: "left", distance: 40 });

    return (
        <section className="relative w-full scroll-mt-24 overflow-hidden" id="investigacion" ref={containerRef} style={{
            width: "100%",
            paddingLeft: "8%",
            paddingTop: "2%",
            paddingBottom: "2%",
            paddingRight: "8%"
        }} >

            <SectionGlow />

            <div className="relative z-10 mx-auto">

                {/* HEADER */}
                <div className="reveal-item flex justify-between items-center flex-wrap gap-3 mb-10">
                    <h2 className="text-white font-bold text-[28px]">
                        {t.researchSection.title}
                    </h2>

                    <Link
                        href="/research"
                        className="text-[#2dd4bf] text-[18px] flex items-center gap-1.5 transition-all duration-200 hover:gap-2.5"
                    >
                        {t.researchSection.viewAll}
                    </Link>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),360px))] justify-center gap-8">
                    {articles.map((article) => (
                        <div key={article.id} className="reveal-item w-full">
                            <ArticleCard article={article} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
