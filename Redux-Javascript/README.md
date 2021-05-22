# REDUX

Redux is a predictable state container for javascript apps


javascript apps - Not tied with React
State Container - Stores state of application. The state of application can change. 
Predictable -  In redux, all state transitions are explicit and it is possible to keep track of them

# When to use Redux

Manage the state of application in a predictable way, redux can help you

React Context - Prevents Prop drilling

# React - Redux
React is a library to build UI 
Redux is a library for managing state in a predictable way in javascript apps
React - Redux -> A official Redux UI binding library for react

# Three Core Concepts

Store - Holds the state of application {}
Action - Describes the changes in the state of application {type: "CONSTANT", payload: [data]}
Reducer - Carries out the state transition depending on the  {(previousState, action) => newState}

# Three Principles

1. The state of application is stored in an object tree within a single store
2. The only way to change the state is to emit an action, an object describing what happened
3. To specify the state tree is transformed by actions, you write pure reducers

**Actions**

The only way to inter with the store
Carry information from app to the store
Actions are plain javascript objects
Have a 'type' property that indicates the type of action being performed
Action Creator - a function that returns the action

**Reducers**

Specify how app's state changes in response to actions sent to the store
Function that accepts the state and action as arguments, and returns the next state 
(previousState, action) => newState

**Store**

One store for entire application

**Responsibilities of store**:
1. Holds application state
2. Allows access to state via **getState()**
3. Allows state to be updated via **dispatch(action)**
4. Register listeners via **subscribe(listener)**
5. Handles unregistering of listeners via the function returned by subscribe(listener)

![image](https://user-images.githubusercontent.com/33391148/119227420-622c7280-bb2b-11eb-853c-64fb82de3d58.png)

# Middleware

A suggested way to extend Redux with custom functionality
Provides a third-party extension point between dispatching an action and the moment it reaches the reducer
Using middleware for logging, crash reporting, performing asynchronous tasks etc.

Eg:- redux-logger (log redux process) & redux-thunk (define async action creators)


