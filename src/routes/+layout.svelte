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
    SkipToContent,
    HeaderPanelLink,
    HeaderPanelLinks,
    HeaderAction,
    HeaderPanelDivider,
  } from "carbon-components-svelte";
  import LL from "$i18n/i18n-svelte";
  import Settings from "carbon-icons-svelte/lib/Settings.svelte";
  import User from "carbon-icons-svelte/lib/User.svelte";
  import NewTab from "carbon-icons-svelte/lib/NewTab.svelte";

  import { authState, selectAccount, toggleModal } from "$lib/auth";
  import AddAccountModal from "$lib/components/modals/AddAccountModal.svelte";
  let isAuthOpen = false;
</script>

<AddAccountModal />

<Header company={$LL.title()} platformName="ALPHA">
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>

  <HeaderUtilities>
    <HeaderGlobalAction aria-label="add instance" icon={NewTab} />
    <HeaderAction aria-label="profiles" icon={User} bind:open={isAuthOpen}>
      <HeaderPanelLinks>
        {#each $authState.accounts as account, idx}
          <HeaderPanelLink
            on:click={() => {
              selectAccount(idx);
              isAuthOpen = false;
            }}>{account.username}</HeaderPanelLink
          >
        {/each}
        <HeaderPanelDivider />
        <HeaderPanelLink on:click={toggleModal}>Add account</HeaderPanelLink>
      </HeaderPanelLinks>
    </HeaderAction>
    <HeaderGlobalAction aria-label="settings" icon={Settings} />
  </HeaderUtilities>
</Header>

<Content class="h-full">
  <slot />
</Content>

<style uno:preflights uno:safelist global></style>
