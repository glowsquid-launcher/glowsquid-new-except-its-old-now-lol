<script lang="ts">
  import { searchQuery, modpackFilters } from "../+layout.svelte";
  // handle data fetching here
</script>

<h1>Modpacks</h1>
<h2>You searched for: {$searchQuery}</h2>
<h2>
  Filters:
  <pre>
  {JSON.stringify($modpackFilters, null, 2)}
</pre>
</h2>
