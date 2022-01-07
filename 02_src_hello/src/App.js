//创建外壳组件App

//引入react核心库
import React,{Component} from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
// 创建并暴露
export default class App extends Component{
  render(){
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}
