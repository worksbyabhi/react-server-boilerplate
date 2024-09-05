const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(webpackConfig, {
  mode: 'production',
  plugins: [new BundleAnalyzerPlugin()],
});
