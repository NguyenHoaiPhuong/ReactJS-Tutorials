import React, { Component } from 'react';
import Child from './child';
import './parent.css'

class Parent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "parent"
        }
    }
    
    greetParent = (childName) => {
        alert(`Hello ${this.state.name} from ${childName}`)
    }

    render() {
        return (
            <div className="Parent">
                <Child greetHandler={this.greetParent.bind(this)} />
            </div>
        )
    }
}

export default Parent
