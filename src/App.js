//引入react核心库
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
// 创建并暴露
export default class App extends Component {
  state = {
    todos:[{
      id:'001',
      name:'吃饭',
      done:true
    },{
      id:'002',
      name:'睡觉',
      done:false
    },{
      id:'003',
      name:'打豆豆',
      done:false
    }]
  }
  addTodo = (todoObj)=>{
    const {todos} = this.state
    this.setState({
      todos:[todoObj,...todos]
    })
  }
  updateTodo = (id,done)=>{
    const {todos} = this.state
    const newTodos = todos.map(item=>{
      if(item.id === id) return {...item,done}
      return item
    })
    this.setState({
      todos:newTodos
    })
  }
  deleteTodo = (id)=>{
    const {todos} = this.state
    
    this.setState({
      todos:todos.filter(item=>item.id!==id)
    })
  }
  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          <Footer todos={todos}/>
        </div>
      </div>
    )
  }
}
