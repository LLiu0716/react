import React from 'react'
import style from './index.module.less'

interface Iheader {
  name: string
  click: () => void
}

function SsHeader (props: Iheader) {
  return (
    <button className={style.btn_o} onClick={() => { props.click() }}>
      {props.name}
    </button >
  )
}

export default SsHeader