import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { TODO } from '../data/todo'

type TodoProps = {
    onClick: () => void,
    todo: TODO
}

type TodoState = {}

class Todo extends Component<TodoProps, TodoState> {
    render() {
        let {onClick, todo} = this.props
        return (
            <li
                onClick={onClick}
                style={{
                    textDecoration: todo.completed? 'line-through' : 'none'
                }}
            >
                {todo.text}
            </li>
        )
    }
}

export default Todo