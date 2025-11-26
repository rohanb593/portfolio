import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohan Bhagat | Portfolio",
  description:
    "Personal portfolio of Rohan Bhagat, BSc Computer Science with Management student at Queen Mary University of London.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-[var(--background)] text-slate-900 flex flex-col">
          <header className="border-b border-slate-200/70 bg-[#e0efff]">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:px-6 md:py-5">
              <a
                href="/"
                className="text-base font-semibold text-sky-800 hover:text-sky-900 md:text-lg hover:no-underline focus-visible:no-underline"
              >
                Rohan Bhagat
              </a>
              <nav className="flex items-center gap-4 text-sm font-medium md:gap-6 md:text-base">
                <a
                  href="/"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline"
                >
                  Home
                </a>
                <a
                  href="/experience"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline"
                >
                  Experience
                </a>
                <a
                  href="/education"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline"
                >
                  Education
                </a>
                <a
                  href="/projects"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline"
                >
                  Projects
                </a>
                <a
                  href="/tech"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline"
                >
                  Tech Stack
                </a>
              </nav>
            </div>
          </header>
          <main className="mx-auto flex-1 max-w-5xl px-4 py-8 md:px-6 md:py-10">
            {children}
          </main>
          <footer className="border-t border-slate-200/70 bg-[#e0efff]">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:px-6">
              <span className="text-[11px] text-slate-700">
                Built by Rohan Bhagat
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-slate-900 hover:text-sky-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.09-.74.09-.74 1.22.08 1.87 1.25 1.87 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.63-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-900 hover:text-sky-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.01 2.5 2.5 0 01.02-5.01zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21H18v-5.17c0-1.23-.02-2.81-1.71-2.81-1.71 0-1.97 1.34-1.97 2.72V21h-4V9z" />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
