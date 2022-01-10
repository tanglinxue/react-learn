import React, { Component } from "react";
import Detail from "./Detail";
import { Link, Route } from "react-router-dom";

export default class Message extends Component {
  state = {
    messageArr: [
      {
        id: "01",
        title: "消息1",
      },
      {
        id: "02",
        title: "消息2",
      },
      {
        id: "03",
        title: "消息3",
      },
    ],
  };
  replaceShow = (id,title)=>{
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
  }
  pushShow = (id,title)=>{
    this.props.history.push(`/home/message/detail/${id}/${title}`)
  }
  back = ()=>{
    this.props.history.goBack()
  }
  forward = ()=>{
    this.props.history.goForward()
  }
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((msgItem) => (
            <li key={msgItem.id}>
              <Link to={`/home/message/detail/${msgItem.id}/${msgItem.title}`}>
                {msgItem.title}
              </Link>
              <button onClick={()=>{this.pushShow(msgItem.id,msgItem.title)}}>push查看</button>
              <button onClick={()=>{this.replaceShow(msgItem.id,msgItem.title)}}>replace查看</button>
              &nbsp;&nbsp;
            </li>
          ))}
        </ul>
        <hr></hr>
        <Route path="/home/message/detail/:id/:title" component={Detail} />
        <button onClick={()=>{this.back()}}>回退</button>
        <button onClick={()=>{this.forward()}}>前进</button>
      </div>
    );
  }
}
