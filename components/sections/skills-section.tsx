import { SectionHeading } from "@/components/section-heading"
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion-wrapper"
import { technicalSkills, tools } from "@/lib/portfolio-data"

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="02 — Skills"
            title="Skills & Tools"
            description="A breakdown of the technical capabilities and platforms I use to clean, model, and visualise data."
          />
        </FadeIn>

        <div className="mt-12 space-y-12">
          <div>
            <FadeIn>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Technical Skills
              </h3>
            </FadeIn>
            <FadeInStagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {technicalSkills.map((skill) => (
                <FadeInItem key={skill.name}>
                  <div className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50 h-full">
                    <h4 className="font-semibold text-foreground">{skill.name}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </FadeInItem>
              ))}
            </FadeInStagger>
          </div>

          <FadeIn>
            <div>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Tools
              </h3>
              <ul className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-lg border border-border bg-secondary px-4 py-2 font-mono text-sm text-secondary-foreground"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
