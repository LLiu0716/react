import React, { Component } from 'react'
import { Button } from 'antd-mobile'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Button type="primary">primary</Button>
        <Button type="warning">warning</Button>
        <Button loading>loading button</Button>
      </div>
    )
  }
}