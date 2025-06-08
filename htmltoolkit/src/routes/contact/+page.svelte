<script lang="ts">
  import { fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  let name = '';
  let email = '';
  let message = '';

  function handleSubmit(event: Event) {
    event.preventDefault();

    const to = encodeURIComponent('nellowtcs@gmail.com');
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    // build the mailto URL
    const mailtoUrl = `mailto:${to}?subject=${subject}&body=${body}`;

    // open the user's mail client
    window.location.href = mailtoUrl;
  }
</script>

<section class="fade-in-down">
  <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
  <p class="mb-6">
    Have questions, feedback, or want to contribute? Send us an email directly.
  </p>
</section>

<form class="max-w-lg mx-auto space-y-4" on:submit={handleSubmit}>
  <div>
    <label class="block mb-1 font-medium" for="name">Name</label>
    <input
      id="name"
      type="text"
      bind:value={name}
      placeholder="Your name"
      class="w-full form-input"
      required
    />
  </div>
  <div>
    <label class="block mb-1 font-medium" for="email">Email</label>
    <input
      id="email"
      type="email"
      bind:value={email}
      placeholder="you@example.com"
      class="w-full form-input"
      required
    />
  </div>
  <div>
    <label class="block mb-1 font-medium" for="message">Message</label>
    <textarea
      id="message"
      rows="5"
      bind:value={message}
      placeholder="Your message..."
      class="w-full form-textarea"
      required
    ></textarea>
  </div>
  <button
    type="submit"
    class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
  >
    Send Email
  </button>
</form>
