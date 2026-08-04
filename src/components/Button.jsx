import Link from "next/link";

const VARIANTS = {
    primary:
        "bg-blue-600 hover:bg-blue-500 text-white",
    secondary:
        "border border-gray-600 hover:border-blue-500 hover:bg-[#0f1623] text-gray-300 hover:text-white",
};

const BASE =
    "inline-flex items-center justify-center gap-2 px-6 h-[44px] rounded-md text-sm font-medium " +
    "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06080d] " +
    "disabled:opacity-50 disabled:cursor-not-allowed";

/**
 * Botón compartido por Hero, Contacto y CTAs de proyectos.
 * Renderiza <Link>, <a> o <button> según las props recibidas, conservando
 * el mismo estilo visual (azul sólido / contorno) usado en todo el sitio.
 */
export default function Button({
    as,
    href,
    variant = "primary",
    className = "",
    children,
    ...props
}) {
    const classes = `${BASE} ${VARIANTS[variant] ?? VARIANTS.primary} ${className}`;

    if (href && (as === "a" || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#") || props.download)) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    if (href) {
        return (
            <Link href={href} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
