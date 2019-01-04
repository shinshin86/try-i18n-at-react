const path = require('path')
const webpack = require('webpack')

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isProduction ? false : 'cheap-module-eval-source-map',
  mode: isProduction ? 'production' : 'development',
  entry: [
    path.join(__dirname, 'src', 'index'),
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: [ 'babel-loader' ],
      exclude: /node_modules/,
      include: __dirname,
    }],
  }
}
