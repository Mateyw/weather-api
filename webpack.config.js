const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    fetchData: './src/components/fetchData.js',
    geolocationAPI: './src/components/geolocationAPI.js',
    header: './src/components/header.js',
    tempRow: './src/components/renderTempRowDetails.js',
    time: './src/components/updateTime.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  mode: 'development', // or 'production'
  devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      hot: true, // Enable Hot Module Replacement
      watchContentBase: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      title: 'Weather API',
      template: 'src/index.html',
    })
  ]
};