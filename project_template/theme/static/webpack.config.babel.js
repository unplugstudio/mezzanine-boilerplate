const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV || 'development';
const IS_PROD = ENV === 'production';
const IS_DEV = !IS_PROD;

const styleConfig = [
	{
		loader: 'css-loader',
		options: { sourceMap: IS_DEV },
	},
	{
		loader: 'postcss-loader',
		options: {
			sourceMap: IS_DEV,
			plugins: () => [
				autoprefixer(), // See browserslist file
			],
		},
	},
	{
		loader: 'sass-loader',
		options: { sourceMap: IS_DEV, sourceMapContents: IS_DEV },
	},
];

const devPlugins = [
	new LiveReloadPlugin(),
];

const prodPlugins = [
	new webpack.LoaderOptionsPlugin({
		minimize: true,
		debug: false,
	}),
	new webpack.optimize.UglifyJsPlugin(),
];

const devStats = {
	hash: false,
	version: false,
	timings: false,
	assets: false,
	entrypoints: false,
	chunks: false,
	chunkModules: false,
	modules: false,
	reasons: false,
	depth: false,
	usedExports: false,
	providedExports: false,
	children: false,
	source: false,
	errors: true,
	errorDetails: true,
	warnings: true,
	publicPath: false,
	performance: false,
};

const prodStats = {
	...devStats,
	assets: true,
};

module.exports = {
	entry: {
		main: './js/main.js',
	},

	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build'),
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				// See .babelrc and .eslintrc.js
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: styleConfig,
				}),
			},
			{
				test: /\.(jpe?g|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$/,
				loader: 'file-loader',
			},
		],
	},

	plugins: [
		new StyleLintPlugin(), // See .stylelintrc
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true,
		}),
		new webpack.EnvironmentPlugin({ NODE_ENV: ENV }),
	].concat(IS_PROD ? prodPlugins : devPlugins),

	stats: IS_PROD ? prodStats : devStats,

	devtool: IS_PROD ? 'source-map' : 'inline-source-map',
};
