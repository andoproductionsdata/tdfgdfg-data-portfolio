import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Project } from "@/lib/portfolio-data"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-secondary">
        <Image
          src={project.preview || "/placeholder.svg"}
          alt={`${project.title} dashboard preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        {(project.company || project.industry) && (
          <p className="mb-2 font-mono text-xs text-primary/70 tracking-wide">
            {[project.company, project.industry].filter(Boolean).join(" · ")}
          </p>
        )}
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-balance text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
        </div>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
            >
              {tool}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs font-medium text-primary group-hover:underline">
          Read case study →
        </p>
      </div>
    </Link>
  )
}
