<script lang="ts" context="module">
  export const [sendInstances, recvInstances] = crossfade({
    duration: 300
  });
</script>

<script lang="ts">
  import * as R from 'ramda';
  import InstanceCard from '$components/InstanceCard.svelte';
  import type { Instance } from '$lib/instances';

  let news = [
    {
      title: 'Glowsquid Alpha!',
      description: 'We are proud to announce that Glowsquid has entered the alpha phase. We hope...'
    },
    {
      title: 'Glowsquid Alpha!',
      description: 'We are proud to announce that Glowsquid has entered the alpha phase. We hope...'
    },

    {
      title: 'Glowsquid Alpha!',
      description: 'We are proud to announce that Glowsquid has entered the alpha phase. We hope...'
    },
    {
      title: 'Glowsquid Alpha!',
      description: 'We are proud to announce that Glowsquid has entered the alpha phase. We hope...'
    }
  ];

  $: instanceGroups = R.toPairs(R.groupBy((inst) => inst.group ?? 'Other', instances));
  let newsSets = R.splitEvery(2, news);
</script>

<Grid padding fullWidth class="h-full">
  <Row>
    <Column>
      <Row>
        <Column noGutter>
          <h2>Instances</h2>
        </Column>
      </Row>
      {#each instanceGroups as [group, instances]}
        {@const set = R.splitEvery(4, instances)}
        <Row>
          <Column noGutter>
            <ExpandableTile expanded>
              <Row slot="above">
                <Column class="important-py-0">
                  <h3>{group}</h3>
                </Column>
              </Row>
              <div slot="below">
                {#each set as instSet}
                  <Row>
                    {#each instSet as instance}
                      <Column>
                        <div
                          out:sendInstances|local={{ key: instance.name }}
                          in:recvInstances|local={{ key: instance.name }}
                        >
                          <InstanceCard name={instance.name} lastPlayed={instance.lastPlayed} />
                        </div>
                      </Column>
                    {/each}
                  </Row>
                {/each}
              </div>
            </ExpandableTile>
          </Column>
        </Row>
      {/each}
    </Column>
  </Row>
  <Row>
    <Column>
      <Row>
        <Column>
          <h2 transition:fly|local={{ x: -500, duration: 300 }}>News</h2>
        </Column>
      </Row>

      {#each newsSets as set, idx}
        <Row>
          {#each set as news, newsIdx}
            <Column>
              <div
                transition:fly|local={{
                  y: -300,
                  duration: 300,
                  delay: (idx + newsIdx) * 50
                }}
              >
                <ClickableTile light>
                  <h4>{news.title}</h4>
                  <p>{news.description}</p>
                </ClickableTile>
              </div>
            </Column>
          {/each}
        </Row>
      {/each}
    </Column>
  </Row>
</Grid>
