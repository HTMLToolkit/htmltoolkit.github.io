<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  onMount(() => {
    goto('/HTMLPlayer', { replaceState: true });
  });
</script>