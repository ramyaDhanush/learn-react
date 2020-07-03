import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    // // Binding in constructor
    // this.ChangeMessage = this.ChangeMessage.bind(this);
  }

  // Class property as arrow functions
  ChangeMessage = () => {
    this.setState({
      message: "Bye",
    });
  };

  // ChangeMessage() {
  //   this.setState({
  //     message: "Bye",
  //   });
  // }
  render() {
    return (
      <div style={{ margin: "auto" }}>
        {/* <button onClick={this.ChangeMessage.bind(this)}>Click</button> //Using bind(this)
        <button onClick={()=>this.ChangeMessage()}>Click</button> //using arrow functions */}
        <button onClick={this.ChangeMessage}>Click</button>
        <br />
        <br />
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default EventBind;
