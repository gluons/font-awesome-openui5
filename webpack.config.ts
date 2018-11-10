import { resolve } from 'path';
import { Configuration } from 'webpack';
import Stylish from 'webpack-stylish';
import WebpackBar from 'webpackbar';

export default {
	mode: 'production',
	entry: resolve(__dirname, './web/autoload.ts'),
	output: {
		path: resolve(__dirname, './dist'),
		filename: 'autoload.js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: {
					compilerOptions: {
						declaration: false,
						sourceMap: true
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.wasm', '.mjs', '.ts', '.js', '.json'] // Include .ts
	},
	plugins: [
		new WebpackBar(),
		new Stylish()
	],
	devtool: 'source-map',
	stats: false
} as Configuration;
