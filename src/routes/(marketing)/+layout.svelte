<script lang="ts">
  import { WebsiteName } from "./../../config"
  import { Menu, Search, Star } from "lucide-svelte"
  import "../../app.css"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
</script>

<div class="navbar bg-base-100 container mx-auto">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">{WebsiteName}</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 hidden sm:flex font-bold text-lg">
      <li class="md:mx-4">
        <a href="https://github.com/HTMLToolkit" class="border border-primary"
          ><Star size={16} /> us on Github</a
        >
      </li>
      <li class="md:mx-2"><a href="/about">Projects</a></li>
      <li class="md:mx-2"><a href="/blog">Blog</a></li>
      <li class="md:mx-0">
        <a href="/search" aria-label="Search">
          <Search size={24} strokeWidth={2} />
        </a>
      </li>
    </ul>
    <div class="dropdown dropdown-end sm:hidden">
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <Menu size={20} strokeWidth={2} />
      </label>
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <ul
        tabindex="0"
        class="menu menu-lg dropdown-content mt-3 z-1 p-2 shadow-sm bg-base-100 rounded-box w-52 font-bold"
      >
        <li><a href="/about">Projects</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/search">Search</a></li>
        <li>
          <a href="https://github.com/HTMLToolkit" class="border border-primary"
            ><Star size={16} /> us on Github</a
          >
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="">
  {@render children?.()}
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="grow"></div>
<div class="">
  <div class="border-t max-w-[1000px] mx-auto"></div>
  <footer
    class="footer md:footer-horizontal p-10 gap-x-48 lg:gap-x-64 xl:gap-x-96 place-content-center text-base"
  >
    <nav>
      <span class="footer-title opacity-80">Explore</span>
      <a class="link link-hover mb-1" href="/">Overview</a>
      <a class="link link-hover my-1" href="/about">Projects</a>
      <a class="link link-hover my-1" href="/blog">Blog</a>
      <a class="link link-hover my-1" href="https://github.com/HTMLToolkit"
        >Github</a
      >
    </nav>
    <aside>
      <span class="footer-title opacity-80">Made By</span>
      <a class="max-w-[260px]" href="https://nellowtcs.me" target="_blank">
        <div class="font-bold text-3xl mb-1">NellowTCS</div>
        <div class="font-medium mb-3">Generally silly guy >:3</div>
        <div class="font-light">
          NellowTCS (that's me!) is a software developer and content creator. He
          enjoys building projects that are both fun and useful, and sharing his
          knowledge with others through writing and open source contributions.
        </div>
        <div class="link text-sm font-bold mt-2">Learn More</div>
      </a>
    </aside>
  </footer>
</div>
