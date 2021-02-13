import React from 'react'
import style from './index.module.less'

import RtHeader from '../../../components/RtHeader'

import List from './components/list'

export default function Live () {
  return (
    <div className={ style.live }>
      <RtHeader title="我的关注" />
      <div className={ style.list }>
        <List />
      </div>
    </div>
  )
}
