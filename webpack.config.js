const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    avatar: path.resolve(__dirname, './src/avatar.ts')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[id].chunk.js'
  },
  devServer: {
    open: true,
    port: 7777,
    // hot: true,
    // contentBase: path.resolve(__dirname, 'dist'),
    host: '127.0.0.1'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: ['ts-loader']
    }, {
      test: /\.html$/,
      use: ['html-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};