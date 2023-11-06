const typescript = require('@rollup/plugin-typescript');

/* possible `logLevel` values:
 	* config.LOG_DISABLE
 	* config.LOG_ERROR
 	* config.LOG_WARN
 	* config.LOG_INFO
 	* config.LOG_DEBUG
*/
module.exports = function (config) {
	config.set({
		logLevel: config.LOG_INFO,
		basePath: '',
		port: 9876,
		concurrency: Infinity,
		colors: true,
		singleRun: true,
		autoWatch: false,
		frameworks: ['mocha', 'chai'],
		reporters: ['mocha'],
		files: [
			{pattern: 'tests/index.spec.ts', watched: false},
		],
		preprocessors: {
			'tests/index.spec.ts': ['rollup'],
		},
		rollupPreprocessor: {
			input: 'tests/index.spec.ts',
			plugins: [typescript()],
			external: ['chai'],
			output: {
				file: 'dev-bundles/tests-specs.js',
				format: 'iife',
				globals: {chai: 'chai'},
			},
		},
		client: {
			clearContext: false,
			mocha: {
				reporter: 'html',
			},
		},
		browsers: [
			'HeadlessChrome',
			// 'ChromeWithGUI',
		],
		customLaunchers: {
			HeadlessChrome: {
				base: 'ChromeHeadless',
				flags: ['--no-sandbox'],
			},
			ChromeWithGUI: {
				base: 'Chrome',
				flags: [
					'--no-sandbox',
					'--disable-gpu',
					'--remote-debugging-port-9222',
				],
			},
		},
	});
};
