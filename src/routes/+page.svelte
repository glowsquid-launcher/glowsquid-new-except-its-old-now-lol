<script>
   import { t } from '$lib/translations' 
   import * as R from 'ramda';
   import { Tile, Column, Grid, Row, ClickableTile } from 'carbon-components-svelte';
   import InstanceCard from '../lib/components/InstanceCard.svelte';
   let instances = [
      {"name": "Multiblock Madness","lastPlayed": new Date(2022, 9, 29, 15, 32)},
      {"name": "1.19.2","lastPlayed": new Date(2022, 9, 27, 12, 52)},
      {"name": "FTB Stoneblock 3","lastPlayed": new Date(2022, 8, 15, 10, 26)},
      {"name": "1.8.9","lastPlayed": new Date(2022, 8, 11, 10, 4)},
      {"name": "Enigmatica 6","lastPlayed": new Date(2022, 7, 29, 9, 15)},
      {"name": "Enigmatica 8","lastPlayed": new Date(2022, 7, 29, 9, 6)}
   ];

   let news = [
      {"title": "Glowsquid Alpha!", "description": "We are proud to announce that Glowsquid has entered the alpha phase. We hope..."}
   ]

   let instance_sets = R.splitEvery(3, instances);
</script>

<Grid condensed fullWidth style="height: 100%">
   <Row style="height: 100%">
      <Column lg={11}>
         <Grid>
            {#each instance_sets as set}
               <Row style="padding-bottom: 1.5rem;">
                  {#each set as instance}
                     <Column><InstanceCard name={instance.name} lastPlayed={instance.lastPlayed}/></Column>
                  {/each}
               </Row>
            {/each}
         </Grid>
      </Column>
      <Column lg={5} style="width: 100%;">
         <Tile style="width: 100%; height: 100%;">
            <h3 style="padding-bottom: 1rem;">News</h3>
            {#each news as item}
               <ClickableTile light style="margin-bottom: 0.5rem;">
                  <h5 style="padding-bottom: 0.5rem;">{item.title}</h5>
                  <p>{item.description}</p>
               </ClickableTile>
            {/each}
         </Tile>
      </Column>
   </Row>
</Grid>







