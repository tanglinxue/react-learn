import React, { Component } from "react";

export default class Count extends Component {
  increment = () => {
    const value = this.selectNumber.value;
  };
  decrement = () => {
    const value = this.selectNumber.value;
  };
  incrementOdd = () => {
    const value = this.selectNumber.value;
  };
  incrementAsync = () => {
    const value = this.selectNumber.value;
  };
  render() {
    return (
      <div>
        <h1>当前求和为:0</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button> &nbsp;
        <button onClick={this.decrement}>-</button> &nbsp;
        <button onClick={this.incrementOdd}>当前求和为奇数再加</button> &nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}
