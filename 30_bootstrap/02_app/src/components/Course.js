import React, { Component } from 'react'
import Lession from './Lession'

class Course extends Component {
    render() {
        return (
            <div className="card" style={{width: '25rem'}}>
                <div className="card-header" style={{backgroundColor: 'lightblue'}}>
                    {this.props.name}
                </div>
                <div className="card-body">
                    {this.props.time}
                    {this.props.content}
                    <ul className="list-group">
                        <Lession name="Chapter 1" />
                        <Lession name="Chapter 2" />
                        <Lession name="Chapter 3" />
                    </ul>                     
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>
        )
    }
}

export default Course
