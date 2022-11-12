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

<Tile style="width: 15rem; margin-right: 0px;">
  <h4 style="margin-bottom: 0.25rem;">{name}</h4>
  <p style="margin-bottom: 0.5rem;">
    <em>{$LL.instances.lastPlayed(date)}</em>
  </p>
  <div>
    <Button kind="ghost" iconDescription={$LL.instances.play()} icon={Play} />
    <Button
      kind="ghost"
      iconDescription={$LL.instances.settings()}
      icon={Settings}
    />
  </div>
</Tile>
