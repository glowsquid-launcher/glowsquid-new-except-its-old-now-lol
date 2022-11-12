<script lang="ts">
  import { Button, Tile } from "carbon-components-svelte";
  import Settings from "carbon-icons-svelte/lib/Settings.svelte";
  import Play from "carbon-icons-svelte/lib/Play.svelte";
  import LL from "$i18n/i18n-svelte";
  import { getRelativeTime } from "$lib/time";

  export let name: string;
  export let lastPlayed: Date;

  const date = getRelativeTime(lastPlayed);
</script>

<Tile
  class="bg-gradient-to-tr from-zinc-800 to-neutral-800 important-shadow-md hover:shadow-xl transition"
>
  <div class="mb-4">
    <h4>{name}</h4>
    <p class="italic">
      {$LL.instances.lastPlayed(date)}
    </p>
  </div>
  <div id="buttons" class="flex flex-row gap-4">
    <Button
      kind="ghost"
      id="playBtn"
      class="pa-1"
      iconDescription={$LL.instances.play()}
      icon={Play}
    />
    <Button
      kind="ghost"
      class="pa-0"
      iconDescription={$LL.instances.settings()}
      icon={Settings}
    />
  </div>
</Tile>

<style>
  :global(#buttons svg) {
    @apply w-8 h-8;
  }
  :global(#playBtn svg path) {
    @apply fill-green-500;
  }
</style>
