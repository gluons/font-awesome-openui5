// Karma configuration
// Generated on Sat Apr 15 2017 18:51:50 GMT+0700 (ICT)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai'],


		// list of files / patterns to load in the browser
		files: [
			'https://openui5.hana.ondemand.com/1.44.9/resources/sap-ui-core.js',
			'./dist/font-awesome-openui5.min.js',
			{ pattern: './dist/font-awesome-openui5.min.js.map', included: false },
			'./test/icon-count.json',
			{ pattern: './test/browser.ts', watched: false }
		],


		// list of files to exclude
		exclude: [
		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'**/*.json': ['json'],
			'**/*.ts': ['webpack']
		},

		webpack: {
			module: {
				rules: [
					{
						enforce: 'pre',
						test: /\.js$/,
						loader: 'source-map-loader'
					},
					{
						enforce: 'pre',
						test: /\.ts$/,
						use: 'source-map-loader'
					},
					{
						test: /\.ts$/,
						exclude: /node_modules/,
						use: [
							'babel-loader',
							{
								loader: 'ts-loader',
								options: {
									compilerOptions: {
										declaration: false
									}
								}
							}
						]
					},
					{
						test: /\.js$/,
						loader: 'babel-loader'
					}
				]
			},
			resolve: {
				extensions: ['.ts', '.js', '.json']
			}
		},

		mime: {
			'text/x-typescript': ['ts']
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha'],

		client: {
			mocha: {
				reporter: 'html'
			}
		},

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [
			process.env.CI ? 'Firefox' : 'FirefoxDeveloper'
		],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	});
};
