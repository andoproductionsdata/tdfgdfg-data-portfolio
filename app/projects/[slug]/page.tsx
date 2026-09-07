import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, Download, ExternalLink, Building2, Briefcase, Clock, BarChart3 } from "lucide-react"
import { GitHubIcon } from "@/components/brand-icons"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion-wrapper"
import { projects, profile } from "@/lib/portfolio-data"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: "Project not found" }
  return {
    title: `${project.title} — ${profile.name}`,
    description: project.summary,
  }
}

function NarrativeSection({
  number,
  title,
  paragraphs,
  bullets,
  accentBullets,
  delay = 0,
}: {
  number: string
  title: string
  paragraphs: string[]
  bullets?: string[]
  accentBullets?: string[]
  delay?: number
}) {
  return (
    <FadeIn delay={delay}>
      <section className="relative pl-5 border-l-2 border-primary/30">
        <p className="font-mono text-xs text-primary mb-1 tracking-widest uppercase">
          {number}
        </p>
        <h2 className="text-2xl font-bold text-foreground mb-5">{title}</h2>
        <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        {bullets && bullets.length > 0 && (
          <ul className="mt-5 space-y-2">
            {bullets.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        )}
        {accentBullets && accentBullets.length > 0 && (
          <ul className="mt-5 space-y-2">
            {accentBullets.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2.5 text-sm text-foreground"
              >
                <BarChart3 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </section>
    </FadeIn>
  )
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const metaItems = [
    project.company && { icon: Building2, label: project.company },
    project.industry && { icon: Briefcase, label: project.industry },
    project.role && { icon: Briefcase, label: project.role },
    project.duration && { icon: Clock, label: project.duration },
  ].filter(Boolean) as { icon: typeof Building2; label: string }[]

  const [firstImage, ...remainingImages] = project.gallery

  return (
    <main className="pt-16">
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">

        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Back to portfolio
        </Link>

        {/* Project header */}
        <FadeIn delay={0.05}>
          <header className="mt-8 rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {project.title}
            </h1>

            {metaItems.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {metaItems.map(({ icon: Icon, label }) => (
                  <li key={label} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Icon className="size-3.5 shrink-0" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            )}

            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
              {project.summary}
            </p>

            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                Tools used
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-md border border-border bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </header>
        </FadeIn>

        {/* Narrative sections */}
        <div className="mt-14 space-y-14">
          <NarrativeSection
            number="01 — Background"
            title="The Challenge"
            paragraphs={project.challenge}
            delay={0.1}
          />

          <NarrativeSection
            number="02 — Solution"
            title="What I Built"
            paragraphs={project.whatIBuilt}
            bullets={project.keyDeliverables}
            delay={0.15}
          />

          <NarrativeSection
            number="03 — Results"
            title="The Outcome"
            paragraphs={project.outcome}
            accentBullets={project.impact}
            delay={0.2}
          />
        </div>

        {/* Gallery */}
        {project.gallery.length > 0 && (
          <FadeIn delay={0.1} className="mt-14">
            <section>
              <p className="font-mono text-xs text-primary mb-1 tracking-widest uppercase pl-5 border-l-2 border-primary/30">
                04 — Visuals
              </p>
              <h2 className="text-2xl font-bold text-foreground mb-6 pl-5">
                Dashboard Gallery
              </h2>

              {/* First image — full width */}
              {firstImage && (
                <figure className="overflow-hidden rounded-xl border border-border bg-card">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={firstImage.src}
                      alt={firstImage.caption || `${project.title} dashboard`}
                      fill
                      sizes="(max-width: 896px) 100vw, 896px"
                      className="object-cover"
                      priority
                    />
                  </div>
                  {firstImage.caption && (
                    <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                      {firstImage.caption}
                    </figcaption>
                  )}
                </figure>
              )}

              {/* Remaining images — 2-col grid */}
              {remainingImages.length > 0 && (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {remainingImages.map((img) => (
                    <figure key={img.src} className="overflow-hidden rounded-xl border border-border bg-card">
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={img.src}
                          alt={img.caption || `${project.title} screenshot`}
                          fill
                          sizes="(max-width: 896px) 100vw, 448px"
                          className="object-cover"
                        />
                      </div>
                      {img.caption && (
                        <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                          {img.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              )}

              {/* Empty slot placeholder if no additional images */}
              {remainingImages.length === 0 && (
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-border bg-card/50 text-center text-sm text-muted-foreground/60 p-4"
                    >
                      Add a supporting screenshot to <br />
                      <code className="mt-1 font-mono text-xs">project.gallery</code>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </FadeIn>
        )}

        {/* Footer actions */}
        <FadeIn delay={0.1}>
          <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-border pt-8">
            <Button
              nativeButton={false}
              render={
                <Link href="/#projects">
                  <ArrowLeft className="size-4" aria-hidden="true" />
                  Back to portfolio
                </Link>
              }
            />
            {project.githubUrl && (
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <GitHubIcon className="size-4" aria-hidden="true" />
                    View on GitHub
                  </a>
                }
              />
            )}
            {project.liveUrl && (
              <Button
                variant="outline"
                nativeButton={false}
                render={
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink className="size-4" aria-hidden="true" />
                    Live Demo
                  </a>
                }
              />
            )}
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <a href={profile.resumeUrl} download>
                  <Download className="size-4" aria-hidden="true" />
                  Download Resume
                </a>
              }
            />
          </div>
        </FadeIn>

      </article>
    </main>
  )
}
