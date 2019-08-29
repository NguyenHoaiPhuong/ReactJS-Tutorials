import React, { Component } from 'react'
import Header from './components/Header';
import Products from './components/Products';
import './app.css'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Products />
            </div>
        )
    }
}

export default App
