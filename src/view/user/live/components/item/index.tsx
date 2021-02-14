import React, { Component } from 'react'
import style from './index.module.less'

import { Button } from 'antd-mobile';

import { is_moment, is_url, Toast } from '/@/method'

import { I_list } from '/@/types'

import { i_nan, i_nv } from '../../../method'

import { set_user_follows, set_user_unfollow } from '/@/api/user/live'

export default class item extends Component<I_list> {
  state = {
    text: '取消关注',
    show: true
  }

  componentDidMount () {
    // 如果没有数据 , 传到 props 里的 i 就是 0 , 也可以判断对象是否为空
    // 注意 , 数组无法进行为空判断 , 只能判断数组长度是否为 0
    if ( this.props.i == 0 ) {
      this.all_live()
    }
  }

  async live ( id: number, text: string ) {
    if ( this.state.show ) {
      try {
        let res: any
        switch ( text ) {
          case '取消关注':
            res = await set_user_unfollow( id )
            if ( res.statusCode == 200 ) {
              Toast.info( res.message )
              this.setState( { text: '关注', show: false } )
            } else { Toast.info( res.message ) }
            break
          default:
            res = await set_user_follows( id )
            if ( res.statusCode == 200 ) {
              Toast.success( res.message )
              this.setState( { text: '取消关注', show: false } )
            } else { Toast.info( res.message ) }
            break
        }
        // 避免短时间内重复多次点击按钮
        window.setTimeout( () => { this.setState( { show: true } ) }, 5000 )
      } catch ( error ) { console.log( error ) }
    }
  }

  async all_live () {
    try {
      for ( let i = 0; i < 100; i++ ) {
        await set_user_follows( i )
        // await set_user_unfollow( i )
      }
      this.props.click( 'val' )
    } catch ( error ) { console.log( error ) }
  }

  render () {
    const { nickname, create_date, head_img, gender, id } = this.props.item
    const i = this.props.i
    return (
      <div
        className={ style.item }
        style={ i % 2 ?
          { backgroundColor: '#f3f3f3' } :
          { backgroundColor: '#fff' }
        }
      >
        <img src={ is_url( head_img ) } />
        <div className={ style.nick_content }>
          <div className={ style.nick_t }>
            { gender ?
              <i className='iconfont iconxingbienan' style={ i_nan }></i> :
              <i className='iconfont iconxingbienv' style={ i_nv }></i>
            }
            <span className={ style.t_name }>{ nickname }</span>
          </div>
          <div className={ style.nick_b }>{ is_moment( create_date ) }</div>
        </div>
        <Button
          type="ghost"
          inline
          size="small"
          onClick={ () => this.live( id, this.state.text ) }
        >
          { this.state.text }
        </Button>
      </div >
    )
  }
}