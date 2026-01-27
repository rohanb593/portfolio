"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

// GitHub language colors (common ones)
const getLanguageColor = (language: string): string => {
  const colors: Record<string, string> = {
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
  return colors[language] || "#586e75"; // Default gray color
};

interface LanguagePercentage {
  name: string;
  percentage: number;
  bytes: number;
  color: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  url: string;
  homepage: string | null;
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
  topics: string[];
  archived: boolean;
  private: boolean;
  status: string;
}

export default function ProjectsPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedReadmes, setExpandedReadmes] = useState<Set<number>>(new Set());

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
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/github/repos");
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching repos:", err);
        setError(err instanceof Error ? err.message : "Failed to load projects");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  // Group repos by status
  const completedRepos = repos.filter(
    (repo) => repo.status && (repo.status.toLowerCase() === "completed" || repo.status.toLowerCase() === "complete")
  );
  const ongoingRepos = repos.filter(
    (repo) => !repo.status || (repo.status.toLowerCase() !== "completed" && repo.status.toLowerCase() !== "complete")
  );

  // Sort both groups by most recently pushed
  const sortByDate = (a: GitHubRepo, b: GitHubRepo) => 
    new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime();
  
  completedRepos.sort(sortByDate);
  ongoingRepos.sort(sortByDate);

  const formatTechStack = (languages: string[]): string => {
    if (languages.length === 0) return "Various";
    return languages.join(" · ");
  };

  const calculateLanguagePercentages = (languagesData: Record<string, number>): LanguagePercentage[] => {
    if (!languagesData || Object.keys(languagesData).length === 0) {
      return [];
    }

    const totalBytes = Object.values(languagesData).reduce((sum, bytes) => sum + bytes, 0);
    if (totalBytes === 0) return [];

    const percentages: LanguagePercentage[] = Object.entries(languagesData)
      .map(([name, bytes]) => ({
        name,
        percentage: (bytes / totalBytes) * 100,
        bytes,
        color: getLanguageColor(name),
      }))
      .sort((a, b) => b.percentage - a.percentage); // Sort by percentage descending

    return percentages;
  };

  const toggleReadme = (repoId: number) => {
    setExpandedReadmes((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(repoId)) {
        newSet.delete(repoId);
      } else {
        newSet.add(repoId);
      }
      return newSet;
    });
  };

  const formatReadmeContent = (content: string): string => {
    // Remove status lines and clean up the content
    let formatted = content
      .replace(/\*\*status[:\s]*\*\*[:\s]*[^\n]*/gi, '')
      .replace(/status[:\s]+[^\n]*/gi, '')
      .replace(/\[status[:\s]*[^\]]*\]/gi, '')
      .replace(/##\s*status[:\s]*[^\n]*/gi, '')
      .trim();
    
    // Remove excessive blank lines
    formatted = formatted.replace(/\n{3,}/g, '\n\n');
    
    return formatted;
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const renderProjectCard = (repo: GitHubRepo, index: number) => {
    const techStack = formatTechStack(repo.languages.length > 0 ? repo.languages : repo.language ? [repo.language] : []);
    const displayLanguages = repo.languages.length > 0 ? repo.languages : repo.language ? [repo.language] : [];
    const isReadmeExpanded = expandedReadmes.has(repo.id);
    const hasReadme = repo.readme_excerpt && repo.readme_excerpt.trim().length > 0;
    const languagePercentages = calculateLanguagePercentages(repo.languagesData);

    return (
      <motion.div
        key={repo.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="h-full p-6 md:p-8 shadow-sm border border-slate-200/50">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl mb-2 text-left">
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-900 hover:text-sky-900 hover:no-underline"
              >
                {repo.name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
              </a>
            </CardTitle>
            <CardDescription className="text-lg md:text-xl text-left text-sky-600 font-medium">
              {techStack}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-left">
            {repo.description && (
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                {repo.description}
              </p>
            )}
            
            {/* Languages Section with Percentage Bar */}
            {languagePercentages.length > 0 ? (
              <div className="mb-4">
                <p className="text-sm font-semibold text-slate-600 mb-3 uppercase tracking-[0.18em]">
                  Languages
                </p>
                
                {/* Language Bar */}
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

                {/* Language Legend */}
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {languagePercentages.map((lang) => (
                    <Link
                      key={lang.name}
                      href={`/tech#${slugify(lang.name)}`}
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
                      <Link key={tech} href={`/tech#${slugify(tech)}`}>
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

            {/* Project Dates */}
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
                    <span className="font-medium">Created:</span> {formatDate(repo.created_at)}
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
                    <span className="font-medium">Updated:</span> {formatDate(repo.updated_at)}
                  </span>
                </div>
              </div>
            </div>

            {/* README Toggle Button */}
            {hasReadme && (
              <div className="mt-4 pt-4 border-t border-slate-200">
                <button
                  onClick={() => toggleReadme(repo.id)}
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

                {/* README Content */}
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
                            {formatReadmeContent(repo.readme_excerpt)}
                          </pre>
                        </div>
                        {repo.readme_url && (
                          <div className="px-4 pb-4 border-t border-slate-200 pt-3">
                            <a
                              href={repo.readme_url}
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
  };

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
            {/* Completed Projects Section */}
            {completedRepos.length > 0 && (
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
                  {completedRepos.map((repo, index) => renderProjectCard(repo, index))}
                </div>
              </div>
            )}

            {/* Ongoing Projects Section */}
            {ongoingRepos.length > 0 && (
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
                  {ongoingRepos.map((repo, index) => renderProjectCard(repo, index + completedRepos.length))}
                </div>
              </div>
            )}

            {completedRepos.length === 0 && ongoingRepos.length === 0 && (
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
