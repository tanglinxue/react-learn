//引入react核心库
import React, { Component } from 'react'
import axios from 'axios'

import './App.css'
// 创建并暴露
export default class App extends Component {
  componentDidMount(){
    axios.get('/api1/students').then(
      res => {console.log(res.data)},
      err=>{console.log('失败了')}
    )
    axios.get('/api2/cars').then(
      res => {console.log(res.data)},
      err=>{console.log('失败了')}
    )
  }

  render() {
    return (
      <div>你好</div>
    )
  }
}
