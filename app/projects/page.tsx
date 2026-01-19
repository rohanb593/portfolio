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

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  languages: string[];
  stars: number;
  forks: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  readme_excerpt: string;
  readme_url: string;
  topics: string[];
  archived: boolean;
  private: boolean;
  status: string;
}

export default function ProjectsPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [githubRepos, setGithubRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/github/repos", {
          cache: "no-store", // Force fresh data on each request
        });
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || `Failed to fetch repositories (${response.status})`
          );
        }
        
        const data = await response.json();
        
        // Check if the response contains an error
        if (data.error) {
          throw new Error(data.message || data.error);
        }
        
        // Filter out archived repos and only show public ones
        const filteredRepos = data.filter((repo: GitHubRepo) => !repo.archived && !repo.private);
        
        // Sort by most recently pushed (latest first)
        filteredRepos.sort((a: GitHubRepo, b: GitHubRepo) => 
          new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        );
        
        setGithubRepos(filteredRepos);
      } catch (err: any) {
        setError(err.message || "Failed to load repositories");
        console.error("Error fetching GitHub repos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
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

        {/* GitHub Repositories Section */}
        {githubRepos.length > 0 && (
          <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-6xl"
          >

            {loading ? (
              <div className="text-center py-12">
                <p className="text-slate-600">Loading repositories...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-600">Error: {error}</p>
              </div>
            ) : (
              <>
                {/* Ongoing Repositories Section - Show First */}
                {githubRepos.filter((repo) => !repo.status || repo.status !== "completed").length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
                      Ongoing Projects
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                      {githubRepos
                        .filter((repo) => !repo.status || repo.status !== "completed")
                        .sort((a: GitHubRepo, b: GitHubRepo) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
                        .map((repo, index) => (
        <motion.div
                            key={repo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
        >
                            <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50 hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl mb-2 text-left">
                <a
                                    href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                                    className="text-slate-900 hover:text-sky-900 hover:no-underline flex items-center gap-2"
                                  >
                                    {repo.name}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="h-4 w-4"
                                    >
                                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                      <polyline points="15 3 21 3 21 9" />
                                      <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                </a>
              </CardTitle>
                                <CardDescription className="text-base md:text-lg text-left text-slate-600">
                                  {repo.description || "No description available"}
                                </CardDescription>
            </CardHeader>

                              <CardContent className="text-left space-y-4">
                                {/* Dates */}
                                <div className="flex flex-col gap-2 text-sm text-slate-600 pb-3 border-b border-slate-100">
                                  <div className="flex items-center gap-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="h-4 w-4"
                                    >
                                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                                      <line x1="16" y1="2" x2="16" y2="6" />
                                      <line x1="8" y1="2" x2="8" y2="6" />
                                      <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                    <span className="font-medium">Created:</span>
                                    <span>{new Date(repo.created_at).toLocaleDateString("en-US", { 
                                      year: "numeric", 
                                      month: "long", 
                                      day: "numeric" 
                                    })}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="h-4 w-4"
                                    >
                                      <circle cx="12" cy="12" r="10" />
                                      <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                    <span className="font-medium">Last updated:</span>
                                    <span>{new Date(repo.updated_at).toLocaleDateString("en-US", { 
                                      year: "numeric", 
                                      month: "long", 
                                      day: "numeric" 
                                    })}</span>
                                  </div>
                                </div>

                                {/* README Excerpt - First 30 lines */}
                                {repo.readme_excerpt && (
                                  <div>
                                    <p className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-[0.18em]">
                                      README
                                    </p>
                                    <pre className="text-xs md:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-sans bg-slate-50 p-4 rounded-lg border border-slate-200 overflow-x-auto max-h-64 overflow-y-auto">
                                      {repo.readme_excerpt}
                                    </pre>
                                  </div>
                                )}

                                {/* Languages */}
                                {repo.languages.length > 0 && (
                                  <div>
                                    <p className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-[0.18em]">
                                      Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                                      {repo.languages.map((lang) => (
                                        <Link key={lang} href={`/tech#${slugify(lang)}`}>
                                          <Badge
                                            variant="outline"
                                            className="bg-white/80 text-slate-800 border-slate-300 px-3 py-1 hover:bg-sky-50 hover:text-sky-900 cursor-pointer"
                                          >
                                            {lang}
                                          </Badge>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Stats */}
                                <div className="flex items-center gap-4 text-sm text-slate-600 pt-2 border-t border-slate-100">
                                  {repo.stars > 0 && (
                                    <span className="flex items-center gap-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-4 w-4"
                                      >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                      </svg>
                                      {repo.stars}
                                    </span>
                                  )}
                                  {repo.forks > 0 && (
                                    <span className="flex items-center gap-1">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="h-4 w-4"
                                      >
                                        <circle cx="12" cy="18" r="3" />
                                        <path d="M12 9V2" />
                                        <path d="M7 9a5 5 0 0 1 10 0" />
                                      </svg>
                                      {repo.forks}
                                    </span>
                                  )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
                        ))}
                    </div>
                  </div>
                )}

                {/* Completed Repositories Section */}
                {githubRepos.filter((repo) => repo.status === "completed").length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-6">
                      Completed Projects
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                      {githubRepos
                        .filter((repo) => repo.status === "completed")
                        .sort((a: GitHubRepo, b: GitHubRepo) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
                        .map((repo, index) => (
        <motion.div
                            key={repo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
        >
                    <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50 hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl mb-2 text-left">
                <a
                            href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                            className="text-slate-900 hover:text-sky-900 hover:no-underline flex items-center gap-2"
                          >
                            {repo.name}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                              <polyline points="15 3 21 3 21 9" />
                              <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                </a>
              </CardTitle>
                        <CardDescription className="text-base md:text-lg text-left text-slate-600">
                          {repo.description || "No description available"}
                        </CardDescription>
            </CardHeader>

                      <CardContent className="text-left space-y-4">
                        {/* Dates */}
                        <div className="flex flex-col gap-2 text-sm text-slate-600 pb-3 border-b border-slate-100">
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <span className="font-medium">Created:</span>
                            <span>{new Date(repo.created_at).toLocaleDateString("en-US", { 
                              year: "numeric", 
                              month: "long", 
                              day: "numeric" 
                            })}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span className="font-medium">Last updated:</span>
                            <span>{new Date(repo.updated_at).toLocaleDateString("en-US", { 
                              year: "numeric", 
                              month: "long", 
                              day: "numeric" 
                            })}</span>
                          </div>
                        </div>

                        {/* README Excerpt - First 30 lines */}
                        {repo.readme_excerpt && (
                          <div>
                            <p className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-[0.18em]">
                              README
                            </p>
                            <pre className="text-xs md:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap font-sans bg-slate-50 p-4 rounded-lg border border-slate-200 overflow-x-auto max-h-64 overflow-y-auto">
                              {repo.readme_excerpt}
                            </pre>
              </div>
                        )}

                        {/* Languages */}
                        {repo.languages.length > 0 && (
                          <div>
                            <p className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-[0.18em]">
                              Tech Stack
              </p>
              <div className="flex flex-wrap gap-2">
                              {repo.languages.map((lang) => (
                                <Link key={lang} href={`/tech#${slugify(lang)}`}>
                                  <Badge
                                    variant="outline"
                                    className="bg-white/80 text-slate-800 border-slate-300 px-3 py-1 hover:bg-sky-50 hover:text-sky-900 cursor-pointer"
                                  >
                                    {lang}
                                  </Badge>
                                </Link>
                              ))}
                            </div>
              </div>
                        )}

                        {/* Stats */}
                        <div className="flex items-center gap-4 text-sm text-slate-600 pt-2 border-t border-slate-100">
                          {repo.stars > 0 && (
                            <span className="flex items-center gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                              </svg>
                              {repo.stars}
                            </span>
                          )}
                          {repo.forks > 0 && (
                            <span className="flex items-center gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                              >
                                <circle cx="12" cy="18" r="3" />
                                <path d="M12 9V2" />
                                <path d="M7 9a5 5 0 0 1 10 0" />
                              </svg>
                              {repo.forks}
                            </span>
                          )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
                        ))}
                    </div>
      </div>
                )}
              </>
            )}
          </motion.section>
        )}
    </motion.div>
    </div>
  );
}
