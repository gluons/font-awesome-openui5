const path = require('path');

module.exports = {
	entry: './src/font-awesome-openui5.ts',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'font-awesome-openui5.js',
		library: 'FontAwesomeOpenUI5',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loaders: ['babel', 'ts']
			},
			{
				test: /\.js$/,
				loader: 'babel'
			},
			{
				test: /\.json$/,
				loader: 'json'
			}
		],
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'source-map'
			}
		]
	},
	plugins: [
		require('webpack-fail-plugin')
	]
};
