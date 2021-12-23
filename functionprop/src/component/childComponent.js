import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    console.log('Child Component Constructor!');
  }
  render() {
    return (
      <div>
        <button onClick={this.props.click}>fillCoffee From Child</button>
        <br />
        <br />
        This is child component!
        <br />
        Mug Status: {this.props.mugStat}
      </div>
    );
  }
}

export default ChildComponent;
