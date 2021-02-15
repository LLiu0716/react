import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import './css/iconfont.css'
import 'nprogress/nprogress.css'
import './method/rem'
import 'antd-mobile/dist/antd-mobile.css'
import App from './App'
// import { ReactRouter } from './router'

console.log( "基础信息", process.env )
// console.log( import.meta.env )

ReactDOM.render(
  <React.StrictMode>
    {/* <ReactRouter /> */ }
    <App />
  </React.StrictMode>,
  document.getElementById( 'root' )
)
