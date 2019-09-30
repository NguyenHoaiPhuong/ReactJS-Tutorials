import { Action, ADD_TODO, TOGGLE_TODO } from '../actions/actions'
import { TODO } from "../data/todo";

export function todosReducer(prevState = Array<TODO>(0), action: Action): Array<TODO> {
    switch (action.type) {
        case ADD_TODO:
            let todo: TODO = {
                text: action.payload as string,
                completed: false
            }
            let nextState = [...prevState, todo]
            return nextState
        case TOGGLE_TODO:
            let idx = action.payload as number
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
