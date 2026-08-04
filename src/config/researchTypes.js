// Tipos de trabajo de investigación. Evita presentar una nota técnica
// como si fuera una tesis o una publicación arbitrada.
export const researchTypes = {
    academic: { label: { es: "Investigación académica", en: "Academic research" } },
    applied: { label: { es: "Proyecto aplicado", en: "Applied project" } },
    article: { label: { es: "Artículo", en: "Article" } },
    thesis: { label: { es: "Tesis", en: "Thesis" } },
    publication: { label: { es: "Publicación", en: "Publication" } },
};

export function getResearchType(key) {
    return researchTypes[key] ?? null;
}

// Estado de avance del trabajo. Nunca se marca "published" salvo que
// exista confirmación real de publicación.
export const researchStatuses = {
    inProgress: { label: { es: "En desarrollo", en: "In progress" }, color: "#F2C94C" },
    draft: { label: { es: "Borrador", en: "Draft" }, color: "#6b7280" },
    finished: { label: { es: "Finalizado", en: "Finished" }, color: "#27AE60" },
    submitted: { label: { es: "Sometido", en: "Submitted" }, color: "#2F80ED" },
    published: { label: { es: "Publicado", en: "Published" }, color: "#9B51E0" },
};

export function getResearchStatus(key) {
    return researchStatuses[key] ?? null;
}
