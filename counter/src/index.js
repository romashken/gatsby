import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  
  buttonClicked(event) {
    this.setState({value: this.state.value+1});
  }
};
  
export default function MyButton () {
    return (
    	<div>
        <div>{this.state.value}</div>
        <button onClick={this.buttonClicked}>Click</button>
      </div>
    );
  }


