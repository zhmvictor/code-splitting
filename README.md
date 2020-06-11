# code-splitting

### 代码分割三种方式

1. 在入口文件手动分割。缺点：不同文件依赖的相同模块会被重复打包。去重方法：splitChunks（参见官网）。

2. 同步代码：

- 在 webpack.config.js 中配置 splitChunks，默认生成的文件名 `vendors~入口文件名.js`
```
optimization: {
  splitChunks: {
    chunks: 'all',
  },
},
```
