const { resolve } = require('path');
const StylishReporter = require('webpack-stylish');

const pkg = require('./package.json');

const stylish = new StylishReporter();

module.exports = {
	mode: 'production',
	entry: resolve(__dirname, './web/autoload.ts'),
	output: {
		path: resolve(__dirname, './dist'),
		filename: 'autoload.js'
	},
	resolve: {
		extensions: ['.ts', '.js', '.json']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader'
			}
		]
	},
	plugins: [
		stylish
	],
	devtool: 'source-map',
	stats: 'minimal'
};
