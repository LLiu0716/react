import React, { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from '../view/home'

const User = lazy( () => import( '../view/user' ) )
const Login = lazy( () => import( '../view/login' ) )
const Set = lazy( () => import( '../view/user/set' ) )
const Live = lazy( () => import( '../view/user/live' ) )
const Follow = lazy( () => import( '../view/user/follow' ) )
const Enshrine = lazy( () => import( '../view/user/enshrine' ) )

const list = [
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/user', component: User },
  { path: '/user/set', component: Set },
  { path: '/user/live', component: Live },
  { path: '/user/follow', component: Follow },
  { path: '/user/enshrine', component: Enshrine }
]

export const ReactRouter = () => {
  return (
    <BrowserRouter>
      <HashRouter>
        <Suspense fallback='正在加载中'>
          <Switch>
            <Route exact path='/' render={ () => <Redirect to='/home' /> } />
            { list.map( ( v: any ) => {
              return (
                <Route
                  exact
                  path={ v.path }
                  component={ v.component }
                  key={ v.path }
                />
              )
            } ) }
          </Switch>
        </Suspense>
      </HashRouter>
    </BrowserRouter>
  )
}