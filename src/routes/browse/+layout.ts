import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ fetch }) => {
  const launcherMeta = await getLauncherMeta(fetch);

  return {
    launcherMeta
  };
};
