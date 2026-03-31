import type { ReactNode } from "react";

type IndexAccordionProps = {
  /** Responsive grid presets: experience | projects | narrow */
  variant?: "experience" | "projects" | "narrow";
  summaryCells: ReactNode;
  children: ReactNode;
};

const variantClass: Record<NonNullable<IndexAccordionProps["variant"]>, string> = {
  experience: "index-accordion__summary--experience",
  projects: "index-accordion__summary--projects",
  narrow: "index-accordion__summary--narrow",
};

export function IndexAccordion({ variant = "narrow", summaryCells, children }: IndexAccordionProps) {
  return (
    <details className="index-accordion">
      <summary className={`index-row index-accordion__summary ${variantClass[variant]}`}>{summaryCells}</summary>
      <div className="index-accordion__panel-outer">
        <div className="index-accordion__panel-inner">
          <div className="index-accordion__panel">{children}</div>
        </div>
      </div>
    </details>
  );
}
