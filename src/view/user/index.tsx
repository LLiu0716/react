import React, { Component } from 'react'
import style from './index.module.less'
import RtFooter from '../../components/RtFooter'
import List from './list'
import { is_moment, is_url } from '../../method'


const i_nan = {
  color: '#75b9eb'
}

const i_nv = {
  color: '#ff3ec9'
}


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
        <header>
          <h2 className={ style.title }>个人中心</h2>
        </header>
        <div className={ style.nick }>
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
        </div>
        <div className={ style.content }>
          <List />
          <List />
          <List />
          <List />
          <List />
        </div>
        <RtFooter />
      </div >
    )
  }
}
