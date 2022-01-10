//引入react核心库
import React from 'react'
//引入ReactDOM
import reactDom from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
//引入App
import App from './App'

// 渲染App到页面
reactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, document.getElementById('root'))
