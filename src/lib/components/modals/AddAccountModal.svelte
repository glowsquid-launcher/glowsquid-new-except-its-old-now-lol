<script lang="ts">
  import {
    ComposedModal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Grid,
    Row,
    Column,
    ProgressIndicator,
    ProgressStep,
  } from "carbon-components-svelte";

  import {
    authState,
    internalAuthState,
    toggleModal,
    addAccount,
  } from "$lib/auth";
  import {
    getAuthenticationInfo,
    getMicrosoftToken,
    getAuthData,
    type DeviceCode,
  } from "tauri-plugin-copper-api";
  import { open } from "@tauri-apps/api/shell";
  import { writeText } from "@tauri-apps/api/clipboard";

  let currentProgressStep = 0;

  async function openInBrowser(code: DeviceCode) {
    await writeText(code.userCode);
    await open(code.verificationUri);

    currentProgressStep = 1;

    const token = await getMicrosoftToken(code);

    currentProgressStep = 2;

    const data = await getAuthData(token);

    currentProgressStep = 3;

    addAccount(data);
    toggleModal();

    currentProgressStep = 0;
  }
</script>

<ComposedModal bind:open={$internalAuthState.modalOpen}>
  <ModalHeader label="Accounts" title="Add account" />
  <ModalBody class="h-full">
    {#if $authState.modalOpen}
      {#await getAuthenticationInfo()}
        <p>fetching device code, please wait</p>
      {:then code}
        <Grid>
          <Row class="items-center">
            <Column>
              <p>
                Lets start! Click on Start the process and copy {code.userCode}.
                Paste this code at
                <a
                  href={code.verificationUri}
                  target="__blank"
                  on:click={() => open(code.verificationUri)}
                >
                  {code.verificationUri}</a
                >
              </p>
            </Column>

            <Column>
              <Button
                on:click={() => openInBrowser(code)}
                disabled={currentProgressStep >= 1}
              >
                Start the process
              </Button>
            </Column>
            <Column>
              <ProgressIndicator
                currentIndex={currentProgressStep}
                preventChangeOnClick
                vertical
              >
                <ProgressStep
                  complete={currentProgressStep >= 1}
                  label="Started process"
                  description="You have started the process of adding an account"
                />
                <ProgressStep
                  complete={currentProgressStep >= 2}
                  label="Recieved access token"
                  description="Glowsquid has recieved the access token from Microsoft"
                />
                <ProgressStep
                  complete={currentProgressStep >= 3}
                  label="Recieved account data"
                  description="Glowsquid has recieved the account data from Microsoft"
                />
              </ProgressIndicator>
            </Column>
          </Row>
        </Grid>
      {/await}
    {/if}
  </ModalBody>
  <ModalFooter>
    <Button kind="secondary" on:click={toggleModal} aria-label="Cancel">
      Cancel
    </Button>
  </ModalFooter>
</ComposedModal>
