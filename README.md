# mingwiki-webpack-markdown-loader

```bash
npm i mingwiki-webpack-markdown-loader
```


## webpack 

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
						loader: 'mingwiki-webpack-markdown-loader
',
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
