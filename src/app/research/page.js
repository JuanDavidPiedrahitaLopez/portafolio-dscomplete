"use client";

import Link from "next/link";
import { articles } from "@/data/articles";
import ArticleCard from "./ArticleCard";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function AllArticlesPage() {
    const { lang } = useLanguage();
    const t = translations[lang];

    return (
        <section className="bg-[#06080d] min-h-screen relative overflow-hidden">
            {/* Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/5 rounded-full blur-3xl" />
            </div>

            <div
                className="w-full relative z-10"
                style={{
                    paddingLeft: "8%",
                    paddingRight: "8%",
                    paddingTop: "2.5rem",
                    paddingBottom: "6rem",
                }}
            >
                {/* Botón volver */}
                <div className="flex justify-end mb-6">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 transition-all hover:gap-3"
                        style={{ color: "#4aa3ff", fontSize: "14px", fontWeight: 500 }}
                    >
                        <span>←</span> {t.allArticles.back}
                    </Link>
                </div>

                {/* Encabezado */}
                <div className="mb-16">
                    <p className="text-blue-500 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                        {t.allArticles.eyebrow}
                    </p>
                    <h1
                        className="text-white font-bold leading-tight mb-5"
                        style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)" }}
                    >
                        {t.allArticles.title}
                    </h1>
                    <p className="text-gray-400 text-base leading-relaxed max-w-[560px]">
                        {t.allArticles.description}
                    </p>
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
