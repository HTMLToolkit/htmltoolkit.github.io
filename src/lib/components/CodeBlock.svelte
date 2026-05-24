<script lang="ts">
  export let filename = ""
  export let lang = ""
  export let fullBleed: boolean | undefined = undefined
  export let copyText = ""

  const handleCopy = async () => {
    if (!copyText) return
    await navigator.clipboard.writeText(copyText)
  }
</script>

<div
  class="relative my-8 overflow-hidden rounded-box border border-base-300 bg-base-200 shadow-lg shadow-base-300/15 text-sm md:text-base"
  class:-mx-6={fullBleed}
>
  <div class="flex items-center justify-between gap-3 border-b border-base-300/60 px-4 py-3">
    <div class="flex flex-wrap items-center gap-2">
      {#if filename}
        <span class="badge badge-outline badge-sm">{filename}</span>
      {/if}
      {#if lang}
        <span class="badge badge-primary badge-sm uppercase">{lang}</span>
      {/if}
    </div>
    {#if copyText}
      <button type="button" class="btn btn-ghost btn-xs" on:click={handleCopy}>
        Copy
      </button>
    {/if}
  </div>
  <div class="overflow-x-auto px-4 py-4">
    <slot />
  </div>
</div>

<style>
  :global(.code-mockup pre),
  :global(.mockup-code pre) {
    margin: 0;
    white-space: pre;
  }
</style>
