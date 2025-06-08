<script lang="ts">
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen text-white">
  <Navbar />

  <main class="flex-grow container mx-auto px-6 py-24">
    <slot />
  </main>

  <Footer />
</div>
