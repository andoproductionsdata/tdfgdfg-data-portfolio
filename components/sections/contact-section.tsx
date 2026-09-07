import { Mail, Phone, Download } from "lucide-react"
import { LinkedInIcon, GitHubIcon } from "@/components/brand-icons"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/portfolio-data"

export function ContactSection() {
  const items = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: LinkedInIcon, label: "LinkedIn", value: "View profile", href: profile.linkedin, external: true },
    { icon: GitHubIcon, label: "GitHub", value: "View profile", href: profile.github, external: true },
  ]

  return (
    <section id="contact" className="scroll-mt-16 bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="05 — Contact"
          title="Let's work together"
          description="Looking for a data analyst who turns numbers into decisions? Reach out through any of the channels below."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {items.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                  {label}
                </span>
                <span className="block text-sm text-foreground">{value}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <Button
            size="lg"
            nativeButton={false}
            render={
              <a href={profile.resumeUrl} download>
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
            }
          />
        </div>
      </div>
    </section>
  )
}
