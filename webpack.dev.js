const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'development',
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/frontend/index.tsx'
    ]
  },
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
    publicPath: '/',
    hotUpdateChunkFilename: '.hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: '.hot/[hash].hot-update.json'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.scss'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  }
});
