'use strict';

var path = require('path');
var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var options = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:9865/__webpack_hmr',
    path.join(__dirname, 'app/main.js'),
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:9865/dist/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      }, {
        test: /\.json$/,
        loader: 'json',
      }, {
        test: /\.css$/,
        include: path.resolve(__dirname, 'app/'),
        loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]',
      }, {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/font-woff',
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=application/octet-stream',
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&minetype=image/svg+xml',
      }, {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'app/'),
        loader: 'style!css',
      },
    ],
  },
  /* externals: { mongodb: 'commonjs mongodb' }, */
};

options.target = webpackTargetElectronRenderer(options);

module.exports = options;
