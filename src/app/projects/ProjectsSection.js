import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    return (
        <section className="w-full mt-20 pt-16 scroll-mt-24" id="proyectos" style={{
            width: "100%",
            paddingLeft: "8%",
            paddingTop: "2%",
            paddingBottom: "2%",
            paddingRight: "8%"
        }} >

            <div
                className="mx-auto"

            >

                {/* HEADER */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "40px",
                        flexWrap: "wrap",
                        gap: "12px"
                    }}
                >
                    <h2
                        style={{
                            color: "white",
                            fontWeight: "700",
                            fontSize: "28px"
                        }}
                    >
                        Proyectos destacados
                    </h2>

                    <a
                        style={{
                            color: "#4aa3ff",
                            fontSize: "18px",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px"
                        }}
                    >
                        Ver todos los proyectos →
                    </a>
                </div>

                {/* GRID */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 360px))",
                        justifyContent: "center",
                        gap: "32px"
                    }}
                >
                    {projects.map((project) => (
                        <div key={project.id} style={{ width: "100%" }}>
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}