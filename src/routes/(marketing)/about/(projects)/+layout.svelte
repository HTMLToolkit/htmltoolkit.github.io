<script lang="ts">
  import { page } from "$app/stores"
  import { error } from "@sveltejs/kit"
  import { WebsiteName } from "./../../../../config"
  import { getProject, sortedProjects, type Project } from "./../projects"
  import StarCount from "$lib/components/StarCount.svelte"
  import ProjectIcon from "$lib/components/ProjectIcon.svelte"
  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()

  function getCurrentProject(pathname: string): Project {
    const slug = pathname.split("/").filter(Boolean).pop() ?? ""
    const searchProject = getProject(slug)
    if (!searchProject) {
      throw error(404, "Project not found")
    }
    return searchProject
  }

  let project = $derived(getCurrentProject($page.url.pathname))

  let otherProjects = $derived(
    sortedProjects.filter((entry) => entry.slug !== project.slug),
  )

  let releasesUrl = $derived(`${project.repo}/releases`)

  let ldJson = $derived({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.summary,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    url: project.live ?? project.repo,
    license: `https://opensource.org/license/${project.license.toLowerCase()}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  })
  let jsonldScript = $derived(
    `<script type="application/ld+json">${
      JSON.stringify(ldJson) + "<"
    }/script>`,
  )

  let pageUrl = $derived($page.url.origin + $page.url.pathname)
</script>

<svelte:head>
  <title>{project.name} - {WebsiteName}</title>
  <meta name="description" content={project.summary} />

  <meta property="og:title" content={`${project.name} · ${WebsiteName}`} />
  <meta property="og:description" content={project.summary} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={pageUrl} />
  {#if project.screenshots[0]}
    <meta
      property="og:image"
      content="{$page.url.origin}{project.screenshots[0]}"
    />
  {/if}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={project.name} />
  <meta name="twitter:description" content={project.summary} />

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<article class="mx-auto max-w-4xl px-6 py-12">
  <a href="/about" class="link text-sm text-base-content/60">← All projects</a>

  <header class="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start">
    <div class="text-primary w-14 h-14 flex-none">
      <ProjectIcon name={project.icon} size={56} />
    </div>
    <div>
      <div class="flex flex-wrap items-center gap-3">
        <h1 class="text-3xl md:text-4xl font-bold">{project.name}</h1>
        {#if project.featured}
          <span class="badge badge-primary badge-sm">Flagship</span>
        {:else if project.kind === "experiment"}
          <span class="badge badge-ghost badge-sm">Experiment</span>
        {/if}
      </div>
      <p class="text-lg text-base-content/80 mt-1">{project.tagline}</p>
      <div class="flex flex-wrap items-center gap-2 mt-4">
        {#each project.tech as tech}
          <span class="badge badge-outline badge-sm">{tech}</span>
        {/each}
        <span class="badge badge-ghost badge-sm">{project.license}</span>
        <StarCount repo={project.repo} />
      </div>
      <div class="flex flex-wrap gap-3 mt-6">
        {#if project.beta}
          <a href={project.beta} target="_blank" rel="noreferrer">
            <button class="btn btn-primary btn-sm">Open beta</button>
          </a>
        {/if}
        {#if project.live}
          <a href={project.live} target="_blank" rel="noreferrer">
            <button
              class="btn btn-sm {project.beta
                ? 'btn-outline btn-primary'
                : 'btn-primary'}">Open app</button
            >
          </a>
        {/if}
        <a href={project.repo} target="_blank" rel="noreferrer">
          <button class="btn btn-outline btn-sm">GitHub</button>
        </a>
        <a href={releasesUrl} target="_blank" rel="noreferrer">
          <button class="btn btn-ghost btn-sm">Releases</button>
        </a>
      </div>
    </div>
  </header>

  {#if project.screenshots.length > 0}
    <section class="mt-12 grid gap-4 sm:grid-cols-2">
      {#each project.screenshots as screenshot, i}
        <div
          class="overflow-hidden rounded-box border border-base-300 bg-base-200 shadow-lg shadow-base-300/15 {i ===
          0
            ? 'sm:col-span-2'
            : ''}"
        >
          <img
            src={screenshot}
            alt={`${project.name} screenshot ${i + 1}`}
            loading="lazy"
            class="w-full h-auto"
          />
        </div>
      {/each}
    </section>
  {/if}

  <div
    class="prose prose-sm md:prose-base max-w-none mt-12 prose-headings:mb-4 prose-headings:mt-10 prose-h1:mt-0 prose-h2:mt-10 prose-h3:mt-7 prose-h4:mt-6 prose-h5:mt-5 prose-h6:mt-5"
  >
    {@render children?.()}
  </div>

  <div class="divider my-14"></div>

  <section>
    <h2 class="text-xl font-bold mb-6">More from {WebsiteName}</h2>
    <div class="flex flex-wrap gap-3">
      {#each otherProjects as other}
        <a
          href={`/about/${other.slug}`}
          class="flex items-center gap-2 rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
        >
          <span class="text-primary w-5 h-5 [&_svg]:w-full [&_svg]:h-full">
            <ProjectIcon name={other.icon} size={20} />
          </span>
          {other.name}
        </a>
      {/each}
    </div>
  </section>
</article>
