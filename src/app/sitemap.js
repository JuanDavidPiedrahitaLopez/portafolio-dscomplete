import { siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { articles } from "@/data/articles";

// PLACEHOLDER: mismo dominio de ejemplo que robots.js — actualizar
// siteConfig.siteUrl en src/config/site.js con el dominio real.
const siteUrl = siteConfig.siteUrl || "https://tudominio.com";

export default function sitemap() {
    const staticRoutes = ["", "/contacto", "/projects", "/research"].map((path) => ({
        url: `${siteUrl}${path}`,
        lastModified: new Date(),
    }));

    const projectRoutes = projects.map((project) => ({
        url: `${siteUrl}/projects/${project.slug}`,
        lastModified: new Date(),
    }));

    const articleRoutes = articles.map((article) => ({
        url: `${siteUrl}/research/${article.slug}`,
        lastModified: new Date(),
    }));

    return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
