import { derived, writable } from "svelte/store";
import type { AuthData } from "tauri-plugin-copper-api";

/**
 * Do NOT use this store directly. Use the `auth` store instead unless absolutely necessary.
 */
export const internalAuthState = writable({
    authAccs: [] as AuthData[],
    selectedAccountIdx: null as number | null,
    modalOpen: false,
})

export const addAccount = (authData: AuthData) => internalAuthState.update(state => ({
    ...state,
    authAccs: [...state.authAccs, authData],
}))

export const selectAccount = (idx: number) => internalAuthState.update(state => ({
    ...state,
    selectedAccountIdx: idx,
}))

export const deleteAccount = (idx: number) => internalAuthState.update(state => ({
    ...state,
    authAccs: state.authAccs.filter((_, i) => i !== idx),
    selectedAccountIdx: state.selectedAccountIdx === idx ? null : state.selectedAccountIdx,
}))

export const toggleModal = () => internalAuthState.update(state => ({
    ...state,
    modalOpen: !state.modalOpen,
}))

export const authState = derived(
    internalAuthState,
    $state => ({
        ...$state,
        accounts: $state.authAccs.map(acc => {
            return {
                ...acc,
                icon: `https://crafthead.net/avatar/${acc.uuid}/16`,
            }
        }),
        selectedAccount: $state.selectedAccountIdx === null ? null : $state.authAccs[$state.selectedAccountIdx],
    })
)