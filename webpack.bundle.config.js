const webpack = require('webpack');
const copyright = require('fs').readFileSync('./header.txt', 'utf8').replace(/\r\n/g, '\n').slice(0, -1);

module.exports = {
	entry: {
		'font-awesome-openui5': './src/font-awesome-openui5.coffee',
		'font-awesome-openui5.bundle': './src/font-awesome-openui5.bundle.coffee'
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].min.js',
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
			},
			{
				test: /\.js$/,
				include: /font-awesome-icon-chars/,
				loader: 'babel'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			},
			VERSION: JSON.stringify(require('./package.json').version)
		}),
		new webpack.BannerPlugin(copyright),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		})
	]
};
