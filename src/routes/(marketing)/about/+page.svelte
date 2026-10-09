<script lang="ts">
  import { sortedProjects } from "./projects"
  import { WebsiteName } from "./../../../config"
  import ProjectIcon from "$lib/components/ProjectIcon.svelte"
  import StarCount from "$lib/components/StarCount.svelte"
</script>

<svelte:head>
  <title>Projects - {WebsiteName}</title>
  <meta
    name="description"
    content="A directory of small, browser-based tools for HTML, CSS, and JavaScript. Offline-first, no telemetry, open source."
  />
</svelte:head>

<div class="container mx-auto px-6 py-16 max-w-[1064px]">
  <div class="max-w-2xl">
    <h1 class="text-4xl md:text-5xl font-bold">Projects</h1>
    <p class="text-lg text-base-content/70 mt-4">
      {sortedProjects.length} small, browser-based tools. Everything runs on your
      device, keeps your data local, and stays open source.
    </p>
  </div>

  <div class="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
    {#each sortedProjects as project}
      <div
        class="card bg-base-100 border border-base-300 shadow-lg shadow-base-300/15 transition-transform duration-200 hover:-translate-y-0.5"
      >
        <div class="card-body">
          <div class="flex items-start justify-between">
            <div class="text-primary w-10 h-10">
              <ProjectIcon name={project.icon} size={40} />
            </div>
            <div class="flex flex-col items-end gap-2">
              {#if project.featured}
                <span class="badge badge-primary badge-sm">Flagship</span>
              {:else if project.kind === "experiment"}
                <span class="badge badge-ghost badge-sm">Experiment</span>
              {/if}
              <StarCount repo={project.repo} />
            </div>
          </div>
          <h2 class="card-title text-xl mt-3">{project.name}</h2>
          <p class="text-sm text-base-content/70">{project.summary}</p>
          <div class="mt-4 flex flex-wrap items-center gap-1.5">
            {#each project.tech.slice(0, 3) as tech}
              <span class="badge badge-outline badge-xs">{tech}</span>
            {/each}
          </div>
          <div class="mt-auto flex items-center gap-2 pt-4">
            {#if project.live}
              <a
                class="btn btn-sm btn-primary rounded-full flex-1"
                href={project.live}
                target="_blank"
                rel="noreferrer">Open</a
              >
            {/if}
            {#if project.beta}
              <a
                class="btn btn-sm btn-secondary rounded-full flex-1"
                href={project.beta}
                target="_blank"
                rel="noreferrer">Beta</a
              >
            {/if}
            <a
              class="btn btn-sm btn-outline rounded-full flex-1"
              href={`/about/${project.slug}`}>Details</a
            >
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
