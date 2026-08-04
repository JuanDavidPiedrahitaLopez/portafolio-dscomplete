// Configuración central del sitio. Evita repetir esta información
// manualmente en Hero, Contacto, Footer y metadatos.
//
// PLACEHOLDER: los campos marcados abajo no fueron provistos y deben
// confirmarse antes de publicar el sitio. Ver CONTENT_TODO.md.
export const siteConfig = {
    name: "Juan David Piedrahita López",
    professionalTitle: "Analista de datos y BI con formación matemática",
    description:
        "Desarrollo soluciones de analítica, inteligencia de negocios y modelación predictiva, desde la preparación de los datos hasta la construcción de reportes y modelos.",
    location: "El Carmen de Viboral, Antioquia, Colombia",
    email: "juandalopez117@gmail.com",
    github: "", // PLACEHOLDER: falta URL real de GitHub
    linkedin: "https://www.linkedin.com/in/juan-david-piedrahita-lópez/",
    // PLACEHOLDER: ambos son archivos de marcador de posición, uno por
    // idioma — ver public/cv/README.md.
    cvPath: {
        es: "/cv/juan-david-piedrahita-lopez-cv.pdf",
        en: "/cv/juan-david-piedrahita-lopez-cv-en.pdf",
    },
    siteUrl: "https://portfoliods-juandavlopez.vercel.app",
};

// Enlaces sociales reutilizados en Hero, Contacto y Footer.
export const socialLinks = {
    github: siteConfig.github,
    linkedin: siteConfig.linkedin,
    email: `mailto:${siteConfig.email}`,
    cv: siteConfig.cvPath.es,
};
