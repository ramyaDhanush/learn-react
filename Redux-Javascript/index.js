import redux from 'redux';
const createStore = redux.createStore;

// Action
const WISH = "WISH";

// Action Creator
function wishUser(){
  return {
    type: WISH,
    user:"Ramya",
  }
}

// State
const initialState = {
  message: "Happy Day",
}

// Reducer
const reducer = (state = initialState, action) =>{
  switch(action.type){
    case WISH: return {
      ...state,
      message:" Happy Day to you "
    }
    default: return state 
  }
}

const store = createStore(reducer); //Holds application state
console.log("Initial state", store.getState()); //Allows access to state via getState()
const unsubscribe = store.subscribe(()=> console.log(store.getState())) //Register listeners via subscribe(listener)
store.dispatch(wishUser())// Allows state to be updated via dispatch(action)
store.dispatch(wishUser())// Allows state to be updated via dispatch(action)
store.dispatch(wishUser())// Allows state to be updated via dispatch(action)

unsubscribe(); //Handles unregistering of listeners via the function returned by subscribe(listener)


