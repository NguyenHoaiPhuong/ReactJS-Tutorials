import React, { Component } from 'react'
import './App.css'
import Card from './Card';

class App extends Component {
    render() {
        return (
            <div className="App">                
                <div className="row">
                    <div className="col-sm-4">
                        <Card />                
                    </div>
                    <div className="col-sm-4">
                        <Card />                
                    </div>
                    <div className="col-sm-4">
                        <Card />                
                    </div>
                </div>
            </div>
        )
    }
}

export default App
