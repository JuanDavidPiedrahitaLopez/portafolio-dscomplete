/**
 * Gradiente de fondo compartido por las secciones de la página principal
 * (excepto Hero, que tiene su propia imagen de fondo). Requiere que la
 * sección padre tenga `relative overflow-hidden` y que su contenido esté
 * envuelto en un elemento con `relative z-10` para quedar por encima.
 */
export default function SectionGlow() {
    return (
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 right-0 w-[520px] h-[520px] bg-blue-900/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-teal-900/10 rounded-full blur-3xl" />
        </div>
    );
}
