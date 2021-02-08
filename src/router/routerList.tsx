import { lazy } from 'react'

import Home from '../view/home'
const Login = lazy( () => import( '../view/login' ) )
const Users = lazy( () => import( '../view/user' ) )
const User = lazy( () => import( '../view/user/index' ) )
const Set = lazy( () => import( '../view/user/set' ) )
const Live = lazy( () => import( '../view/user/live' ) )
const Follow = lazy( () => import( '../view/user/follow' ) )
const Enshrine = lazy( () => import( '../view/user/enshrine' ) )

const list = [
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  {
    path: '', component: Users, childen: [
      { path: '/user', component: User },
      { path: '/user/set', component: Set, meta: true },
      { path: '/user/live', component: Live, meta: true },
      { path: '/user/follow', component: Follow, meta: true },
      { path: '/user/enshrine', component: Enshrine, meta: true }
    ]
  }
]

export default list
