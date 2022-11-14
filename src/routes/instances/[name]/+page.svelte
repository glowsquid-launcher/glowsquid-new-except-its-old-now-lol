<script lang="ts">
  import InstanceCard from '$components/InstanceCard.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="max-h-10">
  <InstanceCard name={data.name ?? 'Unknown'} lastPlayed={data.lastPlayed ?? new Date()} />
</div>
