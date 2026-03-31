/** True for github.com and *.github.com hosts (repos, orgs, pages). */
export function isGithubUrl(href: string): boolean {
  try {
    const host = new URL(href).hostname.toLowerCase();
    return host === "github.com" || host.endsWith(".github.com");
  } catch {
    return false;
  }
}
