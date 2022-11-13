import { getLauncherMeta, type LauncherMeta } from "$lib/launcherMeta"
import type { LayoutLoad } from "./$types"

export const load: LayoutLoad = async ({ fetch }) => {
    const launcherMeta: LauncherMeta = await getLauncherMeta(fetch)

    return {
        launcherMeta
    }
}
