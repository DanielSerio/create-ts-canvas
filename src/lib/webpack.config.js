'use strict';

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: { extensions: ['.ts', '.js', '.css'] },
  plugins: [ new HtmlWebpackPlugin() ],
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
};
