import * as webpack from 'webpack';

import * as path from 'path';

const banner = `Font Awesome icons for OpenUI5
https://font-awesome-openui5.surge.sh/

The MIT License (MIT)
Copyright (c) 2016 Saran Tanpituckpong`;

const baseConfig: webpack.Configuration = {
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
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin(banner)
	],
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.js', '.json']
	}
};

export default baseConfig;
