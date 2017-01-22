const path = require('path');
const webpack = require('webpack');

const pkg = require('./package.json');

const header = `Font Awesome icons for OpenUI5 ${pkg.version}
https://gluons.github.io/font-awesome-openui5/

The MIT License (MIT)
Copyright (c) 2016 Saran Tanpituckpong`;

module.exports = {
	entry: './src/font-awesome-openui5.ts',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'font-awesome-openui5.js',
		library: 'FontAwesomeOpenUI5',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loaders: ['babel', 'ts']
			},
			{
				test: /\.js$/,
				loader: 'babel'
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		],
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'source-map'
			}
		]
	},
	plugins: [
		require('webpack-fail-plugin'),
		new webpack.BannerPlugin(header),
		new webpack.DefinePlugin({
			VERSION: JSON.stringify(require('./package.json').version)
		})
	]
};
