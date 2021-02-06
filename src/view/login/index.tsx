import React, { Component, useState } from 'react'
import style from './index.module.less'
import { Link } from 'react-router-dom'
import SsInput from './RtInput'
import RtButton from '../../components/RtButton'
import Toast from '../../components/RtToast'
import state from './data'
import { is_res } from '../../method'

import { set_login, set_register } from '../../api/login'

export default class Login extends Component<any> {
  state = state
  async click ( dome: boolean ) {
    if ( this.state.username === '' || this.state.password === '' ) return
    if ( this.state.name || this.state.pass ) return
    try {
      if ( dome ) {
        let res = await set_login( {
          username: this.state.username,
          password: this.state.password
        }
        )
        console.log( '登录 => ', res )
        if ( res.statusCode == 200 ) {
          Toast.loading( res.message )
          res = is_res( res )
          sessionStorage.setItem( 'token', res.token )
          sessionStorage.setItem( 'user_id', res.user.id )
          this.props.history.push( '/home' )
        } else {
          Toast.fail( res.message )
        }
      } else {
        if ( this.state.password !== this.state.newPass ) return
        let res = await set_register( {
          username: this.state.username,
          password: this.state.password,
          nickname: this.state.nickname
        }
        )
        if ( res.statusCode == 200 ) {
          Toast.success( res.message )
          this.setState( {
            rule: true
          } )
        } else { Toast.fail( res.message ) }
      }
    } catch ( error ) { console.log( error ) }
  }

  inputInck ( v: string, dome: boolean ) {
    this.setState( { nickname: v, nick: !dome } )
  }

  inputName ( v: string, dome: boolean ) {
    console.log( dome )
    this.setState( { username: v, name: !dome } )
  }

  inputPass ( v: string, dome: boolean ) {
    this.setState( { password: v, pass: !dome } )
  }

  inputNew ( v: string ) {
    this.setState( { newPass: v } )
    if ( this.state.password !== v ) this.setState( { show: false } )
    else this.setState( { show: true } )
  }

  isShow ( dome: boolean ) {
    if ( dome ) {
      this.setState( {
        rule: !this.state.rule,
        name: false,
        pass: false,
        show: true,
        username: '',
        password: '',
        newPass: ''
      } )
    } else {
      this.setState( {
        rule: !this.state.rule,
        name: false,
        pass: false,
        show: true
      } )

    }
  }

  render () {
    return (
      <div className={ style.login } >
        <header>
          <Link to='/home'>跳过</Link>
        </header>
        <div className={ style.logo }>
          <i className="iconfont iconnew"></i>
        </div>
        <div className={ style.content }>
          { !this.state.rule ?
            <SsInput
              type="text"
              rule={ /^\d{2,10}$/ }
              placeholder='请输入昵称'
              value={ this.state.nickname }
              click={ this.inputInck.bind( this ) }
            /> : ''
          }
          <SsInput
            type="text"
            rule={ /^1\d{4,10}$/ }
            placeholder='请输入账号'
            value={ this.state.username }
            click={ this.inputName.bind( this ) }
          />
          <SsInput
            type="password"
            rule={ /^\d{3,12}$/ }
            placeholder='请输入密码'
            value={ this.state.password }
            click={ this.inputPass.bind( this ) }
          />
          { !this.state.rule ?
            <SsInput
              type="password"
              placeholder='请确认密码'
              show={ this.state.show }
              value={ this.state.newPass }
              click={ this.inputNew.bind( this ) }
            /> : ''
          }
        </div>
        <div className={ style.register }>
          { this.state.rule ? '没有账号?去' : '已有账号?去' }
          <span onClick={ () => this.isShow( this.state.rule ) }>
            { this.state.rule ? '注册' : '登录' }
          </span>
        </div>
        <div className={ style.btn }>
          <RtButton
            name={ this.state.rule ? "登 录" : "注 册" }
            click={ () => this.click( this.state.rule ) }
          />
        </div>
      </div>
    )
  }
}
