import { VisibilityFilter, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../data/visibilityFilter'
import { TODO } from '../data/todo'
import { AppState } from '../data/state'
import { toggleTodo, Action } from '../actions/actions'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

const getVisibleTodos = (todos: Array<TODO>, filter: VisibilityFilter) => {
    switch (filter) {        
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case SHOW_ALL:
            return todos
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

function mapStateToProps (state: AppState) {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

function mapDispatchToProps (dispatch: Dispatch<Action>) {
    return {
        toggleTodo: (index: number) => {
            return dispatch(toggleTodo(index));
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList
