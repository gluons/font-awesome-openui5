require.config({
	baseUrl: '/base',
	paths: {
		'font-awesome-openui5': 'dist/font-awesome-openui5.min',
		'jquery': 'https://openui5.hana.ondemand.com/resources/sap-ui-core',
		'test': 'test/js/test'
	},
	deps: ['test'],
	shim: {
		'font-awesome-openui5': {
			deps: ['jquery']
		},
		'test': {
			deps: ['font-awesome-openui5']
		}
	},
	callback: window.__karma__.start
});
