import { lazy } from 'react'

import Homes from '../view/home/index'

import home from './home'
import user from './user'
import App from '../App'

const Login = lazy( () => import( '../view/login' ) )
const Users = lazy( () => import( '../view/user/router' ) )

const list = [
  { path: '/home', component: Homes, childen: home },
  { path: '/login', component: Login },
  { path: '', component: Users, childen: user }
]

export default list
