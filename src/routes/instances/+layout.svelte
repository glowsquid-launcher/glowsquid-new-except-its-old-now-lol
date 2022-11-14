<script lang="ts">
  import InstanceCard from '$components/InstanceCard.svelte';
  import { recvInstances, sendInstances } from '../+page.svelte';
</script>

<Grid noGutter class="ml-0 mr-0">
  <Row>
    <Column lg={2}>
      <Row>
        <h2>Instances</h2>
      </Row>

      <Row padding noGutter>
        {#each instances as instance}
          <Column class="h-full">
            <div
              class="w-full h-full"
              out:sendInstances|local={{ key: instance.name }}
              in:recvInstances|local={{ key: instance.name }}
            >
              <InstanceCard name={instance.name} lastPlayed={instance.lastPlayed} />
            </div>
          </Column>
        {/each}
      </Row>
    </Column>
    <Column class="flex-grow mt-14">
      <slot />
    </Column>
  </Row>
</Grid>
