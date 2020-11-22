import React, {useState, useCallback} from "react";
import "./App.css";
import "./appStyles.css";
import Hello from './components/Hello'

const App = () => {
  const [count, setCount] = useState(0);
  
  const increment = useCallback(()=>{
    setCount(c=>c+1);
  },[setCount]);

  return (
    <>
    <div>Lorem ipsum dolor sit amet.</div>
    <Hello increment={increment}/>
    <div>{count}</div>
    </>
  );
}

export default App;
 