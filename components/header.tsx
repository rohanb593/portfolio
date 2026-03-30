import Link from "next/link";
import { navLinks, siteMeta } from "@/lib/content";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          width: "min(100%, 1440px)",
          margin: "0 auto",
          padding: "18px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Link href="/" className="chitenge-hover" style={{ fontFamily: "var(--font-head)", letterSpacing: "-0.02em" }}>
          {siteMeta.name}
        </Link>
        <nav style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="label chitenge-hover">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
