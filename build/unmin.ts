import * as path from 'path';

export default {
	entry: path.resolve(__dirname, '../src/autoload.ts'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'font-awesome-openui5.js'
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
