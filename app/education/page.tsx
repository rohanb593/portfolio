import { educationItems } from "@/lib/content";

export default function EducationPage() {
  return (
    <>
      <section className="page-section reveal">
        <h1 className="hero-title">Education</h1>
      </section>
      <section className="page-section editorial-grid reveal" style={{ animationDelay: "120ms" }}>
        <div className="index-content index-list">
          {educationItems.map((item) => (
            <article key={item.id} className="index-row" style={{ gridTemplateColumns: "80px 1fr 28px" }}>
              <span className="index-row__id">{item.id}</span>
              <div>
                <h2 className="index-row__title" style={{ fontSize: "var(--step-2)" }}>
                  {item.institution}
                </h2>
                <p style={{ marginTop: "8px", color: "var(--ink-2)" }}>
                  <em>{item.qualification}</em>. {item.period}. {item.notes}
                </p>
              </div>
              <span className="index-row__arrow">→</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
