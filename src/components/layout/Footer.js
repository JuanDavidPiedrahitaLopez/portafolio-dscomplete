"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { siteConfig } from "@/config/site";
import SocialLinks from "@/components/SocialLinks";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Footer() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const containerRef = useScrollReveal("reveal-item", { direction: "left", distance: 40 });

    return (
        <footer className="border-t border-[#1a2235] bg-[#06080d]">

            <div
                ref={containerRef}
                className="w-full flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-0"
                style={{ paddingLeft: "8%", paddingRight: "8%", paddingTop: "3rem", paddingBottom: "3rem" }}
            >

                {/* COLUMNA IZQUIERDA */}
                <div className="reveal-item flex flex-col gap-3 flex-1 items-center lg:items-start">
                    <h3 className="text-white font-semibold text-base">{t.footer.title}</h3>
                    <p className="text-gray-400 text-sm leading-snug max-w-[320px] lg:max-w-[220px] text-center lg:text-left">
                        {t.footer.description}
                    </p>
                    <Link
                        href="/contacto"
                        className="flex items-center justify-center gap-2 border border-gray-600 px-3 h-[36px] rounded-md text-sm text-gray-300 hover:text-white hover:border-blue-500 hover:bg-[#0f1623] transition-all duration-200 w-[140px] mt-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                        {t.footer.cta}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </Link>
                </div>

                {/* DIVISOR - solo desktop */}
                <div className="hidden lg:block w-px h-16 bg-[#1a2235] mx-10 shrink-0" />

                {/* COLUMNA CENTRO */}
                <div className="reveal-item flex flex-col gap-4 lg:w-[260px] shrink-0 items-center">
                    <p className="text-white font-semibold text-base">{t.footer.connect}</p>
                    <SocialLinks />
                </div>

                {/* DIVISOR - solo desktop */}
                <div className="hidden lg:block w-px h-16 bg-[#1a2235] mx-10 shrink-0" />

                {/* COLUMNA DERECHA */}
                <div className="reveal-item flex-1 flex items-center justify-center lg:justify-end">
                    <p className="text-gray-400 text-sm text-center lg:text-right">
                        © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
                    </p>
                </div>

            </div>

        </footer>
    );
}
