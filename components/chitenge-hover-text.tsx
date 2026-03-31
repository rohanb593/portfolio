import type { ReactNode } from "react";

/** Two stacked layers: solid text fades out while chitenge clip fades in (no transparent color transition / white flash). */
export function ChitengeHoverText({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="chitenge-hover__ink">{children}</span>
      <span className="chitenge-hover__pattern" aria-hidden="true">
        {children}
      </span>
    </>
  );
}
