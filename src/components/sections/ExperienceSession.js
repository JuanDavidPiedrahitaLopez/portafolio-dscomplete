"use client";

import { useEffect, useRef } from "react";
import { BriefcaseBusiness, GraduationCap, BarChart2, Code2, Cloud } from "lucide-react";

const experiences = [
    {
        period: "2021 – 2022",
        title: "Docencia Universitaria",
        descriptions: [
            "Profesor de matemáticas y física.",
            "Desarrollo de materiales y formación académica.",
            "Profesor de matemáticas y física.",
            "Desarrollo de materiales y formación académica.",

        ],
        Icon: GraduationCap,
    },

    {
        period: "2023 – 2023",
        title: "Analista de Datos",
        descriptions: [
            "Análisis de datos, reportes y automatización de procesos con herramientas de BI.",
        ],
        Icon: BarChart2,
    },
    {
        period: "2024 – 2024",
        title: "BI Analyst",
        descriptions: [
            "Modelado semántico y dashboards ejecutivos.",
            "Análisis avanzado en Power BI.",
        ],
        Icon: Code2,
    },
    {
        period: "2025 – Actualidad",
        title: "Analítica Avanzada",
        descriptions: [
            "Modelos predictivos y forecasting.",
            "Integración de datos en la nube.",
        ],
        Icon: Cloud,
    },
];

// Estilos de animación inyectados una sola vez
const ANIMATION_CSS = `
  .exp-item {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .exp-item.visible {
    opacity: 1;
    transform: translateY(0);
  }
  /* Línea horizontal desktop animada */
  .exp-timeline-line {
    transform-origin: left center;
    transform: scaleX(0);
    transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .exp-timeline-line.visible {
    transform: scaleX(1);
  }
  /* Puntos desktop (position absolute con translate) */
  .exp-dot {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
    transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .exp-dot.visible {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  /* Puntos mobile */
  .exp-dot-mobile {
    opacity: 0;
    transform: scale(0);
    transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .exp-dot-mobile.visible {
    opacity: 1;
    transform: scale(1);
  }
  /* Línea vertical mobile */
  .exp-vline {
    transform-origin: top center;
    transform: scaleY(0);
    transition: transform 0.45s ease;
  }
  .exp-vline.visible {
    transform: scaleY(1);
  }
`;

function injectStyles() {
    if (typeof document === "undefined") return;
    if (document.getElementById("exp-anim-styles")) return;
    const el = document.createElement("style");
    el.id = "exp-anim-styles";
    el.textContent = ANIMATION_CSS;
    document.head.appendChild(el);
}

function Descriptions({ items }) {
    if (!items?.length) return null;
    if (items.length === 1) {
        return (
            <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.65" }}>
                {items[0]}
            </p>
        );
    }
    return (
        <ul style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {items.map((d, i) => (
                <li
                    key={i}
                    className="flex items-start gap-1.5"
                    style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.65" }}
                >
                    <span style={{ color: "#2dd4bf", marginTop: "1px", flexShrink: 0 }}>·</span>
                    {d}
                </li>
            ))}
        </ul>
    );
}

