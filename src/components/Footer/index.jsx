import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  render() {
    const {todos} = this.props
    return (
      <div className="todo-footer">
      <label>
        <input type="checkbox"  />
      </label>
      <span>
        <span>已完成{todos.reduce((pre,todo)=>todo.done?pre+1:pre,0)}</span> / 全部{todos.length}
        {/* <span>已完成{todos.filter(item=>item.done).length}</span> / 全部{todos.length} */}
      </span>
      <button className="btn btn-danger">清除已完成任务</button>
    </div>
    )
  }
}
