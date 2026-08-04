function getLocalized(value, lang) {
    return typeof value === "string" ? value : value?.[lang];
}

function formatPeriod(education, lang) {
    const start = getLocalized(education.startDate, lang);
    const end = getLocalized(education.endDate, lang);
    if (!start && !end) return null;
    return end ? `${start} – ${end}` : start;
}

function Details({ items }) {
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
 * Contenido de una entrada de educación (título, período, institución/
 * ubicación cuando existan, y detalles). Usado por la sección Educación.
 */
export default function EducationItem({ education, lang, headingClassName = "" }) {
    const degree = getLocalized(education.degree, lang);
    const details = getLocalized(education.details, lang);
    const period = formatPeriod(education, lang);
    const meta = [education.institution, education.location].filter(Boolean).join(" · ");

    return (
        <>
            {period && <span style={{ fontSize: "12px", color: "#6b7280" }}>{period}</span>}
            <h3
                className={`text-white font-bold leading-snug ${headingClassName}`}
                style={{ fontSize: "15px" }}
            >
                {degree}
            </h3>
            {meta && <p style={{ fontSize: "12px", color: "#6b7280" }}>{meta}</p>}
            <Details items={details} />
        </>
    );
}
