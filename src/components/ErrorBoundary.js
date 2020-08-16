import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hashError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hashError: true,
    };
  }

  componentDidCatch(error,info){
    console.log(error);
    console.log(info)
  }
  render() {
    if (this.state.hashError) {
      return <h1>Something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
