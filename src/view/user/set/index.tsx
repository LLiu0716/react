import React, { Component } from 'react'
import style from './index.module.less'

import { is_res, APP_REACT_ID } from '../../../method'
import { get_user, go_login } from '../method'

import RtHeader from '../../../components/RtHeader'
import RtLoding from '../../../components/RtLoding'
import RtItem from './components/item'

export default class User extends Component<any> {
  state = {
    show: false,
    user: {} as any
  }
  async is_user () {
    const id: string = sessionStorage.getItem( APP_REACT_ID ) || ''
    try {
      if ( id ) {
        let res = await get_user()
        res = is_res( res )
        console.log( res )
        this.setState( {
          show: true,
          user: res
        } )
      }
    } catch ( error ) { console.log( error ) }
  }

  componentDidMount () {
    const show: boolean = go_login()
    if ( show ) {
      this.is_user()
    } else this.props.history.push( '/login' )
  }

  render () {
    let { show, user } = this.state
    return (
      <div className={ style.set } >
        <RtHeader title="设置" />
        <div className={ style.content }>
          {/* 异步数据 , 动态渲染 , 所以会产生空白期 , 空白期使用 loding 页面 */ }
          { show ?
            <RtItem user={ user } /> :
            <RtLoding num={ 5 } />
          }
        </div>
      </div>
    )
  }
}
