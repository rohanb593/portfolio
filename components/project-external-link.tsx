import { GithubChitengeIcon } from "@/components/github-chitenge-icon";
import { isGithubUrl } from "@/lib/is-github-url";

type ProjectExternalLinkProps = {
  href: string;
  label: string;
  patternId: string;
  projectTitle: string;
  variant?: "primary" | "secondary";
};

function ariaLabel(projectTitle: string, label: string) {
  const cleaned = label.replace(/→/g, "").trim();
  return `${projectTitle}: ${cleaned}`;
}

export function ProjectExternalLink({
  href,
  label,
  patternId,
  projectTitle,
  variant = "primary",
}: ProjectExternalLinkProps) {
  if (isGithubUrl(href)) {
    return (
      <a
        className={
          variant === "secondary"
            ? "contact-link index-accordion__project-icon-link index-accordion__project-icon-link--secondary"
            : "contact-link index-accordion__project-icon-link"
        }
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={ariaLabel(projectTitle, label)}
      >
        <GithubChitengeIcon patternId={patternId} />
      </a>
    );
  }

  return (
    <a
      className={
        variant === "secondary"
          ? "index-accordion__project-link index-accordion__project-link--secondary"
          : "index-accordion__project-link"
      }
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}
