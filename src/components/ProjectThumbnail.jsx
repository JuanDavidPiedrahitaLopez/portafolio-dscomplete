const THEMES = {
    forecast: { from: "#0d2848", to: "#0a0f1a", accent: "#60a5fa", accent2: "#2dd4bf" },
    dashboard: { from: "#1b1338", to: "#0a0f1a", accent: "#a78bfa", accent2: "#60a5fa" },
    pipeline: { from: "#0a2a2e", to: "#0a0f1a", accent: "#2dd4bf", accent2: "#60a5fa" },
    medallion: { from: "#12203f", to: "#0a0f1a", accent: "#60a5fa", accent2: "#F2C94C" },
};

// El contenido relevante de cada ilustración se mantiene dentro de la franja
// central x:[350,850] para sobrevivir al recorte de "slice" en contenedores
// angostos (cards), y dentro de y:[0,260] para no recortarse nunca en alto.
function ForecastArt({ id, accent, accent2 }) {
    return (
        <>
            <defs>
                <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor={accent2} stopOpacity="0.9" />
                    <stop offset="100%" stopColor={accent} stopOpacity="0.9" />
                </linearGradient>
            </defs>
            {[70, 140, 210].map((y, i) => (
                <line key={i} x1="120" y1={y} x2="1080" y2={y} stroke="#1a2235" strokeWidth="1" />
            ))}
            <path
                d="M350,210 C420,185 460,225 516,150 C570,105 610,135 683,90 C730,55 780,70 850,50"
                fill="none" stroke={`url(#${id})`} strokeWidth="4"
            />
            <path
                d="M850,50 C880,40 910,55 950,35"
                fill="none" stroke={accent2} strokeWidth="3" strokeDasharray="6,6" opacity="0.7"
            />
            {[[350, 210], [516, 150], [683, 90], [850, 50]].map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="7" fill="#0a0f1a" stroke={accent} strokeWidth="3" />
            ))}
        </>
    );
}

function DashboardArt({ accent, accent2 }) {
    const bars = [
        { x: 360, h: 70 }, { x: 420, h: 130 }, { x: 480, h: 95 }, { x: 540, h: 170 }, { x: 600, h: 110 },
    ];
    return (
        <>
            <line x1="340" y1="220" x2="700" y2="220" stroke="#1a2235" strokeWidth="1" />
            {bars.map((b, i) => (
                <rect
                    key={i} x={b.x} y={220 - b.h} width="44" height={b.h} rx="6"
                    fill={i % 2 === 0 ? accent : accent2} opacity="0.85"
                />
            ))}
            <circle cx="770" cy="110" r="48" fill="none" stroke="#1a2235" strokeWidth="18" />
            <circle
                cx="770" cy="110" r="48" fill="none" stroke={accent} strokeWidth="18"
                strokeDasharray="195 302" strokeLinecap="round" transform="rotate(-90 770 110)"
            />
        </>
    );
}

function PipelineArt({ accent, accent2 }) {
    const nodes = [[370, 140], [470, 80], [570, 200], [670, 100], [790, 140], [470, 210], [570, 90], [670, 190]];
    return (
        <>
            <path d="M370,140 L470,80 L570,200 L670,100 L790,140" fill="none" stroke={accent} strokeWidth="2" strokeOpacity="0.5" />
            <path d="M370,140 L470,210 L570,90 L670,190 L790,140" fill="none" stroke={accent2} strokeWidth="2" strokeOpacity="0.5" />
            {nodes.map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 9 : 6} fill="#0a0f1a" stroke={i % 2 === 0 ? accent : accent2} strokeWidth="3" />
            ))}
        </>
    );
}

function MedallionArt({ accent, accent2 }) {
    // Arquitectura por capas (bronze / silver / gold), representada de forma abstracta.
    const bands = [
        { y: 50, color: "#b08d57" },
        { y: 125, color: "#9ca3af" },
        { y: 200, color: accent2 },
    ];
    return (
        <>
            {bands.map((b, i) => (
                <rect key={i} x="380" y={b.y} width="440" height="34" rx="8" fill={b.color} opacity="0.88" />
            ))}
            {[0, 1].map((i) => (
                <path
                    key={i}
                    d={`M595,${84 + i * 75} L605,${99 + i * 75} L615,${84 + i * 75}`}
                    fill="none" stroke={accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                />
            ))}
            {[67, 142, 217].map((cy, i) => (
                <circle key={i} cx="760" cy={cy} r="6" fill="#0a0f1a" stroke={accent} strokeWidth="2" />
            ))}
        </>
    );
}

const ART = { forecast: ForecastArt, dashboard: DashboardArt, pipeline: PipelineArt, medallion: MedallionArt };

export default function ProjectThumbnail({ variant = "forecast", className = "" }) {
    const theme = THEMES[variant] ?? THEMES.forecast;
    const Art = ART[variant] ?? ForecastArt;
    const gradId = `thumb-line-${variant}`;

    return (
        <div
            className={`relative h-full w-full overflow-hidden ${className}`}
            style={{ background: `linear-gradient(160deg, ${theme.from} 0%, ${theme.to} 100%)` }}
        >
            <svg viewBox="0 0 1200 260" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                <Art id={gradId} accent={theme.accent} accent2={theme.accent2} />
            </svg>
        </div>
    );
}
