import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';
import type { UserConfig } from 'vite';
import transformerDirectives from '@unocss/transformer-directives'

const config: UserConfig = {
	plugins: [
		UnoCSS({
			mode: 'svelte-scoped',
			transformers: [transformerDirectives()],
		}),
		sveltekit()
	],
	ssr: {
		noExternal: ['@carbon/charts', 'carbon-components'],
	},
};

export default config;
