import React, { Component } from 'react';

export default class Loader extends Component{
  render(){
    return(
      <div className="progress">
        <div className="indeterminate" />
      </div>
    )
  }
}
