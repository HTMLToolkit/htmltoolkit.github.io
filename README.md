<p align="center">
    <picture>
        <img width="420" alt="SaaS Starter Header reading: The open source, fast, and free to host SaaS template" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/12f47617-e5be-4694-affc-23310e54b885">
    </picture>
</p>

<p align="center">
  <a href="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/build.yml" target="_blank"><img src="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/build.yml/badge.svg?branch=main" alt="Built Status"></a>
  <a href="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/format.yml" target="_blank"><img src="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/format.yml/badge.svg?branch=main" alt="Format Check"></a>
  <a href="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/linting.yml" target="_blank"><img src="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/linting.yml/badge.svg?branch=main" alt="Linting"></a>
  <a href="https://github.com/CriticalMoments/CMSaasStarter/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-brightgreen?labelColor=32383f" alt="License"></a>
</p>

<p align="center">
  <a href="https://saasstarter.work"><strong>Demo & Homepage</strong></a> •
  <a href="https://github.com/CriticalMoments/CMSaasStarter#quick-start"><strong>Quick Start Guide</strong></a> •
  <a href="https://github.com/CriticalMoments/CMSaasStarter/issues"><strong>Issues</strong></a>
</p>

<br/>

# Organization Site Starter: A Fast SvelteKit Template

- [Feature Rich](#features): marketing site, blog engine, search, contact form, and more.
- [Lightning Performance](#performance--best-practices): fast pre-rendered pages which score 100/100 on Google PageSpeed.
- [Delighful Developer Experience](#tech-stack): tools you'll love working with, including SvelteKit, Tailwind, and DaisyUI.
- Extensible: all the tools you need to make additional marketing pages, UI components, user dashboards, admin portals, database backends, API endpoints, and more.
- [Hosting](#suggested-hosting-stack): Our suggested hosting stack is free to host, cheap to scale, easy to manage, and includes automatic deployments.
- [MIT Open Source](https://github.com/CriticalMoments/CMSaasStarter/blob/main/LICENSE)
- [Fully Functional Demo](https://saasstarter.work)
- [Quick Start](#quick-start): Full docs from `git clone` to deployment.

Created by the folks at [Kiln AI](https://getkiln.ai)! It's the easiest tool for fine-tuning LLM models, synthetic data generation, and collaborating on datasets. The Kiln app was built with SaaS Starter!

**[Kiln AI](https://getkiln.ai)** Rapid AI Prototyping and Dataset Collaboration Tool

## Demo

You can explore all the features using our fully functional demo [saasstarter.work](https://saasstarter.work).

[![Try it Now](https://img.shields.io/badge/Try_it_Now-37a779?style=for-the-badge "Try it Now")](https://saasstarter.work)

See [criticalmoments.io](https://criticalmoments.io) and [getkiln.ai](https://getkiln.ai) for examples of what’s possible after this template has design, content, and functionality added.

<a href="https://saasstarter.work">
<kbd>
<img width="500" alt="homepage" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/34944c09-df72-4ac2-9099-01d25d99911b">
</kbd>
<br>
<kbd>
<img width="200" alt="pricing page" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/c3cb2ab7-3739-473e-a1fe-f82a4a31e844">
</kbd><kbd>
<img width="200" alt="settings page" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/2d947c97-3cc7-4ff5-a5b1-7c8478b6f31a">
</kbd><kbd>
<img width="200" alt="payments portal" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/0c4749c3-0d29-4edc-ae87-d8a4eefea3c9">
</kbd>
</a>

## Features

Everything you need to build an organization website:

- Marketing Page with SEO optimization and Sitemap
- Blog engine with rich formatting, RSS and SEO optimization.
- Search: lightning fast site search, without a backend
- Contact form with server-side validation
- Style toolkit: theming and UI components with DaisyUI
- Responsive: designed for mobile and desktop.
- Extensible: all the tools you need to make additional marketing pages, UI components, and more.

## Introduction Blog Post

Want to learn why we picked the technologies we did, and how to keep your fork lightning fast as you add content? Check out [our blog post](https://criticalmoments.io/blog/how_we_built_our_marketing_page) on the process. Yes, it's hosted on a SaaS Starter fork!

## Tech Stack

- Web Framework: SvelteKit
- CSS / Styling
  - Framework: TailwindCSS
  - Component library: DaisyUI
- Hosting
  - Host + CDN: Cloudflare Pages
  - Serverless compute: Cloudflare Workers

## Performance / Best Practices

The selected tech stack creates lightning fast websites.

- Pre-rendering (static generation) for marketing pages, pricing and blog
- Instant navigation: the best of CSR + SSR in one. SSR your first page for fastest possible initial load times. For subsequent pages, the content is pre-loaded and rendered with CSR, for instant rendering.
- CDN optimized, for high edge-cache hit ratios
- Edge-functions for dynamic APIs/pages
- Svelte and Tailwind compile out unused HTML, CSS and JS at deploy time for smaller pages
- Linting to find accessibility and syntax issues

The result is a perfect Google PageSpeed Insights score in all categories!

<img width="420" alt="Screenshot 2024-01-18 at 11 31 32 AM" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/46b5e960-2aa0-4fb5-acd7-4f84b380e1d0">

# Quick Start

## Create a Copy of the Template

To get started, create your own copy of the project for development. There are two options:

- "Use this template": use this Github button if you want to build your own project using CMSaasStarter as a starter template and you aren't planning on contributing work back to the public open source project. See [Github Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).
- "Fork": use this button if you want contribute some or all of your work back to the public open source project. It will keep the full commit history, and be easier to create PRs back to CMSaasStarter.

## Setup Local Development

On your development machine:

```
git clone [Your Repo]
cd [your-repo-name]
npm install
npm run dev -- --open
```

Your site will be live at `http://localhost:5173`.

## Developer Tools

The repo includes [CI scripts](https://aws.amazon.com/devops/continuous-integration/) designed for [GitHub Actions](https://github.com/features/actions). These confirm you don’t break your [build](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/build.yml), you use [proper code formatting](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/format.yml), [code linting and typechecking passes](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/linting.yml), and even spell checking.

### Enabling GitHub Actions

Github disables CI on new forks by default, so be sure to go into the Github Actions page for your repo and enable workflows.

### Running Developer Tools Locally

To manually run all these tools run the following script. You can view it's contents for individual commands.

```
# first time only: chmod +x ./checks.sh
./checks.sh
```

### Running Developer Tools in your IDE

Installing extensions in your editor can automatically format-on-save, show linting/type issues inline, and run your test cases:

- Svelte for Svelte and accessibility issues: [VSCode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) or [other editors](https://sveltesociety.dev/tools#editor-support)
- ESLint for type checking and linting: [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [other editors](https://eslint.org/docs/latest/use/integrations)
- Vitest for testing if you add tests: [VSCode](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) or [other editors](https://vitest.dev/guide/ide)

### Running Developer Tools from Git Hooks

To catch build, formatting, linting and test issues before you commit changes, we suggest the following local git hook. It will run before you commit, stop you from breaking the build, and show any issues that are found. Add the lines below to an executable git hook script at the location `.git/hooks/pre-commit`.

```
#!/bin/sh
# Run standard checks before committing
cd "$(dirname "$0")"
sh ../../checks.sh
```

### Disabling Developer Tools

If you find build, formatting or linting rules too tedious, you can disable enforcement by deleting the CI files (`.github/workflows/*`) and removing the git hook (`.git/hooks/pre-commit`).

## Deploy to GitHub Pages

This site is optimized for hosting on GitHub Pages as a static site.

### Setup GitHub Pages

1. In your repository settings, go to **Settings** → **Pages**
2. Under "Build and deployment", select:
   - **Source**: GitHub Actions
3. The included workflow will automatically build and deploy to GitHub Pages when you push to main

### Build and Deploy Locally (Optional)

To manually build and deploy:

```bash
npm run build
# The output will be in the 'build' directory
```

The `.nojekyll` file tells GitHub Pages not to process the site as a Jekyll project, allowing SvelteKit's routing to work properly.

### Custom Domain

To use a custom domain with GitHub Pages:

1. Add a `CNAME` file in the `build` directory with your domain name
2. Update your domain's DNS settings to point to GitHub Pages (see [GitHub docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))

## Setup Emailer -- Optional

SaaS Starter includes email capabilities for sending emails to users and admins.

These are optional and disabled by default. See [email docs](email_docs.md) for details on how to enable and customize them.

## Add Your Content

After the steps above, you’ll have a working version like the demo page. However, it’s not branded, and doesn’t have your content. The following checklist helps you customize the template to make a SaaS homepage for your company.

- Describe your site with a name, description and base URL in in `src/config.ts:`. These values are used for SEO.
- Content
  - Add actual content for marketing homepage
  - Add actual content for your blog (or delete the blog)
    - Update all fields in `src/routes/(marketing)/blog/posts.ts`, and replace the post pages under `src/routes/(marketing)/blog/posts` to align to the urls from `posts.ts`.
    - Alternatively remove the blog by removing the src/routes/(marketing)/blog directory, and remove any links to the blog in the header and footer. You can always bring it back later.
  - Add any pages you want on top of our boiler plate (about, terms of service, etc). Be sure to add links to them in the header, mobile menu header, and footer as appropriate (`src/routes/(marketing)/+layout.svelte`).
  - Note: if you add any dynamic content to the main marketing page, pricing page or blog, be sure to set `prerender = false` in the appropriate `+page.ts` file. These are currently pre-rendered and served as static assets for performance reasons, but that will break if you add server side rendering requirements.
- Update SEO content
  - Update title and meta description tags for every public page. We include generic ones using your site name (`src/config.ts`), but the more specific these are the better.
  - This done automatically for blog posts from `posts.ts` metadata
- Style
  - Theme: Update the theme to match your brand, or use one of the built in themes from DaisyUI (see `app.css`). DaisyUI can automatically use a dark mode theme on systems with dark mode enabled (disabled by default) -- to enable if remove `themes: false;` and specify a dark mode theme. Docs: <https://daisyui.com/docs/themes/>
  - Update the marketing page layout `src/routes/(marketing)/+layout.svelte`: customize design, delete unwanted pages from header and footer
  - Style: make it your own look and feel.
  - Update the favicon in the `/static/` directory
- Site Search: any [prerendered](https://kit.svelte.dev/docs/page-options#prerender) content will automatically be indexed by the site search. To exclude a page, add it to `excludePaths` in `src/lib/build_index.ts`.
- Functionality
  - Add actual SaaS functionality!
  - Replace the admin dashboard with real content (`/src/routes/(admin)/account/+page.svelte`).
  - Add API endpoints and database tables as needed to deliver your SaaS product.
- Analytics: optionally add analytics to your project. [guide](/analytics_docs.md)

## Community Extensions

The open source community is extending and improving SaasStarter!

These extensions are reference implementations of commonly needed features. We don't integrate them into the main branch to keep our dependencies minimal and simplify maintenance. However, if you need them you can cherry pick into your fork/repo:

- Internationalization: [branch](https://github.com/CriticalMoments/CMSaasStarter/tree/extension/internationalization), and [instructions](https://github.com/CriticalMoments/CMSaasStarter/pull/49)
- Fork using Shadcn/ui instead of DaisyUI: [kizivat/saas-kit](https://github.com/kizivat/saas-kit)

### Icons Credits

Homescreen Icons are from [Solar Broken Line Icons](https://www.svgrepo.com/collection/solar-broken-line-icons/) and [Solar Linear Icons](https://www.svgrepo.com/collection/solar-linear-icons) via CC Attribution License.
