import { GraduationCap, BarChart2, Code2, Cloud } from "lucide-react";

export const experiences = [
    {
        period: "2021 – 2022",
        Icon: GraduationCap,
        title: { es: "Docencia Universitaria", en: "University Teaching" },
        descriptions: {
            es: [
                "Profesor de matemáticas y física.",
                "Desarrollo de materiales y formación académica.",
            ],
            en: [
                "Mathematics and physics professor.",
                "Development of teaching materials and academic training.",
            ],
        },
    },
    {
        period: "2023 – 2023",
        Icon: BarChart2,
        title: { es: "Analista de Datos", en: "Data Analyst" },
        descriptions: {
            es: [
                "Análisis de datos, reportes y automatización de procesos con herramientas de BI.",
            ],
            en: [
                "Data analysis, reporting, and process automation using BI tools.",
            ],
        },
    },
    {
        period: "2024 – 2024",
        Icon: Code2,
        title: { es: "BI Analyst", en: "BI Analyst" },
        descriptions: {
            es: [
                "Modelado semántico y dashboards ejecutivos.",
                "Análisis avanzado en Power BI.",
            ],
            en: [
                "Semantic modeling and executive dashboards.",
                "Advanced analysis in Power BI.",
            ],
        },
    },
    {
        period: { es: "2025 – Actualidad", en: "2025 – Present" },
        Icon: Cloud,
        title: { es: "Analítica Avanzada", en: "Advanced Analytics" },
        descriptions: {
            es: [
                "Modelos predictivos y forecasting.",
                "Integración de datos en la nube.",
            ],
            en: [
                "Predictive models and forecasting.",
                "Cloud data integration.",
            ],
        },
    },
];
