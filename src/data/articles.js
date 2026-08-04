export const articles = [
    {
        id: 1,
        slug: "sarima-vs-redes-neuronales-series-cortas",
        date: "2024",
        es: {
            title: "SARIMA vs. redes neuronales en series de tiempo cortas",
            excerpt:
                "Comparación empírica de modelos clásicos y de deep learning cuando el histórico disponible es limitado.",
            tags: ["Series de Tiempo", "SARIMA", "Deep Learning"],
            content: {
                abstract:
                    "Este artículo analiza el desempeño relativo de modelos SARIMA frente a redes neuronales recurrentes cuando se dispone de históricos cortos, un escenario común en contextos empresariales reales. Se evalúan distintos horizontes de pronóstico y niveles de ruido en los datos.",
                keyPoints: [
                    "Con menos de 100 observaciones, SARIMA suele superar a las redes neuronales en error de pronóstico.",
                    "Las redes neuronales mejoran su desempeño relativo a medida que crece el histórico disponible.",
                    "La combinación de ambos enfoques (ensamble) reduce la varianza del error en la mayoría de los casos evaluados.",
                ],
                topics: ["Python", "statsmodels", "Keras", "pandas"],
            },
        },
        en: {
            title: "SARIMA vs. neural networks on short time series",
            excerpt:
                "An empirical comparison of classical and deep learning models when the available history is limited.",
            tags: ["Time Series", "SARIMA", "Deep Learning"],
            content: {
                abstract:
                    "This article analyzes the relative performance of SARIMA models versus recurrent neural networks when only short historical data is available, a common scenario in real business contexts. Different forecast horizons and noise levels are evaluated.",
                keyPoints: [
                    "With fewer than 100 observations, SARIMA tends to outperform neural networks in forecast error.",
                    "Neural networks improve their relative performance as the available history grows.",
                    "Combining both approaches (ensemble) reduces error variance in most evaluated cases.",
                ],
                topics: ["Python", "statsmodels", "Keras", "pandas"],
            },
        },
    },
    {
        id: 2,
        slug: "optimizacion-bayesiana-hiperparametros-forecasting",
        date: "2024",
        es: {
            title: "Optimización bayesiana para modelos de forecasting",
            excerpt:
                "Cómo la búsqueda bayesiana de hiperparámetros reduce el tiempo de ajuste sin sacrificar precisión.",
            tags: ["Optimización", "XGBoost", "Optuna"],
            content: {
                abstract:
                    "Se compara la búsqueda bayesiana de hiperparámetros frente a grid search y random search en modelos de gradient boosting aplicados a forecasting, midiendo tanto la precisión final como el costo computacional del proceso de ajuste.",
                keyPoints: [
                    "La búsqueda bayesiana alcanza métricas equivalentes a grid search con una fracción del número de iteraciones.",
                    "El beneficio es más notorio cuando el espacio de hiperparámetros es amplio.",
                    "La ganancia en precisión frente a random search es modesta pero consistente entre datasets.",
                ],
                topics: ["Python", "Optuna", "XGBoost", "scikit-learn"],
            },
        },
        en: {
            title: "Bayesian optimization for forecasting models",
            excerpt:
                "How Bayesian hyperparameter search cuts tuning time without sacrificing accuracy.",
            tags: ["Optimization", "XGBoost", "Optuna"],
            content: {
                abstract:
                    "This article compares Bayesian hyperparameter search against grid search and random search on gradient boosting models applied to forecasting, measuring both final accuracy and the computational cost of the tuning process.",
                keyPoints: [
                    "Bayesian search reaches metrics equivalent to grid search with a fraction of the iterations.",
                    "The benefit is more noticeable when the hyperparameter space is large.",
                    "The accuracy gain over random search is modest but consistent across datasets.",
                ],
                topics: ["Python", "Optuna", "XGBoost", "scikit-learn"],
            },
        },
    },
    {
        id: 3,
        slug: "modelado-semantico-eficiente-powerbi",
        date: "2023",
        es: {
            title: "Modelado semántico eficiente en Power BI",
            excerpt:
                "Buenas prácticas para mantener el rendimiento de un modelo tabular al crecer el volumen de datos.",
            tags: ["Power BI", "DAX", "Modelado"],
            content: {
                abstract:
                    "Un repaso práctico de las decisiones de modelado semántico que más impactan el rendimiento de reportes en Power BI: esquema estrella, granularidad de tablas de hechos, uso de medidas frente a columnas calculadas y estrategias de agregación previa.",
                keyPoints: [
                    "El esquema estrella reduce significativamente los tiempos de cálculo frente a modelos altamente normalizados.",
                    "Preferir medidas DAX sobre columnas calculadas cuando el cálculo depende del contexto de filtro.",
                    "Las tablas de agregación previa pueden reducir tiempos de consulta en datasets de gran volumen.",
                ],
                topics: ["Power BI", "DAX", "Power Query", "SQL"],
            },
        },
        en: {
            title: "Efficient semantic modeling in Power BI",
            excerpt:
                "Best practices to keep a tabular model performant as data volume grows.",
            tags: ["Power BI", "DAX", "Modeling"],
            content: {
                abstract:
                    "A practical review of the semantic modeling decisions that most impact Power BI report performance: star schema, fact table granularity, measures versus calculated columns, and pre-aggregation strategies.",
                keyPoints: [
                    "Star schema significantly reduces calculation times compared to highly normalized models.",
                    "Prefer DAX measures over calculated columns when the calculation depends on filter context.",
                    "Pre-aggregated tables can reduce query times on large-volume datasets.",
                ],
                topics: ["Power BI", "DAX", "Power Query", "SQL"],
            },
        },
    },
];
