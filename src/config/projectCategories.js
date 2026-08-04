// Configuración central de categorías de proyecto. Se usa desde
// CategoryBadge y desde cualquier tarjeta que necesite el color/label de
// una categoría, para no repetir esta lógica en cada componente.
export const projectCategories = {
    bi: {
        label: { es: "Business Intelligence", en: "Business Intelligence" },
        color: "#F2C94C",
    },
    dataScience: {
        label: { es: "Data Science", en: "Data Science" },
        color: "#9B51E0",
    },
    dataEngineering: {
        label: { es: "Data Engineering", en: "Data Engineering" },
        color: "#FF5252",
    },
    machineLearning: {
        label: { es: "Machine Learning", en: "Machine Learning" },
        color: "#27AE60",
    },
    research: {
        label: { es: "Investigación", en: "Research" },
        color: "#EB5757",
    },
};

export function getProjectCategory(key) {
    return projectCategories[key] ?? null;
}

// Estados posibles de un proyecto/artículo. Evita presentar trabajo en
// curso como si estuviera terminado.
export const projectStatuses = {
    completed: { label: { es: "Completado", en: "Completed" }, color: "#27AE60" },
    inProgress: { label: { es: "En desarrollo", en: "In progress" }, color: "#F2C94C" },
    updating: { label: { es: "En actualización", en: "Updating" }, color: "#2F80ED" },
    research: { label: { es: "Investigación", en: "Research" }, color: "#EB5757" },
    archived: { label: { es: "Archivado", en: "Archived" }, color: "#6b7280" },
};

export function getProjectStatus(key) {
    return projectStatuses[key] ?? null;
}
