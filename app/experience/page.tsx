"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function ExperiencePage() {
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
          Experience
        </h1>
        <p className="leading-relaxed text-slate-700 text-[clamp(1.15rem,2.5vw,1.6rem)]">
          Practical experience building internal tools, managing infrastructure, and delivering data-driven insights
          across London and Lusaka.
        </p>
      </motion.header>

      <div className="w-full max-w-5xl space-y-16">
        {/* Current Roles Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Current Roles</h2>
              <p className="text-base md:text-lg text-slate-600">Active positions and ongoing projects</p>
            </div>
          </div>

          <div className="relative pl-12">
            {/* Timeline line - positioned to align with dots */}
            <div className="absolute left-0 top-3 bottom-0 w-0.5 bg-sky-400"></div>
            
            {/* Timeline entry */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              {/* Card */}
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
                        Hyperlink Society, Queen Mary University of London
                      </h3>
                      <p className="text-sky-600 font-medium text-base md:text-lg">Present</p>
                    </div>
                  </div>
                  <Badge className="bg-sky-500 text-white px-3 py-1 text-sm font-medium">Part-Time</Badge>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-bold text-lg md:text-xl text-slate-900 mb-3">Software Engineer</h4>
                  <div className="space-y-2 text-base md:text-lg text-slate-700">
                    <p>
                      Collaborated in a student-led engineering team to design user interfaces and software for pod development.
                    </p>
                    <p>
                      Developed a full-stack inventory management system for the society, automating tracking and improving operational efficiency.
                    </p>
                    <p>
                      Worked on building scalable web applications using modern web technologies and database management.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">HTML</Badge>
                  <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">CSS</Badge>
                  <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">JavaScript</Badge>
                  <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">MySQL</Badge>
                  <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Full-stack</Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Previous Employment Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100">
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
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                <path d="M12 11v6" />
                <path d="M9 14h6" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Previous Employment</h2>
              <p className="text-base md:text-lg text-slate-600">Past internships and professional experience</p>
            </div>
          </div>

          <div className="relative pl-12 space-y-8">
            {/* Timeline line - positioned to align with dots */}
            <div className="absolute left-0 top-3 bottom-0 w-0.5 bg-sky-400"></div>
            
            {/* Corporate IT Solutions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
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
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                        Corporate IT Solutions
                      </h3>
                      <p className="text-sky-600 font-medium text-base md:text-lg">Jun 2025 – Aug 2025</p>
                    </div>
                  </div>
                  <Badge className="bg-sky-500 text-white px-3 py-1 text-sm font-medium">Internship</Badge>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-bold text-lg md:text-xl text-slate-900 mb-3">Summer Intern</h4>
                  <div className="space-y-2 text-base md:text-lg text-slate-700">
                    <p>Built a licence management system in Python/Streamlit to centralise tracking for 50+ multi-vendor software licences.</p>
                    <p>Developed a full-stack inventory management system for a hardware store, automating checkout and reducing item lookup times by 25%.</p>
                    <p>Configured and deployed 10+ network devices (firewalls, switches, APs), segmenting the network into 5 VLANs.</p>
                    <p>Helped manage 20TB of NAS storage and supported VMware and Veeam-based virtual machine infrastructure.</p>
                    <p>Contributed to securing 100+ endpoints with Sophos Anti-Virus.</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Python</Badge>
                  <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Streamlit</Badge>
                  <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">MySQL</Badge>
                  <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Networking</Badge>
                </div>
              </div>
            </motion.div>

            {/* James Fletcher */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                        <path d="M12 11v6" />
                        <path d="M9 14h6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">
                        James Fletcher
                      </h3>
                      <p className="text-sky-600 font-medium text-base md:text-lg">Jun 2024 – Jul 2024</p>
                    </div>
                  </div>
                  <Badge className="bg-sky-500 text-white px-3 py-1 text-sm font-medium">Internship</Badge>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-bold text-lg md:text-xl text-slate-900 mb-3">Summer Intern</h4>
                  <div className="space-y-2 text-base md:text-lg text-slate-700">
                    <p>Engineered a full-stack web application with a Streamlit front-end and Python back-end to analyse repository metrics (stars, forks, code lines) for hundreds of projects.</p>
                    <p>Delivered API-based insights around 90% faster, reducing manual data collection and streamlining developer evaluation.</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Python</Badge>
                  <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">Streamlit</Badge>
                  <Badge variant="outline" className="bg-white/80 text-slate-700 border-slate-300 px-3 py-1">APIs</Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}


