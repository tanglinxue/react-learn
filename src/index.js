//引入react核心库
import React from 'react'
//引入ReactDOM
import reactDom from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
//引入App
import App from './App'
import { Provider } from 'react-redux'
reactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root'))
