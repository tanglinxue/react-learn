//引入react核心库
import React,{Component} from 'react'
import './index.css'

// 创建并暴露
export default class Hello extends Component{
  render(){
    return (
      <h2 className='title'>
        hello,react4
      </h2>
    )
  }
}
