const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
  context: resolve('src'),

  entry: {
    index: './index'
  },

  output: {
    filename: '[name].js',
    path: resolve('dist'),
    library: 'jsds',
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
    new webpack.NoErrorsPlugin(),
  ]
}
