const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin({
      // 运行watch后不移除index.html文件
      cleanStaleWebpackAssets: false,
    }),
    new HtmlWebpackPlugin({
      title: 'Code Splitting',
    }),
  ],
  output: {
    filename: '[name].js',
    // chunkFilename: 'lodash.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
