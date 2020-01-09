const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config');
const nodeExternals = require('webpack-node-externals');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
    mode: 'production',
    devtool: 'source-map',
    externals: [nodeExternals()],
    entry: {
        app: ['./src/react/index.tsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './client/[name].bundle.js',
        publicPath: '/'
    },
    optimization: {
        minimize: true
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.scss'],
        modules: [path.resolve('./node_modules'), path.resolve('./src')]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: './client/index.html'
        })
    ]
});
