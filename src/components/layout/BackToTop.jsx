"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

const SHOW_THRESHOLD = 120;

export default function BackToTop() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const [scrolled, setScrolled] = useState(false);
    const [nearFooter, setNearFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > SHOW_THRESHOLD);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const footer = document.querySelector("footer");
        if (!footer) return;
        const observer = new IntersectionObserver(([entry]) => setNearFooter(entry.isIntersecting));
        observer.observe(footer);
        return () => observer.disconnect();
    }, []);

    const visible = scrolled && !nearFooter;

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
            className={`fixed bottom-6 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full border border-[#1e3a4a] bg-[#0d2231] text-[#2dd4bf] shadow-lg shadow-black/30 transition-all duration-300 hover:border-[#2dd4bf] hover:text-white hover:shadow-[0_0_16px_rgba(45,212,191,0.35)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2dd4bf] ${
                visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
            }`}
        >
            <ArrowUp className="w-5 h-5" strokeWidth={2} />
        </button>
    );
}
