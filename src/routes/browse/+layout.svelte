<script context="module">
  export const currentIdx = writable(1);
  export const searchQuery = writable("");
</script>

<script lang="ts">
  import { goto } from "$app/navigation";

  import {
    Grid,
    Column,
    Search,
    Button,
    ContentSwitcher,
    Switch,
  } from "carbon-components-svelte";
  import { Filter } from "carbon-icons-svelte";
  import { writable } from "svelte/store";

  $: {
    // set route based on currentIdx
    switch ($currentIdx) {
      case 0:
        goto("/browse/mods");
        break;
      case 1:
        goto("/browse/modpacks");
        break;
      case 2:
        goto("/browse/resourcePacks");
        break;
    }
  }
</script>

<Grid padding noGutter>
  <Column class="important-pa-0">
    <Column class="flex flex-row">
      <Search placeholder="Search for modpacks" bind:value={$searchQuery} />
      <!-- TODO: figure out how 2 dropdown with a button -->
      <Button kind="secondary" icon={Filter} iconDescription="Filter" />
    </Column>
    <Column>
      <ContentSwitcher bind:selectedIndex={$currentIdx}>
        <Switch text="Mods" />
        <Switch text="Modpacks" />
        <Switch text="Resource packs" />
      </ContentSwitcher>
    </Column>
  </Column>

  <Column>
    <slot />
  </Column>
</Grid>
