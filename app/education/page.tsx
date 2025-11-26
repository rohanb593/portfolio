"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function EducationPage() {
  const [showAchievements, setShowAchievements] = useState(false);

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
          Education
        </h1>
        <p className="leading-relaxed text-slate-700 text-[clamp(1.15rem,2.5vw,1.6rem)]">
          Academic background and achievements from Queen Mary University of London and American International School of Lusaka.
        </p>
      </motion.header>

      <div className="w-full max-w-5xl space-y-8">
        <div className="relative pl-12 space-y-8">
          {/* Timeline line */}
          <div className="absolute left-0 top-3 bottom-0 w-0.5 bg-sky-400"></div>
          
          {/* Queen Mary University */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-200/50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-sky-600"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      <path d="M9 10h6" />
                      <path d="M9 14h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                      Queen Mary University of London
                    </h3>
                    <p className="text-sky-600 font-medium text-base md:text-lg">September 2024 – June 2028</p>
                  </div>
                </div>
                <Badge className="bg-sky-500 text-white px-3 py-1 text-sm font-medium">University</Badge>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-lg md:text-xl text-slate-900 mb-3">BSc Computer Science with Management</h4>
                <div className="space-y-3 text-base md:text-lg text-slate-700">
                  <p>Year 1: First Class Honours (Average 74.7%)</p>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Relevant courses</p>
                    <ul className="space-y-1.5 text-slate-700">
                      <li>• Procedural Programming</li>
                      <li>• Computer Systems and Networks – 62.5%</li>
                      <li>• Fundamentals of Web Technology – 81.4%</li>
                      <li>• Object Oriented Programming – 71.4%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* American International School */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-slate-200/50">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-sky-600"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      <path d="M9 10h6" />
                      <path d="M9 14h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                      American International School of Lusaka
                    </h3>
                    <p className="text-sky-600 font-medium text-base md:text-lg">September 2020 – June 2023</p>
                  </div>
                </div>
                <Badge className="bg-sky-500 text-white px-3 py-1 text-sm font-medium">Secondary</Badge>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-lg md:text-xl text-slate-900 mb-3">International Baccalaureate</h4>
                <div className="space-y-3 text-base md:text-lg text-slate-700">
                  <p>Economics (5), Mathematics (4), Biology (4), Geography (5), French (3), Literature (5).</p>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Achievements</p>
                    <ul className="space-y-1.5 text-slate-700">
                      <li>• Member of the Robotics Club</li>
                      <li>• Member of the STEM Team</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => setShowAchievements(!showAchievements)}
                      className="flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold text-base md:text-lg transition-colors"
                    >
                      <span>Awards & Recognitions</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`h-5 w-5 transition-transform duration-200 ${showAchievements ? "rotate-180" : ""}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <AnimatePresence>
                      {showAchievements && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 pl-4 border-l-2 border-sky-200"
                        >
                          <ul className="space-y-2 text-base md:text-lg text-slate-700">
                            <li>• 1st place in ISSEA (International Schools of Southern and Eastern Africa) STEM Robotics Competition</li>
                            <li>• Duke of Edinburgh Bronze Award</li>
                            <li>• Duke of Edinburgh Silver Award</li>
                            <li>• ISSEA STEM Competition</li>
                            <li>• President&apos;s Education Silver Award</li>
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}


