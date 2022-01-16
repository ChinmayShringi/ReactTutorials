import React, { Component } from 'react';

export default class App extends Component {
  // Call super and constructor together always
  constructor() {
    super();
    console.log('Before assigning value state:', this.state);

    // Assigned variable
    this.state = { newData: 'this is some random value' };

    // new value
    console.log('After assigning value state:', this.state);
  }

  calledToChangeValue() {
    setTimeout(() => {
      // set state is function used to change states
      this.setState({
        // Variable that requrires changing
        newData: 'New Value',
      });
    }, 1000);
  }

  render() {
    // Called to change the value
    this.calledToChangeValue();

    return (
      <div>
        {/* this.state.variable is the syntac used to access the value */}
        {this.state.newData}
      </div>
    );
  }
}
