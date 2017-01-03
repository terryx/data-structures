const { resolve } = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const { getIfUtils, removeEmpty } = require('webpack-config-utils');
// const { ifDevelopment, ifProduction } = getIfUtils(process.env.NODE_ENV);

module.exports = {
  context: resolve('src'),

  entry: {
    index: './index'
  },

  output: {
    filename: '[name].js',
    path: resolve('dist'),
    library: 'DataStructures',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: ['eslint-loader']
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  plugins: [
    //DEFAULT
    new webpack.NoErrorsPlugin(),
  ]
}
