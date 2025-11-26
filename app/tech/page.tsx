"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechPage() {
  return (
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
          A mix of languages and tools from university projects and internships, with a focus on building maintainable,
          practical applications.
        </p>
      </motion.header>

      <div className="w-full max-w-6xl grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl mb-2 text-left">Programming Languages</CardTitle>
              <CardDescription className="text-base md:text-lg text-left">Core languages I use regularly</CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Java</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Python</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">HTML</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">CSS</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">JavaScript</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">PHP</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">SQL</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl mb-2 text-left">Frameworks & Tools</CardTitle>
              <CardDescription className="text-base md:text-lg text-left">What I build with day-to-day</CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Streamlit</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Swing</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Tkinter</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">MySQL</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">phpMyAdmin</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Git</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">GitHub</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </motion.div>
  );
}


