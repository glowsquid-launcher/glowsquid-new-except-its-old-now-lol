<script lang="ts" context="module">
  export const [sendInstances, recvInstances] = crossfade({
    duration: 300
  });
</script>

<script lang="ts">
  import InstanceCard from '$components/InstanceCard.svelte';
  import { groupBy, prop, sort, splitEvery, toPairs } from 'ramda';

  let news = new Array(5).fill(0).map(() => ({
    title: 'Glowsquid Alpha!',
    description: 'We are proud to announce that Glowsquid has entered the alpha phase. We hope...'
  }));

  $: instanceGroups = sort(
    ([group], [group2]) => group.localeCompare(group2),
    toPairs(groupBy(prop('group'), instances))
  );

  let newsSets = splitEvery(2, news);
</script>

<Grid padding fullWidth class="h-full">
  <Row>
    <Column>
      <Row>
        <Column>
          <h2 class="text-5xl">Instances</h2>
        </Column>
      </Row>
      {#each instanceGroups as [group, instances]}
        {@const set = splitEvery(4, instances)}
        <Row>
          <Column noGutter>
            <ExpandableTile expanded class="important-py-0">
              <Row slot="above">
                <Column>
                  <h3 class="text-4xl">{group}</h3>
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
