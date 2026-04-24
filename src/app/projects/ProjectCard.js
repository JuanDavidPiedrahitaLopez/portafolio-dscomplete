import Link from "next/link";
export default function ProjectCard({ project }) {
    return (
        <article
            className="rounded-2xl border border-[#1a2235] bg-[#0a0f1a] transition hover:border-blue-500/40"
            style={{ width: "100%", maxWidth: "360px", padding: "16px" }}
        >
            {/* Imagen / placeholder — sin margen lateral, ocupa todo el ancho interno */}
            <div
                className="relative w-full overflow-hidden rounded-xl bg-[#0d1526]"
                style={{ height: "160px", marginBottom: "18px" }}
            >
                <div className="h-full w-full bg-[#0d1526]" />
            </div>

            {/* Contenido — sin padding lateral adicional, alineado al borde interno de la card */}
            <div>
                {/* Título */}
                <h3
                    className="font-bold leading-snug text-white"
                    style={{ fontSize: "17px", marginBottom: "6px" }}
                >
                    {project?.title ?? "Forecasting de demanda energética"}
                </h3>

                {/* Descripción */}
                <p
                    className="text-[#9ca3af]"
                    style={{ fontSize: "13.5px", lineHeight: "1.6", marginBottom: "16px" }}
                >
                    {project?.description ??
                        "Comparación de SARIMA, XGBoost y redes neuronales en series reales de energía."}
                </p>

                {/* Tags */}
                <div
                    className="flex flex-wrap"
                    style={{ gap: "8px", marginBottom: "14px" }}
                >
                    {(project?.tags ?? ["Python", "SARIMA", "XGBoost", "Time Series"]).map(
                        (tag, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center rounded-md border border-[#1e2d45] bg-[#111827] text-[#d1d5db]"
                                style={{ fontSize: "12px", fontWeight: 500, padding: "5px 12px" }}
                            >
                                {tag}
                            </span>
                        )
                    )}
                </div>

                {/* Link — azul cian eléctrico exacto de la imagen */}
                <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center transition-all"
                    style={{ fontSize: "14px", fontWeight: 500, color: "#4aa3ff", gap: "6px" }}
                >
                    Ver proyecto <span>→</span>
                </Link>
            </div>
        </article>
    );
}