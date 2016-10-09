// Karma configuration
// Generated on Sun Sep 18 2016 21:42:01 GMT+0700 (เวลามาตรฐานเอเชียอาคเนย์)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai'],


		// list of files / patterns to load in the browser
		files: [
			'https://openui5.hana.ondemand.com/1.38.4/resources/sap-ui-core.js',
			'dist/font-awesome-openui5.bundle.min.js',
			'test/icon-count.json',
			'test/test.bundle.js'
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'test/*.json': ['json']
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
		browsers: ['Firefox'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	});
};
