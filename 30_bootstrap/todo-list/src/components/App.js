import React, { Component } from 'react'
import Header from './Header';
import Search from './Search';
import Sort from './Sort';

class App extends Component {
    render() {
        return (
            <div className="App container-fluid">                
                <Header />

                <div className="row">
                    <Search />
                    <Sort />
                </div>
            </div>
        )
    }
}

export default App
