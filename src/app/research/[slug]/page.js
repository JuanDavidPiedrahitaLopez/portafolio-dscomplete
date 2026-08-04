import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import ArticleDetailView from "./ArticleDetailView";

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticleDetailPage({ params }) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);
    if (!article) notFound();

    return <ArticleDetailView article={article} />;
}
