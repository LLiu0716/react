import React from 'react'
import style from "./index.module.less"
import home from '../../img/tab/home.svg'
import home_click from '../../img/tab/home_click.svg'
import user from '../../img/tab/user.svg'
import user_click from '../../img/tab/user_click.svg'
import { Link, withRouter } from 'react-router-dom'

const list = [
  {
    src: '/home',
    no: home,
    ok: home_click,
    name: '首 页'
  },
  {
    src: '/user',
    no: user,
    ok: user_click,
    name: '我 的'
  }
]

function SsFooter ( props: any ) {
  return (
    <footer className={ style.footer }>
      <div className={ style.box }>
        { list.map( v => {
          return (
            <Link to={ v.src } className={ style.item } key={ v.src }>
              <img src={ props.location.pathname == v.src ? v.ok : v.no } />
              <span className={ props.location.pathname !== v.src ? style.color : '' }>{ v.name }</span>
            </Link>
          )
        } ) }
      </div>
    </footer>
  )
}

export default withRouter( SsFooter )