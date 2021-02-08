import React, { Component } from 'react'
import style from './index.module.less'

import RtTitle from '../../../components/RtTitle'
import RtFooter from '../../../components/RtFooter'


// import { home } from "../../api"


// interface Props {
//   list: { age: number; id: number; name: string }[]
//   click: (id: number) => void
// }


export default class Home extends Component<any> {
  async componentDidMount () {
    // let res = await home()
    console.log( 'res', this.props.route )
  }

  render () {
    return (
      <div>
        <RtTitle title='首 页' />
        Home
        <RtFooter />
      </div>
    )
  }
}
