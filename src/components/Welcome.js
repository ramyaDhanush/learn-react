import React, { Component } from "react";

class Welcome extends Component {
  render() {
    // return HTML
    return <h1>Class Component {this.props.name} {this.props.children}</h1>;
  }
}

export default Welcome;
