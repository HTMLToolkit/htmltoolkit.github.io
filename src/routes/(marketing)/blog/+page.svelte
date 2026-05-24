<script lang="ts">
  import { sortedBlogPosts, blogInfo } from "./posts"
  import SubscribeForm from "$lib/components/SubscribeForm.svelte"
</script>

<svelte:head>
  <title>{blogInfo.name}</title>
  <meta name="description" content="Our blog posts." />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-lg mx-auto">
  <div
    class="text-3xl lg:text-5xl font-medium text-primary flex gap-3 items-baseline text-center place-content-center"
  >
    <div
      class="text-center leading-relaxed font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent"
    >
      {blogInfo.name}
    </div>
    <a href="/blog/rss.xml" target="_blank" rel="noreferrer">
      <img
        class="flex-none w-5 h-5 object-contain"
        src="/images/rss.svg"
        alt="rss feed"
      />
    </a>
  </div>
  <div class="text-lg text-center">A demo blog with sample content.</div>

  <div class="mt-10 space-y-6">
    {#each sortedBlogPosts as post}
      <a href={post.link} class="block">
        <div
          class="card bg-base-100 shadow-lg shadow-base-300/15 flex-row overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-base-300/20"
        >
          <div class="flex-none w-6 md:w-32 bg-secondary"></div>
          <div class="py-6 px-6">
            <div class="text-xl font-semibold text-base-content">
              {post.title}
            </div>
            <div class="text-sm text-accent mt-1">
              {post.parsedDate?.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div class="text-base-content/70 mt-2">{post.description}</div>
          </div>
        </div>
      </a>
    {/each}
  </div>

  <div class="my-12">
    <SubscribeForm />
  </div>
</div>
