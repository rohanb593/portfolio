"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectsPage() {
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
          Projects
        </h1>
        <p className="leading-relaxed text-slate-700 text-[clamp(1.15rem,2.5vw,1.6rem)]">
          A mix of full-stack applications, internal tools, and learning projects that show how I approach real-world
          problems with code.
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
              <CardTitle className="text-xl md:text-2xl mb-2 text-left">License Management System</CardTitle>
              <CardDescription className="text-lg md:text-xl text-left text-sky-600 font-medium">Python · Streamlit · MySQL</CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <p className="text-base text-slate-700 md:text-lg mb-4">
                Web app to track and manage software licences from multiple vendors, giving IT a centralised view of
                expiry dates, vendors, and usage.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Dashboards</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">CRUD</Badge>
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
              <CardTitle className="text-xl md:text-2xl mb-2 text-left">Inventory Management System</CardTitle>
              <CardDescription className="text-lg md:text-xl text-left text-sky-600 font-medium">HTML · CSS · JavaScript · MySQL</CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <p className="text-base text-slate-700 md:text-lg mb-4">
                Full-stack inventory tracking web app for a hardware store, supporting product lookup, basic checkout
                flows, and stock visibility.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Full-stack</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Retail</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl mb-2 text-left">
                <a
                  href="https://github.com/etchpad/repo-scout.git"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-900 hover:text-sky-900 hover:no-underline"
                >
                  Repository Scout
                </a>
              </CardTitle>
              <CardDescription className="text-lg md:text-xl text-left text-sky-600 font-medium">Python · Streamlit · GitHub API</CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <p className="text-base text-slate-700 md:text-lg mb-4">
                Web application that searches for repositories on GitHub based on user search criteria. Overcomes GitHub&apos;s
                search limitations using the GitHub API, with a user-friendly Streamlit interface for analyzing repository
                statistics including stars, forks, and code lines.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">APIs</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Analytics</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl mb-2 text-left">Horse Race Simulator</CardTitle>
              <CardDescription className="text-lg md:text-xl text-left text-sky-600 font-medium">Java · Swing</CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <p className="text-base text-slate-700 md:text-lg mb-4">
                Graphical horse racing game with betting mechanics and random race outcomes; built to practise Java,
                Swing UI, and event-driven programming.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">OOP</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Desktop</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl mb-2 text-left">Blog & Portfolio Website</CardTitle>
              <CardDescription className="text-lg md:text-xl text-left text-sky-600 font-medium">HTML · CSS · PHP · MySQL · JavaScript</CardDescription>
            </CardHeader>
            <CardContent className="text-left">
              <p className="text-base text-slate-700 md:text-lg mb-4">
                Responsive personal website with integrated blog, using PHP/MySQL for content management and a custom
                front-end for posts and projects.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Blog</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">PHP</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

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
            <CardContent className="text-left">
              <p className="text-base text-slate-700 md:text-lg mb-4">
                A game developed using Java where the player must kill the Boggle Monster. Players search different locations
                and defeat multiple enemies to reach the final stage.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Game</Badge>
                <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Java</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}


