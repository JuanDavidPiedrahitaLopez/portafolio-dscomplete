"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const SHOW_THRESHOLD = 480;

export default function BackToTop() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > SHOW_THRESHOLD);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    };

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label={t.backToTop.aria}
            title={t.backToTop.aria}
            className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full border border-[#1a2235] bg-[#0f1623]/90 backdrop-blur text-blue-400 shadow-lg shadow-black/30 transition-all duration-300 hover:border-blue-500 hover:text-white hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
            }`}
        >
            <ArrowUp className="w-5 h-5" strokeWidth={2} />
        </button>
    );
}
