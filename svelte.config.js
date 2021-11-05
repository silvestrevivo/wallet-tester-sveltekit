import preprocess from 'svelte-preprocess';
import commonjs from '@rollup/plugin-commonjs';

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
				commonjs({
					include: 'node_modules/**',
					namedExports: {
						'node_modules/buffer/index.js': ['Buffer']
					}
				})
			]
		})
	}
};

export default config;
