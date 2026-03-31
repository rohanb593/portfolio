import type { Metadata, Viewport } from "next";
import { EB_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { siteMeta } from "@/lib/content";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${siteMeta.name} | Portfolio`,
  description:
    "Editorial portfolio website for Rohan Bhagat, focused on software engineering work, education, and technical practice.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f5f1eb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} ${jetbrainsMono.variable}`}>
        <div className="site-shell">
          <div className="site-shell-decor" aria-hidden="true" />
          <Header />
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            <div className="footer-inner">
              <span>Built by Rohan Bhagat</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
