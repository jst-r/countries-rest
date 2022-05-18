<script lang="ts">
  import Topbar from "./lib/Topbar.svelte";
</script>

<main>
  <Topbar />
  
</main>

<style>
  :root {
    --bg-color: hsl(207, 26%, 17%);
    --elem-bg-color: hsl(209, 23%, 22%);
    --text-color: hsl(0, 0%, 100%);

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: var(--bg-color);
    color: var(--text-color);
  }

  :global(body) {
    margin: 0;
  }
</style>
