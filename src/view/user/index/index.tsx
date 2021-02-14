import React, { Component } from 'react'
import style from './index.module.less'
import { Link } from 'react-router-dom'
import LazyLoad from 'react-lazyload'

import RtTitle from '/@/components/RtTitle'
import RtFooter from '/@/components/RtFooter'
import RtButton from '/@/components/RtButton'
import TabList from '../components/tabList'

import {
  is_moment,
  is_url,
  alert,
  Toast,
  is_res,
  APP_REACT_ID,
  APP_REACT_TOKEN
} from '/@/method'

import { i_nan, i_nv, get_user } from '../method'

const list = [
  { title: '我的关注', pash: '/user/live', content: '关注的人' },
  { title: '我的跟帖', pash: '/user/follow', content: '跟帖/回复' },
  { title: '我的收藏', pash: '/user/enshrine', content: '文档/视频' },
  { title: '设置', pash: '/user/set', content: '' }
]

export default class User extends Component<any> {
  state = {
    time: Date.now(),
    head_img: 'https://img.yzcdn.cn/vant/apple-8.jpg',
    gender: 1,
    nickname: '昵称',
    id: ''
  }

  async is_user () {
    try {
      const id: string = sessionStorage.getItem( APP_REACT_ID ) || ''
      if ( id ) {
        let res = await get_user()
        res = is_res( res )
        this.setState( {
          gender: res.gender,
          nickname: res.nickname,
          time: res.create_date,
          head_img: res.head_img
        } )
      }
    } catch ( error ) { console.log( error ) }
  }

  componentDidMount () {
    this.is_user()
    this.setState( {
      id: sessionStorage.getItem( APP_REACT_ID ) || ''
    } )
  }

  out () {
    alert( '提示', '你确定要退出吗 ?', [
      { text: '取消' },
      {
        text: '确定',
        onPress: () =>
          new Promise( resolve => {
            Toast.info( '退出成功', 1 )
            sessionStorage.removeItem( APP_REACT_ID )
            sessionStorage.removeItem( APP_REACT_TOKEN )
            setTimeout( resolve, 100 )
            console.log( this.props )
            this.props.history.push( '/login' )
          } )
      }
    ] )
  }

  render () {
    const { gender, nickname, time, head_img, id } = this.state
    return (
      <div className={ style.user }>
        <RtTitle title='个人中心' />
        <LazyLoad height={ 300 }>
          <Link className={ style.nick } to='/user/set'>
            <img src={ is_url( head_img ) } />
            <div className={ style.nick_content }>
              <div className={ style.nick_t }>
                { gender ?
                  <i className='iconfont iconxingbienan' style={ i_nan }></i> :
                  <i className='iconfont iconxingbienv' style={ i_nv }></i>
                }
                <b className={ style.t_name }>{ nickname }</b>
              </div>
              <div className={ style.nick_b }>{ is_moment( time ) }</div>
            </div>
            <i className='iconfont iconjiantou1'></i>
          </Link>
        </LazyLoad>
        <div className={ style.content }>
          { list.map( v => {
            return (
              <TabList
                title={ v.title }
                content={ v.content }
                pash={ v.pash }
                key={ v.pash }
              />
            )
          } ) }
        </div>
        <div className={ style.out }>
          { id ?
            <RtButton
              name='退 出'
              click={ () => this.out() }
            /> :
            <Link to='/login' className={ style.login }>
              还没有登录 ?<span> 去登录</span>
            </Link>
          }
        </div>
        <RtFooter />
      </div>
    )
  }
}
