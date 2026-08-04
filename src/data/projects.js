// Fuente central de datos de proyectos. Los campos vacíos ("", [], null)
// son intencionales: no se inventa información (fechas, enlaces,
// métricas) que no ha sido confirmada. Ver CONTENT_TODO.md.
export const projects = [
    {
        id: 1,
        slug: "forecasting-demanda-energetica",
        thumbnail: "forecast",
        category: "machineLearning",
        status: "completed",
        featured: true,
        year: "", // PLACEHOLDER: confirmar año real del proyecto
        architectureImage: "",
        links: {
            repositoryUrl: "",
            demoUrl: "",
            documentationUrl: "",
            articleUrl: "",
            dataSourceUrl: "",
        },
        metrics: [], // PLACEHOLDER: sin métricas verificadas todavía
        es: {
            title: "Forecasting de demanda energética",
            description:
                "Comparación de SARIMA, XGBoost y redes neuronales en series reales de energía.",
            tags: ["Python", "SARIMA", "XGBoost", "Series de Tiempo"],
            content: {
                overview:
                    "Este proyecto compara distintos modelos de pronóstico aplicados a series reales de demanda energética.",
                problem:
                    "Se buscó evaluar qué enfoques ofrecen mejor desempeño predictivo bajo validación temporal.",
                dataUsed:
                    "Series históricas de demanda energética. [PLACEHOLDER: confirmar fuente y periodo exactos del dataset.]",
                technologies: ["Python", "pandas", "statsmodels", "XGBoost", "Optuna"],
                features: [
                    "Comparación simultánea de modelos estadísticos y de machine learning.",
                    "Validación temporal para evitar fuga de datos entre entrenamiento y prueba.",
                    "Visualización interactiva de pronósticos frente a valores reales.",
                ],
                process: [
                    "Limpieza y análisis exploratorio de la serie.",
                    "Construcción de variables temporales y rezagos.",
                    "Entrenamiento de SARIMA y XGBoost.",
                    "Evaluación con validación temporal.",
                ],
                results: [
                    "MAPE promedio competitivo en validación.",
                    "Comparación clara entre enfoques clásicos y ML.",
                    "Identificación de fortalezas y debilidades de cada modelo.",
                ],
                limitations:
                    "[PLACEHOLDER: describir limitaciones reales conocidas, ej. tamaño de la muestra o generalización a otras series.]",
                learnings:
                    "[PLACEHOLDER: agregar aprendizajes concretos obtenidos durante el proyecto.]",
                conclusions:
                    "El proyecto permitió contrastar rigurosamente métodos tradicionales y de machine learning en forecasting.",
            },
        },
        en: {
            title: "Energy demand forecasting",
            description:
                "Comparison of SARIMA, XGBoost, and neural networks on real energy time series.",
            tags: ["Python", "SARIMA", "XGBoost", "Time Series"],
            content: {
                overview:
                    "This project compares different forecasting models applied to real energy demand time series.",
                problem:
                    "The goal was to evaluate which approaches offer the best predictive performance under time-based validation.",
                dataUsed:
                    "Historical energy demand series. [PLACEHOLDER: confirm the exact dataset source and time range.]",
                technologies: ["Python", "pandas", "statsmodels", "XGBoost", "Optuna"],
                features: [
                    "Side-by-side comparison of statistical and machine learning models.",
                    "Time-based validation to prevent leakage between training and test data.",
                    "Interactive visualization of forecasts versus actual values.",
                ],
                process: [
                    "Cleaning and exploratory analysis of the series.",
                    "Construction of time-based features and lags.",
                    "Training of SARIMA and XGBoost.",
                    "Evaluation with time-based validation.",
                ],
                results: [
                    "Competitive average MAPE on validation.",
                    "Clear comparison between classical and ML approaches.",
                    "Identification of strengths and weaknesses of each model.",
                ],
                limitations:
                    "[PLACEHOLDER: describe known real limitations, e.g. sample size or generalization to other series.]",
                learnings:
                    "[PLACEHOLDER: add concrete learnings from the project.]",
                conclusions:
                    "The project allowed a rigorous comparison of traditional and machine learning methods in forecasting.",
            },
        },
    },

    {
        id: 2,
        slug: "dashboard-financiero-powerbi",
        thumbnail: "dashboard",
        category: "bi",
        status: "completed",
        featured: false,
        year: "", // PLACEHOLDER
        architectureImage: "",
        links: {
            repositoryUrl: "",
            demoUrl: "",
            documentationUrl: "",
            articleUrl: "",
            dataSourceUrl: "",
        },
        metrics: [],
        es: {
            title: "Dashboard financiero en Power BI",
            description:
                "Solución de BI para análisis financiero y seguimiento de indicadores clave.",
            tags: ["Power BI", "DAX", "SQL", "Modelado"],
            content: {
                overview:
                    "Desarrollo de tablero financiero orientado a seguimiento y análisis de métricas clave.",
                problem:
                    "La organización requería una vista consolidada y confiable para decisiones financieras.",
                technologies: ["Power BI", "DAX", "SQL", "Power Query"],
                features: [
                    "Modelo semántico centralizado con medidas DAX reutilizables.",
                    "Filtros dinámicos por período, área y línea de negocio.",
                    "Alertas visuales ante desviaciones en los indicadores clave.",
                ],
                process: [
                    "Modelado de datos.",
                    "Construcción de medidas DAX.",
                    "Diseño de visualizaciones.",
                    "Optimización del rendimiento.",
                ],
                results: [
                    "Reducción del tiempo de análisis.",
                    "Mejor trazabilidad de indicadores.",
                    "Mayor claridad en la lectura financiera.",
                ],
                conclusions:
                    "El proyecto fortaleció la toma de decisiones mediante una capa analítica más robusta.",
            },
        },
        en: {
            title: "Financial dashboard in Power BI",
            description:
                "BI solution for financial analysis and key indicator tracking.",
            tags: ["Power BI", "DAX", "SQL", "Modeling"],
            content: {
                overview:
                    "Development of a financial dashboard focused on tracking and analyzing key metrics.",
                problem:
                    "The organization needed a consolidated, reliable view to support financial decisions.",
                technologies: ["Power BI", "DAX", "SQL", "Power Query"],
                features: [
                    "Centralized semantic model with reusable DAX measures.",
                    "Dynamic filters by period, area, and business line.",
                    "Visual alerts for deviations in key indicators.",
                ],
                process: [
                    "Data modeling.",
                    "Building DAX measures.",
                    "Visualization design.",
                    "Performance optimization.",
                ],
                results: [
                    "Reduced analysis time.",
                    "Better indicator traceability.",
                    "Greater clarity in financial reporting.",
                ],
                conclusions:
                    "The project strengthened decision-making through a more robust analytical layer.",
            },
        },
    },

    {
        id: 3,
        slug: "pipeline-datos-azure",
        thumbnail: "pipeline",
        category: "dataEngineering",
        status: "completed",
        featured: false,
        year: "", // PLACEHOLDER
        architectureImage: "",
        links: {
            repositoryUrl: "",
            demoUrl: "",
            documentationUrl: "",
            articleUrl: "",
            dataSourceUrl: "",
        },
        metrics: [],
        es: {
            title: "Pipeline de datos en Azure",
            description:
                "Diseño e implementación de pipeline ETL usando Azure Data Factory y Data Lake.",
            tags: ["Azure", "ADF", "SQL", "Data Lake"],
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
                    "APIs",
                ],
                features: [
                    "Orquestación automática de la ingesta desde múltiples fuentes.",
                    "Transformación y limpieza de datos programada.",
                    "Almacenamiento escalable listo para analítica avanzada.",
                ],
                process: [
                    "Definición de arquitectura de datos en Azure.",
                    "Implementación de pipelines en Azure Data Factory.",
                    "Extracción de datos desde APIs y bases externas.",
                    "Transformación y limpieza de datos.",
                    "Almacenamiento en Data Lake.",
                ],
                results: [
                    "Automatización completa del flujo ETL.",
                    "Reducción de tiempos de procesamiento.",
                    "Mayor confiabilidad en los datos.",
                    "Escalabilidad para nuevas fuentes.",
                ],
                conclusions:
                    "El pipeline permitió estructurar una base sólida para analítica avanzada y facilitar la integración de nuevas fuentes de datos.",
            },
        },
        en: {
            title: "Data pipeline on Azure",
            description:
                "Design and implementation of an ETL pipeline using Azure Data Factory and Data Lake.",
            tags: ["Azure", "ADF", "SQL", "Data Lake"],
            content: {
                overview:
                    "Design and implementation of an Azure data pipeline focused on the ingestion, transformation, and efficient storage of data for later analysis.",
                problem:
                    "A scalable solution was needed to integrate multiple data sources, automate ETL processes, and ensure data consistency.",
                technologies: [
                    "Azure Data Factory",
                    "Azure Data Lake",
                    "SQL",
                    "Python",
                    "APIs",
                ],
                features: [
                    "Automated orchestration of ingestion from multiple sources.",
                    "Scheduled data transformation and cleaning.",
                    "Scalable storage ready for advanced analytics.",
                ],
                process: [
                    "Definition of the data architecture on Azure.",
                    "Implementation of pipelines in Azure Data Factory.",
                    "Data extraction from APIs and external databases.",
                    "Data transformation and cleaning.",
                    "Storage in Data Lake.",
                ],
                results: [
                    "Fully automated ETL flow.",
                    "Reduced processing times.",
                    "Greater data reliability.",
                    "Scalability for new sources.",
                ],
                conclusions:
                    "The pipeline provided a solid foundation for advanced analytics and made it easier to integrate new data sources.",
            },
        },
    },

    {
        id: 4,
        slug: "pipeline-datos-energia-alemania",
        thumbnail: "medallion",
        category: "dataEngineering",
        status: "inProgress",
        featured: false,
        year: "",
        architectureImage: "", // PLACEHOLDER: agregar diagrama bronze/silver/gold cuando exista
        links: {
            repositoryUrl: "",
            demoUrl: "",
            documentationUrl: "",
            articleUrl: "",
            dataSourceUrl: "https://www.smard.de/",
        },
        metrics: [],
        es: {
            title: "Pipeline de datos energéticos de Alemania (SMARD)",
            description:
                "Ingesta y procesamiento de datos energéticos alemanes con arquitectura bronze/silver/gold. Proyecto en desarrollo.",
            tags: ["Python", "PySpark", "Databricks", "Microsoft Fabric", "Delta Lake"],
            content: {
                overview:
                    "Pipeline de ingeniería de datos orientado a consumir datos energéticos públicos de Alemania (SMARD / Bundesnetzagentur) y estructurarlos siguiendo una arquitectura por capas (bronze, silver, gold) para análisis posterior.",
                problem:
                    "Se busca contar con un flujo reproducible que extraiga datos energéticos desde la API/endpoint de SMARD, los almacene de forma confiable y los deje listos para analítica, evitando procesos manuales.",
                dataUsed:
                    "Datos públicos de energía de Alemania publicados por SMARD / Bundesnetzagentur, vía su API o endpoint de consulta.",
                technologies: ["Python", "PySpark", "Databricks", "Microsoft Fabric", "Delta Lake", "SQL"],
                features: [
                    "Extracción programada desde el endpoint de SMARD / Bundesnetzagentur.",
                    "Almacenamiento de datos crudos previo a cualquier transformación.",
                    "Transformaciones con Python/PySpark organizadas en capas bronze, silver y gold.",
                    "Tablas Delta como formato de almacenamiento intermedio y final.",
                ],
                process: [
                    "Definición del endpoint y esquema de consulta de la API de SMARD.",
                    "Diseño de la arquitectura de capas (bronze, silver, gold) en Databricks / Microsoft Fabric.",
                    "Implementación de transformaciones con PySpark.",
                    "Definición de estrategia de orquestación y control de calidad de datos.",
                ],
                results: [],
                limitations:
                    "Proyecto en desarrollo: todavía no hay resultados ni métricas finales que reportar.",
                learnings:
                    "[PLACEHOLDER: agregar aprendizajes concretos a medida que avance el proyecto.]",
                conclusions: "",
            },
        },
        en: {
            title: "Germany energy data pipeline (SMARD)",
            description:
                "Ingestion and processing of German energy data with a bronze/silver/gold architecture. Project in progress.",
            tags: ["Python", "PySpark", "Databricks", "Microsoft Fabric", "Delta Lake"],
            content: {
                overview:
                    "Data engineering pipeline focused on consuming Germany's public energy data (SMARD / Bundesnetzagentur) and structuring it using a layered (bronze, silver, gold) architecture for later analysis.",
                problem:
                    "The goal is to have a reproducible flow that extracts energy data from the SMARD API/endpoint, stores it reliably, and prepares it for analytics, avoiding manual processes.",
                dataUsed:
                    "Public German energy data published by SMARD / Bundesnetzagentur, via its API or query endpoint.",
                technologies: ["Python", "PySpark", "Databricks", "Microsoft Fabric", "Delta Lake", "SQL"],
                features: [
                    "Scheduled extraction from the SMARD / Bundesnetzagentur endpoint.",
                    "Raw data storage prior to any transformation.",
                    "Python/PySpark transformations organized into bronze, silver, and gold layers.",
                    "Delta tables as the intermediate and final storage format.",
                ],
                process: [
                    "Definition of the SMARD API endpoint and query schema.",
                    "Design of the layered architecture (bronze, silver, gold) in Databricks / Microsoft Fabric.",
                    "Implementation of transformations with PySpark.",
                    "Definition of orchestration strategy and data quality checks.",
                ],
                results: [],
                limitations:
                    "Project in progress: there are no final results or metrics to report yet.",
                learnings:
                    "[PLACEHOLDER: add concrete learnings as the project progresses.]",
                conclusions: "",
            },
        },
    },
];
