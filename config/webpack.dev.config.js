let baseConfig = require('./webpack.base.config')
let merge = require('webpack-merge')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let config = require('./index')
Object.keys(baseConfig.entry).forEach(function (name) {
  baseConfig.entry[name] = ['webpack-hot-middleware/client?reload=true'].concat(baseConfig.entry[name])
})
module.exports = merge(baseConfig, {
  devtool: '#cheap-module-eval-source-map',
  output: {
    publicPath: config.dev.publicPath
  },
  module: {
    rules: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    })
  ]
})
