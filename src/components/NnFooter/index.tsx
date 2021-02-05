import React from 'react'
import { withRouter } from 'react-router-dom'
import header from './index.module.less'

function NnHeader ( props: any ) {
  return (
    <header className={ header.header }>
      <i className="iconfont iconjiantou2" onClick={ () => props.history.goBack() } />
      <h2> { props.title } </h2>
      <i className="iconfont"></i>
    </header>
  )
}

export default withRouter( NnHeader )
