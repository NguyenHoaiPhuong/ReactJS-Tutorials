import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import { Dispatch } from 'redux'
import { Action, addTodo } from '../actions/actions'

function mapDispatchToProps (dispatch: Dispatch<Action>) {
    return {
        addTodo: (todoText: string) => {
            return dispatch(addTodo(todoText));
        }
    }
}

export default connect(null,mapDispatchToProps)(AddTodo)