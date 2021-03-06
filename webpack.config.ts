import { resolve } from 'path';
import { BannerPlugin, Configuration } from 'webpack';
import Stylish from 'webpack-stylish';
import WebpackBar from 'webpackbar';

require('object.values/shim')();

const pkg = require('./package.json');

const banner = `
Font Awesome icons for OpenUI5 v${pkg.version}
Created by Saran Tanpituckpong
Released under the MIT License
`.trim();

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
		new BannerPlugin(banner),
		new WebpackBar(),
		new Stylish()
	],
	devtool: 'source-map',
	stats: false
} as Configuration;
