import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rohan Bhagat | Portfolio",
  description:
    "Personal portfolio of Rohan Bhagat, BSc Computer Science with Management student at Queen Mary University of London.",
  other: {
    // Reduce preload warnings by optimizing resource hints
    'x-content-type-options': 'nosniff',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${poppins.variable} antialiased`}
      >
        <div className="min-h-screen bg-[var(--background)] text-slate-900 flex flex-col">
          <Header />
          <main className="mx-auto flex-1 w-full max-w-5xl px-4 py-8 md:px-6 md:py-10">
            {children}
          </main>
          <footer className="border-t border-slate-200/70 bg-[#e0efff]">
            <div className="flex w-full items-center justify-center gap-4 px-4 py-5 md:px-6 md:py-6">
              <span className="text-sm md:text-base text-slate-700">
                Built by Rohan Bhagat
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:rohan.bhagat1@outlook.com"
                  aria-label="Email"
                  className="text-slate-900 hover:text-sky-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 md:h-6 md:w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/rohan-bhagat-a64785341"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-900 hover:text-sky-900 inline-flex"
                >
                  <img
                    src="/linkedin.png"
                    alt="LinkedIn"
                    className="h-5 w-5 md:h-6 md:w-6 object-contain"
                    width={24}
                    height={24}
                  />
                </a>
                <a
                  href="https://github.com/rohanb593"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-slate-900 hover:text-sky-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 md:h-6 md:w-6"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.09-.74.09-.74 1.22.08 1.87 1.25 1.87 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.63-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
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
