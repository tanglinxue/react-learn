import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
  state={
    mouse:false
  }
  handleMouse = (flag)=>{
    return ()=>{
      this.setState({
        mouse:flag
      })
    }
  }
  handleCheck = (event)=>{
    this.props.updateTodo(this.props.id,event.target.checked)
  }
  handleDelete=()=>{ 
    if(window.confirm('确定删除吗')){
      this.props.deleteTodo(this.props.id)
    }
    
  }
  render() {
    const {name,done} = this.props
    const {mouse} = this.state
    return (
      <li onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)} style={{backgroundColor:mouse?'#ddd':'white'}}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck}/>
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse?"block":"none" }} onClick={this.handleDelete}>删除</button>
      </li>
    )
  }
}
