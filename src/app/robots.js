import { siteConfig } from "@/config/site";

// PLACEHOLDER: siteConfig.siteUrl está vacío hasta que exista un dominio
// definitivo. Se usa un dominio de ejemplo mientras tanto — actualízalo
// en src/config/site.js antes de publicar.
const siteUrl = siteConfig.siteUrl || "https://tudominio.com";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
