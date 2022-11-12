<script lang="ts">
  import "carbon-components-svelte/css/g100.css";
  import {
    Header,
    HeaderNav,
    HeaderNavItem,
    Content,
    HeaderUtilities,
    HeaderGlobalAction,
    ClickableTile,
  } from "carbon-components-svelte";
  import LL from "$i18n/i18n-svelte";
  import Settings from "carbon-icons-svelte/lib/Settings.svelte";
  import User from "carbon-icons-svelte/lib/User.svelte";
  import NewTab from "carbon-icons-svelte/lib/NewTab.svelte";
</script>

<Header company={$LL.title()} platformName="ALPHA">
  <HeaderUtilities>
    <HeaderGlobalAction aria-label="profiles" icon={NewTab} />
    <HeaderGlobalAction aria-label="profiles" icon={User} />
    <HeaderGlobalAction aria-label="settings" icon={Settings} />
  </HeaderUtilities>
</Header>

<Content style="height: 100%">
  <slot />
</Content>
