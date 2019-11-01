const path = require('path')
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.tsx?$/,
				use: ['ts-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.ts?$/,
				use: ['ts-loader'],
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['*', 'ts', 'tsx', '.js']
	}
}
