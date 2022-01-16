import React, { Component } from 'react'

export default class ChildCC extends Component {

  constructor(props){
    super();
    console.log(props);
  }
  render() {
    return (
      <div>
        {this.props.randomData1}
      </div>
    )
  }
}
