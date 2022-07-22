import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte/types/compiler/preprocess';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter(),
		target: '#svelte'
	}
};

export default config;
