import React, { Component } from 'react'

export default class App extends Component {
    i = 0
    greet = () => {
        this.i = this.i +1;
        let elem = document.getElementById('1000');
        if (this.i % 2 === 0) {
            elem.innerHTML = 'Hello'
        } else {
            elem.innerHTML = 'Goodbye'
        }
    }
    render() {
        return (
            <div>
                <button onClick={this.greet}>Click</button>
                <div id="1000">Hello</div>
            </div>
        )
    }
}
