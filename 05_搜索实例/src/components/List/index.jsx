import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
  render() {
    const {users,isFirst,isLoading,err} = this.props
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
