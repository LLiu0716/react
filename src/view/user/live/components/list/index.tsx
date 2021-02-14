import React, { Component } from 'react'
import style from './index.module.less'

import LazyLoad from 'react-lazyload'
import RtLoding from '/@/components/RtLoding'
import Item from '../item'
import { set_follows } from '/@/api/user/live'
import { is_res } from '/@/method'

import { I_arr } from '/@/types'

export default class List extends Component {
  state: I_arr = {
    list: [],
    show: false
  }

  async get_list () {
    try {
      let res = await set_follows()
      res = is_res( res )
      this.setState( {
        list: res,
        show: true
      } )
    } catch ( error ) { console.log( error ) }
  }

  list_length ( val: any ) {
    if ( val ) {
      this.get_list()
    }
  }

  componentDidMount () {
    this.get_list()
  }

  render () {
    const { list, show } = this.state
    const item: any = {}
    return (
      <div className={ style.list } >
        {
          // 获取数据才渲染组件
          show ? (
            /**
             * 获取数据后发现数据为空时 => 这里为了方便操作
             * 选择先在子组件里关注所有人 , 然后子组件重新触发父组件获取数据函数
             * 实际工作中给一个当前还未关注任何人的提示就可以了
             */
            list.length ?
              list.map( ( v, i ) => {
                return (
                  <LazyLoad height={ 100 } key={ i }>
                    <Item
                      item={ v }
                      i={ i + 1 }
                      click={ this.list_length.bind( this ) }
                    />
                  </LazyLoad>
                )
              } ) :
              <Item
                item={ item }
                i={ 0 }
                click={ this.list_length.bind( this ) }
              />
          ) :
            // 未获取数据前不渲染
            <RtLoding num={ 15 } />
        }
      </div>
    )
  }
}
