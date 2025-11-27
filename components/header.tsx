"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
            ? "fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-none"
            : "relative bg-[var(--background)]"
        }`}
      >
        <div className="flex w-full items-center justify-between px-4 py-4 md:px-8 md:py-5">
          <Link
            href="/"
            className={`text-lg font-semibold text-sky-800 hover:text-sky-900 md:text-2xl hover:no-underline focus-visible:no-underline transition-opacity duration-300 ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            Rohan Bhagat
          </Link>
          <nav
            className={`flex items-center gap-5 text-base font-medium md:gap-8 md:text-lg transition-opacity duration-300 ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Link
              href="/"
              className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline"
            >
              Home
            </Link>
            <Link
              href="/experience"
              className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline"
            >
              Experience
            </Link>
            <Link
              href="/education"
              className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline"
            >
              Education
            </Link>
            <Link
              href="/projects"
              className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline"
            >
              Projects
            </Link>
            <Link
              href="/tech"
              className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline"
            >
              Tech Stack
            </Link>
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
            <div className="bg-white/40 backdrop-blur-md rounded-full px-6 py-3 shadow-lg border border-slate-200/30">
              <nav className="flex items-center gap-4 text-sm font-medium md:gap-6 md:text-base">
                <Link
                  href="/"
                  className="text-sky-800 hover:text-sky-900 hover:no-underline focus-visible:no-underline transition-colors font-semibold text-base md:text-lg"
                >
                  Rohan Bhagat
                </Link>
                <span className="text-slate-300">|</span>
                <Link
                  href="/"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/experience"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline transition-colors"
                >
                  Experience
                </Link>
                <Link
                  href="/education"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline transition-colors"
                >
                  Education
                </Link>
                <Link
                  href="/projects"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline transition-colors"
                >
                  Projects
                </Link>
                <Link
                  href="/tech"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline transition-colors"
                >
                  Tech Stack
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

