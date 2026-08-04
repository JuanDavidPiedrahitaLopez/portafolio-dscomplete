export const projects = [
    {
        id: 1,
        slug: "forecasting-demanda-energetica",
        image: "",
        thumbnail: "forecast",
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
                conclusions:
                    "The project allowed a rigorous comparison of traditional and machine learning methods in forecasting.",
            },
        },
    },

    {
        id: 2,
        slug: "dashboard-financiero-powerbi",
        image: "",
        thumbnail: "dashboard",
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
        image: "",
        thumbnail: "pipeline",
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
];
