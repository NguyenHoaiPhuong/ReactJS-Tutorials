import React, { Component } from 'react'
import './welcome.css'

export default class Welcome extends Component {
    render() {
        return (
            <div className="Welcome">
                <p>Welcome {this.props.name} {this.props.children}</p>
            </div>
        )
    }
}
