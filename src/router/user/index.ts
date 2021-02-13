import { lazy } from 'react'

const User = lazy( () => import( '/@/view/user/index' ) )
const Set = lazy( () => import( '/@/view/user/set' ) )
const Live = lazy( () => import( '/@/view/user/live' ) )
const Follow = lazy( () => import( '/@/view/user/follow' ) )
const Enshrine = lazy( () => import( '/@/view/user/enshrine' ) )

const user = [
  { path: '/user/', component: User },
  { path: '/user/set', component: Set, meta: true },
  { path: '/user/live', component: Live, meta: true },
  { path: '/user/follow', component: Follow, meta: true },
  { path: '/user/enshrine', component: Enshrine, meta: true }
]

export default user
