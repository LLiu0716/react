import React from 'react'
import { withRouter } from 'react-router-dom'
import style from './index.module.less'

function SsHeader ( props: any ) {
  return (
    <header className={ style.header }>
      <i className="iconfont iconjiantou2"
        onClick={ () => props.history.goBack() }
      />
      <h3>{ props.title }</h3>
      <i className="iconfont"></i>
    </header >
  )
}

export default withRouter( SsHeader )