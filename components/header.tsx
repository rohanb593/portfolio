import Link from "next/link";
import { ChitengeHoverText } from "@/components/chitenge-hover-text";
import { navLinks, siteMeta } from "@/lib/content";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          href="/"
          className="chitenge-hover site-header__brand"
          style={{ fontFamily: "var(--font-head)", letterSpacing: "-0.02em" }}
        >
          <ChitengeHoverText>{siteMeta.name}</ChitengeHoverText>
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="label chitenge-hover site-header__link">
              <ChitengeHoverText>{link.label}</ChitengeHoverText>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
