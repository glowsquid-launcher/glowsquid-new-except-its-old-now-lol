<script context="module" lang="ts">
  export const currentIdx = writable(0);
  export const searchQuery = writable('');
  export const isModalOpen = writable(false);

  export const modpackFilters = writable({
    loader: 'all' as 'all' | 'forge' | 'fabric',
    minecraftVersion: {
      version: '',
      type: 'release' as 'release' | 'snapshot' | 'old_beta' | 'old_alpha'
    },
    categories: [] as string[]
  });

  export const resourcePackFilters = writable({
    resolution: 'all' as 'all' | '8x' | '16x' | '32x' | '64x' | '128x' | '256x' | '512x',
    categories: [] as string[]
  });

  // TODO: fetch from API
  export let availableVersions = [] as {
    id: string;
    type: 'release' | 'snapshot' | 'old_beta' | 'old_alpha';
  }[];

  export let availableCategories = [] as {
    id: string;
    text: string;
  }[];
</script>

<script lang="ts">
  import type { LayoutData } from './$types';
  import { goto } from '$app/navigation';
  import FilterModal from '$components/modals/FilterModal.svelte';

  $: {
    // set route based on currentIdx
    switch ($currentIdx) {
      case 0:
        goto('/browse/modpacks');
        break;
      case 1:
        goto('/browse/resourcePacks');
        break;
    }
  }

  $: searchPlaceholder = $currentIdx === 0 ? 'Search modpacks' : 'Search resource packs';

  export let data: LayoutData;
  availableVersions = data.launcherMeta.versions;
</script>

<FilterModal />

<div transition:fade={{ duration: 300 }}>
  <Grid padding noGutter>
    <Column class="important-pa-0">
      <Column class="flex flex-row">
        <Search placeholder={searchPlaceholder} bind:value={$searchQuery} />
        <Button
          kind="secondary"
          icon={Filter}
          iconDescription="Filter"
          on:click={() => isModalOpen.set(true)}
        />
      </Column>
      <Column>
        <ContentSwitcher bind:selectedIndex={$currentIdx}>
          <Switch text="Modpacks" />
          <Switch text="Resource packs" />
        </ContentSwitcher>
      </Column>
    </Column>

    <Column>
      <slot />
    </Column>
  </Grid>
</div>
