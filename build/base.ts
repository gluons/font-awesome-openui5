import { Configuration } from 'webpack';

import * as path from 'path';

const baseConfig: Configuration = {
	entry: path.resolve(__dirname, '../src/autoload.ts'),
	output: {
		path: path.resolve(__dirname, '../dist')
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			},
			{
				enforce: 'pre',
				test: /\.ts$/,
				use: 'source-map-loader'
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					{
						loader: 'ts-loader',
						options: {
							compilerOptions: {
								declaration: false
							}
						}
					}
				]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			}
		]
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.js', '.json']
	}
};

export default baseConfig;
