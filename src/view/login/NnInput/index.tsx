import React, { Component } from 'react'
import style from './index.module.less'

interface Iprops {
  type: string
  placeholder: string
  value: string
  click: ( v: string, rule: boolean ) => void
  tip?: string
  rule?: RegExp
}

function NnInput ( props: Iprops ) {
  const click = ( e: any ) => {
    let value = e.target.value
    props.click( value, false )
  }
  return (
    <div className={ style.input }>
      <input
        type={ props.type }
        value={ props.value }
        placeholder={ props.placeholder }
        onChange={ event => click( event ) } />
      {props.rule ? ( props.rule.test( props.value ) ? '' : <p>{ props.tip }</p> ) : '' }
      {/* <p>{ props.tip }</p> */ }
    </div>
  )
}

export default NnInput
