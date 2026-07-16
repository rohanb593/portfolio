import { ChitengeHoverText } from "@/components/chitenge-hover-text";
import { IndexAccordion } from "@/components/index-accordion";
import { ProjectExternalLink } from "@/components/project-external-link";
import { homeProjects, type ProjectEntry } from "@/lib/content";

function ProjectAccordions({ projects }: { projects: ProjectEntry[] }) {
  return (
    <>
      {projects.map((project) => (
        <IndexAccordion
          key={project.id}
          variant="projects"
          panelClassName={project.imageSrc ? "index-accordion__panel--split" : undefined}
          summaryCells={
            <>
              <span className="index-row__id">{project.id}</span>
              <div>
                <h2 className="index-row__title" style={{ fontSize: "var(--step-2)" }}>
                  <ChitengeHoverText>{project.title}</ChitengeHoverText>
                </h2>
              </div>
              <span className="index-row__meta">{project.category}</span>
              <span className="index-row__year">{project.year}</span>
              <span className="index-accordion__marker" aria-hidden="true" />
            </>
          }
        >
          {project.imageSrc ? (
            <>
              <div className="index-accordion__panel-main">
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
              </div>
              <div
                className={
                  project.secondaryImageSrc
                    ? "index-accordion__panel-media index-accordion__panel-media--gallery"
                    : "index-accordion__panel-media"
                }
              >
                <img
                  className="index-accordion__panel-image"
                  src={project.imageSrc}
                  alt={project.imageAlt ?? ""}
                  width={project.imageWidth ?? 1024}
                  height={project.imageHeight ?? 621}
                  loading="lazy"
                  decoding="async"
                />
                {project.secondaryImageSrc ? (
                  <img
                    className="index-accordion__panel-image"
                    src={project.secondaryImageSrc}
                    alt={project.secondaryImageAlt ?? ""}
                    width={project.secondaryImageWidth ?? 1024}
                    height={project.secondaryImageHeight ?? 621}
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
              </div>
            </>
          ) : (
            <>
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
            </>
          )}
        </IndexAccordion>
      ))}
    </>
  );
}

export default function ProjectsPage() {
  const inProgress = homeProjects.filter((p) => p.status === "inProgress");
  const completed = homeProjects.filter((p) => p.status === "completed");

  return (
    <>
      <section className="page-section reveal">
        <h1 className="hero-title">Projects</h1>
      </section>
      <section className="page-section editorial-grid reveal" style={{ animationDelay: "120ms" }}>
        <div className="index-content">
          {inProgress.length > 0 ? (
            <>
              <h2 className="label" style={{ marginBottom: "1.25rem" }}>
                In progress
              </h2>
              <ProjectAccordions projects={inProgress} />
            </>
          ) : null}
          <h2
            className="label"
            style={{
              marginTop: inProgress.length > 0 ? "clamp(2rem, 5vw, 3rem)" : 0,
              marginBottom: "1.25rem",
            }}
          >
            Completed
          </h2>
          <ProjectAccordions projects={completed} />
        </div>
      </section>
    </>
  );
}
