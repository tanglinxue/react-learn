import React, { Component } from "react";


export default class Detail extends Component {
  render() {
    console.log(this.props)
    const {id,title } = this.props.location.state || {}
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:</li>
      </ul>
    );
  }
}
