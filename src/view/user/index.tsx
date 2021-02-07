import React, { Component } from 'react'
import style from './index.module.less'
import { Link } from 'react-router-dom'

import RtTitle from '../../components/RtTitle'
import RtFooter from '../../components/RtFooter'
import TabList from './components/tabList'

import { is_moment, is_url } from '../../method'

const i_nan = {
  color: '#75b9eb'
}

const i_nv = {
  color: '#ff3ec9'
}

const list = [
  { title: '我的关注', pash: '/user/live', content: '关注的人' },
  { title: '我的跟帖', pash: '/user/follow', content: '跟帖/回复' },
  { title: '我的收藏', pash: '/user/enshrine', content: '文档/视频' },
  { title: '设置', pash: '/user/set', content: '' }
]

export default class User extends Component {
  state: any = {
    user: {},
    time: new Date(),
    head_img: ''
  }
  async componentDidMount () {
    const id = localStorage.getItem( 'user_id' )
    if ( id ) {
      try {
        // let res = await ss_user( id )
        // console.log( 'user => ', res )
        // this.setState( {
        //   user: res,
        //   time: is_moment( res.create_date ),
        //   head_img: `${ process.env.NODE_ENV_URL }${ res.head_img }`
        // } )
      } catch ( error ) { }
    }
  }

  render () {
    const { user, time, head_img } = this.state
    return (
      <div className={ style.user }>
        <RtTitle title='个人中心' />
        <Link className={ style.nick } to='/user/set'>
          <img src={ is_url( head_img ) } />
          <div className={ style.nick_content }>
            <div className={ style.nick_t }>
              <span className={ style.t_name }>
                <b>{ user.nickname || '昵称' }</b>
              </span>
              { user.gender == 1 ?
                <i className="iconfont iconxingbienan" style={ i_nan }></i> :
                <i className="iconfont iconxingbienv" style={ i_nv }></i>
              }
            </div>
            <div className={ style.nick_b }>
              { is_moment( time ) }
            </div>
          </div>
          <i className='iconfont iconjiantou1'></i>
        </Link>
        <div className={ style.content }>
          { list.map( ( v, i ) => {
            return (
              <TabList
                title={ v.title }
                content={ v.content }
                pash={ v.pash }
                key={ i }
              />
            )
          } ) }
        </div>
        <RtFooter />
      </div >
    )
  }
}
