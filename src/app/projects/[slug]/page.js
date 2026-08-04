import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import ProjectDetailView from "./ProjectDetailView";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};

    return {
        title: project.es.title,
        description: project.es.description,
    };
}

export default async function ProjectDetailPage({ params }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    return <ProjectDetailView project={project} />;
}
