import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './index.css'

export default class Header extends Component {
  static propTypes = {
    addTodo:PropTypes.func.isRequired
  }
  handleKeyUp = (event)=>{
    if(event.keyCode === 13){
      const value = event.target.value
      if(value.trim() === ''){
       return alert('输入不能为空')
      }
      this.props.addTodo({
        name:value,
        id:nanoid(),
        done:false
      })
      event.target.value = ''
    }
  }
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}
