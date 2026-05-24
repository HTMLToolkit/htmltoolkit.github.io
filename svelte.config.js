import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import { mdsvex } from "mdsvex"
import rehypeExternalLinks from "rehype-external-links"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkEmoji from "remark-emoji"
import remarkGfm from "remark-gfm"

const extensions = [".svelte", ".md"]
const markdownExtensions = [".md"]

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: "index.html",
      strict: false,
    }),
    // allow up to 150kb of style to be inlined with the HTML
    // Faster FCP (First Contentful Paint) by reducing the number of requests
    inlineStyleThreshold: 150000,
  },
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: markdownExtensions,
      remarkPlugins: [remarkGfm, remarkEmoji],
      rehypePlugins: [
        rehypeExternalLinks,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "prepend",
            properties: {
              className: ["heading-link"],
              title: "Permalink",
              ariaHidden: "true",
            },
            content: {
              type: "element",
              tagName: "span",
              properties: {},
              children: [{ type: "text", value: "# " }],
            },
          },
        ],
      ],
    }),
  ],
  extensions: extensions,
}

export default config
