export const projects = [
    {
        id: 1,
        slug: "forecasting-demanda-energetica",
        title: "Forecasting de demanda energética",
        description:
            "Comparación de SARIMA, XGBoost y redes neuronales en series reales de energía.",
        tags: ["Python", "SARIMA", "XGBoost", "Time Series"],
        image: "",
        content: {
            overview:
                "Este proyecto compara distintos modelos de pronóstico aplicados a series reales de demanda energética.",
            problem:
                "Se buscó evaluar qué enfoques ofrecen mejor desempeño predictivo bajo validación temporal.",
            technologies: ["Python", "pandas", "statsmodels", "XGBoost", "Optuna"],
            process: [
                "Limpieza y análisis exploratorio de la serie.",
                "Construcción de variables temporales y rezagos.",
                "Entrenamiento de SARIMA y XGBoost.",
                "Evaluación con validación temporal."
            ],
            results: [
                "MAPE promedio competitivo en validación.",
                "Comparación clara entre enfoques clásicos y ML.",
                "Identificación de fortalezas y debilidades de cada modelo."
            ],
            conclusions:
                "El proyecto permitió contrastar rigurosamente métodos tradicionales y de machine learning en forecasting."
        }
    },

    {
        id: 2,
        slug: "dashboard-financiero-powerbi",
        title: "Dashboard financiero en Power BI",
        description:
            "Solución de BI para análisis financiero y seguimiento de indicadores clave.",
        tags: ["Power BI", "DAX", "SQL", "Modelado"],
        image: "",
        content: {
            overview:
                "Desarrollo de tablero financiero orientado a seguimiento y análisis de métricas clave.",
            problem:
                "La organización requería una vista consolidada y confiable para decisiones financieras.",
            technologies: ["Power BI", "DAX", "SQL", "Power Query"],
            process: [
                "Modelado de datos.",
                "Construcción de medidas DAX.",
                "Diseño de visualizaciones.",
                "Optimización del rendimiento."
            ],
            results: [
                "Reducción del tiempo de análisis.",
                "Mejor trazabilidad de indicadores.",
                "Mayor claridad en la lectura financiera."
            ],
            conclusions:
                "El proyecto fortaleció la toma de decisiones mediante una capa analítica más robusta."
        }
    },

    {
        id: 3,
        slug: "pipeline-datos-azure",
        title: "Pipeline de datos en Azure",
        description:
            "Diseño e implementación de pipeline ETL usando Azure Data Factory y Data Lake.",
        tags: ["Azure", "ADF", "SQL", "Data Lake"],
        image: "",
        content: {
            overview:
                "Diseño e implementación de un pipeline de datos en Azure orientado a la ingesta, transformación y almacenamiento eficiente de datos para análisis posterior.",

            problem:
                "Se requería una solución escalable para integrar múltiples fuentes de datos, automatizar procesos ETL y garantizar consistencia en la información.",

            technologies: [
                "Azure Data Factory",
                "Azure Data Lake",
                "SQL",
                "Python",
                "APIs"
            ],

            process: [
                "Definición de arquitectura de datos en Azure.",
                "Implementación de pipelines en Azure Data Factory.",
                "Extracción de datos desde APIs y bases externas.",
                "Transformación y limpieza de datos.",
                "Almacenamiento en Data Lake."
            ],

            results: [
                "Automatización completa del flujo ETL.",
                "Reducción de tiempos de procesamiento.",
                "Mayor confiabilidad en los datos.",
                "Escalabilidad para nuevas fuentes."
            ],

            conclusions:
                "El pipeline permitió estructurar una base sólida para analítica avanzada y facilitar la integración de nuevas fuentes de datos."
        }
    }
];