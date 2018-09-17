import React from 'react'
import ReactDom from 'react-dom'

const myh1 = React.createElement('h1', null, '这是一个子节点')
let a = true;
let b = 123;
let c = '123';
const arr = [1, 2, 3];
let dog = {
    age: 3
}

function H1(props) {
    return <h2>{props.age}岁</h2>
}


const div =
    <div id='div'>
        {a ? '真' : '假'}
        <br/>
        {b + 321}
        <br/>
        {c}
        {arr.map(i => <h3 key={i}>{i}</h3>)}
        <h1>这是一个标签</h1>
        <H1 age={dog.age}></H1>
    </div>
ReactDom.render(div, document.getElementById('app'))

