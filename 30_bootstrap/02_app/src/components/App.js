import React, { Component } from 'react'
import './App.css'
import './style.css'
import Card from './Card';

class App extends Component {
    render() {
        return (              
            <div className="row">
                <div className="col-sm-4">
                    <Card titleHandle="ReactJS"/>                
                </div>

                <div className="col-sm-4">
                    <Card titleHandle="Angular"/>                
                </div>

                <div className="col-sm-4">
                    <Card titleHandle="Golang"/>                
                </div>
                
                <div className="col-sm-4">
                    <Card titleHandle="Python"/>                
                </div>
            </div>
        )
    }
}

export default App
