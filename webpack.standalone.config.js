const webpack = require('webpack');
const copyright = require('./header.json').copyright.join('\n');

module.exports = {
	entry: './src/font-awesome-openui5.bundle.coffee',
	output: {
		path: __dirname + '/dist',
		filename: 'font-awesome-openui5.bundle.js'
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
			},
			{
				test: /\.js$/,
				include: /font-awesome-icon-chars/,
				loader: 'babel'
			}
		]
	},
	plugins: [
		new webpack.BannerPlugin(copyright)
	]
};
