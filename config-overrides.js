/* eslint-disable import/no-extraneous-dependencies */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = function override(config) {
  const newConfig = config;
  if (!config.resolve) {
    newConfig.resolve = { plugins: [] };
  }
  if (newConfig.resolve.plugins) {
    newConfig.resolve.plugins.push(new TsconfigPathsPlugin());
  } else {
    newConfig.resolve.plugins = [new TsconfigPathsPlugin()];
  }
  return newConfig;
};
