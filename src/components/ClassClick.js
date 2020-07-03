import React, { Component } from "react";

class classClick extends Component {
  clickHandler() {
    console.log("Clicked");
  }
  render() {
    return <button onClick={this.clickHandler}>Click Me</button>;
  }
}

export default classClick;
