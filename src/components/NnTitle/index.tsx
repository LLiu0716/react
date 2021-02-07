import React from 'react'
import style from './index.module.less'

interface Ititle {
  title: string
}

const NnHeader = ( props: Ititle ) => {
  return (
    <header className={ style.header }>
      <h2 className={ style.title }>{ props.title }</h2>
    </header>
  )
}

export default NnHeader


// import { withRouter } from 'react-router-dom'
// export default withRouter( NnHeader )
