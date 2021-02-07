import React, { Component } from 'react'
import style from './index.module.less'

import { set_User } from '../../../api/user'
import { is_res } from '../../../method'

import RtHeader from '../../../components/RtHeader'
import RtLoding from '../../../components/RtLoding'
import RtItem from './components/item'

export default class User extends Component {
  state = {
    show: false,
    user: {} as any
  }
  async get_user () {
    const id: string = sessionStorage.getItem( 'user_id' ) || ''
    try {
      if ( id ) {
        let res = await set_User( id )
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
    this.get_user()
  }

  render () {
    let { show, user } = this.state
    return (
      <div className={ style.set } >
        <RtHeader title="设置" />
        {!show ?
          <div className={ style.content }>
            <RtItem user={ user } />
          </div> :
          <div className={ style.content }>
            <RtLoding num={ 5 } />
          </div> }
      </div>
    )
  }
}
