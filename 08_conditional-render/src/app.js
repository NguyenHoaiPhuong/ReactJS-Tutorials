import React, { Component } from 'react'
import './app.css'

class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogginedIn: true
        }
    }
    
    render() {
        // let msg = "Hello Akagi"
        // if (this.state.isLogginedIn == false) {
        //     msg = "Hello guest"
        // }
        // return (
        //     <div className="App">
        //         {msg}
        //     </div>
        // )
        return (
            this.state.isLogginedIn ?
            <div className="App">Welcome Akagi</div>:
            <div className="App">Welcome Guest</div>
        )
    }
}

export default App
