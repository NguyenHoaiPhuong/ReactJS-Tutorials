import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { TODO } from '../data/todo'
import { Action } from '../actions/actions'

type Props = {
    onClick: () => Action,
    todo: TODO
}

type States = {}

class Todo extends Component<Props, States> {
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