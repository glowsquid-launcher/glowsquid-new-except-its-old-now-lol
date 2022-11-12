import adapter from '@sveltejs/adapter-static';
import type { Config } from '@sveltejs/kit';

const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;
