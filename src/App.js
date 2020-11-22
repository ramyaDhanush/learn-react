import React, {useReducer} from "react";
import "./App.css";
import "./appStyles.css";

function reducer(state, action){
  // Pure function
  switch(action.type){
    case 'increment':
      // don't mutate state like state++, 
      // rather return new state 'state+1'
      return state+1;
    case 'decrement':
      return state-1;
    default:
      return state;
  }
}

const App = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> dispatch({type:'increment'})}>Increment</button>
    <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
    
    </>
  );
}

export default App;
 