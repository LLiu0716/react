import React, { Component } from 'react'
import style from './index.module.less'

import LazyLoad from 'react-lazyload'
import RtLoding from '../../../../../components/RtLoding'
import Item from '../item'
import { set_follows } from '../../../../../api/user/live'
import { is_res } from '/@/method'

import { I_arr } from '../../type'

export default class List extends Component {
  state: I_arr = {
    list: [],
  }

  async get_list () {
    try {
      let res = await set_follows()
      res = is_res( res )
      this.setState( {
        list: res
      } )
    } catch ( error ) { console.log( error ) }
  }

  componentDidMount () {
    this.get_list()
  }

  render () {
    const { list } = this.state
    return (
      <div className={ style.list } >
        {
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
            <RtLoding num={ 15 } />
        }
      </div>
    )
  }
}
