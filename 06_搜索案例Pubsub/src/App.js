//引入react核心库
import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

// 创建并暴露
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    )
  }
}
