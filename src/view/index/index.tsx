import React, { Component } from 'react'
import RtFooter from '../../components/RtFooter'

import { Button } from 'antd-mobile'

// interface Props {
//   list: { age: number; id: number; name: string }[]
//   click: (id: number) => void
// }

export default class Index extends Component {

  render () {
    return (
      <div>
        Index
        <Button>default</Button>

        <Button type="primary">primary</Button>

        <Button type="warning">warning</Button>

        <Button loading>loading button</Button>
        <Button icon="check-circle-o" inline size="small" style={ { marginRight: '4px' } }>with icon and inline</Button>
        <Button icon="check-circle-o" inline size="small">with icon and inline</Button>
        <RtFooter />
      </div>
    )
  }
}
