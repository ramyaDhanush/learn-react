import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./appStyles.css";
import ClickCounter2 from "./components/ClickCounter2";
import HoverCounter2 from "./components/HoverCounter2";
import CounterRender from "./components/CounterRender";
function App() {
  return (
    <>
      <div className="App">
        <CounterRender>
          {(count, incrementCount) => (
            <ClickCounter2
              count={count}
              incrementCount={incrementCount}
            ></ClickCounter2>
          )}
        </CounterRender>

        <CounterRender>
          {(count, incrementCount) => (
            <HoverCounter2
              count={count}
              incrementCount={incrementCount}
            ></HoverCounter2>
          )}
        </CounterRender>
      </div>
    </>
  );
}

export default App;
