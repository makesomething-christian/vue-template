//import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
//import LiveReloadPlugin from 'webpack-livereload-plugin'
import { VueLoaderPlugin } from 'vue-loader';
//import  { HtmlWebpackPlugin } from 'html-webpack-plugin'
import * as path from 'path';

export default  {
  entry: path.resolve('src','main.js'),
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('src', 'index.html'),
      inject: true,
      filename: 'index.html',
    }),
  ]
};