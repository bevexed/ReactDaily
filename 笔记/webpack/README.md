1. npm init -y
> 快速初始化项目
2. 新建dist目录
> 打包目录
3. 新建 src 目录
> 放子项目
4. 在 src 下新建 index.html
> 首页
5. 在 src 下新建 index.js
> JS 入口文件
6. npm 安装 webpack
> npm i webpack -D
7. npm  安装 webpack-cli
> npm i webpack-cli -D
8. 在 package.json 下配置webpack
> 'dev': 'webpack-dev-server --open --port 3000 --hot --progress --host 127.0.0.1'
> 1. 在内存中打包好的 main.js 是托管到了内存中，在项目根目录中看不到
> 2. 但是可以通过
9. npm 安装 html-webpack-plugin -D
> 将html生成到内存中
```
// webpack.config.js

// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname,'./src/index.html'), // 源文件
    filename: 'index.html' // 生成的内存中首页的名称
})
```
10. 配置webpack.config.js
```
module.export = {
    mode: 'development' // development  production
    // 在 webpack 4.x 中 约定大于配置
    // 默认打包 入口文件 src => index.js
    // 输出路径 dist => main.js
    plugin: [
        htmlPlugin
    ]
}
```
11. npm 安装 react react-dom
> npm i react react-dom -S
```
// main.js

// 1.引入react react-dom
import React from 'react' // 创建组件、虚拟DOM元素、生命周期
import ReactDom from 'react-dom' // 把创建好的 组件 和 虚拟DOM 放在展示页面上

// 2. 创建虚拟DOM元素
// 参数1： 创建的元素的类型，字符串，表示元素的名称
// 参数2： 是一个对象 或 Null，表示 当前 这个DOM 元素的属性
// 参数3： 子节点（包括 其他 虚拟DOM 获取 文本子节点）
const myh1 = React.createElement('h1',null,'这是一个H1')

// 3. 使用 ReactDom 把虚拟DOM渲染到页面上
// 参数1： 要渲染的那个虚拟DOM元素
// 参数2： 指定页面的一个DOM对象作为容器
ReactDom.render(myh1, document.getElementById('app'))

```
12. 引入 babel 编译 jsx 语法
* 插件包
> npm i babel-core babel-loader babel-plugin-transform-runtime -D
* 语法包
> npm i babel-preset-env babel-preset-stage-0 -D

13. 配置babel
* 在 webpack.config.js 配置babel
```
// webpack.config.js
module.export = {
    mode: 'development' // development  production
    // 在 webpack 4.x 中 约定大于配置
    // 默认打包 入口文件 src => index.js
    // 输出路径 dist => main.js
    plugin: [
        htmlPlugin
    ],
    module:[ // 所有第三方匹配规则
        { test: /\.js|jsx$/,use: 'babel-loader', exclude: /node_modules/ } // 不要忘记加exclude排除项
    ]
}
```
* 在 项目根目录中创建一个 .babelrc
```
{
    "presets": ["env", "stage-0", "react"],
    "plugins": ["transform-runtime"]
}
```
14. 配置省略文件名 resolve
```
// webpack.config.js
module.export = {
    mode: 'development' // development  production
    // 在 webpack 4.x 中 约定大于配置
    // 默认打包 入口文件 src => index.js
    // 输出路径 dist => main.js
    plugin: [
        htmlPlugin
    ],
    module:[ // 所有第三方匹配规则
        { test: /\.js|jsx$/,use: 'babel-loader', exclude: /node_modules/ } // 不要忘记加exclude排除项
    ],
    resolve: {
        extensions: ['js','.jsx','.json'] // 表示 这几个文件后缀名可以省略不写
    }
}
```
15. 配置路径标识符 resolve
```
// webpack.config.js
module.export = {
    mode: 'development' // development  production
    // 在 webpack 4.x 中 约定大于配置
    // 默认打包 入口文件 src => index.js
    // 输出路径 dist => main.js
    plugin: [
        htmlPlugin
    ],
    module:[ // 所有第三方匹配规则
        { test: /\.js|jsx$/,use: 'babel-loader', exclude: /node_modules/ } // 不要忘记加exclude排除项
    ],
    resolve: {
        extensions: ['js','.jsx','.json'] // 表示 这几个文件后缀名可以省略不写
        alias: {
            "@": path.join(__dirname,'/src') // 这样，@ 就表示 项目根目录中src 的这一层路径
        }
    }
}
```

