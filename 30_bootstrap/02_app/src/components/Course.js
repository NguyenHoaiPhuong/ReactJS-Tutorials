import React, { Component } from 'react'
import Lession from './Lession'

class Course extends Component {
    showFreeBtn = () => {
        let free = this.props.free
        if (!free) {
            return(
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1" onClick={this.register}>Register</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" ref="username" />
                </div>
            )
        }
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-success">View 1</button>
                <button type="button" className="btn btn-danger">View 2</button>
                <button type="button" className="btn btn-secondary">View 3</button>
            </div>
        )
    }

    register = () => {
        alert(this.refs.username.value)
    }

    render() {
        let {name, time, content, lessons} = this.props
        const lessonComponents = lessons.map(lesson =>{
            return(
                <Lession key={lesson} name={lesson} />
            )
        })
        return (
            <div className="col-sm-4">
                <div className="card" style={{width: '25rem'}}>
                    <div className="card-header" style={{backgroundColor: 'lightblue'}}>
                        {name}
                    </div>
                    <div className="card-body">
                        <p>{time}</p>
                        <p>{content}</p>
                        <ul className="list-group">                            
                            {lessonComponents}
                        </ul>
                    </div>
                    <div className="card-footer text-muted">
                        {this.showFreeBtn()}
                    </div>
                </div>
            </div>            
        )
    }
}

export default Course
