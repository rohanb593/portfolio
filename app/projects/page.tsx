import { IndexAccordion } from "@/components/index-accordion";
import { ProjectExternalLink } from "@/components/project-external-link";
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
            <IndexAccordion
              key={project.id}
              variant="projects"
              summaryCells={
                <>
                  <span className="index-row__id">{project.id}</span>
                  <div>
                    <h2 className="index-row__title" style={{ fontSize: "var(--step-2)" }}>
                      {project.title}
                    </h2>
                  </div>
                  <span className="index-row__meta">{project.category}</span>
                  <span className="index-row__year">{project.year}</span>
                  <span className="index-accordion__marker" aria-hidden="true" />
                </>
              }
            >
              <p className="index-accordion__lead">{project.description}</p>
              <p className="index-accordion__stack">{project.stack}</p>
              {project.href ? (
                <div className="index-accordion__project-links">
                  <ProjectExternalLink
                    href={project.href}
                    label={project.linkLabel ?? "View project →"}
                    patternId={`gh-${project.id}-primary`}
                    projectTitle={project.title}
                  />
                  {project.secondaryHref ? (
                    <ProjectExternalLink
                      href={project.secondaryHref}
                      label={project.secondaryLinkLabel ?? "Source →"}
                      patternId={`gh-${project.id}-secondary`}
                      projectTitle={project.title}
                      variant="secondary"
                    />
                  ) : null}
                </div>
              ) : null}
            </IndexAccordion>
          ))}
        </div>
      </section>
    </>
  );
}
