# REACT
1. 安装react
```
npm i react react-dom -S
```
2. 引入React和ReactDom
```
import React from 'react' //创建组件,虚拟Dom元素,声明周期
import ReactDom from 'react-dom' //把创建好的组件放在浏览器上展示
```
3. 创建虚拟Dom元素
> 参数 1 ：创建元素的类型、名称 ，<br>
  参数 2 ：创建元素的属性,接收对象{id:'',className:''}或null ，<br>
  参数 3 ：子节点 <br>
  参数 n ：其他子节点
```
const myh1 = React.creatElemet(h1, null, 'H1子节点')
```
4. 使用ReactDom渲染虚拟Dom
> 参数1: 要渲染的元素 <br>
  参数2：指定渲染位置 (只能接受DOM元素)
```
ReactDom.render(myh1,document.getElementById('app'))
```
5. 运用JSX语法
> 需要babel转换 <br>
>```
>const myh1 = <div id='div'>123</div>
>```
> 1. 可以渲染字符串
> ```
> let a ='123'
> const myh1 = <div id='div'>{a}</div>
> ```
> 2. 可以渲染数字
>```
> let a = 123
> const r = <div id='div'>{a + 456}</div>
>```
> 3. 可以渲染布尔值
>```
> let a = true
> const r = <div id='div'>{a? '真':'假'}
>```
> 4. 放入一个子标签
>```
> const h1 = <h1>231<h1>
> const <div>{h1}</div>
>```
> 5. 插入一个JSX数组
>```
>const a = [
>       <h1>1<h1>
>       <h2>2<h2>
>          ]
> const <div>{a}</div>
>```
> 6. 插入一个数组 (key给被控制元素的最外层)
>```
> const a = [1,2,3]
> const <div>{a.map(i => <h3  key={i}>i</h3>)}</div>
>```
> 7. class => className ； for => htmlFor
6. React中创建组件
> 1.创建构造函数 (必须返回值)
>```
>function H1() {
>    return <h1>1<h1>
>    return null //什么都不渲染
>}
>
>//接受参数
>let dog = {
>   age = 3
>}
>function H1(props) {
>    return <h1>{props.age}</h1>
>    return null //什么都不渲染
>}
>
>//渲染组件
>React.render(
>   <H1 name="dog.age"></H1>
>,getElementById('app'))
>
>```