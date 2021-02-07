import React from 'react'
import style from './index.module.less'
import { Link } from 'react-router-dom'

interface Ilist {
  title: string
  value?: string
}

export default function List ( props: Ilist ) {
  return (
    <div className={ style.list } >
      <div className={ style.title }>{ props.title }</div>
      <div className={ style.content }>{ props.value }</div>
    </div>
  )
}
