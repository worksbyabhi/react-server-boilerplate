const { merge } = require('webpack-merge');
const path = require('path');
const openBrowser = require('react-dev-utils/openBrowser');
const webpackConfig = require('./config/webpack/webpack.config');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = merge(webpackConfig, {
  mode: 'development',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js',
    chunkFilename: 'js/[name].chunk.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
    publicPath: '/',
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    historyApiFallback: true,
    onListening: function (devServer) {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }
      const addr = devServer.server.address();
      openBrowser(`http://localhost:${addr.port}`);
    },
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
    new webpack.DefinePlugin({
      process: {
        env: JSON.stringify({ ...process.env, MODE: 'development' }),
      },
    }),
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
    new CaseSensitivePathsPlugin(),
  ],
});
