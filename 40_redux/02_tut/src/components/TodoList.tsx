import React, { Component } from 'react'
import Todo from './Todo'
import { TODO } from '../data/todo'
import { Action } from '../actions/actions'

type Props = {
    todos: Array<TODO>,
    toggleTodo: (index: number) => Action
}

type States = {
    
}

class TodoList extends Component<Props, States> {
    constructor(props: Readonly<Props>) {
        super(props)
    
        this.state = {
            
        }
    }    
    
    render() {
        let {todos, toggleTodo}  = this.props
        const Todos = todos.map(function(value, index, array) {
            return (
                <Todo key={index} todo={value} onClick={() => toggleTodo(index)} />
            )
        })

        return(
            <ul>
                {Todos}
            </ul>
        )
    }
}

export default TodoList