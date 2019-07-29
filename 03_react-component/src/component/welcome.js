import React, {Component} from 'react'
import './welcome.css'

class Welcome extends Component {
    render() {
       return (
        <div className="Welcome">Welcome {this.props.name}</div>
       )
    }
}

export default Welcome