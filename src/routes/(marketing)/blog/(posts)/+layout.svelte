<script lang="ts">
  import { onMount } from "svelte"
  import { page } from "$app/stores"
  import { error } from "@sveltejs/kit"
  import { sortedBlogPosts, type BlogPost } from "./../posts"
  import SubscribeForm from "$lib/components/SubscribeForm.svelte"
  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()

  function getCurrentPost(url: string): BlogPost {
    const searchPost = sortedBlogPosts.find(
      (post) => url === post.link || url === post.link + "/",
    )
    if (!searchPost) {
      throw error(404, "Blog post not found")
    }
    return searchPost
  }
  let currentPost = $derived(getCurrentPost($page.url.pathname))

  function buildLdJson(post: BlogPost) {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.parsedDate?.toISOString(),
      dateModified: post.parsedDate?.toISOString(),
    }
  }
  let jsonldScript = $derived(
    `<script type="application/ld+json">${
      JSON.stringify(buildLdJson(currentPost)) + "<"
    }/script>`,
  )

  let pageUrl = $derived($page.url.origin + $page.url.pathname)

  const enhanceCodeBlocks = (container: HTMLElement | null) => {
    if (!container) return

    const blocks = Array.from(container.querySelectorAll("pre"))
    for (const pre of blocks) {
      if (pre.closest(".code-mockup")) continue

      const code = pre.querySelector("code")
      if (!code) continue

      const languageClass = Array.from(code.classList).find((className) =>
        className.startsWith("language-"),
      )
      const language = languageClass?.replace("language-", "") ?? "code"
      const textToCopy = code.textContent ?? ""

      const wrapper = document.createElement("div")
      wrapper.className =
        "code-mockup relative my-8 overflow-hidden rounded-box border border-base-300 bg-base-200 shadow-lg shadow-base-300/15"

      const toolbar = document.createElement("div")
      toolbar.className =
        "flex items-center justify-between gap-3 border-b border-base-300/60 px-4 py-3"

      const languageBadge = document.createElement("span")
      languageBadge.className = "badge badge-outline badge-sm uppercase"
      languageBadge.textContent = language

      const copyButton = document.createElement("button")
      copyButton.type = "button"
      copyButton.className = "btn btn-ghost btn-xs"
      copyButton.textContent = "Copy"
      copyButton.addEventListener("click", async () => {
        await navigator.clipboard.writeText(textToCopy)
        const previousText = copyButton.textContent
        copyButton.textContent = "Copied"
        window.setTimeout(() => {
          copyButton.textContent = previousText
        }, 1400)
      })

      const codeShell = document.createElement("div")
      codeShell.className = "overflow-x-auto px-4 py-4 text-sm md:text-base"

      pre.replaceWith(wrapper)
      toolbar.append(languageBadge, copyButton)
      codeShell.append(pre)
      wrapper.append(toolbar, codeShell)
    }
  }

  onMount(() => {
    const article = document.querySelector("article[data-blog-article]")
    enhanceCodeBlocks(article as HTMLElement | null)
  })
</script>

<svelte:head>
  <title>{currentPost.title}</title>
  <meta name="description" content={currentPost.description} />

  <!-- Facebook -->
  <meta property="og:title" content={currentPost.title} />
  <meta property="og:description" content={currentPost.description} />
  <meta property="og:site_name" content="HTMLToolkit" />
  <meta property="og:url" content={pageUrl} />
  {#if currentPost.coverImage}
    <meta
      property="og:image"
      content="{$page.url.origin}{currentPost.coverImage}"
    />
  {/if}

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={currentPost.title} />
  <meta name="twitter:description" content={currentPost.description} />
  {#if currentPost.coverImage}
    <meta
      name="twitter:image"
      content="{$page.url.origin}{currentPost.coverImage}"
    />
  {/if}

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<article
  data-blog-article
  class="mx-auto max-w-3xl px-6 py-12"
>
  <div class="mb-8">
    <div class="badge badge-outline mb-3 text-sm">
      {currentPost.parsedDate?.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })}
    </div>
    <h1 class="text-4xl font-bold mb-5 text-base-content">
      {currentPost.title}
    </h1>
    {#if currentPost.tags && currentPost.tags.length > 0}
      <div class="flex flex-wrap gap-2 mb-6">
        {#each currentPost.tags as tag}
          <span class="badge badge-primary badge-sm">{tag}</span>
        {/each}
      </div>
    {/if}
  </div>
  {#if currentPost.coverImage}
    <div
      class="mb-8 overflow-hidden rounded-box border border-base-300 shadow-lg shadow-base-300/15"
    >
      <img
        src={currentPost.coverImage}
        alt={currentPost.title}
        class="w-full h-auto"
      />
    </div>
  {/if}
  <div
    class="prose prose-sm md:prose-base prose-headings:mb-4 prose-headings:mt-10 prose-h1:mt-0 prose-h2:mt-8 prose-h3:mt-7 prose-h4:mt-6 prose-h5:mt-5 prose-h6:mt-5 mb-12 max-w-none"
  >
    {@render children?.()}
  </div>
  <div class="divider my-10"></div>
  <div class="mb-12">
    <SubscribeForm />
  </div>
</article>
