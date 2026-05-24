export const blogInfo = {
  name: "Blog",
  description: "Our blog posts.",
}

export interface BlogPost {
  title: string
  description: string
  link: string
  date: string | null
  parsedDate: Date | null
  updated?: string | null
  tags?: string[]
  coverImage?: string
  featured?: boolean
}

type Frontmatter = {
  title?: string
  slug?: string
  excerpt?: string
  description?: string
  date?: string
  updated?: string | null
  hidden?: boolean
  tags?: string[]
  coverImage?: string
  featured?: boolean
}

type MarkdownModule = {
  metadata?: Frontmatter
}

const markdownPosts = import.meta.glob("./**/+page.md", {
  eager: true,
}) as Record<string, MarkdownModule>

const parseDate = (dateString?: string): Date | null => {
  if (!dateString) return null
  const parsed = new Date(dateString)
  return Number.isNaN(parsed.getTime()) ? null : parsed
}

const buildSlug = (path: string, metadata: Frontmatter): string => {
  if (metadata.slug) return metadata.slug
  const match = path.match(/\(posts\)\/([^/]+)\/\+page\.md$/)
  return match?.[1] ?? ""
}

export const sortedBlogPosts: BlogPost[] = Object.entries(markdownPosts)
  .reduce<BlogPost[]>((acc, [path, mod]) => {
    const metadata = mod.metadata
    if (!metadata || metadata.hidden) return acc

    const slug = buildSlug(path, metadata)
    if (!slug || !metadata.title) return acc

    const parsedDate = parseDate(metadata.date)

    acc.push({
      title: metadata.title,
      description: metadata.excerpt ?? metadata.description ?? "",
      link: `/blog/${slug}`,
      date: metadata.date ?? null,
      parsedDate,
      updated: metadata.updated,
      tags: metadata.tags ?? [],
      coverImage: metadata.coverImage,
      featured: metadata.featured ?? false,
    })

    return acc
  }, [])
  .sort((a, b) => {
    const aTime = a.parsedDate?.getTime() ?? 0
    const bTime = b.parsedDate?.getTime() ?? 0
    return bTime - aTime
  })
