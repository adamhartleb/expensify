const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => {
	const isProduction = env === 'production'

	return {
		entry: [
      'react-hot-loader/patch',
      './src/app.js'
    ],
		output: {
			path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
		},
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.js$/,
					exclude: /node_modules/
				},
				{
					test: /\.s?css$/,
					use: ExtractTextPlugin.extract({
						use: [
							{
								loader: 'css-loader',
								options: {
									sourceMap: true
								}
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true
								}
							}
						]
					})
				}
			]
		},
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			publicPath: '/dist/',
			historyApiFallback: true,
      hot: true,
      port: 8081
		},
		plugins: [
			new ExtractTextPlugin('styles.css'),
			new webpack.HotModuleReplacementPlugin()
		]
	}
}
