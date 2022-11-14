<script lang="ts">
	import {
		getAuthenticationInfo,
		getMicrosoftToken,
		getAuthData,
		type DeviceCode
	} from 'tauri-plugin-copper-api';
	import { open } from '@tauri-apps/api/shell';
	import { writeText } from '@tauri-apps/api/clipboard';
	import { get } from 'svelte/store';

	let currentProgressStep = 0;

	async function openInBrowser(code: DeviceCode) {
		await writeText(code.userCode);
		await open(code.verificationUri);

		currentProgressStep = 1;

		const token = await getMicrosoftToken(code);

		currentProgressStep = 2;

		const data = await getAuthData(token);

		currentProgressStep = 3;

		// if the user has already added this account, we don't want to add it again
		if (!get(authState).accounts.some((a) => a.uuid === data.uuid)) {
			addAccount(data);
		}

		// select the account we just added/already added
		selectAccount(get(authState).accounts.findIndex((a) => a.uuid === data.uuid));

		toggleModal();

		currentProgressStep = 0;
	}
</script>

<ComposedModal bind:open={$internalAuthState.modalOpen}>
	<ModalHeader label={$LL.account.modal.label()} title={$LL.account.modal.title()} />
	<ModalBody class="h-full">
		{#if $authState.modalOpen}
			{#await getAuthenticationInfo()}
				<p>{$LL.account.modal.gettingCode()}</p>
			{:then code}
				<Grid>
					<Row class="items-center">
						<Column class="flex-shrink">
							<p class="important-pr-0">
								{$LL.account.modal.start(code.userCode)}
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
							<Button on:click={() => openInBrowser(code)} disabled={currentProgressStep >= 1}>
								{$LL.account.modal.startProcess()}
							</Button>
						</Column>
						<Column>
							<ProgressIndicator currentIndex={currentProgressStep} preventChangeOnClick vertical>
								<ProgressStep
									complete={currentProgressStep >= 1}
									label={$LL.account.modal.steps[0].label()}
									description={$LL.account.modal.steps[0].description()}
								/>
								<ProgressStep
									complete={currentProgressStep >= 2}
									label={$LL.account.modal.steps[1].label()}
									description={$LL.account.modal.steps[1].description()}
								/>
								<ProgressStep
									complete={currentProgressStep >= 3}
									label={$LL.account.modal.steps[2].label()}
									description={$LL.account.modal.steps[2].description()}
								/>
							</ProgressIndicator>
						</Column>
					</Row>
				</Grid>
			{/await}
		{/if}
	</ModalBody>
	<ModalFooter>
		<Button kind="secondary" on:click={toggleModal} aria-label={$LL.account.modal.cancel()}>
			{$LL.account.modal.cancel()}
		</Button>
	</ModalFooter>
</ComposedModal>
