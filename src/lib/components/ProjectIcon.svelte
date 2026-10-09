<script lang="ts">
  import { genericIcon, projectIcons } from "$lib/projectIcons"

  interface Props {
    name?: string
    size?: number | string
    class?: string
  }

  let { name = "", size = 24, class: className = "" }: Props = $props()

  let Icon = $derived(projectIcons[name] ?? genericIcon)
</script>

<Icon {size} class={className} />
