<script lang="ts">
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"
  import { featuredProject, sortedProjects } from "./about/projects"

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
    description: WebsiteDescription,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  const values = [
    {
      name: "Offline-first",
      description: "Open a tool and it just works, network or not.",
      svg: `<path d="M12 3v18M5 10l7-7 7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    },
    {
      name: "No telemetry",
      description: "No analytics, ads, or external requests. Ever.",
      svg: `<path d="M4 4l16 16M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    },
    {
      name: "No install",
      description:
        "Everything runs in the browser, with a PWA when you want one.",
      svg: `<path d="M3 5h18v14H3zM3 9h18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    },
    {
      name: "Open source",
      description: "MIT and GPL code you can read, fork, and improve.",
      svg: `<path d="M9 19c-4 1.5-4-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.4.4-.5 1-.5 2V21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,
    },
  ]
</script>

<svelte:head>
  <title>{WebsiteName}: browser tools for HTML, CSS and JavaScript</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="hero min-h-[65vh]">
  <div class="hero-content text-center py-16 px-4">
    <div class="max-w-3xl">
      <div class="badge badge-outline badge-lg mb-5 font-medium">
        Offline-first · No telemetry · Open source
      </div>
      <h1
        class="text-4xl md:text-6xl font-bold px-2"
        style="line-height: 1.15;"
      >
        Browser tools that
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >just work</span
        >
      </h1>
      <p class="mt-6 md:mt-8 text-base md:text-lg text-base-content/80">
        {WebsiteName} is a suite of lightweight utilities for working with HTML,
        CSS, and JavaScript. They run entirely on your device. Fast, private, and
        free.
      </p>
      <div
        class="mt-6 md:mt-8 flex flex-row flex-wrap gap-4 place-content-center"
      >
        <a href="#tools">
          <button class="btn btn-primary px-6">Browse the tools</button>
        </a>
        <a
          href="https://github.com/HTMLToolkit"
          target="_blank"
          rel="noreferrer"
        >
          <button class="btn btn-outline btn-primary px-6">
            View on GitHub
          </button>
        </a>
      </div>
    </div>
  </div>
</div>

<section class="max-w-[1064px] mx-auto px-6 pb-20">
  <div class="divider"></div>
  <div class="mt-8 flex flex-col gap-10 lg:flex-row lg:items-center">
    <div
      class="lg:w-3/5 overflow-hidden rounded-box border border-base-300 bg-base-200 shadow-lg shadow-base-300/15"
    >
      <div class="mockup-browser border-0">
        <div class="mockup-browser-toolbar">
          <div class="input" style="background:#eee;">
            htmltoolkit.github.io/beta/HTMLPlayer
          </div>
        </div>
        <img
          src={featuredProject.screenshots?.[0]}
          alt="{featuredProject.name} interface"
          class="w-full h-auto"
        />
      </div>
    </div>
    <div class="lg:w-2/5">
      <div class="badge badge-primary badge-sm mb-3">Flagship</div>
      <h2 class="text-3xl md:text-4xl font-bold">
        {featuredProject.name}
      </h2>
      <p class="text-lg text-base-content/80 mt-2">
        {featuredProject.tagline}
      </p>
      <p class="mt-4 text-base-content/70">
        {featuredProject.summary}
      </p>
      <div class="flex flex-wrap gap-2 mt-5">
        {#each featuredProject.tech as tech}
          <span class="badge badge-outline badge-sm">{tech}</span>
        {/each}
      </div>
      <div class="mt-6 flex flex-wrap gap-3">
        {#if featuredProject.beta}
          <a href={featuredProject.beta} target="_blank" rel="noreferrer">
            <button class="btn btn-primary">Open beta</button>
          </a>
        {/if}
        <a href={`/about/${featuredProject.slug}`}>
          <button class="btn btn-outline btn-primary">Learn more</button>
        </a>
      </div>
    </div>
  </div>
</section>

<section id="tools" class="max-w-[1064px] mx-auto px-6 pb-24 scroll-mt-20">
  <div class="text-center max-w-lg mx-auto">
    <h2
      class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent pb-2"
    >
      The Toolkit
    </h2>
    <p class="mt-4 text-base-content/70">
      {sortedProjects.length} small tools for editing, reading, listening, and exploring.
      Pick one and go.
    </p>
  </div>

  <div class="flex gap-6 mt-12 place-content-center flex-wrap">
    {#each sortedProjects as project}
      <div
        class="card bg-base-100 w-[300px] min-h-[290px] flex-none border border-base-300 shadow-lg shadow-base-300/15 transition-transform duration-200 hover:-translate-y-0.5"
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
          <h3 class="card-title text-xl mt-3">{project.name}</h3>
          <p class="text-sm text-base-content/70">{project.summary}</p>
          <div class="mt-auto flex items-center gap-3 pt-4">
            {#if project.live}
              <a
                class="btn btn-sm btn-primary rounded-full flex-1"
                href={project.live}
                target="_blank"
                rel="noreferrer">Launch</a
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

  <div class="text-center mt-12">
    <a href="/about" class="link font-bold text-primary">See all projects →</a>
  </div>
</section>

<section class="bg-base-200 border-y border-base-300">
  <div class="max-w-[1064px] mx-auto px-6 py-16">
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {#each values as value}
        <div class="text-center">
          <div
            class="w-12 h-12 mx-auto text-primary mb-4 [&_svg]:w-full [&_svg]:h-full"
          >
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            {@html value.svg}
          </div>
          <h3 class="font-bold text-lg">{value.name}</h3>
          <p class="text-sm text-base-content/70 mt-1">{value.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="max-w-[1064px] mx-auto px-6 py-20 text-center">
  <h2 class="text-3xl md:text-4xl font-bold">Built in the open</h2>
  <p class="mt-4 text-base-content/70 max-w-lg mx-auto">
    Every tool is open source and made to be forked. Found a bug, or have an
    idea for something new? Contributions and issues are always welcome.
  </p>
  <div class="mt-8 flex flex-wrap gap-4 justify-center">
    <a href="https://github.com/HTMLToolkit" target="_blank" rel="noreferrer">
      <button class="btn btn-primary px-6">Star the org on GitHub</button>
    </a>
    <a href="/about">
      <button class="btn btn-outline btn-primary px-6">Explore projects</button>
    </a>
  </div>
</section>
