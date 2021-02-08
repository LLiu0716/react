import React, { Suspense } from 'react'
import {
  BrowserRouter,
  HashRouter,
} from 'react-router-dom'

import routerList from './routerList'
import RouterView from './routerView'

export const ReactRouter = () => {
  return (
    <BrowserRouter>
      <HashRouter>
        <Suspense fallback='正在加载中'>
          <RouterView route={ routerList } />
        </Suspense>
      </HashRouter>
    </BrowserRouter>
  )
}