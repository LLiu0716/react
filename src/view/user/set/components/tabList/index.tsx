import React from 'react'
import style from './index.module.less'

interface Ilist {
  title: string
  value?: string
}

export default function List ( props: Ilist ) {
  return (
    <div className={ style.list } >
      <div className={ style.title }>{ props.title }</div>
      <div className={ style.content }>{ props.value }</div>
      {/* <i className='iconfont iconjiantou1'></i> */ }
    </div>
  )
}
