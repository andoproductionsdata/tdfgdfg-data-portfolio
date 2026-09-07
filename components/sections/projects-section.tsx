import { SectionHeading } from "@/components/section-heading"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion-wrapper"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/portfolio-data"

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="04 — Projects"
            title="Featured Projects"
            description="Selected analytics and reporting projects. Click a card to read the full case study, see the dashboards, and learn about the business impact."
          />
        </FadeIn>
        <FadeInStagger className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <FadeInItem key={project.slug}>
              <ProjectCard project={project} />
            </FadeInItem>
          ))}
        </FadeInStagger>
      </div>
    </section>
  )
}
