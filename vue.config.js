module.exports = {
	chainWebpack(config) {
		config.module
			.rule('raw')
			.test(/\.txt$/)
			.use('raw')
			.loader('raw-loader');
	}
};
