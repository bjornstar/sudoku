import compression from 'compression';
import express from 'express';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

const middleware = webpackDevMiddleware(webpack({
  entry: './src/index.jsx',
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
            ]
          }
        }
      }
    ]
  },
  optimization: {
    nodeEnv: 'development'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      inject: false,
      template: './src/index.html'
    })
  ]
}), {});

const server = express().use(compression()).use(middleware).listen(5100);
