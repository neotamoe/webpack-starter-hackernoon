const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack 4 Starter - this will appear in the html as your title',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  resolve: {
    extensions: [
      '.js', '.ts'
    ]
  },
  module: {
    rules: [
      {
        test: [/.js$/, /.ts$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/typescript'
            ]
          }
        }
      },
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader, // puts styles in separate file
          // 'style-loader', // puts styles in inline tags 
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  }
}

// main.js gets added to the index.html when webpacked