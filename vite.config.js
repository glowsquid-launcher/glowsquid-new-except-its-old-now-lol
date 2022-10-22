import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['@carbon/charts', 'carbon-components'],
	},
};

export default config;
