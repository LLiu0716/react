import React from 'react'
import style from './index.module.less'

import RtHeader from '../../../components/RtHeader'
import RtLoding from '../../../components/RtLoding'

export default function List ( props: any ) {

  return (
    <div className={ style.list }>
      <RtHeader title="我的跟帖" />
      <i className='iconfont icon-arrow-right'></i>
    </div>
  )
}
