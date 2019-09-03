import React, { Component } from 'react'

class Lession extends Component {
    render() {
        return (            
            <li className="list-group-item">{this.props.name}</li>            
        )
    }
}

export default Lession
