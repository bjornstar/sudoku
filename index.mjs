import compression from 'compression';
import express from 'express';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

const { ProvidePlugin } = webpack;

const middleware = webpackDevMiddleware(webpack({
  entry: './src/index.mjs',
  mode: 'none',
  optimization: {
    nodeEnv: 'production'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      inject: false,
      template: './src/index.html'
    }),
    new ProvidePlugin({
      'React': 'react/umd/react.production.min.js',
      'ReactDOM': 'react-dom/umd/react-dom.production.min.js'
    })
  ]
}), {});

const server = express().use(compression()).use(middleware).listen(5100);
