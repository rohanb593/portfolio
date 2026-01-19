"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ProjectsPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-200">
        <motion.div
          className="h-full bg-sky-600"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen flex-col items-center gap-10 px-3 py-10 text-left sm:px-6 md:gap-12 md:py-16"
      >
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl space-y-4 text-center md:space-y-5"
        >
          <h1 className="font-semibold tracking-tight text-slate-900 text-[clamp(2.8rem,6vw,4.5rem)]">Projects</h1>
          <p className="leading-relaxed text-slate-700 text-[clamp(1.15rem,2.5vw,1.6rem)]">
            A mix of full-stack applications, internal tools, and learning projects that show how I approach real-world
            problems with code.
          </p>
        </motion.header>

        <div className="w-full max-w-6xl grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {/* License Management System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2 text-left">
                  <a
                    href="https://github.com/rohanb593/CITS-Python-Project"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-900 hover:text-sky-900 hover:no-underline"
                  >
                    License Management System
                  </a>
                </CardTitle>
                <CardDescription className="text-lg md:text-xl text-left text-sky-600 font-medium">
                  Python · Streamlit · MySQL
                </CardDescription>
              </CardHeader>

              <CardContent className="text-left space-y-5">
                {/* ✅ Project description */}
                <p className="text-slate-700 leading-relaxed">
                  An internal dashboard for managing software licenses end-to-end—tracking renewals, vendors, costs, and
                  users. Includes CRUD workflows, validation, and searchable views to make renewals and audits fast.
                </p>

                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-[0.18em]">Tech stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Streamlit", "MySQL"].map((tech) => (
                      <Link key={tech} href={`/tech#${slugify(tech)}`}>
                        <Badge
                          variant="outline"
                          className="bg-white/80 text-slate-800 border-slate-300 px-3 py-1 hover:bg-sky-50 hover:text-sky-900"
                        >
                          {tech}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Inventory Management System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2 text-left">
                  <a
                    href="https://github.com/rohanb593/CITS-Node.js"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-900 hover:text-sky-900 hover:no-underline"
                  >
                    Inventory Management System
                  </a>
                </CardTitle>
                <CardDescription className="text-lg md:text-xl text-left text-sky-600 font-medium">
                  HTML · CSS · JavaScript · MySQL
                </CardDescription>
              </CardHeader>

              <CardContent className="text-left space-y-5">
                {/* ✅ Project description */}
                <p className="text-slate-700 leading-relaxed">
                  A lightweight inventory tool for tracking products, stock levels, and updates over time. Built with a
                  clean UI and database-backed operations to support common store workflows like add/edit items and
                  basic search.
                </p>

                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-[0.18em]">Tech stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "MySQL"].map((tech) => (
                      <Link key={tech} href={`/tech#${slugify(tech)}`}>
                        <Badge
                          variant="outline"
                          className="bg-white/80 text-slate-800 border-slate-300 px-3 py-1 hover:bg-sky-50 hover:text-sky-900"
                        >
                          {tech}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Repository Scout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2 text-left">
                  <a
                    href="https://github.com/rohanb593/repo-scout"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-900 hover:text-sky-900 hover:no-underline"
                  >
                    Repository Scout
                  </a>
                </CardTitle>
                <CardDescription className="text-lg md:text-xl text-left text-sky-600 font-medium">
                  Python · Streamlit · GitHub API
                </CardDescription>
              </CardHeader>

              <CardContent className="text-left space-y-5">
                {/* ✅ Project description */}
                <p className="text-slate-700 leading-relaxed">
                  A repo analysis tool that fetches GitHub data and turns it into actionable insights—languages,
                  contributors, commit activity, and codebase size. Designed to quickly understand unfamiliar codebases.
                </p>

                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-[0.18em]">Tech stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "Streamlit", "GitHub API"].map((tech) => (
                      <Link key={tech} href={`/tech#${slugify(tech)}`}>
                        <Badge
                          variant="outline"
                          className="bg-white/80 text-slate-800 border-slate-300 px-3 py-1 hover:bg-sky-50 hover:text-sky-900"
                        >
                          {tech}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Horse Race Simulator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2 text-left">
                  <a
                    href="https://github.com/rohanb593/Horse-Racing-Simulator"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-900 hover:text-sky-900 hover:no-underline"
                  >
                    Horse Race Simulator
                  </a>
                </CardTitle>
                <CardDescription className="text-lg md:text-xl text-left text-sky-600 font-medium">Java · Swing</CardDescription>
              </CardHeader>

              <CardContent className="text-left space-y-5">
                {/* ✅ Project description */}
                <p className="text-slate-700 leading-relaxed">
                  An OOP-focused race simulator with a GUI built in Swing. Models horses, races, and outcomes with
                  extendable logic—making it easy to add features like stats, conditions, or different track types.
                </p>

                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-[0.18em]">Tech stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Swing"].map((tech) => (
                      <Link key={tech} href={`/tech#${slugify(tech)}`}>
                        <Badge
                          variant="outline"
                          className="bg-white/80 text-slate-800 border-slate-300 px-3 py-1 hover:bg-sky-50 hover:text-sky-900"
                        >
                          {tech}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Blog & Portfolio Website */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2 text-left">Blog & Portfolio Website</CardTitle>
                <CardDescription className="text-lg md:text-xl text-left text-sky-600 font-medium">
                  HTML · CSS · PHP · MySQL · JavaScript
                </CardDescription>
              </CardHeader>

              <CardContent className="text-left space-y-5">
                {/* ✅ Project description */}
                <p className="text-slate-700 leading-relaxed">
                  A personal site with dynamic pages backed by a database—supporting posts/projects and structured
                  content. Focused on clean UX, reusable components, and maintainable server-side logic.
                </p>

                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-[0.18em]">Tech stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "PHP", "MySQL"].map((tech) => (
                      <Link key={tech} href={`/tech#${slugify(tech)}`}>
                        <Badge
                          variant="outline"
                          className="bg-white/80 text-slate-800 border-slate-300 px-3 py-1 hover:bg-sky-50 hover:text-sky-900"
                        >
                          {tech}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Miniproject */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2 text-left">
                  <a
                    href="https://github.com/rohanb593/MiniProject-lvl6.git"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-900 hover:text-sky-900 hover:no-underline"
                  >
                    Miniproject
                  </a>
                </CardTitle>
                <CardDescription className="text-lg md:text-xl text-left text-sky-600 font-medium">Java · Swing</CardDescription>
              </CardHeader>

              <CardContent className="text-left space-y-5">
                {/* ✅ Project description */}
                <p className="text-slate-700 leading-relaxed">
                  A compact Java Swing project focused on fundamentals—GUI structure, event handling, and clean
                  separation of logic. Built as a practice piece to sharpen OOP and desktop UI skills.
                </p>

                <div>
                  <p className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-[0.18em]">Tech stack</p>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Swing"].map((tech) => (
                      <Link key={tech} href={`/tech#${slugify(tech)}`}>
                        <Badge
                          variant="outline"
                          className="bg-white/80 text-slate-800 border-slate-300 px-3 py-1 hover:bg-sky-50 hover:text-sky-900"
                        >
                          {tech}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
