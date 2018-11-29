# JSX
### 基本语法
> 可以将 JS 代码写在花括号里
* 可以渲染字符串
```
let a ='123'
const myh1 = <div id='div'>{a}</div>
```
* 可以渲染数字
```
let a = 123
const r = <div id='div'>{a + 456}</div>
```
* 可以渲染布尔值
```
let a = true
const r = <div id='div'>{a? '真':'假'}
```
* 放入一个子标签
```
const h1 = <h1>231<h1>
const <div>{h1}</div>
```
* 插入一个JSX数组
```
const a = [
     <h1>1<h1>,
     <h2>2<h2>
        ]
const <div>{a}</div>
```
* 插入一个数组 (key给被控制元素的最外层)
```
const a = [1,2,3]
const <div>{a.map(i => <h3  key={i}>i</h3>)}</div>
```
* class => className ； for => htmlFor
### 注释
* 单行注释
    * 只能占一行
    ```
    {
        // 注 释
    }
    ```
* 多行注释
    ```
    {/* 注释 */}
    ```

### 创建组件
1. 创建构造函数 (必须返回值)
   * 构造函数创建
    ```
    function H1() {
        // 组件中，必须放回 一个 合法的 JSX 虚拟DOM元素
        return <h1>1<h1>
        // 如果在组件中 return 一个 null ，表示此组件是空，什么都不会渲染
        return null //什么都不渲染
    }

    //接受参数
    let dog = {
       age = 3
    }
    function H1(props) {
        return <h1>{props.age}</h1>
        return null //什么都不渲染
    }

    //渲染组件
    React.render(
       <H1 age="dog.age"></H1>
       <H1 ...dog></H1> // 扩展运算符传值
    ,getElementById('app'))
    ```
2. jsx文件引入
    ```
    import React from 'react'

    export default function Hellow(props) {
        console.log(props)
        return <div>Hellow</div>
    }
    ```
3. class创建组件
 > 1. this.state的数据可读可写
 > 2. 有状态组件
```
export default class extends React.Component {
    constructor() {
          super()
          this.state = {
              msg: 'Hellow'
          }
      }>
   render {
       return <div>{this.props.age}</div>
   }
}
```
### css 样式
> 1.行内样式
>```
><h1 style={{fontSize: 12 + 'px'}}> </h1>
>```
> 2.直接引入css
>```
> import 'xxx.css'
>```
>3.以模块化的方式引入
>```
>//js
>import xxx from 'xxx.scss'
>//webpack
>css-loader?modules
>```
### 绑定事件
>1.格式
>```
><button onClick={()=>{}}>123</button>
>``
