import redux, { combineReducers } from 'redux';
const createStore = redux.createStore;

// Action
const WISH = "WISH";
const CALL ="CALL";

// Action Creator
function wishUser(){
  return {
    type: WISH,
    user:"Ramya",
  }
}

function callUser(){
  return {
    type: CALL,
    user:"Ramya",
  }
}

// State
const initialWish = {
  message: "Happy Day",
}
const initialCall = {
  message: "Come here!!",
}

// Reducer
const wishReducer = (state = initialWish, action) =>{
  switch(action.type){
    case WISH: return {
      ...state,
      message:" Happy Day to you "
    }
    default: return state 
  }
}
const callReducer = (state = initialCall, action) =>{
  switch(action.type){
    case CALL: return {
      ...state,
      message:"Please dont come"
    }
    default: return state 
  }
}

const combinedReducers =combineReducers({wishReducer, callReducer})
// const combinedReducers =combineReducers({wish : wishReducer, call : callReducer})

const store = createStore(combinedReducers); //Holds application state
console.log("Initial state", store.getState()); //Allows access to state via getState()
const unsubscribe = store.subscribe(()=> console.log(store.getState())) //Register listeners via subscribe(listener)
store.dispatch(wishUser())// Allows state to be updated via dispatch(action)
store.dispatch(callUser())// Allows state to be updated via dispatch(action)
store.dispatch(wishUser())// Allows state to be updated via dispatch(action)

unsubscribe(); //Handles unregistering of listeners via the function returned by subscribe(listener)


