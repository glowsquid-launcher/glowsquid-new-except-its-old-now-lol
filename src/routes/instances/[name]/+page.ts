import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ params }) => {
    return instances.find(inst => inst.name == params.name)
}