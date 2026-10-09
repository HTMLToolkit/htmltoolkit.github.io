<p align="center">
  <a href="https://github.com/HTMLToolkit/htmltoolkit.github.io/actions/workflows/build.yml" target="_blank"><img src="https://github.com/HTMLToolkit/htmltoolkit.github.io/actions/workflows/build.yml/badge.svg?branch=main" alt="Build Status"></a>
  <a href="https://github.com/HTMLToolkit/htmltoolkit.github.io/actions/workflows/format.yml" target="_blank"><img src="https://github.com/HTMLToolkit/htmltoolkit.github.io/actions/workflows/format.yml/badge.svg?branch=main" alt="Format Check"></a>
  <a href="https://github.com/HTMLToolkit/htmltoolkit.github.io/actions/workflows/linting.yml" target="_blank"><img src="https://github.com/HTMLToolkit/htmltoolkit.github.io/actions/workflows/linting.yml/badge.svg?branch=main" alt="Linting"></a>
  <a href="https://github.com/HTMLToolkit/htmltoolkit.github.io/actions/workflows/tests.yml" target="_blank"><img src="https://github.com/HTMLToolkit/htmltoolkit.github.io/actions/workflows/tests.yml/badge.svg?branch=main" alt="Tests"></a>
  <a href="./LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-brightgreen?labelColor=32383f" alt="License"></a>
</p>

<p align="center">
  <a href="https://htmltoolkit.github.io"><strong>Organization Site</strong></a> •
  <a href="https://github.com/HTMLToolkit"><strong>All Projects</strong></a> •
  <a href="https://github.com/HTMLToolkit/htmltoolkit.github.io/issues"><strong>Issues</strong></a>
</p>

<br/>

# HTMLToolkit

The organization website and tools directory for **[HTMLToolkit](https://github.com/HTMLToolkit)**, a suite of lightweight, browser-based tools for HTML, CSS, and JavaScript.

## What's here

- **Marketing homepage** with a flagship spotlight and the full tools grid.
- **Project directory** at `/about`, plus a detail page per tool at `/about/<slug>`. Both are driven by Markdown and frontmatter.
- **Blog engine** with rich formatting, RSS, and per-post SEO.
- **Live star counts** for each tool, read from the GitHub API in the browser.
- **Site search** with no backend, indexing prerendered pages.
- **Sitemap + robots** generated at build time.
- **Case-insensitive URLs** via a 404-based normalizer, so `/BeTa/HtmLPLAyer` redirects to `/beta/HTMLPlayer`.
- **Fully static**: prerendered, hosted on GitHub Pages.

## Tech stack

- **Framework:** SvelteKit (static adapter)
- **Styling:** Tailwind CSS + DaisyUI
- **Content:** mdsvex (Markdown) with frontmatter
- **Icons:** lucide-svelte
- **Search:** Fuse.js over a build-time index
- **Hosting:** GitHub Pages via GitHub Actions

## Project structure

```text
src/
├── config.ts                          # site name, base URL, description
├── lib/
│   ├── projectIcons.ts                # icon key -> inline SVG map
│   └── normalize.ts                   # client-side URL case normalizer
└── routes/(marketing)/
    ├── +page.svelte                   # homepage
    ├── about/
    │   ├── projects.ts                # globs +page.md -> Project[]
    │   ├── +page.svelte               # project directory grid
    │   └── (projects)/
    │       ├── +layout.svelte         # detail chrome, renders the Markdown body
    │       └── HTMLPlayer/+page.md    # one file per tool
    └── blog/                          # same pattern as projects
static/
├── 404.html                           # GH Pages 404 + URL normalizer
└── images/projects/<tool>/            # screenshots (optimized to webp/avif at build)
```

## Adding a project

Create `src/routes/(marketing)/about/(projects)/<Name>/+page.md`:

```md
---
title: MyTool
slug: MyTool
tagline: One-line summary shown under the title
summary: Longer card blurb used on the homepage and directory.
repo: https://github.com/HTMLToolkit/MyTool
live: https://htmltoolkit.github.io/MyTool/
# beta: https://htmltoolkit.github.io/beta/MyTool/   # optional
tech:
  - TypeScript
  - Vite
license: MIT
featured: false
kind: tool # "tool" (default) or "experiment"
icon: code # key from src/lib/projectIcons.ts
screenshots: # optional
  - /images/projects/mytool/MainUI.png
---

Write the long-form description here in **Markdown**. This becomes the
"About" body on the project page.
```

Then:

1. Pick an icon key from `src/lib/projectIcons.ts` (lucide-svelte icons), or add a new one there.
2. Add the tool's lowercase slug to the canonical map in `src/lib/normalize.ts` and `static/404.html`.
3. Drop any screenshots in `static/images/projects/<tool>/`.

That's it. The directory, homepage grid, sitemap, and site search all pick it
up automatically.

## Local development

```bash
npm install
npm run dev -- --open
```

The site runs at `http://localhost:5173`.

### Checks

```bash
./checks.sh          # everything below, in order
npm run format_check # Prettier
npm run lint         # ESLint
npm run check        # svelte-check (types + a11y)
npm run test_run     # Vitest
npm run build        # production build
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `./build` to GitHub Pages via `peaceiris/actions-gh-pages`.

GitHub Pages must be set to **Source: GitHub Actions** under **Settings → Pages**.

To build locally:

```bash
npm run build        # output in ./build
npm run preview      # preview the production build
```

## Credits

Built on the [CMSaasStarter](https://github.com/CriticalMoments/CMSaasStarter) template (MIT).
