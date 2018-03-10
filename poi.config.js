module.exports = {
	entry: './src/main.js',
	html: {
		title: 'Font Awesome icons for OpenUI5',
		description: 'Provides Font Awesome icons for using in OpenUI5.'
	},
	extendWebpack(config) {
		config.module
			.rule('raw')
			.test(/\.txt$/)
			.use('raw')
			.loader('raw-loader');
	}
};
