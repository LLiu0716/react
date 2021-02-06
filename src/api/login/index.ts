import request from "../instance"
import url from "./url"

interface I_data {
  nickname?: string
  username: string
  password: string
}

/**
 * 登录函数
 * @param data 登录信息
 */
export const set_login = async ( data: I_data ) => {
  let res: any = await request.post( url.Login, data )
  return res
}

/**
 * 注册函数
 * @param data 注册信息
 */
export const set_register = async ( data: I_data ) => {
  let res: any = await request.post( url.Register, data )
  return res
}
