import { IndexAccordion } from "@/components/index-accordion";
import { techGroups } from "@/lib/content";

export default function TechPage() {
  return (
    <>
      <section className="page-section reveal">
        <h1 className="hero-title">Tools and Languages</h1>
      </section>
      <section className="page-section editorial-grid reveal" style={{ animationDelay: "120ms" }}>
        <div className="index-content index-list">
          {techGroups.map((group) => (
            <IndexAccordion
              key={group.id}
              variant="narrow"
              summaryCells={
                <>
                  <span className="index-row__id">{group.id}</span>
                  <div>
                    <h2 className="index-row__title" style={{ fontSize: "var(--step-2)" }}>
                      {group.name}
                    </h2>
                  </div>
                  <span className="index-accordion__marker" aria-hidden="true" />
                </>
              }
            >
              <ul className="index-accordion__list index-accordion__list--inline">
                {group.items.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
              {group.note ? <p className="index-accordion__note">{group.note}</p> : null}
            </IndexAccordion>
          ))}
        </div>
      </section>
    </>
  );
}
