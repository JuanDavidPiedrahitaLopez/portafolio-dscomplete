import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ExternalLink, Target, Database, Settings, BarChart3, Network, Box, BrainCircuit } from "lucide-react";
import Link from "next/link";


export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}
// Gráfico simulado SVG inline
function ForecastChart() {
    const w = 800, h = 220;
    const pad = { top: 20, right: 120, bottom: 30, left: 40 };
    const pts = 30;

    const seed = (n) => ((Math.sin(n * 9301 + 49297) * 233280) % 1 + 1) / 2;

    const base = Array.from({ length: pts }, (_, i) => 240 + i * 1.8 + seed(i) * 20);

    const series = [
        { label: "Real", color: "#60a5fa", dash: "", dots: true, data: base.map((v, i) => v + seed(i * 3) * 12) },
        { label: "SARIMA", color: "#a78bfa", dash: "", dots: false, data: base.map((v, i) => v - 8 + seed(i * 7) * 15) },
        { label: "XGBoost", color: "#2dd4bf", dash: "", dots: false, data: base.map((v, i) => v - 30 + seed(i * 11) * 10) },
        { label: "Pred Neuronal", color: "#f87171", dash: "4,3", dots: false, data: base.map((v, i) => v - 5 + seed(i * 13) * 14) },
    ];

    const allVals = series.flatMap(s => s.data);
    const minV = Math.min(...allVals) - 10;
    const maxV = Math.max(...allVals) + 10;
    const chartW = w - pad.left - pad.right;
    const chartH = h - pad.top - pad.bottom;

    const x = (i) => pad.left + (i / (pts - 1)) * chartW;
    const y = (v) => pad.top + chartH - ((v - minV) / (maxV - minV)) * chartH;

    const toPath = (data) =>
        data.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");

    return (
        <div className="w-full rounded-xl border border-[#1a2235] overflow-hidden" style={{ background: "#0b1525" }}>
            <svg viewBox={`0 0 ${w} ${h}`} className="w-full" style={{ height: "260px" }}>
                {/* grid lines */}
                {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
                    <line key={i}
                        x1={pad.left} y1={pad.top + t * chartH}
                        x2={pad.left + chartW} y2={pad.top + t * chartH}
                        stroke="#1e2d45" strokeWidth="1"
                    />
                ))}
                {/* y labels */}
                {[0, 0.25, 0.5, 0.75, 1].map((t, i) => (
                    <text key={i} x={pad.left - 6} y={pad.top + t * chartH + 4}
                        fill="#4b5563" fontSize="9" textAnchor="end">
                        {Math.round(maxV - t * (maxV - minV))}
                    </text>
                ))}
                {/* x labels */}
                {[0, 10, 20, pts - 1].map((i) => (
                    <text key={i} x={x(i)} y={h - 8}
                        fill="#4b5563" fontSize="9" textAnchor="middle">
                        {i === 0 ? "0" : i === pts - 1 ? "100" : i * (100 / (pts - 1)) | 0}
                    </text>
                ))}
                {/* series */}
                {series.map((s) => (
                    <g key={s.label}>
                        <path d={toPath(s.data)} fill="none" stroke={s.color}
                            strokeWidth="1.8" strokeDasharray={s.dash} opacity="0.9" />
                        {s.dots && s.data.map((v, i) => (
                            <circle key={i} cx={x(i)} cy={y(v)} r="2.5"
                                fill="#0b1525" stroke={s.color} strokeWidth="1.5" />
                        ))}
                    </g>
                ))}
                {/* leyenda */}
                {series.map((s, i) => (
                    <g key={s.label} transform={`translate(${w - pad.right + 12}, ${pad.top + i * 22})`}>
                        <line x1="0" y1="6" x2="18" y2="6"
                            stroke={s.color} strokeWidth="2" strokeDasharray={s.dash} />
                        <text x="22" y="10" fill="#d1d5db" fontSize="10">{s.label}</text>
                    </g>
                ))}
            </svg>
        </div>
    );
}

