"use client";

import { useId, useState, type ReactNode } from "react";

type IndexAccordionProps = {
  /** Responsive grid presets: experience | projects | narrow */
  variant?: "experience" | "projects" | "narrow";
  summaryCells: ReactNode;
  children: ReactNode;
  /** Extra class names on the expandable panel (e.g. split layout with media). */
  panelClassName?: string;
};

const variantClass: Record<NonNullable<IndexAccordionProps["variant"]>, string> = {
  experience: "index-accordion__summary--experience",
  projects: "index-accordion__summary--projects",
  narrow: "index-accordion__summary--narrow",
};

export function IndexAccordion({ variant = "narrow", summaryCells, children, panelClassName }: IndexAccordionProps) {
  const [open, setOpen] = useState(false);
  const reactId = useId();
  const baseId = `acc-${reactId.replace(/:/g, "")}`;
  const triggerId = `${baseId}-trigger`;
  const panelOuterId = `${baseId}-panel`;

  const panelClass = panelClassName ? `index-accordion__panel ${panelClassName}` : "index-accordion__panel";

  return (
    <div className={open ? "index-accordion index-accordion--open" : "index-accordion"}>
      <button
        type="button"
        id={triggerId}
        className={`index-row index-accordion__summary ${variantClass[variant]}`}
        aria-expanded={open}
        aria-controls={panelOuterId}
        onClick={() => setOpen((v) => !v)}
      >
        {summaryCells}
      </button>
      <div
        className="index-accordion__panel-outer"
        id={panelOuterId}
        role="region"
        aria-labelledby={triggerId}
      >
        <div className="index-accordion__panel-inner">
          <div className={panelClass}>{children}</div>
        </div>
      </div>
    </div>
  );
}
