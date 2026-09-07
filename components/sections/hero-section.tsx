import { Mail, Phone, Download, ArrowRight } from "lucide-react"
import { LinkedInIcon, GitHubIcon } from "@/components/brand-icons"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/motion-wrapper"
import { profile } from "@/lib/portfolio-data"

export function HeroSection() {
  const contacts = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: LinkedInIcon, label: "LinkedIn", href: profile.linkedin, external: true },
    { icon: GitHubIcon, label: "GitHub", href: profile.github, external: true },
  ]

  return (
    <section
      id="home"
      className="relative scroll-mt-16 overflow-hidden border-b border-border"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 0%, oklch(0.72 0.13 187 / 0.12), transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:grid-cols-[1fr_auto]">
        <FadeIn>
          <div>
            {profile.openToWork && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                </span>
                Open to Work
              </div>
            )}
            <p className="mb-4 inline-flex items-center rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-primary">
              {profile.role}
            </p>
            <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Hi, I&apos;m {profile.name}.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {profile.tagline}
            </p>
            {profile.openToWork && profile.availability && (
              <p className="mt-2 text-sm text-muted-foreground/70">
                {profile.availability}
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3">
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
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={
                  <a href="#projects">
                    View Projects
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                }
              />
            </div>

            <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
              {contacts.map(({ icon: Icon, label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="order-first lg:order-last">
          <div className="relative mx-auto aspect-square w-44 overflow-hidden rounded-2xl border border-border bg-card shadow-xl sm:w-56 lg:w-72">
            <img
              src={profile.photoUrl}
              alt={`Portrait of ${profile.name}`}
              className="h-full w-full object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
