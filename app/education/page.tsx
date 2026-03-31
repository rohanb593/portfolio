import { ChitengeHoverText } from "@/components/chitenge-hover-text";
import { IndexAccordion } from "@/components/index-accordion";
import { educationItems } from "@/lib/content";

export default function EducationPage() {
  return (
    <>
      <section className="page-section reveal">
        <h1 className="hero-title">Education</h1>
      </section>
      <section className="page-section editorial-grid reveal" style={{ animationDelay: "120ms" }}>
        <div className="index-content">
          {educationItems.map((item) => (
            <IndexAccordion
              key={item.id}
              variant="narrow"
              summaryCells={
                <>
                  <span className="index-row__id">{item.id}</span>
                  <div>
                    <h2 className="index-row__title" style={{ fontSize: "var(--step-2)" }}>
                      <ChitengeHoverText>{item.institution}</ChitengeHoverText>
                    </h2>
                    <p style={{ marginTop: "8px", color: "var(--ink-2)" }}>
                      <em>{item.qualification}</em>
                      {item.period ? ` · ${item.period}` : null}
                      {item.headline ? `. ${item.headline}` : null}
                    </p>
                  </div>
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
