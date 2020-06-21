const { resolve } = require('path');
const { override, addWebpackAlias } = require('customize-cra');

const { env: { NODE_ENV } } = process;

module.exports = override(
  addWebpackAlias({
    '@': resolve(__dirname, './src'),
  }),
  config => {
    // sourcemap
    if(NODE_ENV === 'production') config.devtool = 'none';

    return config;
  }
)