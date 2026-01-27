export const runtime = 'edge';

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

export async function GET() {
  try {
    const username = "rohanb593";
    const githubToken = process.env.GITHUB_TOKEN;

    if (!githubToken) {
      return Response.json(
        { error: "GitHub token not configured" },
        { status: 500 }
      );
    }

    // GraphQL query to fetch repos with languages and README in one request
    const graphqlQuery = `
      query GetUserRepositories($username: String!, $first: Int!) {
        user(login: $username) {
          repositories(
            first: $first
            ownerAffiliations: OWNER
            isFork: false
            orderBy: { field: UPDATED_AT, direction: DESC }
          ) {
            nodes {
              id
              name
              description
              url
              isPrivate
              primaryLanguage {
                name
              }
              languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
                edges {
                  size
                  node {
                    name
                    color
                  }
                }
              }
              stargazerCount
              forkCount
              createdAt
              updatedAt
              pushedAt
              defaultBranchRef {
                name
              }
              readme1: object(expression: "HEAD:README.md") {
                ... on Blob {
                  text
                  oid
                }
              }
              readme2: object(expression: "HEAD:readme.md") {
                ... on Blob {
                  text
                  oid
                }
              }
              readme3: object(expression: "HEAD:Readme.md") {
                ... on Blob {
                  text
                  oid
                }
              }
              readme4: object(expression: "HEAD:README.MD") {
                ... on Blob {
                  text
                  oid
                }
              }
            }
          }
        }
      }
    `;

    // Execute GraphQL query
    const graphqlResponse = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${githubToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: graphqlQuery,
        variables: {
          username: username,
          first: 100,
        },
      }),
    });

    if (!graphqlResponse.ok) {
      throw new Error(`GraphQL API error: ${graphqlResponse.status}`);
    }

    const graphqlData = await graphqlResponse.json();

    if (graphqlData.errors) {
      throw new Error(`GraphQL errors: ${JSON.stringify(graphqlData.errors)}`);
    }

    const repos = graphqlData.data?.user?.repositories?.nodes || [];

    // Process repos
    const processedProjects = repos
      .filter((repo: any) => !repo.isPrivate) // Only return public repos
      .map((repo: any, index: number) => {
        // Ensure ID is always a unique string
        // Use GraphQL ID if available, otherwise fallback to URL or name-based ID
        let uniqueId: string;
        if (repo.id && typeof repo.id === 'string' && repo.id.trim() !== '') {
          uniqueId = repo.id;
        } else if (repo.url) {
          // Use URL as fallback (it's always unique)
          uniqueId = `repo-${repo.url}`;
        } else {
          // Last resort: use name + index
          uniqueId = `repo-${repo.name || 'unknown'}-${index}`;
        }

        // Process languages from GraphQL response
        const languagesData: Record<string, number> = {};
        const languages: string[] = [];
        
        if (repo.languages?.edges) {
          repo.languages.edges.forEach((edge: any) => {
            languagesData[edge.node.name] = edge.size;
          });
          
          const entries = Object.entries(languagesData).sort(
            (a: any, b: any) => b[1] - a[1]
          );
          entries.slice(0, 5).forEach(([lang]) => languages.push(lang));
        }

        // Extract README content - try multiple filename variations
        let readmeExcerpt = "";
        let readmeUrl = "";
        let status = "";
        let readmeContent = null;
        let readmeFilename = "README.md";

        // Try different README filename variations
        if (repo.readme1?.text) {
          readmeContent = repo.readme1.text;
          readmeFilename = "README.md";
        } else if (repo.readme2?.text) {
          readmeContent = repo.readme2.text;
          readmeFilename = "readme.md";
        } else if (repo.readme3?.text) {
          readmeContent = repo.readme3.text;
          readmeFilename = "Readme.md";
        } else if (repo.readme4?.text) {
          readmeContent = repo.readme4.text;
          readmeFilename = "README.MD";
        }
        
        if (readmeContent) {
          readmeExcerpt = readmeContent;
          const defaultBranch = repo.defaultBranchRef?.name || "HEAD";
          readmeUrl = `${repo.url}/blob/${defaultBranch}/${readmeFilename}`;

          // Extract status from top of README (first 40 lines for better coverage)
          const firstLines = readmeContent.split("\n").slice(0, 40).join("\n");
          
          // More comprehensive status patterns - check for completed/done/finished
          // Handle formats like: **Status:** ✅ Completed, **Status:** Completed, Status: Completed, etc.
          const completedPatterns = [
            // **Status:** ✅ Completed (with emoji) - EXACT MATCH for "**Status:** ✅ Completed"
            // This pattern specifically handles: **Status:** followed by space+emoji+space+word
            /\*\*[Ss]tatus\s*:\s*\*\*\s+[^\w\s]+\s+(complete|completed|done|finished)/i,
            // **Status:** ✅ Completed (more flexible - any chars between ** and word)
            /\*\*[Ss]tatus\s*:\s*\*\*\s*[^\w\s]*\s*(complete|completed|done|finished)/i,
            // **Status:** Completed (without emoji, with space)
            /\*\*[Ss]tatus\s*:\s*\*\*\s+(complete|completed|done|finished)/i,
            // **Status:**Completed (without emoji, no space)
            /\*\*[Ss]tatus\s*:\s*\*\*(complete|completed|done|finished)/i,
            // **Status: Completed** (status word inside bold)
            /\*\*[Ss]tatus\s*:\s*(complete|completed|done|finished)\s*\*\*/i,
            // Status: ✅ Completed or Status: Completed (without bold markers)
            /[Ss]tatus\s*:\s+[^\w\s]+\s+(complete|completed|done|finished)/i,
            /[Ss]tatus\s*:\s*[^\w\s]*\s*(complete|completed|done|finished)/i,
            /[Ss]tatus\s*:\s+(complete|completed|done|finished)/i,
            // [Status: completed] or ## Status: completed
            /\[[Ss]tatus\s*:\s*(complete|completed|done|finished)\]/i,
            /##\s*[Ss]tatus\s*:\s*(complete|completed|done|finished)/i,
            // Status = completed or Status=completed
            /[Ss]tatus\s*[=:]\s*(complete|completed|done|finished)/i,
            // Standalone at start of line
            /^(complete|completed|done|finished)[\s:]/im,
          ];
          
          // Check for ongoing/in-progress patterns
          const ongoingPatterns = [
            // **Status:** Ongoing (with or without emoji)
            /\*\*status\s*:\s*\*\*\s*[^\w\s]*\s*(ongoing|in.?progress|in.?development|active|wip|work.?in.?progress)/i,
            /\*\*status\s*:\s*\*\*\s*(ongoing|in.?progress|in.?development|active|wip|work.?in.?progress)/i,
            // Status: Ongoing
            /status\s*:\s*[^\w\s]*\s*(ongoing|in.?progress|in.?development|active|wip|work.?in.?progress)/i,
            /status\s*:\s*(ongoing|in.?progress|in.?development|active|wip|work.?in.?progress)/i,
            // [Status: ongoing] or ## Status: ongoing
            /\[status\s*:\s*(ongoing|in.?progress|in.?development|active|wip|work.?in.?progress)\]/i,
            /##\s*status\s*:\s*(ongoing|in.?progress|in.?development|active|wip|work.?in.?progress)/i,
            // Status = ongoing
            /status\s*[=:]\s*(ongoing|in.?progress|in.?development|active|wip|work.?in.?progress)/i,
          ];
          
          // Check completed patterns first (case-insensitive)
          for (const pattern of completedPatterns) {
            const match = firstLines.match(pattern);
            if (match && match[1]) {
              status = "completed";
              break;
            }
          }
          
          // If not completed, check for ongoing
          if (!status) {
            for (const pattern of ongoingPatterns) {
              const match = firstLines.match(pattern);
              if (match && match[1]) {
                status = "ongoing";
                break;
              }
            }
          }
        }

        return {
          id: uniqueId, // Always a unique string identifier
          name: repo.name,
          description: repo.description,
          url: repo.url,
          language: repo.primaryLanguage?.name || null,
          languages: languages.length > 0 
            ? languages 
            : (repo.primaryLanguage?.name ? [repo.primaryLanguage.name] : []),
          languagesData,
          stars: repo.stargazerCount,
          forks: repo.forkCount,
          created_at: repo.createdAt,
          updated_at: repo.updatedAt,
          pushed_at: repo.pushedAt,
          readme_excerpt: readmeExcerpt,
          readme_url: readmeUrl,
          status,
        };
      });

    // Sort by most recently pushed
    processedProjects.sort(
      (a: ProcessedProject, b: ProcessedProject) => 
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    );

    return Response.json(processedProjects);
  } catch (error: any) {
    console.error("API Error:", error);
    return Response.json(
      {
        error: "Failed to fetch repositories",
        message: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
