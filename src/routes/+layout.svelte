<script>
    import "carbon-components-svelte/css/g100.css";
    import { Header, HeaderNav, HeaderNavItem, Content, HeaderUtilities, HeaderGlobalAction } from 'carbon-components-svelte';
    import { t } from '$lib/translations'
    import Settings from 'carbon-icons-svelte/lib/Settings.svelte'
</script>

<Header company="{$t('common.title')}" platformName="ALPHA">
    <HeaderNav>
        <HeaderNavItem href="/" text="{$t('common.home')}"></HeaderNavItem>
        <HeaderNavItem text="{$t('common.instances')}" icon=""></HeaderNavItem>
        <HeaderNavItem text="{$t('common.modpacks')}"></HeaderNavItem>
    </HeaderNav>
    <HeaderUtilities>
        <HeaderGlobalAction aria-label="settings" icon={Settings}></HeaderGlobalAction>
    </HeaderUtilities>
</Header>

<Content>
    <slot></slot>
</Content>
