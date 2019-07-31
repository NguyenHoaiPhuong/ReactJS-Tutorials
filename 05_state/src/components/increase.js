import React, { Component } from 'react'
import './increase.css'

export default class Increase extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            value: 0,
        }
    }

    increaseValue() {
        this.setState({
            value: this.state.value+1,
        })
    }

    render() {        
        return (
            <div className="Increase">
                <button type="button" onClick={() => this.increaseValue()}>Increase</button>
                <input id="1001" type="text" value={this.state.value} />
            </div>
        )
    }
}

