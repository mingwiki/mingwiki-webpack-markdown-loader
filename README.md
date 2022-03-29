# webpack-markdown-loader

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		index: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist')
	},
	resolveLoader: {
		modules: ['node_modules', './']
	},
	module: {
		rules: [
			{
				test: /\.md$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							esModule: false,
						}
					},
					{
						loader: 'markdown-loader',
					}
				]
			}
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'test loader',
			template: './src/index.html',
			markdown: './src/article.md',
		}),
	]
}
```