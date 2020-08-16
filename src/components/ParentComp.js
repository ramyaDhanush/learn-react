import React, { Component } from "react";
import RegularComponent from "./RegularComponent";
import PureComp from "./PureComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ramya",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Ramya",
      });
    }, 2000);
  }

  render() {
    console.log(" Parent Component Render")
    return (
      <div>
        Parent Component
        <RegularComponent name={this.state.name}></RegularComponent>
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComp;
