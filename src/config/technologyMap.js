import {
    Code2,
    Database,
    BarChart3,
    Waypoints,
    Sparkles,
    Network,
    Table2,
    Braces,
    Blocks,
    Boxes,
    BrainCircuit,
    GitBranch,
    GitCommitHorizontal,
    FileCode,
    LineChart,
    Terminal,
    Layers,
    Cloud,
    FileText,
} from "lucide-react";

// lucide-react no incluye logos de marca (Python, Power BI, Databricks, etc.).
// Este mapa usa el ícono genérico más cercano de la librería ya instalada,
// en vez de agregar una segunda librería de íconos solo para esto.
export const technologyMap = {
    python: { label: "Python", icon: Code2 },
    sql: { label: "SQL", icon: Database },
    powerbi: { label: "Power BI", icon: BarChart3 },
    powerbireportbuilder: { label: "Power BI Report Builder", icon: FileText },
    microsoftfabric: { label: "Microsoft Fabric", icon: Waypoints },
    databricks: { label: "Databricks", icon: Sparkles },
    pyspark: { label: "PySpark", icon: Network },
    pandas: { label: "pandas", icon: Table2 },
    numpy: { label: "NumPy", icon: Braces },
    scikitlearn: { label: "scikit-learn", icon: Blocks },
    xgboost: { label: "XGBoost", icon: Boxes },
    tensorflow: { label: "TensorFlow", icon: BrainCircuit },
    pytorch: { label: "PyTorch", icon: BrainCircuit },
    keras: { label: "Keras", icon: BrainCircuit },
    matplotlib: { label: "Matplotlib", icon: LineChart },
    git: { label: "Git", icon: GitBranch },
    github: { label: "GitHub", icon: GitCommitHorizontal },
    javascript: { label: "JavaScript", icon: FileCode },
    nextjs: { label: "Next.js", icon: FileCode },
    plotly: { label: "Plotly", icon: LineChart },
    jupyter: { label: "Jupyter", icon: Terminal },
    deltalake: { label: "Delta Lake", icon: Layers },
    azure: { label: "Azure", icon: Cloud },
    dax: { label: "DAX", icon: BarChart3 },
    statsmodels: { label: "statsmodels", icon: LineChart },
    optuna: { label: "Optuna", icon: Boxes },
    azuredatafactory: { label: "Azure Data Factory", icon: Waypoints },
    azuredatalake: { label: "Azure Data Lake", icon: Layers },
};

const DEFAULT_ICON = Code2;

function slugify(name) {
    return name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .replace(/[^a-z0-9]/g, "");
}

// Busca una tecnología por nombre visible (ej. "Power BI", "Azure Data Factory").
// Si no hay entrada en el mapa, devuelve un ícono genérico coherente en vez
// de romper el layout o dejar la tarjeta sin ícono.
export function getTechnology(name) {
    const entry = technologyMap[slugify(name)];
    return { label: name, icon: entry?.icon ?? DEFAULT_ICON };
}
