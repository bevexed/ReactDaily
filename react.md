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
  参数 2 ：创建元素的属性 ，<br>
  参数 3 ：子节点
```
const myh1 = React.creatElemet(h1, null, 'H1子节点')
```
4. 使用ReactDom渲染虚拟Dom
> 参数1: 要渲染的元素 <br>
  参数2：指定渲染位置 (只能接受DOM元素)
```
ReactDom.render(myh1,document.getElementById('app'))
```

```