import { initState, AppState } from "../data/state";
import { Action, ADD_TODO, TOGGLE_TODO } from '../actions/actions'
import { TODO } from "../data/todo";

export function todosReducer(prevState = Array<TODO>(0), action: Action): Array<TODO> {
    switch (action.type) {
        case ADD_TODO:
            let todo: TODO = {
                text: <string>action.payload,
                completed: false
            }
            let nextState = prevState
            nextState.push(todo)
            return nextState
        case TOGGLE_TODO:
            let idx = <number>action.payload
            let todos: Array<TODO> = prevState.map(function(value, index, array) {
                if (index === idx) {
                    return (
                        Object.assign({}, value, {completed: !value.completed})
                    )
                }
                return value
            })
            return todos
        default:
            return prevState
    }    
}
