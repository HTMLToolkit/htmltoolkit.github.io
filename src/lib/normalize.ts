const canonicalSegments: Record<string, string> = {
  about: "about",
  blog: "blog",
  search: "search",
  "sitemap.xml": "sitemap.xml",
  "rss.xml": "rss.xml",
  beta: "beta",
  htmlplayer: "HTMLPlayer",
  htmlrunner: "HTMLRunner",
  htmlreader: "HTMLReader",
  htmlnotes: "HTMLNotes",
  htmleditor: "HTMLEditor",
  htmlpreview: "HTMLPreview",
  htmltrack: "HTMLTrack",
  htmlchat: "HTMLChat",
  cbzreader: "CBZReader",
  prism: "Prism",
  htmlvisualizer: "HTMLVisualizer",
  lrcgetter: "LRCGetter",
}

export function canonicalizePath(pathname: string): string | null {
  const trailing = pathname.length > 1 && pathname.endsWith("/")
  const segments = pathname.split("/").filter(Boolean)

  let changed = false
  const fixed = segments.map((segment) => {
    const canonical = canonicalSegments[segment.toLowerCase()]
    if (canonical && canonical !== segment) {
      changed = true
      return canonical
    }
    return segment
  })

  if (!changed) return null
  return "/" + fixed.join("/") + (trailing ? "/" : "")
}
