import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {
  search = ()=>{
    const {keyWordEle:{value:keyWord}} = this
    PubSub.publish('sendData',{isLoading:true,isFirst:false})
    axios.get(`/api1/search/users?q=${keyWord}`).then(
      res=>{
        // console.log(res.data)
        // this.props.updateAppState({users:res.data.items,isLoading:false})
        PubSub.publish('sendData',{users:res.data.items,isLoading:false})

      },
      err=>{console.log(err)
        
        //this.props.updateAppState({err:err.message,isLoading:false})
        PubSub.publish('sendData',{err:err.message,isLoading:false})
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input type="text" placeholder="输入关键词点击搜索" ref={c=>this.keyWordEle=c}/>&nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
