<script lang="ts">
  import {
    availableVersions,
    availableCategories,
    currentIdx,
    modpackFilters,
    resourcePackFilters,
    isModalOpen,
  } from "$lib/../routes/browse/+layout.svelte";

  import {
    ComposedModal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Select,
    SelectItem,
    Grid,
    Column,
    Row,
    MultiSelect,
    Checkbox,
  } from "carbon-components-svelte";

  $: modalTitle =
    $currentIdx === 0 ? "Modpack Filters" : "Resource Pack Filters";

  let inclSnaps = false;
  $: versions = inclSnaps
    ? availableVersions
    : availableVersions.filter((v) => v.type !== "snapshot");
</script>

<ComposedModal
  bind:open={$isModalOpen}
  on:submit={() => isModalOpen.set(false)}
>
  <ModalHeader label="Filter" title={modalTitle} />
  <ModalBody hasForm>
    <Grid noGutter padding>
      {#if $currentIdx === 0}
        <Row>
          <Column>
            <Checkbox labelText="Include snapshots" bind:checked={inclSnaps} />
            <Select
              bind:selected={$modpackFilters.minecraftVersion.version}
              label="Minecraft Version"
              helperText="Select the Minecraft version to filter by"
            >
              {#each versions as version}
                <SelectItem
                  value={version.id}
                  text={`${version.id} (${version.type})`}
                />
              {/each}
            </Select>
          </Column>
        </Row>
        <Row>
          <Column>
            <Select
              bind:value={$modpackFilters.loader}
              label="Loader"
              helperText="Select the loader to filter by"
            >
              <SelectItem value="all" text="All" />
              <SelectItem value="forge" text="Forge" />
              <SelectItem value="fabric" text="Fabric" />
            </Select>
          </Column>
          <Column>
            <MultiSelect
              bind:selectedIds={$modpackFilters.categories}
              label="Category"
              helperText="Select the category to filter by"
              items={availableCategories}
            />
          </Column>
        </Row>
      {:else}
        <Row>
          <Column>
            <Select
              bind:value={$resourcePackFilters.resolution}
              label="Resolution"
              helperText="Select the resolution to filter by"
            >
              <SelectItem value="8x" text="8x or smaller" />
              <SelectItem value="16x" text="16x" />
              <SelectItem value="32x" text="32x" />
              <SelectItem value="64x" text="64x" />
              <SelectItem value="128x" text="128x" />
              <SelectItem value="256x" text="256x" />
              <SelectItem value="512x" text="512x or higher" />
            </Select>
          </Column>
          <Column>
            <MultiSelect
              bind:selectedIds={$resourcePackFilters.categories}
              label="Category"
              helperText="Select the category to filter by"
              items={availableCategories}
            />
          </Column>
        </Row>
      {/if}
    </Grid>
  </ModalBody>
  <ModalFooter primaryButtonText="Close" />
</ComposedModal>
