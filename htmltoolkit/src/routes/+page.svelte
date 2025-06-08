<script lang="ts">
  import { fade } from 'svelte/transition';
</script>

<section class="fade-in-down">
  <h1 class="text-4xl font-bold text-center mb-4">Welcome to HTMLToolkit</h1>
  <p class="text-center mb-8">A suite of modern browser-based HTML tools.</p>
</section>

<div class="grid gap-8 lg:grid-cols-3">
  <a href="/htmlrunner" class="card fade-in-up" style="animation-delay: 0s;">
    <div class="card-img">
      <img src="https://htmltoolkit.github.io/HTMLRunner/favicon.png" alt="HTMLRunner icon" />
    </div>
    <span class="font-semibold">HTMLRunner</span>
  </a>

  <a href="/htmlplayer" class="card fade-in-up" style="animation-delay: 0.1s;">
    <div class="card-img">
      <img src="https://htmltoolkit.github.io/HTMLPlayer/favicon.png" alt="HTMLPlayer icon" />
    </div>
    <span class="font-semibold">HTMLPlayer</span>
  </a>

  <a href="/htmlreader" class="card fade-in-up" style="animation-delay: 0.1s;">
    <div class="card-img">
      <img src="https://htmltoolkit.github.io/HTMLReader/favicon.png" alt="HTMLReader icon" />
    </div>
    <span class="font-semibold">HTMLReader</span>
  </a>

  <a href="/htmleditor" class="card fade-in-up" style="animation-delay: 0.1s;">
    <div class="card-img">
      <img src="https://htmltoolkit.github.io/HTMLEditor/favicon.png" alt="HTMLEditor icon" />
    </div>
    <span class="font-semibold">HTMLEditor</span>
  </a>

  <a href="/htmlnodemapper" class="card fade-in-up" style="animation-delay: 0.1s;">
    <div class="card-img">
      <img src="https://htmltoolkit.github.io/HTMLNodeMapper/favicon.png" alt="HTMLNodeMapper icon" />
    </div>
    <span class="font-semibold">HTMLNodeMapper</span>
  </a>


  <!-- additional tool cards here -->
</div>
