import React from "react";

// function Greet() {
//   return <h1>Hello Ramya</h1>;
// }

// Functional Component
const Greet = (props) => {
  return (
    <div>
      <h1>Hello, {props.name}{props.last}</h1>
      <div>{props.children}</div>
    </div>

  
  )

  // React.createElement("div", null, React.createElement('h1',{className:'Mow'},'Wwoww'));
};

export default Greet;
