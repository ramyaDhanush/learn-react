import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    setCount(count + 5);
  };
  const incrementFiveByOne = () => {
    for(let i=0;i<5;i++)
   { setCount(count =>count + 1);}
  };
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
      <button onClick={incrementFiveByOne}>Increment 5 / 1</button>
    </div>
  );
}

export default HookCounterTwo;
