import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogger: true,
    };
  }

  render() {
    //   if (this.state.isLogger) {
    //     return <div>Welcome Ramya</div>;
    //   } else {
    //     return <div>Welcome Guest</div>;
    //   }

    return this.state.isLogger ? (
      <div>Welcome Ramya</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default UserGreeting;
