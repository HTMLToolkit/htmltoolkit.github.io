import type { OptionsSvelteSitemap } from "svelte-sitemap"

const config: OptionsSvelteSitemap = {
  domain: "https://htmltoolkit.github.io",
  changeFreq: "weekly",
  resetTime: true,
  trailingSlashes: false,
  ignore: ["404.html"],
}

export default config
