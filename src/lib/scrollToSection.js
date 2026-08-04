export function scrollToSection(id) {
    if (typeof document === "undefined") return false;
    const el = document.getElementById(id);
    if (!el) return false;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    return true;
}
