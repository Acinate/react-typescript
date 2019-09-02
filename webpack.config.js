const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: {
    app: [
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000",
      "./src/frontend/index.tsx"
    ]
  },
  watch: true,
  devtool: "eval-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
    publicPath: "/",
    hotUpdateChunkFilename: ".hot/[id].[hash].hot-update.js",
    hotUpdateMainFilename: ".hot/[hash].hot-update.json"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(["dist"]),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
      chunkFilename: "[name].css"
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
    // new BundleAnalyzerPlugin()
  ],
  module: {
    rules: [{
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            name: "img/[name].[hash].[ext]"
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".scss"]
  }
};