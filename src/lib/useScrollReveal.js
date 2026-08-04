"use client";

import { useEffect, useRef } from "react";

function injectStyles(id, css) {
    if (typeof document === "undefined") return;
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
}

const TRANSFORMS = {
    left: (d) => `translateX(-${d}px)`,
    right: (d) => `translateX(${d}px)`,
    up: (d) => `translateY(${d}px)`,
};

// Revela elementos con la clase dada (fade + slide) a medida que entran al viewport.
// Reutiliza el mismo patrón de IntersectionObserver que ya usa ExperienceSection.
export function useScrollReveal(className, { direction = "left", distance = 48 } = {}) {
    const containerRef = useRef(null);

    useEffect(() => {
        const styleId = `scroll-reveal-${className}`;
        injectStyles(
            styleId,
            `.${className} {
                opacity: 0;
                transform: ${TRANSFORMS[direction](distance)};
                transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
            }
            .${className}.visible {
                opacity: 1;
                transform: translate(0, 0);
            }
            @media (prefers-reduced-motion: reduce) {
                .${className} {
                    transition-duration: 0.01ms !important;
                    transform: none !important;
                }
            }`
        );

        const container = containerRef.current;
        if (!container) return;

        const targets = container.querySelectorAll(`.${className}`);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                });
            },
            { threshold: 0.15 }
        );

        targets.forEach((node) => observer.observe(node));

        return () => observer.disconnect();
    }, [className, direction, distance]);

    return containerRef;
}
