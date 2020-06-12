# code-splitting

### 代码分割三种方式

1. 在入口文件手动分割。缺点：不同文件依赖的相同模块会被重复打包。去重方法：splitChunks（参见官网）。

2. 同步代码：

- 在 webpack.config.js 中配置 splitChunks，默认生成的文件名 `vendors~入口文件名.js`，如：`vendors~index.js`;
```
optimization: {
  splitChunks: {
    chunks: 'all',
  },
},
```

3. 异步代码（动态 import）:

- 不做任何配置即可自动分割代码，默认生成的文件名 `id.js`，如：`0.js`;

- 可以通过魔法注释 `webpackChunkName` 修改默认生成的文件名，修改后生成的文件名 `vendors~自定义文件名.js`，如：`vendors~lodash.js`;

- 可以通过在 webpack.config.js 的 splitChunks 中修改配置，以去除文件名前缀 `vendors`;


### splitChunks 插件

> 疑问

1. name/filename/chunkFilename 的区别

2. splitChunks.name 在 production 模式下设置为 false 的作用,

3. 不同模块打包到不同文件下，不生效，是写法有问题么？


```
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
```
