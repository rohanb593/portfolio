"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Helper function to create URL-friendly slugs
function createSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// GitHub language colors
const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  HTML: "#e34c26",
  CSS: "#563d7c",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
  Rust: "#dea584",
  C: "#555555",
  "C++": "#f34b7d",
  "C#": "#239120",
  Swift: "#fa7343",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  Shell: "#89e051",
  PowerShell: "#012456",
  Vue: "#4fc08d",
  React: "#61dafb",
  Angular: "#dd0031",
  Svelte: "#ff3e00",
  R: "#198CE7",
  MATLAB: "#e16737",
  Scala: "#c22d40",
  Clojure: "#db5855",
  Haskell: "#5e5086",
  Lua: "#000080",
  Perl: "#0298c3",
  "Objective-C": "#438eff",
  Dockerfile: "#384d54",
  Makefile: "#427819",
  Markdown: "#083fa1",
};

function getLanguageColor(language: string): string {
  return LANGUAGE_COLORS[language] || "#586e75";
}

interface LanguageData {
  name: string;
  percentage: number;
  color: string;
}

interface Project {
  id: number;
  name: string;
  description: string | null;
  url: string;
  language: string | null;
  languages: string[];
  languagesData: Record<string, number>;
  stars: number;
  forks: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  readme_excerpt: string;
  readme_url: string;
  status: string;
}

