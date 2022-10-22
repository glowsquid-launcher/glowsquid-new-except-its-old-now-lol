<script>
    import "carbon-components-svelte/css/g100.css";
    import { Header, HeaderNav, HeaderNavItem, Content } from 'carbon-components-svelte';
</script>

<Header company="Glowsquid Launcher" platformName="ALPHA">
    <HeaderNav>
        <HeaderNavItem href="/" text="Home" icon="home"></HeaderNavItem>
        <HeaderNavItem text="Instances" icon=""></HeaderNavItem>
        <HeaderNavItem text="Modpacks"></HeaderNavItem>
    </HeaderNav>
</Header>

<Content>
    <slot></slot>
</Content>
