/* eslint-disable */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: './src/index.js',
  devServer: {
    static: './dist',
    hot: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
    historyApiFallback: {
      disableDotRule: true
    },
    proxy: {
      '/api': 'http://localhost:8000',
      changeOrigin: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new MiniCssExtractPlugin(),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    assetModuleFilename: 'assets/img/[hash][ext][query]',
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: "defaults", "debug": true, "useBuiltIns": "usage", "corejs": 3 }], ['@babel/preset-react', { runtime: "automatic" }]]
          }
        }
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [{
          loader: MiniCssExtractPlugin.loader, options: { publicPath: "" },
        },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};