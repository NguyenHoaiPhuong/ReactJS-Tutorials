/* Action types */
export namespace ActionTypes {
    export const ADD_TODO: string = 'ADD_TODO'
    export const TOGGLE_TODO: string = 'TOGGLE_TODO'
    export const SET_VISIBILITY_FILTER: string = 'SET_VISIBILITY_FILTER'
}

/* other constants */
export namespace VisibilityFilters {
    export const SHOW_ALL: string = 'SHOW_ALL'
    export const SHOW_COMPLETED = 'SHOW_COMPLETED'
    export const SHOW_ACTIVE = 'SHOW_ACTIVE'
}


/* action creators */
export function addTodo(text: string) {
    return { type: ActionTypes.ADD_TODO, text }
  }
  
export function toggleTodo(index: number) {
    return { type: ActionTypes.TOGGLE_TODO, index }
}
  
export function setVisibilityFilter(filter: string) {
    return { type: ActionTypes.SET_VISIBILITY_FILTER, filter }
}