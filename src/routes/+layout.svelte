<script lang="ts">
  import "carbon-components-svelte/css/g100.css";
  import {
    Header,
    Content,
    HeaderUtilities,
    SkipToContent,
    HeaderPanelLink,
    HeaderPanelLinks,
    HeaderAction,
    HeaderPanelDivider,
    HeaderGlobalAction,
  } from "carbon-components-svelte";
  import LL from "$i18n/i18n-svelte";
  import Settings from "carbon-icons-svelte/lib/Settings.svelte";
  import User from "carbon-icons-svelte/lib/User.svelte";
  import NewTab from "carbon-icons-svelte/lib/NewTab.svelte";

  import { authState, selectAccount, toggleModal } from "$lib/auth";
  import AddAccountModal from "$lib/components/modals/AddAccountModal.svelte";
  import { Account } from "carbon-icons-svelte";
  let isAuthOpen = false;
</script>

<AddAccountModal />

<Header company={$LL.title()} platformName="ALPHA">
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>

  <HeaderUtilities>
    <HeaderGlobalAction icon={NewTab} />
    <HeaderAction
      aria-label={$LL.account.select()}
      icon={User}
      bind:open={isAuthOpen}
      text={$authState.selectedAccount !== null
        ? $authState.selectedAccount.username
        : $LL.account.noAccountSelected()}
    >
      <HeaderPanelLinks>
        {#each $authState.accounts as account, idx}
          <HeaderPanelLink
            on:click={() => {
              selectAccount(idx);
              isAuthOpen = false;
            }}
          >
            <p class="flex flex-row items-center gap-3">
              <img
                src={account.icon}
                alt={$LL.account.avatarFor(account.username)}
              />
              {account.username}
            </p>
          </HeaderPanelLink>
        {/each}
        <HeaderPanelDivider />
        <HeaderPanelLink on:click={toggleModal}>
          {$LL.account.add()}
        </HeaderPanelLink>
        <HeaderPanelLink>{$LL.account.management()}</HeaderPanelLink>
      </HeaderPanelLinks>
    </HeaderAction>
    <HeaderAction text={$LL.settings.name()} icon={Settings} />
  </HeaderUtilities>
</Header>

<Content class="h-full">
  <slot />
</Content>

<style uno:preflights uno:safelist global></style>
