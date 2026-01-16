"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const techStack = {
  languages: [
    { name: "Java", years: 2 },
    { name: "Python", years: 2 },
    { name: "JavaScript", years: 1 },
    { name: "TypeScript", years: 0.5 },
    { name: "HTML", years: 2 },
    { name: "CSS", years: 2 },
    { name: "SQL", years: 1 },
    { name: "PHP", years: 1 },
  ],
  frameworks: [
    { name: "React", years: 0.5 },
    { name: "Next.js", years: 0.5 },
    { name: "Streamlit", years: 2 },
    { name: "Node.js", years: 0.5 },
    { name: "Swing", years: 0.5 },
    { name: "Tkinter", years: 2 },
  ],
  software: [
    { name: "Git", years: 2 },
    { name: "GitHub", years: 2 },
    { name: "MySQL", years: 1 },
    { name: "Cloudflare", years: 0.5 }, // moved here
  ],
};

export default function TechPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const scrollableHeight = documentHeight - windowHeight;
      const progress =
        scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;

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
          className="max-w-3xl space-y-4 md:space-y-5 text-center"
        >
          <h1 className="font-semibold tracking-tight text-slate-900 text-[clamp(2.8rem,6vw,4.5rem)]">
            Tech Stack
          </h1>
          <p className="leading-relaxed text-slate-700 text-[clamp(1.15rem,2.5vw,1.6rem)]">
            A comprehensive overview of technologies I work with, organized by
            category with years of experience.
          </p>
        </motion.header>

        <div className="w-full max-w-6xl space-y-8">
          {/* Languages Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6 md:p-8 shadow-sm border border-slate-200/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2 text-left">
                  Languages
                </CardTitle>
                <CardDescription className="text-base md:text-lg text-left">
                  Programming languages I use
                </CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <div className="space-y-4">
                  {techStack.languages.map((item, index) => {
                    const maxYears = 5;
                    const percentage = (item.years / maxYears) * 100;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <span
                          id={`tech-${slugify(item.name)}`}
                          className="text-base md:text-lg font-medium text-slate-900 min-w-[120px] scroll-mt-24"
                        >
                          {item.name}
                        </span>
                        <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden relative">
                          <motion.div
                            className="h-full bg-sky-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                          />
                        </div>
                        <span className="text-sm md:text-base text-slate-600 font-medium min-w-[60px] text-right">
                          {item.years >= 1
                            ? `${item.years}+ years`
                            : "< 1 year"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Frameworks Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="p-6 md:p-8 shadow-sm border border-slate-200/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2 text-left">
                  Frameworks and Libraries
                </CardTitle>
                <CardDescription className="text-base md:text-lg text-left">
                  Frameworks and libraries I build with
                </CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <div className="space-y-4">
                  {techStack.frameworks.map((item, index) => {
                    const maxYears = 5;
                    const percentage = (item.years / maxYears) * 100;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <span className="text-base md:text-lg font-medium text-slate-900 min-w-[120px]">
                          {item.name}
                        </span>
                        <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden relative">
                          <motion.div
                            className="h-full bg-sky-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                          />
                        </div>
                        <span className="text-sm md:text-base text-slate-600 font-medium min-w-[60px] text-right">
                          {item.years >= 1
                            ? `${item.years}+ years`
                            : "< 1 year"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Software Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-6 md:p-8 shadow-sm border border-slate-200/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl mb-2 text-left">
                  Software and Tools
                </CardTitle>
                <CardDescription className="text-base md:text-lg text-left">
                  Development tools and software I use
                </CardDescription>
              </CardHeader>
              <CardContent className="text-left">
                <div className="space-y-4">
                  {techStack.software.map((item, index) => {
                    const maxYears = 5;
                    const percentage = (item.years / maxYears) * 100;
                    return (
                      <div key={index} className="flex items-center gap-4">
                        <span className="text-base md:text-lg font-medium text-slate-900 min-w-[120px]">
                          {item.name}
                        </span>
                        <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden relative">
                          <motion.div
                            className="h-full bg-sky-600 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                          />
                        </div>
                        <span className="text-sm md:text-base text-slate-600 font-medium min-w-[60px] text-right">
                          {item.years >= 1
                            ? `${item.years}+ years`
                            : "< 1 year"}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </motion.div>
    </div>
  );
}
