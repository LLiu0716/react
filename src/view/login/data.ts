interface Istate {
  username: string
  name: boolean
  password: string
  pass: boolean
  nickname: string
  nick: boolean
  newPass: string
  show: boolean
  rule: boolean
}

const state: Istate = {
  name: false,
  nick: false,
  pass: false,
  show: false,
  nickname: '',
  username: '',
  password: '',
  newPass: '',
  rule: true
}

export default state