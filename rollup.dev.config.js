import typescript from '@rollup/plugin-typescript';

const popup = {
	input: 'src/popup/index.ts',
	plugins: [typescript()],
	output: {
		file: 'dev-bundles/popup.js',
		format: 'iife',
	},
};

const background = {
	input: 'src/background/index.ts',
	plugins: [typescript()],
	output: {
		file: 'dev-bundles/background.js',
		format: 'iife',
	},
};

const contentScript = {
	input: 'src/content-script/index.ts',
	plugins: [typescript()],
	output: {
		file: 'dev-bundles/content.js',
		format: 'iife',
	},
};

const settingsPage = {
	input: 'src/settings-page/index.ts',
	plugins: [typescript()],
	output: {
		file: 'dev-bundles/settings.js',
		format: 'iife',
	},
};

// const tests = {
// 	input: 'tests/index.spec.ts',
// 	plugins: [typescript()],
// 	external: ['chai'],
// 	output: {
// 		sourcemap: true,
// 		file: 'dev-bundles/tests-specs.js',
// 		format: 'iife',
// 		globals: {chai: 'chai'},
// 	},
// };

export default [
	popup,
	background,
	contentScript,
	settingsPage,
	// tests,
];
