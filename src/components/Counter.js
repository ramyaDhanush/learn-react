import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Count: 0,
    };
  }

  increment() {
    this.setState(
      (prevState)=>({
        Count: prevState.Count +1
      }),
      () => {
        // Synchronous
        console.log(this.state.Count);
      }
    );
    // Asynchronous
    console.log(this.state.Count);
  }



  render() {
    return (
      <div>
        Count - {this.state.Count}
        <br />
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
