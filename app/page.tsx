"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-[70vh] flex-col items-center justify-center gap-10 px-3 text-center sm:px-6 md:gap-12"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="max-w-3xl space-y-5 md:space-y-6"
      >
        <h1 className="font-semibold tracking-tight text-slate-900 text-[clamp(2.8rem,6vw,4.5rem)]">
          Hi, I&apos;m Rohan
        </h1>
        <p className="leading-relaxed text-slate-700 text-[clamp(1.15rem,2.5vw,1.6rem)]">
          I&apos;m a Computer Science with Management student at Queen Mary University of London.
          I enjoy building practical software — from full-stack web apps to data tools — and using code to solve real problems.
          I&apos;m especially interested in combining technical skills with a business mindset to create useful products.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-5 md:gap-6"
      >
        <a
          href="mailto:rohan.bhagat1@outlook.com"
          className="inline-flex items-center gap-2 text-base font-medium text-slate-900 hover:text-sky-900 md:text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 md:h-7 md:w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span>Email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/rohan-bhagat-a64785341"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-base font-medium text-slate-900 hover:text-sky-900 md:text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 md:h-7 md:w-7"
            fill="currentColor"
          >
            <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.01 2.5 2.5 0 01.02-5.01zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12V21H18v-5.17c0-1.23-.02-2.81-1.71-2.81-1.71 0-1.97 1.34-1.97 2.72V21h-4V9z" />
          </svg>
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/rohanb593"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-base font-medium text-slate-900 hover:text-sky-900 md:text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 md:h-7 md:w-7"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.09-.74.09-.74 1.22.08 1.87 1.25 1.87 1.25 1.08 1.86 2.83 1.32 3.52 1.01.11-.78.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.63-2.8 5.66-5.48 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <span>GitHub</span>
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-base font-medium text-slate-900 hover:text-sky-900 md:text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 md:h-7 md:w-7"
            fill="currentColor"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span>Facebook</span>
        </a>

        <a
          href="https://www.instagram.com/rohan.zm"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-base font-medium text-slate-900 hover:text-sky-900 md:text-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 md:h-7 md:w-7"
            fill="currentColor"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span>Instagram</span>
        </a>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-full max-w-7xl mt-10 md:mt-12"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/experience" className="group">
            <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hover:border-sky-300 cursor-pointer p-6 md:p-7">
              <CardHeader>
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-100 text-sky-700 group-hover:bg-sky-200 transition-colors md:h-16 md:w-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7 md:h-8 md:w-8"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-0">Experience</CardTitle>
                </div>
                <CardDescription className="text-base md:text-lg leading-relaxed">
                  Internships at Corporate IT Solutions and James Fletcher, building real-world tools and managing infrastructure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-sky-700 font-medium group-hover:text-sky-900 transition-colors">
                  View experience →
                </p>
              </CardContent>
            </Card>
          </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/education" className="group">
            <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hover:border-sky-300 cursor-pointer p-6 md:p-7">
              <CardHeader>
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-100 text-sky-700 group-hover:bg-sky-200 transition-colors md:h-16 md:w-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7 md:h-8 md:w-8"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                      <path d="M9 10h6" />
                      <path d="M9 14h6" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-0">Education</CardTitle>
                </div>
                <CardDescription className="text-base md:text-lg leading-relaxed">
                  BSc Computer Science with Management at QMUL, First Class Year 1, with strong foundations in programming and web tech.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-sky-700 font-medium group-hover:text-sky-900 transition-colors">
                  View education →
                </p>
              </CardContent>
            </Card>
          </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/projects" className="group">
            <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hover:border-sky-300 cursor-pointer p-6 md:p-7">
              <CardHeader>
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-100 text-sky-700 group-hover:bg-sky-200 transition-colors md:h-16 md:w-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7 md:h-8 md:w-8"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                      <path d="M12 11v6" />
                      <path d="M9 14h6" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-0">Projects</CardTitle>
                </div>
                <CardDescription className="text-base md:text-lg leading-relaxed">
                  Full-stack applications, management systems, and tools built with Python, Java, web technologies, and more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-sky-700 font-medium group-hover:text-sky-900 transition-colors">
                  Explore projects →
                </p>
              </CardContent>
            </Card>
          </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link href="/tech" className="group">
            <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hover:border-sky-300 cursor-pointer p-6 md:p-7">
              <CardHeader>
                <div className="mb-4 flex items-center justify-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-100 text-sky-700 group-hover:bg-sky-200 transition-colors md:h-16 md:w-16">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-7 w-7 md:h-8 md:w-8"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </div>
                  <CardTitle className="text-xl md:text-2xl mb-0">Tech Stack</CardTitle>
                </div>
                <CardDescription className="text-base md:text-lg leading-relaxed">
                  Java, Python, web technologies, SQL, and frameworks like Streamlit and Swing that I use to build solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-sky-700 font-medium group-hover:text-sky-900 transition-colors">
                  See tech stack →
                </p>
              </CardContent>
            </Card>
          </Link>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
