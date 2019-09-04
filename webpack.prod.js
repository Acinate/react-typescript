const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  entry: {
    app: ['./src/frontend/index.tsx']
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    publicPath: '/'
  },
  optimization: {
    minimize: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss']
  }
});
