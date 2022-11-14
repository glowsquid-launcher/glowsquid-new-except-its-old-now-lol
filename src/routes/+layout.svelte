<script lang="ts">
  import AddAccountModal from '$components/modals/AddAccountModal.svelte';
  import 'carbon-components-svelte/css/g100.css';

  import { Settings, User, NewTab } from 'carbon-icons-svelte';
  let isAuthOpen = false;
</script>

<AddAccountModal />

<Header company={$LL.title()} platformName="ALPHA">
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>

  <HeaderNav>
    <HeaderNavItem href="/" text={$LL.home()} />
    <HeaderNavItem href="/browse/modpacks" text={$LL.browse()} />
  </HeaderNav>

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
              <img src={account.icon} alt={$LL.account.avatarFor(account.username)} />
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
