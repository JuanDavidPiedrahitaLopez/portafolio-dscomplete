"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { scrollToSection } from "@/lib/scrollToSection";

export default function Hero() {
    const { lang } = useLanguage();
    const t = translations[lang];

    return (
        <section id="inicio" className="bg-[#06080d] overflow-hidden h-full scroll-mt-24">

            {/* HERO — imagen confinada aquí */}
            <div
                className="w-full relative flex flex-col md:flex-row items-center justify-between min-h-[400px] overflow-hidden"
                style={{ paddingTop: "5rem", paddingBottom: "4rem" }}
            >
                {/* IMAGEN DE FONDO — solo en el hero */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-bn.png"
                        alt=""
                        fill
                        className="object-cover object-right"
                        priority
                        quality={100}
                    />
                    {/* Gradiente izquierda → derecha */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to right, #06080d 0%, #06080d 10%, rgba(6,8,13,0.85) 20%, rgba(6,8,13,0.3) 30%, rgba(6,8,13,0.05) 100%)",
                        }}
                    />
                    {/* Gradiente arriba y abajo */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to bottom, #06080d 0%, transparent 12%, transparent 80%, #06080d 100%)",
                        }}
                    />
                </div>

                {/* IZQUIERDA */}
                <div
                    className="flex flex-col gap-6 z-10 relative w-full md:w-[50%] pr-5 md:pr-0"
                    style={{ paddingLeft: "8%" }}
                >
                    <p className="text-blue-500 text-xs font-semibold tracking-[0.2em] uppercase">
                        {t.hero.eyebrow}
                    </p>

                    <h1
                        className="text-white font-bold leading-tight"
                        style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
                    >
                        {t.hero.titleParts.map((part, i) =>
                            part.break ? (
                                <br key={i} />
                            ) : (
                                <span key={i} className={part.highlight ? "text-blue-400" : undefined}>
                                    {part.text}
                                </span>
                            )
                        )}
                    </h1>

                    <p className="text-gray-400 text-base leading-relaxed max-w-[480px]">
                        {t.hero.description}
                    </p>

                    {/* BOTONES */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full md:w-auto items-start">
                        <a
                            href="#proyectos"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("proyectos");
                                window.history.replaceState(null, "", "#proyectos");
                            }}
                            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 h-[44px]
                            w-full sm:w-auto min-w-[180px] max-w-[240px] md:w-[180px]
                            rounded-md text-sm font-medium transition-all duration-200">
                            {t.hero.ctaProjects}
                        </a>

                        <a
                            href="#investigacion"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("investigacion");
                                window.history.replaceState(null, "", "#investigacion");
                            }}
                            className="flex items-center justify-center gap-2 border border-gray-600 hover:border-blue-500 hover:bg-[#0f1623] text-gray-300 hover:text-white px-6 h-[44px]
                            w-full sm:w-auto min-w-[180px] max-w-[240px] md:w-[180px]
                            rounded-md text-sm font-medium transition-all duration-200">
                            {t.hero.ctaResearch}
                        </a>
                    </div>
                </div>

                {/* DERECHA — espacio para ver la imagen */}
                <div className="hidden md:block md:w-[50%]" />
            </div>

            {/* CARDS — fuera del div con la imagen, fondo sólido */}
            <div
                className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20 border-t border-[#1a2235] bg-[#06080d]"
                style={{
                    paddingLeft: "8%",
                    paddingRight: "8%",
                    paddingTop: "2rem",
                    paddingBottom: "2.5rem",
                }}
            >
                {t.hero.cards.map((card, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-5 px-6 py-5 rounded-xl border border-[#1a2235] bg-[#080c14] min-h-[110px] transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1"
                        style={{ paddingLeft: "8%", paddingRight: "8%", paddingTop: "2rem", paddingBottom: "2.5rem" }}
                    >
                        <div className="w-14 h-14 rounded-lg bg-[#0f1a2e] border border-blue-900/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                            <span className={i === 0 ? "text-blue-400 text-4xl font-semibold" : "text-blue-400 text-xl"}>
                                {card.icon}
                            </span>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                            <p className="text-white text-sm font-semibold">{card.title}</p>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
