import config from "./portfolio-config.json"

export const profile = config.profile
export const technicalSkills = config.technicalSkills
export const tools = config.tools
export const certifications = config.certifications

export type Project = {
  slug: string
  title: string
  company?: string
  industry?: string
  role?: string
  duration?: string
  summary: string
  tools: string[]
  preview: string
  challenge: string[]
  whatIBuilt: string[]
  outcome: string[]
  keyDeliverables?: string[]
  impact?: string[]
  githubUrl?: string | null
  liveUrl?: string | null
  gallery: { src: string; caption: string }[]
}

export const projects: Project[] = config.projects as Project[]
