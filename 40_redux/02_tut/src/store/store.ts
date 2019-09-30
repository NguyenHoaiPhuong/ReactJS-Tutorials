import { createStore } from 'redux'
import allReducers from '../reducers/allReducers'
// import { addTodo, toggleTodo, setVisibilityFilter } from '../actions/actions'
// import { SHOW_COMPLETED } from '../data/visibilityFilter'

export const store = createStore(allReducers)

// log the initial state
// console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(SHOW_COMPLETED))

// Stop listening to state updates
// unsubscribe()
