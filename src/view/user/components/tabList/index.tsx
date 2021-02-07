import React from 'react'
import style from './index.module.less'
import { Link } from 'react-router-dom'

interface Ilist {
  title: string
  pash: string
  content?: string
}

export default function List ( props: Ilist ) {
  return (
    <Link className={ style.list } to={ props.pash }>
      <div className={ style.title }>{ props.title }</div>
      <div className={ style.content }>{ props.content }</div>
      <i className='iconfont iconjiantou1'></i>
    </Link>
  )
}
