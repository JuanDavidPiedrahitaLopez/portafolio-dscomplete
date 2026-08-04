import { Inbox } from "lucide-react";

/**
 * Mensaje discreto para listas sin resultados (ej. un filtro sin
 * coincidencias), en vez de dejar la sección en blanco.
 */
export default function EmptyState({ message }) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-[#1a2235] bg-[#080c14] py-16 px-6 text-center">
            <Inbox size={28} className="text-gray-600" strokeWidth={1.5} aria-hidden="true" />
            <p className="text-gray-400 text-sm max-w-[360px]">{message}</p>
        </div>
    );
}
