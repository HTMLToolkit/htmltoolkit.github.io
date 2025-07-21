<script lang="ts">
  import { onMount } from 'svelte';

  let dark = false;
  let showTools = false;

  function toggleDark() {
    dark = !dark;
    document.documentElement.classList.toggle('dark', dark);
  }

  function toggleTools() {
    showTools = !showTools;
  }

  function handleClickOutside(event: MouseEvent) {
    const dropdown = document.getElementById('tools-dropdown');
    if (dropdown && !dropdown.contains(event.target as Node)) {
      showTools = false;
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });
</script>

<nav class="fixed top-0 left-0 right-0 flex items-center justify-between h-16 px-6
            bg-black/20 backdrop-blur-md z-50">
  <h1 class="text-2xl font-bold">HTMLToolkit</h1>

  <div class="flex items-center gap-6">
    <a href="/" class="nav-link">Home</a>

    <!-- Tools dropdown -->
    <div class="relative" id="tools-dropdown">
      <button on:click={toggleTools} class="nav-link flex items-center gap-1">
        Tools
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.585l3.71-4.356a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        </svg>
      </button>

      {#if showTools}
        <div class="absolute top-16 left-0 w-40 bg-black/50 backdrop-blur-md rounded shadow-lg py-3 z-50">
          <a href="/abouthtmlrunner" class="block px-4 py-2 nav-link hover:bg-white/10">HTMLRunner</a>
          <a href="/abouthtmlplayer" class="block px-4 py-2 nav-link hover:bg-white/10">HTMLPlayer</a>
          <a href="/abouthtmlreader" class="block px-4 py-2 nav-link hover:bg-white/10">HTMLReader</a>
          <a href="/abouthtmleditor" class="block px-4 py-2 nav-link hover:bg-white/10">HTMLEditor</a>
          <a href="/abouthtmlnodemapper" class="block px-4 py-2 nav-link hover:bg-white/10">HTMLNodeMapper</a>
          <a href="/abouthtmlnotes" class="block px-4 py-2 nav-link hover:bg-white/10">HTMLNotes</a>
          <!-- add more tools here -->
        </div>
      {/if}
    </div>

    <a href="/docs" class="nav-link">Docs</a>
    <a href="/about" class="nav-link">About</a>
    <a href="/contact" class="nav-link">Contact</a>

    <a href="https://github.com/htmltoolkit" target="_blank" aria-label="GitHub" 
       class="p-2 rounded hover:bg-white/60 transition-colors">
      <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0a12 12 0 00-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.74.08-.74 1.22.09 1.86 1.26 1.86 1.26 1.08 1.86 2.83 1.32 3.52 1.01.11-.79.42-1.32.76-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.25-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.02-.33 3.34 1.23a11.6 11.6 0 016.08 0c2.32-1.56 3.34-1.23 3.34-1.23.66 1.65.25 2.87.12 3.17.78.84 1.25 1.91 1.25 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0012 0z"/>
      </svg>
    </a>

    <button on:click={toggleDark} class="p-2 bg-white/20 rounded-md transition-colors">
      {dark ? '☀️' : '🌙'}
    </button>
  </div>
</nav>
