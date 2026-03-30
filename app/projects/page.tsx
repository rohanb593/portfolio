import Link from "next/link";
import { homeProjects } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <>
      <section className="page-section reveal">
        <h1 className="hero-title">Projects</h1>
      </section>
      <section className="page-section editorial-grid reveal" style={{ animationDelay: "120ms" }}>
        <div className="index-content index-list">
          {homeProjects.map((project) => (
            <Link key={project.id} href={project.href} className="index-row index-row--with-arrow">
              <span className="index-row__id">{project.id}</span>
              <div>
                <h2 className="index-row__title" style={{ fontSize: "var(--step-2)" }}>
                  {project.title}
                </h2>
              </div>
              <span className="index-row__meta">{project.category}</span>
              <span className="index-row__year">{project.year}</span>
              <span className="index-row__arrow">→</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
