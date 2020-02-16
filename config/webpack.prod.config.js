const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpackBaseConfig = require('./webpack.common.config.js')

module.exports = merge(
  webpackBaseConfig, 
  { 
    optimization: {
      minimizer: [
        new UglifyJSPlugin(),
        new OptimizeCSSAssetsPlugin()
      ]
    }
  })