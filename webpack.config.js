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
    runtimeChunk: 'single', // webpack 运行时文件单独打包
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](lodash|jquery)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          // automaticNamePrefix: 'abc', // 设置了 name/filename 则前缀不生效
          // name: 'lodash', // name 生成 .js 文件
          // filename: 'lodash.js' // 文件后缀需要自己加，因此可以设置不同格式的文件
        },
        default: {
          // minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
          // filename: 'common.js',
        }
      }
    }
  },
};
