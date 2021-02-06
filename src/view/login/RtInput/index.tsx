import React, { useState } from 'react'
import style from './index.module.less'

interface Props {
  type: string
  value: string
  placeholder: string
  rule?: RegExp
  show?: boolean
  click: ( v: string, rule: boolean ) => void
}

export default function Input ( props: Props ) {
  const [ count, setCount ] = useState( { show: true } )
  const myClick = ( e: any ) => {
    let val = e.currentTarget.value
    let done: boolean = true
    if ( props.rule ) {
      if ( props.rule.test( val ) ) {
        setCount( { show: true } )
      } else {
        setCount( { show: false } )
      }
      done = props.rule.test( val )
    }
    props.click( val, done )
  }

  return (
    <div className={ style.input }>
      <input
        value={ props.value }
        type={ props.type }
        placeholder={ props.placeholder }
        onChange={ ( event ) => { myClick( event ) } } />
      {props.rule ? <p className={ count.show ? style.noShow : style.show }>格式错误</p> : <p className={ props.show ? style.noShow : style.show }>密码不一致</p> }
    </div>
  )
}
