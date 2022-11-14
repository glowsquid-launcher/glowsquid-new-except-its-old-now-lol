export const prerender = true;
export const ssr = false;

import type { LayoutLoad } from './$types';
import { refreshLocales } from '$lib/i18n';

export const load: LayoutLoad = async ({ url }) => {
  const { pathname } = url;

  refreshLocales();

  return { pathname };
};
