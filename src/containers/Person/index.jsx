import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    console.log(name, age);
    const personObj = { id: nanoid(), name, age };
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="输入名字"
          ref={(c) => (this.nameNode = c)}
        ></input>
        <input
          type="text"
          placeholder="输入年龄"
          ref={(c) => (this.ageNode = c)}
        ></input>
        <button onClick={this.addPerson}>添加</button>
        <ul>
          <li>名字1---年龄1</li>
        </ul>
      </div>
    );
  }
}
