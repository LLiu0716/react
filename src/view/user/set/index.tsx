import React from 'react'
import style from './index.module.less'

import RtHeader from '../../../components/RtHeader'



export default function List ( props: any ) {
  console.log( props )
  return (
    <div className={ style.list }>
      <RtHeader title="设置" />
    </div>
  )
}
