import React, { Component } from "react";
import { nanoid } from "nanoid";
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'

 class Person extends Component {
  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    console.log(name, age);
    const personObj = { id: nanoid(), name, age };
    this.props.createAddPersonAction(personObj)
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
         {
           this.props.persons.map(person=>{
             return <li key={person.id}>{person.name}-{person.age}</li>
           })
         }
        </ul>
      </div>
    );
  }
}
export default connect(
  state=>({
    persons:state.personReducer
  }),
  {
    createAddPersonAction
  }
)(Person)
