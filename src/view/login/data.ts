import { start } from "nprogress"

interface Istate {
  username: string
  name: boolean
  password: string
  pass: boolean
  newPass: string
  show: boolean
  rule: boolean
}

const state: Istate = {
  name: false,
  pass: false,
  show: false,
  username: '',
  password: '',
  newPass: '',
  rule: true
}

export default state