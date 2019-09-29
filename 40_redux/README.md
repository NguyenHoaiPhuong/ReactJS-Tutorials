# Installation

To install the stable version of redux:
```
npm install redux
```

Followings are dependencies used in this tutorial:
```
yarn add prop-types
```

# Complementary Packages
* Most likely, you'll also need the React bindings and the developer tools.
```
npm install react-redux
npm install --save-dev redux-devtools
```
* Note that unlike Redux itself, many packages in the Redux ecosystem don't provide UMD builds, so we recommend using CommonJS module bundlers like Webpack and Browserify for the most comfortable development experience.

# Concepts

## Action
- Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store.dispatch().

- Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.

## Action Creators
- Action creators are exactly that—functions that create actions. It's easy to conflate the terms “action” and “action creator”, so do your best to use the proper term.

## Reducer
- Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

### Designing the State Shape
- In Redux, all the application state is stored as a single object. It's a good idea to think of its shape before writing any code. What's the minimal representation of your app's state as an object?

- You'll often find that you need to store some data, as well as some UI state, in the state tree. This is fine, but try to keep the data separate from the UI state.

### Handling Actions
- The reducer is a pure function that takes the previous state and an action, and returns the next state.

```
(previousState, action) => newState
```

- It's very important that the reducer stays pure. Things you should never do inside a reducer:
* Mutate its arguments;
* Perform side effects like API calls and routing transitions;
* Call non-pure functions, e.g. Date.now() or Math.random().

- Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.

### Redux combineReducers
- All combineReducers() does is to generate a function that calls your reducers with the slices of state selected according to their keys, and combines their results into a single object again. It's not magic. And like other reducers, combineReducers() does not create a new object if all of the reducers provided to it do not change state

```
const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
})
```

```
function reducer(state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  }
}
```

## Store

The Store is the object that brings actions and reducers together. The store has the following responsibilities:

* Holds application state
* Allows access to state via ```getState()```
* Allows state to be updated via dispatch(action)
* Registers listeners via subscribe(listener)
* Handles unregistering of listeners via the function returned by subscribe(listener)

It's important to note that you'll only have a single store in a Redux application. When you want to split your data handling logic, you'll use reducer composition instead of many stores.
