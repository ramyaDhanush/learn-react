import React from "react";

// function Greet() {
//   return <h1>Hello Ramya</h1>;
// }

// Functional Component
const Greet = (props) => {
  return <h1>Hello, {props.name}</h1>;

  // React.createElement("div", null, React.createElement('h1',{className:'Mow'},'Wwoww'));
};

export default Greet;
