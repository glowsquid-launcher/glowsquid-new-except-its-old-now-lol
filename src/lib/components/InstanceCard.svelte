<script lang="ts">
  import { goto } from '$app/navigation';

  import { Settings, Play } from 'carbon-icons-svelte';

  export let name: string;
  export let lastPlayed: Date;

  const date = getRelativeTime(lastPlayed);
</script>

<Tile
  class="h-full important-flex flex-col justify-between bg-gradient-to-tr from-zinc-900 to-neutral-900 important-shadow-md hover:shadow-xl transition "
>
  <div class="mb-4">
    <h3>{name}</h3>
    <p class="italic">
      {$LL.instances.lastPlayed(date)}
    </p>
  </div>
  <div id="buttons" class="flex gap-4">
    <Button
      kind="ghost"
      id="playBtn"
      class="important-pa-0"
      iconDescription={$LL.instances.play()}
      icon={Play}
    />
    <Button
      kind="ghost"
      class="important-pa-0"
      iconDescription={$LL.instances.options()}
      icon={Settings}
      on:click={() => goto(`/instances/${name}`)}
    />
  </div>
</Tile>

<style>
  :global(#buttons svg) {
    @apply w-10 h-10;
  }
  :global(#playBtn svg path) {
    @apply fill-green-500;
  }
</style>
