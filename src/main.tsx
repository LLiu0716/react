import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import './css/iconfont.css'
import './method/rem'
import 'antd-mobile/dist/antd-mobile.css'
import App from './view/App'

console.log( "基础信息", process.env )

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById( 'root' )
)
