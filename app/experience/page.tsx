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
            <article key={item.id} className="index-row" style={{ gridTemplateColumns: "80px 1fr 180px 28px" }}>
              <span className="index-row__id">{item.id}</span>
              <div>
                <h2 className="index-row__title" style={{ fontSize: "var(--step-2)" }}>
                  {item.org}
                </h2>
                <p style={{ marginTop: "8px", color: "var(--ink-2)" }}>
                  <em>{item.role}</em>. {item.summary}
                </p>
              </div>
              <span className="index-row__meta">{item.period}</span>
              <span className="index-row__arrow">→</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
