import React, { lazy, Suspense } from 'react'
import { BrowserRouter, HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from '../view/home'

const User = lazy( () => import( '../view/user' ) )
const Login = lazy( () => import( '../view/login' ) )

export const ReactRouter = () => {
  return (
    <BrowserRouter>
      <HashRouter>
        <Suspense fallback='正在加载中'>
          <Switch>
            <Route exact path='/' render={ () => <Redirect to='/login' /> } />
            <Route exact path="/user" component={ User } />
            <Route exact path="/home" component={ Home } />
            <Route exact path="/login" component={ Login } />
          </Switch>
        </Suspense>
      </HashRouter>
    </BrowserRouter>
  )
}