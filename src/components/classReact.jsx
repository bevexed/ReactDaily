import React from 'react'

export default class Test extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: 'Hellow'
        }
    }

    render() {
        return <div>
            {this.state.msg}
            {this.props.age}
        </div>
    }
}