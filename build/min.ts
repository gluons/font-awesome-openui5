import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import * as UglifyJSPlugin from 'uglifyjs-webpack-plugin';

import baseConfig from './base';

export default merge(baseConfig, {
	output: {
		filename: 'font-awesome-openui5.min.js'
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
	]
});
