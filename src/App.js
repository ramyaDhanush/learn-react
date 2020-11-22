import React, {useState} from "react";
import "./App.css";
import "./appStyles.css";


const App = () => {
  const [{c1,c2}, setCount] = useState({c1:10, c2:20});
  return (
    <>
    <div>Lorem ipsum dolor sit amet.</div>
    <div className="">{c1}</div>
    <div>{c2}</div>
    <button onClick={()=>
    setCount(c => ({
      ...c, c1:c1+1
    }))} >+</button>
    </>
  );
}

export default App;
