import React, { Component } from "react";
import qs from 'querystring'

export default class Detail extends Component {
  render() {
    const search = qs.parse(this.props.location.search.slice(1));
    console.log(search)
    const { id, title } = search
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:</li>
      </ul>
    );
  }
}
