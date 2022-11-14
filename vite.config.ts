import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite'
import type { UserConfig } from 'vite';
import transformerDirectives from '@unocss/transformer-directives'

const config: UserConfig = {
	plugins: [
		UnoCSS({
			mode: 'svelte-scoped',
			transformers: [transformerDirectives()],
		}),
		sveltekit(),
		AutoImport({
			dts: 'src/auto-imports.d.ts',
			include: [
				/\.[tj]sx?$/,
				/\.svelte$/,
			],
			imports: [
				'svelte',
				'svelte/store',
				'svelte/transition',
				{
					'carbon-components-svelte': [
						'Button',
						'Checkbox',
						'Grid',
						'Row',
						'Column',
						'Modal',
						'ComposedModal',
						'Select',
						'ProgressIndicator',
						'ProgressStep',
						'SelectItem',
						'MultiSelect',
						'ModalHeader',
						'ModalBody',
						'ModalFooter',
						'Header',
						'HeaderUtilities',
						'SkipToContent',
						'HeaderPanelLinks',
						'HeaderPanelLink',
						'HeaderAction',
						'HeaderPanelDivider',
						'Content',
						'HeaderGlobalAction',
						'HeaderNav',
						'HeaderNavItem',
						'ClickableTile',
						'Search',
						'ContentSwitcher',
						'Switch',
						'Tile'
					],
					'carbon-icons-svelte': [
						'Filter'
					]
				}
			],
			dirs: [
				'src/lib/**',
				'src/i18n'
			],
			eslintrc: {
				enabled: true,
			},
		}),
	],
	ssr: {
		noExternal: ['@carbon/charts', 'carbon-components'],
	},
};

export default config;
