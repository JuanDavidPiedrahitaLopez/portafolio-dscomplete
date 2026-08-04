"use client";

import Link from "next/link";
import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ResearchSection() {
    const { lang } = useLanguage();
    const t = translations[lang];

    return (
        <section className="w-full scroll-mt-24" id="investigacion" style={{
            width: "100%",
            paddingLeft: "8%",
            paddingTop: "2%",
            paddingBottom: "2%",
            paddingRight: "8%"
        }} >

            <div className="mx-auto">

                {/* HEADER */}
                <div className="flex justify-between items-center flex-wrap gap-3 mb-10">
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
                        <div key={article.id} className="w-full">
                            <ArticleCard article={article} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
