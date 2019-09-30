import { Action, SET_VISIBILITY_FILTER } from "../actions/actions";
import { VisibilityFilter, SHOW_ALL } from '../data/visibilityFilter'

export function visibilityFilterReducer(prevState = SHOW_ALL, action: Action): VisibilityFilter {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            let nextState = action.payload as VisibilityFilter
            return nextState
        default:
            return prevState
    }    
}