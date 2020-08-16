import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    // 1. Create Ref
    this.inputRef = React.createRef();
    this.cbRef = null; //this-method 1 Crete Property
    // this-method  2 Create Method to set ref
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // 3. Create Focus
    this.inputRef.current.focus();

    // this-method  4.
    // React calls the callback ref with DOM element when mounted &
    // call it with null when it unmounts
    // So check ref property
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        {/* 2. Attach Reference to input */}
        <input type="text" ref={this.inputRef} />
        {/* this-method 3. Set refernce */}
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
