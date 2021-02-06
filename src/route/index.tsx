import React, { lazy, Suspense } from 'react'
import { BrowserRouter, HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from "../views/home"

/** 异步加载 */
const User = lazy(() => import('../views/user'))
const Login = lazy(() => import('../views/login'))
const Index = lazy(() => import('../views/index'))

export const ReactRouter = () => {
  return (
    <BrowserRouter>
      <HashRouter>
        <Suspense fallback='正在加载中'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/home' />} />
            <Route exact path="/user" component={User} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/index" component={Index} />
          </Switch>
        </Suspense>
      </HashRouter>
    </BrowserRouter>
  )
}

// export default ReactRouter
