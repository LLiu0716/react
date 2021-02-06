
import React, { Component, Fragment } from 'react'
import './index.less'
import ReactDOM from 'react-dom'

let timer: any = null
class Toast extends Component {
  static info ( msg: string | "info", timeout: number = 2000 ) {
    init()
    setTime( timeout )
    ReactDOM.render(
      <Fragment>
        <span>{ msg }</span>
      </Fragment>,
      document.getElementById( 'dark-toast' )
    )
  }
  static success ( msg: string | "success", timeout: number = 2000 ) {
    init()
    setTime( timeout )
    ReactDOM.render(
      <Fragment>
        <i className="iconfont iconnew"></i>
        <span>{ msg }</span>
      </Fragment>,
      document.getElementById( 'dark-toast' )
    )
  }
  static fail ( msg: string | "fail", timeout: number = 2000 ) {
    init()
    setTime( timeout )
    ReactDOM.render(
      <Fragment>
        <i className="iconfont iconicon-test"></i>
        <span>{ msg }</span>
      </Fragment>,
      document.getElementById( 'dark-toast' )
    )
  }
  static warning ( msg: string | "warning", timeout: number = 2000 ) {
    init()
    setTime( timeout )
    ReactDOM.render(
      <Fragment>
        <i className="iconfont icon-warning-circle-fill"></i>
        <span>{ msg }</span>
      </Fragment>,
      document.getElementById( 'dark-toast' )
    )
  }
  static loading ( msg: string | "loading", status: boolean = true, ) {
    init()
    setLoading( status )
    setTime( 2000 )
    ReactDOM.render(
      <Fragment>
        <i className="iconfont iconshoucang rotate-loop"></i>
        <span>{ msg }</span>
      </Fragment>,
      document.getElementById( 'dark-toast' )
    )
  }
}
function setLoading ( status: boolean ) {
  let dark_toast: any = document.getElementById( 'dark-toast' )
  if ( status )
    dark_toast.style.display = "block"
  else
    dark_toast.style.display = "none"
}
function init () {
  clearTimeout( timer )
  let dark_toast = document.getElementById( 'dark-toast' )
  if ( dark_toast ) {
    dark_toast.style.display = "block"
  } else {
    let div = document.createElement( "div" )
    div.setAttribute( "id", "dark-toast" )
    document.body.appendChild( div )
  }
}
function setTime ( timeout: number ) {
  timer = setTimeout( () => {
    let dark_toast = document.getElementById( 'dark-toast' )
    if ( dark_toast ) {
      dark_toast.style.display = "none"
    }
  }, timeout )
}
export default Toast
