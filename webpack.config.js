'use strict';

const env = require('get-env')();

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const pkg = require('./package.json');

const banner = `Font Awesome icons for OpenUI5 ${pkg.version}
https://gluons.github.io/font-awesome-openui5/

The MIT License (MIT)
Copyright (c) 2016 Saran Tanpituckpong`;

// Optimization
let optimizationPlugins = [];
if (env == 'prod') {
	optimizationPlugins = [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	];
}

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
		extensions: ['.ts', '.js']
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					'ts-loader'
				]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin(banner),
		new webpack.DefinePlugin({
			VERSION: JSON.stringify(pkg.version)
		}),
		...optimizationPlugins
	]
};
