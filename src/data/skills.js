// Habilidades agrupadas por contexto de uso, no por nivel/porcentaje
// (no hay forma objetiva de verificar un "90%" de dominio).
//
// - "professional": confirmado directamente por el propietario del sitio.
// - "projects": tecnologías que ya aparecen en src/data/projects.js, salvo
//   las que ya están en "professional" (cada tecnología aparece en un solo
//   grupo, para no duplicar el mismo badge en dos columnas).
// - "complementary": áreas de interés mencionadas por el propietario del
//   sitio que todavía no están respaldadas por un rol o proyecto concreto
//   en este portafolio. Revisar y ajustar esta clasificación si no refleja
//   la realidad — ver CONTENT_TODO.md.
//
// Los nombres de herramientas (Python, SQL, Power BI...) son nombres
// propios y no se traducen, igual que las tecnologías de data/projects.js.
export const skillGroups = {
    professional: [
        "Power BI",
        "SQL",
        "Power BI Report Builder",
        "Microsoft Fabric",
        "Databricks",
        "PySpark",
        "DAX",
    ],
    projects: [
        "Python",
        "Azure",
        "Azure Data Factory",
        "pandas",
        "XGBoost",
        "Delta Lake",
        "Matplotlib",
        "TensorFlow",
        "Optuna",
        "Keras",
    ],
    complementary: [
        { es: "Machine Learning", en: "Machine Learning" },
        { es: "Ciencia de Datos", en: "Data Science" },
        { es: "Ingeniería de Datos", en: "Data Engineering" },
        { es: "Series de Tiempo", en: "Time Series" },
        { es: "Visualización de Datos", en: "Data Visualization" },
    ],
};
