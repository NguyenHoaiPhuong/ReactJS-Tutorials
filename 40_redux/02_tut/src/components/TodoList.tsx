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
        const Todos = todos.map((value, index) => {
            return <Todo key={index} todo={value} onClick={() => toggleTodo(index)} />
        })

        return(
            <ul>
                <Todo key={-1} todo={{text: "golang", completed: false}} onClick={() => toggleTodo(-1)} />
                {Todos}
            </ul>
        )
    }
}

export default TodoList