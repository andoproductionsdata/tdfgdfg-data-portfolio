import { SectionHeading } from "@/components/section-heading"
import { FadeIn } from "@/components/motion-wrapper"

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <FadeIn>
          <div className="grid gap-6 md:grid-cols-3 md:items-start">
            <div className="md:col-span-2 space-y-4">
              <SectionHeading eyebrow="01 — About" title="About Me" />
              <p className="text-pretty leading-relaxed text-muted-foreground">
                As a Senior Data Analyst with over 8 years of experience, I specialize in utilizing SQL, Python, and Power BI to drive data-driven decision-making. My extensive expertise enables me to uncover actionable insights that can significantly contribute to your team&apos;s success.
              </p>
            </div>
            <aside className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-foreground">
                At a glance
              </h3>
              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Focus</dt>
                  <dd className="text-foreground">
                    Analytics, BI dashboards &amp; reporting
                  </dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Core stack</dt>
                  <dd className="text-foreground">SQL · Power BI · Tableau · Python</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Status</dt>
                  <dd className="text-primary">Open to opportunities</dd>
                </div>
              </dl>
            </aside>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
