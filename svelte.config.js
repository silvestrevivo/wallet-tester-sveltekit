import inject from '@rollup/plugin-inject';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: () => ({
			define: {
				global: 'window',
				process: 'window'
			},
			optimizeDeps: {
				include: ['buffer/index.js']
			},
			plugins: [
				{
					...inject({
						Buffer: ['buffer/index.js', 'Buffer']
					}),
					enforce: 'pre'
				}
			]
		})
	}
};

export default config;
