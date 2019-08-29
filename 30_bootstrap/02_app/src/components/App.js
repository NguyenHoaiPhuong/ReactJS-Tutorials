import React, { Component } from 'react'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">                
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-header">
                        Panel title
                    </div>
                    <div className="card-body">
                        <p className="card-text">Panel Content</p>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default App
