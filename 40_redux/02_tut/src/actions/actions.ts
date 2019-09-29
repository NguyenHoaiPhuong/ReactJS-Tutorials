import { VisibilityFilter } from '../data/visibilityFilter'

/* Action types */
export type ActionType = string;
export const ADD_TODO: ActionType = 'ADD_TODO';
export const TOGGLE_TODO: ActionType = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER: ActionType = 'SET_VISIBILITY_FILTER';

/* Action payload */
export type ActionPayload = string | number;

export type Action = {
    type: ActionType,
    payload: ActionPayload
}

/* action creators */
export function addTodo(text: string) {
    let action: Action = {
        type: ADD_TODO,
        payload: text
    }
    return action
}
  
export function toggleTodo(index: number) {
    let action: Action = {
        type: TOGGLE_TODO,
        payload: index
    }
    return action
}
  
export function setVisibilityFilter(filter: VisibilityFilter) {
    let action: Action = {
        type: SET_VISIBILITY_FILTER,
        payload: filter
    }
    return action
}