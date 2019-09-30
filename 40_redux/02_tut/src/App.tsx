import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import AddTodo from './containers/AddTodo'
import { store } from './store/store'
import VisibleTodoList from './containers/VisibleTodoList';

// const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.subscribe(() => console.log(store.getState()))

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <AddTodo />
        <VisibleTodoList />
      </Provider>
    )
  }
}

// unsubscribe();

export default App;
