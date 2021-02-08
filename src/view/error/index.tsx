import React from 'react'
import { withRouter } from 'react-router-dom'

function Error ( props: any ) {
  return (
    <div onClick={ () => props.history.goBack() }>404 页面丢失</div>
  )
}

export default withRouter( Error )
