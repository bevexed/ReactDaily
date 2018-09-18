import React from 'react'
import test from './test.css'
export default class List extends React.Component {
    constructor(){
        super()
        this.state = {
            list:[
                {id:1},
                {id:2},
                {id:3}
            ]
        }
    }
    render(){
        return <div>这是列表组件
            {this.state.list.map(item => <div key={item.id}>{item.id}</div>)}
            <button onClick={function () {
                alert(1)
            }}>123</button>
        </div>
    }
}