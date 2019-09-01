import React, { Component } from 'react'
import './App.css'
import './style.css'
import Course from './Course';

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            reactLessons: ["Lesson 1", "Lesson 2", "Lesson 3"],
            angularLessons: ["Lesson 1", "Lesson 2", "Lesson 5"],
            golangLessons: ["Lesson 1", "Lesson 2", "Lesson 10"],
            pythonLessons: ["Lesson 1", "Lesson 2", "Lesson 6"]
        }
    }
    
    render() {
        return (
            <div className="App row">                
                <Course name="ReactJS" time="40h" content="Reactjs for beginners" free={true} lessons={this.state.reactLessons} />
                <Course name="Angular" time="50h" content="Angular for beginners" free={false} lessons={this.state.angularLessons} />
                <Course name="Golang" time="100h" content="Golang for beginners" free={false} lessons={this.state.golangLessons} />
                <Course name="Python" time="80h" content="Python for beginners" free={true} lessons={this.state.pythonLessons} />
            </div>
        )
    }
}

export default App
