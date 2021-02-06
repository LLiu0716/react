import React from 'react'
import { withRouter } from 'react-router-dom'
import style from './index.module.less'

function SsHeader ( props: any ) {
  return (
    <header className={ style.header }>
      <i className="iconfont icon-arrow-left" onClick={ () => props.history.goBack() }></i>
      <h3>{ props.title }</h3>
      <i className="iconfont"></i>
    </header >
  )
}

export default withRouter( SsHeader )