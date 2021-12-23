import React, { Component } from 'react';
import ChildComponent from './component/childComponent';

class App extends Component {
  data = { inpt: 123 };
  abc = 'data';
  constructor(props) {
    super(props);
    this.state = {
      mug: 'Empty',
    };
    console.log('state:', this.state);
    this.fillCoffee = this.fillCoffee.bind(this);
  }
  fillCoffee() {
    if (this.state.mug === 'Empty') {
      this.setState({
        mug: 'Full',
      });
    } else {
      this.setState({
        mug: 'Empty',
      });
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.fillCoffee}>fillCoffee From Parent</button>
        <br />
        <br />
        This is Parent component!
        <br />
        Mug Status: {this.state.mug}
        <br />
        <br />
        <ChildComponent click={this.fillCoffee} mugStat={this.state.mug} />
      </div>
    );
  }
}

export default App;
