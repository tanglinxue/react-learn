//引入react核心库
import React from 'react'
//引入ReactDOM
import reactDom from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
//引入App
import App from './App'
reactDom.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>, document.getElementById('root'))
// 渲染App到页面
store.subscribe(()=>{
  reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'))
})