export default function ProjectsPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedReadmes, setExpandedReadmes] = useState<Set<number>>(new Set());

  // Scroll progress tracking
  useEffect(() => {
    function updateScrollProgress() {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
    }

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  // Fetch projects from GitHub
  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);
        setError(null);

        const username = "rohanb593";
        
        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=30&type=owner`
        );

        if (!reposResponse.ok) {
          throw new Error(`GitHub API error: ${reposResponse.status}`);
        }

        const repos = await reposResponse.json();
        const publicRepos = repos.filter((repo: any) => !repo.fork);

        // Process first 15 repos with full details
        const projectsToProcess = publicRepos.slice(0, 15);
        const processedProjects = await Promise.all(
          projectsToProcess.map(async (repo: any, index: number) => {
            let languagesData: Record<string, number> = {};
            let languages: string[] = [];
            let readmeExcerpt = "";
            let readmeUrl = "";
            let status = "";

            // Fetch languages
            try {
              const langResponse = await fetch(repo.languages_url);
              if (langResponse.ok) {
                languagesData = await langResponse.json();
                const entries = Object.entries(languagesData).sort(
                  (a: any, b: any) => b[1] - a[1]
                );
                languages = entries.slice(0, 5).map(([lang]) => lang);
              }
            } catch (e) {
              // Ignore language fetch errors
            }

            // Fetch README for first 8 repos
            if (index < 8) {
              try {
                const readmeResponse = await fetch(
                  `https://api.github.com/repos/${username}/${repo.name}/readme`
                );
                if (readmeResponse.ok) {
                  const readmeData = await readmeResponse.json();
                  try {
                    const binaryString = atob(readmeData.content);
                    const readmeContent = new TextDecoder('utf-8').decode(
                      Uint8Array.from(binaryString, (c) => c.charCodeAt(0))
                    );
                    readmeUrl = readmeData.html_url || "";
                    readmeExcerpt = readmeContent.split("\n").slice(0, 30).join("\n").trim();

                    // Extract status
                    const firstLines = readmeContent.split("\n").slice(0, 15).join("\n");
                    const statusMatch = firstLines.match(/status[:\s]+[^\w]*\s*([a-z]+)/i);
                    if (statusMatch && statusMatch[1]) {
                      status = statusMatch[1].toLowerCase().trim();
                    }
                  } catch (e) {
                    // Ignore decode errors
                  }
                }
              } catch (e) {
                // Ignore README fetch errors
              }
            }

            return {
              id: repo.id,
              name: repo.name,
              description: repo.description,
              url: repo.html_url,
              language: repo.language,
              languages: languages.length > 0 ? languages : (repo.language ? [repo.language] : []),
              languagesData,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              created_at: repo.created_at,
              updated_at: repo.updated_at,
              pushed_at: repo.pushed_at,
              readme_excerpt: readmeExcerpt,
              readme_url: readmeUrl,
              status,
            };
          })
        );

        // Add remaining repos with basic info
        const remainingProjects = publicRepos.slice(15).map((repo: any) => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          language: repo.language,
          languages: repo.language ? [repo.language] : [],
          languagesData: {},
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
          pushed_at: repo.pushed_at,
          readme_excerpt: "",
          readme_url: "",
          status: "",
        }));

        const allProjects = [...processedProjects, ...remainingProjects];
        allProjects.sort(
          (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
        );

        setProjects(allProjects);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load projects");
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  // Group projects by status
  const completedProjects = projects.filter(
    (p) => p.status && (p.status === "completed" || p.status === "complete")
  );
  const ongoingProjects = projects.filter(
    (p) => !p.status || (p.status !== "completed" && p.status !== "complete")
  );

  // Calculate language percentages
  function getLanguagePercentages(languagesData: Record<string, number>): LanguageData[] {
    if (!languagesData || Object.keys(languagesData).length === 0) return [];

    const totalBytes = Object.values(languagesData).reduce((sum, bytes) => sum + bytes, 0);
    if (totalBytes === 0) return [];

    return Object.entries(languagesData)
      .map(([name, bytes]) => ({
        name,
        percentage: (bytes / totalBytes) * 100,
        color: getLanguageColor(name),
      }))
      .sort((a, b) => b.percentage - a.percentage);
  }

  // Format date
  function formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  // Format project name
  function formatProjectName(name: string): string {
    return name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  }

  // Toggle README
  function toggleReadme(projectId: number) {
    setExpandedReadmes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  }

  // Clean README content
  function cleanReadme(content: string): string {
    return content
      .replace(/\*\*status[:\s]*\*\*[:\s]*[^\n]*/gi, '')
      .replace(/status[:\s]+[^\n]*/gi, '')
      .replace(/\[status[:\s]*[^\]]*\]/gi, '')
      .replace(/##\s*status[:\s]*[^\n]*/gi, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  }

  // Render project card
  function renderProjectCard(project: Project, index: number) {
    const languagePercentages = getLanguagePercentages(project.languagesData);
    const displayLanguages = project.languages.length > 0
      ? project.languages
      : project.language
      ? [project.language]
      : [];
    const isReadmeExpanded = expandedReadmes.has(project.id);
    const hasReadme = project.readme_excerpt && project.readme_excerpt.trim().length > 0;
    const techStack = displayLanguages.join(" · ") || "Various";

    return (
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl mb-2 text-left">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-900 hover:text-sky-900 hover:no-underline"
              >
                {formatProjectName(project.name)}
              </a>
            </CardTitle>
            <CardDescription className="text-lg md:text-xl text-left text-sky-600 font-medium">
              {techStack}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-left">
            {project.description && (
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {project.description}
              </p>
            )}

            {languagePercentages.length > 0 ? (
              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-[0.18em]">
                  Languages
                </p>
                <div className="mb-3">
                  <div className="h-2 rounded-md overflow-hidden bg-slate-200 flex">
                    {languagePercentages.map((lang) => (
                      <div
                        key={lang.name}
                        style={{
                          width: `${lang.percentage}%`,
                          backgroundColor: lang.color,
                        }}
                        className="h-full"
                        title={`${lang.name}: ${lang.percentage.toFixed(1)}%`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {languagePercentages.map((lang) => (
                    <Link
                      key={lang.name}
                      href={`/tech#${createSlug(lang.name)}`}
                      className="flex items-center gap-1.5 text-xs hover:opacity-80 transition-opacity"
                    >
                      <span
                        className="inline-block w-3 h-3 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="font-medium text-slate-700">{lang.name}</span>
                      <span className="text-slate-500">{lang.percentage.toFixed(1)}%</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-600 mb-2 uppercase tracking-[0.18em]">
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {displayLanguages.length > 0 ? (
                    displayLanguages.map((tech) => (
                      <Link key={tech} href={`/tech#${createSlug(tech)}`}>
                        <Badge
                          variant="outline"
                          className="bg-white/80 text-slate-800 border-slate-300 px-3 py-1 hover:bg-sky-50 hover:text-sky-900"
                        >
                          {tech}
                        </Badge>
                      </Link>
                    ))
                  ) : (
                    <Badge
                      variant="outline"
                      className="bg-white/80 text-slate-800 border-slate-300 px-3 py-1"
                    >
                      Various
                    </Badge>
                  )}
                </div>
              </div>
            )}

            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="flex flex-col gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                  >
                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                    <line x1="16" x2="16" y1="2" y2="6" />
                    <line x1="8" x2="8" y1="2" y2="6" />
                    <line x1="3" x2="21" y1="10" y2="10" />
                  </svg>
                  <span>
                    <span className="font-medium">Created:</span> {formatDate(project.created_at)}
                  </span>
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
                    className="h-3.5 w-3.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>
                    <span className="font-medium">Updated:</span> {formatDate(project.updated_at)}
                  </span>
                </div>
              </div>
            </div>

            {hasReadme && (
              <div className="mt-4 pt-4 border-t border-slate-200">
                <button
                  onClick={() => toggleReadme(project.id)}
                  className="flex items-center gap-2 text-sky-600 hover:text-sky-700 font-semibold text-sm transition-colors w-full text-left"
                >
                  <span>README</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`h-4 w-4 transition-transform duration-200 ${isReadmeExpanded ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <AnimatePresence>
                  {isReadmeExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 bg-slate-50 rounded-lg border border-slate-200 overflow-hidden">
                        <div className="max-h-64 overflow-y-auto p-4">
                          <pre className="whitespace-pre-wrap text-xs text-slate-700 font-mono leading-relaxed overflow-x-auto">
                            {cleanReadme(project.readme_excerpt)}
                          </pre>
                        </div>
                        {project.readme_url && (
                          <div className="px-4 pb-4 border-t border-slate-200 pt-3">
                            <a
                              href={project.readme_url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-block text-xs text-sky-600 hover:text-sky-700 font-medium"
                            >
                              View full README on GitHub →
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    );
  }

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
            Projects
          </h1>
          <p className="leading-relaxed text-slate-700 text-[clamp(1.15rem,2.5vw,1.6rem)]">
            A mix of full-stack applications, internal tools, and learning projects that show how I approach real-world
            problems with code.
          </p>
        </motion.header>

        {loading && (
          <div className="w-full max-w-6xl text-center py-12">
            <p className="text-slate-600 text-lg">Loading projects...</p>
          </div>
        )}

        {error && (
          <div className="w-full max-w-6xl text-center py-12">
            <p className="text-red-600 text-lg">Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="w-full max-w-6xl space-y-12">
            {completedProjects.length > 0 && (
              <div className="space-y-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-semibold text-slate-900 text-left"
                >
                  Completed Projects
                </motion.h2>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                  {completedProjects.map((project, index) => renderProjectCard(project, index))}
                </div>
              </div>
            )}

            {ongoingProjects.length > 0 && (
              <div className="space-y-6">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl md:text-3xl font-semibold text-slate-900 text-left"
                >
                  Ongoing Projects
                </motion.h2>
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                  {ongoingProjects.map((project, index) =>
                    renderProjectCard(project, index + completedProjects.length)
                  )}
                </div>
              </div>
            )}

            {completedProjects.length === 0 && ongoingProjects.length === 0 && (
              <div className="w-full text-center py-12">
                <p className="text-slate-600 text-lg">No projects found.</p>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
