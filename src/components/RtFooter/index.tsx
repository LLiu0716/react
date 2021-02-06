import React from 'react'
import style from "./index.module.less"
import tab_home_normal from "../../assets/tab/tab_home_normal@2x.png"
import tab_home_selecte from "../../assets/tab/tab_home_selected@2x.png"
import tab_my_normal from "../../assets/tab/tab_my_normal@2x.png"
import tab_my_selecte from "../../assets/tab/tab_my_selected@2x.png"
import tab_shop_normal from "../../assets/tab/tab_shop_normal@2x.png"
import tab_shop_selecte from "../../assets/tab/tab_shop_selected@2x.png"
import { Link, withRouter } from 'react-router-dom'

const list = [
  {
    src: '/home',
    ok: tab_home_selecte,
    no: tab_home_normal,
    name: '首 页'
  },
  {
    src: '/index',
    ok: tab_shop_selecte,
    no: tab_shop_normal,
    name: '商 城'
  },
  {
    src: '/user',
    ok: tab_my_selecte,
    no: tab_my_normal,
    name: '我 的'
  }
]

function SsFooter (props: any) {
  return (
    <footer className={style.footer}>
      <div className={style.box}>
        {list.map(v => {
          return (
            <Link to={v.src} className={style.item} key={v.src}>
              <img src={props.location.pathname == v.src ? v.ok : v.no} alt="" />
              <span className={props.location.pathname !== v.src ? style.color : ''}>{v.name}</span>
            </Link>
          )
        })}
      </div>
    </footer>
  )
}

export default withRouter(SsFooter)