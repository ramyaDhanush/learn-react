import React from "react";

function MemoComp({ name }) {
  console.log("Rendering Memo Component");
  return <div>{name}</div>;
}

// This method of export will avoid unecessary re-rendering when no change in props
// Similar to purecomponent for class component
// Memo is used only with function component


// higher order components
export default React.memo(MemoComp);
