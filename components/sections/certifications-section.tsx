import { Award, ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { certifications } from "@/lib/portfolio-data"

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="scroll-mt-16 border-b border-border bg-card/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="03 — Certifications"
          title="Certifications"
          description="Credentials from leading providers. Replace these placeholders with your verified certifications."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                  <Award className="size-5" aria-hidden="true" />
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {cert.date}
                </span>
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{cert.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {cert.organisation}
              </p>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary transition-opacity hover:opacity-80"
              >
                View credential
                <ExternalLink className="size-3.5" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
