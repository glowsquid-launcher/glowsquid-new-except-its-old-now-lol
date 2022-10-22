<script>
   import { t } from '$lib/translations' 
   import { ClickableTile } from 'carbon-components-svelte';
   import Play from "carbon-icons-svelte/lib/Play.svelte";
   import WatsonHealth3DSoftware from "carbon-icons-svelte/lib/WatsonHealth3DSoftware.svelte";
   import Cube from "carbon-icons-svelte/lib/Cube.svelte";
   var lastInstance = "1.18.2";
</script>

<h1 style="margin-bottom: 1rem;">{$t('home.welcome')}</h1>
<ClickableTile>
   <h4><Play/> Quick Launch</h4>
   <p>Launch last played instance: {lastInstance}</p>
</ClickableTile>
<ClickableTile>
   <h4><WatsonHealth3DSoftware/> New Instance</h4>
   <p>Create a new instance</p>
</ClickableTile>
<ClickableTile style="margin-bottom: 1rem;">
   <h4><Cube/> View Instances</h4>
   <p>Manage your installed instances</p>
</ClickableTile>

<h2 style="margin-bottom: 1rem;">News</h2>
<ClickableTile>
   <h4>News goes here.</h4>
   <p>What a new news article!</p>
</ClickableTile>
<ClickableTile>
   <h4>Even more news</h4>
   <p>Wow!</p>
</ClickableTile>


