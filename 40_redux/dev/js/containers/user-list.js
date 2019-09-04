import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {

    renderList() {
        return this.props.users.map((user) => {
            return (
                <li
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}
                >
                    {user.first} {user.last}
                </li>
            );
        });
    }

    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps)(UserList);
