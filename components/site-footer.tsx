import Link from "next/link"
import { Mail } from "lucide-react"
import { LinkedInIcon, GitHubIcon } from "@/components/brand-icons"
import { profile } from "@/lib/portfolio-data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-foreground">
            {profile.name}
          </p>
          <p className="text-sm text-muted-foreground">
            {profile.role} · Available for new opportunities
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="size-5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <GitHubIcon className="size-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
          {"\u00A9"} {new Date().getFullYear()} {profile.name}. Built with{" "}
          <Link
            href="https://v0.app"
            target="_blank"
            className="underline underline-offset-4 hover:text-foreground"
          >
            v0
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
