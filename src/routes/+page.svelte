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
    {
      title: "Glowsquid Alpha!",
      description:
        "We are proud to announce that Glowsquid has entered the alpha phase. We hope...",
    },

    {
      title: "Glowsquid Alpha!",
      description:
        "We are proud to announce that Glowsquid has entered the alpha phase. We hope...",
    },
    {
      title: "Glowsquid Alpha!",
      description:
        "We are proud to announce that Glowsquid has entered the alpha phase. We hope...",
    },
  ];

  let instanceSets = R.splitEvery(4, instances);
  let newsSets = R.splitEvery(2, news);
</script>

<Grid padding fullWidth class="h-full">
  <Row>
    <Column>
      {#each instanceSets as set}
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
  </Row>
  <Row>
    <Column>
      <Row>
        <Column>
          <h2>News</h2>
        </Column>
      </Row>

      {#each newsSets as set}
        <Row>
          {#each set as news}
            <Column>
              <ClickableTile light>
                <h4>{news.title}</h4>
                <p>{news.description}</p>
              </ClickableTile>
            </Column>
          {/each}
        </Row>
      {/each}
    </Column>
  </Row>
</Grid>
