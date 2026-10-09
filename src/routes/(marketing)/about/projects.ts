export interface Project {
  slug: string
  name: string
  tagline: string
  summary: string
  repo: string
  live: string | null
  beta: string | null
  tech: string[]
  license: string
  featured: boolean
  kind: "tool" | "experiment"
  icon: string
  screenshots: string[]
}

type Frontmatter = {
  title?: string
  slug?: string
  tagline?: string
  summary?: string
  excerpt?: string
  description?: string
  repo?: string
  live?: string
  beta?: string
  tech?: string[]
  license?: string
  featured?: boolean
  kind?: string
  icon?: string
  screenshots?: string[]
  hidden?: boolean
}

type MarkdownModule = {
  metadata?: Frontmatter
}

const markdownProjects = import.meta.glob("./**/+page.md", {
  eager: true,
}) as Record<string, MarkdownModule>

const buildSlug = (path: string, metadata: Frontmatter): string => {
  if (metadata.slug) return metadata.slug
  const match = path.match(/\(projects\)\/([^/]+)\/\+page\.md$/)
  return match?.[1] ?? ""
}

export const projects: Project[] = Object.entries(markdownProjects)
  .reduce<Project[]>((acc, [path, mod]) => {
    const metadata = mod.metadata
    if (!metadata || metadata.hidden) return acc

    const slug = buildSlug(path, metadata)
    if (!slug || !metadata.title) return acc

    acc.push({
      slug,
      name: metadata.title,
      tagline: metadata.tagline ?? "",
      summary:
        metadata.summary ?? metadata.excerpt ?? metadata.description ?? "",
      repo: metadata.repo ?? "",
      live: metadata.live ?? null,
      beta: metadata.beta ?? null,
      tech: metadata.tech ?? [],
      license: metadata.license ?? "MIT",
      featured: metadata.featured ?? false,
      kind: (metadata.kind as Project["kind"]) ?? "tool",
      icon: typeof metadata.icon === "string" ? metadata.icon : "generic",
      screenshots: metadata.screenshots ?? [],
    })

    return acc
  }, [])
  .sort((a, b) => {
    if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1
    return a.name.localeCompare(b.name)
  })

export const featuredProject: Project =
  projects.find((project) => project.featured) ?? projects[0]

export const sortedProjects: Project[] = projects

export function getProject(slug: string): Project | undefined {
  const needle = slug.toLowerCase()
  return projects.find((project) => project.slug.toLowerCase() === needle)
}
