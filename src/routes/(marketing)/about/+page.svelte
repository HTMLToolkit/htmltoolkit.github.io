<script lang="ts">
  import { sortedProjects } from "./projects"
  import { WebsiteName } from "./../../../config"
</script>

<svelte:head>
  <title>Projects - {WebsiteName}</title>
  <meta
    name="description"
    content="Browse every tool in the HTMLToolkit suite: local-first utilities for HTML, CSS, JavaScript, and everything around them."
  />
</svelte:head>

<div class="max-w-[1064px] mx-auto px-6 py-12 lg:py-16">
  <div class="text-center max-w-2xl mx-auto">
    <h1
      class="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent pb-2"
    >
      Projects
    </h1>
    <p class="mt-4 text-base-content/70">
      {sortedProjects.length} lightweight, browser-based tools. Each one runs on
      your device, keeps your data local, and stays open source.
    </p>
  </div>

  <div class="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
    {#each sortedProjects as project}
      <a
        href={`/about/${project.slug}`}
        class="card bg-base-100 border border-base-300 shadow-lg shadow-base-300/15 transition-transform duration-200 hover:-translate-y-0.5"
      >
        <div class="card-body">
          <div class="flex items-start justify-between">
            <div class="text-primary w-10 h-10 [&_svg]:w-full [&_svg]:h-full">
              <!-- eslint-disable-next-line svelte/no-at-html-tags -->
              {@html project.icon}
            </div>
            {#if project.featured}
              <span class="badge badge-primary badge-sm">Flagship</span>
            {:else if project.kind === "experiment"}
              <span class="badge badge-ghost badge-sm">Experiment</span>
            {/if}
          </div>
          <h2 class="card-title text-xl mt-3">{project.name}</h2>
          <p class="text-sm text-base-content/70">{project.summary}</p>
          <div class="mt-4 flex flex-wrap gap-1.5">
            {#each project.tech.slice(0, 3) as tech}
              <span class="badge badge-outline badge-xs">{tech}</span>
            {/each}
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
