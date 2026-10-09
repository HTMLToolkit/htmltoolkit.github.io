<script lang="ts">
  import { onMount } from "svelte"
  import { loadStarCounts, repoNameFromUrl, starCounts } from "$lib/github"

  interface Props {
    repo: string
  }

  let { repo }: Props = $props()

  let name = $derived(repoNameFromUrl(repo))
  let count = $derived($starCounts[name])

  onMount(loadStarCounts)
</script>

{#if count !== undefined}
  <span class="badge badge-ghost badge-sm">★ {count}</span>
{/if}
