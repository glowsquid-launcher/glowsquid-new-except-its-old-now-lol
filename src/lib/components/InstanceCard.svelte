<script>
    import {Button, Tile} from 'carbon-components-svelte'
    import Settings from 'carbon-icons-svelte/lib/Settings.svelte';
    import Play from 'carbon-icons-svelte/lib/Play.svelte';
    import RelativeTime from '@yaireo/relative-time';
    import { t } from '$lib/translations' 

    const rt = new RelativeTime()
    export let name;
    export let lastPlayed;
    let date = rt.from(lastPlayed);
</script>

<Tile style="width: 15rem; margin-right: 0px;">
    <h4 style="margin-bottom: 0.25rem;">{name}</h4>
    <p style="margin-bottom: 0.5rem;"><em>{$t('instances.last_played', {date})}</em></p>
    <div align="right">
        <Button kind="ghost" iconDescription={$t('instances.play')} icon={Play}></Button>
        <Button kind="ghost" iconDescription={$t('instances.settings')} icon={Settings}></Button>
    </div>
</Tile>