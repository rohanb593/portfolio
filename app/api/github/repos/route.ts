/**
 * GitHub Repos API – public repos via token, GraphQL-optimised.
 * README status: "**Status:** ✅ Completed" → Completed; else → Ongoing.
 * Returns: repo info, language percentages, README (dropdown), created/updated dates.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const GITHUB_GRAPHQL = "https://api.github.com/graphql";
const USERNAME = "rohanb593";

interface ProcessedProject {
  id: string;
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

/**
 * Detect status from README. Only the first line is the status line, e.g. "**Status:** ✅ Completed".
 * Completed = first line has "status" and then "completed"/"complete"/"done"/"finished" as the status value.
 * Everything else (including "**Status:** Ongoing", no status line, or no README) = ongoing.
 */
function getStatusFromReadme(readmeContent: string): "completed" | "ongoing" {
  const normalized = readmeContent.replace(/\r\n/g, "\n").trim();
  const firstLine = normalized.split("\n").find((line) => line.trim().length > 0);
  if (!firstLine) return "ongoing";

  const trimmed = firstLine.trim();
  const lower = trimmed.toLowerCase();
  const statusIdx = lower.indexOf("status");
  if (statusIdx === -1) return "ongoing";

  // Completion words must appear *after* "status" on the line (so "**Status:** ✅ Completed" counts, "Incomplete" or "see status" earlier doesn't)
  const afterStatus = trimmed.slice(statusIdx);
  const completedMatch = afterStatus.match(/\b(complete|completed|done|finished)\b/i);
  if (completedMatch) return "completed";

  return "ongoing";
}

/** Fetch README via REST when GraphQL didn't return one (e.g. different filename). */
async function fetchReadmeRest(
  repoName: string,
  token: string,
  defaultBranch: string
): Promise<{ content: string; readmeUrl: string } | null> {
  const res = await fetch(
    `https://api.github.com/repos/${USERNAME}/${repoName}/readme`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.raw",
      },
      cache: "no-store",
    }
  );
  if (!res.ok) return null;
  const content = await res.text();
  const readmeUrl = `https://github.com/${USERNAME}/${repoName}/blob/${defaultBranch}/README.md`;
  return { content, readmeUrl };
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  if (!token?.trim()) {
    return Response.json(
      {
        error: "GitHub token not configured",
        message: "Set GITHUB_TOKEN in Vercel Environment Variables.",
      },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const query = `
      query Repos($login: String!, $first: Int!, $after: String) {
        user(login: $login) {
          repositories(
            first: $first
            after: $after
            ownerAffiliations: OWNER
            isFork: false
            orderBy: { field: UPDATED_AT, direction: DESC }
          ) {
            pageInfo { hasNextPage endCursor }
            nodes {
              id
              name
              description
              url
              isPrivate
              primaryLanguage { name }
              languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
                edges { size node { name color } }
              }
              stargazerCount
              forkCount
              createdAt
              updatedAt
              pushedAt
              defaultBranchRef { name }
              readme: object(expression: "HEAD:README.md") {
                ... on Blob { text }
              }
            }
          }
        }
      }
    `;

    const allNodes: any[] = [];
    let cursor: string | null = null;

    do {
      const res: Response = await fetch(GITHUB_GRAPHQL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          query,
          variables: {
            login: USERNAME,
            first: 100,
            after: cursor,
          },
        }),
        cache: "no-store",
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`GitHub GraphQL ${res.status}: ${text.slice(0, 200)}`);
      }

      const data: {
        errors?: unknown[];
        data?: { user?: { repositories?: { pageInfo?: { hasNextPage?: boolean; endCursor?: string }; nodes?: unknown[] } } };
      } = await res.json();
      if (data.errors?.length) {
        throw new Error(`GraphQL: ${JSON.stringify(data.errors)}`);
      }

      const repos = data.data?.user?.repositories;
      if (!repos?.nodes) break;

      allNodes.push(...repos.nodes);
      const hasNextPage = repos.pageInfo?.hasNextPage ?? false;
      const nextCursor = repos.pageInfo?.endCursor ?? null;
      cursor = hasNextPage ? (nextCursor ?? null) : null;
    } while (cursor);

    const publicRepos = allNodes.filter((r: any) => !r.isPrivate);
    const processed: ProcessedProject[] = [];

    for (let i = 0; i < publicRepos.length; i++) {
      const r = publicRepos[i];
      const id = r.id && String(r.id).trim() ? r.id : `repo-${r.name}-${i}`;

      const languagesData: Record<string, number> = {};
      const languages: string[] = [];
      if (r.languages?.edges) {
        for (const e of r.languages.edges) {
          const name = e.node?.name;
          if (name) {
            languagesData[name] = e.size ?? 0;
            languages.push(name);
          }
        }
        languages.sort((a, b) => (languagesData[b] ?? 0) - (languagesData[a] ?? 0));
      }
      if (languages.length === 0 && r.primaryLanguage?.name) {
        languages.push(r.primaryLanguage.name);
        languagesData[r.primaryLanguage.name] = 1;
      }

      const defaultBranch = r.defaultBranchRef?.name ?? "HEAD";
      let readmeContent: string | null = r.readme?.text ?? null;
      let readmeUrl = readmeContent
        ? `${r.url}/blob/${defaultBranch}/README.md`
        : "";

      if (!readmeContent && r.name) {
        const rest = await fetchReadmeRest(r.name, token, defaultBranch);
        if (rest) {
          readmeContent = rest.content;
          readmeUrl = rest.readmeUrl;
        }
      }

      let readmeExcerpt = "";
      let status = "ongoing";

      if (readmeContent) {
        readmeExcerpt =
          readmeContent.length > 100_000
            ? readmeContent.slice(0, 100_000) + "\n\n... (truncated)"
            : readmeContent;
        status = getStatusFromReadme(readmeContent);
      }

      processed.push({
        id,
        name: r.name ?? "",
        description: r.description ?? null,
        url: r.url ?? "",
        language: r.primaryLanguage?.name ?? null,
        languages,
        languagesData,
        stars: Number(r.stargazerCount) ?? 0,
        forks: Number(r.forkCount) ?? 0,
        created_at: r.createdAt ?? "",
        updated_at: r.updatedAt ?? "",
        pushed_at: r.pushedAt ?? "",
        readme_excerpt: readmeExcerpt,
        readme_url: readmeUrl,
        status,
      });
    }

    processed.sort(
      (a, b) =>
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );

    return Response.json(processed, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (err: any) {
    console.error("[api/github/repos]", err?.message, err?.stack);
    return Response.json(
      {
        error: "Failed to fetch repositories",
        message: err?.message ?? "Unknown error",
      },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
