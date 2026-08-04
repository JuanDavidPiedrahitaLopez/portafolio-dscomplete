import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import ArticleDetailView from "./ArticleDetailView";

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);
    if (!article) return {};

    return {
        title: article.es.title,
        description: article.es.excerpt,
    };
}

export default async function ArticleDetailPage({ params }) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);
    if (!article) notFound();

    return <ArticleDetailView article={article} />;
}
