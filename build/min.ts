import * as path from 'path';
import * as UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import * as webpack from 'webpack';

export default {
	entry: path.resolve(__dirname, '../src/autoload.ts'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'font-awesome-openui5.min.js'
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
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new UglifyJSPlugin({
			sourceMap: true
		})
	],
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.js', '.json']
	}
};