export default async function ProjectDetailPage({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    const sections = [
        {
            num: "1.",
            title: "Objetivo",
            text: project.content.overview,
            Icon: Target,
            iconColor: "#60a5fa",
            iconBg: "#0d1a35",
        },
        {
            num: "2.",
            title: "Datos",
            text: project.content.problem,
            Icon: Database,
            iconColor: "#818cf8",
            iconBg: "#120d35",
        },
        {
            num: "3.",
            title: "Metodología",
            text: project.content.process,
            Icon: Settings,
            iconColor: "#60a5fa",
            iconBg: "#0d1a35",
            list: true,
        },
    ];

    const models = [
        { name: "SARIMA", sub: "Modelos\nARIMA", Icon: BarChart3, iconColor: "#60a5fa" },
        { name: "XGBoost", sub: "Gradient Boosting\nMachine", Icon: Box, iconColor: "#60a5fa" },
        { name: "Red Neuronal", sub: "Perceptrón\nMulticapa", Icon: Network, iconColor: "#60a5fa" },
        { name: "NeuralProphet", sub: "Perceptrón\nMulticapa", Icon: BrainCircuit, iconColor: "#60a5fa" },
    ];

    const metrics = [
        { label: "MAPE", value: "3.42%" },
        { label: "MAE", value: "128.7" },
        { label: "RMSE", value: "95.3" },
        { label: "SMAPE", value: "3.78%" },
    ];

    return (
        <section className="min-h-screen text-white" style={{ background: "#06080d" }}>
            <div style={{ width: "min(92%, 1100px)", margin: "0 auto", paddingTop: "1vh", paddingBottom: "80px" }}>

                {/* ── BOTÓN VOLVER ── */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 mb-8 transition-all hover:gap-3"
                    style={{ color: "#4aa3ff", fontSize: "14px", fontWeight: 500 }}
                >
                    <span>←</span> Volver
                </Link>

                {/* ── HERO CARD ── */}
                <div
                    className="rounded-2xl border border-[#1a2235] mb-10 mt-10"
                    style={{ background: "linear-gradient(180deg,#0b1220 0%,#070c16 100%)", padding: "32px", marginTop: "2vh", display: "flex", flexDirection: "column", gap: "1vh" }}
                >
                    {/* fila superior: etiqueta + icono externo */}
                    <div className="flex items-start justify-between mb-3">
                        <p style={{ color: "#4aa3ff", fontSize: "11px", letterSpacing: "0.12em", fontWeight: 600 }}>
                            FORECASTING
                        </p>
                        <ExternalLink size={18} color="#4b5563" />
                    </div>

                    {/* título */}
                    <h1 className="font-bold leading-tight mb-3"
                        style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
                        {project.title}
                    </h1>

                    {/* descripción */}
                    <p className="mb-5" style={{ color: "#9ca3af", maxWidth: "640px", fontSize: "15px", lineHeight: "1.6" }}>
                        {project.description}
                    </p>

                    {/* tags */}
                    <div className="flex flex-wrap gap-2 mb-7">
                        {project.tags.map((tag, i) => (
                            <span key={i}
                                className="border border-[#1e2d45] bg-[#111827] text-[#d1d5db]"
                                style={{ padding: "5px 12px", fontSize: "12px", borderRadius: "6px" }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* gráfico */}
                    <ForecastChart />
                </div>

                {/* ── SECCIONES 1-3 ── */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {sections.map((s, i) => (
                        <div key={i}
                            className="flex justify-between items-start gap-6"
                            style={{
                                borderBottom: "1px solid #1a2235",
                                paddingTop: "44px",
                                paddingBottom: "44px",
                            }}
                        >
                            {/* texto */}
                            <div style={{ maxWidth: "660px" }}>
                                <h2 className="font-semibold text-white mb-2"
                                    style={{ fontSize: "18px" }}>
                                    {s.num} {s.title}
                                </h2>
                                {s.list ? (
                                    <ul style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "2" }}>
                                        {(Array.isArray(s.text) ? s.text : [s.text]).map((t, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                                <span style={{ color: "#4b5563", marginTop: "2px" }}>•</span>
                                                <span>{t}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.7" }}>
                                        {s.text}
                                    </p>
                                )}
                            </div>

                            {/* icono */}
                            <div className="flex-shrink-0 flex items-center justify-center rounded-2xl border border-[#1a2235]"
                                style={{ width: "88px", height: "88px", background: s.iconBg }}>
                                <s.Icon size={36} color={s.iconColor} strokeWidth={1.4} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── 4. MODELOS ── */}
                <div style={{ paddingTop: "1vh", paddingBottom: "44px", borderBottom: "1px solid #1a2235", display: "flex", flexDirection: "column", gap: "20px" }}>
                    <h2 className="font-semibold text-white mb-12" style={{ fontSize: "18px" }}>
                        4. Modelos Evaluados
                    </h2>

                    {/* sm: 1 columna al 80% centrada | md: grid 3 columnas */}
                    <div className="flex flex-col items-center gap-4 md:grid md:grid-cols-3 md:items-stretch">
                        {models.map((m, i) => (
                            <div key={i}
                                className="w-4/5 md:w-full rounded-xl border border-[#1a2235] flex items-center gap-6"
                                style={{ background: "#0a0f1a", padding: "16px 20px" }}>
                                <m.Icon size={32} color={m.iconColor} strokeWidth={1.4} />
                                <div>
                                    <p className="text-white font-semibold" style={{ fontSize: "14px" }}>
                                        {m.name}
                                    </p>
                                    <p style={{ color: "#9ca3af", fontSize: "12px", lineHeight: "1.5", whiteSpace: "pre-line" }}>
                                        {m.sub}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 5. RESULTADOS ── */}
                <div style={{ paddingTop: "1vh", display: "flex", flexDirection: "column", gap: "1vh" }}>
                    <h2 className="font-semibold text-white mb-5" style={{ fontSize: "18px" }}>
                        5. Resultados
                    </h2>
                    <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(4,1fr)" }}>
                        {metrics.map((r, i) => (
                            <div key={i}
                                className="rounded-xl border border-[#1a2235] text-center"
                                style={{ background: "#0a0f1a", padding: "16px 12px" }}>
                                <p style={{ color: "#9ca3af", fontSize: "11px", marginBottom: "6px" }}>
                                    {r.label} (promedio)
                                </p>
                                <p className="text-white font-bold" style={{ fontSize: "22px" }}>
                                    {r.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}