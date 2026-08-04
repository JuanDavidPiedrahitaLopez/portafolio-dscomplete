import { GraduationCap, BarChart2, Code2, Cloud } from "lucide-react";

// PLACEHOLDER: "company" y "location" quedan vacíos porque no se
// confirmaron nombres de empresa ni ubicación reales para estos roles.
// Ver CONTENT_TODO.md.
export const experiences = [
    {
        Icon: GraduationCap,
        company: "",
        location: "",
        startDate: "2021",
        endDate: "2022",
        role: { es: "Docencia Universitaria", en: "University Teaching" },
        technologies: [],
        achievements: {
            es: [
                "Impartí clases de matemáticas y física a nivel universitario.",
                "Desarrollé materiales didácticos y contenidos de formación académica.",
                "[Agregar logro verificable adicional de este rol.]",
            ],
            en: [
                "Taught mathematics and physics at the university level.",
                "Developed teaching materials and academic training content.",
                "[Add a verifiable achievement for this role.]",
            ],
        },
    },
    {
        Icon: BarChart2,
        company: "",
        location: "",
        startDate: "2023",
        endDate: "2023",
        role: { es: "Analista de Datos", en: "Data Analyst" },
        technologies: [],
        achievements: {
            es: [
                "Desarrollé reportes y análisis de datos para apoyar la toma de decisiones.",
                "Automaticé procesos recurrentes utilizando herramientas de BI.",
                "[Agregar logro verificable adicional de este rol.]",
            ],
            en: [
                "Built reports and data analyses to support decision-making.",
                "Automated recurring processes using BI tools.",
                "[Add a verifiable achievement for this role.]",
            ],
        },
    },
    {
        Icon: Code2,
        company: "",
        location: "",
        startDate: "2024",
        endDate: "2024",
        role: { es: "BI Analyst", en: "BI Analyst" },
        technologies: [],
        achievements: {
            es: [
                "Diseñé modelos semánticos para reportes ejecutivos en Power BI.",
                "Realicé análisis avanzado de datos utilizando Power BI.",
                "[Agregar logro verificable adicional de este rol.]",
            ],
            en: [
                "Designed semantic models for executive reports in Power BI.",
                "Performed advanced data analysis using Power BI.",
                "[Add a verifiable achievement for this role.]",
            ],
        },
    },
    {
        Icon: Cloud,
        company: "",
        location: "",
        startDate: "2025",
        endDate: { es: "Actualidad", en: "Present" },
        role: { es: "Analítica Avanzada", en: "Advanced Analytics" },
        technologies: [],
        achievements: {
            es: [
                "Desarrollé modelos predictivos y de forecasting.",
                "Integré datos en la nube como parte de soluciones analíticas.",
                "[Agregar logro verificable adicional de este rol.]",
            ],
            en: [
                "Developed predictive and forecasting models.",
                "Integrated cloud data as part of analytical solutions.",
                "[Add a verifiable achievement for this role.]",
            ],
        },
    },
];
