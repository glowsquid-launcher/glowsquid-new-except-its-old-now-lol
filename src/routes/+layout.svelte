<script>
    import "carbon-components-svelte/css/g100.css";
    import { Header, HeaderNav, HeaderNavItem, Content, HeaderUtilities, HeaderGlobalAction, ClickableTile } from 'carbon-components-svelte';
    import { t } from '$lib/translations'
    import Settings from 'carbon-icons-svelte/lib/Settings.svelte'
    import User from "carbon-icons-svelte/lib/User.svelte";
    import NewTab from "carbon-icons-svelte/lib/NewTab.svelte";
</script>

<Header company="{$t('common.title')}" platformName="ALPHA">
    <HeaderUtilities>
        <HeaderGlobalAction aria-label="profiles" icon={NewTab}></HeaderGlobalAction>
        <HeaderGlobalAction aria-label="profiles" icon={User}></HeaderGlobalAction>
        <HeaderGlobalAction aria-label="settings" icon={Settings}></HeaderGlobalAction>
    </HeaderUtilities>
</Header>

<Content style="height: 100%">
    <slot></slot>
</Content>

