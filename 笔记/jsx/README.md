# JSX
### 基本语法
> 可以将 JS 代码写在花括号里
* 可以渲染字符串
```jsx
let a ='123'
const myh1 = <div id='div'>{a}</div>
```
* 可以渲染数字
```jsx
let a = 123
const r = <div id='div'>{a + 456}</div>
```
* 可以渲染布尔值
```jsx
let a = true
const r = <div id='div'>{a? '真':'假'}
```
* 放入一个子标签
```jsx
const h1 = <h1>231<h1>
const b = <div>{h1}</div>
```
* 插入一个JSX数组
```jsx
const a = [
     <h1>1<h1>,
     <h2>2<h2>
        ]
const b = <div>{a}</div>
```
* 插入一个数组 (key给被控制元素的最外层)
```jsx
const a = [1,2,3]
const <div>{a.map(i => <h3  key={i}>i</h3>)}</div>
```
* class => className ； for => htmlFor
### 注释
* 单行注释
    * 只能占一行
    ```jsx
    {
        // 注 释
    }
    ```
* 多行注释
    ```jsx
    {/* 注释 */}
    ```

### 创建组件
1. 创建构造函数 (必须返回值)
   * 构造函数创建
    ```jsx
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
    ```jsx
    import React from 'react'

    export default function Hellow(props) {
        console.log(props)
        return <div>Hellow</div>
    }
    ```
3. class创建组件
    * this.state
        *  相当 Vue 中 data(){ return {} }
        * 数据可读可写
    * this.props
        * 在 class 创建的组件中，如果想使用外界传递过来的 props 参数，不需接收，直接通过 this.props.*** 访问
        * 数据只读，不能从新赋值
    * 如果使用 class 定义组件，必须 让自己的组件，继承自 React.Component
    * 在组件内部必须有 render 函数
        * render函数必须返回合法的 jsx 虚拟Dom结构
    ```jsx
    export default class extends React.Component {
        constructor() {
              super()
              // 相当 Vue 中 data(){ return {} }
              this.state = {
                  msg: 'Hellow'
              }
          }>
       render {
           // return null
           return <div>{this.props.age}</div>
       }
    }
    ```
### css 样式
* 行内样式
```jsx
<h1 style={{fontSize: 12 + 'px'}}> </h1>
```
* 直接引入css
```jsx
 import 'xxx.css'
```
* 以模块化的方式引入
    * 默认在全局生效
```jsx
//js
import xxx from 'xxx.scss'
//webpack
// 在 css-loader 后，通过追加 ?modules 为普通的样式表启动模块化
        // css 模块化 不会 对 标签选择器 生效
css-loader?modules
```
* global local
    * :global() 避模块化
### 绑定事件
* 格式
```jsx
export default class A extend React.Component {
    constructor(){
        super()
        this.state = {
            msg: '哈哈'
        }
    }

    render(){
        return <div>
            <button onClick={()=>this.show(1,2) }> </button>
        </div>
    }

    show = (a,b) => {
        console.log(this)
        this.setState({
            msg: a + b
        })
    }
}
```

### 赋值
* this.setState
    * 方法执行是异步的
    ```jsx
    this.setState({
        msg:'123'
    },function(){
        console.log(this.state.msg)
    })
    ```
### 双向数据绑定
1. 通过 onChange 事件监听文本框
2. 在 onChange 事件中拿到文本框的值
    * e.target.value
    * this.refs.***
3. 调用 setState 方法将最新的值同步到 state 中去
* ref 对dom的引用
```jsx
export default class A extend React.Component {
    constructor(){
        super()
        this.state = {
            msg: '哈哈'
        }
    }

    render(){
        return <div>
            <input type="text" style={{width:100%}} value={this.state.msg} onChange={(e)=>this.textChanged(e)} ref="text">
        </div>
    }

    textChanged = (e) => {
        console.log(e.target.value)
        console.log(this.refs.text.value)
        const newVal = e.target.value
        this.setState({
            msg: newVal
        })
    }
}
```

### 注释
    * 折叠注释
```jsx
// #region
// 注释
// endregion

```
