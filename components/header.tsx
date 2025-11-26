"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 z-50 bg-[var(--background)] border-none"
            : "relative border-b border-slate-200/70 bg-[#e0efff]"
        }`}
      >
        <div className="flex w-full items-center justify-between px-4 py-4 md:px-8 md:py-5">
          <a
            href="/"
            className={`text-lg font-semibold text-sky-800 hover:text-sky-900 md:text-2xl hover:no-underline focus-visible:no-underline transition-opacity duration-300 ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            Rohan Bhagat
          </a>
          <nav
            className={`flex items-center gap-5 text-base font-medium md:gap-8 md:text-lg transition-opacity duration-300 ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
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

      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-slate-200/70">
              <nav className="flex items-center gap-4 text-sm font-medium md:gap-6 md:text-base">
                <a
                  href="/"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline transition-colors"
                >
                  Home
                </a>
                <a
                  href="/experience"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline transition-colors"
                >
                  Experience
                </a>
                <a
                  href="/education"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline transition-colors"
                >
                  Education
                </a>
                <a
                  href="/projects"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline transition-colors"
                >
                  Projects
                </a>
                <a
                  href="/tech"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline transition-colors"
                >
                  Tech Stack
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

