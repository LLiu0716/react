import React from 'react'
import style from './index.module.less'
import TabList from '../tabList'

interface Ilist {
  user: any
}


export default function List ( props: Ilist ) {
  let list = [
    { title: '昵称', value: props.user.nickname },
    { title: '密码', value: '******' },
    { title: '性别', value: props.user.gender == 1 ? '男' : '女' }
  ]
  return (
    <div className={ style.item }>
      {list.map( v => {
        return (
          <TabList key={ v.title } title={ v.title } value={ v.value } />
        )
      } )
      }
    </div>
  )
}
