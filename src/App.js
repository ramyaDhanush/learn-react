import React from "react";
import "./App.css";
import "./appStyles.css";
import HookCounterFour from "./components/Hooks/HookCounterFour";
import MyComponent from "./components/Hooks/MyComponent";
function App() {
  return (
    <div className="App">
      <HookCounterFour/>
      <MyComponent/>
    </div>
  );
}

export default App;