export default function ExperienceSection() {
    const count = experiences.length;
    const sectionRef = useRef(null);

    useEffect(() => {
        injectStyles();

        const section = sectionRef.current;
        if (!section) return;

        // Todos los elementos animables dentro de la sección
        const targets = section.querySelectorAll(
            ".exp-item, .exp-timeline-line, .exp-dot, .exp-dot-mobile, .exp-vline"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    const el = entry.target;
                    const delay = el.dataset.delay || "0";

                    setTimeout(() => {
                        el.classList.add("visible");
                    }, Number(delay));

                    // Una vez visible, dejar de observar
                    observer.unobserve(el);
                });
            },
            { threshold: 0.15 }
        );

        targets.forEach((t) => observer.observe(t));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="experiencia"
            ref={sectionRef}
            className="w-full mt-20"
            style={{
                paddingLeft: "8%",
                paddingRight: "8%",
                paddingTop: "2%",
                paddingBottom: "2%",
            }}
        >
            {/* Título */}
            <div className="flex items-center gap-3 mb-6 exp-item" data-delay="0">
                <BriefcaseBusiness size={20} color="#2dd4bf" strokeWidth={1.8} />
                <h2 className="text-white font-bold text-[22px] leading-tight">
                    Experiencia
                </h2>
            </div>

            {/* ── DESKTOP: grid 4 columnas con línea + puntos integrados ── */}
            <div className="hidden lg:block relative mb-2 top-6">

                {/* Línea horizontal que cruza todo el grid, alineada al centro del icono (24px = mitad de 48px) */}
                <div
                    className="exp-timeline-line absolute left-0 right-0"
                    data-delay="200"
                    style={{
                        top: "24px", // centro del icono de 48px
                        height: "1px",
                        background: "linear-gradient(to right, #1a3344, #2dd4bf55, #1a3344)",
                    }}
                />

                <div className="grid grid-cols-4 gap-8">
                    {experiences.map(({ period, title, descriptions, Icon }, i) => (
                        <div
                            key={i}
                            className="exp-item flex flex-col gap-2"
                            data-delay={300 + i * 120}
                        >
                            {/* Icono con punto centrado encima */}
                            <div className="relative flex flex-col items-start" style={{ marginBottom: "8px" }}>
                                {/* Punto alineado al centro del icono */}
                                <span
                                    className="exp-dot absolute rounded-full"
                                    data-delay={250 + i * 100}
                                    style={{
                                        width: "8px",
                                        height: "8px",
                                        background: "#2dd4bf",
                                        boxShadow: "0 0 8px #2dd4bf99",
                                        top: "50%",
                                        left: "24px", // centro horizontal del icono de 48px
                                        transform: "translate(-50%, -50%)",
                                        zIndex: 1,
                                    }}
                                />
                                <div
                                    className="flex items-center justify-center rounded-full flex-shrink-0"
                                    style={{
                                        width: "48px",
                                        height: "48px",
                                        background: "#0d2231",
                                        border: "1.5px solid #1e3a4a",
                                        position: "relative",
                                        zIndex: 2,
                                    }}
                                >
                                    <Icon size={20} color="#2dd4bf" strokeWidth={1.8} />
                                </div>
                            </div>
                            <span style={{ fontSize: "12px", color: "#6b7280" }}>{period}</span>
                            <h3
                                className="text-white font-bold leading-snug"
                                style={{ fontSize: "15px" }}
                            >
                                {title}
                            </h3>
                            <Descriptions items={descriptions} />
                        </div>
                    ))}
                </div>
            </div>

            {/* ── MOBILE: timeline vertical ── */}
            <div className="flex lg:hidden flex-col" style={{ gap: "32px" }}>
                {experiences.map(({ period, title, descriptions, Icon }, i) => (
                    <div key={i} className="flex gap-4">
                        {/* Columna izquierda: punto + línea */}
                        <div
                            className="flex flex-col items-center flex-shrink-0"
                            style={{ width: "20px" }}
                        >
                            <div
                                className="exp-dot-mobile rounded-full flex-shrink-0"
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
                                    className="exp-vline flex-1 w-px mt-2"
                                    data-delay={i * 150 + 100}
                                    style={{
                                        background:
                                            "linear-gradient(to bottom, #2dd4bf55, #1a3344)",
                                        minHeight: "100%",
                                    }}
                                />
                            )}
                        </div>

                        {/* Columna derecha: contenido */}
                        <div
                            className="exp-item flex flex-col gap-2 flex-1"
                            data-delay={i * 150 + 80}
                        >
                            <div
                                className="flex items-center justify-center rounded-full flex-shrink-0"
                                style={{
                                    width: "44px",
                                    height: "44px",
                                    background: "#0d2231",
                                    border: "1.5px solid #1e3a4a",
                                }}
                            >
                                <Icon size={18} color="#2dd4bf" strokeWidth={1.8} />
                            </div>
                            <span style={{ fontSize: "12px", color: "#6b7280" }}>{period}</span>
                            <h3
                                className="text-white font-bold leading-snug"
                                style={{ fontSize: "15px" }}
                            >
                                {title}
                            </h3>
                            <Descriptions items={descriptions} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}