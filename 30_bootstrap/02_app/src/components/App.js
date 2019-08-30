import React, { Component } from 'react'
import './App.css'
import './style.css'
import Course from './Course';

class App extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-4">
                    <Course name="ReactJS" time="40h" free={true} />               
                </div>

                <div className="col-sm-4">
                    <Course name="Angular" time="50h" free={false} />              
                </div>

                <div className="col-sm-4">
                    <Course name="Golang" time="100h" free={false} />
                </div>

                <div className="col-sm-4">
                    <Course name="Python" time="80h" free={true} />
                </div>
            </div>
        )
    }
}

export default App
