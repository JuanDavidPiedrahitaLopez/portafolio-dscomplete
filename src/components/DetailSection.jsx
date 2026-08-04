export function SectionHeader({ Icon, title }) {
    return (
        <div className="flex items-center gap-3 mb-6">
            <div className="flex w-11 h-11 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#1e3a4a] bg-[#0d2231]">
                <Icon size={18} color="#2dd4bf" strokeWidth={1.8} />
            </div>
            <span className="h-px w-8 bg-[#2dd4bf66]" />
            <h2 className="text-white font-bold text-lg">{title}</h2>
        </div>
    );
}

export function BulletList({ items }) {
    return (
        <ul className="flex flex-col gap-3">
            {items.map((item, i) => (
                <li
                    key={i}
                    className="flex items-start gap-3"
                    style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.7" }}
                >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2dd4bf]" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}
