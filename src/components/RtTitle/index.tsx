import React from 'react'
import style from './index.module.less'

interface Ititle {
  title: string
}

const RtHeader = ( props: Ititle ) => {
  return (
    <header className={ style.header }>
      <h2 className={ style.title }>{ props.title }</h2>
    </header>
  )
}

export default RtHeader


// import { withRouter } from 'react-router-dom'
// export default withRouter( RtHeader )
