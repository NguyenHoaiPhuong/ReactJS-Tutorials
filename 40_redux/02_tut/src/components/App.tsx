import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store } from '../store/store'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList';
import { Footer } from './Footer';
import './App.css';

// const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.subscribe(() => console.log(store.getState()))

class App extends Component {
  render() {
    return(
      <Provider store={store}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Provider>
    )
  }
}

// unsubscribe();

export default App;
