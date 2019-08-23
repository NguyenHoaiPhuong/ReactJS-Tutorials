import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userName: '',
            comments: '',
            topic: 'vue'
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicSelect = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    submit = (event) => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>Username: </label>
                <input type='text' value={this.state.userName} onChange={this.handleUsernameChange}></input>

                <br></br>

                <label>Comments: </label>
                <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>

                <br></br>

                <label>Topic: </label>
                <select value={this.state.topic} onChange={this.handleTopicSelect}>
                    <option value='react'>React</option>
                    <option value='vue'>Vue</option>
                    <option value='angular'>Angular</option>
                </select>

                <br></br>

                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
