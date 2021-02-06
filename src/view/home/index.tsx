import React, { Component } from 'react'

import RtHeader from '../../components/RtHeader'
import RtFooter from '../../components/RtFooter'

// import { home } from "../../api"


// interface Props {
//   list: { age: number; id: number; name: string }[]
//   click: (id: number) => void
// }

export default class Home extends Component {
  async componentDidMount () {
    // let res = await home()
    // console.log('res', res)
  }

  render () {
    return (
      <div>
        <RtHeader title='首 页' />
        Home
        <RtFooter />
      </div>
    )
  }
}
