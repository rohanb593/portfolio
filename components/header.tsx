"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/tech", label: "Tech Stack" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const baseHeaderClasses = useMemo(
    () =>
      "transition-all duration-300",
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`${baseHeaderClasses} ${
          isMenuOpen
            ? "fixed top-0 left-0 right-0 z-[70] bg-white/85 backdrop-blur-md border-b border-slate-200/70 shadow-sm md:relative md:z-auto md:bg-[var(--background)] md:border-none md:shadow-none"
            : "relative bg-[var(--background)]"
        }`}
      >
        <div className="flex w-full items-center justify-between px-4 py-4 md:px-8 md:py-5">
          <Link
            href="/"
            className={`text-lg font-semibold text-sky-800 hover:text-sky-900 md:text-2xl hover:no-underline focus-visible:no-underline transition-opacity duration-300 ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Rohan Bhagat
          </Link>

          <nav
            className={`hidden md:flex items-center gap-5 text-base font-medium md:gap-8 md:text-lg transition-opacity duration-300 ${
              isScrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-blue-50 text-sky-700 shadow-sm hover:from-sky-100 hover:to-blue-100 hover:text-sky-900 hover:shadow-md md:hidden transition-all duration-200 active:scale-95"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <motion.div
              className="relative h-5 w-5"
              animate={isMenuOpen ? "open" : "closed"}
            >
              <motion.span
                className="absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 },
                }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              />
              <motion.span
                className="absolute left-0 top-2 h-[2px] w-5 rounded-full bg-current"
                variants={{
                  closed: { opacity: 1, scale: 1 },
                  open: { opacity: 0, scale: 0 },
                }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="absolute left-0 top-4 h-[2px] w-5 rounded-full bg-current"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 },
                }}
                transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              />
            </motion.div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block"
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
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-slate-900 hover:text-sky-900 hover:no-underline focus-visible:no-underline transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="fixed left-0 right-0 top-16 z-[70] md:hidden"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="mx-4 mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-2xl overflow-hidden">
                <nav className="py-2">
                  {NAV_LINKS.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.03,
                        duration: 0.2
                      }}
                    >
                      <Link
                        href={link.href}
                        className="block px-6 py-3.5 text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-900 transition-colors active:bg-sky-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                      {index < NAV_LINKS.length - 1 && (
                        <div className="mx-6 border-b border-slate-100" />
                      )}
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

