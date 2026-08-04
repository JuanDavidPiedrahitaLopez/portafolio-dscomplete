"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { scrollToSection } from "@/lib/scrollToSection";
import { siteConfig } from "@/config/site";
import Button from "@/components/Button";
import SocialLinks from "@/components/SocialLinks";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Hero() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const containerRef = useScrollReveal("hero-item", { direction: "left", distance: 40 });

    return (
        <section id="inicio" ref={containerRef} className="bg-[#06080d] overflow-hidden h-full scroll-mt-24">

            {/* HERO — imagen confinada aquí */}
            <div
                className="w-full relative flex flex-col md:flex-row items-center justify-between min-h-[360px] md:min-h-[400px] overflow-hidden pt-14 pb-8 md:pt-20 md:pb-16"
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
                    className="hero-item flex flex-col gap-4 sm:gap-5 md:gap-6 z-10 relative w-full md:w-[58%] pr-5 md:pr-8"
                    style={{ paddingLeft: "8%" }}
                >
                    {/* Áreas de especialización — lista estática, no una animación de cargos alternantes */}
                    <p className="text-blue-500 text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase min-h-[1lh]">
                        {t.hero.eyebrow}
                    </p>

                    {/* Nombre — único h1 de la página */}
                    <h1 className="text-white font-bold leading-tight text-[1.6rem] sm:text-3xl md:text-4xl">
                        {t.hero.name}
                    </h1>

                    {/* Posicionamiento profesional */}
                    {/* min-h reserva el mismo espacio en ES/EN aunque el texto envuelva distinto número de líneas */}
                    <p
                        className="font-bold leading-tight text-white min-h-[2lh]"
                        style={{ fontSize: "clamp(1.5rem, 4.5vw, 2.6rem)" }}
                    >
                        {t.hero.titleParts.map((part, i) => (
                            <span key={i} className={part.highlight ? "text-blue-400" : undefined}>
                                {part.text}
                            </span>
                        ))}
                    </p>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-[480px] md:max-w-[620px] min-h-[3lh]">
                        {t.hero.description}
                    </p>

                    {/* BOTONES */}
                    <div className="flex flex-col sm:flex-row gap-3 mt-1 w-full md:w-auto items-start">
                        <Button
                            href="#proyectos"
                            variant="primary"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("proyectos");
                                window.history.replaceState(null, "", "#proyectos");
                            }}
                            className="w-full sm:w-auto min-w-[180px] max-w-[240px] md:w-[180px]"
                        >
                            {t.hero.ctaProjects}
                        </Button>

                        <Button
                            href={siteConfig.cvPath[lang]}
                            variant="secondary"
                            download
                            className="w-full sm:w-auto min-w-[180px] max-w-[240px] md:w-[180px]"
                        >
                            <Download size={16} strokeWidth={2} />
                            {t.hero.ctaCV}
                        </Button>
                    </div>

                    {/* Investigación + redes */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                        <a
                            href="#investigacion"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("investigacion");
                                window.history.replaceState(null, "", "#investigacion");
                            }}
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2dd4bf] border-2 border-[#2dd4bf]/40 bg-[#0d2231]/95 rounded-full px-4 h-[38px] transition-all duration-300 hover:border-[#2dd4bf] hover:bg-[#0f2b38] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2dd4bf]"
                        >
                            {t.hero.ctaResearch} →
                        </a>
                        <SocialLinks />
                    </div>
                </div>

                {/* DERECHA — espacio para ver la imagen */}
                <div className="hidden md:block md:w-[42%]" />
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
                        className="hero-item flex items-center gap-5 px-6 py-5 rounded-xl border border-[#1a2235] bg-[#080c14] min-h-[110px] transition-all duration-300 hover:border-blue-500/40 hover:-translate-y-1"
                        style={{ paddingLeft: "8%", paddingRight: "8%", paddingTop: "2rem", paddingBottom: "2.5rem" }}
                    >
                        <div className="w-14 h-14 rounded-lg bg-[#0f1a2e] border border-blue-900/40 flex items-center justify-center shrink-0 transition-colors duration-300">
                            <span className={i === 0 ? "text-blue-400 text-4xl font-semibold" : "text-blue-400 text-xl"}>
                                {card.icon}
                            </span>
                        </div>
                        <div className="flex flex-col gap-1 min-w-0">
                            <h3 className="text-white text-sm font-semibold">{card.title}</h3>
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
