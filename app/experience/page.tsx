import { IndexAccordion } from "@/components/index-accordion";
import { experienceItems } from "@/lib/content";

export default function ExperiencePage() {
  return (
    <>
      <section className="page-section reveal">
        <h1 className="hero-title">Experience</h1>
      </section>

      <section className="page-section editorial-grid reveal" style={{ animationDelay: "120ms" }}>
        <div className="index-content index-list">
          {experienceItems.map((item) => (
            <IndexAccordion
              key={item.id}
              variant="experience"
              summaryCells={
                <>
                  <span className="index-row__id">{item.id}</span>
                  <div>
                    <h2 className="index-row__title" style={{ fontSize: "var(--step-2)" }}>
                      {item.org}
                    </h2>
                    <p style={{ marginTop: "8px", color: "var(--ink-2)" }}>
                      <em>{item.role}</em>
                      {item.location ? ` · ${item.location}` : null}
                    </p>
                  </div>
                  <span className="index-row__meta index-row__meta--primary">{item.period}</span>
                  <span className="index-accordion__marker" aria-hidden="true" />
                </>
              }
            >
              <ul className="index-accordion__list">
                {item.bullets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </IndexAccordion>
          ))}
        </div>
      </section>
    </>
  );
}
