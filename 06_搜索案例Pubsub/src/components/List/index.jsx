import React, { Component } from 'react'
import './index.css'
import PubSub from 'pubsub-js'

export default class List extends Component {
  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    err:''
  }
  componentDidMount(){
   this.token =  PubSub.subscribe('sendData',(_,data)=>{
      console.log(this)
      console.log(data)
      this.setState(data)
    })
  }
  componentWillUnmount(){
    PubSub.unsubscribe(this.token)
  }
  render() {
    const {users,isFirst,isLoading,err} = this.state
    return (
      <div className="row">
        {
          isFirst?<h2>欢迎使用</h2>:
          isLoading?<h2>loading...</h2>:
          err?<h2 style={{color:'red'}}>{err}</h2>:
          users.map(user=>{
            return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img src={user.avatar_url} style={{ width: "100px" }} alt='head_pic' />
                </a>
                <p className="card-text">{user.login}</p>
              </div>
            )
          })
        }  
      </div>
    )
  }
}
