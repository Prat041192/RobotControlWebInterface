const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const dirPath = fs.realpathSync(process.cwd());
const DIST_DIR = path.resolve(dirPath, 'public');
const SRC_DIR = path.resolve(dirPath, 'src');

const config = {
  entry: {
    main: `${SRC_DIR}/index.js`,
    serviceworker: `${SRC_DIR}/ServiceWorker.js`,
    robotView: `${SRC_DIR}/components/RobotViews/robotView.js`,
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public',
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      {
        test: /\.css?/,
        loaders: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(jpg|g|png|gif|svg|webp)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'],
      },

    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
        PUBLIC_URL: '"http://localhost:8080"',
      },
    }),
  ],

};
module.exports = config;
