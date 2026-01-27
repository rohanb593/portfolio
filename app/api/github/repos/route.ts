// Required for Cloudflare Pages - must use Edge Runtime
export const runtime = 'edge';

export async function GET() {
  try {
    const username = "rohanb593";
    const githubToken = process.env.GITHUB_TOKEN; // Optional: for higher rate limits
    
    // Debug: Log if token is present (don't log the actual token for security)
    if (githubToken) {
      console.log("GitHub token found, using authenticated requests");
    } else {
      console.log("No GitHub token found, using unauthenticated requests (60 req/hour limit)");
    }

    // Fetch user's public repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
      {
        headers: {
          ...(githubToken && { Authorization: `Bearer ${githubToken}` }),
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 0 }, // Always fetch fresh data from GitHub
      }
    );

    if (!reposResponse.ok) {
      const errorText = await reposResponse.text();
      console.error("GitHub API error:", reposResponse.status, errorText);
      throw new Error(`GitHub API error: ${reposResponse.status} - ${errorText}`);
    }

    const repos = await reposResponse.json();

    // Filter out forks and get detailed info for each repo
    // Also filter out repositories that no longer exist or are deleted
    const publicRepos = repos.filter((repo: any) => {
      // Filter out forks
      if (repo.fork) return false;
      
      // Filter out specific repositories that no longer exist or shouldn't be shown
      const excludedRepos = [
        'inventory-management', 
        'Inventory-Management-System',
        'inventory-manager-hyperlink'
      ];
      if (excludedRepos.some(name => repo.name.toLowerCase().includes(name.toLowerCase()))) {
        return false;
      }
      
      return true;
    });

    // Fetch additional details for each repo (languages, README)
    // Process in batches to avoid rate limiting
    const batchSize = 5;
    const reposWithDetails: any[] = [];

    for (let i = 0; i < publicRepos.length; i += batchSize) {
      const batch = publicRepos.slice(i, i + batchSize);
      const batchResults = await Promise.all(
        batch.map(async (repo: any) => {
          try {
            // Fetch languages
            let languages = {};
            try {
              const languagesResponse = await fetch(repo.languages_url, {
                headers: {
                  ...(githubToken && { Authorization: `Bearer ${githubToken}` }),
                  Accept: "application/vnd.github.v3+json",
                },
                next: { revalidate: 0 }, // Always fetch fresh data
              });
              if (languagesResponse.ok) {
                languages = await languagesResponse.json();
              }
            } catch (error) {
              console.warn(`Failed to fetch languages for ${repo.name}:`, error);
            }

            // Fetch README
            let readmeContent = "";
            let readmeHtml = "";
            try {
              const readmeResponse = await fetch(
                `https://api.github.com/repos/${username}/${repo.name}/readme`,
                {
                  headers: {
                    ...(githubToken && { Authorization: `Bearer ${githubToken}` }),
                    Accept: "application/vnd.github.v3+json",
                  },
                  next: { revalidate: 0 }, // Always fetch fresh data
                }
              );
              if (readmeResponse.ok) {
                const readmeData = await readmeResponse.json();
                // Decode base64 content (Edge Runtime compatible)
                // atob returns a binary string, decode it to UTF-8
                const binaryString = atob(readmeData.content);
                readmeContent = new TextDecoder('utf-8').decode(
                  Uint8Array.from(binaryString, (c) => c.charCodeAt(0))
                );
                // Get HTML version if available
                if (readmeData.html_url) {
                  readmeHtml = readmeData.html_url;
                }
              }
            } catch (error) {
              // README might not exist, that's okay
            }

            // Get top languages by bytes
            const languageEntries = Object.entries(languages).sort(
              (a: any, b: any) => b[1] - a[1]
            );
            const topLanguages = languageEntries.slice(0, 5).map(([lang]) => lang);

            // Extract status from README (look for status indicator at the top)
            let status = "";
            if (readmeContent) {
              const firstLines = readmeContent.split("\n").slice(0, 15).join("\n");
              // Look for status patterns like:
              // - "**Status:** ✅ Completed"
              // - "Status: ✅ Completed"
              // - "Status: completed"
              // - "[Status: completed]"
              // - "## Status: completed"
              
              // Pattern to match: **Status:** followed by optional emoji/symbols and then the status word
              // This handles: **Status:** ✅ Completed
              // The pattern: \*\*status[:\s]*\*\* matches "**Status:**"
              // Then [^\w]* matches any non-word characters (like emojis)
              // Then \s* matches whitespace
              // Then ([a-z]+) captures the status word (case-insensitive)
              const boldStatusMatch = firstLines.match(/\*\*status[:\s]*\*\*[:\s]*[^\w]*\s*([a-z]+)/i);
              if (boldStatusMatch && boldStatusMatch[1]) {
                status = boldStatusMatch[1].toLowerCase().trim();
              } else {
                // Try other patterns - match status: followed by optional non-word chars and then the status word
                const statusPatterns = [
                  /status[:\s]+[^\w]*\s*([a-z]+)/i,  // Status: ✅ Completed or Status: Completed
                  /\[status[:\s]*([a-z]+)\]/i,  // [Status: completed]
                  /##\s*status[:\s]*([a-z]+)/i,  // ## Status: completed
                ];
                
                for (const pattern of statusPatterns) {
                  const match = firstLines.match(pattern);
                  if (match && match[1]) {
                    status = match[1].toLowerCase().trim();
                    break;
                  }
                }
              }
              
              // Debug logging (remove in production if needed)
              if (status) {
                console.log(`Found status "${status}" for repo ${repo.name}`);
              }
            }

            // Extract first 30 lines from README
            const readmeLines = readmeContent
              .split("\n")
              .slice(0, 30)
              .join("\n")
              .trim() || "";

            return {
              id: repo.id,
              name: repo.name,
              full_name: repo.full_name,
              description: repo.description,
              url: repo.html_url,
              homepage: repo.homepage,
              language: repo.language,
              languages: topLanguages,
              languagesData: languages,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              created_at: repo.created_at,
              updated_at: repo.updated_at,
              pushed_at: repo.pushed_at,
              readme_excerpt: readmeLines,
              readme_url: readmeHtml,
              topics: repo.topics || [],
              archived: repo.archived,
              private: repo.private,
              status: status,
            };
          } catch (error) {
            console.error(`Error processing repo ${repo.name}:`, error);
            // Return basic info even if details fail
            return {
              id: repo.id,
              name: repo.name,
              full_name: repo.full_name,
              description: repo.description,
              url: repo.html_url,
              homepage: repo.homepage,
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
              topics: repo.topics || [],
              archived: repo.archived,
              private: repo.private,
              status: "",
            };
          }
        })
      );
      reposWithDetails.push(...batchResults);
      
      // Small delay between batches to avoid rate limiting
      if (i + batchSize < publicRepos.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }

    // Sort by most recently updated
    reposWithDetails.sort(
      (a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    );

    return Response.json(reposWithDetails);
  } catch (error: any) {
    console.error("Error fetching GitHub repos:", error);
    return Response.json(
      { error: "Failed to fetch repositories", message: error.message },
      { status: 500 }
    );
  }
}
