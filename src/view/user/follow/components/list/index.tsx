import React, { Component } from 'react'
import style from './index.module.less'

import LazyLoad from 'react-lazyload'
import RtLoding from '/@/components/RtLoding'
import Item from '../item'
import { set_comments } from '/@/api/user/follow'
import { is_res } from '/@/method'

import { I_arr } from '/@/types'

export default class List extends Component {
  state = {
    params: {
      pageSize: 10,
      pageIndex: 1
    },
    list: [],
    show: false
  }

  async get_list () {
    try {
      let res = await set_comments( this.state.params )
      res = is_res( res )
      console.log( 'res', res )
      this.setState( {
        list: res,
        show: true
      } )
    } catch ( error ) { console.log( error ) }
  }

  componentDidMount () {
    this.get_list()
  }

  render () {
    const { list, show } = this.state
    return (
      <div className={ style.list } >
        {
          // 获取数据才渲染组件
          show ? (
            // 获取数据后是否有需要的数据 ?
            list.length ?
              list.map( ( v, i ) => {
                return (
                  <LazyLoad height={ 100 } key={ i }>
                    <Item
                      item={ v }
                      i={ i + 1 }
                    />
                  </LazyLoad>
                )
              } ) :
              <p className={ style.p }>当前还没有任何跟帖</p>
          ) :
            // 未获取数据前不渲染
            <RtLoding num={ 15 } />
        }
      </div>
    )
  }
}
