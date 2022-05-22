<script>
  import CountryCard from "./content/CountryCard.svelte";
  import SearchBar from "./content/SearchBar.svelte";
</script>

<div class="container">
  <SearchBar />

  <div class="grid">
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
    <CountryCard />
  </div>
</div>

<style>
  .container {
    margin: 2em min(2em, 5%) 0;
  }

  .grid {
    margin: 0 auto;
    padding-top: 2em;
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    place-items: center;
  }
</style>
