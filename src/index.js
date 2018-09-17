import React from 'react'
import ReactDom from 'react-dom'

const myh1 =  React.createElement('h1', null, '这是一个子节点')
ReactDom.render(myh1,document.getElementById('app'))