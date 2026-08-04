"use client";

import { useEffect, useRef } from "react";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import EducationItem from "@/components/EducationItem";

// Estilos de animación inyectados una sola vez
const ANIMATION_CSS = `
  .edu-item {
    opacity: 0;
    transform: translateX(-48px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .edu-item.visible {
    opacity: 1;
    transform: translateX(0);
  }
  .edu-dot {
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .edu-dot.visible {
    opacity: 1;
    transform: scale(1);
  }
  .edu-vline {
    transform-origin: top center;
    transform: scaleY(0);
    transition: transform 0.45s ease;
  }
  .edu-vline.visible {
    transform: scaleY(1);
  }

  @media (prefers-reduced-motion: reduce) {
    .edu-item, .edu-dot, .edu-vline {
      transition-duration: 0.01ms !important;
    }
    .edu-item { transform: none !important; }
    .edu-dot { transform: scale(1) !important; }
    .edu-vline { transform: scaleY(1) !important; }
  }
`;

function injectStyles() {
    if (typeof document === "undefined") return;
    if (document.getElementById("edu-anim-styles")) return;
    const el = document.createElement("style");
    el.id = "edu-anim-styles";
    el.textContent = ANIMATION_CSS;
    document.head.appendChild(el);
}

export default function EducationSection() {
    const { lang } = useLanguage();
    const t = translations[lang];
    const count = education.length;
    const sectionRef = useRef(null);

    useEffect(() => {
        injectStyles();

        const section = sectionRef.current;
        if (!section) return;

        const targets = section.querySelectorAll(".edu-item, .edu-dot, .edu-vline");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const el = entry.target;
                    const delay = el.dataset.delay || "0";

                    setTimeout(() => {
                        el.classList.add("visible");
                    }, Number(delay));

                    observer.unobserve(el);
                });
            },
            { threshold: 0.15 }
        );

        targets.forEach((node) => observer.observe(node));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="educacion"
            ref={sectionRef}
            className="w-full scroll-mt-24"
            style={{
                paddingLeft: "8%",
                paddingRight: "8%",
                paddingTop: "2%",
                paddingBottom: "2%",
            }}
        >
            {/* Título */}
            <div className="flex items-center gap-3 mb-6 edu-item" data-delay="0">
                <GraduationCap size={20} color="#2dd4bf" strokeWidth={1.8} />
                <h2 className="text-white font-bold text-[22px] leading-tight">
                    {t.educationSection.title}
                </h2>
            </div>

            {/* Timeline vertical — misma estructura en mobile y desktop */}
            <div className="flex flex-col max-w-[760px]" style={{ gap: "32px" }}>
                {education.map((item, i) => (
                    <div key={i} className="flex gap-4">
                        {/* Columna izquierda: punto + línea */}
                        <div className="flex flex-col items-center flex-shrink-0" style={{ width: "20px" }}>
                            <div
                                className="edu-dot rounded-full flex-shrink-0"
                                data-delay={i * 150}
                                style={{
                                    width: "8px",
                                    height: "8px",
                                    background: "#2dd4bf",
                                    boxShadow: "0 0 8px #2dd4bf99",
                                    marginTop: "6px",
                                }}
                            />
                            {i < count - 1 && (
                                <div
                                    className="edu-vline flex-1 w-px mt-2"
                                    data-delay={i * 150 + 100}
                                    style={{
                                        background: "linear-gradient(to bottom, #2dd4bf55, #1a3344)",
                                        minHeight: "100%",
                                    }}
                                />
                            )}
                        </div>

                        {/* Columna derecha: contenido */}
                        <div className="edu-item group flex flex-col gap-2 flex-1" data-delay={i * 150 + 80}>
                            <div className="flex w-11 h-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#1e3a4a] bg-[#0d2231] transition-all duration-300 group-hover:border-[#2dd4bf]/70 group-hover:shadow-[0_0_16px_rgba(45,212,191,0.25)]">
                                <item.Icon size={18} color="#2dd4bf" strokeWidth={1.8} />
                            </div>
                            <EducationItem
                                education={item}
                                lang={lang}
                                headingClassName="transition-colors duration-300 group-hover:text-[#2dd4bf]"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
