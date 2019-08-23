import React, { Component } from 'react'
import './app.css'
import NameList from './components/nameList';
import PersonList from './components/personList';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <NameList />
                <PersonList />
            </div>
        )
    }
}
