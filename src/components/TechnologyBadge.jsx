import { getTechnology } from "@/config/technologyMap";

/**
 * Ícono + nombre de una tecnología, resuelto desde el mapa central
 * (src/config/technologyMap.js) para no repetir imports/lookup en cada
 * tarjeta que lista tecnologías.
 */
export default function TechnologyBadge({ name, size = "sm" }) {
    const { label, icon: Icon } = getTechnology(name);
    const isSmall = size === "sm";

    return (
        <span
            title={label}
            className={`inline-flex items-center rounded-md border border-[#1e2d45] bg-[#111827] text-[#d1d5db] ${isSmall ? "gap-1.5 px-2.5 py-1 text-xs" : "gap-2 px-3 py-1.5 text-sm"
                }`}
        >
            <Icon size={isSmall ? 13 : 15} strokeWidth={1.8} className="text-[#8b95a7] shrink-0" aria-hidden="true" />
            {label}
        </span>
    );
}
