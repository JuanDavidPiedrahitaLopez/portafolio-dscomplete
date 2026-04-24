"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ContactModal from "../contact/contact";
export default function Navbar() {
    const [active, setActive] = useState("inicio");
    const [menuOpen, setMenuOpen] = useState(false);


    const links = [
        { label: "Inicio", id: "inicio" },
        { label: "Proyectos", id: "proyectos" },
        { label: "Investigación", id: "investigacion" },
        { label: "Experiencia", id: "experiencia" },
        { label: "Sobre mí", id: "sobre-mi" },
    ];

    const pathname = usePathname();
    useEffect(() => {
        if (pathname !== "/") return;

        const sections = links
            .map((l) => document.getElementById(l.id))
            .filter(Boolean);

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((e) => e.isIntersecting);
                if (visible) {
                    setActive(visible.target.id);
                }
            },
            {
                rootMargin: "-40% 0px -50% 0px",
                threshold: 0.1,
            }
        );

        sections.forEach((sec) => observer.observe(sec));

        return () => observer.disconnect();
    }, [pathname]);



    return (
        <header className="sticky top-0 z-50 border-b border-[#111827] bg-[#06080d] backdrop-blur-md">

            <div className="w-full h-[80px] flex items-center justify-between relative" style={{ paddingLeft: "8%", paddingRight: "8%" }}>

                {/* LOGO */}
                <div className="flex items-center z-10">
                    <span className="text-blue-500 font-extrabold text-2xl tracking-tight leading-none">
                        JD
                    </span>
                </div>

                {/* MENU CENTRADO - solo desktop */}
                <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
                    {links.map((link) => (
                        <div
                            key={link.id}
                            className="relative flex flex-col items-center cursor-pointer group"
                            onClick={() => setActive(link.id)}
                        >
                            {/* BUG 1 FIX: link es objeto, hay que usar link.label */}
                            <span className={`text-sm font-medium tracking-wide transition-colors duration-200 ${active === link.id ? "text-blue-400" : "text-gray-400 group-hover:text-gray-200"
                                }`}>
                                <Link
                                    href={pathname === "/" ? `#${link.id}` : `/#${link.id}`}
                                    scroll={false}
                                >{link.label}</Link>
                            </span>
                            <div className={`mt-[6px] flex flex-col items-center transition-opacity duration-200 ${active === link.id ? "opacity-100" : "opacity-0"}`}>
                                <div className="w-7 h-[2px] bg-blue-500 rounded-full" />
                                <div className="w-[5px] h-[5px] bg-blue-400 rounded-full mt-[3px]" />
                            </div>
                        </div>
                    ))}
                </nav>

                {/* DERECHA: botón contacto (desktop) + burger (mobile) */}
                <div className="flex items-center gap-4 z-10">

                    {/* Botón contacto - solo desktop */}
                    <Link
                        href="/contacto"
                        className="flex items-center gap-2  hover:border-blue-500 hover:bg-[#0f1623] text-gray-300 hover:text-white px-5 h-[38px] rounded-md text-sm font-medium transition"
                    >
                        <button
                            className="hidden lg:flex items-center gap-2 border border-gray-600 px-4 h-[36px] rounded-md text-sm text-gray-300 hover:text-white hover:border-blue-500 hover:bg-[#0f1623] transition-all duration-200 min-w-[140px] justify-center">

                            Contacto
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>

                        </button>
                    </Link>

                    {/* Burger - solo mobile */}
                    <button
                        className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Menú"
                    >
                        <span className={`block w-6 h-[2px] bg-gray-300 rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                        <span className={`block w-6 h-[2px] bg-gray-300 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-[2px] bg-gray-300 rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                    </button>

                </div>
            </div>

            {/* MENÚ MOBILE desplegable */}
            <div className={`lg:hidden absolute overflow-hidden w-[100vw] transition-all duration-300 ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                <nav className="flex flex-col border-t border-[#111827] bg-[#06080d]" style={{ paddingLeft: "15%", paddingRight: "8%", paddingBottom: "8%" }}>
                    {links.map((link) => (
                        <div
                            key={link.id}
                            className="flex items-center justify-between py-5 border-b border-[#111827] cursor-pointer" style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                            onClick={() => { setActive(link.id); setMenuOpen(false); }}
                        >
                            <span className={`text-sm font-medium tracking-wide ${active === link.id ? "text-blue-400" : "text-gray-400"}`}>
                                {link.label}
                            </span>
                            {active === link.id && (
                                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                            )}
                        </div>
                    ))}

                    {/* Botón contacto en mobile */}
                    <div className="py-5">
                        <Link

                            onClick={() => setMenuOpen(false)}
                            href="/contacto"
                            className="flex items-center gap-2  hover:border-blue-500 hover:bg-[#0f1623] text-gray-300 hover:text-white px-5 h-[38px] rounded-md text-sm font-medium transition"
                        >
                            <button className="flex items-center gap-2 border border-gray-600 px-4 h-[36px] rounded-md text-sm text-gray-300 hover:text-white hover:border-blue-500 hover:bg-[#0f1623] transition-all duration-200 w-full justify-center">
                                Contacto
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </nav>
            </div>

        </header >
    );
}