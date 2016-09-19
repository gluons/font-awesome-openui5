const webpack = require('webpack');
const copyright = require('./header.json').copyright.join('\n');

module.exports = {
	entry: './src/font-awesome-openui5.coffee',
	output: {
		path: __dirname + '/dist',
		filename: 'font-awesome-openui5.js',
		library: 'font-awesome-openui5',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.coffee$/,
				loader: 'coffee'
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin(copyright)
	]
};
