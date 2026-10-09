import { writable } from "svelte/store"

export const starCounts = writable<Record<string, number>>({})

let started = false

export function repoNameFromUrl(url: string): string {
  const parts = url.split("/").filter(Boolean)
  return (parts[parts.length - 1] ?? "").toLowerCase()
}

export function loadStarCounts(): void {
  if (started || typeof sessionStorage === "undefined") return
  started = true

  const cached = sessionStorage.getItem("htmltoolkit:stars")
  if (cached) {
    try {
      starCounts.set(JSON.parse(cached))
      return
    } catch {
      sessionStorage.removeItem("htmltoolkit:stars")
    }
  }

  fetch("https://api.github.com/orgs/HTMLToolkit/repos?per_page=100")
    .then((response) => (response.ok ? response.json() : []))
    .then((repos: Array<{ name: string; stargazers_count: number }>) => {
      const counts: Record<string, number> = {}
      for (const repo of repos) {
        counts[repo.name.toLowerCase()] = repo.stargazers_count
      }
      starCounts.set(counts)
      sessionStorage.setItem("htmltoolkit:stars", JSON.stringify(counts))
    })
    .catch(() => {})
}
