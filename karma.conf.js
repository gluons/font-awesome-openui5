// Karma configuration
// Generated on Thu Apr 07 2016 13:15:06 GMT+0700 (เวลามาตรฐานเอเชียอาคเนย์)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['mocha', 'chai'],


		// list of files / patterns to load in the browser
		files: [
			{ pattern: 'bower_components/font-awesome-icon-chars/character-list/character-list.json', included: false, served: true },
			'https://openui5.hana.ondemand.com/resources/sap-ui-core.js',
			'src/font-awesome-openui5.coffee',
			'test/test.coffee'
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'**/*.coffee': ['coffee']
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['mocha'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Firefox'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity,

		client: {
			mocha: {
				reporter: 'html',
				ui: 'bdd'
			}
		},

		coffeePreprocessor: {
			options: {
				bare: true
			}
		}
	});
};
