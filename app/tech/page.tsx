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
            <article key={group.id} className="index-row" style={{ gridTemplateColumns: "80px 1fr 28px" }}>
              <span className="index-row__id">{group.id}</span>
              <div>
                <h2 className="index-row__title" style={{ fontSize: "var(--step-2)" }}>
                  {group.name}
                </h2>
                <p style={{ marginTop: "8px", color: "var(--ink-2)" }}>{group.items}</p>
              </div>
              <span className="index-row__arrow">→</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
