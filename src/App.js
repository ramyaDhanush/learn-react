import React, {useReducer, useState} from "react";
import "./App.css";
import "./appStyles.css";

function reducer(state, action){
  // Pure function
  switch(action.type){
    case 'add-todo':
      // don't mutate state like state++, 
      // rather return new state 'state+1'
      return {todo: [...state.todo, {text:action.text, complete:false} ]};
    case 'toggle-todo':
      return {todo: [state.todo.map((t, idx)=> idx ===action.idx ?{...t, completed:!t.completed}:t)]}
    default:
      return state;
  }
}

const App = () => {
  const [{todo}, dispatch] = useReducer(reducer, {todo:[]});
  const [text, setText] = useState('')
  return (
    <>
    <form onSubmit={e=>{
      e.preventDefault();
      dispatch({type:"add-todo", text});
      setText("");
    }}>
      <input type="text" value={text} onChange={e => setText(e.target.value)}/>
    </form>
    {todo.map((t, idx)=>(
      <div key={t.idx} onClick={()=>dispatch({type:'toggle-todo', idx})}
        style={{textDecoration: t.completed ?'line-through':''}}>
          {t.text}
      </div>))}
    {/* <pre>
      {JSON.stringify(todo, null, 2)}
    </pre> */}
    </>
  );
}

export default App;
 