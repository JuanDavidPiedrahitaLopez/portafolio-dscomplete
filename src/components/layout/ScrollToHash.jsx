"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/scrollToSection";

export default function ScrollToHash() {
    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;
        requestAnimationFrame(() => scrollToSection(hash.slice(1)));
    }, []);

    return null;
}
