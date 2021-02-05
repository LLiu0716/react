import React, { Component } from 'react'
import style from './index.module.less'
import { Link } from 'react-router-dom'
import NnInput from './NnInput'
import state from './data'

export default class Login extends Component {
  state = state

  inputName ( v: string, rule: boolean ) {
    console.log( '666', v )
    this.setState( { username: v, name: !rule } )
  }

  inputPass ( v: string, rule: boolean ) {
    this.setState( { password: v, pass: !rule } )
  }

  render () {
    return (
      <div className={ style.login }>
        <header className={ style.header }>
          <Link to="/home">跳过</Link>
        </header>
        <div className={ style.logo }>
          <i className='iconfont iconnew'></i>
        </div>
        <div className={ style.content }>
          <NnInput
            type="text"
            placeholder='请输入账号'
            tip='格式错误'
            rule={ /^1\d{4,10}$/ }
            value={ this.state.username }
            click={ this.inputName.bind( this ) } />
          <NnInput
            type="password"
            placeholder='请输入密码'
            tip='格式错误'
            rule={ /^\d{3,12}$/ }
            value={ this.state.password }
            click={ this.inputPass.bind( this ) } />
        </div>
        <div className={ style.gologin }>
          <button>登 录</button>
          <p>没有账号 , 去注册</p>
        </div>
      </div>
    )
  }
}