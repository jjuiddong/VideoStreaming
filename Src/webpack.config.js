var path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ClosurePlugin = require('closure-webpack-plugin');
const dotenv = require('dotenv').config();


module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: './dist/index.js',
  devtool: "inline-source-map",
  // devtool: "source-map",
  // devtool: false,
  module: {
    rules: [
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  optimization: {
  },
  plugins: [
    // Ignore all locale files of moment.js
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja|it/),
    // new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env.AUTHOR' : JSON.stringify(process.env.AUTHOR),
      'process.env.API_URL' : JSON.stringify(process.env.API_URL),
    })
  ]  
};
