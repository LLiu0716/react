import React, { Component } from 'react'
import style from './index.module.less'
import RtFooter from '../../components/RtFooter'
import userImg from '../../assets/tab/user-unlogin.png'
import List from './list'
import { YMD } from '../../moment'


const i_nan = {
  color: '#75b9eb'
}

const i_nv = {
  color: '#ff3ec9'
}


export default class User extends Component {
  state: any = {
    user: {},
    time: '',
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
        //   time: YMD( res.create_date ),
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
        <div className={ style.name }>
          <img src={ head_img || userImg } alt="" />
          <div className={ style.name_us }>
            <div className={ style.name_us_t }>
              <span className={ style.t_name }>昵称 : <b>{ user.nickname || '请输入一个昵称' }</b></span>
              { user.gender === 1 ?
                <i className="iconfont icon-xingbie" style={ i_nan }></i> :
                <i className="iconfont icon-xingbie1" style={ i_nv }></i>
              }
            </div>
            <div className={ style.name_us_b }>
              <div className="b_time">生日 : { time || '请输入生日' }</div>
            </div>
          </div>
          <i className='iconfont icon-arrow-right'></i>
        </div>
        <div className={ style.w }>
          <List ></List>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
        </div>
        <RtFooter />
      </div >
    )
  }
}
