<script lang="ts">
  import Content from "./lib/Content.svelte";
  import Topbar from "./lib/Topbar.svelte";
</script>

<main>
  <Topbar />
  <Content />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

  :root {
    --bg-color: hsl(207, 26%, 17%);
    --elem-bg-color: hsl(209, 23%, 22%);
    --text-color: hsl(0, 0%, 100%);

    --font-weight-normal: 300;
    --font-weight-semibold: 600;
    --font-weight-bold: 800;

    font-family: 'Nunito Sans', sans-serif;
    background: var(--bg-color);
    color: var(--text-color);

    font-weight: var(--font-weight-normal);
  }

  :global(body) {
    margin: 0;
  }

  :global(b) {
    font-weight: var(--font-weight-bold);
  }

  :global(.semi-bold) {
    font-weight: var(--font-weight-semibold);
  }
</style>
