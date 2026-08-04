import TechnologyBadge from "@/components/TechnologyBadge";

function getLocalized(value, lang) {
    return typeof value === "string" ? value : value[lang];
}

function formatPeriod(experience, lang) {
    const start = getLocalized(experience.startDate, lang);
    const end = getLocalized(experience.endDate, lang);
    return end ? `${start} – ${end}` : start;
}

function Achievements({ items }) {
    if (!items?.length) return null;
    return (
        <ul style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {items.map((item, i) => (
                <li
                    key={i}
                    className="flex items-start gap-1.5"
                    style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.65" }}
                >
                    <span style={{ color: "#2dd4bf", marginTop: "1px", flexShrink: 0 }}>·</span>
                    {item}
                </li>
            ))}
        </ul>
    );
}

/**
 * Contenido de una experiencia laboral (rol, período, empresa/ubicación
 * cuando existan, logros y tecnologías). Se usa tanto en la grilla de
 * escritorio como en la línea de tiempo móvil de ExperienceSession.
 */
export default function ExperienceItem({ experience, lang, headingClassName = "" }) {
    const role = getLocalized(experience.role, lang);
    const achievements = getLocalized(experience.achievements, lang);
    const meta = [experience.company, experience.location].filter(Boolean).join(" · ");

    return (
        <>
            <span style={{ fontSize: "12px", color: "#6b7280" }}>{formatPeriod(experience, lang)}</span>
            <h3
                className={`text-white font-bold leading-snug ${headingClassName}`}
                style={{ fontSize: "15px" }}
            >
                {role}
            </h3>
            {meta && (
                <p style={{ fontSize: "12px", color: "#6b7280" }}>{meta}</p>
            )}
            <Achievements items={achievements} />
            {experience.technologies?.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-1">
                    {experience.technologies.map((tech, i) => (
                        <TechnologyBadge key={i} name={tech} />
                    ))}
                </div>
            )}
        </>
    );
}
