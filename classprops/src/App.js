import React, { Component } from 'react';
// Importing child component form cc
import ChildCC from './childComponent';

// This is parent class
export default class App extends Component {

  // Created data variable
  data='This is some random data';

  render() {
    return (
      <div>
        <ChildCC randomData1={this.data}/>
      </div>
    );
  }
}
