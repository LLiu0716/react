import React from 'react'
import style from './index.module.less'

import { is_moment } from '/@/method'

// export default class item extends Component<any> {
export default function Item ( props: any ) {
  // render () {
  const { item } = props
  const i = props.i
  return (
    <div
      className={ style.item }
      style={ i % 2 ?
        { backgroundColor: '#f3f3f3' } :
        { backgroundColor: '#fff' }
      }
      onClick={ () => { console.log( 'id', item.post.id ) } }
    >
      <div className={ style.t }>
        { is_moment( item.create_date, 'YYYY-MM-DD kk:mm' ) }
      </div>
      <div className={ style.c }>
        { item.parent ? (
          <div className={ style.c_c }>
            <div className={ style.c_name }>
              <span>回复 : </span>
              <span>{ item.parent?.user?.nickname }</span>
            </div>
            <p className='one'>{ item.parent?.content }</p>
          </div>
        ) : null
        }
        <p className='one'>{ item.content }</p>
      </div>
      <div
        className={ style.b }
      >
        <p className='one'>{ item.post.title }</p>
        <i className='iconfont iconjiantou1'></i>
      </div>
    </div >
  )
  // }
}