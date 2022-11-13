<script lang="ts">
  // import { t } from "$lib/translations";
  import * as R from "ramda";
  import {
    Tile,
    Column,
    Grid,
    Row,
    ClickableTile,
  } from "carbon-components-svelte";
  import InstanceCard from "../lib/components/InstanceCard.svelte";
  let instances = [
    { name: "Multiblock Madness", lastPlayed: new Date(2022, 9, 29, 15, 32) },
    { name: "1.19.2", lastPlayed: new Date(2022, 9, 27, 12, 52) },
    { name: "FTB Stoneblock 3", lastPlayed: new Date(2022, 8, 15, 10, 26) },
    { name: "1.8.9", lastPlayed: new Date(2022, 8, 11, 10, 4) },
    { name: "Enigmatica 6", lastPlayed: new Date(2022, 7, 29, 9, 15) },
    { name: "Enigmatica 8", lastPlayed: new Date(2022, 7, 29, 9, 6) },
  ];

  let news = [
    {
      title: "Glowsquid Alpha!",
      description:
        "We are proud to announce that Glowsquid has entered the alpha phase. We hope...",
    },
  ];

  let instance_sets = R.splitEvery(4, instances);
</script>

<Grid padding fullWidth class="h-full">
  <Row class="h-full">
    <Column>
      {#each instance_sets as set}
        <Row>
          {#each set as instance}
            <Column>
              <InstanceCard
                name={instance.name}
                lastPlayed={instance.lastPlayed}
              />
            </Column>
          {/each}
        </Row>
      {/each}
    </Column>
    <Column lg={5}>
      <Tile class="w-full h-full">
        <Grid>
          <Row>
            <Column>
              <h3>News</h3>
            </Column>
          </Row>

          <Row>
            <Column>
              {#each news as item}
                <ClickableTile light>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </ClickableTile>
              {/each}
            </Column>
          </Row>
        </Grid>
      </Tile>
    </Column>
  </Row>
</Grid>
