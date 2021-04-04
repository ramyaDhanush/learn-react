import React, { Component } from 'react';
import ThemeContext from '../App';

export default class ClassComponent extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        "Class Theme"
      </ThemeContext.Consumer>
    )
  }
}
