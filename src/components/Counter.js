import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../Actions";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button onClick={this.props.increment}>increment +1</button>
        <button onClick={this.props.decrement}>increment -1</button>
        <button></button>
      </div>
    );
  }
}

export default Counter;
