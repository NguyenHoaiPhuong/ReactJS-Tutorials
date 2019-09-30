import React, { Component, FormEvent } from 'react'
import { Action } from '../actions/actions'

type Props = {
    addTodo: (todoText: string) => Action    
}

type States = {
    todoText: string
}

class AddTodo extends Component<Props, States> {
    constructor(props: Readonly<Props>) {
        super(props)
    
        this.state = {
            todoText: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(e: FormEvent<HTMLInputElement>) {
        this.setState({todoText: e.currentTarget.value})
    }

    handleSubmit(e: FormEvent) {
        e.preventDefault()
        this.props.addTodo(this.state.todoText)
        this.setState({todoText: ""})
    }    

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.todoText} onChange={this.handleInputChange}/>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        )
    }
}

export default AddTodo