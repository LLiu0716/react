import React, { lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { is_token } from '/@/method'

import { start, done } from 'nprogress'

const Error = lazy( () => import( '/@/view/error' ) )

/**
 * 渲染路由组件
 * @param router 路由列表
 */
export default function RouterView ( prpos: any ) {
  const { route } = prpos
  start()
  return (
    <Switch>
      <Route path='/' exact render={ () => <Redirect to='/home' /> } />
      { route.map( ( v: any, i: number ) => {
        return (
          <Route
            exact
            key={ i }
            path={ v.path }
            render={ props => {
              done()
              if ( v.meta ) {
                if ( !is_token() ) {
                  return <Redirect to={ `/login?url=${ props.match.url }` } />
                }
                return <v.component route={ v.childen } { ...props } />
              }
              return <v.component route={ v.childen } { ...props } />
            } }
          /> )
      } ) }
      <Route component={ Error } />
    </Switch>
  )
}
