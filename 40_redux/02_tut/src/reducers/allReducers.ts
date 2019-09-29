import { AppState, initState } from "../data/state";
import { Action } from "../actions/actions";
import { visibilityFilterReducer } from "./visibilityFilterReducer";
import { todosReducer } from "./todosReducer";
import { combineReducers } from 'redux'

// export default function allReducers(prevState = initState(), action: Action): AppState {
//     return ({
//             visibilityFilter: visibilityFilterReducer(prevState.visibilityFilter, action),
//             todos: todosReducer(prevState.todos, action)
//     })
// }

const allReducers = combineReducers({
    visibilityFilter: visibilityFilterReducer,
    todos: todosReducer
})

export default allReducers