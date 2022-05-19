<script>
  import CountryCard from "./content/CountryCard.svelte";
  import SearchBar from "./content/SearchBar.svelte";
</script>

<div class="container">
  <SearchBar />

  <div class="grid">
    <CountryCard />
  </div>
</div>

<style>
  .container {
    padding: 2em 4em 0 4em;
  }

  .grid {
      padding-top: 2em;
  }
</style>
