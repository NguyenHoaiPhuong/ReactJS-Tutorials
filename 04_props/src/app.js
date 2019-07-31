import React, { Component } from 'react'
import Hello from './components/hello'
import Welcome from './components/welcome';

export default class App extends Component {
    render() {
        return (
            <div>
                <Hello name="Akagi">from Vietnam</Hello>
                <Hello name="Miura">from Japan</Hello>
                <Welcome name="Akagi">from Vietnam</Welcome>
                <Welcome name="Miura">from Japan</Welcome>
            </div>
        )
    }
}
