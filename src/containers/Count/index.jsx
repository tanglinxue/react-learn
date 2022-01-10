import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";

class Count extends Component {
  increment = () => {
    const value = this.selectNumber.value;
    this.props.createIncrementAction(value * 1);
  };
  decrement = () => {
    const value = this.selectNumber.value;
    this.props.createDecrementAction(value * 1);
  };
  incrementOdd = () => {
    const value = this.selectNumber.value;
    if (this.props.count % 2 !== 0) {
      this.props.createIncrementAction(value * 1);
    }
  };
  incrementAsync = () => {
    const value = this.selectNumber.value;
    this.props.createIncrementAsyncAction(value * 1, 500);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>当前求和为:{this.props.count}</h1>
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

export default connect(
  (state) => ({ count: state }),
  {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction,
  }
  //   (dispatch) => ({
  //     jia: (number) => dispatch(createIncrementAction(number)),
  //     jian: (number) => dispatch(createDecrementAction(number)),
  //     jiaAsync: (number, time) =>
  //       dispatch(createIncrementAsyncAction(number, time)),
  //   })
)(Count);
