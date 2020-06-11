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
