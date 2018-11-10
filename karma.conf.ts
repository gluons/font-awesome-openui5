export = config => {
	config.set({
		basePath: '',
		frameworks: ['mocha', 'chai'],
		files: [
			'https://openui5.hana.ondemand.com/1.52.7/resources/sap-ui-core.js',
			'dist/autoload.js',
			'test/icon-count.json',
			'test/browser.test.ts'
		],
		exclude: [],
		preprocessors: {
			'**/*.json': ['json'],
			'**/*.ts': ['typescript']
		},
		transformPath(path: string) {
			return path.replace(/\.ts$/, '.js');
		},
		reporters: ['mocha'],
		client: {
			mocha: {
				reporter: 'html'
			}
		},
		port: 9876,
		colors: true,
		logLevel: config.LOG_ERROR,
		autoWatch: false,
		browsers: ['FirefoxHeadless'],
		singleRun: true,
		concurrency: Infinity
	});
};
